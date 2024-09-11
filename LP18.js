// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "Para garantir o equilíbrio do veículo, uma das formas é fazer uma correcta distribuição da carga.",
    a : ["Certo.", "É importante mas só nos veículos de mercadorias.", "Errado", "Se a carga for colocada no porta-bagagens não é importante para o equilíbrio do veículo.",]
  },
  {
    q : "Os estados de fadiga podem tornar as pessoas mais:",
    a : ["Irritadiças diminuindo lhes a capacidade para se concentrarem e para tomarem decisões.", "Atentas, dado que para combater a fadiga têm tendência a aumentar os níveis de atenção.", "Pacientes, aumentando-lhes a capacidade para se concentrarem e para tomarem decisões.", "Amáveis, aumentando-lhes a capacidade para se concentrarem e para tomarem decisões.",]
  },
  {
    q : "A definição de passagem de nível é:",
    a : ["Local de intersecção ao mesmo nível de uma via pública ou equiparada com linhas ou ramais ferroviários.", "Local de cruzamento desnivelado de uma via pública ou equiparada com linhas ou ramais ferroviários.", "Local de intersecção desnivelado de uma via pública ou equiparada com linhas ou ramais ferroviários.", "Local de intersecção ao mesmo nível de uma via privada ou equiparada com linhas ou ramais ferroviários.",]
  },
  {
    q : "Quando os pneus tem uma pressão incorrecta:",
    a : ["Desgastam-se mais e correm maior risco de rebentar.", "Desgastam-se menos e tem menos riscos de rebentar.", "Melhora a estabilidade do veículo e o seu conforto.", "Consome-se menos combustível.",]
  },
  {
    q : "Sempre que o veículo esteja parado ou estacionado do lado esquerdo da faixa de rodagem...",
    a : ["Sempre que o veículo esteja parado ou estacionado do lado esquerdo da faixa de rodagem...", "os passageiros não podem sair do veículo.", "o condutor deve entrar e sair pelo lado esquerdo do veículo.", "os passageiros devem entrar e sair pelo lado direito do veículo.",]
  },
  {
    q : "Perante o aparecimento inesperado de um obstáculo na via, o que ocorre até o condutor travar?",
    a : ["Tempo de reacção e distância reacção.", "Distância de reacção distância de paragem.", "Tempo de reacção e distância de paragem.",]
  },
  {
    q : "Se pretende fazer a inversão do sentido de marcha deve ter em conta que:",
    a : ["A manobra deve ser feita em local e de forma a não prejudicar o trânsito", "É proibido fazê-lo em todos os cruzamentos e entroncamentos", "Só é permitido apenas em cruzamentos e entroncamentos", "Só é permitido faze-lo nas rotundas.",]
  },
  {
    q : "A definição de localidade é:",
    a : ["Zona com edificações cujos limites são devidamente sinalizados.", "Zona regional cujos limites são sinalizados com sinalização luminosa.", "Zona com edificações cujos limites não são sinalizados.", "Zona urbana cujos limites não são sinalizados.",]
  },
  {
    q : "Os veículos e animais podem atravessar bermas ou passeios?",
    a : ["Podem, desde que o acesso aos prédios o exija, menos nas excepções previstas nos regulamentos locais.", "Podem, sempre que não haja sinalização a proibir.", "Não podem nunca.", "Não podem nunca.",]
  } ,
  {
    q : "Os peões para atravessar a faixa de rodagem:",
    a : ["Devem certificar-se de que a distância e velocidade dos veículos, permite fazê-losem perigo de acidente.", "Podem fazê-lo sem utilizar as passagens para peões, se não existe nenhuma a uma distância inferior a 10 metros.", "Estão sempre obrigados a utilizar a passagem desnivelada para peões.", "Têm sempre prioridade de passagem.",]
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
      quiz.hQns.innerHTML = `Sua nota foi de ${quiz.score} acertos, de ${qa.length} questões.         Foi bom, ter chegado até aqui, Continue, e pratique mais vezes! Agora treine os sinais de trânsito... Boa sorte 👍`;
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



