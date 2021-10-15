import { embaralhar } from "../functions/arrays"
import RespostaModel from "./resposta"

export default class QuestaoModel{
    // O # indica que o atributo é privado!
    #id: number
    #enunciado: string
    #respostas: RespostaModel[]
    #acertou: boolean

    constructor(id: number,enunciado: string, respostas: RespostaModel[], acertou= false){
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
    }

    get id(){
        return this.#id
    }

    get enunciado(){
        return this.#enunciado
    }

    get respostas(){
        return this.#respostas
    }

    get acertou(){
        return this.#acertou
    }

    get naoRespondida(){
        return !this.respondida
    }

    get respondida(){
        for(let resposta of this.#respostas){
            // Percorrendo todas as respostas, se algum resposta estiver revelada é por que a pergunta foi responida!
            if(resposta.revelada) return true
        }

        return false;
    }

    responderCom(indice: number): QuestaoModel{
        //  O ? serve para que o .certa só seja chamado caso exista uma resposta no índice fornecido!
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resposta, i) =>{
            const respostaSelecionada = indice === i
            const deveRevelar = respostaSelecionada || resposta.certa // Será revelada a questão selecionada e a certa ou apenas a certa!
            return deveRevelar ? resposta.revelar(): resposta
        })

        return new QuestaoModel(this.id, this.enunciado, respostas, acertou)
    }

    // Criando um método rico para embaralhar as questões e retornar um nova instância da Questão!
    embaralharRespostas(){
        let respostasEmbaralhadas = embaralhar(this.#respostas)
        return new QuestaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou)
    }

    // Criando uma instância de Questao a partir do modelo.
    static criarUsandoObjeto(obj: QuestaoModel): QuestaoModel{
        const respostas = obj.respostas.map(resp =>  RespostaModel.criarUsandoObjeto(resp))
        return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou)
    }

    paraObjeto(){
        return{
            id: this.#id,
            enunciado: this.#enunciado,
            respondida: this.respondida,
            acertou: this.#acertou,
            respostas: this.#respostas.map(resp => resp.paraObjeto()),            
        }
    }


}