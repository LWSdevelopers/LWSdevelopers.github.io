// (PART A) QUESTIONS & ANSWERS - THE FIRST ANSWER IS THE CORRECT ONE
const qa = [
  {
    q : "O trânsito de veículos ou de animais é feito:",
    a : ["pela esquerda das faixas de rodagem e o mais próximo possível das bermas ou passeios, mas a uma distância destes que permita evitar qualquer acidente.", "do lado direito das faixas de rodagem e o mais próximo possível das bermas ou passeios.", "Próximo do eixo da via",]
  },
  {
    q : "As luzes de travagem dos automóveis tem a cor:",
    a : ["Vermelha", "Branca ou amarela", "Amarelada ou alaranjada",]
  },
  {
    q : "Entende-se por visibilidade reduzida ou insuficiente, quando o condutor não possa avistar a faixa de rodagem em toda a sua largura numa extensão de:",
    a : ["Pelo menos, 50 metros.", "Pelo menos, 100 metros.", "Pelo menos, 200 metros.", "Pelo menos, 25 metros.",]
  },
  {
    q : "Que comunica o condutor aos outros utentes da via?",
    a : ["Que pode fazer a ultrapassagem.", "Que pare", "Que afrouxe",]
  },
  {
    q : "Uma das consequências de aumentar a velocidade, é que:",
    a : ["aumenta a gravidade das lesões em caso de acidente.", "Reduz as distrações", "Reduz a distância de travagem", "Melhora o tempo de reação",]
  },
  {
    q : "As doenças e os medicamentos, podem ser a causa de um acidente rodoviário?",
    a : ["Sim, porque podem afectar a capacidade para conduzir com segurança.", "Sim, exceto as gripes, constipações ou alergias.", "Não, porque os acidentes dependem de outros factores.", "Sim, exceto quando um medico tenha feito a receita.",]
  },
  {
    q : "O que comunica o condutor aos outros utentes da via, ao balançar o braço,(cima/baixo) com a mão esticada para fora?",
    a : ["Que vai reduzir a velocidade.", "Que vai voltar para o lado direito do volante.", "Que vai voltar para o lado esquerdo do volante.",]
  },
  {
    q : "É obrigatório sinalizar o veiculo quando esteja a ser rebocado?",
    a : ["Sim, com as luzes de perigo ou, não sendo possível, com as luzes de presença.", "Não é obrigatório, mas é aconselhável utilizar as luzes de perigo.", "Sim, com as luzes de presença, em todos os casos.",]
  },
  {
    q : "No mesmo sentido, e com duas filas de trânsito, por que via de trânsito deve circular nessa situação?",
    a : ["Pela via mais à esquerda podendo utilizar outra para ultrapassar ou mudar de direção.", "É indiferente, uma vez que a via não esta congestionada.", "Pela via mais conveniente ao seu destino.",]
  } ,
  {
    q : "É a via pública um espaço destinado ao trânsito de peões?",
    a : ["Sim, de peões e de veículos", "Sim, mas só de dia", "Não, na via pública só podem transitar veículos",]
  },
  {
    q : "A pressão dos pneus, deve ser verificada:",
    a : ["Regularmente", "Uma vez ao ano", "Apenas quando o veículo e sujeito a Inspeção Periódica obrigatória.",]
  },
  {
    q : "Onde é o local mais seguro para instalar no veículo um sistema de retenção para crianças?",
    a : ["No assento central traseiro, já que é menos afectado pelos impactos laterais.", "No banco da frente, para que o condutor possa observar a criança.", "Qualquer assento, pois todos são igualmente seguros.",]
  },
  {
    q : "Nas auto-estradas, é proibido circular a velocidade inferior a:",
    a : ["40 km/h", "50 km/h", "30 km/h", "70 km/h",]
  } ,
  {
    q : "Considera-se morte por acidente de viação:",
    a : ["Aquela que ocorre até 30 dias apos o registo do sinistro.", "Aquela que ocorre 30 dias depois do registo do sinistro.", "Só aquela que ocorre no local do acidente",]
  },
  {
    q : "Atirar do veículo ou abandonar na via objetos ou substancias, constitui contravenção:",
    a : ["Média", "Leve", "Grave",]
  },
  {
    q : "Ao aproximar-se de uma passagem para peões, o condutor deve:",
    a : ["reduzir a velocidade e parar para deixar passar os peões que já tenham iniciado a travessia da faixa de rodagem.", "fazer sinais com a mão aos peões que esperam para iniciar a travessia.", "buzinar para que os peões não continuem o atravessamento.",]
  },
  {
    q : "Entende-se por automóvel ligeiro:",
    a : ["O automóvel com PB até 3500 kg e com lotação não superior a 9 lugares, incluindo o condutor.", "Todos os automóveis até ao peso de 4500 kg.", "O automóvel cuja lotação não excede os 8 lugares.",]
  } ,
  {
    q : "A distancia percorrida desde que o condutor identifica um perigo até que o veiculo pare completamente:",
    a : ["é maior quanto maior for a velocidade.", "só varia se o veículo ou a via estão em mau estado.", "depende apenas do estado do condutor.", "depende apenas do estado dos travões.",]
  },
  {
    q : "Se estacionar o veículo na faixa de rodagem desde anoitecer até ao amanhecer, deve utilizar alguma luz?",
    a : ["Sim, as de presença (mínimos), se a iluminação não permite reconhecer o veículo a 100 metros.", "Sim, as de cruzamento (médios), se a iluminação não permite reconhecer o veículo a 100 metros.", "Não, mesmo que seja num local sem iluminação.",]
  },
  {
    q : "De modo geral, como são sinalizadas as lombas, no pavimento?",
    a : ["De marca rodoviária branca", "De marca rodoviária amarela",]
  },
  {
    q : "Que veículo deve retroceder para dar passagem ao outro, numa passagen estreita sem sinalização onde nao seja possivel efectuar o cruzamento?",
    a : ["O veículo que esta mais próximo do local em que o cruzamento seja possível.", "O veículo que desce se for numa via de inclinação acentuada.", "O veículo mais pesado",]
  } ,
  {
    q : "Um sinal redondo, borda vermelha, fundo branco, prescrição preta de 80 ao centro, indica:",
    a : ["Circular a uma velocidade que vá até os 80 km/h.", "Transitar com veículos cujo peso total não ultrapasse 80 toneladas.", "Circular acima de 80 km/h",]
  },
  {
    q : "Numa auto-estrada, pode-se inverter o sentido de marcha?",
    a : ["Nunca", "Sempre que possível", "Sim, se a manobra for feita lentamente",]
  },
  {
    q : "Os peões para atravessar a faixa de rodagem:",
    a : ["devem certificar-se de que a distância e velocidade dos veículos, permite fazê-lo sem perigo de acidente.", "podem  fazê-lo sem utilizar as passagens para peões, se não existe nenhuma a uma distância inferior a 10 m.", "estão sempre obrigados a utilizar a passagem desnivelada para peões.",]
  },
  {
    q : "Na medida que aumenta a velocidade:",
    a : ["reduz-se o campo de visão do condutor e aumenta a fadiga.", "melhora a capacidade de controlar o veículo nas situações de emergência.", "aumenta o campo de visão do condutor.",]
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



