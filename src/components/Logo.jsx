import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link className="logo" to="/" spy={true} smooth={true} duration={600} offset={0}>
        <img src={logo} alt="site-logo" />
    </Link>
  )
}
