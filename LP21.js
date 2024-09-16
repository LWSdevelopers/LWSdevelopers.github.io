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
        answer: 'Prioridade nas passagens estreitas.',
        correct: true,
      },
      {
        answer: 'Dar prioridade nas passagens estreitas.',
        correct: false,
      },
      {
        answer: 'Trânsito nos dois sentidos.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Parque de estacionamento para veículos que transportam substâncias perigosas.',
        correct: false,
      },
      {
        answer: 'Área reservada para veículos com dimensões anormais.',
        correct: false,
      },
      {
        answer: 'Área reservada para veículos que transportam substâncias perigosas.',
        correct: true,
      },
    ],
  },
  {
    question: 'O que indica o sinal circular?',
    answers: [
      {
        answer: 'Proibição de ultrapassagem para motociclos simples.',
        correct: true,
      },
      {
        answer: 'Proibição de ultrapassagem para automóveis ligeiros.',
        correct: false,
      },
      {
        answer: 'Tránsito proibido para todos os veículos automóveis.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Parque de estacionamento para veículos de emergência.',
        correct: true,
      },
      {
        answer: 'Parque de estacionamento para miniautocarros.',
        correct: false,
      },
      {
        answer: 'Parque de estacionamento para veículos com altura acima do normal.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Águas interiores.',
        correct: false,
      },
      {
        answer: 'Águas termais.',
        correct: false,
      },
      {
        answer: 'Cascata.',
        correct: true,
      },
    ],
  },
  {
    question: 'O que indica o sinal vertical?',
    answers: [
      {
        answer: 'Fim da proibição de ultrapassagem para motociclos simples.',
        correct: false,
      },
      {
        answer: 'Fim da proibição de ultrapassagem.',
        correct: true,
      },
      {
        answer: 'Fim da proibição de ultrapassagem para automóveis pesados.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal circular?',
    answers: [
      {
        answer: 'Paragem proibida.',
        correct: true,
      },
      {
        answer: 'Estacionamento proibido',
        correct: false,
      },
      {
        answer: 'Fim do estacionamento proibido.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Faixa reservada para qualquer tipo de autocarro do lado esquerdo.',
        correct: false,
      },
      {
        answer: 'Área reservada para autocarros e autocarros médios.',
        correct: true,
      },
      {
        answer: 'Parque de estacionamento para autocarros e autocarros médios.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Área reservada para veículos de emergência.',
        correct: true,
      },
      {
        answer: 'Área reservada para veículos com dimensões anormais.',
        correct: false,
      },
      {
        answer: 'Área reservada para miniautocarros.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Trânsito proibido a veículos automóveis e motociclos com carro.',
        correct: true,
      },
      {
        answer: 'Trânsito proibido a automóveis ligeiros de passageiros.',
        correct: false,
      },
      {
        answer: 'Trânsito proibido a Táxis.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Prioridade nas passagens estreitas.',
        correct: false,
      },
      {
        answer: 'Dar prioridade nas passagens estreitas.',
        correct: true,
      },
      {
        answer: 'Fim da fila de trânsito a esquerda.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'A existência de uma oficina.',
        correct: false,
      },
      {
        answer: 'A existência de um acidente na via.',
        correct: true,
      },
      {
        answer: 'A existência de uma berma baixa do lado esquerdo.',
        correct: false,
      },
    ],
  },
  {
    question: 'Este sinal indica:',
    answers: [
      {
        answer: 'Que existe um cruzamento com estrada sem prioridade.',
        correct: true,
      },
      {
        answer: 'Que existe um cruzamento com estrada com prioridade.',
        correct: false,
      },
      {
        answer: 'Obrigação de ceder a passagem.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal indica:',
    answers: [
      {
        answer: 'Estacionamento condicionado.',
        correct: true,
      },
      {
        answer: 'Estacionamento proibido',
        correct: false,
      },
      {
        answer: 'Estacionamento limitado.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal complementar de perigo?',
    answers: [
      {
        answer: 'Baia direcional para a esquerda.',
        correct: false,
      },
      {
        answer: 'Baia indicadora de direcção a direita.',
        correct: true,
      },
      {
        answer: 'Baia direcional para a direita.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Indica a existência de uma área reservada para veículos da Policia.',
        correct: true,
      },
      {
        answer: 'Indica a existência de um parque de estacionamento para veículos da Policia.',
        correct: false,
      },
      {
        answer: 'Indica a existência de uma faixa reservada para o estacionamento de veículos da Policia do lado esquerdo.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'A existência de um terreno falso à direita.',
        correct: false,
      },
      {
        answer: 'A existência de uma berma baixa à esquerda.',
        correct: false,
      },
      {
        answer: 'A existência de uma berma baixa à direita.',
        correct: true,
      },
    ],
  },
  {
    question: 'O sinal da fotografia proíbe:',
    answers: [
      {
        answer: 'A presença de turistas.',
        correct: false,
      },
      {
        answer: 'A presença de vendedores.',
        correct: true,
      },
      {
        answer: 'A presença de peões e veículos não automóveis.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal de perigo?',
    answers: [
      {
        answer: 'Passagem de nível sem guarda com duas ou mais vias.',
        correct: true,
      },
      {
        answer: 'Local de passagem de nível sem guarda.',
        correct: false,
      },
      {
        answer: 'Passagem de nível com guarda.',
        correct: false,
      },
    ],
  },
  {
    question: 'A que grupo pertence o sinal?',
    answers: [
      {
        answer: 'Sinais de direcção para áreas turísticas.',
        correct: false,
      },
      {
        answer: 'Sinais de interesse turístico.',
        correct: true,
      },
      {
        answer: 'Sinais de direcção nas estradas, ruas e vias rápidas.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Pista obrigatória para riquexó.',
        correct: true,
      },
      {
        answer: 'Pista obrigatória para veículos de tracção animal.',
        correct: false,
      },
      {
        answer: 'Pista obrigatória para veículos de tracção manual.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Passagem de nível.',
        correct: true,
      },
      {
        answer: 'Passagem de um veículo automóvel de cada vez.',
        correct: false,
      },
      {
        answer: 'A presença de máquinas na via.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal de interesse turístico?',
    answers: [
      {
        answer: 'Reserva florestal.',
        correct: true,
      },
      {
        answer: 'Parque de campismo.',
        correct: false,
      },
      {
        answer: 'Lugar histórico e genérico.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Local de passagem de nível sem guarda com duas ou mais vias.',
        correct: true,
      },
      {
        answer: 'Local de passagem de nível sem guarda.',
        correct: false,
      },
      {
        answer: 'Passagem de nível.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal de informação?',
    answers: [
      {
        answer: 'Área reservada para táxis.',
        correct: false,
      },
      {
        answer: 'Parque de estacionamento para automóveis ligeiros de passageiros.',
        correct: false,
      },
      {
        answer: 'Área reservada para automóveis ligeiros.',
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
