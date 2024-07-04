const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você costuma reciclar?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "muito bem! isso contribui com o meio ambiente."
            },
            {
                texto: "Não",
                afirmacao: "Você deveria começar, pois assim o meio ambiente vai se degradando."
            }
                 
        ]
    },
    {
        enunciado: "Quais são as principais ameaças á biodiversidade global?",
        alternativas: [ {
            texto: "O desmatamento, exploração excessiva de recursos, presença de espécies invasoras e a contaminação ambiental",
            afirmacao: "O desmatamento e a exploração indiscriminada de recursos naturais são fatores que agravam a contaminação ambiental e favorecem a disseminação de espécies invasoras."
        },
        {
            texto: "As principais ameaças á biodiversidade global são a melhoria das condições de vida humana e o aumento da área de reservas naturais",
            afirmacao: "As principais ameaças á biodiversidade global resultam das atividades humanas e da destruição de habitats naturais, que comprometem a sobrevivência de inúmeras espécies. "
        } 
           
        ]
    },
    {
        enunciado: "Quais são as principais causas das mudanças climaticas ?",
        alternativas: [
            {
                texto: "emissoes de gases de efeito estufa",
                afirmacao: "a queima de combustiveis fosseis libera grande quantidade de dioxido de carbono e metano na atmosfera."
            },
            {
                texto: "desmatamento",
                afirmacao:" a remoçao de florestas diminui a capacidade do planeta de absorver oxigenio"
            }
            
        ]
    }, 
    {
        enunciado: "o que o plástico causa no meio ambiente?",
        alternativas: [
            {
                texto:  "Ajuda a fertilizar o solo, melhora a qualidade do ar e proporciona habitats seguros para várias espécies de animais aquáticos",
                afirmacao: "A restauraação de ecossistemas aquáticos ajuda a fertilizar o solo, melhora a qualidade do ar e proporciona habitats seguros para várias espécies de animais."
            },
            {
                texto:  "Proliferam-se os lixões a céu aberto, contaminando a água dos rios e lençóis freáticos",
                afirmacao:"Os lixões a céu aberto proliferam, contaminando a água dos rios e lençóis freáticos."
            } 
           
        ]
    },
    {
        enunciado: "Como a poluição sonora afeta os seres humanos e a vida selvagem?",
        alternativas: [
            {
                texto: "O ruído pode pertubar os padrões de reprodução, aleitamento e, inclusive, contribuir para a extinção de algumas espécies",
                afirmacao:"o ruído pode afetar negativamente os padrões de reprodução e aleitamento, contribuindo até mesmo para a extinção de certas espécies"
            },
            {
            texto: "A poluição sonora não afeta a vida selvagem nem dos seres humanos, muitos animais se adaptam e até prosperam em ambientes barulhentos, e os seres humanos não tem nenhum impacto negativo na saúde",
                afirmacao:"A poluição sonora afeta muito os animais e os seres humanos também"
            }   
            
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSeleconada){
    const afirmacoes = opcaoSeleconada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2024...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent= "";
}

mostraPergunta();