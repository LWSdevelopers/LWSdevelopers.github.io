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
    question: 'Durante o tempo de escape de um motor de combustão interna, como se encontram as válvulas?',
    answers: [
      {
        answer: 'A de admissão fechada e a de escape aberta.',
        correct: true,
      },
      {
        answer: 'As duas abertas',
        correct: false,
      },
      {
        answer: 'A de admissão aberta e a de escape fechada.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para que os travões atuem com eficácia num veículo com servo-freio, o condutor deve:',
    answers: [
      {
        answer: 'Ter o cuidado de acelerar ao mesmo tempo que trava.',
        correct: false,
      },
      {
        answer: 'Durante a condução, manter o motor sempre a trabalhar.',
        correct: true,
      },
      {
        answer: 'Ter o cuidado de desembraiar sempre que trava.',
        correct: false,
      },
    ],
  },
  {
    question: 'Deve-se deitar água no radiador quando o motor ainda estiver quente?',
    answers: [
      {
        answer: 'Sim, desde que o motor esteja trabalhar',
        correct: true,
      },
      {
        answer: 'Não, nunca.',
        correct: false,
      },
      {
        answer: 'Sim, desde que o motor esteja parado.',
        correct: false,
      },
      {
        answer: 'Sim, desde que a água esteja quente.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que se nota na condução de um automóvel que não tenha as rodas da frente alinhadas?',
    answers: [
      {
        answer: 'Com o volante direito, o veículo desvia-se para um dos lados.',
        correct: true,
      },
      {
        answer: 'Não se nota nada de especial.',
        correct: false,
      },
      {
        answer: 'Com o volante direito, o veículo desvia-se para um dos lados.',
        correct: false,
      },
    ],
  },
  {
    question: 'O diferencial serve para:',
    answers: [
      {
        answer: 'Ligar a embraiagem à caixa de velocidades.',
        correct: false,
      },
      {
        answer: 'Transmitir o movimento do motor à caixa de velocidades.',
        correct: false,
      },
      {
        answer: 'As rodas motoras rodarem com velocidades diferentes.',
        correct: true,
      },
    ],
  },
  {
    question: 'Se os amortecedores hidráulicos de um automóvel estiverem descarregados, o condutor nota:',
    answers: [
      {
        answer: 'Dificuldade de travagem.',
        correct: false,
      },
      {
        answer: 'Oscililação demasiada das molas.',
        correct: true,
      },
      {
        answer: 'Aumento de desagaste dos pneus.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para evitar avarias no sistema de lubrificação do motor, periódicamente, deve-se substituir:',
    answers: [
      {
        answer: 'O filtro de óleo.',
        correct: true,
      },
      {
        answer: 'A bomba de óleo.',
        correct: false,
      },
      {
        answer: 'O filtro de ar.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a principal função das touches?',
    answers: [
      {
        answer: 'A transmissão do movimento das cames às hastes das válvulas.',
        correct: true,
      },
      {
        answer: 'Lubrificar as válvulas',
        correct: false,
      },
      {
        answer: 'Na zona central.',
        correct: false,
      },
      {
        answer: 'Guiar as válvulas no seu deslocamento.',
        correct: false,
      },
    ],
  },
  {
    question: 'Durante o transporte de materiais pulverulentas em automóvel de mercadorias de caixa aberta, o condutor deve assegurar-se de que:',
    answers: [
      {
        answer: 'A mercadoria transportada não se espalhe pelo ar e pela faixa de rodagem.',
        correct: true,
      },
      {
        answer: 'A mercadoria transportada não se espalhe pela caixa de carga.',
        correct: false,
      },
      {
        answer: 'O peso da mercadoria não ultrapasse a tara do automóvel.',
        correct: false,
      },
    ],
  },
  {
    question: 'O nível do eletrólito da bateria deverá permanecer sempre:',
    answers: [
      {
        answer: 'Acima das placas.',
        correct: true,
      },
      {
        answer: 'Abaixo das placas.',
        correct: false,
      },
      {
        answer: 'A meio das placas',
        correct: false,
      },
      {
        answer: 'Ao nível das placas.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando salta a faísca nos pólos das velas dum motor a gasolina a quatro tempos, qual a posição das válvulas de escape e de admissão?',
    answers: [
      {
        answer: 'Ambas abertas.',
        correct: false,
      },
      {
        answer: 'A de escape começa a abrir e a de admissão está fechada',
        correct: false,
      },
      {
        answer: 'Ambas fechadas.',
        correct: true,
      },
    ],
  },
  {
    question: 'A função do injetor nos motores Diesel é:',
    answers: [
      {
        answer: 'Injetar a gasolina na câmara de explosão.',
        correct: false,
      },
      {
        answer: 'Injetar o gasóleo na câmara de combustão.',
        correct: true,
      },
      {
        answer: 'Injetar a mistura combustível na quantidade e momento certos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando se verifica excessiva dificuldade em engrenar uma mudança, a causa poderá ser:',
    answers: [
      {
        answer: 'Sincronizador avariado.',
        correct: true,
      },
      {
        answer: 'Disco de embraiagem ligeiramente gasto.',
        correct: false,
      },
      {
        answer: 'Caixa de velocidade com excesso de valvulina.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num sistema de travagem do tipo hidráulico, purgar os travões consiste em:',
    answers: [
      {
        answer: 'Retirar o ar das tubagens.',
        correct: true,
      },
      {
        answer: 'Filtrar o líquido do circuito.',
        correct: false,
      },
      {
        answer: 'Afinar as maxilas.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se o carburador tiver a bóia rota, qual poderá ser a consequência?',
    answers: [
      {
        answer: 'O motor ganha mais potência.',
        correct: false,
      },
      {
        answer: 'O motor afoga-se e pára.',
        correct: true,
      },
      {
        answer: 'Trabalha no relanti.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os pneus de um automóvel ligeiro podem danificar-se seriamente quando:',
    answers: [
      {
        answer: 'Circulam com pressão ligeiramente superior ao normal.',
        correct: false,
      },
      {
        answer: 'Circulam em estradas com areia.',
        correct: false,
      },
      {
        answer: 'Passam por buracos e sobem passeios.',
        correct: true,
      },
    ],
  },
  {
    question: 'Alinhar a direção significa:',
    answers: [
      {
        answer: 'Anular todas as folgas da direção.',
        correct: false,
      },
      {
        answer: 'Regular as folgas da direção.',
        correct: false,
      },
      {
        answer: 'Afinar a convergência ou a divergência das rodas direcionais.',
        correct: true,
      },
    ],
  },
  {
    question: 'O dispositivo de acoplamento que em conjunto com um motor de elétrico permite que o motor de combustão arranque, denomina-se:',
    answers: [
      {
        answer: 'Bobine',
        correct: false,
      },
      {
        answer: 'Bendix',
        correct: true,
      },
      {
        answer: 'Solenoide',
        correct: false,
      },
    ],
  },
  {
    question: 'O sistema anti bloqueio ABS, actua:',
    answers: [
      {
        answer: 'Em cada uma das rodas independentes.',
        correct: true,
      },
      {
        answer: 'Na transmissão',
        correct: false,
      },
      {
        answer: 'Na Direção',
        correct: false,
      },
    ],
  },
  {
    question: 'Durante o transporte de materiais pulverulentas em automóvel pesado, o condutor deve assegurar-se de que:',
    answers: [
      {
        answer: 'A mercadoria transportada não se espalhe pela caixa de carga.',
        correct: false,
      },
      {
        answer: 'A mercadoria transportada não se espalhe pelo ar e pela faixa de rodagem.',
        correct: true,
      },
      {
        answer: 'O peso da mercadoria não ultrapasse a tara do automóvel.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os orgãos que servem para impedir a passagem dos gases da câmara de explosão para o cárter são:',
    answers: [
      {
        answer: 'Os segmentos',
        correct: true,
      },
      {
        answer: 'Os êmbolos',
        correct: false,
      },
      {
        answer: 'As válvulas',
        correct: false,
      },
    ],
  },
  {
    question: 'A existência de ar nos tubos de um sistema de travagem hidráulico:',
    answers: [
      {
        answer: 'Pode tornar a travagem nula ou ineficiente.',
        correct: true,
      },
      {
        answer: 'Produz uma travagem desigual nas várias rodas.',
        correct: false,
      },
      {
        answer: 'Não afeta a eficiência de travagem.',
        correct: false,
      },
      {
        answer: 'Aumenta a força de travagem.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que se nota na condução de um automóvel que não tenha a direção alinhada?',
    answers: [
      {
        answer: 'Com o volante direito, o veículo desvia-se para um dos lados.',
        correct: true,
      },
      {
        answer: 'O veículo trava mais numa das rodas.',
        correct: false,
      },
      {
        answer: 'Não se nota nada de especial.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se conduzir um veículo equipado com travões pneumáticos, qual o instrumento que deve dar atenção?',
    answers: [
      {
        answer: 'Manômetro de ar.',
        correct: true,
      },
      {
        answer: 'Amperímetro',
        correct: false,
      },
      {
        answer: 'Voltímetro',
        correct: false,
      },
      {
        answer: 'Termómetro',
        correct: false,
      },
    ],
  },
  {
    question: 'O disco de embraiagem é empurrado contra o volante do motor:',
    answers: [
      {
        answer: 'Pelo veio primário da caixa de velocidades.',
        correct: false,
      },
      {
        answer: 'Pelo rolamento ou carvão de encosto.',
        correct: false,
      },
      {
        answer: 'Pelo prato de pressão.',
        correct: true,
      },
     {
        answer: 'Pelo veio de transmissão.',
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
