const preguntasLed = [
    {
        id: "q128",
        enunciado: "La luz se produce cuando un protón salta de una órbita de mayor potencial a una órbita de menor potencial.",
        tipo: "radio",
        opciones: [
            { val: "a", txt: "Verdadero" },
            { val: "b", txt: "Falso", esOk: true },
        ],
    },
    {
        id: "q129",
        enunciado: "¿Qué material se utiliza para generar la emisión ultravioleta en los leds?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "nitruro de galio" },
            { val: "b", txt: "netherite" },
            { val: "c", txt: "poliamonio de arsenio" },
            { val: "d", txt: "diamante", esOk: true },
        ],
    },
    {
        id: "q130",
        enunciado: "Especificar el valor de resistencia, normalizada en la serie E12, de un resistor limitador utilizado en un circuito que polariza un LED estándar a partir de una fuente de 25 V. <br>Utilice el criterio del \"valor más próximo\". Exprese el resultado en Ω (ohms) sin multiplicador.",
        tipo: "texto",
        respuestaTexto: "1200"
    },
    {
        id: "q131",
        enunciado: "Conforme lo visto en clase, ¿cuáles son los parámetros más comunes para polarizar un LED?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "3 V / 220 mA" },
            { val: "b", txt: "2 V / 20 mA", esOk: true },
            { val: "c", txt: "2 V / 220 mA" },
            { val: "d", txt: "220 V / corriente según nivel de intensidad deseado" },
            { val: "e", txt: "20 V / 2 mA" },
        ],
    },
    {
        id: "q132",
        enunciado: "¿Cómo se distingue el cátodo de un LED?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "el terminal positivo" },
            { val: "b", txt: "un corte en el encapsulado", esOk: true },
            { val: "c", txt: "por el grosor del terminal" },
            { val: "d", txt: "es el alojamiento/reflector de la pastilla semiconductora" },
            { val: "e", txt: "un punto rojo en el terminal correspondiente" },
        ],
    },
    {
        id: "q133",
        enunciado: "El arseniuro de galio se emplea para la fabricación de LED infrarrojo",
        tipo: "radio",
        opciones: [
            { val: "a", txt: "Verdadero", esOk: true },
            { val: "b", txt: "Falso" },
        ],
    },
    {
        id: "q134",
        enunciado: "Es posible saber el color de un LED con encapsulado translucido si se lo ilumina con luz ultravioleta",
        tipo: "radio",
        opciones: [
            { val: "a", txt: "Verdadero" },
            { val: "b", txt: "Falso", esOk: true },
        ],
    },
    {
        id: "q135",
        enunciado: "La energía de un fotón esta limitada por",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "la constante de Boltzmann" },
            { val: "b", txt: "el nivel de Kaiosama" },
            { val: "c", txt: "la constante de Planck", esOk: true },
            { val: "d", txt: "el radio de Bohr" },
            { val: "e", txt: "la ecuación de Maxwell" },
        ],
    },
    {
        id: "q136",
        enunciado: "¿Qué valor teórico debería tener un resistor para polarizar un led común con una fuente de 16 V?",
        tipo: "texto",
        respuestaTexto: "700 Ω",
        aviso: true
    },
    {
        id: "q137",
        enunciado: "El ancho de la banda prohibida en un semiconductor usado para LED, determina:",
        tipo: "checkbox",
        shuffle: true,
        opciones: [
            { val: "a", txt: "el tamaño mínimo de la pastilla semiconductora" },
            { val: "b", txt: "la frecuencia del fotón emitido", esOk: true },
            { val: "c", txt: "la velocidad del fotón emitido" },
            { val: "d", txt: "la excitación del protón más próximo" },
            { val: "e", txt: "el color de luz emitida", esOk: true },
        ],
    },
    {
        id: "q138",
        enunciado: "Un LED produce luz visible cuando cuando se polariza en directa y luz ultravioleta cuando se polariza en inversa",
        tipo: "radio",
        opciones: [
            { val: "a", txt: "Verdadero" },
            { val: "b", txt: "Falso", esOk: true },
        ],
    },
    {
        id: "q139",
        enunciado: "Especificar el valor de resistencia, normalizada en la serie E12, de un resistor limitador utilizado en un circuito que polariza un LED estándar apartir de una fuente de 5 V.<br>Utilice el criterio del \"valor más próximo\".<br>Exprese el resultado en Ω (ohms) sin multiplicador",
        tipo: "texto",
        respuestaTexto: "150"
    },
    {
        id: "q140",
        enunciado: "Especificar el valor de resistencia, normalizada en la serie E12, de un resistor limitador utilizado en un circuito que polariza un LED estándar apartir de una fuente de 19 V.<br>Utilice el criterio del \"valor más próximo\".<br>Exprese el resultado en Ω (ohms) sin multiplicador.",
        tipo: "texto",
        respuestaTexto: "820"
    },
    {
        id: "q141",
        enunciado: "Es posible saber el color de un LED con encapsulado translucido si se lo ilumina con luz solar",
        tipo: "radio",
        opciones: [
            { val: "a", txt: "Verdadero" },
            { val: "b", txt: "Falso", esOk: true },
        ],
    },
    {
        id: "q142",
        enunciado: "La luz se produce cuando un electrón salta de una órbita de mayor potencial a una órbita de menor potencial.",
        tipo: "radio",
        opciones: [
            { val: "a", txt: "Verdadero", esOk: true },
            { val: "b", txt: "Falso" },
        ],
    },
    {
        id: "q143",
        enunciado: "El terminal más largo de un LED nuevo corresponde al ánodo.",
        tipo: "radio",
        opciones: [
            { val: "a", txt: "Verdadero", esOk: true },
            { val: "b", txt: "Falso" },
        ],
    },
];