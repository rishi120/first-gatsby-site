import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import styles from "../styles/home.module.scss"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Chandan Baruah</h2>
          <h3>Develop & Deploy</h3>
          <p>Software Engineer based in India.</p>
          <Link className={styles.btn} to="/portfolio">My Portfolio Projects</Link>
        </div>
        <img src="/static/banner.png" alt="site banner" style={{ maxWidth: '100%' }} />
      </section>
    </Layout>
  )
}

export default IndexPage
