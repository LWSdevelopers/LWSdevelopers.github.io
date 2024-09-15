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
        answer: 'Paragem obrigatória a 60 metros.',
        correct: true,
      },
      {
        answer: 'Trânsito proibido a veiculos com comprimento superior a 60 metros.',
        correct: false,
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
        answer: 'Passagem de peões.',
        correct: false,
      },
      {
        answer: 'Passagem desnivelada para peões com rampas.',
        correct: true,
      },
      {
        answer: 'Pista obrigatória para peões.',
        correct: false,
      },
    ],
  },
  {
    question: 'A que grupo pertence o sinal triangular?',
    answers: [
      {
        answer: 'Sinais temporários de perigo.',
        correct: true,
      },
      {
        answer: 'Sinais temporários de proibição.',
        correct: false,
      },
      {
        answer: 'Sinais temporários de obrigação.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual o significado do sinal de perigo?',
    answers: [
      {
        answer: 'Passagem estreita à direita.',
        correct: true,
      },
      {
        answer: 'Supressão da via da direita.',
        correct: false,
      },
      {
        answer: 'Curva perigosa à direita.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como devo proceder face à informação que me é dada pelo sinal vertical?',
    answers: [
      {
        answer: 'Engrenar a primeira velocidade na depressão.',
        correct: false,
      },
      {
        answer: 'Manter a velocidade e parar antes das lombas.',
        correct: false,
      },
      {
        answer: 'Moderar especialmente a velocidade.',
        correct: true,
      },
    ],
  },
  {
    question: 'O sinal de cedência de passagem indica:',
    answers: [
      {
        answer: 'Proibição de contornar a rotunda.',
        correct: false,
      },
      {
        answer: 'Aproximação de uma rotunda com trânsito giratório.',
        correct: true,
      },
      {
        answer: 'Obrigação de contornar a rotunda.',
        correct: false,
      },
    ],
  },
  {
    question: 'Este sinal vertical dá indicação aos condutores de:',
    answers: [
      {
        answer: 'Troço de via em que podem ser encontrados animais sem condutor.',
        correct: true,
      },
      {
        answer: 'Proximidade de pista obrigatória para gado em manada.',
        correct: false,
      },
      {
        answer: 'Trânsito proibido a veículos de tracção animal.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual o perigo indicado por este sinal?',
    answers: [
      {
        answer: 'Queda de pedras.',
        correct: true,
      },
      {
        answer: 'Projecção de gravilhas.',
        correct: false,
      },
      {
        answer: 'Bermas baixas.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Trânsito proibido a tractores agrícolas.',
        correct: true,
      },
      {
        answer: 'Trânsito proibido a veículos de construção.',
        correct: false,
      },
      {
        answer: 'Fim da proibição de circulação de tractores agrícolas.',
        correct: false,
      },
    ],
  },
  {
    question: 'Este sinal de perigo deve estar colocado, na aproximação de:',
    answers: [
      {
        answer: 'Um túnel.',
        correct: true,
      },
      {
        answer: 'Um local de visibilidade insuficiente.',
        correct: false,
      },
      {
        answer: 'Uma passagem estreita.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Proibição de circulacão de peões.',
        correct: false,
      },
      {
        answer: 'Proibição de circulacão de peões.',
        correct: false,
      },
      {
        answer: 'Prioridade de passagem para peões.',
        correct: true,
      },
    ],
  },
  {
    question: 'A sinalização temporária indica o perigo de:',
    answers: [
      {
        answer: 'Trabalhos na via.',
        correct: false,
      },
      {
        answer: 'Projecção de gravilhas.',
        correct: true,
      },
      {
        answer: 'Queda de pedras.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal indica:',
    answers: [
      {
        answer: 'Pista de aviação.',
        correct: true,
      },
      {
        answer: 'Vento lateral.',
        correct: false,
      },
      {
        answer: 'Museu de aviação.',
        correct: false,
      },
    ],
  },
  {
    question: 'Perante o sinal vertical que se encontra na via, fico a saber:',
    answers: [
      {
        answer: 'Que me aproximo de um local onde existe uma ponte móvel.',
        correct: true,
      },
      {
        answer: 'Que a ponte móvel se encontra levantada e que circulação se encontra temporariamente interrompida.',
        correct: false,
      },
      {
        answer: 'Que a via onde circulo vai terminar num cais ou precipício',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Proibição de ultrapassagem aos automóveis pesados',
        correct: false,
      },
      {
        answer: 'Trânsito proibido a veículos que transportam substâncias perigosas.',
        correct: true,
      },
      {
        answer: 'Trânsito proibido a veículos com reboque..',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal vertical que se encontra nesta via indica:',
    answers: [
      {
        answer: 'Circulação numa via reservada a veículos automóveis.',
        correct: false,
      },
      {
        answer: 'Local onde é autorizado o estacionamento na berma.',
        correct: false,
      },
      {
        answer: 'Proximidade de um troço de via com elevado volume de trânsito.',
        correct: true,
      },
    ],
  },
  {
    question: 'Este sinal obriga a:',
    answers: [
      {
        answer: 'Cedência de passagem nos sucessivos entroncamentos e cruzamentos',
        correct: false,
      },
      {
        answer: 'Paragem no próximo cruzamento ou entroncamento.',
        correct: false,
      },
      {
        answer: 'Cedência de passagem a todos os veículos que circulem na via de que me aproximo.',
        correct: true,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Trânsito proibido a veículos de peso por eixo múltiplo superior a 10t.',
        correct: false,
      },
      {
        answer: 'Trânsito proibido a veículos de peso por eixo superior a 10t.',
        correct: true,
      },
      {
        answer: 'Trânsito proibido ao conjunto de veículos de mercadorias, de peso total superior a 10t.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal indica:',
    answers: [
      {
        answer: 'Controlo policial por pirilampos.',
        correct: true,
      },
      {
        answer: 'Congestionamento do tráfego.',
        correct: false,
      },
      {
        answer: 'Existência de controlo de tráfego adiante.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Passagem estreita.',
        correct: false,
      },
      {
        answer: 'Ponte estreita.',
        correct: true,
      },
      {
        answer: 'Entrocamentos sucessivos.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Sinalização luminosa em manutenção.',
        correct: true,
      },
      {
        answer: 'Passagens de nível.',
        correct: false,
      },
      {
        answer: 'Trânsito proibido',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal indica:',
    answers: [
      {
        answer: 'Aproximação de passagem de peões.',
        correct: true,
      },
      {
        answer: 'Local frequentado por idosos',
        correct: false,
      },
      {
        answer: 'Local frequentado por crianças',
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
    question: 'Que significado tem o sinal vertical?',
    answers: [
      {
        answer: 'Trabalhos na via.',
        correct: true,
      },
      {
        answer: 'Proximidade de via sem saída devido a obras no local.',
        correct: false,
      },
      {
        answer: 'Indicação de um local frequentado por trabalhadores agrícolas.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal luminoso?',
    answers: [
      {
        answer: 'Acesso ou passagem condicionado.',
        correct: false,
      },
      {
        answer: 'Acesso ou passagem autorizado.',
        correct: false,
      },
      {
        answer: 'Acesso ou passagem interdito.',
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
