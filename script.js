/* ============================================
   SCRIPT.JS - Página Romántica de Cumpleaños para May
   ============================================= */
'use strict';

// =============================================
// ⚙️ CONFIGURACIÓN PERSONALIZABLE — EDITA AQUÍ
// =============================================

// 🎁 PANTALLA REGALO
const CLICS_NECESARIOS = 20; // cuántos clics para abrir el regalo

// 🔑 (No hay código aquí — se abre con clics)

// 🌸 PALABRAS PARA PARTÍCULAS — ADORNOS (explosión GRANDE)
const MAY_WORDS_BIG = [
  'May 💕','Para May 🌸','Te amo May','My beautiful May',
  'Siempre tuya May','Eres mi sol May','May mi cielito 🥹',
  'May mi amor eterno 💞','May eres perfecta 🌺',
  'Mi vida entera May','May mi tesoro 🎀','Para siempre May 💗',
];
// 🌸 PALABRAS PARA PARTÍCULAS — FONDO (explosión PEQUEÑA)
const MAY_WORDS_SMALL = [
  'May','Amor','May 🌸','💕 May','May ✨','Beso','May ❤️',
  'Mi reina May','May 💗','💖 May','Siempre May','May 🎀',
];
// =============================================
// 🎁 INICIALIZACIÓN DEL REGALO (CORREGIDO)
// =============================================
(function iniciarRegalo() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', iniciarRegalo);
        return;
    }
    
    const giftBox = document.getElementById('giftBox');
    const giftLabel = document.getElementById('giftClickLabel');
    const giftBar = document.getElementById('giftProgressBar');
    const giftScreen = document.getElementById('giftScreen');
    const mainApp = document.getElementById('mainApp');
    
    if (!giftBox) {
        console.error("giftBox no encontrado");
        return;
    }
    
    if (localStorage.getItem('giftOpened') === 'yes') {
        if (giftScreen) giftScreen.style.display = 'none';
        if (mainApp) mainApp.classList.remove('hidden');
        return;
    }
    
    let clics = 0;
    const TOTAL = 20;
    
    function handleClick(e) {
        e.stopPropagation();
        clics++;
        
        if (giftLabel) giftLabel.textContent = `${clics} / ${TOTAL} clics 💗`;
        if (giftBar) giftBar.style.width = (clics / TOTAL * 100) + '%';
        
        giftBox.style.transform = 'scale(0.96)';
        setTimeout(() => giftBox.style.transform = '', 120);
        
        if (clics >= TOTAL) {
            if (giftScreen) giftScreen.classList.add('closing');
            setTimeout(() => {
                if (giftScreen) giftScreen.style.display = 'none';
                if (mainApp) mainApp.classList.remove('hidden');
                localStorage.setItem('giftOpened', 'yes');
                launchConfetti(150);
            }, 800);
        }
    }
    
    giftBox.addEventListener('click', handleClick);
    giftBox.addEventListener('touchstart', handleClick);
    console.log("✅ Regalo inicializado");
})();

// =============================================
// 📸 SECCIÓN 1: CARTA ROMÁNTICA (CARRUSEL)
// Pon tus imágenes en assets/carta/
// =============================================
const TOTAL_SLIDES_CARTA = 5;
const FRASES_CARTA = [
  'I love you very much forever my gorgeous girl 🥹💗🌸',
  'Tú eres mi vidita entera pol siempre <3 💗🌟',
  'TE AMOO mushísimo mi niñita helmoshita de todito mi korashon HEHE (≧▽≦) 💗💞',
  'Siempre vas a embelleshel mi vidita entera kon tu precioshísima perfección <3 💗🩷✨️',
  'Bem juntitos pol siempre mi my gud girl of my life HEHE ;) 💗💕',
];
// Rutas de imagen (si no existen se muestra placeholder)
const IMGS_CARTA = Array.from({length: TOTAL_SLIDES_CARTA}, (_,i) => `assets/carta/carta${i+1}.jpg`);

// =============================================
// 🎵 SECCIÓN 2: PLAYLIST
// Pon tus mp3 en assets/playlist/
// =============================================
const PLAYLIST = [
  { name:'♪ Nuestra Canción ♪',      src:'assets/playlist/song1.mp3',  imgFolder:'cancion1', letra:'Eres mi razón de ser, mi todo, mi mundo...' },
  { name:'♪ Eres Tú ♪',              src:'assets/playlist/song2.mp3',  imgFolder:'cancion2', letra:'Tu amor me completa, no hay nadie como tú...' },
  { name:'♪ Amor Eterno ♪',          src:'assets/playlist/song3.mp3',  imgFolder:'cancion3', letra:'Por siempre juntos, eternidades de amor...' },
  { name:'♪ Contigo ♪',              src:'assets/playlist/song4.mp3',  imgFolder:'cancion4', letra:'A tu lado quiero estar siempre...' },
  { name:'♪ Para Siempre ♪',         src:'assets/playlist/song5.mp3',  imgFolder:'cancion5', letra:'Hasta el fin del mundo, contigo...' },
  { name:'♪ Mi Vida ♪',              src:'assets/playlist/song6.mp3',  imgFolder:'cancion6', letra:'Eres todo para mí, mi razón de vivir...' },
  { name:'♪ Tu Mirada ♪',            src:'assets/playlist/song7.mp3',  imgFolder:'cancion7', letra:'Me hipnotiza tu mirar, me enamoro más...' },
  { name:'♪ Promesas ♪',             src:'assets/playlist/song8.mp3',  imgFolder:'cancion8', letra:'Te prometo amor eterno, siempre a tu lado...' },
  { name:'♪ Recuerdos ♪',            src:'assets/playlist/song9.mp3',  imgFolder:'cancion9', letra:'Cada momento a tu lado es un tesoro...' },
  { name:'♪ Futuro ♪',               src:'assets/playlist/song10.mp3', imgFolder:'cancion10',letra:'Construyamos juntos el futuro que soñamos...' },
];

// =============================================
// 📝 SECCIÓN 3: TEST DE AMOR
// =============================================
const TITULO_TEST = '¿Cuánto me conoces? 💗';
const PREGUNTAS_FORMULARIO = [
  { pregunta:'¿Cuál es mi color favorito?',           opciones:['Rojo','Azul','Verde','Rosa','Amarillo'],                correcta:3 },
  { pregunta:'¿Cuál es mi comida favorita?',           opciones:['Pizza','Sushi','Pasta','Hamburguesa','Tacos'],         correcta:2 },
  { pregunta:'¿Qué día nos conocimos?',                opciones:['Lunes','Martes','Miércoles','Jueves','Viernes'],       correcta:4 },
  { pregunta:'¿Cuál es mi animal favorito?',           opciones:['Perro','Gato','Conejo','Hámster','Pájaro'],           correcta:0 },
  { pregunta:'¿Cuál es mi película favorita?',         opciones:['Titanic','Avengers','El Diario de Noah','La Bella y la Bestia','Frozen'], correcta:2 },
  { pregunta:'¿Cuál es mi bebida favorita?',           opciones:['Café','Jugo de naranja','Agua','Té','Chocolate caliente'], correcta:4 },
  { pregunta:'¿Cuál es mi estación favorita?',         opciones:['Verano','Otoño','Invierno','Primavera','Todas'],      correcta:3 },
  { pregunta:'¿Qué música me gusta más?',              opciones:['Rock','Pop','Reggaetón','Clásica','Electrónica'],     correcta:1 },
  { pregunta:'¿Cuál es mi deporte favorito?',          opciones:['Fútbol','Natación','Tenis','Running','Ninguno'],      correcta:1 },
  { pregunta:'¿Cuál es mi postre favorito?',           opciones:['Helado','Pastel de chocolate','Flan','Fresas con crema','Churros'], correcta:0 },
  { pregunta:'¿A qué hora me despierto normalmente?',  opciones:['6 am','7 am','8 am','9 am','10 am'],                 correcta:2 },
  { pregunta:'¿Cuál es mi flor favorita?',             opciones:['Rosa','Tulipán','Girasol','Orquídea','Margarita'],   correcta:0 },
  { pregunta:'¿Qué prefiero: playa o montaña?',        opciones:['Playa','Montaña','Los dos igual','Ninguno','Ciudad'], correcta:0 },
  { pregunta:'¿Cuál es mi mayor sueño?',               opciones:['Viajar por el mundo','Tener familia','Ser famoso','Mucho dinero','Felicidad'], correcta:4 },
  { pregunta:'¿Qué me hace reír siempre?',             opciones:['Chistes malos','Memes','Caídas','Tus ocurrencias','Películas de comedia'], correcta:3 },
  { pregunta:'¿Cuál es mi libro favorito?',            opciones:['Harry Potter','El Principito','Cien años de soledad','Ninguno','Otro'], correcta:1 },
  { pregunta:'¿Cómo me gustan los abrazos?',           opciones:['Cortos','Largos y apretados','Solo de lado','No me gustan','Depende'], correcta:1 },
  { pregunta:'¿Cuál es mi canción favorita?',          opciones:['No tengo una','Nuestra canción','La que tú cantes','Depende del día','Una clásica'], correcta:2 },
  { pregunta:'¿Qué hago cuando estoy triste?',         opciones:['Lloro solo','Busco a alguien','Como','Escucho música','Te busco a ti'], correcta:4 },
  { pregunta:'¿Cuánto te amo?',                        opciones:['Mucho','Muchísimo','Infinito','Eternamente','Todas las anteriores'], correcta:4 },
];
const MENSAJES_RESULTADO = [
  { min:0,  max:30,  texto:'¡Hay que conocernos más! Pero ya lo iremos arreglando 💕' },
  { min:31, max:60,  texto:'Vamos por buen camino, me conoces bastante 💗' },
  { min:61, max:80,  texto:'¡Me conoces muy bien! Eres increíble 🥰' },
  { min:81, max:100, texto:'¡ERES MI ALMA GEMELA! ¡Te amo muchísimo! 💖✨' },
];

// =============================================
// 🎮 SECCIÓN 4: JUEGO RPG
// =============================================
const JUEGO_CONFIG = {
  mapaSize: 8,
  tiposEnemigos: ['Carta 💌','Corazón 💗','Lazo 🎀','Flor 🌸','Estrella ⭐'],
  vidaInicial: 100,
  puntosPorEnemigo: 10,
  enemigosParaSubirNivel: 3,
  nivelMaximo: 10,
  ataques: ['Atacar con amor 💕','Regalar flor 🌸','Abrazo profundo 🤗'],
};

// =============================================
// 💌 SECCIÓN 5: CARTA INTERACTIVA
// =============================================
const CARTA_TEXTO = `Querida May... Desde que te conocí, supe que eras especial para mí. Cada beso tuyo ha sido un regalo del cielo. Recuerdo perfectamente el día que me tomaste de la mano por primera vez, sentí electricidad pura. Tu sonrisa ilumina todita mi vida entera. Cada abrazo tuyo es mi lugar más seguro en el mundo. Eres mi promesa de amor eterno, mi sueño más hermoso hecho realidad. Te quiero más que a nada en este mundo, con todo mi corazón. Eres mi todo, mi razón de ser, mi mayor felicidad. Por siempre tuyo, con infinito amor.`;
const PALABRAS_CLAVE_CARTA = [
  { palabra:'beso',         mensaje:'Cada beso tuyo es magia pura ✨',                    imagen:'assets/palabras/beso.jpg' },
  { palabra:'mano',         mensaje:'La primera vez que tomé tu mano todo cambió 💗',     imagen:'assets/palabras/mano.jpg' },
  { palabra:'sonrisa',      mensaje:'Tu sonrisa es lo más hermoso del universo 🌸',       imagen:'assets/palabras/sonrisa.jpg' },
  { palabra:'abrazo',       mensaje:'Tus abrazos son mi hogar favorito 🥹',               imagen:'assets/palabras/abrazo.jpg' },
  { palabra:'promesa',      mensaje:'Prometo amarte siempre, para siempre 💍',            imagen:'assets/palabras/promesa.jpg' },
  { palabra:'te quiero',    mensaje:'Te quiero con toda mi alma 💖',                      imagen:'assets/palabras/tequiero.jpg' },
  { palabra:'corazón',      mensaje:'Mi corazón late solo por ti 💗',                     imagen:'assets/palabras/corazon.jpg' },
];

// =============================================
// 🌸 SECCIÓN 6: PAISAJE & JUEGOS
// =============================================
const ADORNOS_PAISAJE = [
  { emoji:'🌸', x:10, y:20, mensaje:'Eres hermosa como una flor' },
  { emoji:'💗', x:50, y:60, mensaje:'Mi corazón late por ti' },
  { emoji:'⭐', x:80, y:25, mensaje:'Brillas como una estrella' },
  { emoji:'☁️', x:20, y:10, mensaje:'Eres mi cielo azul' },
  { emoji:'🦋', x:70, y:70, mensaje:'Vuelas en todos mis sueños' },
  { emoji:'🌺', x:35, y:55, mensaje:'Tan bella como las flores' },
  { emoji:'🎀', x:88, y:50, mensaje:'Eres mi lazo favorito' },
];
const PALABRAS_AHORCADO = ['amor','beso','abrazo','corazon','promesa','eternidad','romance','ternura','cariño','pasion','felicidad','sueno','belleza','mariposa','perfeccion'];

