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
    question: 'Perante o sinal, não posso:',
    answers: [
      {
        answer: 'Ultrapassar.',
        correct: true,
      },
      {
        answer: 'Transitar.',
        correct: false,
      },
      {
        answer: 'Parar',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal de informação significa:',
    answers: [
      {
        answer: 'Praça de taxis.',
        correct: false,
      },
      {
        answer: 'Estacionamento autorizado.',
        correct: true,
      },
      {
        answer: 'Paragem proibida.',
        correct: false,
      },
    ],
  },
  {
    question: 'Na via onde se encontra este sinal não podem circular:',
    answers: [
      {
        answer: 'Veículos pesados de mercadorias com peso total superior a 10 toneladas.',
        correct: true,
      },
      {
        answer: 'Veículos pesados de mercadorias com peso bruto superior a 10 toneladas.',
        correct: false,
      },
      {
        answer: 'Quaisquer veículos com peso total superior a 10 toneladas.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal de perigo indica:',
    answers: [
      {
        answer: 'Um troço de via com uma lomba no pavimento.',
        correct: true,
      },
      {
        answer: 'A localização de uma passagem de peões.',
        correct: false,
      },
      {
        answer: 'Proximidade de bermas baixas na via.',
        correct: false,
      },
    ],
  },
  {
    question: 'A sinalização vertical indica-me que não posso circular nesta via pública se conduzir:',
    answers: [
      {
        answer: 'Um monovolume.',
        correct: false,
      },
      {
        answer: 'Uma autocaravana.',
        correct: false,
      },
      {
        answer: 'Um veículo com reboque.',
        correct: true,
      },
    ],
  },
  {
    question: 'Perante este sinal, podem realizar a manobra de ultrapassagem:',
    answers: [
      {
        answer: 'Só os automóveis pesados.',
        correct: false,
      },
      {
        answer: 'Todos os veículos, excepto os motociclos e ciclomotores.',
        correct: true,
      },
      {
        answer: 'Os motociclos.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal de informação da indicação aos condutores de:',
    answers: [
      {
        answer: 'Fim da auto-estrada.',
        correct: true,
      },
      {
        answer: 'Fim de todas as proibições anteriormente impostas',
        correct: false,
      },
      {
        answer: 'Fim da via reservada a automoveis e motociclos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Após o sinal, o estacionamento é:',
    answers: [
      {
        answer: 'Autorizado.',
        correct: true,
      },
      {
        answer: 'Proibido.',
        correct: false,
      },
      {
        answer: 'Limitado.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal proíbe:',
    answers: [
      {
        answer: 'O trânsito a veículos com mais de 15 m de ​ comprimento.',
        correct: true,
      },
      {
        answer: 'O estacionamento a veículos de comprimento superior a 15 m.',
        correct: false,
      },
      {
        answer: 'A circulação a menos de 15 m do veículo da frente.',
        correct: false,
      },
    ],
  },
  {
    question: 'Perante a sinalização podem transitar:',
    answers: [
      {
        answer: 'Automóveis pesados de passageiros.',
        correct: true,
      },
      {
        answer: 'Automóveis pesados de mercadorias.',
        correct: false,
      },
      {
        answer: 'Automóveis ligeiros de mercadorias.',
        correct: false,
      },
    ],
  },
  {
    question: 'Este sinal vertical indica-me:',
    answers: [
      {
        answer: 'Trânsito proibido a todos os automóveis pesados e a veículos a motor com reboque.',
        correct: false,
      },
      {
        answer: 'Que vou encontrar automóveis de mercadorias e veículos com reboque nesta via.',
        correct: false,
      },
      {
        answer: 'Trânsito proibido a automóveis de mercadorias e a veículos a motor com reboque.',
        correct: true,
      },
    ],
  },
  {
    question: 'Após a sinalização vertical é permitido parar para a saída de passageiros?',
    answers: [
      {
        answer: 'Sim, mas apenas pelo tempo estritamente necessário.',
        correct: false,
      },
      {
        answer: 'Não, o sinal vertical proíbe-me de parar qualquer veículo.',
        correct: true,
      },
      {
        answer: 'Sim, mas apenas pelo tempo estritamente necessário.',
        correct: false,
      },
    ],
  },
  {
    question: 'Perante a sinalização, devo:',
    answers: [
      {
        answer: 'Parar.',
        correct: true,
      },
      {
        answer: 'Parar, porque me aproximo de uma portagem.',
        correct: false,
      },
      {
        answer: 'Avançar, para não provocar embaraço no trânsito.',
        correct: false,
      },
    ],
  },
  {
    question: 'Que significado tem a sinalização vertical?',
    answers: [
      {
        answer: 'Proibição de circular a velocidade superior a 30 km /h.',
        correct: true,
      },
      {
        answer: 'Obrigação de circular à velocidade indicada no sinal.',
        correct: false,
      },
      {
        answer: 'Proibição de circular a velocidade inferior a 30 km /h.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal vertical permite-me entrar nesta via publica?',
    answers: [
      {
        answer: 'Sim, se o comprimento do meu veículo for igual ou superior ao indicado no sinal.',
        correct: false,
      },
      {
        answer: 'Sim, se o comprimento do meu veículo for inferior ou igual ao indicado no sinal.',
        correct: true,
      },
      {
        answer: 'Não, o sinal indica trânsito proibido.',
        correct: false,
      },
    ],
  },
  {
    question: 'Este sinal indica-me:',
    answers: [
      {
        answer: 'Fim da auto-estrada.',
        correct: false,
      },
      {
        answer: 'Via reservada a automoveis e motociclos.',
        correct: false,
      },
      {
        answer: 'Auto-estrada.',
        correct: true,
      },
    ],
  },
  {
    question: 'O que o sinal indica?',
    answers: [
      {
        answer: 'Trânsito proibido.',
        correct: false,
      },
      {
        answer: 'Trabalhos na estrada.',
        correct: false,
      },
      {
        answer: 'Outros perigos.',
        correct: true,
      },
    ],
  },
  {
    question: 'Perante este sinal vertical sei que não podem circular nesta via:',
    answers: [
      {
        answer: 'Ciclomotores.',
        correct: false,
      },
      {
        answer: 'Velocípedes.',
        correct: true,
      },
      {
        answer: 'Motociclos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Após o sinal de indicação, os veículos circulam:',
    answers: [
      {
        answer: 'Nos dois sentidos.',
        correct: true,
      },
      {
        answer: 'Apenas no sentido em que me encontro.',
        correct: false,
      },
      {
        answer: 'Apenas no sentido contrário ao meu.',
        correct: false,
      },
    ],
  },
  {
    question: 'A sinalização sobre limites de peso refere-se a:',
    answers: [
      {
        answer: 'Tara.',
        correct: false,
      },
      {
        answer: 'Peso total.',
        correct: true,
      },
      {
        answer: 'Peso bruto.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual a indicação que o sinal vertical triangular dá aos condutores?',
    answers: [
      {
        answer: 'A proximidade de uma sucessão de curvas perigosas, sendo a primeira à direita.',
        correct: true,
      },
      {
        answer: 'A existência de trabalhos na via e a configuração do desvio de itinerário.',
        correct: false,
      },
      {
        answer: 'Curva à esquerda e contracurva.',
        correct: false,
      },
    ],
  },
  {
    question: 'Perante este sinal numa auto-estrada, fico a saber que:',
    answers: [
      {
        answer: 'Estou a 100 metros da próxima saída.',
        correct: true,
      },
      {
        answer: 'A via em que circulo termina a 100 metros.',
        correct: false,
      },
      {
        answer: 'Estou a 100 metros da próxima localidade.',
        correct: false,
      },
    ],
  },
  {
    question: 'Este sinal indica proibição de ultrapassar para:',
    answers: [
      {
        answer: 'Automóveis pesados.',
        correct: true,
      },
      {
        answer: 'Automóveis de mercadorias.',
        correct: false,
      },
      {
        answer: 'Todos os automóveis.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sinal vertical que se encontra na via pública indica-me:',
    answers: [
      {
        answer: 'Sentido proibido.',
        correct: true,
      },
      {
        answer: 'Trânsito proibido a veículos pesados.',
        correct: false,
      },
      {
        answer: 'Sentido proibido apenas a veículos automóveis.',
        correct: false,
      },
    ],
  },
  {
    question: 'A partir deste sinal devo utilizar as luzes de:',
    answers: [
      {
        answer: 'Mínimos.',
        correct: false,
      },
      {
        answer: 'Maximos',
        correct: false,
      },
      {
        answer: 'Medios',
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
