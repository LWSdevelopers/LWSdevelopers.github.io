// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    question: 'Este sinal indica-me a proximidade de uma',
    answers: [
      {
        answer: 'Sucessão de curvas perigosas, sendo a primeira à esquerda.',
        correct: true,
      },
      {
        answer: 'Curva à direita e contracurva.',
        correct: false,
      },
      {
        answer: 'Sucessão de curvas perigosas, sendo a primeira à direita.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Trânsito proibido a veículos de largura superior a 4.42 metros.',
        correct: false,
      },
      {
        answer: 'Trânsito proibido a veículos de altura superior a 4.42 metros.',
        correct: true,
      },
      {
        answer: 'Trânsito proibido a veículos de comprimento superior a 4.42 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal de perigo alerta-me para a possibilidade de encontrar:',
    answers: [
      {
        answer: 'Peões a atravessar a faixa de rodagem.',
        correct: true,
      },
      {
        answer: 'Uma escola.',
        correct: false,
      },
      {
        answer: 'Pista obrigatória para peões.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual o significado deste sinal?',
    answers: [
      {
        answer: 'Animais selvagens.',
        correct: true,
      },
      {
        answer: 'Local reservado à caça de animais selvagens.',
        correct: false,
      },
      {
        answer: 'Gado em manada.',
        correct: false,
      },
    ],
  },
  {
    question: 'Este sinal indica:',
    answers: [
      {
        answer: 'Subida íngreme com curvas.',
        correct: false,
      },
      {
        answer: 'Subida de acentuada inclinação.',
        correct: false,
      },
      {
        answer: 'Curva à direita e contracurva.',
        correct: true,
      },
    ],
  },
  {
    question: 'A sinalização vertical indica-me trânsito proibido a:',
    answers: [
      {
        answer: 'Peões, animais e a veículos que não sejam automóveis, motociclos ou ciclomotores.',
        correct: false,
      },
      {
        answer: 'Peões, animais e a veículos que não sejam automóveis ou motociclos.',
        correct: true,
      },
      {
        answer: 'Peões, animais e a veículos que não sejam automóveis.',
        correct: false,
      },
    ],
  },
  {
    question: 'Este sinal determina:',
    answers: [
      {
        answer: 'Fim de proibição de usar sinais sonoros.',
        correct: true,
      },
      {
        answer: 'Fim de obrigação de usar sinais sonoros.',
        correct: false,
      },
      {
        answer: 'Obrigação de usar sinais luminosos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como devo proceder perante este sinal na intersecção de que me aproximo?',
    answers: [
      {
        answer: 'Parar e ceder a passagem a todos os veículos que circulem na estrada em que vou entrar.',
        correct: true,
      },
      {
        answer: 'Cumprir com a regra geral de cedência de passagem.',
        correct: false,
      },
      {
        answer: 'Ceder a passagem a todos os veículos a motor que circulem na estrada em que vou entrar.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal indica:',
    answers: [
      {
        answer: 'Vento lateral.',
        correct: true,
      },
      {
        answer: 'Visibilidade insuficiente.',
        correct: false,
      },
      {
        answer: 'Ponte móvel.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que devo fazer perante a sinalização deste local?',
    answers: [
      {
        answer: 'Adaptar a velocidade, porque posso encontrar uma situação perigosa.',
        correct: true,
      },
      {
        answer: 'Moderar a velocidade e inverter o sentido de marcha, se necessário.',
        correct: false,
      },
      {
        answer: 'Parar, porque não sei que perigo posso encontrar.',
        correct: false,
      },
    ],
  },
  {
    question: 'Este sinal indica-me que:',
    answers: [
      {
        answer: 'Estou próximo de um jardim zoológico.',
        correct: false,
      },
      {
        answer: 'O lugar é reservado à caça de animais selvagens.',
        correct: false,
      },
      {
        answer: 'A via pode ser atravessada por animais selvagens.',
        correct: true,
      },
    ],
  },
  {
    question: 'O que indica este sinal?',
    answers: [
      {
        answer: 'Informação.',
        correct: false,
      },
      {
        answer: 'Perigo.',
        correct: true,
      },
      {
        answer: 'Obrigação.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Trânsito proibido a veículos de largura superior a 2 metros.',
        correct: true,
      },
      {
        answer: 'Proibição de transitar a menos de 2 metros do veículo precedente.',
        correct: false,
      },
      {
        answer: 'Trânsito proibido a veículos de comprimento superior a 2 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'A manobra de inversão do sentido de marcha é permitida neste local?',
    answers: [
      {
        answer: 'Não, a sinalização existente na via não me permite efectuar a manobra.',
        correct: true,
      },
      {
        answer: 'Sim, a sinalização existente na via permite-me efectuar a manobra.',
        correct: false,
      },
      {
        answer: 'Sim, antes da curva e do sinal de perigo.',
        correct: false,
      },
    ],
  },
  {
    question: 'Perante o sinal de obrigação devo:',
    answers: [
      {
        answer: 'Circular à velocidade máxima de 50 km/h.',
        correct: false,
      },
      {
        answer: 'Circular a velocidade não inferior a 50 km/h.',
        correct: true,
      },
      {
        answer: 'Circular à distância mínima de 50 km/h do veículo que segue à frente.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal vertical triangular de fundo branco indica-me:',
    answers: [
      {
        answer: 'A existência de baias direccionais.',
        correct: false,
      },
      {
        answer: 'Proibição de efectuar a manobra de inversão do sentido de marcha.',
        correct: false,
      },
      {
        answer: 'A existência de uma curva perigosa à esquerda.',
        correct: true,
      },
    ],
  },
  {
    question: 'A que veículos se aplica a proibição sinalizada?',
    answers: [
      {
        answer: 'Aos veículos de peso por eixo inferior a 2t.',
        correct: false,
      },
      {
        answer: 'Aos veículos de peso total superior a 2t.',
        correct: false,
      },
      {
        answer: 'Aos veículos de peso por eixo superior a 2t.',
        correct: true,
      },
    ],
  },
  {
    question: 'O sinal de perigo indica:',
    answers: [
      {
        answer: 'Curva à direita.',
        correct: false,
      },
      {
        answer: 'Curva à esquerda e contracurva.',
        correct: true,
      },
      {
        answer: 'Curva à direita com contracurva.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal de perigo indica:',
    answers: [
      {
        answer: 'Travessia de peões.',
        correct: true,
      },
      {
        answer: 'Trabalhos na via.',
        correct: false,
      },
      {
        answer: 'Caminho obrigatório para peões.',
        correct: false,
      },
    ],
  },
  {
    question: 'Este sinal temporário indica:',
    answers: [
      {
        answer: 'Troço de via onde vou encontrar trabalhos na faixa de rodagem.',
        correct: false,
      },
      {
        answer: 'Troço da via temporariamente obstruído por ​ veículo .',
        correct: true,
      },
      {
        answer: 'Trânsito condicionado devido a obras no pavimento.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal de perigo significa:',
    answers: [
      {
        answer: 'Local frequentado por crianças.',
        correct: true,
      },
      {
        answer: 'Proibida a passagem de crianças.',
        correct: false,
      },
      {
        answer: 'Travessia de peões.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal de informação?',
    answers: [
      {
        answer: 'Área reservada pra veículos de deficientes.',
        correct: true,
      },
      {
        answer: 'Faixa reservada pra veículos de deficientes.',
        correct: false,
      },
      {
        answer: 'Parque de estacionamento pra veículos de deficientes.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal vertical indica-me que, a partir do local em que se encontra colocado, a via passa a ter:',
    answers: [
      {
        answer: 'Duas faixas de rodagem.',
        correct: true,
      },
      {
        answer: 'Duas faixas de rodagem.',
        correct: false,
      },
      {
        answer: 'Duas filas de trânsito em cada sentido.',
        correct: false,
      },
    ],
  },
  {
    question: 'Este sinal indica:',
    answers: [
      {
        answer: 'Animais sem condutor.',
        correct: true,
      },
      {
        answer: 'Pista obrigatória para animais.',
        correct: false,
      },
      {
        answer: 'Trânsito proibido a animais.',
        correct: false,
      },
    ],
  },
  {
    question: 'Neste local é frequente:',
    answers: [
      {
        answer: 'Que a aderência ao piso seja menor.',
        correct: false,
      },
      {
        answer: 'Encontrar o pavimento escorregadio.',
        correct: false,
      },
      {
        answer: 'A acção de vento lateral.',
        correct: true,
      },
    ],
  },
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 3050);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();
