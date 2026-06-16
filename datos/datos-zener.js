const preguntasZener = [
    {
    id: "1",
    enunciado: "Ubique los valores característicos de la curva de zener donde corresponda",
    tipo: "imagen-zonas",
    img: "../img/curva_zener.webp",
    zonas: [
        { top: "34%", left: "19%", correcta: "Vz", opciones: ["Vz", "Iz mín", "I_fuga", "Iz máx", "Pmáx"] },
        { top: "48%", left: "80.8%", correcta: "Iz mín", opciones: ["Vz", "Iz mín", "I_fuga", "Iz máx", "Pmáx"] },
        { top: "63.3%", left: "43.5%", correcta: "I_fuga", opciones: ["Vz", "Iz mín", "I_fuga", "Iz máx", "Pmáx"] },
        { top: "80%", left: "81.3%", correcta: "Iz máx", opciones: ["Vz", "Iz mín", "I_fuga", "Iz máx", "Pmáx"] },
        { top: "90.5%", left: "30.5%", correcta: "Pmáx", opciones: ["Vz", "Iz mín", "I_fuga", "Iz máx", "Pmáx"] }
    ]
    },
    {
        id: "2",
        enunciado: "Complete con la secuencia correcta para una fuente de alimentación básica",
        tipo: "secuencia",
        pool: ["rectificador", "carga", "regulador", "transformador", "filtro"], 
        correcta: ["transformador", "rectificador", "filtro", "regulador", "carga"]
    },
    {
        id: "3",
        enunciado: "¿Qué es un diodo Zener?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "un diodo rectificador rápido" },
            { val: "b", txt: "un diodo especial capaz de funcionar en la zona de ruptura", esOk: true },
            { val: "c", txt: "un diodo de uso general lento" },
            { val: "d", txt: "un diodo tipo Schottky" },
            { val: "e", txt: "un diodo que no sirve para regular" }
        ],
    },
    {
        id: "4",
        enunciado: "¿Qué parámetros necesito conocer para adquirir un diodo Zener?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "corriente de fuga y tiempo de respuesta" },
            { val: "b", txt: "tensión Zener y potencia", esOk: true },
            { val: "c", txt: "tensión Zener y corriente" },
            { val: "d", txt: "tensión Zener y polaridad" },
            { val: "e", txt: "tensión Zener y tiempo de respuesta" }
        ],
    },
    {
        id: "5",
        enunciado: "¿Qué se incluye en el circuito equivalente más completo del diodo Zener?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "material semiconductor" },
            { val: "b", txt: "dos fuentes de continua en serie" },
            { val: "c", txt: "únicamente una batería" },
            { val: "d", txt: "una batería y un resistor", esOk: true },
            { val: "e", txt: "un diodo en directa" }
        ],
    },
    {
        id: "6",
        enunciado: "La resistencia mínima de polarización del zener me limita:",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "La corriente mínima que circula por el zener" },
            { val: "b", txt: "La corriente máxima que circula por el zener", esOk: true },
            { val: "c", txt: "La corriente mínima que circula por la carga" },
            { val: "d", txt: "La corriente máxima que circula por el carga" },
            { val: "e", txt: "La corriente total de la fuente" }
        ],
    },
    {
        id: "7",
        enunciado: "Los diodos zener se pueden utilizar como reguladores de tensión, por ello también se los conocen como reguladores en ____",
        tipo: "texto",
        respuestaTexto: "paralelo"
    },
    {
        id: "8",
        enunciado: "Cómo se caracteriza un diodo zener:",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "Por la corriente máxima en directa y la tensión de zener" },
            { val: "b", txt: "Por la corriente de polarización y la potencia máxima" },
            { val: "c", txt: "Por la tensión de zener y el coeficiente de temperatura" },
            { val: "d", txt: "Por la potencia máxima y la tensión de zener", esOk: true },
        ],
    },
    {
        id: "9",
        enunciado: "Para que un circuito integrado LM78xx pueda regular la tensión de salida, la tensión de entrada debe ser por lo menos __ V mayor a la tensión de salida.",
        tipo: "texto",
        respuestaTexto: "2"
    },
    {
        id: "12",
        enunciado: "Utilizando un factor de forma ________ como aproximación para el cálculo del ripple se obtiene un valor más cercano al real.",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "trapezoidal decreciente" },
            { val: "b", txt: "hexagonal invertido" },
            { val: "c", txt: "sinusoidal" },
            { val: "d", txt: "triangular", esOk: true },
        ],
    },
    {
        id: "13",
        enunciado: "Utilizando un factor de forma ________ como aproximación para el cálculo del ripple se obtiene un filtro que produce un ripple menor al de las otras aproximaciones.",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "trapezoidal decreciente" },
            { val: "b", txt: "triangular" },
            { val: "c", txt: "hexagonal invertido" },
            { val: "d", txt: "sinusoidal", esOk: true },
        ],
    },
    {
        id: "14",
        enunciado: "Los diodos zener están diseñado para trabajar en polarización:",
        tipo: "texto",
        respuestaTexto: "Inversa"
    },
    {
        id: "15",
        enunciado: "Para seleccionar un diodo zener el primer parámetro a considerar es la tensión de:",
        tipo: "texto",
        respuestaTexto: "Zener"
    },
    {
        id: "16",
        enunciado: "Para que un circuito integrado LM78xx pueda regular la tensión de salida, la tensión de entrada debe ser por lo menos:",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "igual a la tensión" },
            { val: "b", txt: "igual a la caída de tensión en el capacitor", },
            { val: "c", txt: "2 a 3 V mayor a la tensión de salida", esOk: true },
            { val: "d", txt: "2 a 3 V menor a la tensión del capacitor" },
            { val: "e", txt: "superior a la caída en los diodos" }
        ],
    },
    {
        id: "18",
        enunciado: "¿Qué factor de ripple tiene una fuente 220 V/24 V con rectificador de media onda y filtro capacitivo de 2200 µF, que entrega una corriente de I = 400 mA?<br>Utilizar aproximación sinusoidal. Expresar el resultado como porcentaje.",
        tipo: "texto",
        respuestaTexto: "5,36 %",
		explicacion: `
			<math display="block" class="tml-display" style="display:block math;"><mstyle mathsize="1.2000em"><mtext>Factor de Ripple</mtext><mo>=</mo><mfrac><mfrac><msub><mi>I</mi><mrow><mi>o</mi><mi>u</mi><mi>t</mi></mrow></msub><mrow><mn>2</mn><mo>⋅</mo><msqrt><mn>2</mn></msqrt><mo>⋅</mo><mi>f</mi><mo>⋅</mo><mi>C</mi></mrow></mfrac><msub><mi>V</mi><mrow><mi>s</mi><mi>a</mi><mi>l</mi></mrow></msub></mfrac><mo>⋅</mo><mn>100</mn><mo>=</mo><mfrac><mfrac><mrow><mn>400</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mo form="prefix" stretchy="false" lspace="0em" rspace="0em">−</mo><mn>3</mn></mrow></msup><mi>A</mi></mrow><mrow><mn>2</mn><mo>⋅</mo><msqrt><mn>2</mn></msqrt><mo>⋅</mo><mn>50</mn><mtext> </mtext><mtext>hz</mtext><mo>⋅</mo><mn>2200</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mo form="prefix" stretchy="false" lspace="0em" rspace="0em">−</mo><mn>6</mn></mrow></msup><mi>F</mi></mrow></mfrac><mrow><mn>24</mn><mtext> </mtext><mi>V</mi></mrow></mfrac><mo>⋅</mo><mn>100</mn><mo>=</mo><mn>5,36</mn><mi>%</mi></mstyle></math>
		`,
    },
    {
        id: "19",
        enunciado: "¿Qué factor de ripple tiene una fuente 220 V/24 V con rectificador de onda completa y filtro capacitivo de 3 µF, que entrega una corriente de I = 8,8 mA?<br>Utilizar aproximación sinusoidal. Expresar el resultado como porcentaje.",
        tipo: "texto",
        respuestaTexto: "43,21 %",
		explicacion: `
			<math display="block" class="tml-display" style="display:block math;"><mstyle mathsize="1.2000em"><mrow><mtext>Factor de Ripple</mtext><mo>=</mo><mfrac><mfrac><msub><mi>I</mi><mrow><mi>o</mi><mi>u</mi><mi>t</mi></mrow></msub><mrow><mn>2</mn><mo>⋅</mo><msqrt><mn>2</mn></msqrt><mo>⋅</mo><mn>2</mn><mo>⋅</mo><mi>f</mi><mo>⋅</mo><mi>C</mi></mrow></mfrac><msub><mi>V</mi><mrow><mi>s</mi><mi>a</mi><mi>l</mi></mrow></msub></mfrac><mo>⋅</mo><mn>100</mn><mo>=</mo><mfrac><mfrac><mrow><mn>8,8</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mo form="prefix" stretchy="false" lspace="0em" rspace="0em">−</mo><mn>3</mn></mrow></msup><mi>A</mi></mrow><mrow><mn>2</mn><mo>⋅</mo><msqrt><mn>2</mn></msqrt><mo>⋅</mo><mn>2</mn><mo>⋅</mo><mn>50</mn><mtext> </mtext><mtext>hz</mtext><mo>⋅</mo><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mo form="prefix" stretchy="false" lspace="0em" rspace="0em">−</mo><mn>6</mn></mrow></msup><mi>F</mi></mrow></mfrac><mrow><mn>24</mn><mtext> </mtext><mi>V</mi></mrow></mfrac><mo>⋅</mo><mn>100</mn><mo>=</mo><mn>43,21</mn><mi>%</mi></mrow></math>
			<br>
			<math display="block" class="tml-display" style="display:block math;"><mstyle mathsize="1.2000em"><mn>2</mn><mo>⋅</mo><mi>f</mi><mo stretchy="false">→</mo><mtext>onda completa</mtext></mstyle></math>
		`,
    },
    {
        id: "20",
        enunciado: "¿Qué factor de ripple tiene una fuente 220 V/10 V con rectificador de onda completa y filtro capacitivo de 2,4 µF, que entrega una corriente de I = 2,9 mA?<br>Utilizar aproximación sinusoidal. Expresar el resultado como porcentaje.",
        tipo: "texto",
        respuestaTexto: "42,72 %",
		explicacion: `
			<math display="block" class="tml-display" style="display:block math;"><mstyle mathsize="1.2000em"><mtext>Factor de Ripple</mtext><mo>=</mo><mfrac><mfrac><msub><mi>I</mi><mrow><mi>o</mi><mi>u</mi><mi>t</mi></mrow></msub><mrow><mn>2</mn><mo>⋅</mo><msqrt><mn>2</mn></msqrt><mo>⋅</mo><mn>2</mn><mo>⋅</mo><mi>f</mi><mo>⋅</mo><mi>C</mi></mrow></mfrac><msub><mi>V</mi><mrow><mi>s</mi><mi>a</mi><mi>l</mi></mrow></msub></mfrac><mo>⋅</mo><mn>100</mn><mo>=</mo><mfrac><mfrac><mrow><mn>2,9</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mo form="prefix" stretchy="false" lspace="0em" rspace="0em">−</mo><mn>3</mn></mrow></msup><mi>A</mi></mrow><mrow><mn>2</mn><mo>⋅</mo><msqrt><mn>2</mn></msqrt><mo>⋅</mo><mn>2</mn><mo>⋅</mo><mn>50</mn><mtext> </mtext><mtext>hz</mtext><mo>⋅</mo><mn>2,4</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mo form="prefix" stretchy="false" lspace="0em" rspace="0em">−</mo><mn>6</mn></mrow></msup><mi>F</mi></mrow></mfrac><mrow><mn>10</mn><mtext> </mtext><mi>V</mi></mrow></mfrac><mo>⋅</mo><mn>100</mn><mo>=</mo><mn>42,72</mn><mi>%</mi></mstyle></math>
			<br>
			<math display="block" class="tml-display" style="display:block math;"><mstyle mathsize="1.2000em"><mn>2</mn><mo>⋅</mo><mi>f</mi><mo stretchy="false">→</mo><mtext>onda completa</mtext></mstyle></math>
		`,
    },
]
