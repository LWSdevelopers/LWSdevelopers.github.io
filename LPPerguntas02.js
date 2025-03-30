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
    question: 'O trânsito de veículos ou de animais é feito:',
    answers: [
      {
        answer: 'do lado direito das faixas de rodagem e o mais próximo possível das bermas ou passeios.',
        correct: false,
      },
      {
        answer: 'pela esquerda das faixas de rodagem e o mais próximo possível das bermas ou passeios, mas a uma distância destes que permita evitar qualquer acidente.',
        correct: true,
      },
      {
        answer: 'Próximo do eixo da via',
        correct: false,
      },
    ],
  },
  {
    question: 'As luzes de travagem dos automóveis tem a cor:',
    answers: [
      {
        answer: 'Amarelada ou alaranjada.',
        correct: false,
      },
      {
        answer: 'Branca ou amarela.',
        correct: false,
      },
      {
        answer: 'Vermelha',
        correct: true,
      },
    ],
  },
  {
    question: 'Entende-se por visibilidade reduzida ou insuficiente, quando o condutor não possa avistar a faixa de rodagem em toda a sua largura numa extensão de:',
    answers: [
      {
        answer: 'Pelo menos, 50 metros.',
        correct: true,
      },
      {
        answer: 'Pelo menos, 100 metros.',
        correct: false,
      },
      {
        answer: 'Pelo menos, 200 metros.',
        correct: false,
      },
      {
        answer: 'Pelo menos, 25 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'Que comunica o condutor aos outros utentes da via?',
    answers: [
      {
        answer: 'Que não pode fazer a ultrapassagem.',
        correct: true,
      },
      {
        answer: 'Que pare.',
        correct: false,
      },
      {
        answer: 'Que afrouxe.',
        correct: false,
      },
    ],
  },
  {
    question: 'Uma das consequências de aumentar a velocidade, é que:',
    answers: [
      {
        answer: 'Aumenta a gravidade das lesões em caso de acidente.',
        correct: false,
      },
      {
        answer: 'Reduz as distrações',
        correct: false,
      },
      {
        answer: 'Aumenta a gravidade das lesões em caso de acidente.',
        correct: true,
      },
    ],
  },
  {
    question: 'As doenças e os medicamentos, podem ser a causa de um acidente rodoviário?',
    answers: [
      {
        answer: 'Não, porque os acidentes dependem de outros factores.',
        correct: false,
      },
      {
        answer: 'Sim, porque podem afectar a capacidade para conduzir com segurança.',
        correct: true,
      },
      {
        answer: 'Sim, exceto as gripes, constipações ou alergias.',
        correct: false,
      },
      {
        answer: 'Sim, exceto quando um medico tenha feito a receita.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que comunica o condutor aos outros utentes da via, ao balançar o braço,(cima/baixo) com a mão esticada para fora?',
    answers: [
      {
        answer: 'Que vai reduzir a velocidade.',
        correct: true,
      },
      {
        answer: 'Que vai voltar para o lado direito do volante.',
        correct: false,
      },
      {
        answer: 'Que vai voltar para o lado esquerdo do volante.',
        correct: false,
      },
    ],
  },
  {
    question: 'É obrigatório sinalizar o veiculo quando esteja a ser rebocado?',
    answers: [
      {
        answer: 'Sim, com as luzes de perigo ou, não sendo possível, com as luzes de presença.',
        correct: true,
      },
      {
        answer: 'Não é obrigatório, mas é aconselhável utilizar as luzes de perigo.',
        correct: false,
      },
      {
        answer: 'Sim, com as luzes de presença, em todos os casos.',
        correct: false,
      },
    ],
  },
  {
    question: 'No mesmo sentido, e com duas filas de trânsito, por que via de trânsito deve circular nessa situação?',
    answers: [
      {
        answer: 'Pela via mais à esquerda podendo utilizar outra para ultrapassar ou mudar de direção.',
        correct: true,
      },
      {
        answer: 'É indiferente, uma vez que a via não esta congestionada.',
        correct: false,
      },
      {
        answer: 'Pela via mais conveniente ao seu destino.',
        correct: false,
      },
    ],
  },
  {
    question: 'É a via pública um espaço destinado ao trânsito de peões?',
    answers: [
      {
        answer: 'Sim, de peões e de veículos.',
        correct: true,
      },
      {
        answer: 'Sim, mas só de dia.',
        correct: false,
      },
      {
        answer: 'Não, na via pública só podem transitar veículos.',
        correct: false,
      },
    ],
  },
  {
    question: 'A pressão dos pneus, deve ser verificada:',
    answers: [
      {
        answer: 'Apenas quando o veículo e sujeito a Inspeção Periódica obrigatória.',
        correct: false,
      },
      {
        answer: 'Uma vez ao ano',
        correct: false,
      },
      {
        answer: 'Regularmente.',
        correct: true,
      },
    ],
  },
  {
    question: 'Onde é o local mais seguro para instalar no veículo um sistema de retenção para crianças?',
    answers: [
      {
        answer: 'Qualquer assento, pois todos são igualmente seguros.',
        correct: false,
      },
      {
        answer: 'No assento central traseiro, já que é menos afectado pelos impactos laterais.',
        correct: true,
      },
      {
        answer: 'No banco da frente, para que o condutor possa observar a criança.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nas auto-estradas, é proibido circular a velocidade inferior a:',
    answers: [
      {
        answer: '40 km/h',
        correct: true,
      },
      {
        answer: '50 km/h',
        correct: false,
      },
      {
        answer: '30 km/h',
        correct: false,
      },
      {
        answer: '70 km/h',
        correct: false,
      },
    ],
  },
  {
    question: 'Considera-se morte por acidente de viação:',
    answers: [
      {
        answer: 'Aquela que ocorre até 30 dias apos o registo do sinistro.',
        correct: true,
      },
      {
        answer: 'Aquela que ocorre 30 dias depois do registo do sinistro.',
        correct: false,
      },
      {
        answer: 'Só aquela que ocorre no local do acidente.',
        correct: false,
      },
    ],
  },
  {
    question: 'Atirar do veículo ou abandonar na via objetos ou substancias, constitui contravenção:',
    answers: [
      {
        answer: 'Grave',
        correct: false,
      },
      {
        answer: 'Média',
        correct: true,
      },
      {
        answer: 'Leve',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao aproximar-se de uma passagem para peões, o condutor deve:',
    answers: [
      {
        answer: 'Buzinar para que os peões não continuem o atravessamento.',
        correct: false,
      },
      {
        answer: 'Fazer sinais com a mão aos peões que esperam para iniciar a travessia.',
        correct: false,
      },
      {
        answer: 'Reduzir a velocidade e parar para deixar passar os peões que já tenham iniciado a travessia da faixa de rodagem.',
        correct: true,
      },
    ],
  },
  {
    question: 'Entende-se por automóvel ligeiro:',
    answers: [
      {
        answer: 'O automóvel cuja lotação não excede os 8 lugares.',
        correct: false,
      },
      {
        answer: 'Todos os automóveis até ao peso de 4500 kg.',
        correct: false,
      },
      {
        answer: 'O automóvel com PB até 3500 kg e com lotação não superior a 9 lugares, incluindo o condutor.',
        correct: true,
      },
    ],
  },
  {
    question: 'A distancia percorrida desde que o condutor identifica um perigo até que o veiculo pare completamente:',
    answers: [
      {
        answer: 'Só varia se o veículo ou a via estão em mau estado.',
        correct: false,
      },
      {
        answer: 'É maior quanto maior for a velocidade.',
        correct: true,
      },
      {
        answer: 'Depende apenas do estado do condutor.',
        correct: false,
      },
      {
        answer: 'Depende apenas do estado dos travões.',
        correct: false,
      },
    ],
  },
  {
    question: 'Se estacionar o veículo na faixa de rodagem desde anoitecer até ao amanhecer, deve utilizar alguma luz?',
    answers: [
      {
        answer: 'Sim, as de presença (mínimos), se a iluminação não permite reconhecer o veículo a 100 metros.',
        correct: true,
      },
      {
        answer: 'Sim, as de cruzamento (médios), se a iluminação não permite reconhecer o veículo a 100 metros.',
        correct: false,
      },
      {
        answer: 'Não, mesmo que seja num local sem iluminação.',
        correct: false,
      },
    ],
  },
  {
    question: 'De modo geral, como são sinalizadas as lombas, no pavimento?',
    answers: [
      {
        answer: 'De marca rodoviária amarela',
        correct: false,
      },
      {
        answer: 'De marca rodoviária branca',
        correct: true,
      },
    ],
  },
  {
    question: 'Que veículo deve retroceder para dar passagem ao outro, numa passagen estreita sem sinalização onde nao seja possivel efectuar o cruzamento?',
    answers: [
      {
        answer: 'O veículo que esta mais próximo do local em que o cruzamento seja possível.',
        correct: true,
      },
      {
        answer: 'O veículo que desce se for numa via de inclinação acentuada.',
        correct: false,
      },
      {
        answer: 'O veículo mais pesado.',
        correct: false,
      },
    ],
  },
  {
    question: 'Um sinal redondo, borda vermelha, fundo branco, prescrição preta de 80 ao centro, indica:',
    answers: [
      {
        answer: 'Circular a uma velocidade que vá até os 80 km/h.',
        correct: true,
      },
      {
        answer: 'Transitar com veículos cujo peso total não ultrapasse 80 toneladas.',
        correct: false,
      },
      {
        answer: 'Circular acima de 80 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'Numa auto-estrada, pode-se inverter o sentido de marcha?',
    answers: [
      {
        answer: 'Nunca.',
        correct: true,
      },
      {
        answer: 'Sempre que possível.',
        correct: false,
      },
      {
        answer: 'Sim, se a manobra for feita lentamente.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os peões para atravessar a faixa de rodagem:',
    answers: [
      {
        answer: 'Devem certificar-se de que a distância e velocidade dos veículos, permite fazê-lo sem perigo de acidente.',
        correct: true,
      },
      {
        answer: 'Podem  fazê-lo sem utilizar as passagens para peões, se não existe nenhuma a uma distância inferior a 10 m.',
        correct: false,
      },
      {
        answer: 'Estão sempre obrigados a utilizar a passagem desnivelada para peões.',
        correct: false,
      },
    ],
  },
  {
    question: 'Na medida que aumenta a velocidade:',
    answers: [
      {
        answer: 'Reduz-se o campo de visão do condutor e aumenta a fadiga.',
        correct: true,
      },
      {
        answer: 'Melhora a capacidade de controlar o veículo nas situações de emergência.',
        correct: false,
      },
      {
        answer: 'Aumenta o campo de visão do condutor.',
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
