import Header from "../Header"
import Footer from "../Footer"
import './layout.scss'

interface Props {
  children : JSX.Element,
  hero?: JSX.Element
}

const Layout = ({ children, hero } : Props) => {
  return(
    <div className="layout--container">
      <Header/>
        {hero ?  hero : <></>}
        <div className="layout--content">
          { children }
        </div>
      <Footer/>
    </div>
  )
}

export default Layout