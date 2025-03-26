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
    question: 'Um condutor que esteja muito fatigado pode:',
    answers: [
      {
        answer: 'Adormecer nos momentos de maior monotonia do trânsito.',
        correct: true,
      },
      {
        answer: 'Combater a fadiga falando ao telemóvel com amigos e familiares para se manter acordado.',
        correct: false,
      },
      {
        answer: 'Beber bebidas estimulantes ou café para combater a fadiga.',
        correct: false,
      },
    ],
  },
  {
    question: 'A força centrípeta e centrífuga:',
    answers: [
      {
        answer: 'São forças que só ocorrem quando o veículo vai em linha recta.',
        correct: false,
      },
      {
        answer: 'São forças que actuam em sentido contrário uma em relação à outra.',
        correct: true,
      },
      {
        answer: 'São forças que actuam no mesmo sentido e se acumulam uma à outra.',
        correct: false,
      },
      {
        answer: 'Só depende do raio da trajectória não tendo a velocidade nenhuma influência.',
        correct: false,
      },
    ],
  },
  {
    question: 'A definição de cruzamento é:',
    answers: [
      {
        answer: 'Zona de intersecção de vias públicas ao mesmo nível.',
        correct: true,
      },
      {
        answer: 'Zona de intersecção de vias privadas ao mesmo nível.',
        correct: false,
      },
      {
        answer: 'Zona de intersecção de vias privadas ao nível superior.',
        correct: false,
      },
      {
        answer: 'Zona de intersecção de vias privadas ao nível inferior.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao perceber que existe um acidente ou vitima de doença súbita, devo:',
    answers: [
      {
        answer: 'Vestir o colete retrorrefletor e colocar o triângulo de sinalização, no mínimo a 30 metros do acidente e de forma a ser visível a pelo menos 100 metros.',
        correct: true,
      },
      {
        answer: 'Colocar o triângulo de sinalização, no mínimo a 30 metros do local do acidente e de forma a ser visível a pelo menos 150 metros.',
        correct: false,
      },
      {
        answer: 'Colocar o triângulo de sinalização, no mínimo a 25 metros do local do acidente e de forma a ser visível a pelo menos 100 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando um veículo acelera a direito (longitudinalmente):',
    answers: [
      {
        answer: 'O peso não é transferido nem para a frente nem para trás devido á suspensão do veiculo',
        correct: false,
      },
      {
        answer: 'O peso é em parte transferido para o eixo traseiro, devido à força centrífuga.',
        correct: false,
      },
      {
        answer: 'O peso é em parte transferido para o eixo traseiro, devido à inércia.',
        correct: true,
      },
      {
        answer: 'O peso é em parte transferido para o eixo dianteiro, devido à inércia.',
        correct: false,
      },
    ],
  },
  {
    question: 'A medida que aumenta a velocidade:',
    answers: [
      {
        answer: 'Melhora a capacidade de controlar o veiculo nas situações de emergência.',
        correct: false,
      },
      {
        answer: 'Reduz-se o campo de visão do condutor e aumenta a fadiga.',
        correct: true,
      },
      {
        answer: 'Aumenta o campo de visão do condutor.',
        correct: false,
      },
      {
        answer: 'A fadiga demora mais a aparecer.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual das seguintes é uma afirmação falsa:',
    answers: [
      {
        answer: 'O acidente resulta sempre da falha de vários elementos do sistema rodoviário.',
        correct: true,
      },
      {
        answer: 'O sistema de circulação rodoviária é um conjunto de elementos interligados e dependentes.',
        correct: false,
      },
      {
        answer: 'O homem é o elemento mais importante do sistema rodoviário.',
        correct: false,
      },
      {
        answer: 'A probabilidade de acidente aumenta quando há uma alteração na interacção entre os vários elemento do sistema rodoviário.',
        correct: false,
      },
    ],
  },
  {
    question: 'O controlo dinâmico do veículo é uma das tarefas da condução e é:',
    answers: [
      {
        answer: 'Efectuado através da definição da sua velocidade e da sua trajectória.',
        correct: true,
      },
      {
        answer: 'Efectuado através da aceleração e travagem do veículo.',
        correct: false,
      },
      {
        answer: 'Efectuado através do sistema de direcção.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os condutores não devem:',
    answers: [
      {
        answer: 'Circular com o braço fora do veículo.',
        correct: true,
      },
      {
        answer: 'Olhar para os espelhos.',
        correct: false,
      },
      {
        answer: 'Fazer ultrapassagens ou fumar.',
        correct: false,
      },
      {
        answer: 'Escutar música',
        correct: false,
      },
    ],
  },
  {
    question: 'Num veículo equipado com motor Diesel em aceleração, a libertação de muito fumo negro pelo tubo de escape, significa:',
    answers: [
      {
        answer: 'Necessidade de regulação da bomba injectora.',
        correct: true,
      },
      {
        answer: 'Que o veículo acelera bem.',
        correct: false,
      },
      {
        answer: 'Óptima qualidade do combustível.',
        correct: false,
      },
      {
        answer: 'Que o veículo está a queimar multo óleo.',
        correct: false,
      },
    ],
  },
  {
    question: 'Pode ter consequências num acidente o facto de não levar o cinto de segurança bem colocado?',
    answers: [
      {
        answer: 'Não, o cinto é sempre eficaz.',
        correct: false,
      },
      {
        answer: 'Sim, por isso o seu uso não é obrigatório.',
        correct: false,
      },
      {
        answer: 'Não, se o veiculo estiver equipado com airbag.',
        correct: false,
      },
      {
        answer: 'Sim, porque pode provocar ferimentos graves.',
        correct: true,
      },
    ],
  },
  {
    question: 'Para a execução de manobras, qual dos seguintes lhe parece mais importante?',
    answers: [
      {
        answer: 'Coragem dedicação e determinação.',
        correct: false,
      },
      {
        answer: 'Treino, experiencia e uma atitude adequada.',
        correct: true,
      },
      {
        answer: 'Dedicação, atenção e uma atitude adequada.',
        correct: false,
      },
      {
        answer: 'Empenho, atitude adequada e atenção.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que é a ergonomia de um veiculo?',
    answers: [
      {
        answer: 'É a capacidade de adaptação do equipamento às particularidades de cada ser humano.',
        correct: true,
      },
      {
        answer: 'E a capacidade de um veículo economizar no combustível.',
        correct: false,
      },
      {
        answer: 'É a capacidade de um condutor economizar no combustível.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ė livre o trânsito rodoviário nas vias de domínio público do Estado e nas vias de domínio privado quando abertas ao trânsito público?',
    answers: [
      {
        answer: 'Sim, mas as pessoas devem abster-se de actos que impeçam ou embaracem o trânsito ou comprometam a segurança ou a comodidade dos utentes das vias.',
        correct: true,
      },
      {
        answer: 'Sim, mas as pessoas podem praticar actos que impeçam ou embaracem o trânsito e comprometam a segurança ou a comodidade dos utentes das vias.',
        correct: false,
      },
      {
        answer: 'Não, mas as pessoas podem praticar actos que impeçam ou embaracem o trânsito e comprometam a segurança ou a comodidade dos utentes das vias.',
        correct: false,
      },
      {
        answer: 'Sim, desde que não comprometam a segurança.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que deve ser ajustado antes de iniciar a marcha?',
    answers: [
      {
        answer: 'O encosto de cabeça e o cinto de segurança.',
        correct: false,
      },
      {
        answer: 'A distância do assento aos pedais, a inclinação das costas do banco e o encosto de cabeça',
        correct: true,
      },
      {
        answer: 'De forma folgada o cinto de segurança.',
        correct: false,
      },
      {
        answer: 'O encosto de cabeça e o cinto de segurança.',
        correct: false,
      }
    ],
  },
  {
    question: 'Depois de ter tomado bebidas alcoólicas:',
    answers: [
      {
        answer: 'O álcool entra directamente no sistema urinário.',
        correct: false,
      },
      {
        answer: 'O álcool demora duas horas a entrar no sistema circulatório.',
        correct: false,
      },
      {
        answer: 'O álcool entra rapidamente no sistema circulatório.',
        correct: true,
      },
    ],
  },
  {
    question: 'Dentro das localidades, durante a noite:',
    answers: [
      {
        answer: 'É escolha do condutor a substituição dos sinais sonoros pelos sinais gestuais.',
        correct: false,
      },
      {
        answer: 'É obrigatória a substituição dos sinais sonoros pelos sinais gestuais.',
        correct: false,
      },
      {
        answer: 'É obrigatória a substituição dos sinais sonoros pelos sinais luminosos.',
        correct: true,
      },
      {
        answer: 'Não é obrigatória a substituição dos sinais sonoros pelos sinais luminosos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se perceber o principio de um incêndio:',
    answers: [
      {
        answer: 'Actue de imediato, desligando o ar condicionado do veiculo e utilizando um extintor.',
        correct: false,
      },
      {
        answer: 'Actue de imediato, desligando o motor do veículo e utilizando um extintor.',
        correct: true,
      },
      {
        answer: 'Actue de imediato, desligando as luzes do veículo e utilizando um extintor.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num automóvel ligeiro estacionado do lado esquerdo da faixa de rodagem, a carga e descarga deve ser feita:',
    answers: [
      {
        answer: 'Pela retaguarda ou pelo lado esquerdo.',
        correct: true,
      },
      {
        answer: 'Pela retaguarda ou pelo lado direito.',
        correct: false,
      },
      {
        answer: 'Pelo lado direito ou pelo lado esquerdo',
        correct: false,
      },
      {
        answer: 'Pelo lado que for mais rápido para o condutor.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quem exceder em mais de 60 Km/h de velocidade (automóveis ligeiros e motociclos) os limites, dentro das localidades é punido:',
    answers: [
      {
        answer: 'Com multa de 8.000,00 Mt e contravenção média.',
        correct: false,
      },
      {
        answer: 'Com multa de 8.000,00 Mt e contravenção grave.',
        correct: true,
      },
      {
        answer: 'Com multa de 6.000,00 Mt e contravenção grave.',
        correct: false,
      },
      {
        answer: 'Com multa de 6.000,00 Mt e contravenção média.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para que aconteçam graves acidente de trânsito, a fadiga é um dos factores que mais contribuem sobretudo:',
    answers: [
      {
        answer: 'Durante a noite.',
        correct: true,
      },
      {
        answer: 'Durante a tarde.',
        correct: false,
      },
      {
        answer: 'Durante a manhã.',
        correct: false,
      },
      {
        answer: 'Entre as 15 e as 17 horas.',
        correct: false,
      },
    ],
  },
  {
    question: 'A tarefa de condução, pode ser muito afectada pela fadiga porque:',
    answers: [
      {
        answer: 'Contribui para a diminuição das capacidades perceptivas, cognitivas e também motoras.',
        correct: true,
      },
      {
        answer: 'Contribui para o aumento das capacidades perceptivas, intelectuais e também motoras.',
        correct: false,
      },
      {
        answer: 'Um condutor fatigado vê diminuído o seu tempo de reacção.',
        correct: false,
      },
      {
        answer: 'Contribui para despertar as capacidades cognitivas e também motoras.',
        correct: false,
      }
    ],
  },
  {
    question: 'A definição de passeio é:',
    answers: [
      {
        answer: 'Parte que ladeia a faixa de rodagem, destinada exclusivamente ao trânsito de peões.',
        correct: true,
      },
      {
        answer: 'Parte que ladeia a faixa de rodagem, destinada ao estacionamento de veículos.',
        correct: false,
      },
      {
        answer: 'Parte da faixa de rodagem, destinada exclusivamente ao trânsito de peões.',
        correct: false,
      },
      {
        answer: 'Parte que ladeia a faixa de rodagem, destinada exclusivamente ao trânsito de veículos.',
        correct: false,
      }
    ],
  },
  {
    question: 'Os condutores devem, para permitir a circulação de um veiculo prioritário ou da policia, assinalando devidamente a marcha, que transite numa via congestionada:',
    answers: [
      {
        answer: 'Deixar livre uma passagem do lado direito da parte da faixa de rodagem afecta ao seu sentido de circulação, chegando-se o mais possível para a esquerda e podendo, se necessário, utilizar as bermas, excepto se for numa autoestrada.',
        correct: true,
      },
      {
        answer: 'Deixar livre uma passagem do lado esquerdo da parte da faixa de rodagem afecta ao seu sentido de circulação, chegando-se o mais possível para a direita e podendo, se necessário, utilizaras bermas, excepto se for numa autoestrada.',
        correct: false,
      },
      {
        answer: 'Deixar livre uma passagem do lado esquerdo da parte da faixa de rodagem afecta ao seu sentido de circulação, chiando-se o mais possível para a direita e podendo, se necessário, utilizar as bermas, sobretudo se for numa autoestrada.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quem deve ceder a passagem?',
    answers: [
      {
        answer: 'Os condutores que entrem em qualquer parque de estacionamento, de uma zona de abastecimento de combustível ou de qualquer prédio ou caminho particular.',
        correct: false,
      },
      {
        answer: 'Todos os condutores que se apresentem pela esquerda.',
        correct: false,
      },
      {
        answer: 'Os condutores que saiam de qualquer parque de estacionamento, de uma zona de abastecimento de combustível ou de qualquer prédio ou caminho particular.',
        correct: true,
      },
      {
        answer: 'Os condutores que se apresentem pela direita.',
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
