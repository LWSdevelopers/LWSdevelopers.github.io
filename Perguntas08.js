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
    question: 'Um dos cuidados a ter com a bateria, é:',
    answers: [
      {
        answer: 'Adicionar, se necessário, água destilida até cobrir as placas.',
        correct: true,
      },
      {
        answer: 'Periodicamente, substituir o eletrólito',
        correct: false,
      },
      {
        answer: 'Periodicamente, adicionar ácido sulfúrico e água até cobrir as placas.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num motor Diesel, o início da combustão deve-se:',
    answers: [
      {
        answer: 'À descarga da vela de incandescência.',
        correct: false,
      },
      {
        answer: 'À elevada temperatura do ar e injeção de combustível.',
        correct: true,
      },
      {
        answer: 'Faísca produzida entre os pólos da vela.',
        correct: false,
      },
    ],
  },
  {
    question: 'Diz-se que a direção do veículo é assistida quando:',
    answers: [
      {
        answer: 'Uma bomba hidráulica reduz o esforço do condutor.',
        correct: true,
      },
      {
        answer: 'É assistido automaticamente.',
        correct: false,
      },
      {
        answer: 'Não é necessário proceder à lubrificação dos seus órgãos.',
        correct: false,
      },
      {
        answer: 'As suas afinações se fazem automaticamente.',
        correct: false,
      },
    ],
  },
  {
    question: 'O sistema que tem a finalidade de transferir a força do motor às rodas, chama-se sistema de:',
    answers: [
      {
        answer: 'Transmissão.',
        correct: true,
      },
      {
        answer: 'Suspensão',
        correct: false,
      },
      {
        answer: 'Travões',
        correct: false,
      },
      {
        answer: 'Direção',
        correct: false,
      },
    ],
  },
  {
    question: 'A  bateria consegue fornecer corrente elétrica ao motor de arranque e a todos os aparelhos de funcionamento elétrico, mesmo que o alternador não esteja em funcionamento:',
    answers: [
      {
        answer: 'A afirmação está errada',
        correct: false,
      },
      {
        answer: 'A afirmação está certa.',
        correct: true,
      },
    ],
  },
  {
    question: 'Nos travões hidráulicos, a força muscular que o condutor exerce sobre o  pedal, transmite-se ao sistema de fricção da travagem das rodas por intermédio de um fluído (óleo):',
    answers: [
      {
        answer: 'A afirmação está errada.',
        correct: false,
      },
      {
        answer: 'A afirmação está certa.',
        correct: true,
      },
    ],
  },
  {
    question: 'Nos motores de combustão interna (“Diesel”) a combustão nos cilindros começa quando:',
    answers: [
      {
        answer: 'O gasóleo é injetado.',
        correct: true,
      },
      {
        answer: 'A faísca salta nos polos das velas.',
        correct: false,
      },
      {
        answer: 'As duas válvulas se fecham.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num automóvel, um incêndio provocado por gasolina inflamada nunca deverá ser apagado com:',
    answers: [
      {
        answer: 'Água.',
        correct: true,
      },
      {
        answer: 'Uma manta ou areia.',
        correct: false,
      },
      {
        answer: 'Extintor.',
        correct: false,
      },
    ],
  },
  {
    question: 'Porque se deve pôr o motor a trabalhar quando se deitar água no radiador com o motor quente?',
    answers: [
      {
        answer: 'Porque assim obriga-se a água a circular e não se corre o risco de o motor poder estalar.',
        correct: true,
      },
      {
        answer: 'Porque assim o termóstato fica sempre aberto e a água circula livremente',
        correct: false,
      },
      {
        answer: 'Porque assim obriga-se a água a circular e o radiador enche-se de água mais rápido',
        correct: false,
      },
    ],
  },
  {
    question: 'Para que a lubrificação se possa realizar em boas condições é conveniente:',
    answers: [
      {
        answer: 'Não deixar funcionar o motor em marcha lenta durante muito tempo, porque a bomba envia pouco óleo.',
        correct: true,
      },
      {
        answer: 'Não deixar o gasóleo atingir o nível mínimo no depósito de combustível',
        correct: false,
      },
      {
        answer: 'Não deixar funcionar o motor em marcha lenta durante muito tempo, porque a bomba envia pouca água.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para que serve a ventoinha(ventilador)?',
    answers: [
      {
        answer: 'Serve para produzir uma corrente de ar destinado à mistura (ar + gasolina).',
        correct: false,
      },
      {
        answer: 'Serve para produzir um jacto de água destinado à lavagem do radiador exteriormente',
        correct: false,
      },
      {
        answer: 'Serve para produzir uma corrente de ar destinado a promover o arrefecimento da água no radiador.',
        correct: true,
      },
    ],
  },
  {
    question: 'Como se deve proceder antes de chegar a uma subida, quando o pavimento está coberto de gelo?',
    answers: [
      {
        answer: 'Aumentar a velocidade para sair rapidamente da zona gelada.',
        correct: false,
      },
      {
        answer: 'Reduzir a velocidade e engrenar uma velocidade de força.',
        correct: true,
      },
      {
        answer: 'Reduzir a velocidade o mais tarde possível.',
        correct: false,
      },
    ],
  },
  {
    question: 'Alguns veículos permitem bloquear o diferencial. Quando é necessário fazê-lo?',
    answers: [
      {
        answer: 'Quando uma roda motora patine em areia, lama ou gelo.',
        correct: true,
      },
      {
        answer: 'Quando o veículo transporta carga com elevado peso.',
        correct: false,
      },
      {
        answer: 'Quando os travões estejam a travar mal.',
        correct: false,
      },
    ],
  },
  {
    question: 'Em determinados veículos, o condutor não deve iniciar a marcha enquanto:',
    answers: [
      {
        answer: 'A pressão do ar dos travões não for suficiente.',
        correct: true,
      },
      {
        answer: 'O motor não atingir a temperatura máxima possível.',
        correct: false,
      },
      {
        answer: 'O alternador não começar a carregar a bateria.',
        correct: false,
      },
    ],
  },
  {
    question: 'O esvaziamento rápido dos pneus , em caso de furo, não acontece:',
    answers: [
      {
        answer: 'Quando se transita com pressão um pouco inferior à normal.',
        correct: false,
      },
      {
        answer: 'Com tanta facilidade nos pneus sem câmaras de ar.',
        correct: true,
      },
      {
        answer: 'Nos pneus com câmaras de ar',
        correct: false,
      },
    ],
  },
  {
    question: 'A bateria nos automóveis:',
    answers: [
      {
        answer: 'Fornece corrente ao borne central da bobina.',
        correct: false,
      },
      {
        answer: 'Nunca pode ser ligado a outra bateria.',
        correct: false,
      },
      {
        answer: 'Deve ter sempre um cabo ligado à massa.',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual o inconveniente de deixar a chave de ignição ligada com o motor parado?',
    answers: [
      {
        answer: 'Os enrolamentos do conjuntor-disjuntor podem aquecer.',
        correct: false,
      },
      {
        answer: 'Podem incendiar-se os injetores',
        correct: false,
      },
      {
        answer: 'Pode queimar-se a bobina.',
        correct: true,
      },
      {
        answer: 'Pode queimar-se o alternador',
        correct: false,
      },
    ],
  },
  {
    question: 'Um automóvel que transporta uma carga muito alta, ao curvar para a direita, a carga tende a cair para:',
    answers: [
      {
        answer: 'A retaguarda',
        correct: false,
      },
      {
        answer: 'A esquerda.',
        correct: true,
      },
      {
        answer: 'A direita',
        correct: false,
      },
    ],
  },
  {
    question: 'O que acontece a uma parte do óleo de lubrificação do motor?',
    answers: [
      {
        answer: 'Lubrifica as paredes dos cilindros.',
        correct: true,
      },
      {
        answer: 'Lubrifica as paredes internas das câmaras de combustão.',
        correct: false,
      },
      {
        answer: 'Lubrifica o carvão da bomba de água.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nos motores Diesel, se entrar ar para os órgãos do sistema de alimentação de combustível, o motor:',
    answers: [
      {
        answer: 'Trabalha só ao ralenti',
        correct: false,
      },
      {
        answer: 'Para por falta de injeção.',
        correct: true,
      },
      {
        answer: 'Trabalha normalmente.',
        correct: false,
      },
      {
        answer: 'Fica a trabalhar acelerado.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando o gasóleo não chega à bomba injetora, qual poderá ser a causa?',
    answers: [
      {
        answer: 'Filtro de combustível entupido.',
        correct: true,
      },
      {
        answer: 'Injetores sujos',
        correct: false,
      },
      {
        answer: 'Tubo de retorno de gasóleo entupido.',
        correct: false,
      },
    ],
  },
  {
    question: 'No caso de uma mudança saltar, a causa será:',
    answers: [
      {
        answer: 'Mola fixadora do anel sincronizador fraca ou partida.',
        correct: true,
      },
      {
        answer: 'Falta de lubrificação.',
        correct: false,
      },
      {
        answer: 'Embraiagem a patinar',
        correct: false,
      },
    ],
  },
  {
    question: 'O condensador que está ligado aos platinados serve para:',
    answers: [
      {
        answer: 'Atrair a si a corrente que tende a saltar nos platinados.',
        correct: true,
      },
      {
        answer: 'Transformar a corrente de baixa em alta tensão.',
        correct: false,
      },
      {
        answer: 'Interromper a corrente de baixa tensão.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que acontece quando a embraiagem está a patinar?',
    answers: [
      {
        answer: 'O veio primário recebe com deficiência o movimento do volante do motor',
        correct: true,
      },
      {
        answer: 'O veio primário recebe movimento do volante do motor em boas condições',
        correct: false,
      },
      {
        answer: 'O diferencial recebe com deficiência o movimento do veio de transmissão',
        correct: false,
      },
    ],
  },
  {
    question: 'Nos veículos com circuito de travões de ar comprimido, o ar que alimenta o travão de estacionamento vem de:',
    answers: [
      {
        answer: 'Um compressor',
        correct: false,
      },
      {
        answer: 'Uma válvula do travão de pé.',
        correct: false,
      },
      {
        answer: 'Um depósito próprio.',
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
