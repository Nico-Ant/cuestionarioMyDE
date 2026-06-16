function cargarExamen() {
    const contenedor = document.getElementById('contenedor-preguntas');
    if (!contenedor) return;
    contenedor.innerHTML = "";

    const arrayPreguntas = typeof window.preguntas !== 'undefined' ? window.preguntas : (typeof preguntas !== 'undefined' ? preguntas : []);

    arrayPreguntas.forEach((p, indexPregunta) => {
        if (p.tipo === "header") {
            contenedor.innerHTML += `<h2 class="seccion-titulo">${p.titulo}</h2>`;
            return;
        }

        if (p.shuffle && p.opciones) {            
            for (let i = p.opciones.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [p.opciones[i], p.opciones[j]] = [p.opciones[j], p.opciones[i]];
            }
        }

        let html = `
            <div class="pregunta"
                data-correct="${p.respuestaTexto || ''}"
                data-aviso="${p.aviso || false}">
                <p><strong>${p.enunciado}</strong></p>
                ${p.img && p.tipo !== "imagen-zonas" ? `<img src="${p.img}" style="max-width: 100%;">` : ''}
        `;

        if (p.tipo === "radio" || p.tipo === "checkbox") {
            if (p.opciones) {
                p.opciones.forEach((opt, index) => {
                    const textoOpt = opt.txt ? opt.txt : ""; 
                    const esVF = textoOpt.toLowerCase() === "verdadero" || textoOpt.toLowerCase() === "falso";
                    
                    const letraActual = String.fromCharCode(97 + index);
                    const valorInput = esVF ? opt.val : letraActual;
                    
                    let imgHtml = '';
                    if (opt.img) {
                        if (opt.img.includes('.svg#')) {
                            imgHtml = `
                                <br>
                                <svg style="height: 120px; width: 120px; display: block;">
                                <use href="${opt.img}"></use>
                                </svg>`;
                        } else {
                            imgHtml = `<br><img src="${opt.img}" style="max-height: 120px; display: block;">`;
                        }
                    }
                    const etiquetaTexto = esVF ? textoOpt : (textoOpt !== "" ? `${letraActual}) ${textoOpt}` : `${letraActual})`);

                    html += `
                        <label style="display: block; margin-bottom: 8px;">
                            <input type="${p.tipo}" 
                                   name="pregunta_unica_${indexPregunta}" 
                                   value="${valorInput}" 
                                   ${opt.esOk ? 'data-correct="true"' : ''}> 
                            ${etiquetaTexto} ${imgHtml}
                        </label>`;
                });
            }
        } else if (p.tipo === "texto") {
            html += `<p>Respuesta: <input type="text" placeholder="Escriba aquí..." style="padding: 5px;"></p>`;
            
        } else if (p.tipo === "select-grupo") {
            html += `<div class="select-container">`;
            
            p.desplegables.forEach(selectData => {
                html += `
                    <div class="select-row">
                        <label class="select-label">${selectData.label}</label>
                        <select data-correct="${selectData.correcta}" class="select-input">
                            <option value="" disabled selected>Seleccionar...</option>`;
                
                selectData.opciones.forEach(opt => {
                    html += `<option value="${opt}">${opt}</option>`;
                });
                
                html += `
                        </select>
                        <span class="contenedor-icono"></span>
                    </div>`;
            });
            html += `</div>`;
        } else if (p.tipo === "imagen-zonas") {
            html += `<div class="img-zonas-container">
                        <img src="${p.img}" alt="Gráfico interactivo">`;
            
            p.zonas.forEach(zona => {
                html += `
                    <div class="zona-flotante" style="top: ${zona.top}; left: ${zona.left};">
                        <select data-correct="${zona.correcta}" class="select-input select-chico">
                            <option value="" disabled selected>---</option>`;
                
                zona.opciones.forEach(opt => {
                    html += `<option value="${opt}">${opt}</option>`;
                });
                
                html += `
                        </select>
                        <span class="contenedor-icono"></span>
                    </div>`;
            });
            html += `</div>`;
        } else if (p.tipo === "secuencia") {
            const poolMezclado = mezclarArray([...p.pool]); 

            html += `<div class="secuencia-container">`;
            
            p.correcta.forEach((correctValue, index) => {
                html += `
                    <div class="bloque-completo">
                        <div class="zona-secuencia">
                            <select data-correct="${correctValue}" class="select-input select-secuencia">
                                <option value="" disabled selected>---</option>`;
                
                poolMezclado.forEach(opt => {
                    html += `<option value="${opt}">${opt}</option>`;
                });
                
                html += `
                            </select>
                            <span class="contenedor-icono"></span>
                        </div>
                `;

                if (index < p.correcta.length - 1) {
                    html += `
                        <span class="flecha-separadora">
                            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </span>`;
                }

                html += `</div>`; 
            });
            
            html += `</div>`;
        } else if (p.tipo === "drag-drop") {
            html += `
                <p class="instruccion-interactiva">
                <span class="ayuda-pc">Si estás en PC podes arrastrar, sino toca la opción correcta y luego el recuadro.</span>
                </p>

                <div class="img-zonas-container drag-drop-container">
                <img src="${p.imgFondo}" alt="Diagrama base">

                <div class="zona-drop" 
            data-correct="${p.zonaDrop.correcta}" 
            style="top: ${p.zonaDrop.top}; left: ${p.zonaDrop.left}; width: ${p.zonaDrop.width}; height: ${p.zonaDrop.height};"
            ondragover="permitirDrop(event)"
            ondragenter="entrarDrop(event)"
            ondragleave="salirDrop(event)" 
            ondrop="soltarItem(event, this)"
            onclick="clickZonaDrop(this)">
                </div>
                </div>

                <div class="opciones-drag-container">
                ${p.opciones.map(opt => {
                    let mediaElement = '';

                    if (opt.img) {
                        if (opt.img.includes('.svg#')) {
                            mediaElement = `<svg style="width:100%; height:100%; pointer-events:none; color:#e0e0e0;"><use href="${opt.img}"></use></svg>`;
                        } else {
                            mediaElement = `<img src="${opt.img}" style="width:100%; height:100%; object-fit:contain; pointer-events:none;">`;
                        }
                    }

                    return `
                        <div id="drag-${indexPregunta}-${opt.id}" 
                    data-id="${opt.id}" 
                    class="item-drag" 
                    draggable="true" 
                    ondragstart="arrastrarItem(event)"
                    ondragend="terminarArrastre(event)"
                    onclick="seleccionarItem(this)">
                        ${mediaElement}
                        </div>`;
                }).join('')}
                </div>`;
        }

        html += `
            <button class="btn-check" onclick="verificarEsta(this)" style="margin-top: 10px;">Verificar</button>
            <p class="resultado" style="margin-top: 10px;"></p>`;

        if (p.explicacion) {
            html += `
                <div class="explicacion-oculta" style="display: none; margin-top: 10px; padding: 12px; background: #2d2d2d; border-left: 4px solid #FF9800; border-radius: 4px;">
                <strong>Explicación / Fórmula:</strong><br>
                ${p.explicacion}
                </div>`;
        }

        html += `</div><hr>`;

        contenedor.innerHTML += html;
    });
}

