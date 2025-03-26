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
    question: 'Pode transportar bebidas alcoólicas na parte do veículo reservada aos passageiros?',
    answers: [
      {
        answer: 'Não, já que é proibido o porte e transporte de bebidas alcoólicas nesta parte do veiculo.',
        correct: true,
      },
      {
        answer: 'Sim, sempre que o condutor não tome nada de álcool.',
        correct: false,
      },
      {
        answer: 'Sim, se o condutor não estiver sob influencia de álcool.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que entende-se por primeiros socorros?',
    answers: [
      {
        answer: 'É o transporte adequado do sinistrado ou doente ao posto médico.',
        correct: false,
      },
      {
        answer: 'São os cuidados prestados a uma pessoa que se fere ou adoece de repente, para mante-la viva e impedir o agravamento da situação.',
        correct: true,
      },
      {
        answer: 'São os meios humanos e materiais utilizados para a remoção dos acidentados.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para manter a segurança do veículo, devem ser revistos periodicamente:',
    answers: [
      {
        answer: 'Os pneus, amortecedores e travões.',
        correct: true,
      },
      {
        answer: 'As luzes, espelhos e o sistema de escape.',
        correct: false,
      },
      {
        answer: 'O sistema de som.", "A bateria, o filtro de óleo e o do ar.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando os peões transitem na faixa de rodagem, devem fazê-lo:',
    answers: [
      {
        answer: 'numa única fila, sempre que as condições de visibilidade ou a intensidade do trânsito o aconselhem.',
        correct: true,
      },
      {
        answer: 'a par, quando transitem desde o anoitecer ao amanhecer.',
        correct: false,
      },
      {
        answer: 'a par, quando transitem em condições de visibilidade insuficiente.',
        correct: false,
      },
      {
        answer: 'pela esquerda da faixa de rodagem, em relação ao seu sentido de marcha.',
        correct: false,
      },
    ],
  },
  {
    question: 'A condução urbana, caracteriza-se essencialmente:',
    answers: [
      {
        answer: 'Pela pouca presença de peões.',
        correct: false,
      },
      {
        answer: 'Pela abundancia de sinais luminosos.',
        correct: false,
      },
      {
        answer: 'Por uma grande intensidade de trânsito.',
        correct: true,
      },
      {
        answer: 'Pela ausência de regras de trânsito.',
        correct: true,
      },
    ],
  },
  {
    question: 'Durante o exame para obter a carta de condução, a responsabilidade pelas contravenções praticadas, é do:',
    answers: [
      {
        answer: 'Instrutor.',
        correct: false,
      },
      {
        answer: 'Examinando.',
        correct: true,
      },
      {
        answer: 'Examinador.',
        correct: false,
      },
      {
        answer: 'Todos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num cruzamento de veículos  ao mudar de direcção para a direita, a quem deve ceder a passagem?',
    answers: [
      {
        answer: 'Aos que circulam em sentido contrário e pretendam seguir em frente ou mudar de direcção para à esquerda.',
        correct: true,
      },
      {
        answer: 'Só aos condutores que circulam em sentido contrario e sigam em frente.',
        correct: false,
      },
      {
        answer: 'Apenas aos condutores que se apresentem pela direita.',
        correct: false,
      },
      {
        answer: 'A todos os condutores que circulem pela via transversal.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando o condutor tem uma distração no volante:',
    answers: [
      {
        answer: 'Demora mais tempo a reagir", "demora menos tempo em obter as informações necessárias para conduzir com segurança.',
        correct: true,
      },
      {
        answer: 'deve avisar com as luzes de perigo.',
        correct: false,
      },
      {
        answer: 'aumenta inconscientemente a velocidade do veículos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nas curvas, com a barra central contínua, pode inverter o sentido de marcha?',
    answers: [
      {
        answer: 'Não',
        correct: true,
      },
      {
        answer: 'Sim, já que não existe sinalização que o proíba.',
        correct: false,
      },
      {
        answer: 'Sim',
        correct: false,
      },
      {
        answer: 'Não, já que é proibido fazê-lo fora das localidades.',
        correct: false,
      },
    ],
  },
  {
    question: 'Não sendo o homem um ser isolado, mas sim que vive em contacto com pessoas iguais a si, os deveres para com os seus semelhantes podem ser:',
    answers: [
      {
        answer: 'De justiça e de caridade.',
        correct: true,
      },
      {
        answer: 'De dignidade e de integridade física.',
        correct: false,
      },
      {
        answer: 'De respeito e de liberdade.',
        correct: false,
      },
    ],
  },
  {
    question: 'O condutor, pode utilizar aparelhos radiotelefónicos durante a marcha do veículo?',
    answers: [
      {
        answer: 'Sim, mas apenas para mensagens de texto..',
        correct: false,
      },
      {
        answer: 'Sim, já que não prejudica o exercido da condução com segurança.',
        correct: false,
      },
      {
        answer: 'Apenas se for dotado de um auricular ou de microfone com sistema de alta voz, cuja utilização não implique um manuseamento continuado.',
        correct: true,
      },
      {
        answer: 'Não, e sempre proibido ao condutor utilizar aparelhos radiotelefónicos.',
        correct: true,
      },
    ],
  },
  {
    question: 'Os automóveis ligeiros de passageiros e mistos sem reboque, fora das localidades, não devem exceder a velocidade instantânea de:',
    answers: [
      {
        answer: '140 km/h',
        correct: false,
      },
      {
        answer: '120 km/h',
        correct: true,
      },
      {
        answer: '80 km/h',
        correct: false,
      },
      {
        answer: '40 km/h',
        correct: false,
      },
    ],
  },
  {
    question: 'A ingestão de bebidas alcoólicas, mesmo que em pequenas quantidades, pode ter como consequência:',
    answers: [
      {
        answer: 'Aumento do tempo de reacção e da distância de paragem.',
        correct: true,
      },
      {
        answer: 'Diminuição do tempo de reacção e da distância de paragem.',
        correct: false,
      },
      {
        answer: 'Maior concentração na tarefa da condução.',
        correct: false,
      },
      {
        answer: 'Aumento do tempo de reacção, mas não da distância de paragem.',
        correct: false,
      },
    ],
  },
  {
    question: 'Na situação apresentada, pode ultrapassar o veículo pela esquerda?',
    answers: [
      {
        answer: 'Não',
        correct: true,
      },
      {
        answer: 'Sim, se esse veículo circula por baixo do limite máximo de velocidade.',
        correct: false,
      },
      {
        answer: 'Sim, porque a linha e descontínua.',
        correct: false,
      },
      {
        answer: 'Sim, pode-se sempre ultrapassar pela esquerda.',
        correct: false,
      },
    ],
  },
  {
    question: 'Na marca rodovia branca (passagem para peões):',
    answers: [
      {
        answer: 'Parar por cima',
        correct: false,
      },
      {
        answer: 'Deve controlar e ceder a passagem para os peões que tenham iniciado a sua marcha',
        correct: true,
      },
      {
        answer: 'Passar',
        correct: false,
      },
    ],
  },
  {
    question: 'Que efeitos tem a fadiga na condução?',
    answers: [
      {
        answer: 'Diminui a sensibilidade ao encandeamento.',
        correct: false,
      },
      {
        answer: 'Reduz o tempo de reação do condutor.',
        correct: false,
      },
      {
        answer: 'Reduz a capacidade de concentração e a segurança.',
        correct: true,
      },
      {
        answer: 'Melhora a atenção do condutor.',
        correct: false,
      },
    ],
  },
  {
    question: 'O uso do cinto de segurança nos assentos traseiros:',
    answers: [
      {
        answer: 'não é obrigatório, mas é aconselhável.',
        correct: false,
      },
      {
        answer: 'são da exclusiva responsabilidade dos ocupantes, já que num acidente seriam os únicos afetados.',
        correct: false,
      },
      {
        answer: 'podem salvar a vida aos seus ocupantes e impedem que eles causem lesões graves aos outros passageiros.',
        correct: true,
      },
      {
        answer: 'só são obrigatórios fora das localidades.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como medida de prevenção, quando o piso da via esta molhado, deve:',
    answers: [
      {
        answer: 'Reduzir a distância de segurança.',
        correct: false,
      },
      {
        answer: 'Reduzir a velocidade.',
        correct: true,
      },
      {
        answer: 'Aumentar um pouco a velocidade para que a distância de paragem diminua.',
        correct: false,
      },
      {
        answer: 'Parar.',
        correct: true,
      },
    ],
  },
  {
    question: 'O uso do cinto de segurança, é necessário e obrigatório porque:',
    answers: [
      {
        answer: 'Reduz quase para metade a probabilidade de que um acidente seja mortal.',
        correct: true,
      },
      {
        answer: 'Melhora o conforto dos ocupantes do veículo.',
        correct: false,
      },
      {
        answer: 'Nem todos os veículos tem airbag.',
        correct: false,
      },
      {
        answer: 'Evita que a energia do impacto num acidente cause lesões aos ocupantes do veículo.',
        correct: false,
      },
    ],
  },
  {
    question: 'Posso mudar de direcção para a direita com barra central contínua?',
    answers: [
      {
        answer: 'Sim, porque não há nenhuma sinalização que o impeça.',
        correct: false,
      },
      {
        answer: 'Não, porque não é possível assegurar-se que a manobra pode ser realizada sem perigo.',
        correct: true,
      },
      {
        answer: 'Sim, desde que o assinale com a devida antecedência.',
        correct: false,
      },
    ],
  },
  {
    question: 'De que modo deve verificar o nível de óleo do motor?',
    answers: [
      {
        answer: 'Com o motor parado e frio.',
        correct: true,
      },
      {
        answer: 'Com o motor quente.',
        correct: false,
      },
      {
        answer: 'Com o motor ligado.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a velocidade instantânea que não devem exceder os condutores de ciclomotores e quadriciclos dentro das localidades?',
    answers: [
      {
        answer: '40 km/h',
        correct: true,
      },
      {
        answer: '60 km/h',
        correct: false,
      },
      {
        answer: '30 km/h',
        correct: false,
      },
      {
        answer: '80 km/h',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao mudar de direção num cruzamento, como o deve sinalizar para os outros utentes da via?',
    answers: [
      {
        answer: 'Com antecedência, utilizando a luz indicadora de direcção e, na falta desta, o braço.',
        correct: true,
      },
      {
        answer: 'Não é necessário sinalizar se há pouco trânsito.',
        correct: false,
      },
      {
        answer: 'Não é necessário sinalizar se tem prioridade de passagem.',
        correct: false,
      },
      {
        answer: 'Depois de iniciar a mudança de direção.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que deve fazer o condutor para prevenir os acidentes?',
    answers: [
      {
        answer: 'Praticar uma condução defensiva.',
        correct: true,
      },
      {
        answer: 'Conduzir alcoolizado.',
        correct: false,
      },
      {
        answer: 'Ignorar os sinais de trânsito.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se o condutor que me precede assinala a manobra de mudança de direcção para a direita, posso ultrapassar?',
    answers: [
      {
        answer: 'Sim, pela direita.',
        correct: false,
      },
      {
        answer: 'Sim, pela direita ou pela esquerda, sempre que o veiculo não esteja em movimento.',
        correct: false,
      },
      {
        answer: 'Sim, pela esquerda, certificando-se que o pode fazer sem perigo de acidente.',
        correct: true,
      },
      {
        answer: 'Não.',
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
