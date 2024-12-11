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
    question: 'Os fusíveis têm como principal função:',
    answers: [
      {
        answer: 'Aumentar a intensidade do circuito eléctrico.',
        correct: false,
      },
      {
        answer: 'Proteger a instalação eléctrica em caso de curto-circuito.',
        correct: true,
      },
      {
        answer: 'Evitar curto-circuito.',
        correct: false,
      },
    ],
  },
  {
    question: 'Antes de por o motor a funcionar o condutor deve:',
    answers: [
      {
        answer: 'Encher o carburador com gasolina.',
        correct: false,
      },
      {
        answer: 'Engrenar a primeira velocidade.',
        correct: false,
      },
      {
        answer: 'Verificar se o radiador tem água suficiente e se o cárter tem óleo ao nível.',
        correct: true,
      },
    ],
  },
  {
    question: 'Num incêndio provocado por curto-circuito, a primeira coisa a fazer é:',
    answers: [
      {
        answer: 'Deligar a bateria ou o motor',
        correct: true,
      },
      {
        answer: 'Lançar espuma do extintor no local onde se deu o curto-circuito.',
        correct: false,
      },
      {
        answer: 'Lançar areia ou terra no local onde se deu o curto-circuito.',
        correct: false,
      },
    ],
  },
  {
    question: 'O motor apresenta um consumo excessivo de óleo e liberta gases de escape de cor azulada. Qual poderá ser a causa?',
    answers: [
      {
        answer: 'Os segmentos ou as paredes dos cilindros estão bastantes desgastados.',
        correct: true,
      },
      {
        answer: 'O óleo utilizado é muito viscoso.',
        correct: false,
      },
      {
        answer: 'A junta do cárter está a vedar mal.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nos travões pneumáticos o ar comprimido é obtido:',
    answers: [
      {
        answer: 'Através do filtro de ar.',
        correct: false,
      },
      {
        answer: 'Por meio de um compressor.',
        correct: true,
      },
      {
        answer: 'Através do intercooler.',
        correct: false,
      },
    ],
  },
  {
    question: 'O perigo de resvalamento é menos provável quando:',
    answers: [
      {
        answer: 'Se coloca a alavanca de velocidade em ponto morto nas descidas.',
        correct: false,
      },
      {
        answer: 'O condutor inicia as travagens com suficiente antecedência.',
        correct: true,
      },
      {
        answer: 'Os pneus têm pressão superior à recomendada.',
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
        answer: 'Deve-se utilizar veículos de caixa isotérmica.',
        correct: false,
      },
      {
        answer: 'Não se podem utilizar veículos de caixa aberta.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num motor a 4 tempos, por cada tempo de funcionamento do motor, a cambota dá:',
    answers: [
      {
        answer: 'Meia volta',
        correct: true,
      },
      {
        answer: 'Uma volta',
        correct: false,
      },
      {
        answer: 'Dez voltas',
        correct: false,
      },
    ],
  },
  {
    question: 'As bielas servem para:',
    answers: [
      {
        answer: 'Transmitir movimento a cambota.',
        correct: true,
      },
      {
        answer: 'Ligar o motor',
        correct: false,
      },
      {
        answer: 'Acelerar automaticamente',
        correct: false,
      },
    ],
  },
  {
    question: 'O curso do êmbolo é definido por:',
    answers: [
      {
        answer: 'A distância percorrida pelo êmbolo entre o P.M.S. e o P.M.I.',
        correct: true,
      },
      {
        answer: 'O diâmetro dos cilindros',
        correct: false,
      },
      {
        answer: 'Distância percorrida pelo cilindro',
        correct: false,
      },
    ],
  },
  {
    question: 'As molas das maxilas, servem para:',
    answers: [
      {
        answer: 'Travar o veículo',
        correct: false,
      },
      {
        answer: 'Diminuir o esforço do condutor',
        correct: false,
      },
      {
        answer: 'Afastar as maxilas do tambor.',
        correct: true,
      },
    ],
  },
  {
    question: 'Num motor de 6 cilindros e 4 tempos, quantas voltas dá a cambota, num ciclo completo:',
    answers: [
      {
        answer: '3',
        correct: false,
      },
      {
        answer: '2',
        correct: true,
      },
      {
        answer: '1',
        correct: false,
      },
      {
        answer: '4',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando um veículo descreve uma curva e a luz de aviso da lubrificação do motor acende, a causa pode ser:',
    answers: [
      {
        answer: 'Nivel de óleo no motor, muito baixo',
        correct: true,
      },
      {
        answer: 'Nivel de óleo no motor, muito alto',
        correct: false,
      },
      {
        answer: 'Avaria no filtro de ar',
        correct: false,
      },
    ],
  },
  {
    question: 'Clique na ordem correcta dos tempos de um ciclo de motor a 4 tempos:',
    answers: [
      {
        answer: 'Admissão, compressão, combustão/explosão, escape.',
        correct: true,
      },
      {
        answer: 'Compressão, admissão, combustão/explosão, escape.',
        correct: false,
      },
      {
        answer: 'Compressão, combustão/explosão, escape, admissão.',
        correct: false,
      },
    ],
  },
  {
    question: 'Accionando a ventoinha por embraiagem hidráulica sem válvula de comando, para produzir a rotação do cubo:',
    answers: [
      {
        answer: 'É introduzido dentro deste, óleo para que quando o disco rodar o cubo seja arrastado juntamente com o disco.',
        correct: false,
      },
      {
        answer: 'É retirado o óleo de dentro de disco para fazer rodar o cubo.',
        correct: true,
      },
      {
        answer: 'É introduzido o óleo dentro do disco',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a sede de uma válvula?',
    answers: [
      {
        answer: 'Todo o revestimento da válvula',
        correct: false,
      },
      {
        answer: 'A zona superior da válvula',
        correct: false,
      },
      {
        answer: 'A zona da cabeça do motor',
        correct: true,
      },
    ],
  },
  {
    question: 'O retardador ou travão elétrico, funciona:',
    answers: [
      {
        answer: 'Funciona através de correntes parasitas',
        correct: false,
      },
      {
        answer: 'Através da força de atrito entre duas superfícies em contacto que o condutor controla por meio de manípulo próprio.',
        correct: false,
      },
      {
        answer: 'Gerando um campo magnético, com produção de corrente induzida que se opõe ao movimento de dois discos ligados à transmissão.',
        correct: true,
      },
    ],
  },
  {
    question: 'Uma vez acionado o pedal de acelerador, actua:',
    answers: [
      {
        answer: 'Na borboleta de ar',
        correct: false,
      },
      {
        answer: 'Na borboleta de aceleração.',
        correct: true,
      },
      {
        answer: 'No regulador das velocidades',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é o nome do reservatório de óleo, que fica na parte inferior do motor?',
    answers: [
      {
        answer: 'Carter inferior',
        correct: true,
      },
      {
        answer: 'Engrenagem',
        correct: false,
      },
      {
        answer: 'Tanque',
        correct: false,
      },
    ],
  },
  {
    question: 'A manutenção periódica é necessária na distribuição por:',
    answers: [
      {
        answer: 'Carreto',
        correct: false,
      },
      {
        answer: 'Correia',
        correct: true,
      },
      {
        answer: 'Corrente',
        correct: false,
      },
    ],
  },
  {
    question: 'Num motor de explosão arrefecido pelo sistema de bomba de água, a circulação faz-se da seguinte forma:',
    answers: [
      {
        answer: 'A água desce do radiador, entra na bomba, sobe às camisas de água no motor e volta ao radiador.',
        correct: true,
      },
      {
        answer: 'A água desce do radiador, sobe na bomba, entra nas camisas de água do motor e volta à bomba.',
        correct: false,
      },
      {
        answer: 'A água desce da bomba, entra no radiador sobe às camisas de água do motor e volta à bomba.',
        correct: false,
      },
    ],
  },
  {
    question: 'Na situação de caldeamento ou gripagem, devido ao efeito do calor originado pelo atrito de deslizamento:',
    answers: [
      {
        answer: 'Os cristais das superfícies deslizantes têm tendência para se interpenetrarem.',
        correct: true,
      },
      {
        answer: 'Os cristais das peças próximas das superfícies deslizantes têm tendência para se interpenetrarem.',
        correct: false,
      },
      {
        answer: 'Nada acontece',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a ordem correcta do ciclo de funcionamento do motor a 4 tempos:',
    answers: [
      {
        answer: '1, 3, 4, 2.',
        correct: true,
      },
      {
        answer: '1, 2, 3, 4.',
        correct: false,
      },
      {
        answer: '1, 2, 4, 3.',
        correct: false,
      },
    ],
  },
  {
    question: 'As molas das maxilas, quando perde a sua elasticidade ao retirar o pé:',
    answers: [
      {
        answer: 'O carro, não trava',
        correct: false,
      },
      {
        answer: 'Do pedal após uma travagem as rodas continuam presas.',
        correct: true,
      },
      {
        answer: 'A roda não trava',
        correct: false,
      },
    ],
  },
  {
    question: 'Num motor de 4 tempos, em cada tempo do ciclo, a combota roda:',
    answers: [
      {
        answer: '180º',
        correct: true,
      },
      {
        answer: '90º',
        correct: false,
      },
      {
        answer: '720º',
        correct: false,
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
