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
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Entroncamento agudo para esquerda.',
        correct: true,
      },
      {
        answer: 'Entroncamento agudo para direita.',
        correct: false,
      },
      {
        answer: 'Entroncamento divergente para esquerda.',
        correct: false,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Curva á esquerda e contracurva.',
        correct: false,
      },
      {
        answer: 'Curva á direita e contracurva.',
        correct: true,
      },
      {
        answer: 'Curva á esquerda e contracurva á direita.',
        correct: false,
      },
    ],
  },
  {
    question: 'Este sinal significa:',
    answers: [
      {
        answer: 'Raquetas e bandeirola de sinalização.',
        correct: true,
      },
      {
        answer: 'Homens na via a trabalhar.',
        correct: false,
      },
      {
        answer: 'Proibido passar.',
        correct: false,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Curvas sucessivas, primeira à esquerda.',
        correct: true,
      },
      {
        answer: 'Curvas e contra curvas, primeira à direita.',
        correct: false,
      },
      {
        answer: 'Curvas e contra curvas, primeira à esquerda.',
        correct: false,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Prioridade temporária para quem circula á direita.',
        correct: false,
      },
      {
        answer: 'Prioridade pra quem circula á esquerda.',
        correct: false,
      },
      {
        answer: 'Trânsito nos dois sentidos.',
        correct: true,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Autoestrada temporariamente interrompida.',
        correct: false,
      },
      {
        answer: 'Via rápida temporariamente interrompida.',
        correct: true,
      },
      {
        answer: 'Autoestrada definitivamente interrompida.',
        correct: false,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Passagem estreita.',
        correct: true,
      },
      {
        answer: 'Estrada convergente.',
        correct: false,
      },
      {
        answer: 'Duas vias que se juntam.',
        correct: false,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Terreno falso à esquerda.',
        correct: true,
      },
      {
        answer: 'Zona de passagem pela esquerda.',
        correct: false,
      },
      {
        answer: 'Terreno com pedra à esquerda',
        correct: false,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Máquinas',
        correct: true,
      },
      {
        answer: 'Zona de máquinas de escavação.',
        correct: false,
      },
      {
        answer: 'Zona de máquinas de agricultura.',
        correct: false,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Curva a esquerda.',
        correct: true,
      },
      {
        answer: 'Sentido obrigatório para esquerda.',
        correct: false,
      },
      {
        answer: 'Mudança de direcção a esquerda.',
        correct: false,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Sinalização luminosa e de passagem de nível com uma via.',
        correct: false,
      },
      {
        answer: 'Sinalização luminosa inexistente.',
        correct: false,
      },
      {
        answer: 'Sinalização luminosa em manutenção.',
        correct: true,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Proibido a inversão de sentido de marcha.',
        correct: false,
      },
      {
        answer: 'Curva fechada à esquerda.',
        correct: true,
      },
      {
        answer: 'Inversão de marcha para a esquerda.',
        correct: false,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Àrea reservada para qualquer tipo de autocarro.',
        correct: true,
      },
      {
        answer: 'Zona reservada para alguns tipos de autocarro.',
        correct: false,
      },
      {
        answer: 'Parque reservado para qualquer tipo de autocarro.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica o sinal?',
    answers: [
      {
        answer: 'Fim da via obrigatória para veículos de dimensões anormais.',
        correct: true,
      },
      {
        answer: 'Fim da via obrigatória para autocarros.',
        correct: false,
      },
      {
        answer: 'Via obrigatória para veículos de dimensões anormais.',
        correct: false,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Parque de estacionamento para automóveis pesados de passageiros de peso total superior a 10 Toneladas.',
        correct: false,
      },
      {
        answer: 'Parque de estacionamento para automóveis pesados de mercadorias de peso total superior a 10 Toneladas.',
        correct: true,
      },
      {
        answer: 'Parque de estacionamento para automóveis pesados de mercadorias de peso total superior a 10 Kilos.',
        correct: false,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Curva com estrada com prioridade em T.',
        correct: false,
      },
      {
        answer: 'Cruzamento com estrada com prioridade em T.',
        correct: false,
      },
      {
        answer: 'Entroncamento com estrada com prioridade em T.',
        correct: true,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Trânsito nos dois sentidos.',
        correct: false,
      },
      {
        answer: 'Sentidos obrigatórios.',
        correct: false,
      },
      {
        answer: 'Cruzamento com trânsito nos sentidos.',
        correct: true,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Inclinação à direita.',
        correct: false,
      },
      {
        answer: 'Curva a direita.',
        correct: true,
      },
      {
        answer: 'Sentido obrigatório para a direita.',
        correct: false,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Passagem de nível.',
        correct: true,
      },
      {
        answer: 'Passagem de nível com duas vias.',
        correct: false,
      },
      {
        answer: 'Passagem de comboios.',
        correct: false,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Estrada com buracos na direita.',
        correct: false,
      },
      {
        answer: 'Queda de pedras á direita.',
        correct: true,
      },
      {
        answer: 'Queda de pedras á esquerda.',
        correct: false,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Entroncamentos sucessivos primeiro à direita.',
        correct: true,
      },
      {
        answer: 'Entroncamentos sucessivos primeiro à esquerda.',
        correct: false,
      },
      {
        answer: 'Cruzamentos sucessivos primeiro à direita',
        correct: false,
      },
    ],
  },
  {
    question: 'O significado deste sinal é.',
    answers: [
      {
        answer: 'Um veículo de cada vez.',
        correct: true,
      },
      {
        answer: 'Só veículos pesados de passageiros.',
        correct: false,
      },
      {
        answer: 'Passagem estreita.',
        correct: false,
      },
    ],
  },
  {
    question: 'O significado destes sinais é:',
    answers: [
      {
        answer: 'A - Parque de estacionamento; B - Parque de estacionamento para veículos do corpo diplomático.',
        correct: true,
      },
      {
        answer: 'A - Parque de descanso; B - Parque de estacionamento para veículos do corpo diplomático.',
        correct: false,
      },
      {
        answer: 'A - Parque de estacionamento; B - Parque de estacionamento para veículos do ministério.',
        correct: false,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Indicação de aproximação de saída de autoestrada.',
        correct: true,
      },
      {
        answer: 'indicação de aproximação de saída de via rápida.',
        correct: false,
      },
      {
        answer: 'Indicação de aproximação de entrada de autoestrada.',
        correct: false,
      },
    ],
  },
  {
    question: 'O significado deste sinal é:',
    answers: [
      {
        answer: 'Zona de obrigação de respeitar o código.',
        correct: false,
      },
      {
        answer: 'Obrigação de parar por vários perigos',
        correct: false,
      },
      {
        answer: 'Outros perigos.',
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
