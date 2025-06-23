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
    question: 'Qual o sistema de alimentação atual do motor que veio substituir o carburador?',
    answers: [
      {
        answer: 'É o sistema de injeção eletrónica de combustível.',
        correct: true,
      },
      {
        answer: 'É o sistema de alimentação por gravidade.',
        correct: false,
      },
      {
        answer: 'É o sistema de alimentação por burrinho.',
        correct: false,
      },
    ],
  },
  {
    question: 'Manga de eixo e barra transversal pertencem:',
    answers: [
      {
        answer: 'À caixa de velocidades.',
        correct: false,
      },
      {
        answer: 'Ao sistema de direção.',
        correct: true,
      },
      {
        answer: 'Ao sistema de transmissão.',
        correct: false,
      },
      {
        answer: 'Ao sistema de suspensão.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num automóvel com tração traseira, como se chama o veio que fica entre o diferencial e a caixa de velocidade?',
    answers: [
      {
        answer: 'Veio de transmissão.',
        correct: true,
      },
      {
        answer: 'Veio de excêntricos.',
        correct: false,
      },
      {
        answer: 'Veio de balanceiros.',
        correct: false,
      },
      {
        answer: 'Veio primário.',
        correct: false,
      },
    ],
  },
  {
    question: 'As avarias mais frequentes na bateria, são:',
    answers: [
      {
        answer: 'Elementos avariados.',
        correct: true,
      },
      {
        answer: 'Escovas e elementos avariados.',
        correct: false,
      },
      {
        answer: 'Fusíveis e elementos avariados.',
        correct: false,
      },
    ],
  },
  {
    question: 'A mola existente nas maxilas dos travões tem a função de:',
    answers: [
      {
        answer: 'Pressionar as maxilas e os respetivos calços contra o tambor.',
        correct: false,
      },
      {
        answer: 'Aumentar a força de travagem.',
        correct: false,
      },
      {
        answer: 'Afastar do tambor as maxilas e os respetivos calços.',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual dos seguintes órgãos pertence ao sistema de suspensão?',
    answers: [
      {
        answer: 'Prato de pressão.',
        correct: false,
      },
      {
        answer: 'Barra de torção.',
        correct: true,
      },
      {
        answer: 'Manga de eixo.',
        correct: false,
      },
      {
        answer: 'Pinhão e cremalheira.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os órgãos que servem para impedir a passagem dos gases da câmara de explosão para o cárter são:',
    answers: [
      {
        answer: 'Os segmentos.',
        correct: true,
      },
      {
        answer: 'Os êmbolos.',
        correct: false,
      },
      {
        answer: 'As válvulas.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num automóvel para extinguir um incêndio provocado por um curto-circuito, o condutor deve:',
    answers: [
      {
        answer: 'Desligar a ignição e utilizar um extintor de incêndio.',
        correct: true,
      },
      {
        answer: 'Desligar a ignição e utilizar água com óleo.',
        correct: false,
      },
      {
        answer: 'Desligar a ignição e utilizar água, unicamente.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando transportar uma carga de pequeno volume, cujo peso seja igual à capacidade de carga máxima do veículo, deve colocá-la:',
    answers: [
      {
        answer: 'No centro da caixa de carga.',
        correct: true,
      },
      {
        answer: 'Sobre o eixo traseiro.',
        correct: false,
      },
      {
        answer: 'Junto à cabine.',
        correct: false,
      },
    ],
  },
  {
    question: 'Sempre que se substitui um fusível este funde. Qual poderá ser a causa?',
    answers: [
      {
        answer: 'Curto-circuito.',
        correct: true,
      },
      {
        answer: 'Um dos fios do circuito elétrico partido.',
        correct: false,
      },
      {
        answer: 'Uma lâmpada fundida.',
        correct: false,
      },
      {
        answer: 'Bateria com excesso de carga.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num automóvel equipado com motor Diesel, se verificar pela saida do tubo de escape gases de cor preta a causa pode ser:',
    answers: [
      {
        answer: 'Junta do cárter a vedar mal.',
        correct: false,
      },
      {
        answer: 'Excesso de ar de admissão.',
        correct: false,
      },
      {
        answer: 'Injetores mal regulados.',
        correct: true,
      },
    ],
  },
  {
    question: 'Nos travões hidráulicos, as pastilhas são acionadas e pressionadas contra o disco:',
    answers: [
      {
        answer: 'Pelo servo-freio.',
        correct: false,
      },
      {
        answer: 'Pelos êmbolos dos cilindros.',
        correct: true,
      },
      {
        answer: 'Pela pressão do ar.',
        correct: false,
      },
    ],
  },
  {
    question: 'O veio primário da caixa de velocidades recebe o movimento do motor através:',
    answers: [
      {
        answer: 'Da embraiagem.',
        correct: true,
      },
      {
        answer: 'Da correia de distribuição.',
        correct: false,
      },
      {
        answer: 'Da cambota.',
        correct: false,
      },
    ],
  },
  {
    question: 'Alinhar a direção significa:',
    answers: [
      {
        answer: 'Afinar a convergência ou a divergência das rodas direcionais.',
        correct: true,
      },
      {
        answer: 'Regular as folgas da direção.',
        correct: false,
      },
      {
        answer: 'Anular todas as folgas da direção.',
        correct: false,
      },
    ],
  },
  {
    question: 'O dispositivo de acoplamento que em conjunto com um motor elétrico permite que o motor de combustão arranque, denomina-se:',
    answers: [
      {
        answer: 'Veio de excêntricos.',
        correct: false,
      },
      {
        answer: 'Bendix.',
        correct: true,
      },
      {
        answer: 'Carreto de distribuição.',
        correct: false,
      },
    ],
  },
  {
    question: 'As barras de torção fazem parte do sistema de:',
    answers: [
      {
        answer: 'Direção',
        correct: false,
      },
      {
        answer: 'Transmissão.',
        correct: false,
      },
      {
        answer: 'Suspensão.',
        correct: true,
      },
    ],
  },
  {
    question: 'Num motor sem termostato a água do sistema de refrigeração:',
    answers: [
      {
        answer: 'Não circula.',
        correct: false,
      },
      {
        answer: 'Aquece rapidamente.',
        correct: false,
      },
      {
        answer: 'Demora mais tempo a aquecer.',
        correct: true,
      },
    ],
  },
  {
    question: 'O sobreaquecimento dos pneus pode ser provocado por:',
    answers: [
      {
        answer: 'Folga na direcção.',
        correct: false,
      },
      {
        answer: 'Pressão muito inferior ao normal.',
        correct: true,
      },
      {
        answer: 'Pressão um pouco superior ao normal.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como deve ser transportada uma carga pouco volumosa e cujo peso seja igual à capacidade de carga máxima do veículo?',
    answers: [
      {
        answer: 'No centro da caixa de carga.',
        correct: true,
      },
      {
        answer: 'Centrado sobre o eixo da retaguarda.',
        correct: false,
      },
      {
        answer: 'O mais próximo possível da cabina.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual o instrumento que permite ao condutor verificar se o alternador está a carregar a bateria?',
    answers: [
      {
        answer: 'O densímetro.',
        correct: false,
      },
      {
        answer: 'O voltímetro.',
        correct: true,
      },
      {
        answer: 'O amperímetro.',
        correct: false,
      },
      {
        answer: 'O manómetro.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nos motores diesel, se entrar ar para os orgãos de alimentação de combustível, o motor:',
    answers: [
      {
        answer: 'Pára por falta de injeção de combustível.',
        correct: true,
      },
      {
        answer: 'Fica a trabalhar acelerado.',
        correct: false,
      },
      {
        answer: 'Trabalha só ao ralenti',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual a característica mais importante duma direção assistida?',
    answers: [
      {
        answer: 'A direção pode ser manejada com pouco esforço do condutor.',
        correct: true,
      },
      {
        answer: 'Nunca é necessário proceder à sua lubrificação.',
        correct: false,
      },
      {
        answer: 'A direção só pode ser manejada com muito esforço do condutor.',
        correct: false,
      },
    ],
  },
  {
    question: 'O motor de arranque recebe corrente:',
    answers: [
      {
        answer: 'Da bateria.',
        correct: true,
      },
      {
        answer: 'Do distribuidor.',
        correct: false,
      },
      {
        answer: 'Da bobine.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nos motores a gasolina, a bobine tem como função transformar a corrente:',
    answers: [
      {
        answer: 'De baixa em alta tensão.',
        correct: true,
      },
      {
        answer: 'Contínua em alterna.',
        correct: false,
      },
      {
        answer: 'De alta em baixa tensão.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como se verifica se os depósitos dos travões a ar, têm pressão suficiente?',
    answers: [
      {
        answer: 'Através do vacuómetro.',
        correct: false,
      },
      {
        answer: 'Através do termómetro.',
        correct: false,
      },
      {
        answer: 'Através do respetivo manómetro.',
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
