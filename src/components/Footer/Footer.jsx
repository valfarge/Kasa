import footerLogo from '../../assets/LogoFooter.png'

export default function Footer() {
   const effectiveYear = new Date().getFullYear()
   return (
      <footer className="footer">
         <img src={footerLogo} alt="logo" className="footer__logo"></img>
         <p className="footer__text">
            ©{effectiveYear} Kasa. All rights reserved
         </p>
      </footer>
   )
}