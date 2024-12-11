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
    question: 'Qual dos seguintes órgãos não pertence ao sistema de suspensão?',
    answers: [
      {
        answer: 'Molas.',
        correct: false,
      },
      {
        answer: 'Amortecedores.',
        correct: false,
      },
      {
        answer: 'Prato de pressão.',
        correct: true,
      },
      {
        answer: 'Barra de torção.',
        correct: false,
      },
    ],
  },
  {
    question: 'Um aquecimento exagerado no motor pode ser provocado por:',
    answers: [
      {
        answer: 'Correia da ventoinha partida.',
        correct: true,
      },
      {
        answer: 'Correia da ventoinha muito esticada.',
        correct: false,
      },
      {
        answer: 'Excesso de água no radiador.',
        correct: false,
      },
      {
        answer: 'Termostato sempre aberto.',
        correct: false,
      },
    ],
  },
  {
    question: 'Um pneu com excesso de pressão apresenta maior desgaste:',
    answers: [
      {
        answer: 'No centro.',
        correct: true,
      },
      {
        answer: 'No lado esquerdo',
        correct: false,
      },
      {
        answer: 'Nos bordos laterais.',
        correct: false,
      },
      {
        answer: 'No lado direito.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como deve ser distribuída a mercadoria na caixa de carga do veículo?',
    answers: [
      {
        answer: 'Por forma a não afetar a visibilidade do condutor nem o equilíbrio do veículo.',
        correct: true,
      },
      {
        answer: 'Deve ser colocada o mais possível à frente da caixa de carga.',
        correct: false,
      },
      {
        answer: 'As mais leves devem ser colocadas por baixo.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que acontece quando a embraiagem está a patinar?',
    answers: [
      {
        answer: 'As mudanças não entram.',
        correct: false,
      },
      {
        answer: 'O diferencial recebe com deficiência o movimento do veio de transmissão.',
        correct: false,
      },
      {
        answer: 'O veio primário recebe com deficiência o movimento do volante do motor.',
        correct: true,
      },
    ],
  },
  {
    question: 'Quais os cuidados que se deve ter com a lubrificação do motor?',
    answers: [
      {
        answer: 'Mudar o óleo a cada 20.000 km.',
        correct: false,
      },
      {
        answer: 'Mudar o óleo periodicamente de acordo com as indicações do fabricante.',
        correct: true,
      },
      {
        answer: 'Substituir o filtro de óleo mensalmente.',
        correct: false,
      },
      {
        answer: 'Verificar durante a marcha se o termómetro acusa sempre a devida pressão.',
        correct: false,
      },
    ],
  },
  {
    question: 'Em qual dos seguintes casos se torna mais fácil movimentar o volante da direção:',
    answers: [
      {
        answer: 'Se existir uma bomba hidráulica na direção.',
        correct: true,
      },
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
        correct: false,
      },
    ],
  },
  {
    question: 'Fazem parte da embraiagem:',
    answers: [
      {
        answer: 'Rolamento de encosto ou carvão, disco de ferodo e prato de pressão.',
        correct: true,
      },
      {
        answer: 'Pneus, molas, amortecedores, estabilizadores.',
        correct: false,
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
    question: 'O nível do eletrólito da bateria deverá permanecer sempre:',
    answers: [
      {
        answer: 'Acima das placas.',
        correct: true,
      },
      {
        answer: 'A meio das placas.',
        correct: false,
      },
      {
        answer: 'Abaixo das placas.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num sistema de travagem do tipo pneumático, os travões de serviço falham de uma forma súbita. Qual poderá ser a causa?',
    answers: [
      {
        answer: 'Fuga de ar no circuito pneumático.',
        correct: true,
      },
      {
        answer: 'Fuga de ar no amortecedor oleopneumático.',
        correct: false,
      },
      {
        answer: 'Desgaste das pastilhas de travão.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual dos seguintes órgãos pertence ao sistema de suspensão?',
    answers: [
      {
        answer: 'Manga de eixo',
        correct: false,
      },
      {
        answer: 'Pinhão e cremalheira.',
        correct: false,
      },
      {
        answer: 'Barra de torção.',
        correct: true,
      },
    ],
  },
  {
    question: 'O termóstato serve para:',
    answers: [
      {
        answer: 'Interromper a circulação da água pelo radiador enquanto o motor está quente.',
        correct: false,
      },
      {
        answer: 'Interromper a circulação da água pelo radiador enquanto o motor está frio.',
        correct: true,
      },
      {
        answer: 'Refrigerar a água quando o motor atingir a temperatura de 80º à 90º.',
        correct: false,
      },
      {
        answer: 'Permitir a circulação da água pelo radiador enquanto o motor está frio.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual dos seguintes motivos pode dar origem a uma derrapagem?',
    answers: [
      {
        answer: 'Velocidade não adequada às condições da via.',
        correct: true,
      },
      {
        answer: 'Conduzir de noite em locais sem iluminação.',
        correct: false,
      },
      {
        answer: 'Não reduzir a velocidade no cruzamento com outros veículos.',
        correct: false,
      },
      {
        answer: 'Ultrapassar numa via estreita com dois sentidos.',
        correct: false,
      },
    ],
  },
  {
    question: 'A condução de um veículo autotanque pode ser difícil e perigosa quando a respetiva cisterna:',
    answers: [
      {
        answer: 'Não está completamente cheia.',
        correct: true,
      },
      {
        answer: 'Está completamente vazia.',
        correct: false,
      },
      {
        answer: 'Está completamente cheia',
        correct: false,
      },
    ],
  },
  {
    question: 'De noite estando o motor a trabalhar e falharem as luzes qual poderá ser a causa?',
    answers: [
      {
        answer: 'Motor de arranque avariado.',
        correct: false,
      },
      {
        answer: 'Fusíveis queimados ou fundidos.',
        correct: true,
      },
      {
        answer: 'Correia da ventoinha pouco apertado.',
        correct: false,
      },
      {
        answer: 'Bateria com pouca carga.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nos motores de explosão, a mistura gasosa que entra nos cilindros durante o tempo de admissão é composta de:',
    answers: [
      {
        answer: 'Gasóleo e oxigénio.',
        correct: false,
      },
      {
        answer: 'Gasóleo e ar.',
        correct: false,
      },
      {
        answer: 'Gasolina e dióxido de carbono',
        correct: false,
      },
      {
        answer: 'Gasolina e ar.',
        correct: true,
      },
    ],
  },
  {
    question: 'A falha súbita de travões num sistema de travagem tipo hidráulico, pode dever-se a:',
    answers: [
      {
        answer: 'Molas das maxilas pasmadas.',
        correct: false,
      },
      {
        answer: 'Calços de travões gastos.',
        correct: false,
      },
      {
        answer: 'Fuga na tubagem do sistema hidráulico.',
        correct: true,
      },
      {
        answer: 'Pouca pressão de ar.',
        correct: false,
      },
    ],
  },
  {
    question: 'O orgão que gera corrente elétrica de baixa tensão e serve para fornecer corrente aos componentes do sistema elétrico de um automóvel é:',
    answers: [
      {
        answer: 'O motor de arranque.',
        correct: false,
      },
      {
        answer: 'O alternador.',
        correct: true,
      },
      {
        answer: 'A bobine',
        correct: false,
      },
    ],
  },
  {
    question: 'Para se obter um correto funcionamento da direção assistida é necessário que:',
    answers: [
      {
        answer: 'O motor esteja em funcionamento.',
        correct: true,
      },
      {
        answer: 'O sistema de suspenção pneumática esteja à pressão adequada.',
        correct: false,
      },
      {
        answer: 'O veículo esteja em movimento.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quando se verifica excessiva dificuldade em engrenar uma mudança, a causa pode ser:',
    answers: [
      {
        answer: 'Caixa de velocidades com excesso de valvulina.',
        correct: false,
      },
      {
        answer: 'Sincronizador avariado.',
        correct: true,
      },
      {
        answer: 'Disco de embraiagrem com pouco tempo de uso.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se os amortecedores hidráulicos de um automóvel estiverem descarregados, o condutor nota:',
    answers: [
      {
        answer: 'Oscililação demasiada das molas.',
        correct: true,
      },
      {
        answer: 'Aumento do consumo de combustível.',
        correct: false,
      },
      {
        answer: 'Aumento de desagaste dos pneus.',
        correct: false,
      },
    ],
  },
  {
    question: 'Em caso de avaria da bomba de água:',
    answers: [
      {
        answer: 'O termómetro acusa valores elevados de temperatura.',
        correct: true,
      },
      {
        answer: 'O motor não trabalha.',
        correct: false,
      },
      {
        answer: 'O termóstato não abre.',
        correct: false,
      },
      {
        answer: 'O manómetro acusa valores elevados de pressão da água.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se os pneus da roda da frente apresentarem desgaste excessivo num dos bordos laterias, qual poderá ser a causa?',
    answers: [
      {
        answer: 'Direção desalinhada.',
        correct: true,
      },
      {
        answer: 'Circulam com presão excessivamente baixa.',
        correct: false,
      },
      {
        answer: 'Circulam com presão excessivamente baixa.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como se deve distribuir a mercadoria na caixa de carga do veículo:',
    answers: [
      {
        answer: 'Não deve exceder em mais de 10 cm a largura do veículo.',
        correct: false,
      },
      {
        answer: 'Por forma a não afetar a visibilidade do condutor nem o equilíbrio do veículo.',
        correct: true,
      },
      {
        answer: 'Deve ser colocada o mais possível à frente da caixa de carga.',
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
        answer: 'Escovas e elementos avariados',
        correct: false,
      },
      {
        answer: 'Fusíveis e elementos avariados.',
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
