const preguntasBjt = [
	{
		id: "1",
		enunciado: "Identifique el símbolo de un transistor PNP",
		tipo: "radio",
		shuffle: true,
        opciones: [
            { val: "a", txt: "", img: "../img/transitor_symbol.svg#pnp", esOk: true },
            { val: "b", txt: "", img: "../img/transitor_symbol.svg#npn", },
            { val: "c", txt: "", img: "../img/transitor_symbol.svg#transistor1", },
            { val: "d", txt: "", img: "../img/transitor_symbol.svg#transistor2", },
            { val: "e", txt: "", img: "../img/transitor_symbol.svg#transistor3", },
        ],
	},
	{
		id: "2",
		enunciado: "¿Cuál es el valor de Vceq óptimo para lograr la mayor excursión simétrica, en un amplificador de audio?",
		tipo: "radio",
		shuffle: true,
        opciones: [
            { val: "a", txt: "2 a 10 veces la corriente de base calculada" },
            { val: "b", txt: "la mitad de Vcc", esOk: true },
            { val: "c", txt: "la mitad de Vbe" },
            { val: "d", txt: "la mitad de Vcb" },
            { val: "e", txt: "un tercio de la tension máxima del zener" },
        ],
	},
	{
		id: "3",
		enunciado: "La configuración \"emisor común\", de un BJT, adquiere ese nombre porque?",
		tipo: "radio",
		shuffle: true,
        opciones: [
            { val: "a", txt: "se puede realizar con un BJT común" },
            { val: "b", txt: "el emisor está conectado a la malla de entrada y a la salida", esOk: true },
            { val: "c", txt: "emite en ambos sentidos" },
            { val: "d", txt: "esta configuración común no aomplifica" },
            { val: "e", txt: "tiene alto rechazo de modo común" },
        ],
	},
	{
		id: "4",
		enunciado: "Complete el arreglo para formar un transistor en configuración Darlington.",
		tipo: "drag-drop",
		imgFondo: "../img/darlington_fondo.webp", 
		zonaDrop: { 
			top: "51%",
			left: "47%", 
			width: "43%", 
			height: "28%", 
			correcta: "npn-correcto"
		},
		opciones: [
			{ id: "pnp", img: "../img/transitor_symbol.svg#pnp" },
			{ id: "npn-inverso", img: "../img/transitor_symbol.svg#transistor2" },
			{ id: "npn-correcto", img: "../img/transitor_symbol.svg#npn" },
			{ id: "or-gate", img: "../img/transitor_symbol.svg#or-gate" }
		]
	},
	{
		id: "5",
		enunciado: "¿La variación de qué parámetro desplaza la recta de carga cómo en la figura?",
		img: "../img/grafico.webp",
		tipo: "radio",
		shuffle: true,
        opciones: [
            { val: "a", txt: "la ganancia de corriente β o hFE" },
            { val: "b", txt: "la Vcc aplicada", esOk: true },
            { val: "c", txt: "la Ib" },
            { val: "d", txt: "la resistencia de carga" },
            { val: "e", txt: "la amplitud de la señar de entrada" },
        ],
	},
	{
		id: "6",
		enunciado: "Calcular Rb de un transistor que trabajará en conmutación para accionar una lámpara de 11 W/17 V. Vcc = 17 V; Vbb = 6 V; B = 135. Expresar el resultado en ohms. Escribir solo el valor numérico sin unidad. Redondear a 2 decimales",
		tipo: "texto",
		respuestaTexto: "552,89 | 331,73",
		explicacion: `
			<p>Aclaración:<br>Para estos ejercicios parece que toma válido de las 2 siguientes maneras, solo en uno de todos los ejercicos vi que tomó como incorrecto el resultado multiplicando por 2. Y en las respuestas como feedback siempre da el resultado de multiplicar la corriente por 10/3.<br>Así que si queres ir por lo seguro usá 10/3.</p>
			
			<strong>Opción A: Multiplicando la corriente por 2</strong>
			<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
				<msub><mi>R</mi><mi>b</mi></msub><mo>=</mo>
				<mfrac>
				  <mrow>
					<msub>
					  <mi>V</mi>
					  <mrow>
						<mi>b</mi>
						<mi>b</mi>
					  </mrow>
					</msub>
					<mo>−</mo>
					<mn>0,7</mn>
					<mi>V</mi>
				  </mrow>
				  <mrow>
					<mn>2</mn>
					<mo>⋅</mo>
					<mfrac>
					  <mi>P</mi>
					  <msub>
						<mi>V</mi>
						<mrow>
						  <mi>c</mi>
						  <mi>c</mi>
						</mrow>
					  </msub>
					</mfrac>
				  </mrow>
				</mfrac>
				<mo>⋅</mo>
				<mi>β</mi><mo>=</mo>
				<mfrac>
					<mrow><mn>6</mn><mspace width="thickmathspace"/><mi>V</mi><mo>-</mo><mn>0,7</mn><mspace width="thickmathspace"/><mi>V</mi></mrow>
					<mrow><mn>2</mn><mo>&#8901;</mo><mfrac><mrow><mn>11</mn><mspace width="thickmathspace"/><mi>W</mi></mrow><mrow><mn>17</mn><mspace width="thickmathspace"/><mi>V</mi></mrow></mfrac></mrow>
				</mfrac>
				<mo>&#8901;</mo><mn>135</mn><mo>=</mo><mn>552,89</mn><mspace width="thickmathspace"/><mo>&#937;</mo>
			</math>

			<br><hr style="border-color: #444;"><br>

			<strong>Opción B: Multiplicando la corriente por 10/3</strong>
			<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
				<msub><mi>R</mi><mi>b</mi></msub><mo>=</mo>
			<mfrac>
				  <mrow>
					<msub>
					  <mi>V</mi>
					  <mrow>
						<mi>b</mi>
						<mi>b</mi>
					  </mrow>
					</msub>
					<mo>−</mo>
					<mn>0,7</mn>
					<mi>V</mi>
				  </mrow>
				  <mrow>
					<mfrac><mn>10</mn><mn>3</mn></mfrac>
					<mo>⋅</mo>
					<mfrac>
					  <mi>P</mi>
					  <msub>
						<mi>V</mi>
						<mrow>
						  <mi>c</mi>
						  <mi>c</mi>
						</mrow>
					  </msub>
					</mfrac>
				  </mrow>
				</mfrac>
				<mo>⋅</mo>
				<mi>β</mi><mo>=</mo>
				<mfrac>
					<mrow><mn>6</mn><mspace width="thickmathspace"/><mi>V</mi><mo>-</mo><mn>0,7</mn><mspace width="thickmathspace"/><mi>V</mi></mrow>
					<mrow>
						<mfrac><mn>10</mn><mn>3</mn></mfrac>
						<mo>&#8901;</mo><mfrac><mrow><mn>11</mn><mspace width="thickmathspace"/><mi>W</mi></mrow><mrow><mn>17</mn><mspace width="thickmathspace"/><mi>V</mi></mrow></mfrac>
					</mrow>
				</mfrac>
				<mo>&#8901;</mo><mn>135</mn><mo>=</mo><mn>331,73</mn><mspace width="thickmathspace"/><mo>&#937;</mo>
			</math>
		`,
	},
	{
		id: "7",
		enunciado: "En una configuración emisor común, la malla a la que se conecta la base se conoce como malla:",
		tipo: "radio",
        opciones: [
            { val: "a", txt: "de base" },
            { val: "b", txt: "de entrada", },
            { val: "c", txt: "de control" },
            { val: "d", txt: "de señal" },
            { val: "e", txt: "todas las anteriores", esOk: true },
            { val: "f", txt: "ninguna de las anteriores" },
        ],
	},
	{
		id: "8",
		enunciado: "¿Qué beta se utiliza para polarizar un transistor en corte-saturación?",
		tipo: "radio",
        opciones: [
            { val: "a", txt: "beta típico" },
            { val: "b", txt: "beta máxima", },
            { val: "c", txt: "beta de alterna" },
            { val: "d", txt: "beta promedio" },
            { val: "e", txt: "beta mínimo", esOk: true },
        ],
	},
	{
		id: "9",
		enunciado: "La corriente de emisor es:",
		tipo: "radio",
		shuffle: true,
        opciones: [
            { val: "a", txt: "inversa a la de colector" },
            { val: "b", txt: "la suma de la corriente de base más la corriente de colector", esOk: true },
            { val: "c", txt: "igual a la corriente de colector por beta" },
            { val: "d", txt: "dos veces la corriente de colector" },
        ],
	},
	{
		id: "10",
		enunciado: "En un circuito amplificador con BJT en configuración \"emisor común\", ¿qué función cumple el resistor de emisor?",
		tipo: "radio",
		shuffle: true,
        opciones: [
            { val: "a", txt: "disminuir el consumo" },
            { val: "b", txt: "disminuir la distorsión por retardo", },
            { val: "c", txt: "aumentar la excursión simétrica" },
            { val: "d", txt: "aumentar la ganancia" },
            { val: "e", txt: "estabilizar el circuito ante cambio de parámetros", esOk: true },
        ],
	},
	{
		id: "11",
		enunciado: "¿Cómo es la forma de onda de salida respecto a la entrada de un BJT configurado como amplificador de alterna?",
		tipo: "radio",
		shuffle: true,
        opciones: [
            { val: "a", txt: "solo amplifica un semiciclo" },
            { val: "b", txt: "de contra fase o desfasada 180°", esOk: true },
            { val: "c", txt: "mayor amplitud y mayor frecuencia" },
            { val: "d", txt: "de menor amplitud" },
            { val: "e", txt: "menor factor de potencia" },
        ],
	},
	{
		id: "12",
		enunciado: "¿En qué zona tiene que trabajar un BJT (Transistor de Unión Bipolar), para amplificar una seña de corriente alterna?",
		tipo: "radio",
		shuffle: true,
        opciones: [
            { val: "a", txt: "zona de corte" },
            { val: "b", txt: "zona activa", esOk: true },
            { val: "c", txt: "zona de saturación" },
            { val: "d", txt: "zona de 220 V" },
            { val: "e", txt: "zona de corte y saturación" },
        ],
	},
	{
		id: "13",
		enunciado: "¿En un BJT alfa es?",
		tipo: "radio",
		shuffle: true,
        opciones: [
            { val: "a", txt: "la inversa de beta" },
            { val: "b", txt: "tiende a 1", esOk: true },
            { val: "c", txt: "mayor a beta" },
            { val: "d", txt: "igual al doble de beta" },
            { val: "e", txt: "igual a beta" },
        ],
	},
	{
		id: "15",
		enunciado: "Las dimensión física de los material semiconductores de un BJT",
		tipo: "radio",
		shuffle: true,
        opciones: [
            { val: "a", txt: "las tres capas son del mismo tamaño" },
            { val: "b", txt: "el colector es mayor que el tamaño de la base y que el tamaño del emisor", esOk: true },
            { val: "c", txt: "el tamaño del emisor es igual a la tamaño de la base más el tamaño del colector" },
            { val: "d", txt: "el emisor es el doble de grande que el colector" },
            { val: "e", txt: "el colector es el más pequeño" },
        ],
	},
	{
		id: "16",
		enunciado: "En una configuración emisor común, la malla a la que se conecta el colector se conoce como malla:",
		tipo: "radio",
        opciones: [
            { val: "a", txt: "de salida" },
            { val: "b", txt: "de potencia", },
            { val: "c", txt: "de colector" },
            { val: "d", txt: "controlada" },
            { val: "e", txt: "todas las anteriores", esOk: true },
            { val: "f", txt: "ninguna de las anteriores" },
        ],
	},
	{
		id: "17",
		enunciado: "En un encapsulado TO-92 el orden de los pines es:",
		img: "../img/TO-92.webp",
		tipo: "radio",
        opciones: [
            { val: "a", txt: "depende del fabricante", esOk: true },
            { val: "b", txt: "1=e, 2=b, 3=c", },
            { val: "b", txt: "1=b, 2=c, 3=e", },
            { val: "b", txt: "1=c, 2=b, 3=e", },
        ],
	},
	{
		id: "18",
		enunciado: "¿Cuál es el símbolo de un transitor NPN?",
		tipo: "radio",
		shuffle: true,
        opciones: [
            { val: "a", txt: "", img: "../img/transitor_symbol.svg#pnp", },
            { val: "b", txt: "", img: "../img/transitor_symbol.svg#npn", esOk: true },
            { val: "c", txt: "", img: "../img/transitor_symbol.svg#transistor1", },
            { val: "d", txt: "", img: "../img/transitor_symbol.svg#transistor2", },
            { val: "e", txt: "", img: "../img/transitor_symbol.svg#transistor3", },
        ],
	},
	{
		id: "19",
		enunciado: "¿La variación de qué parámetro desplaza el punto Q sobre la recta de carga?",
		img: "../img/grafico2.webp",
		tipo: "radio",
		shuffle: true,
        opciones: [
            { val: "a", txt: "la ganancia de corriente β o hFE" },
            { val: "b", txt: "la Vcc aplicada", },
            { val: "c", txt: "la Ib", esOk: true},
            { val: "d", txt: "la resistencia de carga" },
            { val: "e", txt: "la amplitud de la señar de entrada" },
        ],
	},
	{
		id: "20",
		enunciado: "¿La variación de qué parámetro produce un cambio en la pendiente de la recta de carga?",
		img: "../img/grafico3.webp",
		tipo: "radio",
		shuffle: true,
        opciones: [
            { val: "a", txt: "la ganancia de corriente β o hFE" },
            { val: "b", txt: "la Vcc aplicada" },
            { val: "c", txt: "la Ib" },
            { val: "d", txt: "la resistencia de carga", esOk: true },
            { val: "e", txt: "la amplitud de la señar de entrada" },
        ],
	},
	{
		id: "21",
		enunciado: "Las curvas característica de entrada de un BJT se obtiene con:",
		tipo: "radio",
		shuffle: true,
        opciones: [
            { val: "a", txt: "Vcb constante" },
            { val: "b", txt: "Vce lineal ascendente" },
            { val: "c", txt: "Vce constante", esOk: true },
            { val: "d", txt: "Vcb unitario" },
            { val: "e", txt: "Icb constante" },
        ],
	},
	{
		id: "22",
		enunciado: "¿Cómo se llaman las zonas de las curvas características de salida de los BJT?",
		img: "../img/zonas-bjt.webp",
		tipo: "radio",
		shuffle: true,
        opciones: [
            { val: "a", txt: "1. trabajo; 2. nula; 3. continua" },
            { val: "b", txt: "1. activa; 2. corte; 3. saturación", esOk: true},
            { val: "c", txt: "1. lineal; 2. corte; 3. confección" },
            { val: "d", txt: "1. constante; 2. nula; 3. ideal" },
            { val: "e", txt: "1. activa; 2. pasiva; 3. inactiva" },
        ],
	},
	{
		id: "23",
		enunciado: "¿Por qué se suele colocar un capacitor a la entrada y a la salida de un transistor trabajando como amplificador de CA?",
		tipo: "radio",
		shuffle: true,
        opciones: [
            { val: "a", txt: "para bloquear la CC", esOk: true },
            { val: "b", txt: "para disminuir el rizado" },
            { val: "c", txt: "para compensar la descargar de la batería" },
            { val: "d", txt: "para compensar el cos <mi>&#x3C6;</mi>" },
        ],
	},
]
