// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Um condutor que esteja muito fatigado pode:",
    a : ["Adormecer nos momentos de maior monotonia do trânsito.", "Combater a fadiga falando ao telemóvel com amigos e familiares para se manter acordado.", "Beber bebidas estimulantes ou café para combater a fadiga.",]
  },
  {
    q : "A força centrípeta e centrífuga:",
    a : ["São forças que actuam em sentido contrário uma em relação à outra.", "São forças que só ocorrem quando o veículo vai em linha recta.", "Só depende do raio da trajectória não tendo a velocidade nenhuma influência.", "São forças que actuam no mesmo sentido e se acumulam uma à outra.",]
  },
  {
    q : "A definição de cruzamento é:",
    a : ["Zona de intersecção de vias públicas ao mesmo nível.", "Zona de intersecção de vias privadas ao mesmo nível.", "Zona de intersecção de vias privadas ao nível inferior.", "Zona de intersecção de vias privadas ao nível superior.",]
  },
  {
    q : "Ao perceber que existe um acidente ou vitima de doença súbita, devo:",
    a : ["Vestir o colete retrorrefletor e colocar o triângulo de sinalização, no mínimo a 30 metros do acidente e de forma a ser visível a pelo menos 100 metros.", "Colocar o triângulo de sinalização, no mínimo a 30 metros do local do acidente e de forma a ser visível a pelo menos 150 metros.", "Colocar o triângulo de sinalização, no mínimo a 25 metros do local do acidente e de forma a ser visível a pelo menos 100 metros.",]
  },
  {
    q : "Quando um veículo acelera a direito (longitudinalmente):",
    a : ["O peso é em parte transferido para o eixo traseiro, devido à inércia.", "O peso não é transferido nem para a frente nem para trás devido á suspensão do veiculo", "O peso é em parte transferido para o eixo traseiro, devido à força centrífuga.", "O peso é em parte transferido para o eixo dianteiro, devido à inércia.",]
  },
  {
    q : "A medida que aumenta a velocidade:",
    a : ["reduz-se o campo de visão do condutor e aumenta a fadiga.", "melhora a capacidade de controlar o veiculo nas situações de emergência.", "aumenta o campo de visão do condutor.", "a fadiga demora mais a aparecer.",]
  },
  {
    q : "Qual das seguintes é uma afirmação falsa:",
    a : ["O acidente resulta sempre da falha de vários elementos do sistema rodoviário.", "O sistema de circulação rodoviária é um conjunto de elementos interligados e dependentes.", "O homem é o elemento mais importante do sistema rodoviário.", "A probabilidade de acidente aumenta quando há uma alteração na interacção entre os vários elemento do sistema rodoviário.",]
  },
  {
    q : "O controlo dinâmico do veículo é uma das tarefas da condução e é:",
    a : ["Efectuado através da definição da sua velocidade e da sua trajectória.", "Efectuado através da aceleração e travagem do veículo.", "Efectuado através do sistema de direcção.",]
  },
  {
    q : "Os condutores não devem:",
    a : ["Circular com o braço fora do veículo.", "Olhar para os espelhos;", "Fazer ultrapassagens ou fumar.", "Escutar música",]
  } ,
  {
    q : "Num veículo equipado com motor Diesel em aceleração, a libertação de muito fumo negro pelo tubo de escape, significa:",
    a : ["Necessidade de regulação da bomba injectora.", "Que o veículo acelera bem.", "Óptima qualidade do combustível.", "Que o veículo está a queimar multo óleo.",]
  },
  {
    q : "Pode ter consequências num acidente o facto de não levar o cinto de segurança bem colocado?",
    a : ["Sim, porque pode provocar ferimentos graves.", "Não, se o veiculo estiver equipado com airbag.", "Não, o cinto é sempre eficaz.", "Sim, por isso o seu uso não é obrigatório.",]
  },
  {
    q : "Para a execução de manobras, qual dos seguintes lhe parece mais importante?",
    a : ["Treino, experiencia e uma atitude adequada.", "Coragem dedicação e determinação.", "Dedicação, atenção e uma atitude adequada.", "Empenho, atitude adequada e atenção.",]
  },
  {
    q : "O que é a ergonomia de um veiculo?",
    a : ["É a capacidade de adaptação do equipamento às particularidades de cada ser humano.", "E a capacidade de um veículo economizar no combustível.", "É a capacidade de um condutor economizar no combustível.",]
  } ,
  {
    q : "Ė livre o trânsito rodoviário nas vias de domínio público do Estado e nas vias de domínio privado quando abertas ao trânsito público?",
    a : ["Sim, mas as pessoas devem abster-se de actos que impeçam ou embaracem o trânsito ou comprometam a segurança ou a comodidade dos utentes das vias.", "Sim, mas as pessoas podem praticar actos que impeçam ou embaracem o trânsito e comprometam a segurança ou a comodidade dos utentes das vias.", "Não, mas as pessoas podem praticar actos que impeçam ou embaracem o trânsito e comprometam a segurança ou a comodidade dos utentes das vias.", "Sim, desde que não comprometam a segurança.",]
  },
  {
    q : "O que deve ser ajustado antes de iniciar a marcha?",
    a : ["A distância do assento aos pedais, a inclinação das costas do banco e o encosto de cabeça", "O encosto de cabeça e o cinto de segurança.", "De forma folgada o cinto de segurança.", "O encosto de cabeça e o cinto de segurança.",]
  },
  {
    q : "Depois de ter tomado bebidas alcoólicas:",
    a : ["O álcool entra rapidamente no sistema circulatório.", "O álcool demora duas horas a entrar no sistema circulatório.", "O álcool entra directamente no sistema urinário.",]
  },
  {
    q : "Dentro das localidades, durante a noite:",
    a : ["É obrigatória a substituição dos sinais sonoros pelos sinais luminosos.", "É escolha do condutor a substituição dos sinais sonoros pelos sinais gestuais.", "É obrigatória a substituição dos sinais sonoros pelos sinais gestuais.", "Não é obrigatória a substituição dos sinais sonoros pelos sinais luminosos.",]
  } ,
  {
    q : "Se perceber o principio de um incêndio:",
    a : ["Actue de imediato, desligando o motor do veículo e utilizando um extintor.", "Actue de imediato, desligando o ar condicionado do veiculo e utilizando um extintor.", "Actue de imediato, desligando as luzes do veículo e utilizando um extintor.",]
  },
  {
    q : "Num automóvel ligeiro estacionado do lado esquerdo da faixa de rodagem, a carga e descarga deve ser feita:",
    a : ["Pela retaguarda ou pelo lado esquerdo.", "Pela retaguarda ou pelo lado direito.", "Pelo lado direito ou pelo lado esquerdo", "Pelo lado que for mais rápido para o condutor.",]
  },
  {
    q : "Quem exceder em mais de 60 Km/h de velocidade (automóveis ligeiros e motociclos) os limites, dentro das localidades é punido:",
    a : ["Com multa de 8.000,00 Mt e contravenção grave.", "Com multa de 8.000,00 Mt e contravenção média.", "Com multa de 6.000,00 Mt e contravenção grave.", "Com multa de 6.000,00 Mt e contravenção média.",]
  },
  {
    q : "Para que aconteçam graves acidente de trânsito, a fadiga é um dos factores que mais contribuem sobretudo:",
    a : ["Durante a noite.", "Durante a tarde.", "Durante a manhã.", "Entre as 15 e as 17 horas.",]
  } ,
  {
    q : "A tarefa de condução, pode ser muito afectada pela fadiga porque:",
    a : ["Contribui para a diminuição das capacidades perceptivas, cognitivas e também motoras.", "Contribui para o aumento das capacidades perceptivas, intelectuais e também motoras.", "Um condutor fatigado vê diminuído o seu tempo de reacção.", "Contribui para despertar as capacidades cognitivas e também motoras.",]
  },
  {
    q : "A definição de passeio é:",
    a : ["Parte que ladeia a faixa de rodagem, destinada exclusivamente ao trânsito de peões.", "Parte que ladeia a faixa de rodagem, destinada ao estacionamento de veículos.", "Parte da faixa de rodagem, destinada exclusivamente ao trânsito de peões.", "Parte que ladeia a faixa de rodagem, destinada exclusivamente ao trânsito de veículos.",]
  },
  {
    q : "Os condutores devem, para permitir a circulação de um veiculo prioritário ou da policia, assinalando devidamente a marcha, que transite numa via congestionada:",
    a : ["Deixar livre uma passagem do lado direito da parte da faixa de rodagem afecta ao seu sentido de circulação, chegando-se o mais possível para a esquerda e podendo, se necessário, utilizar as bermas, excepto se for numa autoestrada.", "Deixar livre uma passagem do lado esquerdo da parte da faixa de rodagem afecta ao seu sentido de circulação, chegando-se o mais possível para a direita e podendo, se necessário, utilizaras bermas, excepto se for numa autoestrada.", "Deixar livre uma passagem do lado esquerdo da parte da faixa de rodagem afecta ao seu sentido de circulação, chiando-se o mais possível para a direita e podendo, se necessário, utilizar as bermas, sobretudo se for numa autoestrada.",]
  },
  {
    q : "Quem deve ceder a passagem?",
    a : ["Os condutores que saiam de qualquer parque de estacionamento, de uma zona de abastecimento de combustível ou de qualquer prédio ou caminho particular.", "Todos os condutores que se apresentem pela esquerda.", "Os condutores que entrem em qualquer parque de estacionamento, de uma zona de abastecimento de combustível ou de qualquer prédio ou caminho particular.", " Os condutores que se apresentem pela direita.",]
  }
];

