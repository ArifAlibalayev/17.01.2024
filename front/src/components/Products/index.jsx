import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { WishlistContext } from "../../context/WishlistProvider";
import { Link, NavLink } from "react-router-dom";
import { BasketContext } from "../../context/BasketProvider";

function Products() {
  // fetched Data
  const [apiData, setApiData] = useState([]);
  // Search State
  const [search, setSearch] = useState('');

  // Sort State
  const [category, setCategory] = useState(null)

  const { wishlist, addToWishlist } = useContext(WishlistContext);
  const { basket, addToBasket } = useContext(BasketContext);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch("http://localhost:3000/");
    const data = await res.json();
    setApiData(data);
  }

  return (
    <section id="Products">
      <div className="ProductsTitle">
        <h2>Our Products</h2>
      </div>
      <div className="searchSortSection">
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={()=>setCategory({property:"title", asc:true})}>A-z</button>
        <button onClick={()=>setCategory({property:"title", asc:false})}>A-z</button>
        <button onClick={()=>setCategory(null)}>default</button>
      </div>
      <div className="ProductsWrapper">
        {apiData
        .filter((x)=>
        x.title.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a,b)=>{
          if (category && category.asc === true ) {
            return (a[category.property] > b[category.property]) ? 1 : (a[category.property] < b[category.property] ? -1 : 0)
          }
          else if(category && category.asc === false){
            return (a[category.property] < b[category.property]) ? 1 : (a[category.property] > b[category.property] ? -1 : 0)
          }else{
            return (null)
          }
        })
        .map((x) => (
          <div className="ProductsCard" key={x._id}>
            <img src={x.img} alt="" />
              <div className="rating">
              <i class="fa-solid fa-star yellow"></i>
              <h5>5.0</h5>
              <i
              onClick={() => addToWishlist(x)}
              className={
                wishlist.some((item) => x._id === item._id)
                  ? "fa-solid fa-heart"
                  : "fa-regular fa-heart"
              }
              
            ></i>
            <h5>29</h5>
              </div>
            <h3>{x.title}</h3>
            <p>{x.desc}</p>
            
            <div className="basketAndDetails">
            <button className="BasketButton" onClick={() => addToBasket(x)}>CART</button>
            <NavLink to={`/Detailpage/${x._id}`} className={true ? "activeDetails" : "pendingDetails"}>VIEW</NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
