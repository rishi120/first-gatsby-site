import React from 'react'
import Layout from "../components/layout"
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from "../styles/portfolio.module.scss";

const Portfolio = () => {
    // implemented useStaticQuery hooks
    const portfolioData = useStaticQuery(graphql
        `query portfolioInfo {
          site {
            siteMetadata {
                portfolioDetails {
                    cardHeading
                    cardDescription
                }
            }
          }
        }
        `
    )
    const { portfolioDetails } = portfolioData.site.siteMetadata;
    return (
        <Layout>
            <div>
                <h1>Portfolio</h1>
                <div className={styles.container}>
                    {portfolioDetails.map(cardData => {
                        return (
                            <div className={styles.cardWrapper}>
                                <p>{cardData.cardDescription}</p>
                                <h1 className="font-bold">{cardData.cardHeading}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default Portfolio;
