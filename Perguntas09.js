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
    question: 'Qual o fio que, no circuito de inflamação por bateria, transporta corrente de baixa tensão?',
    answers: [
      {
        answer: 'O que vai da bobine ao borne lateral do distribuidor.',
        correct: true,
      },
      {
        answer: 'O que vai da bateria ao motor de arranque.',
        correct: false,
      },
      {
        answer: 'O que vai da bateria às velas de inflamação.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando o motor funciona com o filtro de ar muito sujo:',
    answers: [
      {
        answer: 'As impurezas entram para o cilindro e a combustão torna-se deficiente',
        correct: false,
      },
      {
        answer: 'O motor tem dificuldades em acelerar e consome mais combustível.',
        correct: true,
      },
      {
        answer: 'O motor tem tendência a acelerar rapidamente e consome mais combustível.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se o ângulo de convergência das rodas está muito fechado, os pneus da frente gastam-se mais:',
    answers: [
      {
        answer: 'Nos bordos exteriores.',
        correct: true,
      },
      {
        answer: 'Nos bordos interiores',
        correct: false,
      },
      {
        answer: 'Na parte central',
        correct: false,
      },
    ],
  },
  {
    question: 'Nos motores a gasolina, a bobine tem como função transformar a corrente:',
    answers: [
      {
        answer: 'De baixa em alta tensão.',
        correct: true,
      },
      {
        answer: 'Contínua em alterna.',
        correct: false,
      },
      {
        answer: 'De alta em baixa tensão',
        correct: false,
      },
    ],
  },
  {
    question: 'Como se verifica o nível do diferencial?',
    answers: [
      {
        answer: 'Contrariar a inclinação do veículo nas curvas.',
        correct: false,
      },
      {
        answer: 'Com vareta graduada.',
        correct: false,
      },
      {
        answer: 'Desapertando o bujão.',
        correct: true,
      },
    ],
  },
  {
    question: 'O ponteiro do indicador de temperatura subiu demasiado. O condutor fica avisado de que:',
    answers: [
      {
        answer: 'A bomba de combustível não funciona.',
        correct: false,
      },
      {
        answer: 'A bomba de água deixou de funcionar.',
        correct: true,
      },
      {
        answer: 'A temperatura está ideal.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se os pneus das rodas da frente apresentarem desgaste excessivo num dos bordos laterais, qual poderá ser a causa?',
    answers: [
      {
        answer: 'Direção desalinhada.',
        correct: true,
      },
      {
        answer: 'Pressão excessivamente baixa.',
        correct: false,
      },
      {
        answer: 'Pressão excessivamente alta.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual o sistema de suspensão mecânica, mais utilizado no eixo dianteiro?',
    answers: [
      {
        answer: 'Sistema independente.',
        correct: true,
      },
      {
        answer: 'Sistema pneumático.',
        correct: false,
      },
      {
        answer: 'Sistema de eixo rígido.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual o fio que, no circuito de inflamação por bateria, transporta corrente de baixa tensão?',
    answers: [
      {
        answer: 'O que vai da bobine ao borne lateral do distribuidor.',
        correct: true,
      },
      {
        answer: 'O que vai da bateria às velas de inflamação.',
        correct: false,
      },
      {
        answer: 'O que vai da bateria ao motor de arranque.',
        correct: false,
      },
    ],
  },
  {
    question: 'O termóstato abre e fecha por ação:',
    answers: [
      {
        answer: 'Da temperatura da água.',
        correct: true,
      },
      {
        answer: 'Da bomba da água.',
        correct: false,
      },
      {
        answer: 'Da correia da ventoinha.',
        correct: false,
      },
    ],
  },
  {
    question: 'Com o motor parado como se verifica se o motor tem óleo ao nível?',
    answers: [
      {
        answer: 'Por meio da vareta graduada que existe na cabeça do motor.',
        correct: false,
      },
      {
        answer: 'Por meio do respetivo manómetro.',
        correct: false,
      },
      {
        answer: 'Por meio da vareta graduada que existe no flanco do motor..',
        correct: true,
      },
    ],
  },
  {
    question: 'Como se chama o órgão que impede a passagem de impurezas do óleo para os canais de lubrificação?',
    answers: [
      {
        answer: 'Filtro de ar.',
        correct: false,
      },
      {
        answer: 'Filtro de óleo.',
        correct: true,
      },
      {
        answer: 'Manómetro de óleo.',
        correct: false,
      },
    ],
  },
  {
    question: 'A suspensão de rodas independentes tem duas características muito importantes, Quais são?',
    answers: [
      {
        answer: 'Grande adaptabilidade de cada roda ao solo e redução do peso não suspenso.',
        correct: true,
      },
      {
        answer: 'Extrema simplicidade do conjunto e reduzida manutenção.',
        correct: false,
      },
      {
        answer: 'Extrema simplicidade do conjunto e elevada capacidade de carga.',
        correct: false,
      },
    ],
  },
  {
    question: 'Um dos cuidados a ter com os veículos equipados com travões de ar comprimido é:',
    answers: [
      {
        answer: 'Nunca parar o motor enquanto o veículo estiver em andamento.',
        correct: true,
      },
      {
        answer: 'Nunca parar o motor enquanto o ar não encher o compressor.',
        correct: false,
      },
      {
        answer: 'Nunca deixar esgotar o ar dos pneus.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os órgãos de suspensão dos veículos automóveis são os que se destinam:',
    answers: [
      {
        answer: 'A ligar e desligar o motor à caixa de velocidades.',
        correct: false,
      },
      {
        answer: 'A amortecer ou anular as oscilações bruscas provenientes das irregularidades do terreno.',
        correct: true,
      },
      {
        answer: 'A suspender o veículo quando os pneus furam.',
        correct: false,
      },
    ],
  },
  {
    question: 'A ruptura precoce das juntas de transmissão, elásticas ou não, pode dever-se a:',
    answers: [
      {
        answer: 'Efeito diferencial pouco alcançado.',
        correct: false,
      },
      {
        answer: 'Brusquidão a desembraiar, principalmente com o veículo sob carga.',
        correct: false,
      },
      {
        answer: 'Brusquidão a embraiar, principalmente com o veículo carregado.',
        correct: true,
      },
    ],
  },
  {
    question: 'Uma carga muito pesada e pouco volumosa colocada muito à frente na caixa de carga:',
    answers: [
      {
        answer: 'Pode provocar o arrebentamento das rodas de trás.',
        correct: false,
      },
      {
        answer: 'Aumenta excessivamente o peso incidente sobre as rodas traseiras, sobrecarregando o diferencial.',
        correct: false,
      },
      {
        answer: 'Aumenta excessivamente o peso incidente sobre as rodas diretrizes, tornado difícil o manejo da direção.',
        correct: true,
      },
    ],
  },
  {
    question: 'O alternador tem a seguinte finalidade:',
    answers: [
      {
        answer: 'Transformar a corrente da baixa em alta tensão.',
        correct: false,
      },
      {
        answer: 'Alimentar a bateria.',
        correct: true,
      },
      {
        answer: 'Dar a primeira rotação ao motor.',
        correct: false,
      },
    ],
  },
  {
    question: 'As velas de incandescência servem para:',
    answers: [
      {
        answer: 'Aquecer as câmaras de combustão, facilitando o arranque a frio do motor Diesel.',
        correct: true,
      },
      {
        answer: 'Alimentar as lâmpadas de incandescências dos faróis de iluminação do veículo.',
        correct: false,
      },
      {
        answer: 'Aquecer as câmaras de combustão, facilitando o arranque a frio do motor à gasolina.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual o combustível utilizado nos motores Diesel?',
    answers: [
      {
        answer: 'Gasóleo ou gasolina.',
        correct: false,
      },
      {
        answer: 'Gasóleo.',
        correct: true,
      },
      {
        answer: 'Gasolina e ar.',
        correct: false,
      },
    ],
  },
  {
    question: 'A valvulina é utilizada:',
    answers: [
      {
        answer: 'Na caixa de velocidades.',
        correct: true,
      },
      {
        answer: 'Nos travões.',
        correct: false,
      },
      {
        answer: 'No motor diesel.',
        correct: false,
      },
    ],
  },
  {
    question: 'Um dos cuidados que requer a bateria é:',
    answers: [
      {
        answer: 'Conservar os bornes limpos e untados com massa consistente ou vazelina.',
        correct: true,
      },
      {
        answer: 'Conservar os bornes limpos e untados com massa consistente ou àgua destilada.',
        correct: false,
      },
      {
        answer: 'Conservar os bornes limpos e untados com vazelina ou electrólito.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual o instrumento que serve para indicar se a lubrificação do motor se está a fazer em boas ou más condições?',
    answers: [
      {
        answer: 'O manómetro.',
        correct: true,
      },
      {
        answer: 'O amperímetro',
        correct: false,
      },
      {
        answer: 'O dinamómetro',
        correct: false,
      },
    ],
  },
  {
    question: 'O óleo da lubrificação dos motores poderá servir nos travões hidráulicos?',
    answers: [
      {
        answer: 'Não , porque estraga as borrachas no sistema de travões.',
        correct: true,
      },
      {
        answer: 'Sim, desde que seja óleo 15W40.',
        correct: false,
      },
      {
        answer: 'Sim, nos travões de veículos ligeiros.',
        correct: false,
      },
    ],
  },
  {
    question: 'Um pneu com a medida 195R15 deverá ser utilizado numa roda com jante:',
    answers: [
      {
        answer: 'De diâmetro igual a 15 cm.',
        correct: false,
      },
      {
        answer: 'De diâmetro igual a 19,5 cm',
        correct: false,
      },
      {
        answer: 'De diâmetro igual a 15 polegadas.',
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
  }, 4030);
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
