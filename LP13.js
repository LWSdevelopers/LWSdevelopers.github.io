// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "As luzes de máximos, com nevoeiro (cacimba)",
    a : ["Devem ser evitadas, em especial á noite.", "Só devem ser usados de dia.", "Só devem ser usados a noite.", "Devem obrigatoriamente ser usadas.",]
  },
  {
    q : "Como deve ser efectuada a carga e descarga de veículos?",
    a : ["Pelo lado permitido para a paragem do veículo ou pela retaguarda.", "Pelo lado que as pessoas que descarregam tenham maior facilidade em fazê-lo.", "Sempre pela direita ou pela retaguarda.",]
  },
  {
    q : "As luzes de nevoeiro (cacimba) traseiras devem ser utilizadas:",
    a : ["Em situação de nevoeiro intenso e quando a projecção de água pelos pneus traseiros impedir a visibilidade normal das luzes de presença traseiras.", "Sempre durante a noite.", "Só se podem utilizar durante o dia.", "Só em situação de nevoeiro intenso.",]
  },
  {
    q : "Os condutores não podem exceder as seguintes velocidades instantâneas (em quilómetros/hora):",
    a : ["Motociclos simples, dentro das localidades 50, fora das localidades 90.", "Motociclos simples, dentro das localidades 50, fora das localidades 80.", "Motociclos simples, dentro das localidades 60, fora das localidades 90.", "Motociclos simples, dentro das localidades 40, fora das localidades 80.",]
  },
  {
    q : "Qualquer estímulo que chegue aos sentidos do condutor é primeiro:",
    a : ["Percebido,", "Atribuído significado.", "Identificado.",]
  },
  {
    q : "Com nevoeiro (cacimba), a distância de segurança aplicável:",
    a : ["Não é a mesma que em condições de boa visibilidade.", "Ė menor para permitir ver o carro que segue à sua frente.", "Ė a mesma que em condições de boa visibilidade.", "Ė a indicada pela sinalização vertical.",]
  },
  {
    q : "A deslocação do ar causado pela passagem de veículos pesados em alta velocidade:",
    a : ["Provoca ventos laterais que afectam os veículos ligeiros mais leves.", "Provoca ventos laterais que afectam, sobretudo os veículos pesados de passageiros.", "Não tem influência para os outros condutores.", "Provoca ventos frontais que afectam os veículos ligeiros mais leves.",]
  },
  {
    q : "Na condução a fadiga pode provocar:",
    a : ["O aumento do tempo de reacção.", "A redução da distância de paragem.", "A diminuição da distância de travagem.", "O aumento da atenção e capacidade para reagir.",]
  },
  {
    q : "O tomar bebidas alcoólicas:",
    a : ["Reduz o campo visual, a capacidade de exploração visual e a capacidade readaptação visual após encadeamento.", "Aumenta o campo visual, a capacidade de exploração visual, a visão dupla e redução da capacidade de  readaptação após encandeamento.", "Reduz o campo visual, a capacidade exploração visual e aumenta a capacidade de readaptação visual após encadeamento.",]
  } ,
  {
    q : "Ao mudar de direcção num cruzamento, como o deve sinalizar para os outros utentes da via?",
    a : ["Com antecedência, utilizando a luz indicadora de direcção e, na falta desta, o braço.", "Não é necessário sinalizar se tem prioridade de passagem.", "Não é necessário sinalizar se há pouco trânsito.", "Depois de iniciar a mudança de direcção.",]
  },
  {
    q : "Identifique um factor de risco externo ao condutor:",
    a : ["A publicidade na via pública.", "A sinalização.", "O álcool.", "O cansaço.",]
  },
  {
    q : "A definição de estrada é:",
    a : ["Via de comunicação terrestre especialmente destinada ao trânsito de veículos.", "Via de comunicação aérea especialmente destinada ao trânsito de veículo", "Via de comunicação terrestre não especialmente destinada ao trânsito de veículos.", "Via de comunicação terrestre especialmente destinada ao trânsito de peões.",]
  },
  {
    q : "Umas das consequências de aumentar a velocidade é que:",
    a : ["aumenta a gravidade das lesões em caso de acidente.", "reduz a distância de travagem.", "reduz as distrações.", "melhora o tempo de reacção.",]
  } ,
  {
    q : "Se estacionar o veículo na faixa de rodagem desde anoitecer até ao amanhecer, deve utilizar alguma luz?",
    a : ["Sim, as de presença (mínimos), se a iluminação não permite reconhecer o veículo a 100 metros.", "sim, as de estrada (máximos)", "sim, as de cruzamento (médios), se a iluminação não permite reconhecer o veículo a 100 metros.", "Não , mesmo que seja num local sem iluminação.",]
  },
  {
    q : "A condução sob influência do álcool:",
    a : ["Aumenta o risco de acidente.", "Pode melhorar o estado do condutor devido á melhora da sua disposição.", "Em nada interfere com a segurança rodoviária.", "Diminui o risco de acidente.",]
  },
  {
    q : "Nos locais onde é proibido, a inversão do sentido de marcha:",
    a : ["É contravenção punida com a multa de 1.000,00 Mt.", "Não é considerada contravenção.", "É contravenção punida com a multa de 2.000,00 Mt.", "É contravenção punida com a multa de 500,00 Mt.",]
  },
  {
    q : "Uma das partes importantes para praticar uma condução defensiva é:",
    a : ["A capacidade mental de prever os acontecimentos perante um estímulo visual.", "A capacidade de dominar a trajectória do veículo em condições adversas.", "A capacidade de efectuar travagens sempre que necessário.", "A capacidade de acelerar dentro dos limites impostos pela sinalização.",]
  } ,
  {
    q : "Os condutores não podem exceder as seguintes velocidades instantâneas (em quilómetros/hora):",
    a : ["Automóveis ligeiros de mercadorias com reboque dentro das localidades 60, fora das localidades 100.", "Automóveis ligeiros de mercadorias com reboque dentro das localidades 50, fora das localidades 90.", "Automóveis ligeiros de mercadorias com reboque dentro das localidades 60, fora das localidades 80.", "Automóveis ligeiros de mercadorias com reboque dentro das localidades 40, fora das localidades 90.",]
  },
  {
    q : "Para praticar uma condução defensiva, o condutor deve:",
    a : ["Estar especialmente atento à ocorrência de situações inesperadas.", "Seguir a velocidade elevada.", "Utilizar sinais sonoros durante a noite, dentro das localidades.",]
  },
  {
    q : "Muitas tarefas que são necessárias á condução, exigem que o condutor retire os olhos da estrada:",
    a : ["Certo", "Errado",]
  },
  {
    q : "Em caso de avaria, os sinais de pré-sinalização de perigo devem colocar-se por forma a ficar bem visíveis a uma distância de:",
    a : ["pelo menos 100 metros.", "10 metros.", "pelo menos 50 metros.", "pelo menos 25 metros.",]
  } ,
  {
    q : "O espaço percorrido pelo veículo durante o tempo de reação do condutor não é sempre o mesmo e depende:",
    a : ["Do tempo da reacção e da velocidade do veículo.", "Só da velocidade do veículo e não tem influência o tempo de reacção do condutor.", "Principalmente de factores externos ao condutor.", "Só do tempo da reacção do condutor e não tem influência a velocidade do veículo.",]
  },
  {
    q : "Quais são os efeitos mais comuns da fadiga ao volante?",
    a : ["A dificuldade em manter o veículo, dentro dos limites da faixa de rodagem.", "Sentir fome e sede o que provoca a necessidade de se deslocar com maior velocidade para chegar mais rápido ao seu destino.", "Sentir-se enérgico podendo controlar melhor o veículo.",]
  },
  {
    q : "Dentro das localidades, pode utilizar os sinais sonoros:",
    a : ["Só em caso de manifesta necessidade, como um perigo iminente.", "para protestar contra interrupções do trânsito.", "Na aproximação de uma curva.", "durante a noite.",]
  },
  {
    q : "O frio excessivo, a chuva e o calor:",
    a : ["Aumentam a fadiga na condução.", "Apenas o frio e a chuva aumentam a fadiga na condução.", "Apenas a chuva e o calor aumentam a fadiga na condução.", "Não aumentam a fadiga na condução.",]
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



