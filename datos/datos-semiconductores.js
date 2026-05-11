const preguntasSemiconductores = [
    {
        id: "1",
        enunciado: "Los semiconductores intrínsecos ¿conducen la electricidad a 273 K?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "Si" },
            { val: "b", txt: "No", esOk: true },
        ],
    },
    {
        id: "2",
        enunciado: "¿Qué parte del átomo interesa en electrónica? (seleccione una)",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "cantidad de neutrones en el núcleo" },
            { val: "b", txt: "potencial de oxidación" },
            { val: "c", txt: "electrones de la primer órbita" },
            { val: "d", txt: "número de electrones y protones" },
            { val: "e", txt: "solo los electrones de la periferia", esOk: true },
        ],
    },
    {
        id: "3",
        enunciado: "¿A qué se considera un semiconductor intriseco?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "un semiconductor dopado o metalizado con indio" },
            { val: "b", txt: "un semiconductor dopado o metalizado con fósforo" },
            { val: "c", txt: "un semiconductor puro", esOk: true },
            { val: "d", txt: "cobre puro" },
            { val: "e", txt: "un semiconductor pulido" },
        ],
    },
    {
        id: "4",
        enunciado: "¿qué tipo enlace presentan los semiconductores tradicionales?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "enlace covalente", esOk: true },
            { val: "b", txt: "enlace iónico" },
            { val: "c", txt: "es indistinto" },
            { val: "d", txt: "enlace mono valente" },
            { val: "e", txt: "enlace metálico" },
        ],
    },
    {
        id: "5",
        enunciado: "Tres ___ persiguen un 'galio' con una flecha de aluminio",
        tipo: "texto",
        respuestaTexto: "indios"
    },
    {
        id: "6",
        enunciado: "La diferencia de potencial entre la banda de valencia y la banda de conducción, en un semiconductor, es de aproximadamente 1 eV",
        tipo: "radio",
        opciones: [
            { val: "a", txt: "Verdadero", esOk: true },
            { val: "b", txt: "Falso" },
        ],
    },
    {
        id: "7",
        enunciado: "¿Cuáles de los siguientes son elementos receptores?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "Silicio, Germanio, Estaño" },
            { val: "b", txt: "Plata, Cobre, Estaño" },
            { val: "c", txt: "Telurio, Selenio, Polonio" },
            { val: "d", txt: "Fósforo, Arsénico, Antimonio" },
            { val: "e", txt: "Aluminio, Galio, Indio", esOk: true },
        ],
    },
    {
        id: "8",
        enunciado: "los semiconductores intrínsecos ¿conducen la electricidad?",
        tipo: "checkbox",
        shuffle: true,
        opciones: [
            { val: "a", txt: "si a 273 K" },
            { val: "b", txt: "no a temperatura ambiente", esOk: true },
            { val: "c", txt: "si a 0 K" },
            { val: "d", txt: "no a -273 °C", esOk: true },
            { val: "e", txt: "si a 0 °C" },
        ],
        respuestaTexto: "<br>b) no a temperatura ambiente<br> d) no a -273 °C"
    },
    {
        id: "9",
        enunciado: "¿Qué es un semiconductor extrínseco?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "Un semiconductor puro de silicio" },
            { val: "b", txt: "Un semiconductor metalizado", esOk: true },
            { val: "c", txt: "un semiconductor que se encuentra en la columna 4 de la tabla periódica" },
            { val: "d", txt: "El germanio puro" },
            { val: "e", txt: "un semiconductor policristalino" },
        ],
    },
    {
        id: "10",
        enunciado: "¿Cuál es la caída de tensión típica en polarización directa de un diodo de germanio?",
        tipo: "texto",
        respuestaTexto: "0,3 V",
        aviso: true
    },
    {
        id: "11",
        enunciado: "¿Cuál es la caída de tensión típica en polarización directa de un diodo de silicio?",
        tipo: "texto",
        respuestaTexto: "0,6 V",
        aviso: true
    },
    {
        id: "12",
        enunciado: "El modelo de segmentos lineales de un diodo está formado por un diodo ideal, una fuente de tensión Vd y un ____.",
        tipo: "texto",
        respuestaTexto: "resistor"
    },
    {
        id: "13",
        enunciado: "¿Cómo se conocen los siguientes modelos matemáticos?",
        tipo: "radio",
        shuffle: true,
        img: "../img/q127_modelos_matematicos_semiconductores.webp",
        opciones: [
            { val: "a", txt: "Teórico, con Vo, Schottky" },
            { val: "b", txt: "Directo, directo desplazado, realista" },
            { val: "c", txt: "Modelo caballero, aproximación de Fieldan, S+P+U" },
            { val: "d", txt: "Ideal, solo tensión de codo, tensión de codo + resistencia directa", esOk: true },
            { val: "e", txt: "Discreto, desplazado y lineal continuo" },
        ],
    },
];