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
    question: 'Perante o sinal devo:',
    answers: [
      {
        answer: 'Reduzir a velocidade porque pode surgir uma criança.',
        correct: true,
      },
      {
        answer: 'Utilizar os sinais sonoros de forma intermitente.',
        correct: false,
      },
      {
        answer: 'Parar obrigatoriamente.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal vertical proíbe o trânsito:',
    answers: [
      {
        answer: 'A todos os automóveis pesados.',
        correct: false,
      },
      {
        answer: 'Aos automóveis ligeiros e pesados de mercadorias.',
        correct: true,
      },
      {
        answer: 'Apenas aos automóveis pesados de mercadorias.',
        correct: false,
      },
    ],
  },
  {
    question: 'Este sinal indica a proibição de ultrapassar:',
    answers: [
      {
        answer: 'Para automóveis ligeiros e pesados.',
        correct: true,
      },
      {
        answer: 'Somente para automóveis ligeiros.',
        correct: false,
      },
      {
        answer: 'Somente para automóveis pesados.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal vertical indica:',
    answers: [
      {
        answer: 'Via com trânsito de sentido único.',
        correct: true,
      },
      {
        answer: 'Via onde só é possível formar uma fila de trânsito em cada sentido.',
        correct: false,
      },
      {
        answer: 'Sentido obrigatório.',
        correct: false,
      },
    ],
  },
  {
    question: 'Posso circular a velocidade superior a 40 Km/h nesta estrada?',
    answers: [
      {
        answer: 'Sim, o sinal indica-me a entrada numa zona de velocidade recomendada superior a 40 Km/h.',
        correct: false,
      },
      {
        answer: 'Sim, o sinal indica-me que terminou a zona de velocidade limitada a 40 Km/h.',
        correct: false,
      },
      {
        answer: 'Não, o sinal indica-me entrada numa zona em que a velocidade está limitada à indicada no sinal.',
        correct: true,
      },
    ],
  },
  {
    question: 'O sinal vertical indica:',
    answers: [
      {
        answer: 'Zona de paragem e estacionamento limitado.',
        correct: false,
      },
      {
        answer: 'Estacionamento proibido.',
        correct: true,
      },
      {
        answer: 'Local de paragem proibida',
        correct: false,
      },
    ],
  },
  {
    question: 'Este sinal é de:',
    answers: [
      {
        answer: 'Cedência de passagem.',
        correct: true,
      },
      {
        answer: '​ Selecção de vias.',
        correct: false,
      },
      {
        answer: 'Informação.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal informa-me que na via de trânsito mais à direita devo:',
    answers: [
      {
        answer: 'Circular á velocidade mínima de 80 km/h.',
        correct: true,
      },
      {
        answer: 'Circular à velocidade constante de 80 km/h.',
        correct: false,
      },
      {
        answer: 'Circular a menos de 80 Km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'Perante este sinal devo circular com velocidade moderada?',
    answers: [
      {
        answer: 'Sim, o sinal vertical indica-me um troço da via com bermas baixas do lado direito.',
        correct: true,
      },
      {
        answer: '​ Sim, o sinal vertical indica-me um troço da via com pavimento escorregadio.',
        correct: false,
      },
      {
        answer: '​ Não, a sinalização existente na via apenas proíbe a manobra de ultrapassagem.',
        correct: false,
      },
    ],
  },
  {
    question: 'Este sinal indica:',
    answers: [
      {
        answer: 'Que existe um cruzamento com estrada com prioridade.',
        correct: true,
      },
      {
        answer: 'Que existe um cruzamento com estrada sem prioridade.',
        correct: false,
      },
      {
        answer: 'Obrigação de ceder a passagem.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se circular com um automóvel ligeiro de mercadorias posso seguir em frente?',
    answers: [
      {
        answer: 'Sim, o sinal apenas proíbe a passagem de automóveis pesados de mercadorias.',
        correct: false,
      },
      {
        answer: 'Sim, o sinal indica zona de estacionamento proibido a automóveis pesados de mercadorias.',
        correct: false,
      },
      {
        answer: 'Não, o sinal proíbe a circulação de automóveis ligeiros e pesados de mercadorias.',
        correct: true,
      },
    ],
  },
  {
    question: 'O que significa o sinal vertical de forma triangular?',
    answers: [
      {
        answer: 'Obrigação de contornar placa ou obstáculo.',
        correct: false,
      },
      {
        answer: 'Aproximação de rotunda.',
        correct: true,
      },
      {
        answer: 'Rotunda.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que significa o sinal vertical triangular?',
    answers: [
      {
        answer: 'Cruzamento com estrada sem prioridade.',
        correct: true,
      },
      {
        answer: 'Entroncamento com estrada com prioridade.',
        correct: false,
      },
      {
        answer: 'Cruzamento com estrada com prioridade.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal de cedência de passagem indica:',
    answers: [
      {
        answer: 'Paragem obrigatória.',
        correct: true,
      },
      {
        answer: 'Sentido proibido.',
        correct: false,
      },
      {
        answer: 'Trânsito proibido.',
        correct: false,
      },
    ],
  },
  {
    question: 'Perante este sinal devo:',
    answers: [
      {
        answer: 'Avançar, porque o trânsito se faz em simultâneo nos dois sentidos.',
        correct: false,
      },
      {
        answer: 'Dar prioridade nas passagens estreitas.',
        correct: true,
      },
      {
        answer: 'Avançar, porque tenho prioridade.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao avistar o sinal vertical devo moderar a velocidade porque:',
    answers: [
      {
        answer: 'Aproximo-me de uma curva perigosa.',
        correct: false,
      },
      {
        answer: 'A velocidade é controlada pelo sistema de radar.',
        correct: false,
      },
      {
        answer: 'Aproximo-me de um local onde o trânsito é regulado por sinalização luminosa.',
        correct: true,
      },
    ],
  },
  {
    question: 'O sinal vertical indica-me fim de velocidade:',
    answers: [
      {
        answer: 'Permitida.',
        correct: false,
      },
      {
        answer: 'Obrigatória.',
        correct: false,
      },
      {
        answer: 'Proibida.',
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
        answer: 'Bermas baixas.',
        correct: true,
      },
      {
        answer: 'Resíduos no pavimento que podem provocar despiste.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal vertical que se encontra nesta via pública indica-me que:',
    answers: [
      {
        answer: 'Devo ceder a passagem ao veículo que transita em sentido contrário.',
        correct: true,
      },
      {
        answer: 'A via pública tem dois sentidos de trânsito.',
        correct: false,
      },
      {
        answer: 'Tenho prioridade de passagem.',
        correct: false,
      },
    ],
  },
  {
    question: 'Devo circular na via de trânsito mais à direita?',
    answers: [
      {
        answer: 'Não, se circular a 80 km/h.',
        correct: false,
      },
      {
        answer: 'Sim, excepto para ultrapassar.',
        correct: true,
      },
      {
        answer: '​ Não, se circular a 100 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Início de estrada alcatroada.',
        correct: true,
      },
      {
        answer: 'Fim de estrada alcatroada.',
        correct: false,
      },
      {
        answer: 'Visibilidade reduzida.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal vertical indica:',
    answers: [
      {
        answer: 'O fim do limite máximo de velocidade.',
        correct: true,
      },
      {
        answer: 'O limite de velocidade recomendado para toda a faixa de rodagem.',
        correct: false,
      },
      {
        answer: 'O limite mínimo de velocidade, para aquela zona.',
        correct: false,
      },
    ],
  },
  {
    question: 'Perante este sinal:',
    answers: [
      {
        answer: 'Devo ceder a passagem a todos e quaisquer veículos que transitem na via que se aproxima.',
        correct: true,
      },
      {
        answer: 'No próximo entroncamento, estou obrigado a ceder a passagem apenas aos automóveis.',
        correct: false,
      },
      {
        answer: 'Tenho prioridade de passagem sobre os veículos sem motor que circulam na via que se aproxima.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que significa o sinal vertical?',
    answers: [
      {
        answer: 'Paragem e estacionamento proibidos',
        correct: true,
      },
      {
        answer: 'Apenas o estacionamento é proibido.',
        correct: false,
      },
      {
        answer: 'Apenas a paragem é proibida.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal vertical indica-me que:',
    answers: [
      {
        answer: 'O trânsito passa a fazer-se apenas num sentido.',
        correct: false,
      },
      {
        answer: 'Não tenho prioridade no próximo estreitamento da faixa de rodagem.',
        correct: false,
      },
      {
        answer: 'A via pública passa a ter trânsito nos dois sentidos.',
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
