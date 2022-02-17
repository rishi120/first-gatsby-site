import React, { useEffect } from 'react'
import Layout from "../components/layout"
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from "../styles/portfolio.module.scss";
import { portfolioPageAnimation } from "../gsap-animation";

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


    useEffect(() => {
        portfolioPageAnimation(".animateCardWrapper");
    }, [])
    return (
        <Layout>
            <div>
                <h1>Portfolio</h1>
                <div className={styles.container}>
                    {portfolioDetails.map((cardData, i) => {
                        return (
                            <div className={styles.cardWrapper + " shadow-lg bg-white animateCardWrapper"} key={i}>
                                <p className='text-black text-sm text-center'>{cardData.cardDescription}</p>
                                <h1 className="font-bold text-black text-xl">{cardData.cardHeading}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default Portfolio;
