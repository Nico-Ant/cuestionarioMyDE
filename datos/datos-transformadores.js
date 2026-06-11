const preguntasTransformadores = [
    {
        id: "1",
        enunciado: "¿Cuál es el 'primario' de un transformador?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "el bobinado con el conductor de mayor sección" },
            { val: "b", txt: "El bobinado por el que ingresa la energía", esOk: true },
            { val: "c", txt: "El lado de mayor tensión" },
            { val: "d", txt: "El lado de la red" },
            { val: "e", txt: "el bobinado con el conductor de menor sección" }
        ],
    },
    {
        id: "2",
        enunciado: "¿Cómo se define la relación de transformación en un transformador?",
        tipo: "checkbox",
        shuffle: true,
        opciones: [
            { 
                txt: `<math><mi>K</mi><mo>=</mo><mfrac><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>2</mn></msub></mfrac></math>`, 
                val: "a" 
            },
            { 
                txt: `<math><mi>K</mi><mo>=</mo><mfrac><msub><mi>V</mi><mn>2</mn></msub><msub><mi>I</mi><mn>2</mn></msub></mfrac></math>`, 
                val: "b" 
            },
            { 
                txt: `<math><mi>K</mi><mo>=</mo><mfrac><msub><mi>N</mi><mn>2</mn></msub><msub><mi>N</mi><mn>1</mn></msub></mfrac></math>`, 
                val: "c" 
            },
            { 
                txt: `<math><mi>K</mi><mo>=</mo><mfrac><msub><mi>V</mi><mn>1</mn></msub><msub><mi>V</mi><mn>2</mn></msub></mfrac></math>`, 
                val: "d", 
                esOk: true,
            },
            { 
                txt: `<math><mi>K</mi><mo>=</mo><mfrac><msub><mi>N</mi><mn>1</mn></msub><msub><mi>N</mi><mn>2</mn></msub></mfrac></math>`, 
                val: "e", 
                esOk: true 
            }
        ]
    },
    {
        id: "3",
        enunciado: "¿cuáles son las fases en los bobinados del secundario de un transformador con punto medio respecto al primario?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "π y -π" },
            { val: "b", txt: "0° y 180°", esOk: true },
            { val: "c", txt: "-90° y 90°" },
            { val: "d", txt: "0° y 90°" },
            { val: "e", txt: "π y 180°" }
        ],
    },
    {
        id: "4",
        enunciado: "¿De qué transformador estaba hablando el docente de teoría, cuando algunos alumnos estaban interactuando en redes sociales?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "ultrasónico" },
            { val: "b", txt: "de grado desorientado" },
            { val: "c", txt: "electrónico" },
            { val: "d", txt: "de poder", esOk: true },
            { val: "e", txt: "de frecuencia intermedia" }
        ],
    },
    {
        id: "5",
        enunciado: "Los transformadores de punto medio se llaman así porque todo el flujo magnético se concentra en un punto del núcleo.",
        tipo: "radio",
        opciones: [
            { val: "a", txt: "Verdadero" },
            { val: "b", txt: "Falso", esOk: true }
        ],
    },
    {
        id: "6",
        enunciado: "Para convertir corriente continua es necesario un transformadores de punto medio.",
        tipo: "radio",
        opciones: [
            { val: "a", txt: "Verdadero" },
            { val: "b", txt: "Falso", esOk: true }
        ],
    },
    {
        id: "7",
        enunciado: "Un transformador cuenta con aislamiento galvánico entre primario y secundario.",
        tipo: "radio",
        opciones: [
            { val: "a", txt: "Verdadero", esOk: true },
            { val: "b", txt: "Falso" }
        ],
    },
    {
        id: "8",
        enunciado: "¿Cómo se define la regulación de un transformador?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { 
                txt: `<math display="inline">
                <mi>R</mi><mo>(</mo><mo>%</mo><mo>)</mo><mo>=</mo>
                <mo>(</mo>
                <mfrac>
                    <mrow><msub><mi>V</mi><mn>02</mn></msub><mo>-</mo><msub><mi>V</mi><mrow><mi>C</mi><mn>2</mn></mrow></msub></mrow>
                    <msub><mi>V</mi><mn>02</mn></msub>
                </mfrac>
                <mo>)</mo><mo>%</mo>
                </math>`, 
                val: "a",
                esOk: true
            },
            { 
                txt: `<math>
                <mi>R</mi><mo>(</mo><mo>%</mo><mo>)</mo><mo>=</mo>
                <mo>(</mo>
                <mfrac>
                    <msqrt><msup><mrow><mo>(</mo><mo>&sum;</mo><msub><mi>V</mi><mi>i</mi></msub><mo>)</mo></mrow><mn>2</mn></msup></msqrt>
                    <msub><mi>V</mi><mn>0</mn></msub>
                </mfrac>
                <mo>)</mo><mo>%</mo>
                </math>`, 
                val: "b" 
            },
            { 
                txt: `<math>
                <mi>R</mi><mo>(</mo><mo>%</mo><mo>)</mo><mo>=</mo>
                <mo>(</mo>
                <mfrac>
                    <mrow>
                    <mfrac><mn>1</mn><mi>T</mi></mfrac>
                    <munderover><mo>&int;</mo><mn>0</mn><mi>T</mi></munderover>
                    <mi>V</mi><mo>sen</mo><mi>&omega;</mi><mi>t</mi><mo>d</mo><mi>t</mi>
                    </mrow>
                    <msub><mi>V</mi><mrow><mi>E</mi><mi>f</mi></mrow></msub>
                </mfrac>
                <mo>)</mo><mo>%</mo>
                </math>`, 
                val: "c" 
            },
            { 
                txt: `<math display="inline">
                <mi>R</mi><mo>(</mo><mo>%</mo><mo>)</mo><mo>=</mo>
                <mo>(</mo>
                <mfrac>
                    <mrow><msub><mi>V</mi><mn>01</mn></msub><mo>-</mo><msub><mi>V</mi><mrow><mi>C</mi><mn>1</mn></mrow></msub></mrow>
                    <msub><mi>V</mi><mn>01</mn></msub>
                </mfrac>
                <mo>)</mo><mo>%</mo>
                </math>`, 
                val: "d" 
            },
            { 
                txt: `<math display="inline">
                <mi>R</mi><mo>(</mo><mo>%</mo><mo>)</mo><mo>=</mo>
                <mo>(</mo>
                <mfrac>
                    <mrow><msub><mi>V</mi><mn>C2</mn></msub><mo>-</mo><msub><mi>V</mi><mrow><mi>0</mi><mn>2</mn></mrow></msub></mrow>
                    <msub><mi>V</mi><mn>02</mn></msub>
                </mfrac>
                <mo>)</mo><mo>%</mo>
                </math>`, 
                val: "e" 
            },
        ]
    },
    {
        id: "9",
        enunciado: "Conforme a lo visto en clase, ¿Cómo se especifica el secundario de un transformador utilizado en electrónica?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "12 VA" },
            { val: "b", txt: "12A con punto medio" },
            { val: "c", txt: "220V / 12V 1A" },
            { val: "d", txt: "12+12 V / 1A", esOk: true },
            { val: "e", txt: "12W" }
        ],
    },
    {
        id: "10",
        enunciado: "¿De qué material se construyen los núcleos de los transformadores?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "grafito" },
            { val: "b", txt: "germanio" },
            { val: "c", txt: "hierro dulce", esOk: true },
            { val: "d", txt: "cobre 99 %" },
            { val: "e", txt: "adamantium" },
            { val: "f", txt: "aisi 316 ss" }
        ],
    },
    {
        id: "11",
        enunciado: "¿Cuál de las siguientes aseveraciones es correcta?",
        tipo: "radio",
        opciones: [
            { val: "a", txt: "los transformadores solo elevan la tensión" },
            { val: "b", txt: "los transformadores con punto medio se utilizan para duplicar la frecuencia" },
            { val: "c", txt: "en un transformador ideal las potencias de entrada y de salida son iguales", esOk: true },
            { val: "d", txt: "los transformadores solo reducen la tensión" },
            { val: "e", txt: "en transformador la potencia de salida está determinada por el factor K" },
            { val: "f", txt: "todas las anteriores" },
            { val: "g", txt: "ninguna de las anteriores" }
        ],
    },
    {
        id: "12",
        enunciado: "Para los transformadores vistos en clase, cuando se indica entrada 220V y salida 12V. ¿a qué tipo de magnitud se refieren los 12V?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "12V valor medio" },
            { val: "b", txt: "12V de pico" },
            { val: "c", txt: "el rizado" },
            { val: "d", txt: "12V eficaces", esOk: true },
            { val: "e", txt: "12V de pico inverso" }
        ],
    },
    {
        id: "13",
        enunciado: "¿Cómo se define el secundario de un transformador utilizado en electrónica?",
        tipo: "radio",
        shuffle: true,
        opciones: [
            { val: "a", txt: "el bobinado de los conductores con menor sección" },
            { val: "b", txt: "el lado de mayor tensión" },
            { val: "c", txt: "el lado que se conecta la carga", esOk: true },
            { val: "d", txt: "el lado de menor tensión" },
            { val: "e", txt: "el lado que entra la corriente" }
        ],
    }
];
