// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Fora das localidades, a paragem e o estacionamento devem fazer-se:",
    a : ["Fora das faixas de rodagem.", "Só nos locais especialmente destinados para esse efeito e pela forma indicada.", "Nas faixas de rodagem, sendo possível fazê-lo fora delas.", "Na via de trânsito da esquerda",]
  },
  {
    q : "Que entende-se por dever?",
    a : ["A obrigação moral de proceder de acordo com as normas e a consciência.", "A intenção de iniciar a marcha sem a devida sinalização.", "A obrigação de avançar rapidamente, logo que o sinal verde do semáforo assim o permita.",]
  },
  {
    q : "O que indica a marca rodoviária amarela área facil de congestionar:",
    a : ["Cruzamento ou entroncamento facilmente congestionáveis.", "Faixa de sentido reversível.", "Redução de filas de trânsito.",]
  },
  {
    q : "Em caso de emergência, deve utilizar o colete reflector:",
    a : ["Antes de colocar os triângulos de pré-sinalização de perigo.", "Só quando estiver a reparar o veículo.", "Só quando proceda a remoção da carga.", "Não é obrigatório, mas e aconselhável.",]
  },
  {
    q : "O ordenamento do trânsito em todas as estradas, compete:",
    a : ["Instituto nacional de transportes terrestres", "aos corpos Administrativos ou Conselhos Municipal.", "á Policia de Trânsito.", "á Policia Municipal.",]
  },
  {
    q : "Que deve fazer o condutor perante a marca rodoviária de cor branca, eixo da via descontinuado?",
    a : ["Manter-se na via de trânsito que ela delimita, só podendo ser pisada ou transposta para efectuar manobras.", "Manter-se na via de trânsito que ela delimita, não podendo ser pisada ou transposta.", "Manter-se na via de trânsito que ela delimita, devendo abrandar a marcha.",]
  },
  {
    q : "A maioria dos acidentes de trânsito são devidos:",
    a : ["às pessoas", "às condições meteorológicas ou ambientais.", "às condições do veículo.", "às condições da estrada.",]
  },
  {
    q : "Ao ligar as luzes, se no painel aparecer o símbolo do farol de cor verde, significa que estão ligadas:",
    a : ["As luzes de cruzamento (médios).", "As luzes de estrada (máximos).", "As luzes mínimas.",]
  },
  {
    q : "Num automóvel, é obrigatório a utilização de cintos de segurança:",
    a : ["Dentro e fora das localidades.", "Apenas fora das localidades.", "Apenas dentro das localidades.",]
  } ,
  {
    q : "O socorrista, na avaliação do grau de consciência deve:",
    a : ["Abanar levemente a vitima ao nível dos ombros e falar com ela, questionando se esta a ouvir, esta a sentir-se bem, onde esta, como se chama, que dia é hoje.", "Ver os movimentos do tórax e do abdómen.", "Sentir o ar expirado, encostando a sua face ao nariz e boca da vitima.",]
  },
  {
    q : "Um condutor distraído:",
    a : ["Tem um tempo de reacção mais longo.", "Tem o mesmo tempo de reacção que qualquer condutor.", "Tem um tempo de reacção mais reduzido.",]
  },
  {
    q : "Os sistemas de segurança activa de um veículo:",
    a : ["ajudam o condutor a reduzir a possibilidade de ter um acidente.", "minimizam as lesões em caso de acidente.", "eliminam a possibilidade de sofrer lesões em caso da acidente.",]
  },
  {
    q : "Com o fim de ter a uma boa capacidade de manobra e garantir o bom funcionamento dos sistemas de segurança do veículo, o condutor deve regular o assento.",
    a : ["por forma a que as pernas e braços fiquem ligeiramente fletidos.", "por forma a ficar longe do volante, com as pernas e braços esticados.", "por forma a ficar muito próximo do volante, com as pernas e braços encolhidos.",]
  } ,
  {
    q : "Entende-se por cidadania:",
    a : ["O conjunto de valores sociais que determinam o conjunto de deveres e direitos de um cidadão.", "O princípio que permite avançar em primeiro lugar num cruzamento não sinalizado.", "A nacionalidade de um cidadão que o identifica como tal.",]
  },
  {
    q : "Se o condutor consome álcool, em que momento aumenta o risco de acidente?",
    a : ["Antes de superar o limite legal permitido.", "Depois de superar o limite legal permitido.", "Só quando o consome com substâncias psicotrópicas.", "Só quando é tomado com medicamentos.",]
  },
  {
    q : "Os sistemas de segurança passiva dos veículos:",
    a : ["devem ser utilizados corretamente, porque o seu mau uso pode ser perigoso.", "evitam os acidentes.", "tem uma manutenção muito cara e complexa.", "não são eficazes para reduzir as consequências dos acidentes.",]
  },
  {
    q : "Deve ter alguma precaução especial quando circula dentro das localidades?",
    a : ["Sim, moderar a velocidade, especialmente nas vias marginadas por edificações.", "Sim, utilizar os sinais sonoros quando se aproximar de peões.", "Sim, apenas não ficar imobilizado nos cruzamentos ou entroncamentos.", "Não",]
  } ,
  {
    q : "A carta de condução, tem tempo de validade?",
    a : ["Sim, cinco anos para as categorias A1, A, B, C1 e C.", "Sim, dois anos para as categorias A1, A, B, C1 e C.", "Não", "Só  as sub categorias P, D e G.",]
  },
  {
    q : "Perante a luz verde de um semáforo:",
    a : ["Regra geral, deve avançar.", "Regra geral, deve parar", "É obrigado a avançar.",]
  },
  {
    q : "Onde é proibido realizar uma ultrapassagem?",
    a : ["Nos cruzamentos e entroncamentos em que não tenha prioridade de passagem.", "Em todos os cruzamentos e entroncamentos.", "Nas auto-estradas.", "Nas auto-estradas.",]
  },
  {
    q : "Devem utilizar os cintos de segurança os passageiros que viajam no veículo?",
    a : ["Sim, tanto os que ocupem o banco da frente como o da retaguarda.", "Não, só é obrigatório para o condutor.", "Só fora das localidades", "Só os que ocupem o banco da frente.",]
  } ,
  {
    q : "Num cruzamento de vias, posso ultrapassar?",
    a : ["Sim, se tiver prioridade no cruzamento.", "Sim, mas só aos veículos que mudam de direcção para a direita.", "Não", "Sim, mas só aos veículos de duas rodas.",]
  },
  {
    q : "A marcha atrás:",
    a : ["só é permitida como manobra auxiliar ou de recurso.", "é permitida nas auto-estradas.", "é permitida durante a circulação normal do veículo.", "é permitida nas pontes, passagens de nível e tuneis.",]
  },
  {
    q : "A luz indicadora de mudança de direcção a direita acionada ao iniciar uma ultrapassagem, só deve ser desligada:",
    a : ["Quando termine de mudar de via de trânsito.", "uma vez finalizada a ultrapassagem.", "antes de mudar de via de trânsito.", "só depois de percorrer uma distancia de 500 metros.",]
  },
  {
    q : "São evitaveis os acidentes de viação?",
    a : ["Sim, podemos aprender a evita-los e a reduzir as suas consequências", "Sim, excepto os causados pelo mau estado dos pneus.", "Não, porque os acidentes ocorrem por acaso.", "Sim, mas só se o estado das estradas melhorar.",]
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



