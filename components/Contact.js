import Image from 'next/image'
import Link from 'next/link';
import styles from '../assets/css/contact.module.scss';

    
const myLoader = ({ src, width, quality }) => {
    
    return `/${src}?&w=${width}&q=${quality || 75}`
    
}

  
export default function Contact(props) {
   
    
    return (
        <main className={styles.container}>
            <div className={styles.container_links}>
                <Link href="https://twitter.com/chomphoo_le" passHref={true}><a className={styles.size}>T<span className={styles.color}>w</span>itter</a></Link>
                <Link href="https://www.linkedin.com/in/chomphoo-l-b45904155" passHref={true}><a className={styles.size}>Link<span className={styles.color}>e</span>din</a></Link>
                <Link href="https://github.com/Chomphoo-pro" passHref={true}><a className={styles.size}>Githu<span className={styles.color}>b</span></a></Link>
            </div>

            <Image
      loader={myLoader}
      src="profil.webp"
      alt="Chomphoo LE BEUX"
      width={"211.2px"}
      height={"256px"}

    />



        </main>
    )
}