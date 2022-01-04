import React, { useState, useEffect } from 'react';
import Navbar from '../routes/navbar';
import "../styles/global-styles.scss";
import { useStaticQuery, graphql } from 'gatsby';

export default function Layout({ children }) {
  const [active, setActive] = useState("");
  // implemented useStaticQuery hooks
  const data = useStaticQuery(graphql
    `query navInfo {
          site {
            siteMetadata {
              navMenu {
                navPath
                navTitle
              }
            }
          }
        }
        `
  )
  useEffect(() => {
    const urlPath = window.location.pathname;
    setActive(urlPath);
  }, [])

  const { navMenu } = data.site.siteMetadata;
  return (
    <div className="layout">
      <Navbar navMenu={navMenu} active={active} />
      <div className="content">
        {children}
      </div>
      <footer>
        <p>Copyright 2021</p>
      </footer>
    </div>
  )
}