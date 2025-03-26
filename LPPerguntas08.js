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
    question: 'Fora das localidades, a paragem e o estacionamento devem fazer-se:',
    answers: [
      {
        answer: 'Fora das faixas de rodagem.',
        correct: true,
      },
      {
        answer: 'Só nos locais especialmente destinados para esse efeito e pela forma indicada.',
        correct: false,
      },
      {
        answer: 'Nas faixas de rodagem, sendo possível fazê-lo fora delas.',
        correct: false,
      },
      {
        answer: 'Só nos locais especialmente destinados para esse efeito e pela forma indicada.',
        correct: false,
      },
      {
        answer: 'Na via de trânsito da esquerda',
        correct: false,
      },
    ],
  },
  {
    question: 'Que entende-se por dever?',
    answers: [
      {
        answer: 'A obrigação de avançar rapidamente, logo que o sinal verde do semáforo assim o permita.',
        correct: false,
      },
      {
        answer: 'A obrigação moral de proceder de acordo com as normas e a consciência.',
        correct: true,
      },
      {
        answer: 'A intenção de iniciar a marcha sem a devida sinalização.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que indica a marca rodoviária amarela área facil de congestionar:',
    answers: [
      {
        answer: 'Cruzamento ou entroncamento facilmente congestionáveis.',
        correct: true,
      },
      {
        answer: 'Faixa de sentido reversível.',
        correct: false,
      },
      {
        answer: 'Redução de filas de trânsito.',
        correct: false,
      },
    ],
  },
  {
    question: 'Em caso de emergência, deve utilizar o colete reflector:',
    answers: [
      {
        answer: 'Antes de colocar os triângulos de pré-sinalização de perigo.',
        correct: true,
      },
      {
        answer: 'Só quando estiver a reparar o veículo.',
        correct: false,
      },
      {
        answer: 'Só quando proceda a remoção da carga.',
        correct: false,
      },
      {
        answer: 'Não é obrigatório, mas e aconselhável.',
        correct: false,
      },
    ],
  },
  {
    question: 'O ordenamento do trânsito em todas as estradas, compete:',
    answers: [
      {
        answer: 'á Policia de Trânsito.',
        correct: false,
      },
      {
        answer: 'aos corpos Administrativos ou Conselhos Municipal.',
        correct: false,
      },
      {
        answer: 'Instituto nacional de transportes terrestres',
        correct: true,
      },
      {
        answer: 'á Policia Municipal.',
        correct: false,
      },
    ],
  },
  {
    question: 'Que deve fazer o condutor perante a marca rodoviária de cor branca, eixo da via descontinuado?',
    answers: [
      {
        answer: 'Manter-se na via de trânsito que ela delimita, não podendo ser pisada ou transposta.',
        correct: false,
      },
      {
        answer: 'Manter-se na via de trânsito que ela delimita, só podendo ser pisada ou transposta para efectuar manobras.',
        correct: true,
      },
      {
        answer: 'Manter-se na via de trânsito que ela delimita, devendo abrandar a marcha.',
        correct: false,
      },
    ],
  },
  {
    question: 'A maioria dos acidentes de trânsito são devidos:',
    answers: [
      {
        answer: 'às pessoas", "às condições meteorológicas ou ambientais.',
        correct: true,
      },
      {
        answer: 'às condições do veículo.',
        correct: false,
      },
      {
        answer: 'às condições da estrada.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao ligar as luzes, se no painel aparecer o símbolo do farol de cor verde, significa que estão ligadas:',
    answers: [
      {
        answer: 'As luzes de cruzamento (médios).',
        correct: true,
      },
      {
        answer: 'As luzes de estrada (máximos).',
        correct: false,
      },
      {
        answer: 'As luzes mínimas.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num automóvel, é obrigatório a utilização de cintos de segurança:',
    answers: [
      {
        answer: 'Dentro e fora das localidades.',
        correct: true,
      },
      {
        answer: 'Apenas fora das localidades.',
        correct: false,
      },
      {
        answer: 'Apenas dentro das localidades.',
        correct: false,
      },
    ],
  },
  {
    question: 'O socorrista, na avaliação do grau de consciência deve:',
    answers: [
      {
        answer: 'Abanar levemente a vitima ao nível dos ombros e falar com ela, questionando se esta a ouvir, esta a sentir-se bem, onde esta, como se chama, que dia é hoje.',
        correct: true,
      },
      {
        answer: 'Ver os movimentos do tórax e do abdómen.',
        correct: false,
      },
      {
        answer: 'Sentir o ar expirado, encostando a sua face ao nariz e boca da vitima.',
        correct: false,
      },
    ],
  },
  {
    question: 'Um condutor distraído:',
    answers: [
      {
        answer: 'Tem um tempo de reacção mais reduzido.',
        correct: false,
      },
      {
        answer: 'Tem o mesmo tempo de reacção que qualquer condutor.',
        correct: false,
      },
      {
        answer: 'Tem um tempo de reacção mais longo.',
        correct: true,
      },
    ],
  },
  {
    question: 'Os sistemas de segurança activa de um veículo:',
    answers: [
      {
        answer: 'eliminam a possibilidade de sofrer lesões em caso da acidente.',
        correct: false,
      },
      {
        answer: 'ajudam o condutor a reduzir a possibilidade de ter um acidente.',
        correct: true,
      },
      {
        answer: 'minimizam as lesões em caso de acidente.',
        correct: false,
      },
    ],
  },
  {
    question: 'Com o fim de ter a uma boa capacidade de manobra e garantir o bom funcionamento dos sistemas de segurança do veículo, o condutor deve regular o assento.',
    answers: [
      {
        answer: 'por forma a que as pernas e braços fiquem ligeiramente fletidos.',
        correct: true,
      },
      {
        answer: 'por forma a ficar longe do volante, com as pernas e braços esticados.',
        correct: false,
      },
      {
        answer: 'por forma a ficar muito próximo do volante, com as pernas e braços encolhidos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Entende-se por cidadania:',
    answers: [
      {
        answer: 'O conjunto de valores sociais que determinam o conjunto de deveres e direitos de um cidadão.',
        correct: true,
      },
      {
        answer: 'O princípio que permite avançar em primeiro lugar num cruzamento não sinalizado.',
        correct: false,
      },
      {
        answer: 'A nacionalidade de um cidadão que o identifica como tal.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se o condutor consome álcool, em que momento aumenta o risco de acidente?',
    answers: [
      {
        answer: 'Depois de superar o limite legal permitido.',
        correct: false,
      },
      {
        answer: 'Antes de superar o limite legal permitido.',
        correct: true,
      },
      {
        answer: 'Só quando o consome com substâncias psicotrópicas.',
        correct: false,
      },
      {
        answer: 'Só quando é tomado com medicamentos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os sistemas de segurança passiva dos veículos:',
    answers: [
      {
        answer: 'tem uma manutenção muito cara e complexa.',
        correct: false,
      },
      {
        answer: 'evitam os acidentes.',
        correct: false,
      },
      {
        answer: 'devem ser utilizados corretamente, porque o seu mau uso pode ser perigoso.',
        correct: true,
      },
      {
        answer: 'não são eficazes para reduzir as consequências dos acidentes.',
        correct: false,
      },
    ],
  },
  {
    question: 'Deve ter alguma precaução especial quando circula dentro das localidades?',
    answers: [
      {
        answer: 'Sim, apenas não ficar imobilizado nos cruzamentos ou entroncamentos.',
        correct: false,
      },
      {
        answer: 'Sim, utilizar os sinais sonoros quando se aproximar de peões.',
        correct: false,
      },
      {
        answer: 'Sim, moderar a velocidade, especialmente nas vias marginadas por edificações.',
        correct: true,
      },
      {
        answer: 'Não',
        correct: false,
      },
    ],
  },
  {
    question: 'A carta de condução, tem tempo de validade?',
    answers: [
      {
        answer: 'Só  as sub categorias P, D e G.',
        correct: false,
      },
      {
        answer: 'Sim, cinco anos para as categorias A1, A, B, C1 e C.',
        correct: true,
      },
      {
        answer: 'Sim, dois anos para as categorias A1, A, B, C1 e C.',
        correct: false,
      },
      {
        answer: 'Não',
        correct: false,
      },
    ],
  },
  {
    question: 'Perante a luz verde de um semáforo:',
    answers: [
      {
        answer: 'Regra geral, deve avançar.',
        correct: true,
      },
      {
        answer: 'Regra geral, deve parar',
        correct: false,
      },
      {
        answer: 'É obrigado a avançar.',
        correct: false,
      },
    ],
  },
  {
    question: 'Onde é proibido realizar uma ultrapassagem?',
    answers: [
      {
        answer: 'Nas auto-estradas.", "Nas auto-estradas.',
        correct: false,
      },
      {
        answer: 'Nos cruzamentos e entroncamentos em que não tenha prioridade de passagem.',
        correct: true,
      },
      {
        answer: 'Em todos os cruzamentos e entroncamentos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Devem utilizar os cintos de segurança os passageiros que viajam no veículo?',
    answers: [
      {
        answer: 'Sim, tanto os que ocupem o banco da frente como o da retaguarda.',
        correct: true,
      },
      {
        answer: 'Não, só é obrigatório para o condutor.',
        correct: false,
      },
      {
        answer: 'Só fora das localidades',
        correct: false,
      },
      {
        answer: 'Só os que ocupem o banco da frente.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num cruzamento de vias, posso ultrapassar?',
    answers: [
      {
        answer: 'Sim, se tiver prioridade no cruzamento.',
        correct: true,
      },
      {
        answer: 'Sim, mas só aos veículos que mudam de direcção para a direita.',
        correct: false,
      },
      {
        answer: 'Sim, mas só aos veículos de duas rodas.',
        correct: false,
      },
    ],
  },
  {
    question: 'A marcha atrás:',
    answers: [
      {
        answer: 'só é permitida como manobra auxiliar ou de recurso.',
        correct: true,
      },
      {
        answer: 'é permitida nas auto-estradas.',
        correct: false,
      },
      {
        answer: 'é permitida durante a circulação normal do veículo.',
        correct: false,
      },
      {
        answer: 'é permitida nas pontes, passagens de nível e tuneis.',
        correct: false,
      },
    ],
  },
  {
    question: 'A luz indicadora de mudança de direcção a direita acionada ao iniciar uma ultrapassagem, só deve ser desligada:',
    answers: [
      {
        answer: 'Quando termine de mudar de via de trânsito.',
        correct: true,
      },
      {
        answer: 'uma vez finalizada a ultrapassagem.',
        correct: false,
      },
      {
        answer: 'antes de mudar de via de trânsito.',
        correct: false,
      },
      {
        answer: 'só depois de percorrer uma distancia de 500 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'São evitaveis os acidentes de viação?',
    answers: [
      {
        answer: 'Não, porque os acidentes ocorrem por acaso.',
        correct: false,
      },
      {
        answer: 'Sim, excepto os causados pelo mau estado dos pneus.',
        correct: false,
      },
      {
        answer: 'Sim, podemos aprender a evita-los e a reduzir as suas consequências',
        correct: true,
      },
      {
        answer: 'Sim, mas só se o estado das estradas melhorar.',
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
