import questoes from "../bancoDeQuestoes"

export  default async function handler(req, res) {
    const idSelecionado = await +req.query.id

    const questaoSelecionada = await questoes.filter(questao => questao.id === idSelecionado)

    if(questaoSelecionada.length === 1){
      const unicaQuestao = await questaoSelecionada[0].embaralharRespostas()
      res.status(200).json(unicaQuestao.paraObjeto())
    }else{
      res.status(204).send()
    }

    res.status(200).json(questoes[0].paraObjeto())
  }
  