import { useEffect, useState } from 'react'
import Questionario from '../components/Questionario'
import QuestaoModel from '../model/questao'
import router, { useRouter } from 'next/router'


const BASE_URL = 'http://localhost:3000/api' // URL base da Api.


export default function Home() {
  const [idsDasQuestoes , setidsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respostasCertas, setRespostasCertas] = useState<number>(0)

  async function carregarQuestoesIds(){ // Função assincrona para capturar os Ids das questoes!
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resp.json()
    setidsDasQuestoes(idsDasQuestoes)
  }

  async function carregarQuestao(idQuestao: number){ // Função assincrona para capturar as questoes!
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
    setQuestao(novaQuestao)
  }

  useEffect(() =>{
    carregarQuestoesIds()
  }, [])

  useEffect(() =>{
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])

  function questaoRespondida(questaoRespondida: QuestaoModel){
      setQuestao(questaoRespondida)
      const acertou = questaoRespondida.acertou // Lógica para saber se acertou a resposta
      setRespostasCertas(respostasCertas + (acertou ? 1 : 0)) // Se acertou adciona no contadopr mais um senão não adciona nada!
  }

  function idProximaPergunta(){    
      const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
      return idsDasQuestoes[proximoIndice]    
  }

  function proximoPasso(){
    const proximoId = idProximaPergunta()
    proximoId ? irPraProximaQuestao(proximoId) : finalizar() 
  }

  function irPraProximaQuestao(proximoId: number){
    carregarQuestao(proximoId)
  }

  function finalizar(){
    router.push({
      pathname: "/resultado",
      query:{
        total: idsDasQuestoes.length,
        certas: respostasCertas
      }
    })
  }

  return questao ?(
      <Questionario 
        questao={questao}
        ultima={idProximaPergunta() === undefined}
        questaoRespondida={questaoRespondida}
        proximoPasso={proximoPasso}/>
  )   : false  
}
