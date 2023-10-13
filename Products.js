import React from 'react'
import '../App';
import axios from 'axios'
import { useEffect, useState } from 'react'
export default function Products() {
  const [products, setProducts] = useState([{}])
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
  }, 0)
  console.log(products)
  return (
    <>
      {
        products.map((element, index) => {
          return (
            <>
              <div class="card float-start" style={{ width: '18rem' }}>
                <img src={element.thumbnail} height="150" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">{element.title}</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
            </>
          )
        })
      }
      <h1>Products Page</h1>
    </>
  )
}