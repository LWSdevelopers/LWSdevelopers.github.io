// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Só pode ser ordenada a suspensão do trânsito por:",
    a : ["Motivos de segurança, de emergência grave ou de obras, ou com o fim de realizar a conservação dos pavimentos, instalações e obras de arte.", "Motivos de segurança, de emergência grave ou de obras, ou com o fim de promover produtos e marcas de automóveis.", "Ser feriado e haver festejos.", "Ser fim de semana",]
  },
  {
    q : "A entrada e saída de passageiros deve fazer-se:",
    a : ["Pelo lado permitido para a paragem.", "Sempre pelo lado esquerdo.", "Sempre o condutor pela direita e os restantes ocupantes pela esquerda.", "Pelo lado direito ou esquerdo indistintamente.",]
  },
  {
    q : "A tarefa da condução:",
    a : ["É uma actividade potencialmente perigosa, de elevada responsabilidade e que exige conhecimentos técnicos e experiência adequada.", "É uma actividade, de baixa responsabilidade e que exige conhecimentos técnicos e experiência.", "É uma actividade, de elevada responsabilidade que não exige muitos conhecimentos técnicos.",]
  },
  {
    q : "Excepto o disposto em regulamentos locais e em caso de manifesta necessidade:",
    a : ["Pode utilizar-se o lado direito da faixa de rodagem para ultrapassar ou mudar de direcção.", "Pode utilizar-se o lado direito da faixa de rodagem para a manobra de marcha atrás.", "Pode utilizar-se o lado direito da faixa de rodagem para estacionar.", "Pode utilizar-se o lado direito da faixa de rodagem para conduzir a grande velocidade.",]
  },
  {
    q : "A experiencia na condução é importante na avaliação que cada condutor faz de uma situação?",
    a : ["Certo", "Certo, mas só em condução fora das localidades.", "Errado", "Certo, mas só em condução urbana",]
  },
  {
    q : "A distância mínima a guardar em relação ao veículo que transita à minha frente:",
    a : ["Deve ser aquela que me permita, se necessário, imobilizar o veiculo em segurança.", "Não deve ser inferior a 30 metros.", "Não deve ser superior à distância de paragem.", "Deve ser aquela que me permita ver as rodas traseiras do veiculo que vai à minha frente.",]
  },
  {
    q : "A definição de tara é:",
    a : ["Peso do veículo em vazio.", "Peso do veiculo mais o condutor.", "Peso da carga que o veículo transporta.", "Peso do veículo com carga.",]
  },
  {
    q : "A Condução Defensiva deve ser mais pró-activa, isto significa que:",
    a : ["Deve prever as situações antes de acontecerem e mesmo que não aconteçam prever a probabilidade que aconteçam.", "Deve ser mais rápida e activa para sair rapidamente das zonas de perigo.", "Deve adivinhar as situações de perigo e concentrar-se em aproximar-se o mais possível da berma para se proteger.", "Deve estar atendo aos ruídos estranhos dos veículos no trânsito e sinalizar.",]
  },
  {
    q : "Posso circular pela parte direita da faixa de rodagem numa via urbana com duplo sentido e uma faixa para cada sentido?",
    a : ["Sim, para ultrapassar.", "Sim, em via urbana posso circular pela via da esquerda ou a da direita.", "Sim, na aproximação a um cruzamento em que pretenda mudar de direcção à direita.", "Não",]
  } ,
  {
    q : "Nas descidas de inclinação acentuada:",
    a : ["Os automóveis pesados não podem transitar sem utilizarem o motor como auxiliar do travão.", "Os automóveis ligeiros não podem transitar sem utilizarem o motor como auxiliar do travão.", "Só os automóveis pesados de passageiros não podem transitar sem utilizarem o motor como auxiliar do travão", "Todos os automóveis não podem transitar sem utilizarem o motor como auxiliar do travão.",]
  },
  {
    q : "A capacidade de o condutor prever e antecipar aumenta:",
    a : ["Com a experiência", "Com a velocidade do veículo", "Com a idade do condutor.", "Com a categoria do veículo",]
  },
  {
    q : "Os condutores não podem exceder as seguintes velocidades instantâneas (em quilómetros/hora):",
    a : ["Automóveis pesados de passageiros dentro das localidades 60, fora das localidades 100.", "Automóveis pesados de passageiros dentro das localidades 50, fora das localidades 120.", "Automóveis pesados de passageiros dentro das localidades 50, fora das localidades 100.", "Automóveis pesados de passageiros dentro das localidades 60, fora das localidades 120.",]
  },
  {
    q : "​ Um dos perigos da circulação nocturna são os encandeamentos. Como devo proceder ao ser encandeado pelo veículo que me segue:",
    a : ["Diminuir a velocidade e sinalizar para permitir que este me ultrapasse.", "Acelerar ao máximo até perde-lo de vista.", "Ligar as luzes de emergência e imobilizar o meu veículo.", "Fechar os olhos durante 2 ou 3 segundos para a recuperação ser mais rápida.",]
  } ,
  {
    q : "A definição de auto-estrada é:",
    a : ["Via publica destinada a transito rápido, com separação física de faixas de rodagem, sem cruzamentos de nível nem acesso a propriedades marginais, com acessos condicionados e sinalizada como tal.", "Via publica destinada a transito lento, com separação física de faixas de rodagem, sem cruzamentos de nível nem acesso a propriedades marginais, com acessos condicionados e sinalizada como tal", "Via publica destinada a transito rápido, sem separação física de faixas de rodagem, sem cruzamentos de nível nem acesso a propriedades marginais, com acessos condicionados e sinalizada como tal.", "Via publica destinada a transito rápido, com separação física de faixas de rodagem, com cruzamentos de nível e com acesso a propriedades marginais, com acessos condicionados e sinalizada como tal.",]
  },
  {
    q : "O que provoca num condutor, a elevada ingestão de bebidas alcoólicas?",
    a : ["A redução da capacidade de reação.", "O aumento das capacidades de avaliação das distâncias ​", "O aumento da capacidade de atenção e concentração.", "A redução da distancia de paragem.",]
  },
  {
    q : "A condução nocturna deve influenciar a velocidade a que circulo?",
    a : ["Sim, porque influencia a recolha de informação.", "Não, porque quando a visibilidade é menor devo ligar as luzes de estrada.", "Não, porque se ligar as luzes de estrada vejo melhor a via do que durante o dia.", "Sim, porque de noite pode-se circular um pouco mais rápido dentro dos limites, porque existe menos trafico.",]
  },
  {
    q : "O condutor de um veículo em marcha deve:",
    a : ["Manter uma distância lateral suficiente para evitar acidentes entre o seu veículo e os veículos que transitam na mesma faixa de rodagem, no mesmo sentido ou em sentido oposto.", "Manter uma distância lateral de 3 metros para evitar acidentes entre o seu veículo e os veículos que transitam na mesma faixa de rodagem, no mesmo sentido ou em sentido oposto.", "Manter uma distância lateral de 2 metros para evitar acidentes entre o seu veículo e os veículos que transitam na mesma faixa de rodagem, no mesmo sentido ou em sentido oposto.", "Manter uma distância lateral mínima para provocar acidentes entre o seu veículo e os veículos que transitam na mesma faixa de rodagem, no mesmo sentido ou em sentido oposto.",]
  } ,
  {
    q : "Em caso de nevoeiro (cacimba) forte:",
    a : ["Deve pensar em parar em um local seguro e aguardar que o nevoeiro levante.", "Deve pensar em seguir viagem o mais depressa possível para sair da zona de nevoeiro rapidamente.", "Deve ligar as luzes de estrada e as luzes de emergência para ser mais facilmente visto pelos outros condutores", "Deve pensar em seguir viagem buzinando constantemente para assinalar a sua presença.",]
  },
  {
    q : "A distância percorrida desde que o condutor identifica um perigo até que o veiculo pare completamente:",
    a : ["É maior quanto maior for a velocidade.", "Só varia se o veículo ou via estão em mau estado.", "Depende apenas do estado dos travões.", "Depende apenas do estado do condutor.",]
  },
  {
    q : "Os sinais sonoros devem ser:",
    a : ["Breves, usados de forma moderada e em caso algum devem servir de meio de protesto contra interrupções do trânsito ou como meios de chamamento.", "Longos e insistentes, usados como forma de protesto contra interrupções do trânsito ou como meios de chamamento.", "Breves, usados de forma moderada e podem servir de meio de protesto contra interrupções do trânsito ou com meios de chamamento.",]
  },
  {
    q : "A distância percorrida desde que o condutor identifica um perigo até que o veiculo pare completamente:",
    a : ["É maior quanto maior for a velocidade.", "Só varia se o veículo ou via estão em mau estado. ​ ​", "Depende apenas do estado dos travões.",]
  } ,
  {
    q : "​ Um dos perigos da circulação nocturna são os encandeamentos. Como devo proceder ao ser encandeado pelo veículo que me segue:",
    a : ["Diminuir a velocidade e sinalizar para permitir que este me ultrapasse.", "Fechar os olhos durante 2 ou 3 segundos para a recuperação ser mais rápida.", "Ligar as luzes de emergência e imobilizar o meu veículo.", "Acelerar ao máximo até perde-lo de vista.",]
  },
  {
    q : "Como medida defensiva, o condutor deve:",
    a : ["Dar a conhecer as suas intenções através de sinalização.", "Parar sempre que se aproxime de um cruzamento para evitar um acidente.", "Deve usar sempre a buzina para alertar outros utentes da via da sua presença.", "Circular com óculos escuros para evitar encadeamento.",]
  },
  {
    q : "A distância mínima a guardar em relação ao veículo que transita à minha frente:",
    a : ["Deve ser aquela que me permita, se necessário, imobilizar o veiculo em segurança.", "Deve ser aquela que me permita ver as rodas traseiras do veiculo que vai à minha frente.", "Não deve ser superior à distância de paragem.", "Não deve ser inferior a 30 metros.",]
  },
  {
    q : "Posso circular pela parte direita da faixa de rodagem numa via urbana com duplo sentido e uma faixa para cada sentido?",
    a : ["Sim, para ultrapassar.", "Sim, em via urbana posso circular pela via da esquerda ou a da direita.", "Sim, na aproximação a um cruzamento em que pretenda mudar de direcção à direita.", "Não",]
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



