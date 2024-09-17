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
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Convergência de filas de trânsito.',
        correct: true,
      },
      {
        answer: 'Fim da fila de trânsito a esquerda.',
        correct: false,
      },
      {
        answer: 'Fim da fila de trânsito a direita.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Faixa reservada para veículos autorizados para o transporte de passageiros do lado esquerdo.',
        correct: false,
      },
      {
        answer: 'Paragem para autocarros médios e miniautocarros em dias ímpares.',
        correct: true,
      },
      {
        answer: 'Paragem para autocarros médios e miniautocarros em dias pares.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Indica a existência de uma auto-estrada.',
        correct: true,
      },
      {
        answer: 'Indica a existência de uma via de sentido único.',
        correct: false,
      },
      {
        answer: 'Indica a existência de uma via rápida.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Desvio da fila de trânsito para à esquerda.',
        correct: true,
      },
      {
        answer: 'Desvio e aumento de filas de trânsito para à esquerda.',
        correct: false,
      },
      {
        answer: 'Desvio da fila de trânsito para à direita.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Indica a existência de um cemitério.',
        correct: false,
      },
      {
        answer: 'Indica a existência de uma Igreja.',
        correct: false,
      },
      {
        answer: 'Indica a existência de um cemitério histórico.',
        correct: true,
      },
    ],
  },
  {
    question: 'O sinal vertical indica-me:',
    answers: [
      {
        answer: 'Curva perigosa à direita.',
        correct: false,
      },
      {
        answer: 'Entroncamento com estrada sem prioridade.',
        correct: true,
      },
      {
        answer: 'Entroncamento com estrada com prioridade.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal de perigo?',
    answers: [
      {
        answer: 'Sinalização luminosa.',
        correct: true,
      },
      {
        answer: 'Aproximação de uma estrada com prioridade.',
        correct: false,
      },
      {
        answer: 'Controlo policial por pirilampos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Diante do sinal, o condutor fica a saber que:',
    answers: [
      {
        answer: 'Não pode utilizar os sinais sonoros.',
        correct: true,
      },
      {
        answer: 'É obrigado as desligar as luzes de estrada.',
        correct: false,
      },
      {
        answer: 'Deve utilizar os sinais sonoros.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Trânsito proibido a veículos de peso por eixo superior a 2 toneladas.',
        correct: true,
      },
      {
        answer: 'Trânsito proibido a veículos de peso total superior a 2 toneladas.',
        correct: false,
      },
      {
        answer: 'Trânsito proibido a veículos de peso por eixo inferior a 2 toneladas.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal vertical?',
    answers: [
      {
        answer: 'Pré-sinalização de via sem saída à direita.',
        correct: true,
      },
      {
        answer: 'Pré-sinalização de via sem saída à esquerda.',
        correct: false,
      },
      {
        answer: 'Estrada sem saída.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Proibição de circulação a velocidade máxima de 50 km/h.',
        correct: false,
      },
      {
        answer: 'Via obrigatória para veículos que circulam a 50 km/h.',
        correct: false,
      },
      {
        answer: 'Obrigação de circular a velocidade mínima de 50 km/h.',
        correct: true,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Via obrigatórias para automóveis pesados.',
        correct: false,
      },
      {
        answer: 'Via obrigatória para veículos que transportam substâncias perigosas.',
        correct: true,
      },
      {
        answer: 'Fim da proibição de circulação de veículos que transportam substâncias perigosas',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Proibição de pedir boleia.',
        correct: true,
      },
      {
        answer: 'Proibição de circulação de vendedores.',
        correct: false,
      },
      {
        answer: 'Proibição de parar.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Trânsito proibido a veículos de tracção animal.',
        correct: true,
      },
      {
        answer: 'Trânsito proibido a veículos de tracção manual.',
        correct: false,
      },
      {
        answer: 'Trânsito proibido a peões, animais e veículos.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal circular com fundo azul?',
    answers: [
      {
        answer: 'Via obrigatória para autocarros de excursão.',
        correct: false,
      },
      {
        answer: 'Via obrigatória para circulação de veículos de dimensões anormais.',
        correct: true,
      },
      {
        answer: 'Via obrigatória para veículos de construção.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Estacionamento condicionado.',
        correct: false,
      },
      {
        answer: 'Estacionamento proibido.',
        correct: false,
      },
      {
        answer: 'Paragem e estacionamento proibidos.',
        correct: true,
      },
    ],
  },
  {
    question: 'O que indica o sinal luminoso?',
    answers: [
      {
        answer: 'Acesso ou passagem interdito.',
        correct: false,
      },
      {
        answer: 'Acesso ou passagem autorizado.',
        correct: false,
      },
      {
        answer: 'Acesso ou passagem condicionado.',
        correct: true,
      },
    ],
  },
  {
    question: 'Diante o sinal, o condutor deve:',
    answers: [
      {
        answer: 'Ceder passagem aos peões.',
        correct: false,
      },
      {
        answer: 'Dar prioridade na rotunda.',
        correct: true,
      },
      {
        answer: 'Inverter o sentido de marcha.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Paragem obrigatória em três vias.',
        correct: true,
      },
      {
        answer: 'Paragem obrigatória.',
        correct: false,
      },
      {
        answer: 'Paragem obrigatória a três metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'Diante do sinal, é proibido:',
    answers: [
      {
        answer: 'Mudar de direcção para à esquerda.',
        correct: false,
      },
      {
        answer: 'Inverter o sentido de marcha.',
        correct: true,
      },
      {
        answer: 'Mudar de direcção para à direita.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Parque de estacionamento para veículos de deficientes.',
        correct: true,
      },
      {
        answer: 'Faixa reservada para veículos de deficientes.',
        correct: false,
      },
      {
        answer: 'Área reservada para deficientes.',
        correct: false,
      },
    ],
  },
  {
    question: 'Diante do sinal, não poderão transitar:',
    answers: [
      {
        answer: 'Veículos com comprimento superior à 15 metros.',
        correct: true,
      },
      {
        answer: 'Veículos com altura superior à 15 metros.',
        correct: false,
      },
      {
        answer: 'Veículos com largura superior à 15 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Sentido obrigatório giratório.',
        correct: true,
      },
      {
        answer: 'Sentidos obrigatórios possíveis.',
        correct: false,
      },
      {
        answer: 'Sentido obrigatório para à direita.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Cancela motorizada à direita.',
        correct: true,
      },
      {
        answer: 'Cancelas motorizada à esquerda.',
        correct: false,
      },
      {
        answer: 'Cancela motorizada ao centro.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal de interesse turístico?',
    answers: [
      {
        answer: 'Reserva florestal.',
        correct: false,
      },
      {
        answer: 'Reserva natural.',
        correct: false,
      },
      {
        answer: 'Reserva de caça.',
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
