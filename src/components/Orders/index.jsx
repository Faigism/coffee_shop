import { useGlobalContext } from '../../context'
import Layout from '../../layouts/Layout'
import styles from './style.module.css'

const Orders = () => {
  const { products } = useGlobalContext()
  console.log(products[0])
  return (
    <Layout>
      <h1>Orders</h1>
      <div className={styles.orderProd}>
        <div className={styles.prodImg}>
          <img src={products[0]?.image} alt="orderImg" />
        </div>
        <div className={styles.prodDetails}>
          <h2>product name</h2>
          <span>Price</span>
          <span>Count</span>
        </div>
        <div className={styles.prodDelete}>
          <span>Delete</span>
        </div>
      </div>
      <div>
        <p>Total</p>
      </div>
    </Layout>
  )
}
export default Orders
