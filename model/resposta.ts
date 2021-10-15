import { embaralhar } from "../functions/arrays"

export default class RespostaModel{
    #valor: string
    #certa: boolean
    #revelada: boolean
    
    constructor(valor: string, certa: boolean, revelada= false){
        this.#valor = valor
        this.#certa = certa
        this.#revelada = revelada
    }

    static certa(valor: string){
        return new RespostaModel(valor,true)
    }

    static errada(valor: string){
        return new RespostaModel(valor,false)
    }

    get valor(){
        return this.#valor
    }

    get certa(){
        return this.#certa
    }

    get revelada(){
        return this.#revelada
    }

    revelar(){
        // Retornar uma nova instância de resposta com o atributo revelada == true.
        // Será usado quando o usuário selecionar uma questão. Independente de ela ser certa ou não, será revelada!
        return new RespostaModel(this.#valor, this.#certa, true)
    }

    static criarUsandoObjeto(obj: RespostaModel): RespostaModel{
        return new RespostaModel(obj.valor, obj.certa, obj.revelada)
    }

    paraObjeto(){
        return{
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada
        }
    }
}