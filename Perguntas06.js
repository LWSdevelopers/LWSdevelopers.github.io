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
    question: 'Se os amortecedores das rodas da frente estiverem descarregados:',
    answers: [
      {
        answer: 'Torna-se difícil movimentar a direcção',
        correct: false,
      },
      {
        answer: 'O número de oscilações das molas aumenta',
        correct: true,
      },
      {
        answer: 'A amplitude das oscilações das molas diminui.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para lubrificar a caixa de velocidades e o diferencial utiliza-se:',
    answers: [
      {
        answer: 'Massa consistente',
        correct: false,
      },
      {
        answer: 'Valvulina',
        correct: true,
      },
      {
        answer: 'Uma mistura de valvulina e massa consistente',
        correct: false,
      },
      {
        answer: 'Óleo hidráulico',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando o veículo está parado torna-se mais fácil rodar o volante da direcção:',
    answers: [
      {
        answer: 'Quando se trata de uma direcção assistida.',
        correct: true,
      },
      {
        answer: 'Quando se trata de uma direcção pneumática.',
        correct: false,
      },
      {
        answer: 'Quando o seu movimento é pouco desmultiplicado.',
        correct: false,
      },
    ],
  },
  {
    question: 'Que efeito produz um catalisador?',
    answers: [
      {
        answer: 'Converte os gases do escape de nocivos em inofensivos.',
        correct: true,
      },
      {
        answer: 'Aumenta a potência do motor e reduz o seu consumo.',
        correct: false,
      },
      {
        answer: 'Reduz a potência do motor e aumenta o seu consumo.',
        correct: false,
      },
    ],
  },
  {
    question: 'No transporte de mercadoria a granel:',
    answers: [
      {
        answer: 'Não pode ser excedida a altura dos taipais.',
        correct: true,
      },
      {
        answer: 'Não se deve atingir 4 metros de altura.',
        correct: false,
      },
      {
        answer: 'Não se podem utilizar veículos de caixa aberta.',
        correct: false,
      },
    ],
  },
  {
    question: 'O nível do óleo do motor é verificado:',
    answers: [
      {
        answer: 'Pelo bocal existente na cabeça do motor',
        correct: false,
      },
      {
        answer: 'Pela vareta graduada.',
        correct: true,
      },
      {
        answer: 'Através do respectivo termómetro',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual destas sequências é correcta?',
    answers: [
      {
        answer: 'Bomba de alimentação – filtro – bomba injectora.',
        correct: true,
      },
      {
        answer: 'Bomba injectora – filtro – bomba de alimentação.',
        correct: false,
      },
      {
        answer: 'Bomba de alimentação – bomba injectora - filtro.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando a bomba de água da refrigeração do motor se avaria:',
    answers: [
      {
        answer: 'O termómetro dá aviso',
        correct: true,
      },
      {
        answer: 'O motor não funciona',
        correct: false,
      },
      {
        answer: 'O termóstato dá aviso',
        correct: false,
      },
      {
        answer: 'O manómetro dá aviso',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando existe dificuldade em pôr o motor a trabalhar, pode-se insistir com o motor de arranque?',
    answers: [
      {
        answer: 'A insistência excessiva causa danos na bateria',
        correct: true,
      },
      {
        answer: 'Sim, desde que a bateria tenha líquido suficiente',
        correct: false,
      },
      {
        answer: 'Sempre até o motor de arranque carregar a bateria',
        correct: false,
      },
    ],
  },
  {
    question: 'Para substituir um pneu furado deve-se começar por:',
    answers: [
      {
        answer: 'Aliviar as porcas antes de levantar o veículo',
        correct: true,
      },
      {
        answer: 'Calçar o veículo e levantá-lo com o macaco',
        correct: false,
      },
      {
        answer: 'Verificar a pressão do ar contido no pneu',
        correct: false,
      },
    ],
  },
  {
    question: 'O diferencial serve para permitir:',
    answers: [
      {
        answer: 'Fazer várias combinações de desmultiplicação por meio dos carretos',
        correct: false,
      },
      {
        answer: 'Ligar ou desligar a transmissão do movimento entre o motor e restantes órgãos de transmissão',
        correct: false,
      },
      {
        answer: 'Que uma das rodas motoras gire mais do que a outra sempre que necessário',
        correct: true,
      },
    ],
  },
  {
    question: 'Os órgãos da direcção devem estar em bom estado de conservação, para evitar as anomalias que produzem:',
    answers: [
      {
        answer: 'Avarias no diferencial.',
        correct: false,
      },
      {
        answer: 'Falta de segurança no veículo.',
        correct: true,
      },
      {
        answer: 'Oscilações no volante do motor.',
        correct: false,
      },
    ],
  },
  {
    question: 'Em caso de travagem sobre pavimento escorregadio, a que pode dever-se o resvalamento do veículo?',
    answers: [
      {
        answer: 'Os pneus gastos.',
        correct: true,
      },
      {
        answer: 'Os pneus pouco rodados.',
        correct: false,
      },
      {
        answer: 'Ar na tubagem dos travões.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como devem ser transportados animais vivos de pequeno porte?',
    answers: [
      {
        answer: 'Em grades adequadas ao seu tamanho.',
        correct: true,
      },
      {
        answer: 'Em veículos caixa de carga tipo cisterna.',
        correct: false,
      },
      {
        answer: 'Em veículos de caixa isotérmica',
        correct: false,
      },
    ],
  },
  {
    question: 'Os travões de ar comprimido actuam quando o motor estiver parado?',
    answers: [
      {
        answer: 'Sim, somente o travão de estacionamento.',
        correct: false,
      },
      {
        answer: 'Sim, desde que haja pressão suficiente.',
        correct: true,
      },
      {
        answer: 'Sim, mas com menos intensidade',
        correct: false,
      },
    ],
  },
  {
    question: 'O que provoca o arrefecimento do motor?',
    answers: [
      {
        answer: 'É o ar que circula pelas camisas de ar do motor.',
        correct: false,
      },
      {
        answer: 'É o ar que circula pelo cárter de óleo do motor',
        correct: false,
      },
      {
        answer: 'É a água que circula pelas camisas de água do motor.',
        correct: true,
      },
      {
        answer: 'É a água que circula pelo cárter do motor.',
        correct: false,
      },
    ],
  },
  {
    question: 'A direcção assistida permite:',
    answers: [
      {
        answer: 'Diminuir a desmultiplicação no volante',
        correct: false,
      },
      {
        answer: 'Aumentar o ângulo de viragem',
        correct: false,
      },
      {
        answer: 'Diminuir o esforço do condutor no volante.',
        correct: true,
      },
      {
        answer: 'Alinhar a direcção com as rodas.',
        correct: true,
      },
    ],
  },
  {
    question: 'Os principais componentes do sistema de transmissão são:',
    answers: [
      {
        answer: 'Veio de transmissão, volante do motor e pneus.',
        correct: false,
      },
      {
        answer: 'Embraiagem, caixa de velocidades e diferencial.',
        correct: true,
      },
      {
        answer: 'Pendural, barra lateral, parafuso sem-fim e sector.',
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
        answer: 'Evitar que a bateria se descarregue.',
        correct: false,
      },
      {
        answer: 'Evitar curto-circuito',
        correct: false,
      },
    ],
  },
  {
    question: 'Nos travões hidráulicos, as pastilhas são acionadas e pressionadas contra o disco:',
    answers: [
      {
        answer: 'Pela pressão do ar.',
        correct: false,
      },
      {
        answer: 'Pelos êmbolos dos cilindros.',
        correct: true,
      },
      {
        answer: 'Pelo servo-freio',
        correct: false,
      },
    ],
  },
  {
    question: 'Que cuidados deve ter com as molas de suspensão?',
    answers: [
      {
        answer: 'Não pôr carga excessiva, trazer devidamente lubrificadas as cavilhas e evitar covas.',
        correct: true,
      },
      {
        answer: 'Colocar a carga na caixa de carga sempre à retaguarda.',
        correct: false,
      },
      {
        answer: 'Substitui-las de 5.000 em 5.000 km.',
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
        answer: 'Paragem do motor.',
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
        answer: 'Na zona central.',
        correct: false,
      },
      {
        answer: 'No lado esquerdo',
        correct: false,
      },
    ],
  },
  {
    question: 'Como deve ser transportada uma carga pouco volumosa cujo peso seja igual à capacidade de carga máxima do veículo?',
    answers: [
      {
        answer: 'No centro da caixa de carga.',
        correct: true,
      },
      {
        answer: 'Toda puxada para a retaguarda',
        correct: false,
      },
      {
        answer: 'O mais próximo possível da cabina.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual a função da placa de díodos ou retificador de tensão do alternador?',
    answers: [
      {
        answer: 'Transformar a corrente de baixa em alta tensão.',
        correct: false,
      },
      {
        answer: 'Regular a intensidade de corrente das velas.',
        correct: false,
      },
      {
        answer: 'Transformar a corrente alternada em contínua e proteger a bateria de uma possível descarga.',
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
