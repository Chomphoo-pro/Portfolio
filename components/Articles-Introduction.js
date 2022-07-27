import styles from '../assets/css/introduction.module.scss'


export default function Introduction({children}) {

    return (
        <div className={styles.introduction}>
            {children}
        </div>
     )

}