// =============================================
// 🌌 SECCIÓN 7: NUESTRO UNIVERSO
// =============================================
const PLANETAS = [
  { nombre:'Nuestro inicio', color:'linear-gradient(135deg,#fda4af,#f9a8d4)', emoji:'🌹', contenido:'timeline' },
  { nombre:'Razones de amor',color:'linear-gradient(135deg,#c4b5fd,#a78bfa)', emoji:'💜', contenido:'razones'  },
  { nombre:'Cartas secretas', color:'linear-gradient(135deg,#fde68a,#fbbf24)', emoji:'💌', contenido:'cartas'   },
  { nombre:'Futuro juntos',   color:'linear-gradient(135deg,#6ee7b7,#34d399)', emoji:'🌿', contenido:'futuro'   },
];
const TIMELINE_MOMENTOS = [
  { fecha:'18 de Marzo 2025',  descripcion:'El día más especial: nos encontramos 💗', imagen:'assets/universo/timeline1.jpg' },
  { fecha:'Primera semana',    descripcion:'Nuestra primera conversación larga ✨',   imagen:'assets/universo/timeline2.jpg' },
  { fecha:'Primer mes',        descripcion:'Celebramos nuestro primer mes juntos 🎉', imagen:'assets/universo/timeline3.jpg' },
  { fecha:'Hoy y siempre',     descripcion:'Seguimos construyendo nuestra historia 💕',imagen:'assets/universo/timeline4.jpg' },
];
const RAZONES_AMOR = [
  'Por tu sonrisa que ilumina mis días','Por cómo me miras con tanto amor',
  'Por tu forma de ser tan dulce conmigo','Por tu paciencia infinita conmigo',
  'Por tu ternura al despertar cada día','Por cómo me haces reír siempre',
  'Por tu fortaleza en los malos momentos','Por tu forma de abrazarme tan fuerte',
  'Por cada detalle que tienes conmigo','Por hacerme sentir el más afortunado',
  'Por tu voz que me calma siempre','Por tu corazón tan hermoso y puro',
];
const CARTAS_SECRETAS = [
  { titulo:'La primera vez que te vi',   mensaje:'Supe que eras especial. Mi corazón latió diferente.',  imagen:'assets/universo/carta1.jpg' },
  { titulo:'Mi promesa eterna',          mensaje:'Siempre estaré a tu lado, en las buenas y en las malas.', imagen:'assets/universo/carta2.jpg' },
  { titulo:'El futuro que imagino',      mensaje:'Me imagino un futuro lleno de aventuras y amor contigo.', imagen:'assets/universo/carta3.jpg' },
  { titulo:'Gracias por existir',        mensaje:'Gracias por existir y por hacer mi mundo más hermoso.', imagen:'assets/universo/carta4.jpg' },
];
const BUCKET_LIST_INICIAL = [
  { texto:'Viajar a la playa juntos', marcado:false },
  { texto:'Ver una película bajo las estrellas', marcado:false },
  { texto:'Bailar juntos en la lluvia', marcado:false },
  { texto:'Cocinar nuestra receta favorita', marcado:false },
  { texto:'Tener una foto juntos en cada lugar especial', marcado:false },
];
const FECHA_ESPECIAL = '2026-03-18'; // próximo aniversario

// =============================================
// 🌻 SECCIÓN 8: JARDÍN
// =============================================
const FLORES_JARDIN = [
  { emoji:'🌸', foto:'assets/jardin/recuerdo1.jpg', mensaje:'Nuestra primera cita en el parque 💗', audio:null },
  { emoji:'🌺', foto:'assets/jardin/recuerdo2.jpg', mensaje:'El día que me dijiste te amo 🥹',       audio:null },
  { emoji:'🌷', foto:'assets/jardin/recuerdo3.jpg', mensaje:'Nuestro primer viaje juntos ✈️',        audio:null },
  { emoji:'🌻', foto:'assets/jardin/recuerdo4.jpg', mensaje:'La noche que vimos las estrellas 🌙',   audio:null },
  { emoji:'💐', foto:'assets/jardin/recuerdo5.jpg', mensaje:'Cuando cocinamos juntos por primera vez 🍳', audio:null },
  { emoji:'🌹', foto:'assets/jardin/recuerdo6.jpg', mensaje:'Nuestro primer mes de aniversario 🎉',  audio:null },
  { emoji:'🪷', foto:'assets/jardin/recuerdo7.jpg', mensaje:'Esa tarde de lluvia especial 🌧️',       audio:null },
  { emoji:'🌼', foto:'assets/jardin/recuerdo8.jpg', mensaje:'Cuando me presentaste a tu familia 💕', audio:null },
  { emoji:'💮', foto:'assets/jardin/recuerdo9.jpg', mensaje:'Nuestra canción sonó en la radio 🎵',   audio:null },
];

// =============================================
// 🗺️ SECCIÓN 9: MAPA
// =============================================
const LUGARES_MAPA = [
  { x:80,  y:120, titulo:'Donde nos conocimos',  foto:'assets/mapa/lugar1.jpg', fecha:'18/03/2025', mensaje:'Aquí empezó todo, el día que nuestras vidas cambiaron para siempre.' },
  { x:200, y:90,  titulo:'Nuestra primera cita', foto:'assets/mapa/lugar2.jpg', fecha:'25/03/2025', mensaje:'Compartimos momentos increíbles y nos reímos sin parar.' },
  { x:160, y:200, titulo:'Nuestro primer beso',  foto:'assets/mapa/lugar3.jpg', fecha:'01/04/2025', mensaje:'Un momento mágico que nunca olvidaré.' },
  { x:280, y:160, titulo:'Lugar favorito',       foto:'assets/mapa/lugar4.jpg', fecha:'15/04/2025', mensaje:'Nuestro rincón especial en el mundo.' },
  { x:100, y:240, titulo:'Nuestro restaurante',  foto:'assets/mapa/lugar5.jpg', fecha:'18/04/2025', mensaje:'Donde celebramos nuestro primer mes juntos.' },
];

// =============================================
// 📦 SECCIÓN 10: CAJA 3D
// =============================================
const RECUERDOS_3D = [
  { tipo:'foto',   contenido:'assets/caja3d/foto1.jpg',                    posicion:'frente',   mensaje:'Nuestro momento más especial juntos 💗' },
  { tipo:'nota',   contenido:'Eres mi razón de ser. Te amo más cada día.', posicion:'izquierda',mensaje:'Te escribí esto un día lluvioso pensando en ti' },
  { tipo:'regalo', contenido:'Un abrazo infinito',                         posicion:'derecha',  mensaje:'Te regalo mi corazón por siempre 💝' },
  { tipo:'foto',   contenido:'assets/caja3d/foto2.jpg',                    posicion:'arriba',   mensaje:'La noche que miramos las estrellas ✨' },
  { tipo:'nota',   contenido:'Prometo cuidarte y amarte siempre.',          posicion:'abajo',    mensaje:'Mi promesa de amor eterno 💍' },
  { tipo:'regalo', contenido:'Mil sonrisas para ti',                       posicion:'frente',   mensaje:'Espero que este recuerdo te haga sonreír' },
];

// =============================================
// ❤️ SECCIÓN 11: PREGUNTAS DEL CORAZÓN
// =============================================
const PREGUNTAS_CORAZON = [
  { pregunta:'¿En qué mes comenzó nuestra historia?', opciones:['Enero','Febrero','Marzo','Abril'],         correcta:2, desbloqueo:'assets/preguntas/foto1.jpg'  },
  { pregunta:'¿Cuántos clics necesitaste para abrir el regalo?', opciones:['10','15','20','25'],             correcta:2, desbloqueo:'assets/preguntas/foto2.jpg'  },
  { pregunta:'¿Cuál es la fecha especial de nuestra historia?',  opciones:['14 Febrero','18 Marzo','1 Abril','15 Mayo'], correcta:1, desbloqueo:'assets/preguntas/foto3.jpg'  },
  { pregunta:'¿Cómo te llamas tú, mi amor?',          opciones:['Luna','May','Sol','Estrella'],              correcta:1, desbloqueo:'assets/preguntas/foto4.jpg'  },
  { pregunta:'¿Cuánto te amo?',                        opciones:['Mucho','Infinito','Eternamente','Todo lo anterior'], correcta:3, desbloqueo:'assets/preguntas/foto5.jpg'  },
  { pregunta:'¿Cuál es nuestra canción?',              opciones:['La primera','La favorita','La nuestra','Todas'],     correcta:2, desbloqueo:'assets/preguntas/foto6.jpg'  },
  { pregunta:'¿Qué soy yo para ti?',                   opciones:['Tu amigo','Tu todo','Tu compañero','Tu caballero'], correcta:1, desbloqueo:'assets/preguntas/foto7.jpg'  },
  { pregunta:'¿Cuántas secciones tiene esta página?',  opciones:['10','11','12','13'],                       correcta:3, desbloqueo:'assets/preguntas/foto8.jpg'  },
  { pregunta:'¿Qué emoji te representa a ti?',         opciones:['🌸','💗','✨','Todo lo anterior'],          correcta:3, desbloqueo:'assets/preguntas/foto9.jpg'  },
  { pregunta:'¿Qué frase te digo siempre?',            opciones:['Te amo May','Eres perfecta','Mi niñita helmoshita','Todas'], correcta:3, desbloqueo:'assets/preguntas/foto10.jpg' },
  { pregunta:'¿Cómo escribo "hermosita" yo?',          opciones:['hermosita','helmoshita','hermoshita','elmoshita'],  correcta:1, desbloqueo:'assets/preguntas/foto11.jpg' },
  { pregunta:'¿Qué significa HEHE para mí?',           opciones:['Risa','Amor puro','Felicidad','Todo junto'],       correcta:3, desbloqueo:'assets/preguntas/foto12.jpg' },
  { pregunta:'¿Cuál es la sección especial?',          opciones:['Sección 12','Sección 11','Sección 13','Sección 10'], correcta:2, desbloqueo:'assets/preguntas/foto13.jpg' },
  { pregunta:'¿Qué hay en la sección 13?',             opciones:['Un juego','El contador de amor','Una carta','Eterno Amor'], correcta:3, desbloqueo:'assets/preguntas/foto14.jpg' },
  { pregunta:'¿Cuánto dura nuestro amor?',             opciones:['Un año','Siempre','Eternidades','Infinitas eternidades'], correcta:3, desbloqueo:'assets/preguntas/foto15.jpg' },
];

// =============================================
// 📜 SECCIÓN 12: CARTA INFINITA
// =============================================
const CARTA_INFINITA_TEXT = `Mi amor... Desde el día en que te conocí, supe que mi vida cambiaría para siempre. Eres lo más especial que me ha pasado en esta vida entera. Cada momento a tu lado es un tesoro que guardo en mi corazón. Recuerdo aquella primera vez que nos reímos juntos — fue mágico, como si el tiempo se hubiera detenido solo para nosotros. La primera vez que me tomaste de la mano, sentí electricidad pura recorrer todo mi ser. La primera vez que me dijiste "te amo", mi corazón explotó de una felicidad que nunca había sentido. Han pasado días, meses... y cada día te amo más infinitamente. No hay nadie en el mundo que pueda ocupar el lugar que tienes en mi corazón. Eres mi sol que ilumina mis mañanas, mi luna que cuida mis noches, mis estrellas que guían mi camino. Eres absolutamente mi todo. Cuando estoy triste, pienso en tu sonrisa y todo mejora. Cuando estoy solo, recuerdo tu voz y me siento acompañado. Contigo aprendí que el amor eterno existe, que los sueños se hacen realidad, que la vida vale infinitamente más cuando se tiene a alguien como tú. Prometo amarte siempre, cuidarte siempre, hacerte feliz siempre. Prometo ser tu noble y fiel caballero hasta el último de mis días. Por siempre tuyo, con todo el amor de mi corazón, eternamente y más allá del infinito.`;
const PALABRAS_SECRETAS_CARTA = ['amor','mágico','corazón','siempre','prometo','eternamente','infinito','felicidad'];
const SORPRESA_FINAL_SRC = 'assets/carta-infinita/sorpresa.jpg';

// =============================================
// ✨ SECCIÓN 13: ETERNO AMOR
// =============================================
const FECHA_INICIO_AMOR    = '2025-03-18';
const TITULO_SECCION_13    = '✨ ETERNO AMOR ✨';
const SUBTITULO_SECCION_13 = '💖 PARA SIEMPRE JUNTOS 💖';
const TOTAL_SLIDES_SEC13   = 5;
const FRASES_CARRUSEL_13   = [
  'El día que nuestras miradas se cruzaron por primera vez ✨',
  'Cada segundo a tu lado es un regalo del cielo 💗',
  'Prometo amarte hasta el infinito y más allá ∞',
  'Eres mi presente, mi futuro y mi eternidad 🌟',
  'Contigo descubrí el verdadero significado del amor 💖',
];
const IMGS_SEC13 = Array.from({length: TOTAL_SLIDES_SEC13}, (_,i) => `assets/seccion13/carrusel/imagen${i+1}.jpg`);
const MENSAJE_FINAL_LOGRO = [
  'Hemos recorrido {dias} días juntos, y cada día te amo más... Gracias por ser mi todo. 💗',
  'Desde el 18 de marzo de 2025, mi vida es contigo. {dias} días de pura felicidad.',
  'Contigo aprendí que el amor eterno existe. {dias} días y contando... ¡Te amo! 💕',
  'Cada día a tu lado es una nueva aventura. Llevamos {dias} días de esta hermosa historia. 💗',
];
const FRASES_ADORNOS_FINAL = [
  'Eres mi sol','Te amo infinito','Contigo hasta el fin del mundo',
  'Cada día te elijo','Eres mi razón de ser','Mi corazón late por ti',
  'Eres mi sueño hecho realidad','No hay nadie como tú','Te amo más que ayer',
  'Eres mi todo','Gracias por existir','Mi amor eterno',
];
const CERTIFICADO_TITULO   = 'Certificado de Amor Eterno';
const CERTIFICADO_MENSAJE  = 'Otorgado a mi May hermosa por completar todas las secciones y demostrar nuestro amor infinito.';

// =============================================
// OPCIONES MENÚ (imágenes en assets/menu/)
// =============================================
const OPCIONES_MENU = [
  { img:'assets/menu/opcion1.jpg',  emoji:'💌', titulo:'Carta Romántica',        seccion:1  },
  { img:'assets/menu/opcion2.jpg',  emoji:'🎵', titulo:'Playlist Musical',       seccion:2  },
  { img:'assets/menu/opcion3.jpg',  emoji:'📝', titulo:'Test de Amor',           seccion:3  },
  { img:'assets/menu/opcion4.jpg',  emoji:'🎮', titulo:'Juego RPG',              seccion:4  },
  { img:'assets/menu/opcion5.jpg',  emoji:'💌', titulo:'Carta Interactiva',      seccion:5  },
  { img:'assets/menu/opcion6.jpg',  emoji:'🌸', titulo:'Paisaje & Juegos',       seccion:6  },
  { img:'assets/menu/opcion7.jpg',  emoji:'🌌', titulo:'Nuestro Universo',       seccion:7  },
  { img:'assets/menu/opcion8.jpg',  emoji:'🌻', titulo:'Jardín Secreto',         seccion:8  },
  { img:'assets/menu/opcion9.jpg',  emoji:'🗺️', titulo:'Mapa del Amor',          seccion:9  },
  { img:'assets/menu/opcion10.jpg', emoji:'📦', titulo:'Caja 3D',                seccion:10 },
  { img:'assets/menu/opcion11.jpg', emoji:'❤️', titulo:'Preguntas del Corazón',  seccion:11 },
  { img:'assets/menu/opcion12.jpg', emoji:'📜', titulo:'Carta Infinita',         seccion:12 },
  { img:'assets/menu/opcion13.jpg', emoji:'✨', titulo:'✨ Eterno Amor ✨',       seccion:13, bloqueada:true },
];

