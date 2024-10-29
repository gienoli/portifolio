const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acabou de assistir a um desfile da Victoria's Secret. Qual foi sua primeira impressão?",
        alternativas: [
            {
                texto: "Isso é glamouroso!",
                afirmacao: "Ficou impressionado com o glamour e o estilo das modelos e das peças apresentadas."
            },
            {
                texto: "Isso parece exagerado.",
                afirmacao: "Acha que alguns elementos do desfile são muito extravagantes e não aplicáveis à moda do dia a dia."
            }
        ]
    },
    {
        enunciado: "Sua professora de moda pediu para que você criasse um relatório sobre como os desfiles da Victoria's Secret impactam a moda e as tendências. Como você faz sua pesquisa?",
        alternativas: [
            {
                texto: "Busca informações em revistas de moda e assiste a outros desfiles da Victoria's Secret para entender melhor as tendências.",
                afirmacao: "Conseguiu identificar várias tendências influenciadas pelos desfiles e incorporou essas informações no relatório."
            },
            {
                texto: "Conversa com amigos que também assistiram ao desfile e faz uma análise baseada em suas próprias observações e conhecimentos.",
                afirmacao: "Optou por usar observações pessoais e opiniões de colegas para trazer uma perspectiva mais próxima da realidade cotidiana."
            }
        ]
    },
    {
        enunciado: "Durante uma aula, sua turma debateu sobre o impacto dos desfiles de moda na autoestima das pessoas. Como você se posiciona nesse debate?",
        alternativas: [
            {
                texto: "Apoia a ideia de que os desfiles podem ser inspiradores e mostrar o potencial criativo da moda.",
                afirmacao: "Destacou o lado artístico dos desfiles e como eles podem motivar outras pessoas a explorar sua própria expressão."
            },
            {
                texto: "Acredita que esses desfiles podem gerar padrões de beleza irreais que afetam negativamente a autoestima.",
                afirmacao: "Defendeu a importância de promover uma moda mais inclusiva que valorize diferentes tipos de corpos."
            }
        ]
    },
    {
        enunciado: "Após o debate, foi pedido que você criasse um croqui inspirado nos desfiles da Victoria's Secret. Como você o cria?",
        alternativas: [
            {
                texto: "Desenha à mão com técnicas tradicionais de croqui e adiciona detalhes inspirados nas peças que viu.",
                afirmacao: "Percebeu a importância de dominar as técnicas de ilustração à mão e decidiu aprimorar suas habilidades no design."
            },
            {
                texto: "Utiliza uma ferramenta de design digital para criar o croqui, inspirado nas peças e no estilo do desfile.",
                afirmacao: "Explorou como o design digital pode facilitar o processo criativo, especialmente em croquis detalhados."
            }
        ]
    },
    {
        enunciado: "Durante o desenvolvimento de um projeto de moda para um desfile fictício, um dos membros do seu grupo quer copiar diretamente os looks da Victoria's Secret. Como você reage?",
        alternativas: [
            {
                texto: "Aceita a ideia, afinal os looks são icônicos e vão impressionar o público.",
                afirmacao: "Acabou permitindo que o grupo seguisse essa direção, mas percebeu que a originalidade ficou de lado."
            },
            {
                texto: "Sugere que o grupo se inspire nos looks, mas crie algo original que reflita a identidade do grupo.",
                afirmacao: "Compreendeu que a inspiração é importante, mas que a originalidade é essencial para criar uma identidade de moda única."
            }
        ]
    },
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();