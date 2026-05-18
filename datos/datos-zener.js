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
]