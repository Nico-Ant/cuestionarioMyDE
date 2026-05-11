const preguntasResistores = [
    {
        id: "1",
        enunciado: "Un resistor de carbón de 6,8 Ω, 1/8 W y 5% de tolerancia tiene los siguientes anillos de colores: azul, gris, ____ y dorado.",
        tipo: "texto",
        respuestaTexto: "dorado"
    },
    {
        id: "2",
        enunciado: "Los resistores de film de carbón más utilizados en circuitos electrónicos de uso general presentan una tolerancia del ____",
        tipo: "texto",
        respuestaTexto: "5%"
    },
    {
        id: "3",
        enunciado: "Un divisor resistivo es considerado simplificado cuando la corriente drenada no supera el ____ de la total.",
        tipo: "texto",
        respuestaTexto: "10%"
    },
    {
        id: "4",
        enunciado: "Para la configuración de resistores de la imagen: ¿Cuál es la resistencia equivalente entre los bornes A y B?",
        tipo: "texto",
        img: "../img/q21_circuito.webp",
        respuestaTexto: "891.89 ohm"
    },
    {
        id: "5",
        enunciado: "¿Un resistor tiene polaridad?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "Si" },
            { val: "b", txt: "No", esOk: true },
            { val: "c", txt: "A veces" },
        ],
    },
    {
        id: "6",
        enunciado: "Los resistores de alambre se fabrican a partir de una potencia de:",
        tipo: "texto",
        respuestaTexto: "2 W"
    },
    {
        id: "7",
        enunciado: "Las resistencias de película de carbón se fabrican hasta una potencia de:",
        tipo: "texto",
        respuestaTexto: "2 W"
    },
    {
        id: "8",
        enunciado: "¿Cuál de los siguientes valores no corresponde a la serie E12?",
        tipo: "radio",
        opciones: [
            { val: "a", txt: "2,2" },
            { val: "b", txt: "390" },
            { val: "c", txt: "86", esOk: true },
            { val: "d", txt: "0,18" },
            { val: "e", txt: "a, b, c y d" },
            { val: "f", txt: "Ninguno" }
        ],
    },
    {
        id: "9",
        enunciado: "Los Preset se diferencian de los potenciómetros porque:",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "Permiten un ajuste mas lineal" },
            { val: "b", txt: "Tienen mayor inmunidad al ruido" },
            { val: "c", txt: "Son de mejor tecnología" },
            { val: "d", txt: "Permiten un ajuste más fino y definitivo", esOk: true },
            { val: "e", txt: "Tienen coeficiente de temperatura negativo" }
        ],
    },
    {
        id: "10",
        enunciado: "¿Con qué colores y en qué orden se indica un resistor de carbón de 1/8 W de 6,8Ω?",
        tipo: "select-grupo",
        desplegables: [
            { label: "1° Anillo", correcta: "Azul", opciones: ["Negro", "Marrón", "Rojo", "Naranja", "Amarrilo", "Verde", "Azul", "Violeta", "Gris", "Blanco"] },
            { label: "2° Anillo", correcta: "Gris", opciones: ["Negro", "Marrón", "Rojo", "Naranja", "Amarrilo", "Verde", "Azul", "Violeta", "Gris", "Blanco"] },
            { label: "3° Anillo", correcta: "Dorado", opciones: ["Negro", "Marrón", "Rojo", "Naranja", "Amarrilo", "Verde", "Azul", "Plateado", "Dorado"] },
            { label: "4° Anillo (tolerancia)", correcta: "No especifica", opciones: ["Marrón", "Plateado", "Dorado", "No especifica"] }
        ]
    },
    {
        id: "11",
        enunciado: "¿Con cuántos anillos de colores se denotan las resistencias de Metal Film?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "3" },
            { val: "b", txt: "5", esOk: true },
            { val: "c", txt: "0" },

        ],
    },
    {
        id: "12",
        enunciado: "Para el resistor de la figura",
        img: "../img/resistor10M5.webp",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "1 MΩ - 5%" },
            { val: "b", txt: "10 MΩ - 5%", esOk: true },
            { val: "c", txt: "10 MΩ - 10%" },

        ],
    },
    {
        id: "13",
        enunciado: "Unir el tipo de resistor con su tolerancia",
        tipo: "select-grupo",
        desplegables: [
            { label: "Resistor de Cermet", correcta: "1% tolerancia", opciones: ["1% tolerancia", "5% tolerancia", "10% tolerancia"] },
            { label: "Resistor de alambre", correcta: "10% tolerancia", opciones: ["1% tolerancia", "5% tolerancia", "10% tolerancia"] },
            { label: "Resistor de carbón", correcta: "5% tolerancia", opciones: ["1% tolerancia", "5% tolerancia", "10% tolerancia"] },
        ]
    },
    {
        id: "14",
        enunciado: "La potencia disipada de un resistor es:",
        tipo: "checkbox",
        shuffle: true,
        opciones: [
            { 
                txt: `<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>P</mi><mo>=</mo><msup><mi>I</mi><mn>2</mn></msup><mi>R</mi></math>`, 
                val: "a" ,
                esOk: true,
            },
            { 
                txt: `<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>P</mi><mo>=</mo><msup><mi>I</mi><mn>2</mn></msup><msub><mi>X</mi><mi>C</mi></msub></math>`, 
                val: "b" 
            },
            { 
                txt: `<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>P</mi><mo>=</mo><msup><mi>I</mi><mn>2</mn></msup><msub><mi>X</mi><mi>L</mi></msub></math>`, 
                val: "c" 
            },
            { 
                txt: `<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>P</mi><mo>=</mo><mfrac><mrow><msup><mi>U</mi><mn>2</mn></msup></mrow><mi>R</mi></mfrac></math>`, 
                val: "d", 
                esOk: true,
            },
            { 
                txt: `<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>P</mi><mo>=</mo><mi>U</mi><mi>I</mi><mi>sin</mi><mfenced><mi>&#x3c6;</mi></mfenced></math>`, 
                val: "e",
            }
        ]
    },
    {
        id: "15",
        enunciado: "¿Hasta qué porcentaje de corriente se puede drenar de un divisor resistivo y asumir que se comporta como ideal?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "1 %" },
            { val: "b", txt: "10 %", esOk: true },
            { val: "c", txt: "50 %" },
            { val: "d", txt: "0,1 %" },
            { val: "e", txt: "5 %" },

        ],
    },
    {
        id: "16",
        enunciado: "Indicar con qué colores se denota un resistor de Cermet de 1 W y 365 Ω 1%",
        tipo: "select-grupo",
        desplegables: [
            { label: "1° Anillo", correcta: "Naranja", opciones: ["Negro", "Marrón", "Rojo", "Naranja", "Amarrilo", "Verde", "Azul", "Violeta", "Gris", "Blanco"] },
            { label: "2° Anillo", correcta: "Azul", opciones: ["Negro", "Marrón", "Rojo", "Naranja", "Amarrilo", "Verde", "Azul", "Violeta", "Gris", "Blanco"] },
            { label: "3° Anillo", correcta: "Verde", opciones: ["Negro", "Marrón", "Rojo", "Naranja", "Amarrilo", "Verde", "Azul", "Violeta", "Gris", "Blanco"] },
            { label: "4° Anillo", correcta: "Negro", opciones: ["Negro", "Marrón", "Rojo", "Naranja", "Amarrilo", "Verde", "Azul", "Violeta", "Plateado", "Dorado"] },
            { label: "5° Anillo", correcta: "Marrón", opciones: ["Marrón", "Rojo", "Verde", "Azul", "Violeta", "Gris", "Dorado", "Plateado", "Sin color", "No especifica"] }
        ]
    },
    {
        id: "17",
        enunciado: "Un resistor de carbón de 1,2 Ω 1/4 W y 10% de tolerancia, ¿qué colores presenta?",
        tipo: "select-grupo",
        desplegables: [
            { label: "1° Anillo", correcta: "Marrón", opciones: ["Negro", "Marrón", "Rojo", "Naranja", "Amarrilo", "Verde", "Azul", "Violeta", "Gris", "Blanco"] },
            { label: "2° Anillo", correcta: "Rojo", opciones: ["Negro", "Marrón", "Rojo", "Naranja", "Amarrilo", "Verde", "Azul", "Violeta", "Gris", "Blanco"] },
            { label: "3° Anillo", correcta: "Dorado", opciones: ["Negro", "Marrón", "Rojo", "Naranja", "Amarrilo", "Verde", "Azul", "Plateado", "Dorado"] },
            { label: "4° Anillo", correcta: "Plateado", opciones: ["Marrón", "Plateado", "Dorado", "No especifica"] }
        ]
    },
    {
        id: "18",
        enunciado: "Marcar las respuestas correctas",
        tipo: "checkbox",
        shuffle: true,
        opciones: [
            { val: "a" , txt: "Los divisores reostáticos se suelen utilizar con pequeñas corrientes." },
            { val: "b" , txt: "Los divisores reostáticos se suelen utilizar con grandes corrientes.", esOk: true },
            { val: "c" , txt: "Los divisores resistivos se suelen utilizar con grandes corrientes." },
            { val: "d" , txt: "Los divisores resistivos se suelen utilizar con pequeñas corrientes.", esOk: true },
            { val: "e" , txt: "Los divisores resistivos son para CC y los reostáticos para CA." },
            { val: "f" , txt: "En CA se puede utilizar cualquier tipo impedancia.", esOk: true},
        ]
    },
    {
        id: "19",
        enunciado: "¿Cuál es la diferencia entre Resistor y Resistencia?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "Resistor es el valor que posee y Resistencia es el componente." },
            { val: "b", txt: "No hay diferencias, son sinónimos." },
            { val: "c", txt: "Resistor es el componente electrónico y Resitencia es una magnitud física.", esOk: true }
        ]
    },
    {
        id: "20",
        enunciado: "El resistor es un componente electrónico",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "Activo" },
            { val: "b", txt: "Amplificador" },
            { val: "c", txt: "Pasivo", esOk: true }
        ]
    },
    {
        id: "21",
        enunciado: "¿Cuál de éstas expresiones describe las diferencias entre un \"Pre-Set o trimpot\" (potenciómetro de preajuste) y un \"Potenciómetro\"?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "El Pre-Set está diseñado para hacer un ajuste inicial (calibración) del circuito; en cambio, el Potenciómetro se utiliza como entrada por parte del usuario (frecuentes modificaciones de su valor).", esOk: true },
            { val: "b", txt: "El Pre-Set se utiliza para modificar un valor de tensión; en cambio, el Potenciómetro permite modificar una corriente eléctrica." },
            { val: "c", txt: "El Pre-Set es un dispositivo que modifica su capacidad; en cambio, el Potenciómetro es un componente que modifica su resistividad." },
            { val: "d", txt: "El Potenciómetro está diseñado para hacer un ajuste inicial (calibración) del circuito; en cambio, el Pre-Set se utiliza como entrada por parte del usuario (frecuentes modificaciones de su valor)." },
        ]
    },
    {
        id: "22",
        enunciado: "¿Con qué tipo de resistores se puede realizar un divisor resistivo?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "cermet" },
            { val: "b", txt: "metálicos" },
            { val: "c", txt: "de alambre" },
            { val: "d", txt: "película de carbón" },
            { val: "e", txt: "cualquier tipo", esOk: true }
        ]
    },
    {
        id: "23",
        enunciado: "Son correctas las representaciones 2K2 ó 1M8 para indicar el valor de un resistor.",
        tipo: "radio",
        opciones: [
            { val: "a", txt: "Verdadero" },
            { val: "b", txt: "Falso", esOk: true },
        ]
    },
    {
        id: "24",
        enunciado: "La disipación de potencia en un resistor está regido por:",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "Corolario de Olsson" },
            { val: "b", txt: "Ley de medios" },
            { val: "c", txt: "Ley de Thpomson" },
            { val: "d", txt: "Ley Watt" },
            { val: "e", txt: "Efecto Joule", esOk: true }
        ]
    },
    {
        id: "25",
        enunciado: "¿Cuál de éstos valores no pertenecen a la Serie estándar E12?",
        tipo: "checkbox",
        shuffle: true,
        opciones: [
            { val: "a" , txt: "1,24", esOk: true },
            { val: "b" , txt: "0,47" },
            { val: "c" , txt: "150" },
            { val: "d" , txt: "22000" },
            { val: "e" , txt: "3500000", esOk: true },
            { val: "f" , txt: "82" },
            { val: "g" , txt: "0,92", esOk: true},
            { val: "h" , txt: "570", esOk: true},
        ]
    },
    {
        id: "26",
        enunciado: "Para el ensayo de laboratorio Medición de valor de resitencia ¿Qué instrumento se utilizó?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a" , txt: "Calibre Pie de Rey" },
            { val: "b" , txt: "Wattímetro" },
            { val: "c" , txt: "Amperímetro" },
            { val: "d" , txt: "Ohmetro", esOk: true },
            { val: "e" , txt: "Voltímetro" },
        ]
    },
    {
        id: "27",
        enunciado: "Según las normas IRAM ¿Cuál es el símbolo para un resistor?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "", img: "../img/re27-1.webp" },
            { val: "b", txt: "", img: "../img/re27-2.webp" },
            { val: "c", txt: "", img: "../img/re27-3.webp" },
            { val: "d", txt: "", img: "../img/re27-4.webp", esOk: true },
        ],
    },
];