// =============================================
// EMOJIS PARTÍCULAS
// =============================================
const EMOJI_BIG   = ['💖','💗','💘','💕','💓','✨','🎀','🌸','🦋','🥹','💝','💞','🌺','🌟','⭐','🍒','💫'];
const EMOJI_SMALL = ['💗','✨','🌸','💕','⭐','🌟','💖','🎀'];
const TRANSITIONS_LIST = [
  {i:'trans-fade-in',   o:'trans-fade-out'},
  {i:'trans-sright-in', o:'trans-sright-out'},
  {i:'trans-sleft-in',  o:'trans-sleft-out'},
  {i:'trans-zoom-in',   o:'trans-zoom-out'},
  {i:'trans-blur-in',   o:'trans-blur-out'},
  {i:'trans-flip-in',   o:'trans-flip-out'},
  {i:'trans-rot-in',    o:'trans-rot-out'},
  {i:'trans-sup-in',    o:'trans-sup-out'},
  {i:'trans-diag-in',   o:'trans-diag-out'},
  {i:'trans-glitch-in', o:'trans-glitch-out'},
];

// =============================================
// ESTADO GLOBAL
// =============================================
let transIdx = 0;
let particlePool = [];
const MAX_PARTICLES = 60;

// Música global
let globalSongIdx = 0;
let globalPlaying = false;
let globalPlayerMin = false;
let plImgInterval = null;

// Logros: { sec1:{done:[false,...], complete:false}, ... }
let achievements = {};
let sectionTimers = {}; // { secN: startTime }

// Telemetría
let telemetry = { visits:[], sections:{}, interactions:[], songs:[], drawings:[], texts:[], formAnswers:[], loveBarValues:[], bucketList:[], unlockedPhotos:[], sec13Unlocked:false };

// RPG estado
let rpgState = null;

// Test estado
let testState = { answers:[], current:0, answered:false, restarted:false, answeredAfterRestart:0 };

// Carta interactiva
let cartaClickedWords = new Set();

// Carta infinita
let cartaSecretClickCounts = {};
let cartaParaTimers = {};
let cartaScrollDone = false;
let cartaSorpresaShown = false;
let cartaSecretShown = {};
let cartaHoverTimers = {};

// Jardín
let jardinVisitDates = new Set();
let jardinRiegoCount = 0;
let jardinFloresClicked = new Set();

// Mapa
let mapaPinsClicked = new Set();
let mapaFutureList = [];

// Caja 3D
let cajaFound = new Set();
let cajaStartTime = 0;

// Preguntas corazón
let pqState = { current:0, answers:[], unlocked:[], restarted:false };

// Universo
let planetVisited = new Set();
let timelineOpened = new Set();
let flipFlipped = new Set();
let cartasOpened = new Set();
let bucketList = JSON.parse(localStorage.getItem('bucketList') || 'null') || BUCKET_LIST_INICIAL.map(x=>({...x}));
let bucketAdded = 0;

// Paisaje
let tttBoard, tttTurn, tttWins=0, tttLosses=0;
let hangmanWord='', hangmanGuessed=new Set(), hangmanFails=0, hangmanWins=0, hangmanLosses=0;
let loveBarValues = new Set();
let pizarraText = localStorage.getItem('pizarraText') || '';
let canvasColors = new Set();
let canvasSizes  = new Set();
let canvasCleared= 0;
let canvasDrawn  = false;
let canvasSaved  = false;
let adornosPaisajeClicked = new Set();

// Sección 13 carrusel
let sec13Slide = 0;
let sec13TransIdx = 0;
let sec13Transitioning = false;

// =============================================
// DOM REFS
// =============================================
const giftScreen   = document.getElementById('giftScreen');
const mainApp      = document.getElementById('mainApp');
const giftBox      = document.getElementById('giftBox');
const giftLabel    = document.getElementById('giftClickLabel');
const giftPBar     = document.getElementById('giftProgressBar');
const confettiCont = document.getElementById('confettiContainer');
const globalNotif  = document.getElementById('globalNotif');
const menuGrid     = document.getElementById('menuGrid');
const gpBarInner   = document.getElementById('gpBarInner');
const gpText       = document.getElementById('gpText');
const gpPct        = document.getElementById('gpPct');
const globalAudio  = document.getElementById('globalAudio');
const gpPlayBtn    = document.getElementById('gpPlayBtn');
const gpPrevBtn    = document.getElementById('gpPrevBtn');
const gpNextBtn    = document.getElementById('gpNextBtn');
const gpMiniName   = document.getElementById('gpMiniName');
const gpProgressFill  = document.getElementById('gpProgressFill');
const gpProgressThumb = document.getElementById('gpProgressThumb');
const gpProgressTrack = document.getElementById('gpProgressTrack');
const gpToggleBtn  = document.getElementById('gpToggleBtn');
const gpMini       = document.getElementById('gpMini');
const genericModal = document.getElementById('genericModal');
const modalContent = document.getElementById('modalContent');
const modalCloseBtn= document.getElementById('modalCloseBtn');

// =============================================
// INICIALIZACIÓN
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initAchievements();
  initGiftScreen();
  buildMenu();

  // Inicializar audio global
  globalAudio.volume = 0.7;
  if (PLAYLIST.length) loadGlobalSong(globalSongIdx, false);

  // Eventos música global
  gpPlayBtn.addEventListener('click', e => { e.stopPropagation(); toggleGlobalPlay(); });
  gpPrevBtn.addEventListener('click', e => { e.stopPropagation(); changeGlobalSong(-1); });
  gpNextBtn.addEventListener('click', e => { e.stopPropagation(); changeGlobalSong(1);  });
  gpToggleBtn.addEventListener('click', e => { e.stopPropagation(); toggleMiniPlayer(); });
  globalAudio.addEventListener('timeupdate', updateGlobalProgress);
  globalAudio.addEventListener('ended', () => changeGlobalSong(1));
  globalAudio.addEventListener('play',  () => { globalPlaying=true;  gpPlayBtn.textContent='⏸'; });
  globalAudio.addEventListener('pause', () => { globalPlaying=false; gpPlayBtn.textContent='▶'; });

  if (gpProgressTrack) {
    gpProgressTrack.addEventListener('click', e => {
      e.stopPropagation();
      if (!globalAudio.duration) return;
      const r = gpProgressTrack.getBoundingClientRect();
      globalAudio.currentTime = ((e.clientX - r.left) / r.width) * globalAudio.duration;
    });
  }

  // Cerrar modal
  modalCloseBtn.addEventListener('click', closeModal);
  genericModal.addEventListener('click', e => { if (e.target === genericModal) closeModal(); });

  // Clics en adornos (explosión grande)
  document.querySelectorAll('.clickable-deco').forEach(d => {
    const handler = e => {
      e.stopPropagation();
      const r = d.getBoundingClientRect();
      spawnParticles(r.left + r.width/2, r.top + r.height/2, 22, 'big');
      d.style.transform = 'scale(1.5) rotate(20deg)';
      setTimeout(() => d.style.transform = '', 300);
      recordInteraction('deco_click', d.textContent);
    };
    d.addEventListener('click', handler);
    d.addEventListener('touchstart', handler, {passive:true});
  });

  // Clics en fondo
  document.addEventListener('click', e => {
    if (!mainApp || mainApp.classList.contains('hidden')) return;
    if (e.target.closest('button,input,select,textarea,.clickable-deco,.music-player,.global-player,.menu-card,.sec-panel,.modal-overlay,canvas')) return;
    spawnParticles(e.clientX, e.clientY, 7, 'small');
  });
  document.addEventListener('touchstart', e => {
    if (!mainApp || mainApp.classList.contains('hidden')) return;
    if (e.target.closest('button,input,select,textarea,.clickable-deco,.music-player,.global-player,.menu-card,.sec-panel,.modal-overlay,canvas')) return;
    spawnParticles(e.touches[0].clientX, e.touches[0].clientY, 7, 'small');
  }, {passive:true});

  // Corazones flotantes
  startFloatingHearts();

  // Registrar visita
  telemetry.visits.push(new Date().toISOString());
  saveState();

  // Mensaje medianoche
  const h = new Date().getHours();
  if (h === 0) setTimeout(() => showNotif('✨ ¡Feliz cumpleaños, mi amor! 🌙✨'), 3000);

  // Admin: 5 clics en esquina inferior izquierda
  let adminClicks = 0;
  document.body.addEventListener('click', e => {
    if (e.clientX < 40 && e.clientY > window.innerHeight - 40) {
      adminClicks++;
      if (adminClicks >= 5) { adminClicks=0; exportTelemetry(); }
    }
  });
});

