import styles from '../styles/Botao.module.css'
import Link from 'next/link'

interface BotaoProps{
    href?: string
    texto: string
    onClick?: (e: any) => void
}

export default function Botao(props:BotaoProps){

    function renderizarBotao(){
        return(
            <button className={styles.botao}
                onClick={props.onClick}>
                {props.texto}
            </button>
        )
    }
    // É feita a veirificação onde, se for passado alguma referencia é recebido essa referencia se não é recebido a função Onclick!
    return props.href ? (
       <Link href={props.href}>
           {renderizarBotao()}
       </Link>
    ) : renderizarBotao()
}