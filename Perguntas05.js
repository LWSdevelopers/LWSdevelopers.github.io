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
    question: 'Periodicamente o condutor deve verificar:',
    answers: [
      {
        answer: 'O nível de óleo do motor com a vareta graduada.',
        correct: true,
      },
      {
        answer: 'As ligações da bateria.',
        correct: false,
      },
      {
        answer: 'A abertura dos platinados.',
        correct: false,
      },
    ],
  },
  {
    question: 'Actuando na porca de afinação de um injector, regula-se:',
    answers: [
      {
        answer: 'A abertura do orifício de injecção.',
        correct: false,
      },
      {
        answer: 'A pressão de injecção através da tensão na mola.',
        correct: true,
      },
      {
        answer: 'A válvula de entrada do gasóleo no injector.',
        correct: false,
      },
    ],
  },
  {
    question: 'Em caso de avaria da bomba de água:',
    answers: [
      {
        answer: 'O motor aquece excessivamente.',
        correct: true,
      },
      {
        answer: 'O termostato não abre.',
        correct: false,
      },
      {
        answer: 'Após o arranque o motor leva mais tempo a aquecer.',
        correct: false,
      },
      {
        answer: 'O motor não trabalha.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual o inconveniente de conduzir com o pé apoiado no pedal da embraiagem?',
    answers: [
      {
        answer: 'Gripagem do rolamento de encosto ou desgaste no carvão de encosto.',
        correct: true,
      },
      {
        answer: 'Gripagem do disco da embraiagem.',
        correct: false,
      },
      {
        answer: 'A embraiagem pode patinar.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual poderá ser a causa de um veículo com travão hidráulico só travar com o pedal muito a fundo?',
    answers: [
      {
        answer: 'Maxilas muito apertadas ou calços novos.',
        correct: false,
      },
      {
        answer: 'Bom nível de óleo no sistema de travagem.',
        correct: false,
      },
      {
        answer: 'Maxilas muito afastadas ou calços muito gastos.',
        correct: true,
      },
    ],
  },
  {
    question: 'O movimento de semi-rotação dos êmbolos dos elementos da bomba injectora serve para:',
    answers: [
      {
        answer: 'Alimentar o motor de arranque.',
        correct: false,
      },
      {
        answer: 'Regular a quantidade de gasóleo a ser consumido',
        correct: true,
      },
      {
        answer: 'Transformar a corrente de baixa em alta tensão.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os pneus gastam-se muito na parte central do piso, quando rodam:',
    answers: [
      {
        answer: 'Com pressão muito elevada.',
        correct: true,
      },
      {
        answer: 'Com a direcção desalinhada.',
        correct: false,
      },
      {
        answer: 'Com as rodas desequilibradas.',
        correct: false,
      },
      {
        answer: 'Com pressão muito baixa.',
        correct: false,
      },
    ],
  },
  {
    question: 'Periodicamente o líquido que se deve meter nas baterias, para repor o nível do electrólito, é:',
    answers: [
      {
        answer: 'Água destilada.',
        correct: true,
      },
      {
        answer: 'Água das torneiras.',
        correct: false,
      },
      {
        answer: 'Ácido sulfúrico e água.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como deve ser transportado um volume cujo peso seja igual à capacidade de carga máxima do veículo?',
    answers: [
      {
        answer: 'No centro da caixa de carga.',
        correct: true,
      },
      {
        answer: 'O mais próximo possível da cabina.',
        correct: false,
      },
      {
        answer: 'Centrado sobre o eixo da retaguarda.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se os amortecedores estiverem descarregados:',
    answers: [
      {
        answer: 'As molas oscilam demasiadamente.',
        correct: true,
      },
      {
        answer: 'Torna-se difícil movimentar a direcção.',
        correct: false,
      },
      {
        answer: 'O número de oscilações das molas diminui.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que provoca o arrefecimento do motor?',
    answers: [
      {
        answer: 'É a água que circula pelo cárter do motor.',
        correct: false,
      },
      {
        answer: 'É o ar que circula pelas camisas de ar do motor.',
        correct: false,
      },
      {
        answer: 'É o ar que circula pelo cárter do motor.',
        correct: false,
      },
      {
        answer: 'É a água que circula pelas camisas de água do motor.',
        correct: true,
      },
    ],
  },
  {
    question: 'A direção assistida permite:',
    answers: [
      {
        answer: 'Aumentar o ângulo de viragem.',
        correct: false,
      },
      {
        answer: 'Diminuir o esforço do condutor no volante.',
        correct: true,
      },
      {
        answer: 'Diminuir a desmultiplicação no volante.',
        correct: false,
      },
      {
        answer: 'Alinhar a direção com as rodas.',
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
        answer: 'Pendural, barra lateral, parafuso sem-fim e sector.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os fusíveis servem para:',
    answers: [
      {
        answer: 'Proteger a instalação elétrica.',
        correct: true,
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
        answer: 'Pela pressão do ar.',
        correct: false,
      },
      {
        answer: 'Pelos êmbolos dos cilindros.',
        correct: true,
      },
      {
        answer: 'Pelos pratos de pressão.',
        correct: false,
      },
    ],
  },
  {
    question: 'Que cuidados deve ter com as molas de lâminas do sistema de suspensão?',
    answers: [
      {
        answer: 'Colocar a carga na caixa de carga sempre à retaguarda.',
        correct: false,
      },
      {
        answer: 'Não se requer cuidados especiais, se partirem devem ser substituídas.',
        correct: false,
      },
      {
        answer: 'Não pôr carga excessiva, trazer devidamente lubrificadas as cavilhas e evitar covas.',
        correct: true,
      },
    ],
  },
  {
    question: 'No motor a falta do filtro de ar facilita a entrada das impurezas nos cilindros, o que pode provocar:',
    answers: [
      {
        answer: 'Sobreaquecimento do motor.',
        correct: false,
      },
      {
        answer: 'Gripagem do motor.',
        correct: false,
      },
      {
        answer: 'Desgaste dos cilindros.',
        correct: true,
      },
    ],
  },
  {
    question: 'Um pneu com pressão muito inferior à recomendada, apresenta maior desgaste:',
    answers: [
      {
        answer: 'Na zona central.',
        correct: false,
      },
      {
        answer: 'Nos bordos laterais.',
        correct: true,
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
        answer: 'Transformar a corrente de baixa em alta tensão.',
        correct: false,
      },
    ],
  },
  {
    question: 'Que tipo de motor tem uma relação de compressão mais alta?',
    answers: [
      {
        answer: 'O motor de explosão',
        correct: false,
      },
      {
        answer: 'O motor de combustão',
        correct: true,
      },
      {
        answer: 'Não há diferença',
        correct: false,
      },
    ],
  },
  {
    question: 'A finalidade do filtro de gasóleo, é:',
    answers: [
      {
        answer: 'Reter as impurezas contidas no gasóleo.',
        correct: true,
      },
      {
        answer: 'Filtrar o óleo contido no gasóleo.',
        correct: false,
      },
      {
        answer: 'Filtrar a água existente no gasóleo.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para que a água circule no radiador é preciso que o termóstato a deixe circular depois de:',
    answers: [
      {
        answer: 'de a água atingir a temperatura de 70ºC a 80ºC.',
        correct: true,
      },
      {
        answer: 'de a água atingir a temperatura de 100ºC',
        correct: false,
      },
      {
        answer: 'de a água atingir a temperatura de 40ºC',
        correct: false,
      },
      {
        answer: 'de a água atingir a temperatura de 120ºC',
        correct: false,
      },
    ],
  },
  {
    question: 'Num motor que funciona num ciclo a quatro tempos, de quatro cilindros em linha, em cada 2 voltas completas da cambota:',
    answers: [
      {
        answer: 'Dão-se quatro combustões.',
        correct: true,
      },
      {
        answer: 'Dão-se duas combustões.',
        correct: false,
      },
      {
        answer: 'Dão-se 3 combustões.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os travões pneumáticos actuam por meio:',
    answers: [
      {
        answer: 'Do ar comprimido pelo compressor ligado ao motor.',
        correct: true,
      },
      {
        answer: 'Do ar comprimido por um compressor eléctrico.',
        correct: false,
      },
      {
        answer: 'Da depressão de um sistema hidráulico.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que pode acontecer quando os cabos ligados à bateria estão oxidados ou pouco apertados?',
    answers: [
      {
        answer: 'Um incêndio provocado por curto circuito',
        correct: false,
      },
      {
        answer: 'Descarregar-se totalmente a bateria',
        correct: false,
      },
      {
        answer: 'Não funcionar o motor de arranque',
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
