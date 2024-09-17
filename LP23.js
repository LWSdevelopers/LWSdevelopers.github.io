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
    question: 'Depois do sinal vertical, o condutor:',
    answers: [
      {
        answer: 'Pode parar o veículo.',
        correct: true,
      },
      {
        answer: 'Pode parar e estacionar o veículo.',
        correct: false,
      },
      {
        answer: 'Pode estacionar o veículo.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal:',
    answers: [
      {
        answer: 'Informa que se trata de via com dois sentidos.',
        correct: false,
      },
      {
        answer: 'Informa que se trata de via de trânsito de sentido único.',
        correct: true,
      },
      {
        answer: 'Indica sentido obrigatório para a frente.',
        correct: false,
      },
    ],
  },
  {
    question: 'A sinalização vertical indica:',
    answers: [
      {
        answer: 'Cruzamento com trânsito nos dois sentidos.',
        correct: true,
      },
      {
        answer: 'Entroncamento com estrada com prioridade em T.',
        correct: false,
      },
      {
        answer: 'Trânsito nos dois sentidos.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal de cor amarela e preta, indica:',
    answers: [
      {
        answer: 'Baia limitadora de altura.',
        correct: true,
      },
      {
        answer: 'Baia indicadora de separador físico.',
        correct: false,
      },
      {
        answer: 'Barricada.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Dar prioridade nas passagens estreitas.',
        correct: false,
      },
      {
        answer: 'Trânsito nos dois sentidos.',
        correct: false,
      },
      {
        answer: 'Prioridade nas passagens estreitas.',
        correct: true,
      },
    ],
  },
  {
    question: 'O sinal, quando proíbe a inversão do sentido de marcha?',
    answers: [
      {
        answer: 'Nos dias de chuva.',
        correct: false,
      },
      {
        answer: 'De noite.',
        correct: true,
      },
      {
        answer: 'De dia.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal obriga ao condutor a:',
    answers: [
      {
        answer: 'Acender as luzes do veículo.',
        correct: true,
      },
      {
        answer: 'Ligar em simultâneo os indicadores de mudança de direcção.',
        correct: false,
      },
      {
        answer: 'Apagar as luzes do veículo.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal de interesse turístico?',
    answers: [
      {
        answer: 'Hospital.',
        correct: true,
      },
      {
        answer: 'Posto de socorro.',
        correct: false,
      },
      {
        answer: 'Hospital com emergência médica.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Via de sentido único para a direita.',
        correct: true,
      },
      {
        answer: 'Via de sentido único.',
        correct: false,
      },
      {
        answer: 'Via de sentido único para a esquerda.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal vertical indica-me:',
    answers: [
      {
        answer: 'Entroncamento com estrada com prioridade.',
        correct: true,
      },
      {
        answer: 'Curva perigosa à direita.',
        correct: false,
      },
      {
        answer: 'Entroncamento com estrada sem prioridade.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Aproximação de saída de auto-estrada a 100 metros.',
        correct: false,
      },
      {
        answer: 'Aproximação de saída de auto-estrada a 300 metros.',
        correct: true,
      },
      {
        answer: 'Aproximação de saída de auto-estrada a 200 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal de perigo?',
    answers: [
      {
        answer: 'A possibilidade de existência de vento lateral.',
        correct: true,
      },
      {
        answer: 'A possibilidade de existência de queda de pedras a direita.',
        correct: false,
      },
      {
        answer: 'Uma pista de aviação.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Obrigação de circulação à velocidade mínima de 80 km/h na fila a direita.',
        correct: true,
      },
      {
        answer: 'Obrigação de circulação à velocidade mínima de 80 km/h na fila central.',
        correct: false,
      },
      {
        answer: 'Obrigação de circulação à velocidade mínima de 80 km/h na fila a esquerda.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Via obrigatória para autocarros.',
        correct: false,
      },
      {
        answer: 'Via obrigatória para automóveis pesados.',
        correct: true,
      },
      {
        answer: 'Via obrigatória para veículos de mercadorias.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'A existência de uma berma baixa a esquerda.',
        correct: false,
      },
      {
        answer: 'A existência de um terreno falso a direita.',
        correct: false,
      },
      {
        answer: 'A existência de uma berma baixa a direita.',
        correct: true,
      },
    ],
  },
  {
    question: 'O sinal luminoso com a seta verde indica:',
    answers: [
      {
        answer: 'Acesso ou passagem interdito.',
        correct: false,
      },
      {
        answer: 'Acesso ou passagem condicionado.',
        correct: false,
      },
      {
        answer: 'Acesso ou passagem autorizado.',
        correct: true,
      },
    ],
  },
  {
    question: 'A que grupo pertence o sinal?',
    answers: [
      {
        answer: 'Sinais de proibição.',
        correct: false,
      },
      {
        answer: 'Sinais combinados.',
        correct: true,
      },
      {
        answer: 'Sinais com painéis adicionais.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Obrigação de acender as luzes.',
        correct: true,
      },
      {
        answer: 'Obrigação de imobilizar o veículo.',
        correct: false,
      },
      {
        answer: 'Obrigação de apagar as luzes.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Paragem obrigatória a três metros',
        correct: false,
      },
      {
        answer: 'Paragem obrigatória em três vias.',
        correct: true,
      },
      {
        answer: 'Paragem obrigatória.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'A presença de ponte móvel.',
        correct: true,
      },
      {
        answer: 'A presença de cancelas motorizada ao centro.',
        correct: false,
      },
      {
        answer: 'A presença de entroncamento oblíquo a esquerda.',
        correct: false,
      },
    ],
  },
  {
    question: 'Que indica o sinal?',
    answers: [
      {
        answer: 'Visibilidade reduzida.',
        correct: true,
      },
      {
        answer: 'Início de estrada alcatroada.',
        correct: false,
      },
      {
        answer: 'Pavimento escorregadio.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Trânsito proibido á veículos de tracção manual.',
        correct: true,
      },
      {
        answer: 'Trânsito proibido á carros de mão.',
        correct: false,
      },
      {
        answer: 'Trânsito proibido á veículos de tracção animal.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Túnel',
        correct: true,
      },
      {
        answer: 'Proibição de ultrapassagem para veículos ligeiros.',
        correct: false,
      },
      {
        answer: 'Visibilidade reduzida.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Visibilidade reduzida.',
        correct: false,
      },
      {
        answer: 'Início de estrada alcatroada.',
        correct: false,
      },
      {
        answer: 'Fim de estrada alcatroada.',
        correct: true,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Pista obrigatória para velocípedes e peões.',
        correct: false,
      },
      {
        answer: 'Pista obrigatória para veículos de tracção animal.',
        correct: false,
      },
      {
        answer: 'Pista obrigatória para veículos de tracção manual.',
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