var quiz = {
  // (PART B) PROPERTIES
  hNow : null, // html current question number
  hQns : null, // html questions
  hAns : null, // html answers
  qorder : [], // questions order
  aorder : [], // answers order
  qnow : 0,    // current question
  score : 0,   // correctly answered

  // (PART C) SHUFFLE ARRAY
  // CREDIT : https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
  shuffle : a => {
    for (let i=a.length-1; i>0; i--) { 
      let j = Math.floor(Math.random() * (i + 1)); 
      [a[i], a[j]] = [a[j], a[i]]; 
    } 
    return a; 
  },

  // (PART D) INIT QUIZ
  init : () => {
    // (D1) GET HTML ELEMENTS
    quiz.hNow = document.getElementById("qcurrent");
    quiz.hQns = document.getElementById("qquestion");
    quiz.hAns = document.getElementById("qanswer");

    // (D2) SHUFFLE QUESTIONS ORDER
    quiz.qorder = [];
    for (let i=0; i<qa.length; i++) { quiz.qorder.push(i); }
    quiz.shuffle(quiz.qorder);

    // (D3) SHOW QUESTION
    quiz.qnow = -1;
    quiz.next();
  },

  // (PART E) NEXT QUESTION
  next : () => {
    // (E1) NEXT QUESTION - SHOW SCORE IF END
    quiz.qnow++;
    if (quiz.qnow == qa.length) {
      quiz.hNow.innerHTML = "RESULTADO";
      quiz.hQns.innerHTML = `Sua nota foi de ${quiz.score} acertos, de ${qa.length} questões.         Faça os testes mais vezes, se estabilize e passe no exame teórico, de primeira.                                               Oi 🤓, o aplicativo é gratuito, nos ajude a partilhar. Não se esqueça de convidar os seus amigos!`;
      quiz.hAns.innerHTML = "";
      // quiz.hAns.innerHTML = "<div onclick='quiz.init()'>Restart</div>";
      return;
    }

    // (E2) GET CURRENT QUESTION
    let qn = qa[quiz.qorder[quiz.qnow]];

    // (E3) SHUFFLE ANSWERS
    quiz.aorder = [];
    for (let i=0; i<qn.a.length; i++) { quiz.aorder.push(i); }
    quiz.shuffle(quiz.aorder);

    // (E4) SHOW QUESTION & ANSWER OPTIONS
    quiz.hNow.innerHTML = `PERGUNTA ${quiz.qnow+1} / ${qa.length}`;
    quiz.hQns.innerHTML = qn.q;
    quiz.hAns.innerHTML = "";
    quiz.aorder.forEach(i => {
      let opt = document.createElement("div");
      opt.className = "option";
      opt.innerHTML = qn.a[i];
      opt.order = i;
      opt.onclick = () => quiz.pick(i);
      quiz.hAns.appendChild(opt);
    });
  },
  
  // (PART F) ON PICKING AN ANSWER OPTION
  pick : i => {
    // (F1) CORRECTLY ANSWERED
    if (i==0) { quiz.score++; }

    // (F2) UPDATE ANSWER HTML
    document.querySelectorAll("#qanswer div.option").forEach(opt => {
      opt.onclick = "";
      if (opt.order==0) { opt.classList.add("correct"); }
      else if (opt.order==i) { opt.classList.add("wrong"); }
    });

    // (F3) WAIT FOR 1 SECOND BEFORE NEXT QUESTION
    setTimeout(quiz.next, 3050);
  }
};
window.addEventListener("load", quiz.init);



