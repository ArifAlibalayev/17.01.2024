import React, { useEffect, useState } from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
import './index.scss'

function Addpage() {

  const [apiData, setApiData] = useState([])
  
  useEffect(() => {
    getData()
  }, [])
  

  async function getData() {
    const res = await fetch("http://localhost:3000/")
    const data = await res.json()
    setApiData(data)
  }

  async function postElement(item) {
    await fetch("http://localhost:3000/",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(item)
})
await getData()
  }

  async function deleteElement(id) {
    await fetch(`http://localhost:3000/${id}`,
{
    method: "DELETE",
    body: JSON.stringify()
})
await getData()
  }
  return (
    <>
    <section id='addPageContainer'>
    <Formik
       initialValues={{ name: '', desc: '', img: '' }}
       validationSchema={Yup.object({
         title: Yup.string()
           .required('Required'),
         desc: Yup.string()
           .required('Required'),
         img: Yup.string().required('Required'),
       })}
       onSubmit={(values, { setSubmitting, resetForm  }) => {
         setTimeout(() => {
          postElement(values)
          resetForm()
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form className='formikForm'>
         <label htmlFor="title">title</label>
         <Field name="title" type="text" />
         <ErrorMessage name="title" />
 
         <label htmlFor="desc">Description</label>
         <Field name="desc" type="text" />
         <ErrorMessage name="desc" />
 
         <label htmlFor="img">Image</label>
         <Field name="img" type="text" />
         <ErrorMessage name="img" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
     <table>
  <thead>
  <tr>
    <th>name</th>
    <th>description</th>
    <th>operations</th>
  </tr>
  </thead>
  <tbody>
  {apiData.map((x)=>(
    <tr key={x._id}>
    <td>{x.name}</td>
    <td>{x.desc}</td>
    <td ><button onClick={()=>deleteElement(x._id)}>x</button></td>
  </tr>
  ))}
  </tbody>
  </table>
    </section>
    </>
  )
}

export default Addpage