function verificarEsta(boton) {
    const p = boton.parentElement;
    const resultado = p.querySelector(".resultado");
    
    let puntajePregunta = 0;
    let estado = "incorrecto"; 
    let textoFinalRespuesta = "";

    p.querySelectorAll(".icon-feedback").forEach(el => el.remove());

    // 1. VALIDACIÓN: RADIOS Y CHECKBOXES
    const seleccionables = p.querySelectorAll("input[type=radio], input[type=checkbox]");
    if (seleccionables.length > 0) {
        let totalCorrectas = p.querySelectorAll('input[data-correct="true"]').length;
        let aciertos = 0;
        let errores = 0;

        seleccionables.forEach(input => {
            const esMarcada = input.checked;
            const esVerdadera = input.dataset.correct === "true";

            if (esMarcada) {
                if (esVerdadera) {
                    aciertos++;
                    input.parentElement.insertAdjacentHTML('beforeend', ' <span class="icon-feedback" style="color:green; font-weight:bold;">✔</span>');
                } else {
                    errores++;
                    input.parentElement.insertAdjacentHTML('beforeend', ' <span class="icon-feedback" style="color:red; font-weight:bold;">✘</span>');
                }
            }
        });

        const esCheckbox = p.querySelector('input[type="checkbox"]');
        if (esCheckbox) {
            let calculo = (aciertos - errores) / totalCorrectas;
            puntajePregunta = Math.max(0, calculo);

            if (puntajePregunta === 1) estado = "correcto";
            else if (puntajePregunta > 0) estado = "parcial";
            
        } else {
            if (aciertos === totalCorrectas && errores === 0) {
                puntajePregunta = 1;
                estado = "correcto";
            }
        }

        const inputsCorrectos = p.querySelectorAll('input[data-correct="true"]');
        if (inputsCorrectos.length > 0) {
            let textosCorrectos = [];
            inputsCorrectos.forEach(input => {
                const clonLabel = input.parentElement.cloneNode(true);
                clonLabel.querySelectorAll(".icon-feedback, input").forEach(el => el.remove());
                textosCorrectos.push(clonLabel.innerHTML.trim());
            });
            textoFinalRespuesta = textosCorrectos.join(' <span style="margin: 0 10px; color: #2196F3;">y</span> ');
        }
    }

	// 2. VALIDACIÓN: TEXTO LIBRE
	const inputTexto = p.querySelector("input[type=text]");
	if (inputTexto) {
		const user = inputTexto.value;
		const correctaRaw = p.dataset.correct || "";

		const correctasArray = correctaRaw.split('|').map(s => s.trim());

		textoFinalRespuesta = correctasArray.join(' o ');

		if (user.trim() !== "") {
			const esCorrecta = correctasArray.some(opcionCorrecta => compararRespuestasTexto(user, opcionCorrecta));

			if (esCorrecta) {
				puntajePregunta = 1;
				estado = "correcto";
				inputTexto.insertAdjacentHTML('afterend', ' <span class="icon-feedback" style="color:green; font-weight:bold;">✔</span>');
			} else {
				inputTexto.insertAdjacentHTML('afterend', ' <span class="icon-feedback" style="color:red; font-weight:bold;">✘</span>');
			}
		}
	}

	// 3. VALIDACIÓN: MENÚS DESPLEGABLES (SELECTS)
    const selects = p.querySelectorAll("select");
    if (selects.length > 0) {
        let totalSelects = selects.length;
        let aciertosSelects = 0;
        let respuestasArray = [];

        selects.forEach(select => {
            const userVal = select.value;
            const correctVal = select.dataset.correct;
            respuestasArray.push(correctVal); 

            const contenedorIcono = select.nextElementSibling;
            if (userVal === correctVal) {
                aciertosSelects++;
                contenedorIcono.innerHTML = '<span class="icon-feedback" style="color:green; font-weight:bold; margin-left:10px;">✔</span>';
            } else {
                contenedorIcono.innerHTML = '<span class="icon-feedback" style="color:red; font-weight:bold; margin-left:10px;">✘</span>';
            }
        });

        puntajePregunta = aciertosSelects / totalSelects;

        if (puntajePregunta === 1) {
            estado = "correcto";
        } else if (puntajePregunta > 0) {
            estado = "parcial";
        }

        const contZonas = p.querySelector('.img-zonas-container');
        if (contZonas && !contZonas.classList.contains('drag-drop-container')) {
            const clon = contZonas.cloneNode(true);
            const selectsOriginales = contZonas.querySelectorAll('select');
            const zonasFlotantesClon = clon.querySelectorAll('.zona-flotante');
            
            zonasFlotantesClon.forEach((zonaClon, i) => {
                const correcta = selectsOriginales[i].dataset.correct;
                zonaClon.innerHTML = `<span style="padding: 4px 8px; font-size: 0.85rem; font-weight: bold; color: white; background-color: #4CAF50; border-radius: 4px; white-space: nowrap;">${correcta}</span>`;
                zonaClon.style.border = "none";
                zonaClon.style.background = "transparent";
                zonaClon.style.boxShadow = "none";
            });
            
            clon.style.maxWidth = "350px"; 
            clon.style.margin = "15px auto 0"; 
            textoFinalRespuesta = "<br>" + clon.outerHTML;
            
        } else if (!contZonas) {
            textoFinalRespuesta = respuestasArray.join(", ");
        }
    }

    // 4. VALIDACIÓN: DRAG AND DROP
    const zonasDrop = p.querySelectorAll(".zona-drop");
    if (zonasDrop.length > 0) {
        let totalZonas = zonasDrop.length;
        let aciertosDrop = 0;
        let idsCorrectos = [];

        zonasDrop.forEach(zona => {
            const userVal = zona.dataset.user || "";
            const correctVal = zona.dataset.correct;
            idsCorrectos.push(correctVal); 

            if (userVal === correctVal) {
                aciertosDrop++;
                zona.classList.add("drop-correcto");
                zona.classList.remove("drop-incorrecto");
            } else {
                zona.classList.add("drop-incorrecto");
                zona.classList.remove("drop-correcto");
            }
        });

        puntajePregunta = aciertosDrop / totalZonas;
        if (puntajePregunta === 1) estado = "correcto";
        else if (puntajePregunta > 0) estado = "parcial";

        let htmlRespuestas = '';
        idsCorrectos.forEach(idCorrecto => {
            const opcionCorrectaDOM = p.querySelector(`.item-drag[data-id="${idCorrecto}"]`);
            if (opcionCorrectaDOM) {
                htmlRespuestas += `
                    <div style="width: 70px; height: 70px; background: #252525; padding: 5px; border-radius: 6px; border: 1px solid #444; margin-top: 10px; display: inline-block; margin-right: 10px;">
                    ${opcionCorrectaDOM.innerHTML}
                    </div>`;
            }
        });

        if (htmlRespuestas !== '') {
            textoFinalRespuesta = `Esta era la correcta:<br>${htmlRespuestas}`;
        } else {
            textoFinalRespuesta = "Revisá los colores en el diagrama.";
        }
    }

    // IMPRESIÓN DEL RESULTADO
    if (estado === "correcto") {
        resultado.innerHTML = '<span class="correcto">✔ Correcto (1 pt)</span>';
    } else if (estado === "parcial") {
        let ptRedondeado = Math.round(puntajePregunta * 100) / 100;
        resultado.innerHTML = `<span class="parcial">⚠ Parcialmente correcto (${ptRedondeado} pts)</span>`;
    } else {
        resultado.innerHTML = '<span class="incorrecto">✘ Incorrecto (0 pts)</span>';
    }

    resultado.innerHTML += `<div class="feedback-res">La respuesta es: <b>${textoFinalRespuesta}</b></div>`;

    const divExplicacion = p.querySelector(".explicacion-oculta");
    if (divExplicacion) {
        divExplicacion.style.display = "block";
    }

    return puntajePregunta; 
}

