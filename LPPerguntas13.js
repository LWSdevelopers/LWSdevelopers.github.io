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
    question: 'As luzes de máximos, com nevoeiro (cacimba)',
    answers: [
      {
        answer: 'Devem ser evitadas, em especial á noite.',
        correct: true,
      },
      {
        answer: 'Só devem ser usados de dia.',
        correct: false,
      },
      {
        answer: 'Só devem ser usados a noite.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como deve ser efectuada a carga e descarga de veículos?',
    answers: [
      {
        answer: 'Sempre pela direita ou pela retaguarda.',
        correct: false,
      },
      {
        answer: 'Pelo lado que as pessoas que descarregam tenham maior facilidade em fazê-lo.',
        correct: false,
      },
      {
        answer: 'Pelo lado permitido para a paragem do veículo ou pela retaguarda.',
        correct: true,
      },
    ],
  },
  {
    question: 'As luzes de nevoeiro (cacimba) traseiras devem ser utilizadas:',
    answers: [
      {
        answer: 'Em situação de nevoeiro intenso e quando a projecção de água pelos pneus traseiros impedir a visibilidade normal das luzes de presença traseiras.',
        correct: true,
      },
      {
        answer: 'Sempre durante a noite.',
        correct: false,
      },
      {
        answer: 'Só se podem utilizar durante o dia.',
        correct: false,
      },
      {
        answer: 'Só em situação de nevoeiro intenso.',
        correct: false,
      },
    ],
  },
  {
    question: 'Os condutores não podem exceder as seguintes velocidades instantâneas (em quilómetros/hora):',
    answers: [
      {
        answer: 'Motociclos simples, dentro das localidades 50, fora das localidades 90.", "Motociclos simples, dentro das localidades 50, fora das localidades 80.',
        correct: true,
      },
      {
        answer: 'Motociclos simples, dentro das localidades 60, fora das localidades 90.',
        correct: false,
      },
      {
        answer: 'Motociclos simples, dentro das localidades 40, fora das localidades 80.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qualquer estímulo que chegue aos sentidos do condutor é primeiro:',
    answers: [
      {
        answer: 'Não dentificado',
        correct: false,
      },
      {
        answer: 'Atribuído significado.',
        correct: false,
      },
      {
        answer: 'Percebido',
        correct: true,
      },
    ],
  },
  {
    question: 'Com nevoeiro (cacimba), a distância de segurança aplicável:',
    answers: [
      {
        answer: 'Ė menor para permitir ver o carro que segue à sua frente.',
        correct: false,
      },
      {
        answer: 'Não é a mesma que em condições de boa visibilidade.',
        correct: true,
      },
      {
        answer: 'Ė a indicada pela sinalização vertical.',
        correct: false,
      },
    ],
  },
  {
    question: 'A deslocação do ar causado pela passagem de veículos pesados em alta velocidade:',
    answers: [
      {
        answer: 'Provoca ventos frontais que afectam os veículos ligeiros mais leves.',
        correct: false,
      },
      {
        answer: 'Provoca ventos laterais que afectam os veículos ligeiros mais leves.',
        correct: true,
      },
      {
        answer: 'Provoca ventos laterais que afectam, sobretudo os veículos pesados de passageiros.',
        correct: false,
      },
      {
        answer: 'Não tem influência para os outros condutores.',
        correct: false,
      },
    ],
  },
  {
    question: 'Na condução a fadiga pode provocar:',
    answers: [
      {
        answer: 'O aumento do tempo de reacção.',
        correct: true,
      },
      {
        answer: 'A redução da distância de paragem.',
        correct: false,
      },
      {
        answer: 'A diminuição da distância de travagem.',
        correct: false,
      },
      {
        answer: 'O aumento da atenção e capacidade para reagir.',
        correct: false,
      },
    ],
  },
  {
    question: 'O tomar bebidas alcoólicas:',
    answers: [
      {
        answer: 'Reduz o campo visual, a capacidade de exploração visual e a capacidade readaptação visual após encadeamento.',
        correct: true,
      },
      {
        answer: 'Aumenta o campo visual, a capacidade de exploração visual, a visão dupla e redução da capacidade de  readaptação após encandeamento.',
        correct: false,
      },
      {
        answer: 'Reduz o campo visual, a capacidade exploração visual e aumenta a capacidade de readaptação visual após encadeamento.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao mudar de direcção num cruzamento, como o deve sinalizar para os outros utentes da via?',
    answers: [
      {
        answer: 'Com antecedência, utilizando a luz indicadora de direcção e, na falta desta, o braço.',
        correct: true,
      },
      {
        answer: 'Não é necessário sinalizar se tem prioridade de passagem.',
        correct: false,
      },
      {
        answer: 'Não é necessário sinalizar se há pouco trânsito.',
        correct: false,
      },
    ],
  },
  {
    question: 'Identifique um factor de risco externo ao condutor:',
    answers: [
      {
        answer: 'O álcool.',
        correct: false,
      },
      {
        answer: 'A sinalização.',
        correct: false,
      },
      {
        answer: 'A publicidade na via pública.',
        correct: true,
      },
      {
        answer: 'O cansaço.',
        correct: false,
      },
    ],
  },
  {
    question: 'A definição de estrada é:',
    answers: [
      {
        answer: 'Via de comunicação aérea especialmente destinada ao trânsito de veículo',
        correct: false,
      },
      {
        answer: 'Via de comunicação terrestre especialmente destinada ao trânsito de veículos.',
        correct: true,
      },
      {
        answer: 'Via de comunicação terrestre não especialmente destinada ao trânsito de veículos.',
        correct: false,
      },
      {
        answer: 'Via de comunicação terrestre especialmente destinada ao trânsito de peões.',
        correct: false,
      },
    ],
  },
  {
    question: 'Umas das consequências de aumentar a velocidade é que:',
    answers: [
      {
        answer: 'aumenta a gravidade das lesões em caso de acidente.',
        correct: true,
      },
      {
        answer: 'reduz a distância de travagem.',
        correct: false,
      },
      {
        answer: 'reduz as distrações.',
        correct: false,
      },
      {
        answer: 'melhora o tempo de reacção.',
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
        answer: 'sim, as de estrada (máximos)',
        correct: false,
      },
      {
        answer: 'sim, as de cruzamento (médios), se a iluminação não permite reconhecer o veículo a 100 metros.',
        correct: false,
      },
      {
        answer: 'Não , mesmo que seja num local sem iluminação.',
        correct: false,
      },
    ],
  },
  {
    question: 'A condução sob influência do álcool:',
    answers: [
      {
        answer: 'Pode melhorar o estado do condutor devido á melhora da sua disposição.',
        correct: false,
      },
      {
        answer: 'Aumenta o risco de acidente.',
        correct: true,
      },
      {
        answer: 'Em nada interfere com a segurança rodoviária.',
        correct: false,
      },
      {
        answer: 'Diminui o risco de acidente.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nos locais onde é proibido, a inversão do sentido de marcha:',
    answers: [
      {
        answer: 'É contravenção punida com a multa de 2.000,00 Mt.',
        correct: false,
      },
      {
        answer: 'Não é considerada contravenção.',
        correct: false,
      },
      {
        answer: 'É contravenção punida com a multa de 500,00 Mt.',
        correct: false,
      },
      {
        answer: 'É contravenção punida com a multa de 1.000,00 Mt.',
        correct: true,
      },
    ],
  },
  {
    question: 'Uma das partes importantes para praticar uma condução defensiva é:',
    answers: [
      {
        answer: 'A capacidade de dominar a trajectória do veículo em condições adversas.',
        correct: false,
      },
      {
        answer: 'A capacidade de efectuar travagens sempre que necessário.',
        correct: false,
      },
      {
        answer: 'A capacidade de acelerar dentro dos limites impostos pela sinalização.',
        correct: false,
      },
      {
        answer: 'A capacidade mental de prever os acontecimentos perante um estímulo visual.',
        correct: true,
      },
    ],
  },
  {
    question: 'Os condutores não podem exceder as seguintes velocidades instantâneas (em quilómetros/hora):',
    answers: [
      {
        answer: 'Automóveis ligeiros de mercadorias com reboque dentro das localidades 50, fora das localidades 90.',
        correct: false,
      },
      {
        answer: 'Automóveis ligeiros de mercadorias com reboque dentro das localidades 60, fora das localidades 100.',
        correct: true,
      },
      {
        answer: 'Automóveis ligeiros de mercadorias com reboque dentro das localidades 60, fora das localidades 80.',
        correct: false,
      },
      {
        answer: 'Automóveis ligeiros de mercadorias com reboque dentro das localidades 40, fora das localidades 90.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para praticar uma condução defensiva, o condutor deve:',
    answers: [
      {
        answer: 'Estar especialmente atento à ocorrência de situações inesperadas.',
        correct: true,
      },
      {
        answer: 'Seguir a velocidade elevada.',
        correct: false,
      },
      {
        answer: 'Utilizar sinais sonoros durante a noite, dentro das localidades.',
        correct: false,
      },
    ],
  },
  {
    question: 'Muitas tarefas que são necessárias á condução, exigem que o condutor retire os olhos da estrada:',
    answers: [
      {
        answer: 'Errado',
        correct: false,
      },
      {
        answer: 'Certo',
        correct: true,
      },
    ],
  },
  {
    question: 'Em caso de avaria, os sinais de pré-sinalização de perigo devem colocar-se por forma a ficar bem visíveis a uma distância de:',
    answers: [
      {
        answer: 'pelo menos 100 metros.',
        correct: true,
      },
      {
        answer: '10 metros.',
        correct: false,
      },
      {
        answer: 'pelo menos 25 metros.',
        correct: false,
      },
      {
        answer: 'pelo menos 50 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'O espaço percorrido pelo veículo durante o tempo de reação do condutor não é sempre o mesmo e depende:',
    answers: [
      {
        answer: 'Do tempo da reacção e da velocidade do veículo.',
        correct: true,
      },
      {
        answer: 'Só da velocidade do veículo e não tem influência o tempo de reacção do condutor.',
        correct: false,
      },
      {
        answer: 'Principalmente de factores externos ao condutor.',
        correct: false,
      },
      {
        answer: 'Só do tempo da reacção do condutor e não tem influência a velocidade do veículo.',
        correct: false,
      },
    ],
  },
  {
    question: 'Quais são os efeitos mais comuns da fadiga ao volante?',
    answers: [
      {
        answer: 'A dificuldade em manter o veículo, dentro dos limites da faixa de rodagem.',
        correct: true,
      },
      {
        answer: 'Sentir fome e sede o que provoca a necessidade de se deslocar com maior velocidade para chegar mais rápido ao seu destino.',
        correct: false,
      },
      {
        answer: 'Sentir-se enérgico podendo controlar melhor o veículo.',
        correct: false,
      },
    ],
  },
  {
    question: 'Dentro das localidades, pode utilizar os sinais sonoros:',
    answers: [
      {
        answer: 'Só em caso de manifesta necessidade, como um perigo iminente.',
        correct: true,
      },
      {
        answer: 'para protestar contra interrupções do trânsito.',
        correct: false,
      },
      {
        answer: 'Na aproximação de uma curva.',
        correct: false,
      },
      {
        answer: 'durante a noite.',
        correct: false,
      },
    ],
  },
  {
    question: 'O frio excessivo, a chuva e o calor:',
    answers: [
      {
        answer: 'Apenas a chuva e o calor aumentam a fadiga na condução.',
        correct: false,
      },
      {
        answer: 'Apenas o frio e a chuva aumentam a fadiga na condução.',
        correct: false,
      },
      {
        answer: 'Aumentam a fadiga na condução.',
        correct: true,
      },
      {
        answer: 'Não aumentam a fadiga na condução.',
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
