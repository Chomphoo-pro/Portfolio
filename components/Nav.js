import Link from 'next/link';
import logo from '../assets/css/logo.module.scss';
import nav from '../assets/css/nav.module.scss';



function Nav() {

  return (


    <nav className={nav.container} data-ismenu={true}>


      <ul>
        <li ><Link href="/veille" passHref={true}><a>veille</a></Link></li>
        <li ><Link href="/how-to" passHref={true}><a>how to</a></Link></li>
      </ul>

      <Link href="/" passHref={true}>
        <a className={logo.container}>
          <div>C</div>
          <div>LB</div>
        </a>
      </Link>

      <ul>
        <li><Link href="/" passHref={true}><a>me</a></Link></li>
        <li><Link href="/contact" passHref={true}><a>{"contact >"}</a></Link></li>
      </ul>


    </nav>
  )

}


export default Nav;