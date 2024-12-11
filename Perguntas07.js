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
    question: 'O que provoca o arrefecimento do motor?',
    answers: [
      {
        answer: 'É a água que circula pelas camisas de água do motor.',
        correct: true,
      },
      {
        answer: 'É o ar que circula pelas camisas de ar do motor.',
        correct: false,
      },
      {
        answer: 'É o ar que circula pelo cárter de óleo do motor.',
        correct: false,
      },
    ],
  },
  {
    question: 'A direcção assistida permite:',
    answers: [
      {
        answer: 'Alinhar a direcção com as rodas.',
        correct: false,
      },
      {
        answer: 'Diminuir o esforço do condutor no volante.',
        correct: true,
      },
      {
        answer: 'Aumentar o ângulo de viragem.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os principais componentes do sistema de transmissão são:',
    answers: [
      {
        answer: 'Embraiagem, caixa de velocidades e diferencial.',
        correct: true,
      },
      {
        answer: 'Veio de transmissão, volante do motor e pneus.',
        correct: false,
      },
      {
        answer: 'Molas, amortecedores e estabilizadores.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os fusíveis  servem para:',
    answers: [
      {
        answer: 'Proteger a instalação eléctrica.',
        correct: true,
      },
      {
        answer: 'Intensifcar a corrente elétrica',
        correct: false,
      },
      {
        answer: 'Evitar que a bateria se descarregue.',
        correct: false,
      },
      {
        answer: 'Evitar curto-circuito.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nos travões hidráulicos, as pastilhas são acionadas e pressionadas contra o disco:',
    answers: [
      {
        answer: 'Pelo servo-freio.',
        correct: false,
      },
      {
        answer: 'Pelos pratos de pressão.',
        correct: false,
      },
      {
        answer: 'Pelos êmbolos dos cilindros.',
        correct: true,
      },
      {
        answer: 'Pela pressão do ar.',
        correct: true,
      },
    ],
  },
  {
    question: 'Que cuidados deve ter com as molas de suspensão?',
    answers: [
      {
        answer: 'Colocar a carga na caixa de carga sempre à retaguarda.',
        correct: false,
      },
      {
        answer: 'Não pôr carga excessiva, trazer devidamente lubrificadas as cavilhas e evitar covas.',
        correct: true,
      },
      {
        answer: 'Substitui-las de 5.000 em 5.000 km.',
        correct: false,
      },
      {
        answer: 'Não se requer cuidados especiais, se partirem devem ser substituídas.',
        correct: false,
      },
    ],
  },
  {
    question: 'No motor a falta do filtro de ar facilita a entrada das impurezas nos cilindros, e tem como consequências:',
    answers: [
      {
        answer: 'Desgaste dos cilindros.',
        correct: true,
      },
      {
        answer: 'Paragem do motor',
        correct: false,
      },
      {
        answer: 'Gripagem do motor',
        correct: false,
      },
      {
        answer: 'Sobreaquecimento do motor',
        correct: false,
      },
    ],
  },
  {
    question: 'Um pneu com pressão muito inferior à recomendada, apresenta maior desgaste:',
    answers: [
      {
        answer: 'Nos bordos laterais.',
        correct: true,
      },
      {
        answer: 'No lado esquerdo',
        correct: false,
      },
      {
        answer: 'No lado direito.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual a função da placa de díodos (retificador de tensão) do alternador?',
    answers: [
      {
        answer: 'Transformar a corrente alternada em contínua e proteger a bateria de uma possível descarga.',
        correct: true,
      },
      {
        answer: 'Regular a intensidade de corrente das velas.',
        correct: false,
      },
      {
        answer: 'Transformar a corrente de baixa em alta tensão',
        correct: false,
      },
    ],
  },
  {
    question: 'Se o motor roda normalmente mas não pega, a causa pode ser:',
    answers: [
      {
        answer: 'Avaria no sistema de alimentação.',
        correct: true,
      },
      {
        answer: 'Correia da ventoinha partida ou frouxa.',
        correct: false,
      },
      {
        answer: 'Falta de óleo no motor.',
        correct: false,
      },
    ],
  },
  {
    question: 'De que modo é lubrificada a caixa de direção com cremalheira?',
    answers: [
      {
        answer: 'É lubrificada com o mesmo óleo utilizado nos motores de combustão interna.',
        correct: false,
      },
      {
        answer: 'É lubrificada com óleo SAE15W40',
        correct: false,
      },
      {
        answer: 'É lubrificada com massa consistente.',
        correct: true,
      },
    ],
  },
  {
    question: 'Como se chama o órgão que permite que, nas curvas, a roda motriz de fora dê maior número de voltas?',
    answers: [
      {
        answer: 'Semieixo',
        correct: false,
      },
      {
        answer: 'Diferencial.',
        correct: true,
      },
      {
        answer: 'Satélite',
        correct: false,
      },
    ],
  },
  {
    question: 'Clique na alternativa incorreta:',
    answers: [
      {
        answer: 'Bateria é o órgão que fornece corrente elétrica ao alternador.',
        correct: true,
      },
      {
        answer: 'Conforme a disposição das lonas (telas) os pneus podem ser radiais ou diagonais',
        correct: false,
      },
      {
        answer: 'O servo-freio é um órgão que está montado no sistema de travagem',
        correct: false,
      },
    ],
  },
  {
    question: 'Num automóvel pesado com travão de ar comprimido, se o motor para (se for abaixo) o veículo continua a travar?',
    answers: [
      {
        answer: 'Trava enquanto houver suficiente pressão de ar no reservatório.',
        correct: true,
      },
      {
        answer: 'Trava com menos intensidade.',
        correct: false,
      },
      {
        answer: 'Só trava com o travão de mão.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se os amortecedores hidráulicos de um automóvel estiverem descarregados, o condutor nota:',
    answers: [
      {
        answer: 'Aumento do consumo de combustível.',
        correct: false,
      },
      {
        answer: 'Oscilação demasiada das molas.',
        correct: true,
      },
      {
        answer: 'Aumento de desagaste dos pneus.',
        correct: false,
      },
    ],
  },
  {
    question: 'O filtro de ar serve para:',
    answers: [
      {
        answer: 'Filtrar as impurezas da gasolina',
        correct: false,
      },
      {
        answer: 'Pulverizar o ar e misturá-lo com gasolina.',
        correct: false,
      },
      {
        answer: 'Limpar o ar das impurezas antes de entrar nos cilindros.',
        correct: true,
      },
    ],
  },
  {
    question: 'Sempre que se substitui um fusível este funde. Qual poderá ser a causa?',
    answers: [
      {
        answer: 'Uma lâmpada fundida',
        correct: false,
      },
      {
        answer: 'Bateria com excesso de carga.',
        correct: false,
      },
      {
        answer: 'Curto-circuito.',
        correct: true,
      },
    ],
  },
  {
    question: 'Se o motor roda normalmente mas não pega, a causa pode ser:',
    answers: [
      {
        answer: 'Correia da ventoinha partida ou frouxa.',
        correct: false,
      },
      {
        answer: 'Avaria no sistema de alimentação.',
        correct: true,
      },
      {
        answer: 'Falta de óleo no motor.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual a característica mais importante duma direção assistida?',
    answers: [
      {
        answer: 'A direção pode ser manejada com pouco esforço do condutor.',
        correct: true,
      },
      {
        answer: 'Nunca é necessário proceder à sua lubrificação.',
        correct: false,
      },
      {
        answer: 'Não é possível manejar a direção com o veículo em andamento.',
        correct: false,
      },
    ],
  },
  {
    question: 'A embraiagem serve para:',
    answers: [
      {
        answer: 'Ligar a caixa de velocidade ao diferencial.',
        correct: false,
      },
      {
        answer: 'Ligar e desligar o motor dos restantes órgãos da transmissão e permitir arranques suaves.',
        correct: true,
      },
      {
        answer: 'Ligar o motor ao diferencial.',
        correct: false,
      },
    ],
  },
  {
    question: 'Satélites e planetários são engrenagens que pertencem:',
    answers: [
      {
        answer: 'Ao diferencial.',
        correct: true,
      },
      {
        answer: 'Ao sistema de distribuição.',
        correct: false,
      },
      {
        answer: 'A caixa de velocidades.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os elementos que constituem a suspensão são:',
    answers: [
      {
        answer: 'Os pneumáticos, as molas e os amortecedores.',
        correct: true,
      },
      {
        answer: 'Os pneumáticos, os amortecedores e as barras de direção.',
        correct: false,
      },
      {
        answer: 'Os pneumáticos, as barras de torção e os planetários.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para que servem os pequenos orifícios existentes nas tampas dos elementos das baterias?',
    answers: [
      {
        answer: 'Dão saída aos gases que se formam no interior dos elementos.',
        correct: true,
      },
      {
        answer: 'Facilitam a evaporação do ácido sulfúrico que esteja em excesso.',
        correct: false,
      },
      {
        answer: 'Permitem verificar o nível de líquido contido no seu interior.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual o inconveniente de conduzir com o pé apoiado no pedal da embraiagem?',
    answers: [
      {
        answer: 'Pode causar danos no rolamento de encosto.',
        correct: true,
      },
      {
        answer: 'Desgaste dos rolamentos da caixa de velocidades.',
        correct: false,
      },
      {
        answer: 'Desgaste excessivo dos carretos da caixa de velocidades.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num motor sem termostato a água do sistema de refrigeração:',
    answers: [
      {
        answer: 'Não circula.',
        correct: false,
      },
      {
        answer: 'Aquece rapidamente.',
        correct: false,
      },
      {
        answer: 'Demora mais tempo a aquecer.',
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
