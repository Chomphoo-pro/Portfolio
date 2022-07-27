import Link from 'next/link';
import logo from '../assets/css/logo.module.scss';
import * as React from "react";
import { useRef } from "react";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "../components/MenuToggle";
import { motion, useCycle } from "framer-motion";


function Nav() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <nav data-ismenu={true} data-isopen={isOpen}>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.div>



      <ul className='navLeft'>
        <li ><Link href="/veille" passHref={true}><a>veille</a></Link></li>
        <li ><Link href="/how-to" passHref={true}><a>how to</a></Link></li>
      </ul>

      {!isOpen && (<>
        <Link href="/" passHref={true}>
          <a className={logo.container}>
            <div>C</div>
            <div>LB</div>
          </a>
        </Link>
      </>
      )}

      <ul>
        <li><Link href="/" passHref={true}><a>me</a></Link></li>
        <li><Link href="/contact" passHref={true}><a>contact</a></Link></li>
      </ul>
    </nav>
  )

}


export default Nav;