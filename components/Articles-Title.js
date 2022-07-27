import styles from '../assets/css/title.module.scss'


export default function Title({children}) {

    return (
        <h1 className={styles.title}>
            {children}
        </h1>
     )

}
