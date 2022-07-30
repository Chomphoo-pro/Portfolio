//import styles from '../assets/css/summary.module.scss'


export default function Summary({title}) {

    return (
        <>
        <h2>sommaire</h2>
            {
                title?.map(
                    (
                        e => (
                            <div key={e}>{e}</div>
                        )
                    )
                )    
            }
        </>
     )

}
