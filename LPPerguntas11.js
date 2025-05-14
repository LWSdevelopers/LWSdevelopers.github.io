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
    question: 'Fumar enquanto conduz:',
    answers: [
      {
        answer: 'reduz a agressividade do condutor.',
        correct: false,
      },
      {
        answer: 'é proibido.',
        correct: false,
      },
      {
        answer: 'é aconselhável, pois ajuda a manter a atenção.',
        correct: false,
      },
      {
        answer: 'pode afectar a atenção na condução.',
        correct: true,
      },
    ],
  },
  {
    question: 'Circular com os pneus do veículo velhos:',
    answers: [
      {
        answer: 'só é perigoso se os pneus tem cortes ou deformações.',
        correct: false,
      },
      {
        answer: 'é perigoso, porque endurecem e agarram-se pior a estrada.',
        correct: true,
      },
      {
        answer: 'não é perigoso se tem o piso com uma boa profundidade.',
        correct: false,
      },
    ],
  },
  {
    question: 'É perigoso conduzir quando o condutor está cansado?',
    answers: [
      {
        answer: 'Sim, porque o condutor demora mais tempo a reagir.',
        correct: true,
      },
      {
        answer: 'Não há perigo, já que o cansaço relaxa.',
        correct: false,
      },
      {
        answer: 'Não, porque se conduz mais devagar.',
        correct: false,
      },
      {
        answer: 'Sim, mais só quando se conduz dentro das localidades.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para concluir uma ultrapassagem com segurança, o condutor deve retornar a esquerda.',
    answers: [
      {
        answer: 'depois de ter a certeza que não resulta perigo para os veículos ultrapassados.',
        correct: true,
      },
      {
        answer: 'depois de 200 metros á frente do veículo ultrapassado.',
        correct: false,
      },
      {
        answer: 'sem necessidade de sinalizar o retorno á esquerda.',
        correct: false,
      },
      {
        answer: 'só quando se apresenta outro veículo em sentido contrário.',
        correct: false,
      },
    ],
  },
  {
    question: 'Que deve fazer o condutor perante a marca rodoviária que delimita a via de trânsito da esquerda?',
    answers: [
      {
        answer: 'Abrandar a marcha, se circula pela via de trânsito da direita.',
        correct: false,
      },
      {
        answer: 'Aumentar a velocidade, se circula pela via de trânsito que delimita.',
        correct: false,
      },
      {
        answer: 'Abrandar a marcha, se circula pela via de trânsito que delimita.',
        correct: true,
      },
      {
        answer: 'Parar',
        correct: false,
      },
    ],
  },
  {
    question: 'Têm prioridade de passagem os condutores:',
    answers: [
      {
        answer: 'que saiam de um prédio ou caminho particular.',
        correct: false,
      },
      {
        answer: 'que transitem pelas auto-estradas, em relação aos veículos que se apresentem pelos ramais de acesso.',
        correct: true,
      },
      {
        answer: 'que entrem numa rotunda.',
        correct: false,
      },
      {
        answer: 'que entrem numa auto-estrada pelos respetivos ramais de acesso.',
        correct: false,
      },
    ],
  },
  {
    question: 'Pode transportar uma criança neste motociclo?',
    answers: [
      {
        answer: 'Sim, se tem pelo menos 7 anos e leva o capacete devidamente ajustado e apertado.',
        correct: true,
      },
      {
        answer: 'Sim, num assento adicional.',
        correct: false,
      },
      {
        answer: 'Não, nunca.',
        correct: false,
      },
      {
        answer: 'Sim, se tem pelo menos 3 anos e leva o capacete devidamente ajustado e apertado.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para garantir uma proteção adequada, os sistemas de retenção de crianças devem ser:',
    answers: [
      {
        answer: 'Adequados ao tamanho e peso da criança.',
        correct: true,
      },
      {
        answer: 'Colocados sem cautela em cima dos bancos do veículo.',
        correct: false,
      },
      {
        answer: 'Da cor dos estofos do veículo.',
        correct: false,
      },
    ],
  },
  {
    question: 'Dentro das localidades, onde é proibido parar o seu veículo?',
    answers: [
      {
        answer: 'A menos de 5 metros para um e outro lado dos cruzamentos, entroncamentos e rotundas.',
        correct: true,
      },
      {
        answer: 'A menos de 50 metros dos cruzamentos ou entroncamentos.',
        correct: false,
      },
      {
        answer: 'No lado da faixa de rodagem em que esteja uma linha descontínua de cor amarela.',
        correct: false,
      },
      {
        answer: 'Em segunda fila.',
        correct: false,
      },
    ],
  },
  {
    question: 'Com que frequência deve verificar o condutor a pressão dos pneus do seu veículo?',
    answers: [
      {
        answer: 'Duas vezes por mês, quando os pneus estão frios.',
        correct: true,
      },
      {
        answer: 'Não é necessário verificar a pressão dos pneus.',
        correct: false,
      },
      {
        answer: 'Duas vezes por mês, quando os pneus estão quentes.',
        correct: false,
      },
      {
        answer: 'Apenas ao fazer uma viagem longa.',
        correct: false,
      }
    ],
  },
  {
    question: 'Entrada/Saida numa rotunda, quem tem prioridade de passagem?',
    answers: [
      {
        answer: 'O condutor que entra na rotunda.',
        correct: false,
      },
      {
        answer: 'O condutor que chegar primeiro.',
        correct: false,
      },
      {
        answer: 'O condutor que circula dentro da rotunda.',
        correct: true,
      },
      {
        answer: 'O condutor que circule com uma velocidade mais elevada.',
        correct: false,
      },
    ],
  },
  {
    question: 'A condução defensiva é importante?',
    answers: [
      {
        answer: 'Sim, evita grandes transtornos, e acidentes na via pública',
        correct: true,
      },
      {
        answer: 'Não, se desejar ser rápido',
        correct: false,
      },
    ],
  },
  {
    question: 'Para conduzir com segurança, é necessário colocar corretamente as mãos no volante?',
    answers: [
      {
        answer: 'Sim, sempre',
        correct: true,
      },
      {
        answer: 'Não, só é necessário regular o encosto de cabeça.',
        correct: false,
      },
      {
        answer: 'Apenas quando se conduz nas auto-estradas.',
        correct: false,
      },
      {
        answer: 'Depende da intensidade do trânsito',
        correct: false,
      },
    ],
  },
  {
    question: 'Que deve fazer para evitar atropelar um ciclista?',
    answers: [
      {
        answer: 'Aproximar-se dele para que se desvie para a esquerda.',
        correct: false,
      },
      {
        answer: 'Buzinar quando se aproximar dele.',
        correct: false,
      },
      {
        answer: 'Deixar uma separação lateral suficiente para o ultrapassar com segurança.',
        correct: true,
      },
      {
        answer: 'Aumentar a velocidade para ultrapassa-lo rapidamente.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nesta via de duplo sentido, onde deve estacionar se não existem locais destinados para este fim?',
    answers: [
      {
        answer: 'O mais próximo possível do limite direito da faixa de rodagem, paralelamente a esta e no sentido da marcha.',
        correct: false,
      },
      {
        answer: 'Paralelamente ao lado esquerdo no sentido da marcha.',
        correct: true,
      },
      {
        answer: 'Nesta situação é proibido parar ou estacionar.',
        correct: false,
      },
      {
        answer: 'Nos passeios.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando se devem utilizar as luzes de estrada?',
    answers: [
      {
        answer: 'No cruzamento com outros veículos.',
        correct: false,
      },
      {
        answer: 'Na aproximação a uma passagem de nível fechada.',
        correct: false,
      },
      {
        answer: 'Quando a iluminação não permita uma boa visibilidade e não cause encandeamento aos outros utentes.',
        correct: true,
      },
      {
        answer: 'Durante a paragem ou detenção da marcha do veículo.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando os pneus tem uma pressão incorreta:',
    answers: [
      {
        answer: 'Melhora a estabilidade do veículo e o seu conforto.',
        correct: false,
      },
      {
        answer: 'Desgastam-se menos e tem menos risco de rebentar.',
        correct: false,
      },
      {
        answer: 'Consome-se menos combustível.',
        correct: false,
      },
      {
        answer: 'Desgastam-se mais e correm maior risco de rebentar.',
        correct: true,
      },
    ],
  },
  {
    question: 'O condutor que tenha ficado imobilizado num cruzamento regulado por sinalização luminosa, deve:',
    answers: [
      {
        answer: 'Esperar que a sinalização luminosa mude para verde.',
        correct: false,
      },
      {
        answer: 'Sair dele, mesmo que não esteja autorizado a avançar e não embarace o trânsito de outros utentes.',
        correct: true,
      },
      {
        answer: 'Ligar as luzes de perigo e esperar que a sinalização luminosa mude para verde.',
        correct: false,
      },
      {
        answer: 'Utilizar os sinais sonoros até que o deixem avançar.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que significa responsabilidade moral?',
    answers: [
      {
        answer: 'Responder pelos seus próprios actos.',
        correct: true,
      },
      {
        answer: 'Responder perante o Tribunal.',
        correct: false,
      },
      {
        answer: 'Prestar contas perante os membros da sociedade.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando existe dificuldade na recolha de informação, a velocidade:',
    answers: [
      {
        answer: 'Deve manter-se, desde que as luzes do veículo estejam ligadas',
        correct: false,
      },
      {
        answer: 'Deve diminuir.',
        correct: true,
      },
      {
        answer: 'Deve aumentar.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para não causar perigo e por em causa a segurança das pessoas e das coisas, os condutores devem:',
    answers: [
      {
        answer: 'Regular a velocidade atendendo as características do veiculo, as condições da via e ao estado do condutor.',
        correct: true,
      },
      {
        answer: 'ficar em ponto morto nas descidas muito inclinadas.',
        correct: false,
      },
      {
        answer: 'circular nos limites máximos de velocidade das estradas.',
        correct: false,
      },
      {
        answer: 'circular abaixo dos limites mínimos de velocidade.',
        correct: false,
      },
    ],
  },
  {
    question: 'Que luz aparece antes de acender a luz amarela de um semáforo?',
    answers: [
      {
        answer: 'A luz verde.',
        correct: true,
      },
      {
        answer: 'A luz amarela intermitente.',
        correct: false,
      },
      {
        answer: 'A luz vermelha.',
        correct: false,
      },
    ],
  },
  {
    question: 'O condutor que esta sob os efeitos do sono:',
    answers: [
      {
        answer: 'leva mais tempo para reagir e comete mais erros.',
        correct: true,
      },
      {
        answer: 'reage mais rapidamente do que em condições normais.',
        correct: false,
      },
      {
        answer: 'é mais concentrado e menos distraído.',
        correct: false,
      },
      {
        answer: 'leva menos tempo a tomar decisões',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual dos seguintes procedimentos causa maior distração durante a condução?',
    answers: [
      {
        answer: 'Utilizar o telefone móvel.',
        correct: true,
      },
      {
        answer: 'Sinalizar as manobras.',
        correct: false,
      },
      {
        answer: 'Observar os sinais.',
        correct: false,
      },
      {
        answer: 'Ouvir a rádio.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os condutores devem ceder passagem:',
    answers: [
      {
        answer: 'Aos condutores que saiam de um parque de estacionamento.',
        correct: false,
      },
      {
        answer: 'Aos condutores de velocípedes que se apresentem pela direita numa intersecção.',
        correct: false,
      },
      {
        answer: 'Aos peões que tenham iniciado a travessia sobre a passagem para peões.',
        correct: true,
      },
      {
        answer: 'Aos veículos que se apresentem nos ramais de acesso das auto-estradas.',
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
