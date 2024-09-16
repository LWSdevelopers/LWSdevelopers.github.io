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
        answer: 'Pista obrigatória para cavaleiros.',
        correct: false,
      },
      {
        answer: 'Pista obrigatória para veículos de tracção animal.',
        correct: true,
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
        answer: 'Início de localidades.',
        correct: false,
      },
      {
        answer: 'Fim de localidades.',
        correct: true,
      },
      {
        answer: 'Advertência suplementar de direção ou direcção de acesso.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal, pertence ao grupo de sinais de:',
    answers: [
      {
        answer: 'Direção para auto-estradas.',
        correct: true,
      },
      {
        answer: 'Pré-sinalização e de direcção.',
        correct: false,
      },
      {
        answer: 'Direção',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Existência de portagem na via em que segue.',
        correct: true,
      },
      {
        answer: 'Sentido obrigatório para a frente.',
        correct: false,
      },
      {
        answer: 'Via rápida.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Passagem desnivelada para peões.',
        correct: false,
      },
      {
        answer: 'Pista obrigatória para peões.',
        correct: false,
      },
      {
        answer: 'Passagem de peões.',
        correct: true,
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
        answer: 'Paragem e estacionamento proibidos.',
        correct: false,
      },
      {
        answer: 'Estacionamento proibido.',
        correct: true,
      },
    ],
  },
  {
    question: 'Como devo proceder perante o sinal vertical?',
    answers: [
      {
        answer: 'Moderar a velocidade porque a circulação passa a ser feita nos dois sentidos.',
        correct: true,
      },
      {
        answer: '​ Manter a velocidade porque o trânsito passa a fazer-se apenas num só sentido.',
        correct: false,
      },
      {
        answer: 'Manter a velocidade porque tenho prioridade no próximo estreitamento da via pública.',
        correct: false,
      },
    ],
  },
  {
    question: 'A velocidade controlada pelo sinal, é:',
    answers: [
      {
        answer: 'A velocidade recomendada.',
        correct: false,
      },
      {
        answer: 'A velocidade mínima.',
        correct: false,
      },
      {
        answer: 'A velocidade máxima.',
        correct: true,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Trânsito proibido.',
        correct: true,
      },
      {
        answer: 'Trânsito proibido a automóveis ligeiros de passageiros.',
        correct: false,
      },
      {
        answer: 'Sentido proibido.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal de informação?',
    answers: [
      {
        answer: 'Parque de estacionamento para táxis.',
        correct: false,
      },
      {
        answer: 'Início da faixa reservada para táxis do lado esquerdo.',
        correct: false,
      },
      {
        answer: 'Área reservada para táxis.',
        correct: true,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Cruzamento.',
        correct: false,
      },
      {
        answer: 'Cruzamento com estrada com prioridade.',
        correct: false,
      },
      {
        answer: 'Cruzamento com estrada sem prioridade.',
        correct: true,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Paragem obrigatória.',
        correct: false,
      },
      {
        answer: 'Paragem proibida.',
        correct: true,
      },
      {
        answer: 'Fim da proibição de estacionamento.',
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
        answer: 'Pavimento escorregadio.',
        correct: false,
      },
      {
        answer: 'Início de estrada alcatroada.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Advertência da direcção de saída.',
        correct: false,
      },
      {
        answer: 'Direcção de saída.',
        correct: false,
      },
      {
        answer: 'Pré-advertência da direcção de saída.',
        correct: true,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Entroncamento obliquo à direita.',
        correct: false,
      },
      {
        answer: 'Descida de inclinação acentuada ao longo da distância indicada.',
        correct: true,
      },
      {
        answer: 'Descida de inclinação acentuada',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Fim da fila de trânsito á direita.',
        correct: false,
      },
      {
        answer: 'Fim da fila de trânsito á esquerda.',
        correct: false,
      },
      {
        answer: 'Convergência de filas de trânsito.',
        correct: true,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Trânsito proibido a animais e veículos não automoveis.',
        correct: false,
      },
      {
        answer: 'Trânsito proibido a peões, animais e veículos automóveis.',
        correct: false,
      },
      {
        answer: 'Trânsito proibido a peões, animais e veículos não automóveis.',
        correct: true,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Área reservada para veículos que transportam substâncias perigosas.',
        correct: false,
      },
      {
        answer: 'Paragem proibida a veículos que transportam substâncias perigosas.',
        correct: true,
      },
      {
        answer: 'Paragem obrigatória para veículos que transportam substâncias perigosas.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que significa o sinal vertical?',
    answers: [
      {
        answer: 'Circulação alternada.',
        correct: false,
      },
      {
        answer: 'Fim de obras.',
        correct: false,
      },
      {
        answer: 'Trabalhos na via.',
        correct: true,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Proibição de circular á velocidade máxima de 60 km/h na fila a direita.',
        correct: false,
      },
      {
        answer: 'Obrigação de circular á velocidade mínima de 60 km/h na fila a direita.',
        correct: true,
      },
      {
        answer: 'Obrigação de circular á velocidade mínima de 60 km/h na fila a esquerda.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Pista obrigatória para peões e velocípedes.',
        correct: true,
      },
      {
        answer: 'Trânsito proibido a velocípedes e peões.',
        correct: false,
      },
      {
        answer: 'Pista obrigatória para veículos de tração manual.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Proibição de exceder a velocidade de 120 km/h de dia.',
        correct: true,
      },
      {
        answer: 'Proibição de exceder a velocidade de 120 km/h, transportando substâncias perigosas.',
        correct: false,
      },
      {
        answer: 'Proibição de exceder a velocidade de 120 km/h de noite.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal triangular?',
    answers: [
      {
        answer: 'Passagem de nível.',
        correct: true,
      },
      {
        answer: 'Local de passagem de nível com cancela, com duas ou mais vias.',
        correct: false,
      },
      {
        answer: 'Local de passagem de nível com cancela.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Trânsito proibido a automóveis ligeiros de passageiros.',
        correct: true,
      },
      {
        answer: 'Trânsito proibido a automóveis ligeiros e motociclos.',
        correct: false,
      },
      {
        answer: 'Proibição de ultrapassagem.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Cruzamento facilmente congestionável.',
        correct: false,
      },
      {
        answer: 'Terreno falso à direita.',
        correct: false,
      },
      {
        answer: 'Congestionamento de tráfego.',
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
