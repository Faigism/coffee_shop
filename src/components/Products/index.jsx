import { useEffect, useState } from 'react'
import styles from './style.module.css'
import Product from './Product'
import { nanoid } from 'nanoid'

const url = 'https://fakestoreapi.com/products'
const Products = () => {
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const result = await response.json()
      setProducts(result)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1 style={{ fontSize: '50px', textAlign: 'center' }}>Products</h1>
      <div className={styles.products}>
        {products.map((prod) => {
          return <Product prod={prod} key={nanoid()} />
        })}
      </div>
    </>
  )
}
export default Products
