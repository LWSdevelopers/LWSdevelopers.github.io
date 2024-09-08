// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Pode transportar bebidas alcoólicas na parte do veículo reservada aos passageiros?",
    a : ["Não, já que é proibido o porte e transporte de bebidas alcoólicas nesta parte do veiculo.", "Sim, sempre que o condutor não tome nada de álcool.", "Sim, se o condutor não estiver sob influencia de álcool.",]
  },
  {
    q : "O que entende-se por primeiros socorros?",
    a : ["São os cuidados prestados a uma pessoa que se fere ou adoece de repente, para mante-la viva e impedir o agravamento da situação.", "É o transporte adequado do sinistrado ou doente ao posto médico.", "São os meios humanos e materiais utilizados para a remoção dos acidentados.",]
  },
  {
    q : "Para manter a segurança do veículo, devem ser revistos periodicamente:",
    a : ["Os pneus, amortecedores e travões.", "As luzes, espelhos e o sistema de escape.", "O sistema de som.", "A bateria, o filtro de óleo e o do ar.",]
  },
  {
    q : "Quando os peões transitem na faixa de rodagem, devem fazê-lo:",
    a : ["numa única fila, sempre que as condições de visibilidade ou a intensidade do trânsito o aconselhem.", "a par, quando transitem desde o anoitecer ao amanhecer.", "a par, quando transitem em condições de visibilidade insuficiente.", "pela esquerda da faixa de rodagem, em relação ao seu sentido de marcha.",]
  },
  {
    q : "A condução urbana, caracteriza-se essencialmente:",
    a : ["Por uma grande intensidade de trânsito.", "Pela abundancia de sinais luminosos.", "Pela pouca presença de peões.", "Pela ausência de regras de trânsito.",]
  },
  {
    q : "Durante o exame para obter a carta de condução, a responsabilidade pelas contravenções praticadas, é do:",
    a : ["Examinando.", "Instrutor.", "Examinador.", "Todos",]
  },
  {
    q : "Num cruzamento de veículos  ao mudar de direcção para a direita, a quem deve ceder a passagem?",
    a : ["Aos que circulam em sentido contrário e pretendam seguir em frente ou mudar de direcção para à esquerda.", "Só aos condutores que circulam em sentido contrario e sigam em frente.", "Apenas aos condutores que se apresentem pela direita.", "A todos os condutores que circulem pela via transversal.",]
  },
  {
    q : "Quando o condutor tem uma distração no volante:",
    a : ["Demora mais tempo a reagir", "demora menos tempo em obter as informações necessárias para conduzir com segurança.", "deve avisar com as luzes de perigo.", "aumenta inconscientemente a velocidade do veículos.",]
  },
  {
    q : "Nas curvas, com a barra central contínua, pode inverter o sentido de marcha?",
    a : ["Não", "Sim", "Sim, já que não existe sinalização que o proíba.", "Não, já que é proibido fazê-lo fora das localidades.",]
  } ,
  {
    q : "Não sendo o homem um ser isolado, mas sim que vive em contacto com pessoas iguais a si, os deveres para com os seus semelhantes podem ser:",
    a : ["De justiça e de caridade.", "De dignidade e de integridade física.", "De respeito e de liberdade.",]
  },
  {
    q : "O condutor, pode utilizar aparelhos radiotelefónicos durante a marcha do veículo?",
    a : ["Apenas se for dotado de um auricular ou de microfone com sistema de alta voz, cuja utilização não implique um manuseamento continuado.", "Sim, já que não prejudica o exercido da condução com segurança.", "Sim, mas apenas para mensagens de texto.", "Não, e sempre proibido ao condutor utilizar aparelhos radiotelefónicos.",]
  },
  {
    q : "Os automóveis ligeiros de passageiros e mistos sem reboque, fora das localidades, não devem exceder a velocidade instantânea de:",
    a : ["120 km/h", "140 km/h", "80 km/h", "40 km/h",]
  },
  {
    q : "A ingestão de bebidas alcoólicas, mesmo que em pequenas quantidades, pode ter como consequência:",
    a : ["Aumento do tempo de reacção e da distância de paragem.", "Diminuição do tempo de reacção e da distância de paragem.", "Maior concentração na tarefa da condução.", "Aumento do tempo de reacção, mas não da distância de paragem.",]
  } ,
  {
    q : "Na situação apresentada, pode ultrapassar o veículo pela esquerda?",
    a : ["Não", "Sim, se esse veículo circula por baixo do limite máximo de velocidade.", "Sim, porque a linha e descontínua.", "Sim, pode-se sempre ultrapassar pela esquerda.",]
  },
  {
    q : "Na marca rodovia branca (passagem para peões):",
    a : ["Deve controlar e ceder a passagem para os peões que tenham iniciado a sua marcha", "Passar", "Parar por cima",]
  },
  {
    q : "Que efeitos tem a fadiga na condução?",
    a : ["Reduz a capacidade de concentração e a segurança.", "Reduz o tempo de reação do condutor.", "Diminui a sensibilidade ao encandeamento.", "Melhora a atenção do condutor.",]
  },
  {
    q : "O uso do cinto de segurança nos assentos traseiros:",
    a : ["podem salvar a vida aos seus ocupantes e impedem que eles causem lesões graves aos outros passageiros.", "são da exclusiva responsabilidade dos ocupantes, já que num acidente seriam os únicos afetados.", "não é obrigatório, mas é aconselhável.", "só são obrigatórios fora das localidades.",]
  } ,
  {
    q : "Como medida de prevenção, quando o piso da via esta molhado, deve:",
    a : ["Reduzir a velocidade.", "Reduzir a distância de segurança.", "Aumentar um pouco a velocidade para que a distância de paragem diminua.", "Parar.",]
  },
  {
    q : "O uso do cinto de segurança, é necessário e obrigatório porque:",
    a : ["Reduz quase para metade a probabilidade de que um acidente seja mortal.", "Melhora o conforto dos ocupantes do veículo.", "Nem todos os veículos tem airbag.", "Evita que a energia do impacto num acidente cause lesões aos ocupantes do veículo.",]
  },
  {
    q : "Posso mudar de direcção para a direita com barra central contínua?",
    a : ["Não, porque não é possível assegurar-se que a manobra pode ser realizada sem perigo.", "Sim, porque não há nenhuma sinalização que o impeça.", "Sim, desde que o assinale com a devida antecedência.",]
  },
  {
    q : "De que modo deve verificar o nível de óleo do motor?",
    a : ["Com o motor parado e frio.", "Com o motor quente.", "Com o motor ligado.",]
  } ,
  {
    q : "Qual é a velocidade instantânea que não devem exceder os condutores de ciclomotores e quadriciclos dentro das localidades?",
    a : ["40 km/h", "60 km/h", "30 km/h", "80 km/h",]
  },
  {
    q : "Ao mudar de direção num cruzamento, como o deve sinalizar para os outros utentes da via?",
    a : ["Com antecedência, utilizando a luz indicadora de direcção e, na falta desta, o braço.", "Não é necessário sinalizar se há pouco trânsito.", "Não é necessário sinalizar se tem prioridade de passagem.", "Depois de iniciar a mudança de direção.",]
  },
  {
    q : "O que deve fazer o condutor para prevenir os acidentes?",
    a : ["Praticar uma condução defensiva.", "Conduzir alcoolizado.", "Ignorar os sinais de trânsito.",]
  },
  {
    q : "Se o condutor que me precede assinala a manobra de mudança de direcção para a direita, posso ultrapassar?",
    a : ["Sim, pela esquerda, certificando-se que o pode fazer sem perigo de acidente.", "Sim, pela direita ou pela esquerda, sempre que o veiculo não esteja em movimento.", "Não.", "Sim, pela direita.",]
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



