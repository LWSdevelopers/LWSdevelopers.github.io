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
    question: 'Um veículo com altura superior a 2 metros pode circular depois deste sinal?',
    answers: [
      {
        answer: 'Sim, desde que não seja superior à indicada no sinal.',
        correct: true,
      },
      {
        answer: 'Sim',
        correct: false,
      },
      {
        answer: 'Não',
        correct: false,
      },
    ],
  },
  {
    question: 'A sinalização existente proíbe-me:',
    answers: [
      {
        answer: 'A curvar com as devidas precauções.',
        correct: false,
      },
      {
        answer: 'A mudar de direcção para a direita.',
        correct: true,
      },
      {
        answer: 'A mudar de direcção para a esquerda',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual o significado do sinal vertical?',
    answers: [
      {
        answer: 'Proibição de mudança de direcção à direita.',
        correct: true,
      },
      {
        answer: 'Proibição de inverter o sentido de marcha.',
        correct: false,
      },
      {
        answer: 'Curva perigosa à esquerda.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual destes veículos está sempre proibido de transitar para além do sinal de regulamentação?',
    answers: [
      {
        answer: 'Um automóvel pesado com 12 toneladas de peso total.',
        correct: true,
      },
      {
        answer: 'Um automóvel pesado de mercadorias de 12 toneladas de peso bruto.',
        correct: false,
      },
      {
        answer: 'Um automóvel com 12 toneladas de peso bruto.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal de proibição permite o trânsito a veículos:',
    answers: [
      {
        answer: 'De altura superior a 12 metros.',
        correct: false,
      },
      {
        answer: 'De peso por eixo superior a 12 toneladas.',
        correct: false,
      },
      {
        answer: 'De peso total inferior a 12 toneladas.',
        correct: true,
      },
    ],
  },
  {
    question: 'O sinal vertical permite-me entrar nesta via pública?',
    answers: [
      {
        answer: 'Não, o sinal indica trânsito proibido.',
        correct: false,
      },
      {
        answer: 'Sim, se o comprimento do meu veículo for inferior ou igual ao indicado no sinal.',
        correct: true,
      },
      {
        answer: 'Sim, se o comprimento do meu veículo fo r igual ou superior ao indicado no sinal.',
        correct: false,
      },
    ],
  },
  {
    question: 'Este sinal de perigo deverá estar colocado:',
    answers: [
      {
        answer: 'No local exacto da passagem de nível sem guarda.',
        correct: true,
      },
      {
        answer: 'Na aproximação da passagem de nível sem guarda.',
        correct: false,
      },
      {
        answer: 'No local exacto da passagem de nível com guarda.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quais os veículos que estão proibidos de ultrapassar?',
    answers: [
      {
        answer: 'Todos.',
        correct: true,
      },
      {
        answer: 'Apenas os pesados.',
        correct: false,
      },
      {
        answer: 'Apenas os veículos de quatro rodas.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal vertical que se encontra na via pública indica-me:',
    answers: [
      {
        answer: 'Trânsito proibido a veículos de tracção animal.',
        correct: true,
      },
      {
        answer: 'Trânsito proibido a cavaleiros',
        correct: false,
      },
      {
        answer: 'Trânsito proibido a carros de mão.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica este sinal?',
    answers: [
      {
        answer: 'Perigo.',
        correct: true,
      },
      {
        answer: 'Obrigação.',
        correct: false,
      },
      {
        answer: 'Informação.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que significa o sinal vertical?',
    answers: [
      {
        answer: 'Acesso interdito a veículos de tara superior a 2t.',
        correct: false,
      },
      {
        answer: 'Acesso interdito a veículos de peso bruto superior a 2t.',
        correct: false,
      },
      {
        answer: 'Acesso interdito a veículos com peso por eixo superior a 2t.',
        correct: true,
      },
    ],
  },
  {
    question: 'O que indica este sinal?',
    answers: [
      {
        answer: 'Trânsito nos dois sentidos',
        correct: false,
      },
      {
        answer: 'Passagem estreita.',
        correct: true,
      },
      {
        answer: '​ Dar prioridade nas passagens estreita.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que devo fazer perante o sinal de perigo?',
    answers: [
      {
        answer: 'Adaptar a velocidade, porque vou encontrar grande volume de trânsito.',
        correct: true,
      },
      {
        answer: 'Parar, porque circulo numa via que vai ter muita intensidade de trânsito.',
        correct: false,
      },
      {
        answer: 'Adaptar a velocidade, porque vou encontrar obras na via pública.',
        correct: false,
      },
    ],
  },
  {
    question: 'Após o sinal vertical:',
    answers: [
      {
        answer: 'É permitida a ultrapassagem.',
        correct: true,
      },
      {
        answer: 'É proibida a manobra de inversão do sentido de marcha.',
        correct: false,
      },
      {
        answer: 'É proibida a manobra de ultrapassagem.',
        correct: false,
      },
    ],
  },
  {
    question: 'A que distância vou encontrar o perigo indicado pelo sinal?',
    answers: [
      {
        answer: 'Entre 50m a l00m do sinal.',
        correct: false,
      },
      {
        answer: 'Entre 150m a 300m do sinal.',
        correct: true,
      },
      {
        answer: 'Entre 25m a 50m do sinal.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal de proibição permite o trânsito a:',
    answers: [
      {
        answer: 'Automóveis e motociclos.',
        correct: false,
      },
      {
        answer: 'Peões e ciclomotores.',
        correct: false,
      },
      {
        answer: 'Peões e velocípedes conduzidos à mão.',
        correct: true,
      },
    ],
  },
  {
    question: 'O sinal vertical de fundo branco indica-me:',
    answers: [
      {
        answer: 'Local especialmente destinado à passagem de peões.',
        correct: false,
      },
      {
        answer: 'Pista obrigatória para peões.',
        correct: false,
      },
      {
        answer: 'Trânsito proibido a peões.',
        correct: true,
      },
    ],
  },
  {
    question: 'Na zona abrangida por este sinal, quais os veículos que podem estacionar?',
    answers: [
      {
        answer: 'Só os táxis.',
        correct: false,
      },
      {
        answer: 'Nenhum.',
        correct: true,
      },
      {
        answer: 'Todos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Perante o sinal de perigo:',
    answers: [
      {
        answer: 'A velocidade deve ser moderada.',
        correct: true,
      },
      {
        answer: 'A velocidade deve ser moderada e a utilização das luzes não é permitida.',
        correct: false,
      },
      {
        answer: 'A velocidade deve ser moderada e a utilização das luzes é obrigatória.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal vertical indica:',
    answers: [
      {
        answer: 'Trânsito proibido apenas a veículos com motor.',
        correct: false,
      },
      {
        answer: 'Trânsito proibido.',
        correct: true,
      },
      {
        answer: 'Sentido proibido.',
        correct: false,
      },
    ],
  },
  {
    question: 'Este sinal vertical é de:',
    answers: [
      {
        answer: 'Proibição.',
        correct: true,
      },
      {
        answer: 'Obrigação.',
        correct: false,
      },
      {
        answer: 'Cedência de passagem.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual a indicação que o sinal vertical dá aos condutores?',
    answers: [
      {
        answer: 'Que a via pode ser atravessada por animais selvagens.',
        correct: true,
      },
      {
        answer: 'Sinalização de zona de caça.',
        correct: false,
      },
      {
        answer: 'Troço de via onde podem ser encontrados animais sem condutor',
        correct: false,
      },
    ],
  },
  {
    question: 'A que veículos se destinam este sinal de proibição?',
    answers: [
      {
        answer: 'A todos os veículos que transportem substâncias perigosas.',
        correct: true,
      },
      {
        answer: 'A todos os veículos pesados.',
        correct: false,
      },
      {
        answer: 'A todos os veículos de mercadorias.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que significa este sinal?',
    answers: [
      {
        answer: 'Fim de limitação de velocidade de 40 Km/h.',
        correct: true,
      },
      {
        answer: 'Velocidade máxima permitida de 40 Km/h.',
        correct: false,
      },
      {
        answer: 'Velocidade mínima obrigatória de 40 Km /h.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal que se encontra na via pública proíbe o trânsito a todos os veículos:',
    answers: [
      {
        answer: 'Pesados.',
        correct: false,
      },
      {
        answer: 'Que transportem produtos susceptíveis de poluir as águas.',
        correct: false,
      },
      {
        answer: 'Que transportem Substâncias ​ perigosas.',
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
