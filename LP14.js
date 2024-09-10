// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "A ingestão de drogas:",
    a : ["Afecta o equilíbrio e a personalidade do condutor.", "Só afecta a personalidade do condutor.", "Se for um consumidor habitual têm pouca influência no seu acto de conduzir.",]
  },
  {
    q : "A distância de reacção:",
    a : ["É o espaço percorrido pelo veículo durante o tempo de reacção do condutor.", "É o espaço percorrido pelo veículo durante o tempo de travagem.", "É o espaço percorrido pelo veículo durante a travagem atá à efectiva paragem.", "É o espaço percorrido pelo veiculo até que o condutor identifica um perigo.",]
  },
  {
    q : "Parar ou estacionar, é proibido:",
    a : ["A menos de 3 m para frente e 15 m para um e outro lado dos sinais indicativos da paragem dos veículos de transporte colectivo de passageiros, consoante circulem ou não sobre carris.", "A menos de 3 m para frente e 10 m para um e outro lado dos indicativos da paragem dos veículos de transporte colectivo de passageiros , consoante circulem ou não sobre carris.", "A menos de 1 m para a frente e 10 m para um e outro lado dos sinais indicativo da paragem dos veículos de transporte colectivo de passageiros , consoante circulem ou não sobre carris.", "A menos de 5 m para frente e 15 m para um e outro lado dos sinais indicativos da paragem dos veículos de transporte colectivo de passageiros, consoante circulem ou não sobre carris.",]
  },
  {
    q : "Porque lado o trânsito de veículos ou de animais é feito:",
    a : ["Pela esquerda das faixas de rodagem e o mais próximo possível das bermas ou passeios mas a uma distância destes que permita evitar qualquer acidente.", "Pela direita das faixas de rodagem e o mais próximo possível das bermas ou passeios mas a uma distância destes que permita evitar qualquer acidente.", "Pela esquerda das faixas de rodagem e o mais longe possível das bermas ou passeios mas a uma distância destes que permita evitar qualquer acidente.", "Pela direita das faixas de rodagem e o mais próximo possível das bermas ou passeios mas a uma distância destes que não permita evitar qualquer acidente.",]
  },
  {
    q : "A recolha de informação é afectada pela condução nocturna. Assim, de noite devo:",
    a : ["Moderar a velocidade.", "Manter a mesma velocidade.", "Circular muito devagar.", "Aumentar um pouco a velocidade.",]
  },
  {
    q : "A definição de faixa de rodagem é:",
    a : ["Parte da via pública especialmente destinada ao trânsito de veículos.", "Parte da via pública com três sentidos.", "Toda a via pública especialmente destinada ao trânsito de veículos.", "Parte da via pública especialmente destinada ao trânsito de peões.",]
  },
  {
    q : "A aquaplanagem (hidroplanagem) pode ocorrer:",
    a : ["Se eu não adaptar a velocidade as condições do piso.", "Apenas com pneus lisos.​", "Em todas as condições ambientais adversas a condução.", "Somente quando está chover intensamente.",]
  },
  {
    q : "O comportamento dos peões deve despertar a nossa atenção?",
    a : ["Sim, sempre e em todas situações.", "Sim, só nos locais destinados á sua travessia", "Sim, apenas em circulação urbana.", "Não, quem deve prestar atenção aos veículos são os peões.",]
  },
  {
    q : "Qual pode se a consequência da fadiga na condução?",
    a : ["Diminuição da vigilância em relação ao meio envolvente.", "Diminuição da distância de paragem.", "Maior rapidez dos reflexos.", "Diminuição do tempo de reacção.",]
  } ,
  {
    q : "Quem exceder de 30 Km/h a 60 Km/h de velocidade (automóveis ligeiros e motociclos) os limites, fora das localidades é punido:",
    a : ["Com multa de 2.000,00 Mt e contravenção média.", "Com multa de 2.000,00 Mt e contravenção leve.", "Com multa de 2.000,00 Mt e contravenção grave.", "Com multa de 3.000,00 Mt e contravenção média.",]
  },
  {
    q : "Para ter a posição mais correcta, o condutor deve ter em conta:",
    a : ["A morfologia física, a utilização eficaz dos controlos e comandos e a segurança e o conforto do condutor:", "O ajuste do cinto de segurança e a fácil regulação dos espelhos retrovisores.", "O tipo de via onde transita e as condições adversas.",]
  },
  {
    q : "O estado de alerta do condutor, é influenciado pela fadiga, afetando a forma como:",
    a : ["O condutor recolhe as informações relevantes do ambiente rodoviário.", "O veículo se comporta no ambiente rodoviário.", "O condutor realiza a manobra de ultrapassagem.",]
  },
  {
    q : "O que é força centrípeta?",
    a : ["Ė de sentido contrário ao da força centrifuga.", "Só ocorre nos veículos pesados.", "Ė igual  á força centrifuga.", "Só ocorre quando o veículo vai em linha recta.",]
  } ,
  {
    q : "Como é punida a colocação de obstáculos que possam impedir ou embaraçar o trânsito e comprometer a segurança e comodidade dos utentes da via?",
    a : ["Multa de 1. 000.00 Mt.", "Multa de 3.000.00 Mt.", "Multa de 500.00 Mt.", "Multa 2.000.00 Mt.",]
  },
  {
    q : "Os condutores não podem exceder as seguintes velocidades instantâneas (em quilómetros/hora):",
    a : ["Automóveis ligeiros de passageiros e mistos com reboque dentro das localidades 60, fora das localidades 100.", "Automóveis ligeiros de passageiros e mistos com reboque dentro das localidades 60, fora das localidades 80.", "Automóveis ligeiros de passageiros e mistos com reboque dentro das localidades 50, fora das localidades 90.", "Automóveis ligeiros de passageiros e mistos com reboque dentro das localidades 50, fora das localidades 100.",]
  },
  {
    q : "O condutor determina qual é a resposta motora a executar, em que processo da tarefa da condução.",
    a : ["Decisão", "Recolha.", "Antecipação.", "Previsão.",]
  },
  {
    q : "O calor excessivo é prejudicial:",
    a : ["Para o condutor e também para o veículo.", "Para o veículo mas não para o condutor.", "Para o condutor mas não para o veículo.", "Não afecta a condução",]
  } ,
  {
    q : "Entende-se por tarefa de condução aquela que tem como principal objectivo:",
    a : ["O controlo de um veículo e do espaço envolvente.", "O controlo do trânsito e dos sinais dos outros condutores.", "O autocontrolo no trânsito.",]
  },
  {
    q : "Como devo actuar perante a diminuição da aderência, que provoca o aumento da distância de travagem?",
    a : ["Diminuir a velocidade.", "Aumentar a velocidade.", "Manter a velocidade.", "A diminuição da aderência diminui a distância de travagem.",]
  },
  {
    q : "Em caso de nevoeiro (cacimba) os 4 piscas ou luzes de emergência só devem ser utilizados:",
    a : ["Se o veículo estiver imobilizado, a circular a velocidades muito baixas ou quando fizer uma travagem forte e repentina.", "Quando o veículo circular a uma velocidade moderada.", "Devem ser usadas sempre.", "Sempre que mudar de direcção ou iniciar uma ultrapassagem.",]
  },
  {
    q : "A definição de inversão do sentido da marcha é:",
    a : ["Manobra através da qual o condutor coloca o veículo em sentido oposto, na mesma direcção.", "Manobra através da qual o condutor coloca o veículo no mesmo sentido e na mesma direcção.", "Manobra através da qual o condutor coloca o veículo no mesmo sentido.", "Manobra através da qual o condutor coloca o veículo no mesmo sentido, em direcção oposta.",]
  } ,
  {
    q : "Como deve colocar os sinais de pré-sinalização de perigo, se o veículo avariado fica imobilizado num local onde não é visível a 100 metros de distância?",
    a : ["A frente e à retaguarda do veículo, a uma distância não inferior a 30 metros.", "A frente e à retaguarda do veículo, a uma distância de 10 metros.", "Não e necessário colocá-los nesta situação.", "Só um pela retaguarda do veículo a uma distância de 50 metros.",]
  },
  {
    q : "Depois de ter tomado bebidas alcoólicas, o processo de absorção começa:",
    a : ["Imediatamente.", "Trinta minutos depois.", "Duas horas depois.", "Depois de 24h",]
  },
  {
    q : "Parar ou estacionar, é proibido:",
    a : ["Na faixa de rodagem sempre que esteja sinalizada com linha longitudinal contínua e a distância entre esta e o veiculo seja inferior a 3 metros.", "Na faixa de rodagem sempre que esteja sinalizada com linha longitudinal contínua e a distância entre esta e o veículo seja inferior a 5 metros.", "Na faixa de rodagem sempre que esteja sinalizada com linha longitudinal contínua e a distância entre esta e o veículo seja inferior a 2 metros.", "Na faixa de rodagem sempre que esteja sinalizada com linha longitudinal contínua e a distância entre esta e o veículo seja inferior a 1 metros.",]
  },
  {
    q : "As ordens dos agentes reguladores do trânsito",
    a : ["Prevalecem sobre as prescrições resultantes dos sinais e sobre as regras de trânsito", "Não prevalecem sobre as prescrições resultantes dos sinais e sobre as regras de trânsito.", "Só prevalecem sobre as prescrições resultantes dos sinais quando exista sinalização vertical.", "Prevalecem sobre as prescrições resultantes dos sinais e nunca sobre as regras de trânsito.",]
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



