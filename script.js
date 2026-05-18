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
                    
                    const imgHtml = opt.img ? `<br><img src="${opt.img}" style="max-height: 120px; display: block;">` : '';
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
                // Estructuramos cada bloque con su flecha interna para controlarlo mejor en celulares
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

                html += `</div>`; // Cierra bloque-completo
            });
            
            html += `</div>`;
        }

        html += `
                <button class="btn-check" onclick="verificarEsta(this)" style="margin-top: 10px;">Verificar</button>
                <p class="resultado" style="margin-top: 10px;"></p>
            </div><hr>`;

        contenedor.innerHTML += html;
    });
}

function verificarEsta(boton) {
    const p = boton.parentElement;
    const resultado = p.querySelector(".resultado");
    
    let puntajePregunta = 0;
    let estado = "incorrecto"; // "correcto", "parcial", "incorrecto"
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
        const correcta = p.dataset.correct || "";
        textoFinalRespuesta = correcta;
        
        if (user.trim() !== "") {
            if (compararRespuestasTexto(user, correcta)) {
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

        // --- NUEVO: FEEDBACK VISUAL PARA LA IMAGEN CON ZONAS ---
        const contZonas = p.querySelector('.img-zonas-container');
        if (contZonas) {
            // 1. Clonamos el contenedor entero de la imagen
            const clon = contZonas.cloneNode(true);
            
            const selectsOriginales = contZonas.querySelectorAll('select');
            const zonasFlotantesClon = clon.querySelectorAll('.zona-flotante');
            
            // 2. Reemplazamos cada menú por una etiqueta verde con la respuesta correcta
            zonasFlotantesClon.forEach((zonaClon, i) => {
                const correcta = selectsOriginales[i].dataset.correct;
                
                // Le damos diseño de "etiqueta correcta"
                zonaClon.innerHTML = `<span style="padding: 4px 8px; font-size: 0.85rem; font-weight: bold; color: white; background-color: #4CAF50; border-radius: 4px; white-space: nowrap;">${correcta}</span>`;
                
                // Limpiamos los estilos oscuros de la caja contenedora clonada
                zonaClon.style.border = "none";
                zonaClon.style.background = "transparent";
                zonaClon.style.boxShadow = "none";
            });
            
            // 3. Achicamos el clon para que quede bien como "miniatura" en el feedback
            clon.style.maxWidth = "350px"; 
            clon.style.margin = "15px auto 0"; // Lo centramos
            
            // Lo inyectamos en el texto final
            textoFinalRespuesta = "<br>" + clon.outerHTML;
            
        } else {
            // Si es un grupo de selects normal (como el de los resistores), sigue mostrando texto
            textoFinalRespuesta = respuestasArray.join(", ");
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