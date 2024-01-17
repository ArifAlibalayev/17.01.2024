import express from 'express'
import mongoose, { Schema } from 'mongoose';
import 'dotenv/config'
import cors from 'cors'


const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.port


mongoose.connect(process.env.DB_KEY)
  .then((console.log("connected")))
  .catch(() => console.error("failed"))

const clothesSchema = new Schema({
  title: String,
  img: String,
  desc: String
});

const clothesModel = mongoose.model('Clothes', clothesSchema);


app.get('/', async (req, res) => {
  try {
    const {title, img, desc} = req.body
    const element = await clothesModel.find({})
    res.send(element)
  } catch (error) {
    res.send('failed to get')
  }
})

app.get('/:id', async (req, res) => {
  try {
    const {id} = req.params
    const element = await clothesModel.findById(id)
    res.send(element)
  } catch (error) {
    res.send('failed to get')
  }
})

app.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params
    const element = await clothesModel.findByIdAndDelete(id)
    res.send("deleted")
  } catch (error) {
    res.send('failed to delete')
  }
})

app.post('/', async (req, res) => {
  try {
    const {title, img, desc} = req.body
    const newElement = await clothesModel({title, img, desc})
    await newElement.save()
    res.send(newElement)
  } catch (error) {
    res.send('failed to get')
  }
})


app.listen(port, () => {
  console.log(`running on ${port} port`)
})

