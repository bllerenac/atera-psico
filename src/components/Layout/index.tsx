import Header from "../Header"
import Footer from "../Footer"
import './layout.scss'

interface Props {
  children : JSX.Element
}

const Layout = ({ children } : Props) => {
  return(
    <div className="layout--container">
      <Header/>
        <div className="layout--content">
          { children }
        </div>
      <Footer/>
    </div>
  )
}

export default Layout