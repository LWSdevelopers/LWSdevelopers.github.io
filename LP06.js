// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "A linha transversal descontinua, é uma:",
    a : ["Linha de cedência de prioridade", "Linha de paragem obrigatória", "Linha descontínua de aviso",]
  },
  {
    q : "A luz de cruzamento (médios), destina-se a iluminar a via para frente do veículo numa distância até:",
    a : ["30 metros", "60 metros", "50 metros",]
  },
  {
    q : "O que deve fazer o condutor que circula por uma auto-estrada?",
    a : ["Aumentar a distância de segurança, por se seguir a velocidades mais elevadas.", "Diminuir a distância de segurança, por se seguir a velocidades elevadas.", "Circular pela via de trânsito mais a direita, ainda que a via da esquerda se encontre livre de trânsito.",]
  },
  {
    q : "O uso de capacete, protege a cabeça:",
    a : ["é obrigatório para os condutores e passageiros de motociclos e ciclomotores.", "é recomendável para os condutores e passageiros de motociclos, mas não é obrigatório.", "só é obrigatório para os condutores e passageiros de motociclos.",]
  },
  {
    q : "Se durante a marcha detectar um furo num pneu deve:",
    a : ["Retirar o veículo da faixa de rodagem ou, se não o pode fazer, aproxima-lo o mais possível do limite esquerdo desta.", "Imobilizar imediatamente o veículo na faixa de rodagem.", "Prosseguir ainda que seja a uma velocidade muito reduzida.",]
  },
  {
    q : "É necessário regular e ajustar o encosto de cabeça para a altura dos ocupantes?",
    a : ["Sim, porque pode evitar lesões na zona do pescoço.", "Não é necessário, porque e apenas um elemento de conforto.", "Não, se o veículo tiver cintos de segurança.",]
  },
  {
    q : "O que entende por Sanção",
    a : ["O prémio ou castigo anexo as ações humanas.", "A repetição de valores positivos.", "A repetição de valores negativos",]
  },
  {
    q : "Perante a luz verde, não deve avançar:",
    a : ["Quando pela intensidade de trânsito, seja previsível a imobilização no centro da intersecção.", "Quando no passeio existam peões que pretendam iniciar a travessia da faixa de rodagem.", "Quando um agente regulador de trânsito se encontre nas proximidades.",]
  },
  {
    q : "Com a finalidade de verificar as suas características e condições de segurança, os automóveis ligeiros e motociclos devem ser apresentados a inspeção:",
    a : ["quatro anos após a data da matrícula e depois anualmente.", "dois anos após a data da matrícula e depois anualmente.", "dois anos após a data da matrícula, até fazerem quatro anos e depois anualmente.",]
  } ,
  {
    q : "Fora das localidades, os condutores de ciclomotores e quadriciclos, não devem exceder a velocidade instantânea de:",
    a : ["45 km/h", "50 km/h", "35 km/h",]
  },
  {
    q : "O braço esticado para a esquerda, e depois dobrado até a cabeça, o agente regulador manda:",
    a : ["Avançar o tráfego que venha da esquerda.", "Parar o tráfego da direita", "Avançar o tráfego da direita",]
  },
  {
    q : "Podem ser submetidos as provas para a detecção de álcool ou substâncias estupefacientes ou psicotrópicas:",
    a : ["Os peões, sempre que sejam intervenientes em acidentes de trânsito e os condutores.", "Apenas os condutores de veículos automóveis.", "Só os condutores que sejam intervenientes em acidentes de trânsito.",]
  },
  {
    q : "Os sistemas de segurança passiva dos veículos, tem a função de:",
    a : ["Evitar ou reduzir as lesões que podem ocorrer no caso de sofrer um acidente.", "Transmitir uma sensação de segurança quando se circula a velocidades elevadas.", "Evitar os acidentes",]
  } ,
  {
    q : "Se pretender mudar de direção para a direita numa via de sentido único, onde deve posicionar-se?",
    a : ["Na direita da faixa de rodagem", "É indiferente", "Na esquerda da faixa de rodagem",]
  },
  {
    q : "É perigoso utilizar o telefone móvel durante a condução?",
    a : ["Sim, porque reduz a atenção necessária para conduzir com segurança.", "Sim, mas só quando se utilizar um aparelho mãos livres.", "Não, quando a conversa não durar muito tempo.",]
  },
  {
    q : "Qual e a função do cinto de segurança de um veículo?",
    a : ["Reter e proteger os ocupantes numa colisão.", "Permitir que os ocupantes se desloquem sobre o assento em caso de acidente.", "Manter os ocupantes sentados na posição correta.",]
  },
  {
    q : "O que deve fazer o condutor que circula por uma auto-estrada?",
    a : ["Aumentar a distância de segurança, por se seguir a velocidades mais elevadas.", "Diminuir a distância de segurança, por se seguir a velocidades elevadas.", "Circular pela via de trânsito mais a direita, ainda que a via da esquerda se encontre livre de trânsito.",]
  } ,
  {
    q : "Que deve fazer o condutor de um veículo avariado enquanto não for devidamente estacionado ou removido?",
    a : ["Adoptar as medidas necessárias para que os outros se apercebam da sua presença.", "Colocar um sinal de pré-sinalização de perigo 10 metros a retaguarda do veículo.", "Colocar os sinais de pré-sinalização de perigo e depois vestir o colete reflector.",]
  },
  {
    q : "Que sinais indicam que o condutor esta fatigado?",
    a : ["Bocejos e desconforto no pescoço e nas costas.", "Alta precisão e eficácia ao efectuar as manobras.", "Relaxamento dos músculos do pescoço e das costas.",]
  },
  {
    q : "O que entende-se por liberdade?",
    a : ["O poder que o Homem tem de agir, de praticar uma ação sem qualquer pressão ou constrangimento.", "Faculdade de num cruzamento não sinalizado, avançar sem observar a regra de prioridade.", "A condução de veículos automóveis por longos períodos de tempo.",]
  },
  {
    q : "As ultrapassagens devem fazer-se:",
    a : ["pela direita dos veículos ou animais.", "pela direita ou pela esquerda, se houver espaço suficiente na berma.", "nas curvas de visibilidade reduzida.",]
  } ,
  {
    q : "Um torniquete é",
    a : ["uma tira larga de pano, amarrada firmemente em torno de um membro.", "um pedaço de papel onde se menciona a parte do corpo que foi amarrada.", "uma pega de madeira, utilizada para aliviar a dor da vitima de acidente.",]
  },
  {
    q : "Que veículos devem ter o seguro de responsabilidade civil para transitar na via pública?",
    a : ["Os veículos a motor.", "Apenas os veículos automóveis.", "Só os ciclomotores.",]
  },
  {
    q : "Ė necessário verificar com frequência o sistema de iluminação?",
    a : ["Sim, para se assegurar que todas as luzes funcionam e que os faróis estão bem regulados.", "Não, é suficiente a revisão na inspeção periódica obrigatória.", "Não, porque se deve fazer unicamente numa oficina.",]
  },
  {
    q : "A luz de estrada, destina-se a iluminar a via para frente do veículo numa distância:",
    a : ["Não, inferior a 100 metros", "Não inferior a 50 metros", "Não inferior a 150 metros",]
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



