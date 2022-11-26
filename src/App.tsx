import {Product} from './components/Product'
// import {products} from './data/products'
import React, {useEffect} from 'react'
import axios from 'axios'
import { IProduct } from './moduls'
import {useState} from 'react'



function App() {
const [products, setProducts] = useState<IProduct[]>([])

const [loading, setLoading] = useState(false)
const [error, setError] = useState('')

async function fetchProducts() {
try{
  
    setLoading(true)
   const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
  setProducts(response.data)
  setLoading(false)
  } catch (e: unknown){
    const error = e as Error
setLoading(false)
setError(error.message)
  }
}

useEffect(() => {
  fetchProducts()
}, [])


  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <p className='text-center'>Loading...</p>}
    {products.map(product => <Product product = {product} key = {product.id}/>)}


    {/* <Product product={products[0]} />
    <Product product={products[1]} /> */}
    </div>
  );
}

export default App;
