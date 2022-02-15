import React from 'react'
import Layout from "../components/layout"
import { useStaticQuery, graphql } from 'gatsby';

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
            </div>
        </Layout>
    )
}

export default Portfolio;
