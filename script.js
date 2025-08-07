const perguntas = [
  {
    enunciado: "Ao descobrir uma IA capaz de responder tudo, gerar imagens e áudio, qual é sua primeira reação?",
    alternativas: [
      {
        texto: "Isso é assustador!",
        afirmacao: "No início você ficou com medo das possibilidades dessa tecnologia."
      },
      {
        texto: "Isso é fascinante!",
        afirmacao: "Você quis logo aprender a usar IA no cotidiano."
      }
    ]
  },
  {
    enunciado: "Um trabalho sobre IA em sala de aula é solicitado. Como você age?",
    alternativas: [
      {
        texto: "Uso uma IA para ajudar na pesquisa e explicação dos temas.",
        afirmacao: "Aprendeu a usar a IA como aliada para compreender e explicar temas complexos."
      },
      {
        texto: "Faço com base em conversas, pesquisa e conhecimento próprio.",
        afirmacao: "Confiou na sua interpretação e capacidade de análise."
      }
    ]
  },
  {
    enunciado: "No debate sobre IA e o futuro do trabalho, qual seu posicionamento?",
    alternativas: [
      {
        texto: "IA cria novas oportunidades e aprimora capacidades humanas.",
        afirmacao: "Defende a inovação e prepara as pessoas para novas oportunidades."
      },
      {
        texto: "IA pode substituir empregos e é preciso proteger os trabalhadores.",
        afirmacao: "Iniciou um grupo para discutir o uso ético da IA e proteção dos empregos."
      }
    ]
  },
  {
    enunciado: "Você precisa criar uma imagem que represente sua visão sobre IA. O que faz?",
    alternativas: [
      {
        texto: "Uso uma ferramenta como o Paint ou Photoshop.",
        afirmacao: "Compartilhou seus conhecimentos em design com a turma."
      },
      {
        texto: "Uso um gerador de imagem com IA.",
        afirmacao: "Mostrou como ferramentas de IA podem ser criativas e acessíveis."
      }
    ]
  },
  {
    enunciado: "Seu grupo usa um texto gerado pela IA sem alterações. O que você faz?",
    alternativas: [
      {
        texto: "Aceita o texto, pois considera que o comando já foi um trabalho.",
        afirmacao: "Ficou dependente da IA e perdeu parte da sua autonomia criativa."
      },
      {
        texto: "Revisa o texto e acrescenta ideias próprias.",
        afirmacao: "Usou a IA como ferramenta, mas garantiu um toque pessoal e original."
      }
    ]
  }
];

let indice = 0;
let historia = "";

const elPergunta = document.getElementById("pergunta");
const elOpcoes = document.getElementById("opcoes");
const elResultado = document.getElementById("resultado");
const elTextoFinal = document.getElementById("textoFinal");

function mostrarPergunta() {
  if (indice >= perguntas.length) {
    mostrarResultado();
    return;
  }
  const atual = perguntas[indice];
  elPergunta.textContent = atual.enunciado;
  elOpcoes.innerHTML = "";
  atual.alternativas.forEach(alternativa => {
    const btn = document.createElement("button");
    btn.textContent = alternativa.texto;
    btn.onclick = () => selecionarResposta(alternativa);
    elOpcoes.appendChild(btn);
  });
}

function selecionarResposta(alternativa) {
  historia += alternativa.afirmacao + " ";
  indice++;
  mostrarPergunta();
}

function mostrarResultado() {
  elPergunta.textContent = "";
  elOpcoes.innerHTML = "";
  elResultado.classList.remove("escondido");
  elTextoFinal.textContent = historia.trim();
}

mostrarPergunta();
