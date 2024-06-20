import sectionImage from '../../assets/sectionImage.svg'
import styles from './style.module.css'

const Home = () => {
  return (
    <main>
      <div className={styles.home_container}>
        <div className="home_sec">
          <h2 className="home_title">
            Enjoy Your <span className="home_span">Cofee</span> <br />
            before your activity
          </h2>
          <p className="home_paragraph">
            Boost your productivity and build your mood with a glass of coffee
            in the morning
          </p>
          <div className={styles.home_btn}>
            <button className={styles.btn}>Order Now</button>
            <button className={styles.btn}>Feedback</button>
          </div>
        </div>
        <div>
          <img src={sectionImage} alt="coffeeImg" className={styles.image} />
        </div>
      </div>
    </main>
  )
}
export default Home
