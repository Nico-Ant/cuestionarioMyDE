const preguntasCapacitores = [
    {
        id: "1",
        enunciado: "¿Qué significa la sigla NPO en un capacitor cerámico?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "capacitor para uso entre neutro y positivo" },
            { val: "b", txt: "tolerancia negativa y positiva cercana a 0" },
            { val: "c", txt: "coeficiente de temperatura nulo", esOk: true },
            { val: "d", txt: "Sin potencial óhmico" },
            { val: "e", txt: "coeficiente no positivo" }
        ],
    },
    {
        id: "2",
        enunciado: "¿Qué significa la leyenda 103 en un capacitor cerámico?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "10000 pF", esOk: true },
            { val: "b", txt: "10 pF / 30 % de tolerancia" },
            { val: "c", txt: "10 nF / categoría 3" },
            { val: "d", txt: "10000 nF" },
            { val: "e", txt: "10 nF / 300 V" }
        ],
    },
    {
        id: "3",
        enunciado: "¿Qué almacena un capacitor?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "corriente eléctrica" },
            { val: "b", txt: "tensión eléctrica" },
            { val: "c", txt: "potencia reactiva" },
            { val: "d", txt: "potencia activa" },
            { val: "e", txt: "carga eléctrica", esOk: true }
        ],
    },
    {
        id: "4",
        enunciado: "Para un capacitor electrolítico polarizado seleccione el símbolo con indicación correcta de polaridad.",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "", img: "../img/cap1.webp" },
            { val: "b", txt: "", img: "../img/cap2.webp" },
            { val: "c", txt: "", img: "../img/cap3.webp" },
            { val: "d", txt: "", img: "../img/capCorrecta.webp", esOk: true },
        ],
    },
    {
        id: "5",
        enunciado: "¿Cuánto tiempo transcurre hasta que la tensión Vo llegue a 7 V, suponiendo una carga inicial del capacitor de 18 V. C1=2200 µF; R1=100 Ω. (expresar el resultado en [ms] sin escribir la unidad, solo el número)",
        img: "../img/circ_capacitor.webp",
        tipo: "texto",
        respuestaTexto: "207.78"
    },
    {
        id: "6",
        enunciado: "La auto resonancia se produce cuando XL es igual a:",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "<math><mn>2</mn><mo>&#x22C5;</mo><msub><mi>X</mi><mi>C</mi></msub></math>" },
            { val: "b", txt: "<math><mn>2</mn><mo>&#x22C5;</mo><mi>&pi;</mi><mo>&#x22C5;</mo><mi>f</mi><mo>&#x22C5;</mo><msub><mi>X</mi><mi>C</mi></msub></math>" },
            { val: "c", txt: "<math><msub><mi>X</mi><mi>C</mi></msub></math>", esOk: true },
            { val: "d", txt: "<math><mfrac><mrow><mn>2</mn><mo>&#x22C5;</mo><mi>f</mi></mrow><mi>C</mi></mfrac></math>" },
        ],
    },
    {
        id: "7",
        enunciado: "Un capacitor que actúa como filtro de línea se clasifica como tipo _",
        tipo: "texto",
        respuestaTexto: "X"
    },
    {
        id: "8",
        enunciado: "La capacitancia en un capacitor de placas paralelas depende en forma:",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "directamente proporcional al área neta enfrentada de las placas e inversamente proporcional a la distancia que las separa", esOk: true },
            { val: "b", txt: "directamente proporcional a la distancia que separa las placas e inversamente proporcional al área neta enfrentada de las placas" },
            { val: "c", txt: "directamente proporcional a la distancia que separa las placas y al área neta enfrentada de las placas" },
        ],
    },
    {
        id: "9",
        enunciado: "¿Con qué colores se identifica un capacitor de poliéster de 330 nF?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "amarillo-amarillo-negro-negro" },
            { val: "b", txt: "anaranjado-verde-negro" },
            { val: "c", txt: "anaranjado-anaranjado-marrón" },
            { val: "d", txt: "marrón-verde-amarillo" },
            { val: "e", txt: "anaranjado-anaranjado-amarillo", esOk: true }
        ],
    },
    {
        id: "10",
        enunciado: "¿Qué capacidad tiene un capacitor identificado como 222?",
        tipo: "texto",
        respuestaTexto: "2200 pF"
    },
    {
        id: "11",
        enunciado: "Indique los materiales con los que se fabrican capacitores electrolíticos",
        tipo: "checkbox",
        shuffle: true,
        opciones: [
            { val: "a" , txt: "Poliester" },
            { val: "b" , txt: "Aluminio", esOk: true },
            { val: "c" , txt: "Tantalio", esOk: true },
            { val: "d" , txt: "Zinc" },
            { val: "e" , txt: "Silicio" },
        ]
    },
    {
        id: "12",
        enunciado: "¿Con qué colores se identifica un capacitor de poliéster de 150 nF?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "marrón-verde-marrón" },
            { val: "b", txt: "marrón-verde-negro-anaranjado" },
            { val: "c", txt: "marrón-verde-negro-negro" },
            { val: "d", txt: "marrón-verde-amarillo", esOk: true },
            { val: "e", txt: "marrón-verde-negro" }
        ],
    },
    {
        id: "13",
        enunciado: "¿Cuánto tiempo transcurre hasta que la tensión Vo llegue a 7 V, suponiendo una carga inicial del capacitor de 18 V. C1=470 µF; R1=1000 Ω. (expresar el resultado en [ms] sin escribir la unidad, solo el número)",
        img: "../img/circ_capacitor.webp",
        tipo: "texto",
        respuestaTexto: "443.90"
    },
    {
        id: "14",
        enunciado: "¿Cuánto tiempo transcurre hasta que la tensión Vo llegue a 7 V, suponiendo una carga inicial del capacitor de 18 V. C1=100 µF; R1=1000 Ω. (expresar el resultado en [ms] sin escribir la unidad, solo el número)",
        img: "../img/circ_capacitor.webp",
        tipo: "texto",
        respuestaTexto: "94.45"
    },
    {
        id: "15",
        enunciado: "Según el criterio de mínima tensión visto en clase, ¿Cuál es la máxima tensión aplicable?",
        img: "../img/cap_circuito2.webp",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "50 V" },
            { val: "b", txt: "16 V", esOk: true },
            { val: "c", txt: "25 V" },
            { val: "d", txt: "2,2 µF"},
        ],
    },
    {
        id: "16",
        enunciado: "Según el criterio de mínima tensión visto en clase, ¿Cuál es la máxima tensión aplicable?",
        img: "../img/cap_circuito1.webp",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "25 V" },
            { val: "b", txt: "10 V", esOk: true },
            { val: "c", txt: "16 V" },
        ],
    },
];
