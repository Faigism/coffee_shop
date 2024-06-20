import { useState } from 'react'
import styles from './style.module.css'
import { toast } from 'react-toastify'
import { useGlobalContext } from '../../../context'

const Product = ({ prod }) => {
  const { image, title, description, price } = prod
  const [isPrice, setIsPrice] = useState(0)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const addedProduct = () => {
    if (isButtonDisabled) return

    setIsButtonDisabled(true)
    setIsPrice((prevPrice) => parseFloat((prevPrice + price).toFixed(2)))

    setTimeout(() => {
      setIsButtonDisabled(false)
    }, 600)
  }

  const decrementProduct = () => {
    if (isButtonDisabled) return

    setIsButtonDisabled(true)
    setIsPrice((prevPrice) => {
      const newPrice = parseFloat((prevPrice - price).toFixed(2))
      return newPrice <= 0 ? 0 : newPrice
    })

    setTimeout(() => {
      setIsButtonDisabled(false)
    }, 600)
  }

  const productBasket = () => {
    setIsButtonDisabled(true)
    toast.success('added Product')
    setTimeout(() => {
      setIsButtonDisabled(false)
      toast.dismiss()
    }, 600)
  }

  return (
    <div className={styles.product}>
      <img src={image} alt="productImage" className={styles.image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <span>{price} $</span>
        <div className={styles.order}>
          <button
            className={
              isPrice === 0 || isButtonDisabled ? styles.disabled : styles.btn
            }
            disabled={isPrice === 0 || isButtonDisabled}
            onClick={decrementProduct}
          >
            -
          </button>
          <button
            className={isButtonDisabled ? styles.disabled : styles.btn}
            disabled={isButtonDisabled}
            onClick={addedProduct}
          >
            +
          </button>
          <button
            className={
              isPrice === 0 || isButtonDisabled ? styles.disabled : styles.btn
            }
            disabled={isPrice === 0 || isButtonDisabled}
            onClick={productBasket}
          >
            Order Now
          </button>
          <span>{isPrice === 0 ? '' : isPrice + ' $'}</span>
        </div>
      </div>
    </div>
  )
}

export default Product
