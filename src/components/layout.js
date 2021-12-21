import React from 'react';
import Navbar from '../routes/navbar';
import "../styles/global-styles.scss";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        {children}
      </div>
      <footer>
        <p>Copyright 2021</p>
      </footer>
    </div>
  )
}