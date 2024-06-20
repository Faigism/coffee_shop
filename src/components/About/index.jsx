import styles from './style.module.css'

const About = () => {
  return (
    <section>
      <div className={styles.about_sec}>
        <h1 className={styles.about_title}>About us</h1>
        <span className={styles.about_span}>Our Story</span>
        <p className={styles.about_paragraph}>
          It all started as a simple vacation to Miami and the love and passion
          of both European and American Cultures. Founders, Ioannis Sotiropolous
          and Efthymios Paliouras’s love for the American culture started in
          their childhood. They learned to love the United States by watching
          American movies and documentaries. Growing up in Athens, Greece a city
          that is known for its love of socializing over good food, great
          coffee, and beautiful cafes, they saw an opportunity to bring that
          love and culture to the American people. With their background as
          highly successful club owners and restaurateurs' in Greece, they
          decided to make Miami the first destination of their new vision.
        </p>
      </div>
    </section>
  )
}
export default About
