import styles from '../styles/Enunciado.module.css'

interface EnunciadoPropos{
    texto: string
}

export default function Enunciado(props: EnunciadoPropos){
    return(
        <div className={styles.enunciado}>
            <div className={styles.texto}>
                {props.texto}
            </div>

        </div>
    )
}