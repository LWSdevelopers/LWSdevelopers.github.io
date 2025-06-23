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
    question: 'Um dos cuidados que um condutor de um veículo equipado com travões de ar comprimido deve ter, é:',
    answers: [
      {
        answer: 'Verificar a pressão de ar no respectivo manómetro antes de pôr o veículo em andamento.',
        correct: true,
      },
      {
        answer: 'Verificar a pressão de ar pelo respectivo amperímetro antes de pôr o veículo em andamento.',
        correct: false,
      },
      {
        answer: 'Verificar o nível de ar no compressor de ar antes de pôr o veículo em andamento.',
        correct: false,
      },
    ],
  },
  {
    question: 'As peças que compõem o motor necessitam de lubrificação para:',
    answers: [
      {
        answer: 'Aumentar a sua potência.',
        correct: false,
      },
      {
        answer: 'Reduzir o seu desgaste e aquecimento.',
        correct: true,
      },
      {
        answer: 'O veículo arranca (pega) facilmente de manhã.',
        correct: false,
      },
    ],
  },
  {
    question: 'Manga de eixo e barra transversal pertencem:',
    answers: [
      {
        answer: 'Ao sistema de direção.',
        correct: true,
      },
      {
        answer: 'Á caixa de velocidades.',
        correct: false,
      },
      {
        answer: 'Ao sistema de suspensão.',
        correct: false,
      },
    ],
  },
  {
    question: 'Fazem parte da embraiagem:',
    answers: [
      {
        answer: 'Rolamento ou carvão de encosto, disco de ferodo e prato de pressão.',
        correct: true,
      },
      {
        answer: 'Parafuso sem-fim e o sector, cavilhões, manga de eixo.',
        correct: false,
      },
      {
        answer: 'Veio primário, veio secundário, veio intermediário.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual o fio que, no sistema elétrico de um automóvel, transporta corrente de baixa tensão?',
    answers: [
      {
        answer: 'O que vai do borne central da bobine ao borne lateral do rotor do distribuidor.',
        correct: false,
      },
      {
        answer: 'O que vai do distribuidor às velas de inflamação.',
        correct: false,
      },
      {
        answer: 'O que vai da bateria ao motor de arranque.',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual dos seguintes motivos pode dar origem a uma derrapagem?',
    answers: [
      {
        answer: 'Ultrapassar numa via estreita com dois sentidos.',
        correct: false,
      },
      {
        answer: 'Velocidade não adequada às condições da via.',
        correct: true,
      },
      {
        answer: 'Não reduzir a velocidade no cruzamento com outros veículos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual poderá ser a causa do alternador não gerar corrente elétrica?',
    answers: [
      {
        answer: 'Correia da ventoinha desapertada.',
        correct: true,
      },
      {
        answer: 'Bateria com bornes sujos.',
        correct: false,
      },
      {
        answer: 'Correia da ventoinha muito apertada.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para aumentar a durabilidade do motor e o seu estado de conservação, deve-se:',
    answers: [
      {
        answer: 'Substituir o filtro de óleo nos períodos recomendados.',
        correct: true,
      },
      {
        answer: 'Substituir o óleo de lubrificação todos os dias.',
        correct: false,
      },
      {
        answer: 'Arrefecer a água de refrigeração antes de arrancar o motor.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se na condução do veículo notar que a direção está pesada (dura), a causa poderá ser:',
    answers: [
      {
        answer: 'Excesso de peso sobre o eixo da frente do veículo.',
        correct: true,
      },
      {
        answer: 'Caixa de direção com óleo em excesso.',
        correct: false,
      },
      {
        answer: 'Excesso de pressão nos pneus das rodas da frente.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual o órgão que tem a finalidade de ligar e desligar o motor dos restantes componentes do sistema de transmissão?',
    answers: [
      {
        answer: 'Embraiagem.',
        correct: true,
      },
      {
        answer: 'Caixa de velocidades.',
        correct: false,
      },
      {
        answer: 'Diferencial',
        correct: false,
      },
    ],
  },
  {
    question: 'O que pode acontecer se o terminal de um dos cabos ligados à bateria estiver mal apertado?',
    answers: [
      {
        answer: 'Pode dar origem a um curto-circuito.',
        correct: false,
      },
      {
        answer: 'Pode ocorrer uma explosão da bateria.',
        correct: false,
      },
      {
        answer: 'O motor de arranque não funciona.',
        correct: true,
      },
    ],
  },
  {
    question: 'Como se verifica se os depósitos dos travões a ar têm pressão suficiente?',
    answers: [
      {
        answer: 'Através do vacuómetro.',
        correct: false,
      },
      {
        answer: 'Através do respetivo manómetro.',
        correct: true,
      },
      {
        answer: 'Através do termómetro.',
        correct: false,
      },
    ],
  },
  {
    question: 'A circulação da água entre o motor e o radiador é forçada:',
    answers: [
      {
        answer: 'Pela bomba de água.',
        correct: true,
      },
      {
        answer: 'Pela correia da ventoinha.',
        correct: false,
      },
      {
        answer: 'Por termossifão.',
        correct: false,
      },
    ],
  },
  {
    question: 'No sistema elétrico de um automóvel, qual o órgão que fornece corrente elétrica de alta tensão?',
    answers: [
      {
        answer: 'A bobine.',
        correct: true,
      },
      {
        answer: 'O alternador.',
        correct: false,
      },
      {
        answer: 'A bateria.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para evitar avarias no sistema de alimentação de um motor Diesel, deve-se ter o cuidado de não deixar esgotar:',
    answers: [
      {
        answer: 'O gasóleo do depósito de combustível, mantendo o sistema com ar.',
        correct: false,
      },
      {
        answer: 'O gasóleo do depósito de combustível, mantendo o sistema sem ar.',
        correct: true,
      },
      {
        answer: 'A gasolina do depósito de combustível, mantendo o sistema sem ar.',
        correct: false,
      },
    ],
  },
  {
    question: 'Em qual dos seguintes casos se torna mais fácil movimentar o volante de direção:',
    answers: [
      {
        answer: 'Quando se roda o volante com o veículo parado.',
        correct: false,
      },
      {
        answer: 'Se o veículo estiver equipado com servo-freio.',
        correct: false,
      },
      {
        answer: 'Se existir uma bomba hidráulica na direção.',
        correct: true,
      },
      {
        answer: 'Com os pneus da frente com baixa pressão.',
        correct: false,
      },
    ],
  },
  {
    question: 'Satélites e planetários são engrenagens que pertencem:',
    answers: [
      {
        answer: 'À suspensão.',
        correct: false,
      },
      {
        answer: 'À caixa de velocidades.',
        correct: false,
      },
      {
        answer: 'Ao diferencial.',
        correct: true,
      },
    ],
  },
  {
    question: 'As escovas do motor de arranque são feitas em:',
    answers: [
      {
        answer: 'Ferro fundido.',
        correct: false,
      },
      {
        answer: 'Liga de grafite com alta percentagem de cobre.',
        correct: true,
      },
      {
        answer: 'Liga de aço e cobre.',
        correct: false,
      },
      {
        answer: 'Liga de alumínio.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nos travões hidráulicos, as pastilhas são acionadas e pressionadas contra o disco:',
    answers: [
      {
        answer: 'Pelos êmbolos dos cilindros.',
        correct: true,
      },
      {
        answer: 'Pelos pratos de pressão.',
        correct: false,
      },
      {
        answer: 'Pela pressão do ar',
        correct: false,
      },
    ],
  },
  {
    question: 'Num pneu de um automóvel pesado com a inscrição 295/80R22.5:',
    answers: [
      {
        answer: 'A letra R significa que o pneu é do tipo (Diagonal).',
        correct: false,
      },
      {
        answer: 'O número 22.5 é referente ao diâmetro interior (igual ao da jante).',
        correct: true,
      },
      {
        answer: 'O número 80 é referente à largura do pneu.',
        correct: false,
      },
    ],
  },
  {
    question: 'De noite, mesmo com o motor acelerado, as luzes de um automóvel começam a perder intensidade. Qual poderá ser a causa?',
    answers: [
      {
        answer: 'Correia do alternador muito frouxa.',
        correct: true,
      },
      {
        answer: 'Bateria com pouca carga.',
        correct: false,
      },
      {
        answer: 'Bateria com excesso de carga.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se um motor de explosão apresenta um alto consumo de combustível a causa poderá ser:',
    answers: [
      {
        answer: 'Avaria nas velas de inflamação.',
        correct: true,
      },
      {
        answer: 'Fuga de óleo nos amortecedores.',
        correct: false,
      },
      {
        answer: 'Desgaste no disco de travão.',
        correct: false,
      },
    ],
  },
  {
    question: 'O órgão eléctrico que gera corrente de baixa tensão para a bateria é:',
    answers: [
      {
        answer: 'O dínamo ou alternador.',
        correct: true,
      },
      {
        answer: 'Fuga de óleo nos amortecedores',
        correct: false,
      },
      {
        answer: 'Desgaste no disco de travão.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os travões hidráulicos actuam por meio:',
    answers: [
      {
        answer: 'Do óleo existente no depósito do sistema hidráulico.',
        correct: true,
      },
      {
        answer: 'Do ar existente no depósito do sistema hidráulico.',
        correct: false,
      },
      {
        answer: 'Do óleo existente no cárter do motor.',
        correct: false,
      },
    ],
  },
  {
    question: 'Um dos cuidados que requer a bateria é manter os elementos sempre cobertos de electrólito:',
    answers: [
      {
        answer: 'Até 1 cm abaixo das placas.',
        correct: false,
      },
      {
        answer: 'Até 10 cm acima das placas.',
        correct: false,
      },
      {
        answer: 'Até 1 cm acima das placas.',
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