// =============================================
// PERSISTENCIA
// =============================================
function saveState() {
  try {
    localStorage.setItem('mayAchievements', JSON.stringify(achievements));
    localStorage.setItem('mayTelemetry',    JSON.stringify(telemetry));
    localStorage.setItem('mayBucketList',   JSON.stringify(bucketList));
    localStorage.setItem('mayMapaFuture',   JSON.stringify(mapaFutureList));
    localStorage.setItem('pizarraText',     pizarraText);
    localStorage.setItem('giftOpened',      mainApp.classList.contains('hidden') ? 'no' : 'yes');
  } catch(e) {}
}
function loadState() {
  try {
    const ach = localStorage.getItem('mayAchievements');
    if (ach) achievements = JSON.parse(ach);
    const tel = localStorage.getItem('mayTelemetry');
    if (tel) telemetry = JSON.parse(tel);
    const bl = localStorage.getItem('mayBucketList');
    if (bl) bucketList = JSON.parse(bl);
    const mf = localStorage.getItem('mayMapaFuture');
    if (mf) mapaFutureList = JSON.parse(mf);
    pizarraText = localStorage.getItem('pizarraText') || '';
    // Auto-abrir si regalo ya fue abierto
    if (localStorage.getItem('giftOpened') === 'yes') {
      giftScreen.style.display = 'none';
      mainApp.classList.remove('hidden');
      setTimeout(() => initMusic(), 500);
    }
  } catch(e) {}
}
function exportTelemetry() {
  const blob = new Blob([JSON.stringify({achievements, telemetry, bucketList, mapaFutureList}, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `may_datos_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
}
function recordInteraction(type, data) {
  telemetry.interactions.push({ type, data, ts: new Date().toISOString() });
}

// =============================================
// LOGROS
// =============================================
function initAchievements() {
  const defs = getAchievementDefs();
  for (const [k, list] of Object.entries(defs)) {
    if (!achievements[k]) {
      achievements[k] = { done: new Array(list.length).fill(false), complete: false };
    } else {
      // Asegurar longitud correcta
      while (achievements[k].done.length < list.length) achievements[k].done.push(false);
    }
  }
}
function getAchievementDefs() {
  return {
    sec1:  ['Ver todas las imágenes del carrusel','Usar botón anterior','Usar botón siguiente','Hacer clic en todos los puntos','Permanecer 30 segundos'],
    sec2:  ['Reproducir todas las canciones','Usar el scrubber','Botón siguiente','Botón anterior','Cambiar volumen','Usar minimizar/maximizar','60 segundos en sección'],
    sec3:  ['Responder todas las preguntas','Usar anterior y siguiente','Ver resultado','Reiniciar test','Responder 5 tras reinicio','Obtener 100%'],
    sec4:  ['Explorar todo el mapa','Derrotar todos los tipos de enemigos','Alcanzar nivel máximo','Usar todos los ataques','Perder una batalla','Reiniciar juego','5 minutos en juego'],
    sec5:  ['Clic en todas las palabras clave','Scroll completo','Abrir todos los modales','45 segundos en sección'],
    sec6:  ['Clic en todos los adornos','Ganar una partida de 3 en raya','Ganar una partida de ahorcado','Perder ahorcado','Todos los valores del slider','Escribir en pizarra','Dibujar en canvas','3 colores diferentes','3 grosores diferentes','Limpiar canvas'],
    sec7:  ['Visitar 4 planetas','Abrir todos los momentos timeline','Voltear todas las tarjetas','Abrir todas las cartas secretas','Marcar todos los ítems bucket list','Agregar 2 ítems nuevos','Ver contador llegar a 0'],
    sec8:  ['Clic en todas las flores','Ver todos los modales','Escuchar todos los audios','Regar 3 veces','Visitar en 3 días diferentes'],
    sec9:  ['Clic en todos los pines','Abrir todos los modales','Agregar 3 lugares futuros','Eliminar 1 lugar futuro','Marcar 1 como visitado','60 segundos en sección'],
    sec10: ['Encontrar todos los elementos','Interactuar con foto,nota,regalo','Usar reproductor','90 segundos explorando'],
    sec11: ['Responder todas las preguntas','Acertar todas','Desbloquear todas las fotos','Ver collage final','Reiniciar y volver a jugar'],
    sec12: ['Llegar al final de la carta','Encontrar todas las palabras secretas','Descubrir la sorpresa','5 clics en palabra secreta','10 segundos en párrafo','90 segundos en sección'],
  };
}
function unlockAch(sec, idx) {
  const k = `sec${sec}`;
  if (!achievements[k]) return;
  if (achievements[k].done[idx]) return;
  achievements[k].done[idx] = true;
  const defs = getAchievementDefs();
  const label = defs[k][idx];
  showNotif(`🏆 Logro: ${label}! 💗`);
  spawnParticles(window.innerWidth/2, window.innerHeight/2, 8, 'small');
  renderAchPanel(sec);
  checkSectionComplete(sec);
  saveState();
}
function checkSectionComplete(sec) {
  const k = `sec${sec}`;
  if (!achievements[k] || achievements[k].complete) return;
  if (achievements[k].done.every(v=>v)) {
    achievements[k].complete = true;
    setTimeout(() => {
      showNotif(`🎉 ¡Sección ${sec} completada al 100%! 💗🌸✨`);
      launchConfetti(80);
      updateGlobalProgressUI();
      updateMenuCard(sec);
      saveState();
      checkAllSectionsComplete();
    }, 600);
  }
}
function checkAllSectionsComplete() {
  const total = 12;
  let done = 0;
  for (let i=1; i<=total; i++) {
    if (achievements[`sec${i}`]?.complete) done++;
  }
  if (done >= total && !achievements.sec13Unlocked) {
    achievements.sec13Unlocked = true;
    telemetry.sec13Unlocked = new Date().toISOString();
    saveState();
    setTimeout(() => unlock13(), 1000);
  }
}
function unlock13() {
  launchConfetti(200);
  showNotif('🎉✨ ¡HAS DESBLOQUEADO LA SECCIÓN ESPECIAL! ✨🎉\n💖 ETERNO AMOR 💖');
  // Desbloquear tarjeta menú
  const card = document.querySelector('[data-sec="13"]');
  if (card) {
    card.classList.remove('locked');
    card.classList.add('unlocking');
    card.querySelector('.menu-card-lock')?.remove();
    setTimeout(() => card.classList.remove('unlocking'), 1500);
  }
  // Fuegos artificiales
  launchFireworks();
}
function updateGlobalProgressUI() {
  let done = 0;
  for (let i=1; i<=12; i++) if (achievements[`sec${i}`]?.complete) done++;
  const pct = Math.round(done/12*100);
  if (gpBarInner)  gpBarInner.style.width  = pct+'%';
  if (gpText)      gpText.textContent       = `${done}/12 secciones`;
  if (gpPct)       gpPct.textContent        = pct+'%';
}
function toggleAchPanel(sec) {
  const p = document.getElementById(`achPanel${sec}`);
  if (!p) return;
  p.classList.toggle('hidden');
  if (!p.classList.contains('hidden')) renderAchPanel(sec);
}
function renderAchPanel(sec) {
  const p = document.getElementById(`achPanel${sec}`);
  if (!p) return;
  const k = `sec${sec}`;
  const defs = getAchievementDefs();
  const list = defs[k] || [];
  const done = achievements[k]?.done || [];
  const count = done.filter(Boolean).length;
  const pct = list.length ? Math.round(count/list.length*100) : 0;
  const isComplete = achievements[k]?.complete;
  p.innerHTML = `
    <div class="ach-title">Progreso: ${count}/${list.length} — ${pct}%</div>
    <div class="ach-progress-outer"><div class="ach-progress-inner" style="width:${pct}%"></div></div>
    <ul class="ach-list">
      ${list.map((l,i) => `<li class="ach-item ${done[i]?'done':''}"><span class="ach-check">${done[i]?'✅':'⭕'}</span>${l}</li>`).join('')}
    </ul>
    ${isComplete ? '<div class="ach-complete-msg">🎉 ¡Sección completada al 100%! 🎉</div>' : ''}
  `;
}
function updateMenuCard(sec) {
  const k = `sec${sec}`;
  const defs = getAchievementDefs();
  const list = defs[k] || [];
  const done = (achievements[k]?.done || []).filter(Boolean).length;
  const pct = list.length ? Math.round(done/list.length*100) : 0;
  const fill = document.querySelector(`.menu-card[data-sec="${sec}"] .menu-card-prog-fill`);
  if (fill) fill.style.width = pct+'%';
}

// =============================================
// PANTALLA REGALO
// =============================================
let giftClicks = 0;
function initGiftScreen() {
  if (localStorage.getItem('giftOpened') === 'yes') return;
  const handler = () => {
    giftClicks++;
    giftLabel.textContent = `¡Ya casi! ${giftClicks} / ${CLICS_NECESARIOS} clics 💗`;
    giftPBar.style.width = (giftClicks / CLICS_NECESARIOS * 100) + '%';
    spawnParticles(window.innerWidth/2, window.innerHeight/2, 5, 'small');
    // Animación del pastel
    giftBox.style.transform = 'scale(1.08)';
    setTimeout(() => giftBox.style.transform = '', 120);
    if (giftClicks >= CLICS_NECESARIOS) openGift();
  };
  giftBox.addEventListener('click', handler);
  giftBox.addEventListener('touchstart', handler, {passive:true});
}
function openGift() {
  launchConfetti(150);
  giftScreen.classList.add('closing');
  setTimeout(() => {
    giftScreen.style.display = 'none';
    mainApp.classList.remove('hidden');
    mainApp.style.animation = 'sectionIn 0.6s ease both';
    initMusic();
    startFloatingHearts();
    updateGlobalProgressUI();
    for (let i=1; i<=13; i++) updateMenuCard(i);
    localStorage.setItem('giftOpened','yes');
    saveState();
  }, 900);
}

// =============================================
// MENÚ
// =============================================
function buildMenu() {
  menuGrid.innerHTML = '';
  OPCIONES_MENU.forEach(opt => {
    const locked = opt.bloqueada && !achievements.sec13Unlocked;
    const sec = opt.seccion;
    const defs = getAchievementDefs();
    const k = `sec${sec}`;
    const list = defs[k] ? defs[k].length : 0;
    const done = list ? (achievements[k]?.done||[]).filter(Boolean).length : 0;
    const pct  = list ? Math.round(done/list*100) : 0;

    const card = document.createElement('div');
    card.className = `menu-card${locked?' locked':''}`;
    card.dataset.sec = sec;
    card.innerHTML = `
      <div class="menu-card-img">
        <img src="${opt.img}" alt="${opt.titulo}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="img-placeholder" style="display:none">${opt.emoji}</div>
      </div>
      <div class="menu-card-progress"><div class="menu-card-prog-fill" style="width:${pct}%"></div></div>
      <div class="menu-card-title">${opt.titulo}</div>
      ${locked ? '<div class="menu-card-lock">🔒</div>' : ''}
    `;
    if (sec === 13) card.classList.add('sec13-card');
    if (!locked) {
      card.addEventListener('click', () => openSection(sec));
    }
    menuGrid.appendChild(card);
  });
}
function openSection(sec) {
  // Ocultar todas las secciones
  document.querySelectorAll('.sec-panel').forEach(p => p.classList.add('hidden'));
  document.getElementById('menuSection').classList.add('hidden');
  const panel = document.getElementById(`sec${sec}`);
  if (!panel) return;
  panel.classList.remove('hidden');
  panel.scrollTop = 0;
  // Iniciar timer de sección
  sectionTimers[sec] = Date.now();
  // Inicializar contenido de sección
  initSection(sec);
  // Actualizar panel de logros si visible
  renderAchPanel(sec);
  recordInteraction('open_section', sec);
  saveState();
}
function closeSection(sec) {
  const panel = document.getElementById(`sec${sec}`);
  if (panel) panel.classList.add('hidden');
  document.getElementById('menuSection').classList.remove('hidden');
  // Registrar tiempo
  if (sectionTimers[sec]) {
    const elapsed = (Date.now() - sectionTimers[sec]) / 1000;
    if (!telemetry.sections[sec]) telemetry.sections[sec] = { timeSpent:0 };
    telemetry.sections[sec].timeSpent = (telemetry.sections[sec].timeSpent||0) + elapsed;
    delete sectionTimers[sec];
  }
  updateGlobalProgressUI();
  saveState();
}
// "Volver al menú" botones
document.addEventListener('click', e => {
  const btn = e.target.closest('.back-btn');
  if (btn) {
    const sec = parseInt(btn.dataset.sec);
    if (!isNaN(sec)) closeSection(sec);
  }
});

// =============================================
// MÚSICA GLOBAL
// =============================================
function initMusic() {
  if (!PLAYLIST.length) return;
  loadGlobalSong(globalSongIdx, false);
  const tryPlay = () => {
    globalAudio.play().catch(()=>{});
    document.removeEventListener('click', tryPlay);
    document.removeEventListener('touchstart', tryPlay);
  };
  document.addEventListener('click', tryPlay, {once:true});
  document.addEventListener('touchstart', tryPlay, {once:true, passive:true});
  setTimeout(() => globalAudio.play().catch(()=>{}), 400);
}
function loadGlobalSong(idx, play=true) {
  globalSongIdx = ((idx % PLAYLIST.length) + PLAYLIST.length) % PLAYLIST.length;
  const s = PLAYLIST[globalSongIdx];
  globalAudio.src = s.src;
  if (gpMiniName) gpMiniName.textContent = s.name;
  if (play && globalPlaying) globalAudio.play().catch(()=>{});
  updateGlobalProgress();
  telemetry.songs.push({name:s.name, ts:new Date().toISOString()});
  // Sincronizar sección 2 si está abierta
  syncPlaylistSection();
}
function toggleGlobalPlay() {
  if (globalPlaying) { globalAudio.pause(); }
  else { globalAudio.play().catch(()=>{}); }
}
function changeGlobalSong(dir) {
  loadGlobalSong(globalSongIdx + dir, true);
  unlockAch(2, dir > 0 ? 2 : 3); // siguiente / anterior
}
function updateGlobalProgress() {
  if (!globalAudio.duration) return;
  const pct = globalAudio.currentTime / globalAudio.duration * 100;
  if (gpProgressFill)  gpProgressFill.style.width = pct+'%';
  if (gpProgressThumb) gpProgressThumb.style.left  = pct+'%';
  // Sincronizar sección 2
  const f = document.getElementById('plProgressFill');
  const t = document.getElementById('plProgressThumb');
  if (f) f.style.width = pct+'%';
  if (t) t.style.left  = pct+'%';
  const ct = document.getElementById('plCurTime');
  const tt = document.getElementById('plTotalTime');
  if (ct) ct.textContent = fmtTime(globalAudio.currentTime);
  if (tt) tt.textContent = fmtTime(globalAudio.duration);
}
function fmtTime(s) {
  if (isNaN(s)) return '0:00';
  const m = Math.floor(s/60), sec = Math.floor(s%60);
  return m+':'+(sec<10?'0':'')+sec;
}
function toggleMiniPlayer() {
  globalPlayerMin = !globalPlayerMin;
  gpMini.classList.toggle('hidden-player', globalPlayerMin);
  unlockAch(2, 5);
}
function syncPlaylistSection() {
  const sn = document.getElementById('plSongName');
  const nu = document.getElementById('plSongNum');
  const le = document.getElementById('plLetra');
  if (!sn) return;
  const s = PLAYLIST[globalSongIdx];
  sn.textContent = s.name;
  if (nu) nu.textContent = `${globalSongIdx+1} / ${PLAYLIST.length}`;
  if (le) le.textContent = s.letra || '';
  // Disc rotation
  const art = document.getElementById('plAlbumArt');
  if (art) { if (globalPlaying) art.classList.add('playing'); else art.classList.remove('playing'); }
  // Highlight en lista
  document.querySelectorAll('.pl-song-item').forEach((el,i) => el.classList.toggle('active', i===globalSongIdx));
}

// =============================================
// INICIALIZAR SECCIONES
// =============================================
function initSection(sec) {
  switch(sec) {
    case 1:  initSec1(); break;
    case 2:  initSec2(); break;
    case 3:  initSec3(); break;
    case 4:  initSec4(); break;
    case 5:  initSec5(); break;
    case 6:  initSec6(); break;
    case 7:  initSec7(); break;
    case 8:  initSec8(); break;
    case 9:  initSec9(); break;
    case 10: initSec10(); break;
    case 11: initSec11(); break;
    case 12: initSec12(); break;
    case 13: initSec13(); break;
  }
}

// ===== SEC 1: CARRUSEL CARTA =====
let cartaSlide = 0, cartaTransIdx = 0, cartaTransitioning = false;
let cartaSlidesViewed = new Set(), cartaDotsClicked = new Set();
let cartaPrevUsed = false, cartaNextUsed = false;
let cartaTimerStarted = false;

function initSec1() {
  const carousel = document.getElementById('cartaCarousel');
  if (!carousel) return;
  // Construir slides si no existen
  if (!carousel.children.length) {
    IMGS_CARTA.forEach((src, i) => {
      const s = document.createElement('div');
      s.className = 'c-slide' + (i===0?' active':'');
      s.dataset.idx = i;
      s.innerHTML = `
        <div class="c-placeholder">
          <img src="${src}" alt="Carta ${i+1}" loading="lazy" style="width:100%;height:100%;object-fit:contain" onerror="this.style.display='none'">
          <div class="c-slide-overlay">${FRASES_CARTA[i]||''}</div>
        </div>`;
      carousel.appendChild(s);
    });
    // Swipe
    let tx=0, ty=0;
    carousel.addEventListener('touchstart', e=>{tx=e.touches[0].clientX;ty=e.touches[0].clientY;},{passive:true});
    carousel.addEventListener('touchend', e=>{
      const dx=e.changedTouches[0].clientX-tx, dy=e.changedTouches[0].clientY-ty;
      if (Math.abs(dx)>Math.abs(dy)&&Math.abs(dx)>40) dx<0?goCartaSlide(cartaSlide+1):goCartaSlide(cartaSlide-1);
    },{passive:true});
  }
  // Dots
  buildCartaDots();
  updateCartaProgress();
  cartaSlidesViewed.add(0);
  // Botones
  const prev = document.getElementById('cartaPrev');
  const next = document.getElementById('cartaNext');
  prev.onclick = () => { goCartaSlide(cartaSlide-1); cartaPrevUsed=true; unlockAch(1,1); checkSec1(); };
  next.onclick = () => { goCartaSlide(cartaSlide+1); cartaNextUsed=true; unlockAch(1,2); checkSec1(); };
  // Timer 30s
  if (!cartaTimerStarted) {
    cartaTimerStarted = true;
    setTimeout(() => { unlockAch(1,4); checkSec1(); }, 30000);
  }
  checkSec1();
}
function buildCartaDots() {
  const dc = document.getElementById('cartaDots');
  if (!dc) return;
  dc.innerHTML = '';
  for (let i=0; i<TOTAL_SLIDES_CARTA; i++) {
    const d = document.createElement('div');
    d.className = 'c-dot' + (i===0?' active':'');
    d.addEventListener('click', () => {
      goCartaSlide(i);
      cartaDotsClicked.add(i);
      if (cartaDotsClicked.size >= TOTAL_SLIDES_CARTA) { unlockAch(1,3); checkSec1(); }
    });
    dc.appendChild(d);
  }
}
function goCartaSlide(idx) {
  if (cartaTransitioning) return;
  if (idx<0) idx=TOTAL_SLIDES_CARTA-1;
  if (idx>=TOTAL_SLIDES_CARTA) idx=0;
  if (idx===cartaSlide) return;
  cartaTransitioning = true;
  const carousel = document.getElementById('cartaCarousel');
  const slides = carousel?.querySelectorAll('.c-slide');
  if (!slides) { cartaSlide=idx; return; }
  const t = TRANSITIONS_LIST[cartaTransIdx%TRANSITIONS_LIST.length];
  cartaTransIdx++;
  const old = slides[cartaSlide], nw = slides[idx];
  old.classList.add(t.o);
  nw.style.display='flex'; nw.classList.add(t.i, 'active');
  setTimeout(() => {
    old.style.display='none'; old.classList.remove('active',t.o);
    nw.classList.remove(t.i);
    cartaSlide = idx;
    cartaTransitioning = false;
    cartaSlidesViewed.add(idx);
    updateCartaProgress();
    if (cartaSlidesViewed.size >= TOTAL_SLIDES_CARTA) { unlockAch(1,0); checkSec1(); }
    checkSec1();
  }, 550);
}
function updateCartaProgress() {
  const pt = document.getElementById('cartaProgressText');
  const pb = document.getElementById('cartaProgressBar');
  if (pt) pt.textContent = `Imagen ${cartaSlide+1} de ${TOTAL_SLIDES_CARTA} 💗`;
  if (pb) pb.style.width = ((cartaSlide+1)/TOTAL_SLIDES_CARTA*100)+'%';
  document.querySelectorAll('#cartaDots .c-dot').forEach((d,i)=>d.classList.toggle('active',i===cartaSlide));
}
function checkSec1() { checkSectionComplete(1); updateMenuCard(1); }

// ===== SEC 2: PLAYLIST EXPANDIDA =====
let sec2TimerStarted = false;
function initSec2() {
  syncPlaylistSection();
  // Construir lista de canciones
  const list = document.getElementById('plSongList');
  if (list && !list.children.length) {
    PLAYLIST.forEach((s,i) => {
      const item = document.createElement('div');
      item.className = 'pl-song-item' + (i===globalSongIdx?' active':'');
      item.innerHTML = `<span class="pl-song-num-badge">${i+1}</span><span>${s.name}</span>`;
      item.addEventListener('click', () => { loadGlobalSong(i, true); globalAudio.play().catch(()=>{}); unlockAch(2,0); });
      list.appendChild(item);
    });
  }
  // Botones playlist
  const pb = document.getElementById('plPlayBtn');
  const pn = document.getElementById('plNextBtn');
  const pp = document.getElementById('plPrevBtn');
  const pt = document.getElementById('plProgressTrack');
  const vs = document.getElementById('plVolSlider');
  if (pb) pb.onclick = e => { e.stopPropagation(); toggleGlobalPlay(); syncPlaylistSection(); };
  if (pn) pn.onclick = e => { e.stopPropagation(); changeGlobalSong(1); unlockAch(2,2); };
  if (pp) pp.onclick = e => { e.stopPropagation(); changeGlobalSong(-1); unlockAch(2,3); };
  if (pt) {
    pt.addEventListener('click', e => {
      if (!globalAudio.duration) return;
      const r = pt.getBoundingClientRect();
      globalAudio.currentTime = ((e.clientX-r.left)/r.width)*globalAudio.duration;
      unlockAch(2,1);
    });
  }
  if (vs) {
    vs.value = globalAudio.volume;
    vs.addEventListener('input', e => {
      globalAudio.volume = e.target.value;
      e.target.style.background = `linear-gradient(90deg,var(--pink-main) ${e.target.value*100}%,rgba(251,182,206,0.4) ${e.target.value*100}%)`;
      unlockAch(2,4);
    });
  }
  // Chequear canciones reproducidas (simplified: marcar todas como 'escuchadas' requiere que las reproduzca)
  if (!sec2TimerStarted) {
    sec2TimerStarted = true;
    setTimeout(() => { unlockAch(2,6); }, 60000);
  }
  globalAudio.addEventListener('ended', () => { unlockAch(2,0); }, {once:false});
  checkSectionComplete(2);
}

// ===== SEC 3: TEST =====
function initSec3() {
  testState = JSON.parse(localStorage.getItem('testState') || 'null') || { answers:new Array(PREGUNTAS_FORMULARIO.length).fill(null), current:0, answered:false, restarted:false, answeredAfterRestart:0 };
  renderTest();
}
function renderTest() {
  const c = document.getElementById('testContainer');
  if (!c) return;
  const p = testState.current;
  const total = PREGUNTAS_FORMULARIO.length;
  if (testState.answered && p >= total) {
    renderTestResult(); return;
  }
  const q = PREGUNTAS_FORMULARIO[p];
  const pct = Math.round((p/total)*100);
  c.innerHTML = `<div class="test-wrap">
    <div class="test-progress-text">Pregunta ${p+1} de ${total} — ${pct}%</div>
    <div class="cp-bar-outer" style="margin-bottom:12px"><div class="cp-bar-inner" style="width:${pct}%"></div></div>
    <div class="test-q-text">${q.pregunta}</div>
    <div class="test-options">${q.opciones.map((o,i)=>`<button class="test-option${testState.answers[p]===i?' selected':''}" data-i="${i}">${o}</button>`).join('')}</div>
    <div class="test-nav">
      <button class="test-btn secondary" id="testPrev" ${p===0?'disabled':''}>← Anterior</button>
      <button class="test-btn" id="testNext">${p===total-1?'Ver resultado ✓':'Siguiente →'}</button>
    </div>
  </div>`;
  c.querySelectorAll('.test-option').forEach(btn => {
    btn.addEventListener('click', () => {
      testState.answers[p] = parseInt(btn.dataset.i);
      if (testState.restarted) {
        testState.answeredAfterRestart = (testState.answeredAfterRestart||0)+1;
        if (testState.answeredAfterRestart >= 5) unlockAch(3,4);
      }
      renderTest();
    });
  });
  document.getElementById('testPrev').addEventListener('click', () => {
    if (p>0) { testState.current--; unlockAch(3,1); renderTest(); }
  });
  document.getElementById('testNext').addEventListener('click', () => {
    if (testState.answers[p] === null) { showNotif('Selecciona una respuesta 💗'); return; }
    if (p < total-1) { testState.current++; unlockAch(3,1); renderTest(); }
    else { testState.answered = true; testState.current = total; unlockAch(3,2); renderTest(); }
  });
  localStorage.setItem('testState', JSON.stringify(testState));
}
function renderTestResult() {
  const c = document.getElementById('testContainer');
  if (!c) return;
  const total = PREGUNTAS_FORMULARIO.length;
  const correct = testState.answers.filter((a,i) => a === PREGUNTAS_FORMULARIO[i].correcta).length;
  const pct = Math.round(correct/total*100);
  const msg = MENSAJES_RESULTADO.find(m => pct>=m.min && pct<=m.max)?.texto || '¡Bien hecho! 💗';
  if (pct===100) unlockAch(3,5);
  unlockAch(3,0);
  c.innerHTML = `<div class="test-wrap test-result">
    <div class="test-result-score">${correct}/${total} — ${pct}%</div>
    <div class="test-result-msg">${msg}</div>
    <div style="margin-top:16px;display:flex;gap:10px;justify-content:center">
      <button class="test-btn" id="testRestart">Reiniciar 🔄</button>
    </div>
  </div>`;
  document.getElementById('testRestart').addEventListener('click', () => {
    testState = { answers:new Array(PREGUNTAS_FORMULARIO.length).fill(null), current:0, answered:false, restarted:true, answeredAfterRestart:0 };
    unlockAch(3,3);
    renderTest();
  });
  checkSectionComplete(3);
}

// ===== SEC 4: RPG =====
function initSec4() {
  if (!rpgState) rpgState = initRPGState();
  renderRPG();
}
function initRPGState() {
  const size = JUEGO_CONFIG.mapaSize;
  const visited = new Array(size*size).fill(false);
  const enemigos = [];
  for (let i=0; i<Math.min(5,size*size/4|0); i++) {
    let pos;
    do { pos = Math.floor(Math.random()*size*size); } while(pos<1||enemigos.find(e=>e.pos===pos));
    enemigos.push({ pos, tipo: Math.floor(Math.random()*JUEGO_CONFIG.tiposEnemigos.length), hp:30+Math.floor(Math.random()*20) });
  }
  return {
    playerPos:0, hp:JUEGO_CONFIG.vidaInicial, maxHp:JUEGO_CONFIG.vidaInicial,
    level:1, pts:0, visited, enemigos, defeated:[],
    tiposDefeated:new Set(), ataqueUsed:new Set(),
    battleMode:false, currentEnemy:null,
    lost:false, restarted:false, timeStart:Date.now(),
    allVisited:false, levelMaxReached:false
  };
}
function renderRPG() {
  const c = document.getElementById('rpgContainer');
  if (!c) return;
  const s = rpgState;
  const size = JUEGO_CONFIG.mapaSize;
  // Battle mode
  if (s.battleMode && s.currentEnemy) { renderBattle(); return; }
  if (s.lost) {
    c.innerHTML = `<div class="rpg-wrap"><div class="rpg-battle-title">💔 Game Over</div><p style="font-family:var(--font-script);margin:10px 0">¡Perdiste! Pero el amor siempre renace 💗</p><button class="pink-btn" id="rpgRestartBtn">Reiniciar 🔄</button></div>`;
    document.getElementById('rpgRestartBtn').addEventListener('click', () => {
      s.restarted=true; unlockAch(4,5); rpgState=initRPGState(); rpgState.restarted=true; renderRPG();
    });
    return;
  }
  // Mapa
  let mapHtml = '<div class="rpg-map">';
  for (let r=0;r<size;r++) {
    mapHtml += '<div>';
    for (let col=0;col<size;col++) {
      const pos = r*size+col;
      const isPlayer = pos===s.playerPos;
      const enemy = s.enemigos.find(e=>e.pos===pos);
      let icon = '⬜';
      if (isPlayer) icon='🧑';
      else if (enemy) icon=JUEGO_CONFIG.tiposEnemigos[enemy.tipo]?.split(' ')[1]||'❓';
      else if (s.visited[pos]) icon='🟫';
      mapHtml += `<span class="rpg-cell${isPlayer?' player':''}${enemy&&!isPlayer?' enemy':''}${s.visited[pos]&&!isPlayer?' visited':''}" data-pos="${pos}">${icon}</span>`;
    }
    mapHtml += '</div>';
  }
  mapHtml += '</div>';
  c.innerHTML = `<div class="rpg-wrap">
    <div class="rpg-stats">
      <span class="rpg-stat">❤️ ${s.hp}/${s.maxHp}</span>
      <span class="rpg-stat">⭐ Nv.${s.level}</span>
      <span class="rpg-stat">💎 ${s.pts} pts</span>
      <div class="rpg-hp-bar-outer" style="flex:1"><div class="rpg-hp-bar-inner" style="width:${s.hp/s.maxHp*100}%"></div></div>
    </div>
    ${mapHtml}
    <div class="rpg-controls-grid" style="justify-items:center;margin:10px auto;width:fit-content">
      <div></div><button class="rpg-ctrl-btn" id="rpgUp">⬆</button><div></div>
      <button class="rpg-ctrl-btn" id="rpgLeft">⬅</button>
      <button class="rpg-ctrl-btn" id="rpgDown">⬇</button>
      <button class="rpg-ctrl-btn" id="rpgRight">➡</button>
    </div>
    <button class="pink-btn sm" style="margin-top:6px" id="rpgRestartBtn2">🔄 Reiniciar</button>
    <p style="font-family:var(--font-script);font-size:0.85rem;color:var(--text-mid);margin-top:8px">Muévete por el mapa y derrota a los enemigos de amor 💗</p>
  </div>`;
  const move = (dir) => {
    const pos=s.playerPos, col=pos%size, row=Math.floor(pos/size);
    let np=pos;
    if (dir==='up'    && row>0)      np=pos-size;
    if (dir==='down'  && row<size-1) np=pos+size;
    if (dir==='left'  && col>0)      np=pos-1;
    if (dir==='right' && col<size-1) np=pos+1;
    if (np===pos) return;
    s.playerPos=np; s.visited[np]=true;
    if (s.visited.every(Boolean)) { s.allVisited=true; unlockAch(4,0); }
    const enemy=s.enemigos.find(e=>e.pos===np);
    if (enemy) { s.battleMode=true; s.currentEnemy=enemy; }
    renderRPG();
    // Timer 5 min
    if ((Date.now()-s.timeStart)>5*60*1000) unlockAch(4,6);
  };
  document.getElementById('rpgUp').onclick    = ()=>move('up');
  document.getElementById('rpgDown').onclick  = ()=>move('down');
  document.getElementById('rpgLeft').onclick  = ()=>move('left');
  document.getElementById('rpgRight').onclick = ()=>move('right');
  document.getElementById('rpgRestartBtn2').onclick = () => {
    rpgState=initRPGState(); rpgState.restarted=true; unlockAch(4,5); renderRPG();
  };
  // Teclado
  document.onkeydown = e => {
    if (document.getElementById('sec4')?.classList.contains('hidden')) return;
    if (e.key==='ArrowUp'||e.key==='w')   move('up');
    if (e.key==='ArrowDown'||e.key==='s') move('down');
    if (e.key==='ArrowLeft'||e.key==='a') move('left');
    if (e.key==='ArrowRight'||e.key==='d')move('right');
  };
}
function renderBattle() {
  const c = document.getElementById('rpgContainer');
  const s = rpgState;
  const en = s.currentEnemy;
  const tipo = JUEGO_CONFIG.tiposEnemigos[en.tipo];
  c.innerHTML = `<div class="rpg-wrap">
    <div class="rpg-battle">
      <div class="rpg-battle-title">⚔️ ¡Batalla! ${tipo}</div>
      <div class="rpg-stats">
        <span class="rpg-stat">Tu HP: ${s.hp}/${s.maxHp}</span>
        <span class="rpg-stat">Enemigo HP: ${en.hp}</span>
      </div>
      <div class="rpg-hp-bar-outer"><div class="rpg-hp-bar-inner" style="width:${en.hp/50*100}%;background:linear-gradient(90deg,#f87171,#ef4444)"></div></div>
      <div class="rpg-atk-btns">
        ${JUEGO_CONFIG.ataques.map((a,i)=>`<button class="rpg-atk-btn" data-atk="${i}">${a}</button>`).join('')}
      </div>
      <div class="rpg-log" id="rpgLog">Elige tu ataque 💗</div>
    </div>
  </div>`;
  c.querySelectorAll('.rpg-atk-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const atkIdx = parseInt(btn.dataset.atk);
      s.ataqueUsed.add(atkIdx);
      if (s.ataqueUsed.size>=JUEGO_CONFIG.ataques.length) unlockAch(4,3);
      const dmg = 10+Math.floor(Math.random()*15);
      en.hp -= dmg;
      const log = document.getElementById('rpgLog');
      if (en.hp <= 0) {
        // Victoria
        const pts = JUEGO_CONFIG.puntosPorEnemigo;
        s.pts += pts;
        s.tiposDefeated.add(en.tipo);
        s.defeated.push(en.tipo);
        s.enemigos = s.enemigos.filter(e=>e!==en);
        // Nuevo enemigo
        const size=JUEGO_CONFIG.mapaSize;
        let np;
        do { np=Math.floor(Math.random()*size*size); } while(np===s.playerPos||s.enemigos.find(e=>e.pos===np));
        s.enemigos.push({pos:np, tipo:Math.floor(Math.random()*JUEGO_CONFIG.tiposEnemigos.length), hp:30+Math.floor(Math.random()*20)});
        // Nivel
        if (s.pts>0 && s.pts%(JUEGO_CONFIG.puntosPorEnemigo*JUEGO_CONFIG.enemigosParaSubirNivel)===0) {
          s.level = Math.min(s.level+1, JUEGO_CONFIG.nivelMaximo);
          if (s.level>=JUEGO_CONFIG.nivelMaximo) { unlockAch(4,2); }
        }
        if (s.tiposDefeated.size>=JUEGO_CONFIG.tiposEnemigos.length) unlockAch(4,1);
        spawnParticles(window.innerWidth/2, window.innerHeight/2, 10, 'small');
        showNotif(`¡Victoria! +${pts} pts 💗`);
        s.battleMode=false; s.currentEnemy=null;
        renderRPG();
      } else {
        // Enemigo ataca
        const enemDmg = 5+Math.floor(Math.random()*10);
        s.hp -= enemDmg;
        if (log) log.textContent = `Hiciste ${dmg} daño. El enemigo te atacó (${enemDmg} dmg). HP enemigo: ${en.hp}`;
        if (s.hp <= 0) {
          s.hp=0; unlockAch(4,4); s.lost=true; s.battleMode=false; s.currentEnemy=null; renderRPG();
        }
      }
    });
  });
}

// ===== SEC 5: CARTA INTERACTIVA =====
let sec5TimerStarted = false;
function initSec5() {
  const c = document.getElementById('cartaInteractivaContainer');
  if (!c || c.children.length) return;
  // Procesar texto con palabras clave
  let text = CARTA_TEXTO;
  PALABRAS_CLAVE_CARTA.forEach(pk => {
    const re = new RegExp(`(${pk.palabra})`, 'gi');
    text = text.replace(re, `<span class="keyword-word" data-kw="${pk.palabra}">$1</span>`);
  });
  c.innerHTML = `<div class="sec-inner-wrap"><div class="carta-paper" id="cartaPaperEl">${text}</div>
  <p class="section-subtitle" style="margin-top:10px">💗 Haz clic en las palabras resaltadas para descubrir mensajes secretos 💗</p></div>`;
  const paper = document.getElementById('cartaPaperEl');
  // Scroll hasta el final
  paper.addEventListener('scroll', () => {
    if (paper.scrollTop + paper.clientHeight >= paper.scrollHeight - 10) { unlockAch(5,1); checkSectionComplete(5); }
  });
  paper.querySelectorAll('.keyword-word').forEach(el => {
    el.addEventListener('click', () => {
      const kw = el.dataset.kw;
      const pk = PALABRAS_CLAVE_CARTA.find(p=>p.palabra===kw);
      if (!pk) return;
      cartaClickedWords.add(kw);
      el.classList.add('clicked');
      openModal(`<img class="modal-img" src="${pk.imagen}" onerror="this.style.background='linear-gradient(135deg,var(--pink-pale),var(--blush))';this.alt='💗'">
        <div class="modal-title">${pk.palabra} 💗</div>
        <div class="modal-text">${pk.mensaje}</div>`);
      unlockAch(5,2);
      if (cartaClickedWords.size >= PALABRAS_CLAVE_CARTA.length) { unlockAch(5,0); }
      checkSectionComplete(5);
    });
  });
  if (!sec5TimerStarted) {
    sec5TimerStarted = true;
    setTimeout(() => { unlockAch(5,3); checkSectionComplete(5); }, 45000);
  }
}

// ===== SEC 6: PAISAJE & JUEGOS =====
let sec6TimerStarted = false;
let drawCtx=null, drawCanvas=null, drawIsDrawing=false;
function initSec6() {
  const c = document.getElementById('paisajeContainer');
  if (!c || c.children.length) return;
  // Paisaje fondo + adornos
  let adornHtml = ADORNOS_PAISAJE.map((a,i)=>
    `<span class="paisaje-deco-item" data-padx="${a.x}" data-pady="${a.y}" data-pidx="${i}" style="left:${a.x}%;top:${a.y}%">${a.emoji}</span>`
  ).join('');
  c.innerHTML = `
  <div class="paisaje-bg" style="min-height:150px;margin-bottom:16px">${adornHtml}</div>
  <div style="padding:0 14px">
  <div class="games-grid">
    <!-- 3 en raya -->
    <div class="game-card">
      <div class="game-card-title">🎮 3 en Raya</div>
      <div class="ttt-grid" id="tttGrid"></div>
      <div id="tttMsg" style="font-family:var(--font-script);font-size:0.85rem;color:var(--pink-dark);text-align:center;margin-top:4px"></div>
      <button class="pink-btn sm" style="margin-top:6px;width:100%" id="tttReset">Nueva partida</button>
    </div>
    <!-- Ahorcado -->
    <div class="game-card">
      <div class="game-card-title">🔤 Ahorcado</div>
      <canvas id="hangCanvas" width="80" height="80" style="display:block;margin:0 auto;border:1px solid var(--pink-light);border-radius:8px"></canvas>
      <div class="hangman-word" id="hangWord"></div>
      <div class="hangman-letters" id="hangLetters"></div>
      <div id="hangMsg" style="font-family:var(--font-script);font-size:0.8rem;color:var(--pink-dark);text-align:center"></div>
      <button class="pink-btn sm" style="margin-top:6px;width:100%" id="hangReset">Nueva palabra</button>
    </div>
    <!-- Slider amor -->
    <div class="game-card">
      <div class="game-card-title">💗 ¿Cuánto me amas?</div>
      <div class="love-pct" id="lovePct">50%</div>
      <input type="range" class="love-slider" id="loveSlider" min="0" max="100" value="50">
      <div style="font-family:var(--font-script);font-size:0.8rem;color:var(--text-mid);margin-top:6px;text-align:center" id="loveMsg">Desliza para decirme 💗</div>
    </div>
    <!-- Pizarra -->
    <div class="game-card">
      <div class="game-card-title">✏️ Pizarra</div>
      <textarea class="pizarra-area" id="pizarraEl" placeholder="Escríbeme algo bonito 💗...">${pizarraText}</textarea>
      <button class="pink-btn sm" style="margin-top:6px;width:100%" id="pizarraSave">Guardar 💾</button>
    </div>
  </div>
  <!-- Canvas dibujo -->
  <div class="game-card" style="margin-top:12px">
    <div class="game-card-title">🎨 Dibujo Digital</div>
    <canvas id="drawCanvas" class="draw-canvas" width="300" height="200"></canvas>
    <div class="draw-controls">
      <input type="color" id="drawColor" value="#f472b6" class="draw-color" title="Color">
      <input type="range" id="drawSize" class="draw-size" min="1" max="20" value="4" title="Grosor">
      <button class="draw-btn" id="drawClear">Limpiar 🗑️</button>
      <button class="draw-btn" id="drawSave">Guardar 💾</button>
    </div>
  </div>
  </div>`;
  // Adornos paisaje
  c.querySelectorAll('.paisaje-deco-item').forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.pidx);
      adornosPaisajeClicked.add(idx);
      spawnParticles(el.getBoundingClientRect().left+20, el.getBoundingClientRect().top+20, 12, 'big');
      showNotif(ADORNOS_PAISAJE[idx]?.mensaje || '💗');
      if (adornosPaisajeClicked.size>=ADORNOS_PAISAJE.length) unlockAch(6,0);
      checkSectionComplete(6);
    });
  });
  // TTT
  initTTT();
  // Hangman
  initHangman();
  // Slider amor
  const ls = document.getElementById('loveSlider');
  const lp = document.getElementById('lovePct');
  const lm = document.getElementById('loveMsg');
  if (ls) {
    const msgs = ['Más de lo que imaginas 💗','¡Muchísimo! 🥰','¡Infinitamente! ✨','¡Con todo mi ser! 💖','¡Para siempre! 🎀'];
    ls.addEventListener('input', () => {
      const v = parseInt(ls.value);
      lp.textContent = v+'%';
      ls.style.background=`linear-gradient(90deg,var(--pink-main) ${v}%,rgba(251,182,206,0.4) ${v}%)`;
      lm.textContent = msgs[Math.min(4,Math.floor(v/20))];
      loveBarValues.add(Math.round(v/25)*25);
      if ([0,25,50,75,100].every(x=>loveBarValues.has(x))) unlockAch(6,4);
      telemetry.loveBarValues.push(v);
      checkSectionComplete(6);
    });
  }
  // Pizarra
  const pz = document.getElementById('pizarraEl');
  const pzSave = document.getElementById('pizarraSave');
  if (pz) pz.addEventListener('input', () => { pizarraText = pz.value; });
  if (pzSave) pzSave.addEventListener('click', () => {
    pizarraText = pz?.value||'';
    localStorage.setItem('pizarraText', pizarraText);
    telemetry.texts.push({ ts:new Date().toISOString(), text:pizarraText });
    if (pizarraText.trim().length>0) unlockAch(6,5);
    showNotif('¡Guardado! 💗');
    checkSectionComplete(6);
  });
  // Canvas dibujo
  drawCanvas = document.getElementById('drawCanvas');
  if (drawCanvas) {
    drawCtx = drawCanvas.getContext('2d');
    // Cargar dibujo guardado
    const saved = localStorage.getItem('mayDrawing');
    if (saved) { const img=new Image(); img.onload=()=>drawCtx.drawImage(img,0,0); img.src=saved; }
    const getPos = e => {
      const r=drawCanvas.getBoundingClientRect();
      const scx=drawCanvas.width/r.width, scy=drawCanvas.height/r.height;
      if (e.touches) return {x:(e.touches[0].clientX-r.left)*scx, y:(e.touches[0].clientY-r.top)*scy};
      return {x:(e.clientX-r.left)*scx, y:(e.clientY-r.top)*scy};
    };
    const startDraw=e=>{ drawIsDrawing=true; const p=getPos(e); drawCtx.beginPath(); drawCtx.moveTo(p.x,p.y); canvasDrawn=true; };
    const doDraw  =e=>{ if(!drawIsDrawing)return; e.preventDefault(); const p=getPos(e); const cc=document.getElementById('drawColor'); const ss=document.getElementById('drawSize'); drawCtx.lineTo(p.x,p.y); drawCtx.strokeStyle=cc?.value||'#f472b6'; drawCtx.lineWidth=parseInt(ss?.value||4); drawCtx.lineCap='round'; drawCtx.stroke(); canvasColors.add(cc?.value); canvasSizes.add(ss?.value); if(canvasColors.size>=3)unlockAch(6,7); if(canvasSizes.size>=3)unlockAch(6,8); checkSectionComplete(6); };
    const endDraw =()=>{ drawIsDrawing=false; if(canvasDrawn)unlockAch(6,6); };
    drawCanvas.addEventListener('mousedown', startDraw);
    drawCanvas.addEventListener('mousemove', doDraw);
    drawCanvas.addEventListener('mouseup',   endDraw);
    drawCanvas.addEventListener('touchstart',startDraw,{passive:false});
    drawCanvas.addEventListener('touchmove', doDraw,{passive:false});
    drawCanvas.addEventListener('touchend',  endDraw,{passive:true});
    document.getElementById('drawClear').addEventListener('click', () => {
      drawCtx.clearRect(0,0,drawCanvas.width,drawCanvas.height);
      canvasCleared++; unlockAch(6,9); checkSectionComplete(6);
    });
    document.getElementById('drawSave').addEventListener('click', () => {
      const data=drawCanvas.toDataURL();
      localStorage.setItem('mayDrawing',data);
      telemetry.drawings.push({ts:new Date().toISOString(),data});
      canvasSaved=true; showNotif('¡Dibujo guardado! 🎨');
    });
  }
  if (!sec6TimerStarted) { sec6TimerStarted=true; }
  checkSectionComplete(6);
}
function initTTT() {
  tttBoard=new Array(9).fill(null); tttTurn='❤️';
  const g=document.getElementById('tttGrid');
  const msg=document.getElementById('tttMsg');
  if (!g) return;
  g.innerHTML='';
  for(let i=0;i<9;i++) {
    const cell=document.createElement('div'); cell.className='ttt-cell'; cell.dataset.i=i;
    cell.addEventListener('click',()=>{
      if(tttBoard[i]||checkTTTWinner())return;
      tttBoard[i]=tttTurn;
      cell.textContent=tttTurn;
      const winner=checkTTTWinner();
      if(winner){
        if(msg)msg.textContent=`¡${winner} ganó! 🎉`;
        if(winner==='❤️'){tttWins++;unlockAch(6,1);checkSectionComplete(6);}
        return;
      }
      if(tttBoard.every(Boolean)){if(msg)msg.textContent='¡Empate! 🤝';return;}
      tttTurn=tttTurn==='❤️'?'⭐':'❤️';
      if(msg)msg.textContent=`Turno: ${tttTurn}`;
    });
    g.appendChild(cell);
  }
  if(msg)msg.textContent=`Turno: ${tttTurn}`;
  document.getElementById('tttReset').onclick=()=>initTTT();
}
function checkTTTWinner(){
  const w=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for(const[a,b,cc]of w){if(tttBoard[a]&&tttBoard[a]===tttBoard[b]&&tttBoard[a]===tttBoard[cc])return tttBoard[a];}
  return null;
}
function initHangman() {
  hangmanWord=PALABRAS_AHORCADO[Math.floor(Math.random()*PALABRAS_AHORCADO.length)].toUpperCase();
  hangmanGuessed=new Set(); hangmanFails=0;
  renderHangman();
  document.getElementById('hangReset').onclick=()=>initHangman();
}
function renderHangman() {
  const wEl=document.getElementById('hangWord');
  const lEl=document.getElementById('hangLetters');
  const mEl=document.getElementById('hangMsg');
  const canvas=document.getElementById('hangCanvas');
  if(!wEl||!lEl) return;
  // Dibujar horca
  if(canvas){
    const ctx=canvas.getContext('2d'); ctx.clearRect(0,0,80,80); ctx.strokeStyle='#be185d'; ctx.lineWidth=2;
    ctx.beginPath(); ctx.moveTo(10,75); ctx.lineTo(70,75); ctx.moveTo(25,75); ctx.lineTo(25,10); ctx.lineTo(50,10); ctx.lineTo(50,20); ctx.stroke();
    const parts=[
      ()=>{ctx.beginPath();ctx.arc(50,27,7,0,Math.PI*2);ctx.stroke();},
      ()=>{ctx.beginPath();ctx.moveTo(50,34);ctx.lineTo(50,55);ctx.stroke();},
      ()=>{ctx.beginPath();ctx.moveTo(50,40);ctx.lineTo(38,50);ctx.stroke();},
      ()=>{ctx.beginPath();ctx.moveTo(50,40);ctx.lineTo(62,50);ctx.stroke();},
      ()=>{ctx.beginPath();ctx.moveTo(50,55);ctx.lineTo(38,68);ctx.stroke();},
      ()=>{ctx.beginPath();ctx.moveTo(50,55);ctx.lineTo(62,68);ctx.stroke();},
    ];
    for(let i=0;i<hangmanFails&&i<parts.length;i++) parts[i]();
  }
  const display=hangmanWord.split('').map(ch=>hangmanGuessed.has(ch)||ch===' '?ch:'_').join(' ');
  wEl.textContent=display;
  const won=!hangmanWord.split('').some(ch=>ch!==' '&&!hangmanGuessed.has(ch));
  const lost=hangmanFails>=6;
  if(won){ if(mEl)mEl.textContent='¡Ganaste! 🎉'; hangmanWins++; unlockAch(6,2); checkSectionComplete(6); }
  else if(lost){ if(mEl)mEl.textContent=`¡Perdiste! Era: ${hangmanWord} 😢`; hangmanLosses++; unlockAch(6,3); checkSectionComplete(6); }
  else if(mEl) mEl.textContent=`Intentos: ${hangmanFails}/6`;
  // Letras
  lEl.innerHTML='';
  'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('').forEach(l=>{
    const btn=document.createElement('button');
    btn.className='hangman-letter-btn'+(hangmanGuessed.has(l)?' used':'');
    btn.textContent=l;
    btn.addEventListener('click',()=>{
      if(hangmanGuessed.has(l)||won||lost) return;
      hangmanGuessed.add(l);
      if(!hangmanWord.includes(l)) hangmanFails++;
      renderHangman();
    });
    lEl.appendChild(btn);
  });
}

// ===== SEC 7: UNIVERSO =====
let currentPlanetContent = null;
function initSec7() {
  const c = document.getElementById('universoContainer');
  if (!c) return;
  // Estrellas animadas en canvas
  let starsHtml = '<canvas id="starsCanvas" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none"></canvas>';
  let planetsHtml = PLANETAS.map((p,i)=>`
    <div class="planet-btn" data-pidx="${i}" style="background:${p.color}">
      <div class="planet-bg">${p.emoji}</div>
      <div class="planet-name">${p.nombre}</div>
    </div>`).join('');
  c.innerHTML = `
    <div class="universe-bg" style="min-height:220px;position:relative">${starsHtml}${planetsHtml}</div>
    <div class="universe-content" id="universeContent"><p class="section-subtitle">💗 Haz clic en un planeta para explorar 💗</p></div>`;
  // Estrellas
  const sc=document.getElementById('starsCanvas');
  if(sc){const ctx=sc.getContext('2d');function drawStars(){sc.width=sc.offsetWidth;sc.height=sc.offsetHeight;for(let i=0;i<80;i++){ctx.fillStyle=`rgba(255,255,255,${Math.random()*0.8+0.2})`;ctx.beginPath();ctx.arc(Math.random()*sc.width,Math.random()*sc.height,Math.random()*1.5,0,Math.PI*2);ctx.fill();}}drawStars();}
  // Planetas
  c.querySelectorAll('.planet-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const idx=parseInt(btn.dataset.pidx);
      planetVisited.add(idx);
      if(planetVisited.size>=4) unlockAch(7,0);
      showPlanetContent(PLANETAS[idx].contenido);
      checkSectionComplete(7);
    });
  });
  // Bucket list
  renderBucketList();
  renderCountdown();
  setInterval(renderCountdown,1000);
}
function showPlanetContent(type) {
  const uc=document.getElementById('universeContent');
  if (!uc) return;
  currentPlanetContent=type;
  if(type==='timeline'){
    uc.innerHTML=`<h3 style="font-family:var(--font-script);color:var(--pink-dark);margin-bottom:12px">📅 Nuestro Comienzo</h3>
    <div class="timeline">${TIMELINE_MOMENTOS.map((m,i)=>`
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-body" data-tidx="${i}">
          <div class="timeline-date">${m.fecha}</div>
          <div class="timeline-desc" id="td${i}">${m.descripcion}</div>
        </div>
      </div>`).join('')}</div>`;
    uc.querySelectorAll('.timeline-body').forEach(el=>{
      el.addEventListener('click',()=>{
        const idx=parseInt(el.dataset.tidx);
        const desc=document.getElementById(`td${idx}`);
        desc?.classList.toggle('open');
        timelineOpened.add(idx);
        if(timelineOpened.size>=TIMELINE_MOMENTOS.length) unlockAch(7,1);
        checkSectionComplete(7);
      });
    });
  } else if(type==='razones'){
    uc.innerHTML=`<h3 style="font-family:var(--font-script);color:var(--pink-dark);margin-bottom:12px">💜 Razones por las que te amo</h3>
    <div class="flip-grid">${RAZONES_AMOR.map((r,i)=>`
      <div class="flip-card" data-fidx="${i}">
        <div class="flip-inner">
          <div class="flip-front">💗</div>
          <div class="flip-back">${r}</div>
        </div>
      </div>`).join('')}</div>`;
    uc.querySelectorAll('.flip-card').forEach(card=>{
      card.addEventListener('click',()=>{
        card.classList.toggle('flipped');
        flipFlipped.add(parseInt(card.dataset.fidx));
        if(flipFlipped.size>=RAZONES_AMOR.length) unlockAch(7,2);
        checkSectionComplete(7);
      });
    });
  } else if(type==='cartas'){
    uc.innerHTML=`<h3 style="font-family:var(--font-script);color:var(--pink-dark);margin-bottom:12px">💌 Cartas Secretas</h3>
    <div class="secret-cards">${CARTAS_SECRETAS.map((cc,i)=>`
      <div class="secret-card">
        <div class="secret-card-header" data-cidx="${i}">${cc.titulo} <span>${cartasOpened.has(i)?'▲':'▼'}</span></div>
        <div class="secret-card-body${cartasOpened.has(i)?' open':''}">${cc.mensaje}</div>
      </div>`).join('')}</div>`;
    uc.querySelectorAll('.secret-card-header').forEach(el=>{
      el.addEventListener('click',()=>{
        const idx=parseInt(el.dataset.cidx);
        const body=el.nextElementSibling;
        body?.classList.toggle('open');
        cartasOpened.add(idx);
        if(cartasOpened.size>=CARTAS_SECRETAS.length) unlockAch(7,3);
        checkSectionComplete(7);
      });
    });
  } else if(type==='futuro'){
    uc.innerHTML=`<h3 style="font-family:var(--font-script);color:var(--pink-dark);margin-bottom:12px">🌿 Futuro Juntos</h3>
    <div id="countdownWrap"></div>
    <h4 style="font-family:var(--font-script);color:var(--pink-dark);margin:14px 0 8px">📋 Bucket List</h4>
    <div id="bucketWrap"></div>`;
    renderCountdown();
    renderBucketList();
    setInterval(renderCountdown,1000);
  }
}
function renderCountdown() {
  const el=document.getElementById('countdownWrap');
  if (!el) return;
  const target=new Date(FECHA_ESPECIAL).getTime();
  const now=Date.now();
  const diff=target-now;
  if(diff<=0){el.innerHTML='<div style="text-align:center;font-family:var(--font-vibes);font-size:2rem;color:var(--gold-deep)">¡El día llegó! 🎉</div>';unlockAch(7,6);checkSectionComplete(7);return;}
  const d=Math.floor(diff/(1000*60*60*24));
  const h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  const m=Math.floor((diff%(1000*60*60))/(1000*60));
  const s=Math.floor((diff%1000*60)/1000);
  el.innerHTML=`<div class="countdown-display">
    <div class="cd-unit"><div class="cd-num">${d}</div><div class="cd-label">Días</div></div>
    <div class="cd-unit"><div class="cd-num">${h}</div><div class="cd-label">Horas</div></div>
    <div class="cd-unit"><div class="cd-num">${m}</div><div class="cd-label">Minutos</div></div>
  </div>`;
}
function renderBucketList() {
  const el=document.getElementById('bucketWrap');
  if (!el) return;
  const allDone=bucketList.every(b=>b.marcado);
  if(allDone) unlockAch(7,4);
  el.innerHTML=`<div class="bucket-list">${bucketList.map((b,i)=>`
    <div class="bucket-item">
      <div class="bucket-check${b.marcado?' checked':''}" data-bidx="${i}">${b.marcado?'✓':''}</div>
      <span class="bucket-text${b.marcado?' done':''}">${b.texto}</span>
      <span class="bucket-del" data-bdel="${i}">✕</span>
    </div>`).join('')}
  </div>
  <div class="bucket-add-row">
    <input type="text" class="bucket-input" id="bucketInput" placeholder="Agregar item...">
    <button class="bucket-add-btn" id="bucketAddBtn">+</button>
  </div>`;
  el.querySelectorAll('.bucket-check').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const i=parseInt(btn.dataset.bidx);
      bucketList[i].marcado=!bucketList[i].marcado;
      telemetry.bucketList.push({...bucketList[i],ts:new Date().toISOString()});
      localStorage.setItem('mayBucketList',JSON.stringify(bucketList));
      renderBucketList(); checkSectionComplete(7);
    });
  });
  el.querySelectorAll('.bucket-del').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const i=parseInt(btn.dataset.bdel);
      bucketList.splice(i,1);
      localStorage.setItem('mayBucketList',JSON.stringify(bucketList));
      renderBucketList();
    });
  });
  const addBtn=document.getElementById('bucketAddBtn');
  const inp=document.getElementById('bucketInput');
  if(addBtn&&inp) addBtn.addEventListener('click',()=>{
    const t=inp.value.trim();
    if(!t) return;
    bucketList.push({texto:t,marcado:false});
    bucketAdded++;
    if(bucketAdded>=2) unlockAch(7,5);
    localStorage.setItem('mayBucketList',JSON.stringify(bucketList));
    inp.value=''; renderBucketList(); checkSectionComplete(7);
  });
}

// ===== SEC 8: JARDÍN =====
let sec8TimerStarted=false;
function initSec8() {
  const c=document.getElementById('jardinContainer');
  if (!c||c.children.length) return;
  const today=new Date().toDateString();
  jardinVisitDates.add(today);
  const savedDates=JSON.parse(localStorage.getItem('jardinDates')||'[]');
  savedDates.forEach(d=>jardinVisitDates.add(d));
  savedDates.push(today);
  localStorage.setItem('jardinDates',JSON.stringify([...new Set(savedDates)]));
  if(jardinVisitDates.size>=3) unlockAch(8,4);
  const flowersHtml=FLORES_JARDIN.map((f,i)=>`<div class="jardin-flower${jardinFloresClicked.has(i)?' clicked':''}" data-fidx="${i}">${f.emoji}</div>`).join('');
  c.innerHTML=`<div class="jardin-bg"><div class="jardin-flowers-grid">${flowersHtml}</div></div>
  <div style="padding:0 14px">
  <div class="jardin-actions">
    <button class="jardin-btn" id="jardinRegar">💧 Regar Jardín</button>
  </div>
  <p class="section-subtitle" style="margin-top:10px">💗 Haz clic en cada flor para descubrir un recuerdo especial 💗</p>
  </div>`;
  c.querySelectorAll('.jardin-flower').forEach(el=>{
    el.addEventListener('click',()=>{
      const idx=parseInt(el.dataset.fidx);
      const f=FLORES_JARDIN[idx];
      jardinFloresClicked.add(idx);
      el.classList.add('clicked');
      if(jardinFloresClicked.size>=FLORES_JARDIN.length){unlockAch(8,0);unlockAch(8,1);}
      openModal(`
        <img class="modal-img" src="${f.foto}" onerror="this.style.background='linear-gradient(135deg,var(--pink-pale),var(--blush))'">
        <div class="modal-title">${f.emoji} Recuerdo</div>
        <div class="modal-text">${f.mensaje}</div>
        ${f.audio?`<audio class="modal-audio" controls src="${f.audio}"></audio>`:''}
      `);
      if(f.audio) unlockAch(8,2);
      checkSectionComplete(8);
    });
  });
  document.getElementById('jardinRegar').addEventListener('click',()=>{
    jardinRiegoCount++;
    spawnParticles(window.innerWidth/2, window.innerHeight/2, 15, 'small');
    showNotif('¡Jardín regado! 💧🌸');
    if(jardinRiegoCount>=3) unlockAch(8,3);
    checkSectionComplete(8);
  });
  checkSectionComplete(8);
}

// ===== SEC 9: MAPA =====
let sec9TimerStarted=false, sec9MapInitialized=false;
function initSec9() {
  const c=document.getElementById('mapaContainer');
  if (!c||c.children.length) return;
  const savedFuture=localStorage.getItem('mayMapaFuture');
  if(savedFuture) mapaFutureList=JSON.parse(savedFuture);
  c.innerHTML=`
  <div class="mapa-canvas-wrap"><canvas id="mapaCanvas" width="400" height="280"></canvas></div>
  <div class="mapa-future-section">
    <div class="mapa-future-title">📍 Lugares que quiero visitar contigo</div>
    <div class="mapa-future-list" id="mapaFutureList"></div>
    <div class="mapa-add-row">
      <input type="text" class="mapa-input" id="mapaInput" placeholder="Nombre del lugar...">
      <button class="mapa-add-btn" id="mapaAddBtn">+ Agregar</button>
    </div>
  </div>`;
  renderMapaCanvas();
  renderMapaFuture();
  const addBtn=document.getElementById('mapaAddBtn');
  const inp=document.getElementById('mapaInput');
  if(addBtn&&inp) addBtn.addEventListener('click',()=>{
    const t=inp.value.trim();
    if(!t) return;
    mapaFutureList.push({nombre:t,visitado:false});
    localStorage.setItem('mayMapaFuture',JSON.stringify(mapaFutureList));
    inp.value='';
    if(mapaFutureList.length>=3) unlockAch(9,2);
    renderMapaFuture(); checkSectionComplete(9);
  });
  if(!sec9TimerStarted){sec9TimerStarted=true;setTimeout(()=>{unlockAch(9,5);checkSectionComplete(9);},60000);}
  checkSectionComplete(9);
}
function renderMapaCanvas() {
  const canvas=document.getElementById('mapaCanvas');
  if (!canvas) return;
  const ctx=canvas.getContext('2d');
  ctx.fillStyle='#e8f4e8'; ctx.fillRect(0,0,canvas.width,canvas.height);
  // Fondo mapa simple
  ctx.fillStyle='#c8e8b0'; ctx.fillRect(20,20,360,240); ctx.strokeStyle='#a3d8a0'; ctx.lineWidth=2; ctx.strokeRect(20,20,360,240);
  ctx.fillStyle='#b0d8f0'; ctx.fillRect(180,80,80,60); // lago
  ctx.fillStyle='rgba(200,232,176,0.5)'; ctx.fillRect(50,50,120,80); // bosque
  ctx.font='10px sans-serif'; ctx.fillStyle='#555'; ctx.fillText('🌊 Lago',192,115); ctx.fillText('🌲 Bosque',65,95);
  // Pines
  LUGARES_MAPA.forEach((lugar,i)=>{
    const clicked=mapaPinsClicked.has(i);
    ctx.beginPath(); ctx.arc(lugar.x,lugar.y,10,0,Math.PI*2);
    ctx.fillStyle=clicked?'#ec4899':'#f472b6';
    ctx.fill(); ctx.strokeStyle='#fff'; ctx.lineWidth=2; ctx.stroke();
    ctx.font='bold 9px sans-serif'; ctx.fillStyle='#fff'; ctx.textAlign='center';
    ctx.fillText(i+1,lugar.x,lugar.y+4); ctx.textAlign='start';
  });
  // Click en canvas
  const handler=e=>{
    const r=canvas.getBoundingClientRect();
    const scx=canvas.width/r.width, scy=canvas.height/r.height;
    const cx=(e.clientX-r.left)*scx, cy=(e.clientY-r.top)*scy;
    LUGARES_MAPA.forEach((lugar,i)=>{
      const d=Math.sqrt((cx-lugar.x)**2+(cy-lugar.y)**2);
      if(d<14){
        mapaPinsClicked.add(i);
        if(mapaPinsClicked.size>=LUGARES_MAPA.length){unlockAch(9,0);unlockAch(9,1);}
        openModal(`<img class="modal-img" src="${lugar.foto}" onerror="this.style.background='linear-gradient(135deg,var(--pink-pale),var(--blush))'">
          <div class="modal-title">${lugar.titulo}</div>
          <div class="modal-date">📅 ${lugar.fecha}</div>
          <div class="modal-text">${lugar.mensaje}</div>`);
        renderMapaCanvas(); checkSectionComplete(9);
      }
    });
  };
  canvas.onclick=handler;
}
function renderMapaFuture() {
  const el=document.getElementById('mapaFutureList');
  if (!el) return;
  el.innerHTML=mapaFutureList.map((l,i)=>`
    <div class="mapa-future-item">
      <span class="mapa-future-name${l.visitado?' visited':''}">${l.nombre}</span>
      <div class="mapa-future-actions">
        <button class="mapa-future-btn" data-mi="${i}" data-action="visit">✓</button>
        <button class="mapa-future-btn" data-mi="${i}" data-action="del">✕</button>
      </div>
    </div>`).join('');
  el.querySelectorAll('.mapa-future-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const i=parseInt(btn.dataset.mi);
      if(btn.dataset.action==='visit'){mapaFutureList[i].visitado=true;unlockAch(9,4);}
      if(btn.dataset.action==='del'){mapaFutureList.splice(i,1);unlockAch(9,3);}
      localStorage.setItem('mayMapaFuture',JSON.stringify(mapaFutureList));
      renderMapaFuture(); checkSectionComplete(9);
    });
  });
}

// ===== SEC 10: CAJA 3D =====
let sec10TimerStarted=false;
function initSec10() {
  const c=document.getElementById('caja3dContainer');
  if (!c||c.children.length) return;
  cajaStartTime=Date.now();
  const itemsHtml=RECUERDOS_3D.map((r,i)=>`
    <div class="caja-item caja-item-${r.tipo}${cajaFound.has(i)?' found':''}" data-cidx="${i}">
      <div class="caja-item-icon">${r.tipo==='foto'?'📷':r.tipo==='nota'?'📝':'🎁'}</div>
      <div class="caja-item-label">${r.tipo}</div>
    </div>`).join('');
  c.innerHTML=`
  <div class="sec-inner-wrap">
    <div class="caja-found-count" id="cajaFoundCount">Encontrados: ${cajaFound.size}/${RECUERDOS_3D.length} 💗</div>
    <div class="caja-scene"><div class="caja-content">${itemsHtml}</div></div>
    <p class="section-subtitle">💗 Explora y haz clic en los elementos para descubrir recuerdos 💗</p>
  </div>`;
  c.querySelectorAll('.caja-item').forEach(el=>{
    el.addEventListener('click',()=>{
      if(el.classList.contains('found')) return;
      const idx=parseInt(el.dataset.cidx);
      const r=RECUERDOS_3D[idx];
      cajaFound.add(idx);
      el.classList.add('found');
      document.getElementById('cajaFoundCount').textContent=`Encontrados: ${cajaFound.size}/${RECUERDOS_3D.length} 💗`;
      if(r.tipo==='foto'||r.tipo==='nota'||r.tipo==='regalo') unlockAch(10,1);
      if(cajaFound.size>=RECUERDOS_3D.length) unlockAch(10,0);
      openModal(`<div class="caja-item-${r.tipo}" style="font-size:3rem;text-align:center;padding:20px;border-radius:14px;margin-bottom:12px">${r.tipo==='foto'?'📷':r.tipo==='nota'?'📝':'🎁'}</div>
        ${r.tipo==='foto'?`<img class="modal-img" src="${r.contenido}" onerror="this.style.background='linear-gradient(135deg,var(--pink-pale),var(--blush))'">`:`<div class="modal-title" style="font-size:1rem">${r.contenido}</div>`}
        <div class="modal-text">${r.mensaje}</div>`);
      spawnParticles(window.innerWidth/2,window.innerHeight/2,12,'small');
      checkSectionComplete(10);
    });
  });
  if(!sec10TimerStarted){
    sec10TimerStarted=true;
    setInterval(()=>{if(!document.getElementById('sec10')?.classList.contains('hidden')&&(Date.now()-cajaStartTime)>90000){unlockAch(10,3);checkSectionComplete(10);}},5000);
  }
  unlockAch(10,2); // reproductor global disponible
  checkSectionComplete(10);
}

// ===== SEC 11: PREGUNTAS DEL CORAZÓN =====
function initSec11() {
  pqState=JSON.parse(localStorage.getItem('pqState')||'null')||{current:0,answers:[],unlocked:[],restarted:false};
  renderPQ();
}
function renderPQ() {
  const c=document.getElementById('preguntasContainer');
  if (!c) return;
  const total=PREGUNTAS_CORAZON.length;
  if(pqState.current>=total){renderPQResult();return;}
  const q=PREGUNTAS_CORAZON[pqState.current];
  const pct=Math.round(pqState.current/total*100);
  c.innerHTML=`<div class="pq-wrap">
    <div class="test-progress-text">Pregunta ${pqState.current+1} de ${total} — ${pct}%</div>
    <div class="cp-bar-outer" style="margin-bottom:12px"><div class="cp-bar-inner" style="width:${pct}%"></div></div>
    <div class="pq-q-text">${q.pregunta}</div>
    <div class="pq-options">${q.opciones.map((o,i)=>`<button class="pq-option" data-i="${i}">${o}</button>`).join('')}</div>
    <button class="pq-btn" id="pqAnswerBtn" disabled>Responder 💗</button>
    <div class="pq-gallery" id="pqGallery">${pqState.unlocked.map(u=>`<div class="pq-gallery-item"><img src="${PREGUNTAS_CORAZON[u]?.desbloqueo||''}" onerror="this.parentElement.innerHTML='💗'" style="width:100%;height:100%;object-fit:cover;border-radius:10px"></div>`).join('')}</div>
  </div>`;
  let selectedOpt=null;
  c.querySelectorAll('.pq-option').forEach(btn=>{
    btn.addEventListener('click',()=>{
      c.querySelectorAll('.pq-option').forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected'); selectedOpt=parseInt(btn.dataset.i);
      document.getElementById('pqAnswerBtn').disabled=false;
    });
  });
  document.getElementById('pqAnswerBtn').addEventListener('click',()=>{
    if(selectedOpt===null) return;
    const correct=q.correcta;
    c.querySelectorAll('.pq-option').forEach((b,i)=>{
      if(i===correct) b.classList.add('correct');
      else if(i===selectedOpt) b.classList.add('wrong');
    });
    pqState.answers.push(selectedOpt);
    if(selectedOpt===correct) {
      pqState.unlocked.push(pqState.current);
      spawnParticles(window.innerWidth/2,window.innerHeight/2,10,'small');
    }
    localStorage.setItem('pqState',JSON.stringify(pqState));
    document.getElementById('pqAnswerBtn').textContent='Siguiente →';
    document.getElementById('pqAnswerBtn').disabled=false;
    document.getElementById('pqAnswerBtn').onclick=()=>{pqState.current++;renderPQ();};
  });
}
function renderPQResult() {
  const c=document.getElementById('preguntasContainer');
  const total=PREGUNTAS_CORAZON.length;
  const correct=pqState.answers.filter((a,i)=>a===PREGUNTAS_CORAZON[i]?.correcta).length;
  const pct=Math.round(correct/total*100);
  if(pqState.answers.length>=total) unlockAch(11,0);
  if(pct===100) unlockAch(11,1);
  if(pqState.unlocked.length>=total) unlockAch(11,2);
  unlockAch(11,3);
  c.innerHTML=`<div class="pq-wrap">
    <div style="text-align:center">
      <div class="test-result-score">${correct}/${total} — ${pct}%</div>
      <div class="test-result-msg">${pct===100?'¡Perfecta! Me conoces a la perfección 💗':'¡Muy bien! Sigue explorando nuestra historia 🥰'}</div>
    </div>
    <div class="pq-gallery" style="margin-top:16px">${pqState.unlocked.map(u=>`<div class="pq-gallery-item"><img src="${PREGUNTAS_CORAZON[u]?.desbloqueo||''}" onerror="this.parentElement.innerHTML='💗'" style="width:100%;height:100%;object-fit:cover;border-radius:10px"></div>`).join('')}</div>
    <button class="pq-btn" style="margin-top:14px" id="pqRestartBtn">Reiniciar 🔄</button>
  </div>`;
  document.getElementById('pqRestartBtn').addEventListener('click',()=>{
    pqState={current:0,answers:[],unlocked:[],restarted:true};
    localStorage.setItem('pqState',JSON.stringify(pqState));
    unlockAch(11,4); renderPQ();
  });
  checkSectionComplete(11);
}

// ===== SEC 12: CARTA INFINITA =====
let sec12TimerStarted=false, sec12SecretParagraphTimer=null;
function initSec12() {
  const c=document.getElementById('cartaInfinitaContainer');
  if (!c||c.children.length) return;
  let text=CARTA_INFINITA_TEXT;
  PALABRAS_SECRETAS_CARTA.forEach(w=>{
    const re=new RegExp(`(${w})`, 'gi');
    text=text.replace(re,`<span class="secret-word" data-sw="${w}">$1</span>`);
  });
  c.innerHTML=`<div class="sec-inner-wrap">
  <div class="carta-infinita-wrap">
    <div class="carta-infinita-text" id="cartaInfText">${text}</div>
    <div class="carta-secret-section" id="cartaSecret1">
      <div style="font-family:var(--font-vibes);font-size:1.8rem;color:var(--pink-dark)">✨ Sección Secreta ✨</div>
      <p style="font-family:var(--font-cormo);font-style:italic;color:var(--text-dark);margin-top:8px">¡Lo lograste! Este es nuestro espacio secreto de amor eterno. Te amo infinitash eternidades mi bellíshima May (≧▽≦) 💗</p>
    </div>
    <div class="carta-secret-section" id="cartaSecret2">
      <div style="font-family:var(--font-vibes);font-size:1.5rem;color:var(--lilac)">💜 Párrafo Especial 💜</div>
      <p style="font-family:var(--font-cormo);font-style:italic;color:var(--text-dark);margin-top:8px">Pasaste tiempo leyendo este párrafo con atención... y eso me llena el corazón 💗</p>
    </div>
    <div class="carta-sorpresa" id="cartaSorpresa">
      <img class="carta-sorpresa-img" src="${SORPRESA_FINAL_SRC}" alt="Sorpresa" onerror="this.style.display='none'">
      <div class="carta-sorpresa-text">✨ Gracias por llegar hasta aquí, mi amor eterno May 💗 ✨</div>
    </div>
  </div>
  </div>`;
  // Scroll hasta el final
  const textEl=document.getElementById('cartaInfText');
  textEl?.addEventListener('scroll',()=>{
    if(textEl.scrollTop+textEl.clientHeight>=textEl.scrollHeight-10){
      unlockAch(12,0); cartaScrollDone=true;
      if(!cartaSorpresaShown){cartaSorpresaShown=true;document.getElementById('cartaSorpresa')?.classList.add('visible');unlockAch(12,2);}
      checkSectionComplete(12);
    }
  });
  // Palabras secretas
  document.querySelectorAll('.secret-word').forEach(el=>{
    el.addEventListener('click',()=>{
      const w=el.dataset.sw;
      if(!cartaSecretClickCounts[w]) cartaSecretClickCounts[w]=0;
      cartaSecretClickCounts[w]++;
      el.classList.add('found');
      spawnParticles(el.getBoundingClientRect().left+20,el.getBoundingClientRect().top,8,'small');
      const allFound=PALABRAS_SECRETAS_CARTA.every(sw=>cartaSecretClickCounts[sw]>0);
      if(allFound) unlockAch(12,1);
      if(cartaSecretClickCounts[w]>=5){unlockAch(12,3);document.getElementById('cartaSecret1')?.classList.add('visible');}
      checkSectionComplete(12);
    });
    // Hover 10 segundos
    el.addEventListener('mouseenter',()=>{
      const w=el.dataset.sw;
      cartaHoverTimers[w]=setTimeout(()=>{unlockAch(12,4);document.getElementById('cartaSecret2')?.classList.add('visible');checkSectionComplete(12);},10000);
    });
    el.addEventListener('mouseleave',()=>{clearTimeout(cartaHoverTimers[el.dataset.sw]);});
  });
  if(!sec12TimerStarted){
    sec12TimerStarted=true;
    setTimeout(()=>{unlockAch(12,5);checkSectionComplete(12);},90000);
  }
}

// ===== SEC 13: ETERNO AMOR =====
function initSec13() {
  const c=document.getElementById('sec13Container');
  if (!c) return;
  c.innerHTML=`
  <div class="sec13-intro">
    <div class="sec13-main-title">${TITULO_SECCION_13}</div>
    <div class="sec13-subtitle">${SUBTITULO_SECCION_13}</div>
  </div>
  <!-- Carrusel sec13 -->
  <div class="sec13-carousel-wrap">
    <div class="sec-inner-wrap" style="padding:0"><div class="carousel-wrap" style="max-width:380px;margin:0 auto">
      <button class="nav-btn prev-btn" id="sec13Prev">❮</button>
      <div class="sec13-carousel" id="sec13Carousel"></div>
      <button class="nav-btn next-btn" id="sec13Next">❯</button>
    </div></div>
    <div class="carousel-progress"><span id="sec13ProgText">Imagen 1 de ${TOTAL_SLIDES_SEC13} 💗</span>
    <div class="cp-bar-outer"><div class="cp-bar-inner" id="sec13ProgBar"></div></div></div>
    <div class="carousel-dots" id="sec13Dots"></div>
  </div>
  <!-- Contador eterno -->
  <div class="sec-inner-wrap