function compararRespuestasTexto(user, correcta) {
    if (!user) return false;
    
    let u = user.trim().replace(/,/g, ".").replace(/\s+/g, "");
    let c = correcta.trim().replace(/,/g, ".").replace(/\s+/g, "");
    
    const regex = /^(-?\d+(\.\d+)?)(.*)$/;
    const matchU = u.match(regex);
    const matchC = c.match(regex);
    
    if (matchU && matchC) {
        const numU = parseFloat(matchU[1]);
        const unitU = matchU[3];
        
        const numC = parseFloat(matchC[1]);
        const unitC = matchC[3];
        
        if (unitC === "ohm" || unitC === "Ω") {
            if (unitU !== "ohm" && unitU !== "Ω") {
                return false; 
            }
        } else {
            if (unitU.toLowerCase() !== unitC.toLowerCase()) {
                return false;
            }
        }
        
        const margenTolerancia = 0.15;
        return Math.abs(numU - numC) <= margenTolerancia;
    }
    
    return user.trim().toLowerCase() === correcta.trim().toLowerCase();
}

function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function verificarTodo() {
    const botones = document.querySelectorAll('.btn-check');
    let puntajeTotal = 0;
    
    botones.forEach(btn => {
        puntajeTotal += verificarEsta(btn);
    });

    const totalPreguntas = botones.length;
    const contenedorResultado = document.getElementById('resultado-final');
    
    if (contenedorResultado) {
        puntajeTotal = Math.round(puntajeTotal * 100) / 100;
        contenedorResultado.innerHTML = `Puntaje: ${puntajeTotal} / ${totalPreguntas}`;
        
        const porcentaje = (puntajeTotal / totalPreguntas) * 100;
        if (porcentaje >= 60) {
            contenedorResultado.style.color = "#4CAF50"; 
        } else {
            contenedorResultado.style.color = "#FF5252"; 
        }
    }
}

