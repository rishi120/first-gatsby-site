import React, { useEffect } from 'react'
import Layout from "../components/layout"
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from "../styles/portfolio.module.scss";
import { gsap } from "gsap";

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
    const selectCardWrapper = ".animateCardWrapper";

    useEffect(() => {
        gsap.from(selectCardWrapper, {
            y: 50,
            delay: 0.1,
            duration: 0.5,
            stagger: 0.2,
            opacity: 0
        });
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
