import React from 'react'

function Footer() {
  return (
    <footer className="page-footer bg-white">
      <div className="footer-copyright">
         <div className="container footer_page">
          © {new Date().getFullYear()} Chef
          </div>
       </div>
    </footer>
      
  )
}

export default Footer

