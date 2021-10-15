import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, "Qual bicho transmite a doença de chagas?",[
        RespostaModel.errada("Abelha"),
        RespostaModel.errada("Barata"),
        RespostaModel.errada("Pulga"),
        RespostaModel.certa("Barbeiro")
    ]),
    new QuestaoModel(307, "Qual fruto é conhecido no Norte e Nordeste como Jerimun?",[
        RespostaModel.errada("Caju"),
        RespostaModel.errada("Coco"),
        RespostaModel.errada("Maracujá"),
        RespostaModel.certa("Abóbora")
    ]),
    new QuestaoModel(308, "Qual o coletivo de cães?",[
        RespostaModel.errada("Manada"),
        RespostaModel.errada("Alcateia"),
        RespostaModel.errada("Rebanho"),
        RespostaModel.certa("Matilha")
    ]),
    new QuestaoModel(309, "Qual é o trinângulo que tem todos os lados diferentes?",[
        RespostaModel.errada("Equilátero"),
        RespostaModel.errada("Isóceles"),
        RespostaModel.errada("Trapézio"),
        RespostaModel.certa("Escaleno")
    ]),

]

export default questoes;