// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Qual o sistema de alimentação atual do motor que veio substituir o carburador?",
    a : ["É o sistema de injeção eletrónica de combustível.", "É o sistema de alimentação por gravidade.", "É o sistema de alimentação por burrinho.",]
  },
  {
    q : "Manga de eixo e barra transversal pertencem:",
    a : ["Ao sistema de direção.", "À caixa de velocidades.", "Ao sistema de transmissão", "Ao sistema de suspensão.",]
  },
  {
    q : "Num automóvel com tração traseira, como se chama o veio que fica entre o diferencial e a caixa de velocidade?",
    a : ["Veio de transmissão.", "Veio de excêntricos.", "Veio de balanceiros.", "Veio primário.",]
  },
  {
    q : "As avarias mais frequentes na bateria, são:",
    a : ["Elementos avariados.", "Escovas e elementos avariados.", "Fusíveis e elementos avariados.",]
  },
  {
    q : "A mola existente nas maxilas dos travões tem a função de:",
    a : ["Afastar do tambor as maxilas e os respetivos calços.", "Aumentar a força de travagem.", "Pressionar as maxilas e os respetivos calços contra o tambor.",]
  },
  {
    q : "Qual dos seguintes órgãos pertence ao sistema de suspensão?",
    a : ["Barra de torção.", "Prato de pressão", "Manga de eixo.", "Pinhão e cremalheira.",]
  },
  {
    q : "Os órgãos que servem para impedir a passagem dos gases da câmara de explosão para o cárter são:",
    a : ["Os segmentos.", "Os êmbolos", "As válvulas.",]
  },
  {
    q : "Num automóvel para extinguir um incêndio provocado por um curto-circuito, o condutor deve:",
    a : ["Desligar a ignição e utilizar um extintor de incêndio..", "Desligar a ignição e utilizar água com óleo.", "Desligar a ignição e utilizar água, unicamente.",]
  },
  {
    q : "Quando transportar uma carga de pequeno volume, cujo peso seja igual à capacidade de carga máxima do veículo, deve colocá-la:",
    a : ["No centro da caixa de carga.", "Sobre o eixo traseiro.", "Junto à cabine.",]
  } ,
  {
    q : "Sempre que se substitui um fusível este funde. Qual poderá ser a causa?",
    a : ["Curto-circuito..", "Um dos fios do circuito elétrico partido.", "Uma lâmpada fundida.", "Bateria com excesso de carga.",]
  },
  {
    q : "Num automóvel equipado com motor Diesel, se verificar pela saida do tubo de escape gases de cor preta a causa pode ser:",
    a : ["Injetores mal regulados.", "Excesso de ar de admissão.", "Junta do cárter a vedar mal.",]
  },
  {
    q : "Nos travões hidráulicos, as pastilhas são acionadas e pressionadas contra o disco:",
    a : ["Pelos êmbolos dos cilindros.", "Pelo servo-freio.", "Pelos pratos de pressão.", "Pela pressão do ar.",]
  },
  {
    q : "O veio primário da caixa de velocidades recebe o movimento do motor através:",
    a : ["Da embraiagem.", "Da correia de distribuição.", "Da cambota",]
  } ,
  {
    q : "Alinhar a direção significa:",
    a : ["Afinar a convergência ou a divergência das rodas direcionais.", "Regular as folgas da direção.", "Anular todas as folgas da direção.",]
  },
  {
    q : "O dispositivo de acoplamento que em conjunto com um motor elétrico permite que o motor de combustão arranque, denomina-se:",
    a : ["Bendix.", "Veio de excêntricos.", "Carreto de distribuição.",]
  },
  {
    q : "As barras de torção fazem parte do sistema de:",
    a : ["Suspensão.", "Transmissão.", "Direção",]
  },
  {
    q : "Num motor sem termostato a água do sistema de refrigeração:",
    a : ["Demora mais tempo a aquecer.", "Aquece rapidamente.", "Não circula.",]
  } ,
  {
    q : "O sobreaquecimento dos pneus pode ser provocado por:",
    a : ["Pressão muito inferior ao normal.", "Folga na direcção.", "Pressão um pouco superior ao normal.",]
  },
  {
    q : "Como deve ser transportada uma carga pouco volumosa e cujo peso seja igual à capacidade de carga máxima do veículo?",
    a : ["No centro da caixa de carga.", "Centrado sobre o eixo da retaguarda.", "O mais próximo possível da cabina.",]
  },
  {
    q : "Qual o instrumento que permite ao condutor verificar se o alternador está a carregar a bateria?",
    a : ["O voltímetro", "O densímetro", "O amperímetro.", "O manómetro.",]
  },
  {
    q : "Nos motores diesel, se entrar ar para os orgãos de alimentação de combustível, o motor:",
    a : ["Pára por falta de injeção de combustível.", "Fica a trabalhar acelerado.", "Trabalha só ao ralenti",]
  } ,
  {
    q : "Qual a característica mais importante duma direção assistida?",
    a : ["A direção pode ser manejada com pouco esforço do condutor.", "Nunca é necessário proceder à sua lubrificação.", "A direção só pode ser manejada com muito esforço do condutor.",]
  },
  {
    q : "O motor de arranque recebe corrente:",
    a : ["Da bateria.", "Do distribuidor.", "Da bobine.",]
  },
  {
    q : "Nos motores a gasolina, a bobine tem como função transformar a corrente:",
    a : ["De baixa em alta tensão.", "Contínua em alterna.", "De alta em baixa tensão.",]
  },
  {
    q : "Como se verifica se os depósitos dos travões a ar, têm pressão suficiente?",
    a : ["Através do respetivo manómetro.", "Através do termómetro.", "Através do vacuómetro.",]
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