window.onscroll = function() {
    const btnSubir = document.getElementById("btn-subir");
    if (btnSubir) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btnSubir.style.display = "block";
        } else {
            btnSubir.style.display = "none";
        }
    }
};

function irArriba() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
}

function terminarArrastre(ev) {
    ev.currentTarget.classList.remove("arrastrando");
}

function permitirDrop(ev) {
    ev.preventDefault();
}

function entrarDrop(ev) {
    ev.preventDefault();
    ev.currentTarget.classList.add("zona-hover");
}

function salirDrop(ev) {
    ev.currentTarget.classList.remove("zona-hover");
}

function soltarItem(ev, zona) {
    ev.preventDefault();
    zona.classList.remove("zona-hover"); 
    
    const idArrastrado = ev.dataTransfer.getData("text/plain");
    const htmlArrastrado = ev.dataTransfer.getData("text/html");
    
    if (idArrastrado) {
        zona.innerHTML = htmlArrastrado;
        zona.dataset.user = idArrastrado;
        zona.style.borderColor = "#2196F3";
    }
}

let itemSeleccionado = null; 

function seleccionarItem(elemento) {
    document.querySelectorAll('.item-drag').forEach(el => el.classList.remove('seleccionado'));
    elemento.classList.add('seleccionado');
    
    itemSeleccionado = {
        id: elemento.dataset.id,
        html: elemento.innerHTML 
    };
}

function arrastrarItem(ev) {
    ev.dataTransfer.setData("text/plain", ev.currentTarget.dataset.id);
    ev.dataTransfer.setData("text/html", ev.currentTarget.innerHTML); 
    
    setTimeout(() => ev.currentTarget.classList.add("arrastrando"), 0);
}

function clickZonaDrop(zona) {
    if (itemSeleccionado) {
        zona.innerHTML = itemSeleccionado.html;
        zona.dataset.user = itemSeleccionado.id;
        zona.style.borderColor = "#2196F3";
        
        document.querySelectorAll('.item-drag').forEach(el => el.classList.remove('seleccionado'));
        itemSeleccionado = null;
    }
}
