// DATOS: Aquí definimos todos los artículos disponibles
const blogData = [
    {
        id: 1,
        titulo: "Los rincones del mundo que todo mochilero debería visitar en 2025",
        autor: "Carolina Monteamor",
        fecha: "25 Agosto, 2025",
        lectura: "5 min de lectura",
        imagenPrincipal: "assets/niklas-weiss--2WlTWZLnRc-unsplash.jpg",
        tag: "Destinos 2025",
        resumen: "Viajar con la mochila al hombro nunca pasa de moda. Cada año aparecen nuevos rincones que se vuelven tendencia...",
        contenidoHTML: `
            <p class="lead-text">
                Viajar con la mochila al hombro nunca pasa de moda. Cada año surgen nuevos destinos que despiertan la curiosidad de quienes buscan aventura, autenticidad y experiencias que dejen huella. El 2025 promete ser un año lleno de oportunidades para los mochileros del mundo.
            </p>

            <p>
                Desde rutas poco transitadas en Asia hasta paisajes naturales intactos en América del Sur, pasando por aldeas europeas que parecen detenidas en el tiempo. A continuación, te presentamos algunos de los rincones más sorprendentes que deberías incluir en tu lista de viajes este año.
            </p>

            <h2>1. Ubud y los Arrozales de Bali, Indonesia</h2>
            <p>
                Aunque Bali es un destino conocido, alejarse de las zonas más turísticas de Kuta y adentrarse en el corazón de Ubud sigue siendo una experiencia transformadora. Los arrozales de Tegallalang ofrecen un paisaje verde esmeralda que parece sacado de una pintura.
            </p>
            
            <figure class="article-inline-image">
                <img src="assets/niklas-weiss--2WlTWZLnRc-unsplash.jpg" alt="Arrozales de Bali">
                <figcaption>Los impresionantes arrozales de Tegallalang en Ubud.</figcaption>
            </figure>

            <p>
                Para el mochilero, Ubud es el punto de partida ideal para explorar templos escondidos, practicar yoga en medio de la selva y conectar con la cultura local de una manera profunda y respetuosa. No olvides visitar el Monkey Forest, pero ¡cuidado con tus pertenencias!
            </p>

            <blockquote>
                “Viajar no es solo moverse de un lugar a otro, es cambiar tus ideas y prejuicios por experiencias reales.”
            </blockquote>

            <h2>2. La Ruta de los Balcanes</h2>
            <p>
                Europa del Este sigue siendo uno de los secretos mejor guardados y más económicos para los mochileros. Países como Albania, Montenegro y Bosnia ofrecen montañas espectaculares, playas de aguas cristalinas y ciudades con una historia fascinante, todo a una fracción del coste de Europa Occidental.
            </p>

            <h3>Consejos para el viajero sostenible</h3>
            <ul>
                <li>Utiliza transporte local siempre que sea posible.</li>
                <li>Lleva tu propia botella de agua reutilizable.</li>
                <li>Respeta las costumbres locales de vestimenta en templos.</li>
                <li>Apoya a los artesanos locales comprando directamente a ellos.</li>
            </ul>

            <p>
                Preparar tu mochila para el 2025 significa estar listo para lo inesperado. Recuerda que la mejor ruta es a veces la que no aparece en los mapas, sino la que te recomiendan los locales con una sonrisa.
            </p>

            <div class="share-section">
                <span>¿Te gustó? Compártelo:</span>
                <div class="share-icons">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
        `
    },
    {
    id: 2,
    titulo: "Los 10 destinos más sorprendentes de la India",
    autor: "Adriana del Río",
    fecha: "10 Septiembre, 2025",
    lectura: "7 min de lectura",
    imagenPrincipal: "assets/india.jpg",
    tag: "Asia",
    resumen: "La India es un continente en sí mismo. Descubre los templos olvidados, las rutas de especias y los paisajes que desafían la imaginación.",
    contenidoHTML: `
        <p class="lead-text">
            La India no es solo un país; es un asalto a los sentidos. Es un lugar donde el caos y la calma coexisten en una danza eterna. Visitar la India en 2025 sigue siendo el rito de iniciación definitivo para cualquier viajero que busque salir de su zona de confort.
        </p>

        <p>
            Más allá del Taj Mahal y el Triángulo Dorado, existe una India profunda, llena de misticismo y paisajes que parecen de otro planeta. He seleccionado los 10 destinos que más me impactaron en mi última travesía de tres meses, lugares donde la magia aún reside en cada esquina.
        </p>

        <h2>1. Hampi: El Reino de las Piedras</h2>
        <p>
            Imagina un paisaje lunar salpicado de palmeras y templos antiguos. Hampi, en el estado de Karnataka, es surrealista. Las ruinas del imperio Vijayanagara se mezclan con enormes rocas que parecen haber sido colocadas por gigantes.
        </p>
        
        <figure class="article-inline-image">
            <img src="assets/ruinas_de_hampi.jpg" alt="Ruinas de Hampi al atardecer">
            <figcaption>El atardecer sobre el templo Virupaksha es un momento inolvidable.</figcaption>
        </figure>

        <p>
            Aquí el tiempo se detiene. Alquila una moto, cruza el río en una barca de bambú y explora el lado "hippie" de la isla, o piérdete entre los monolitos del templo de Vittala.
        </p>

        <h2>2. Ladakh: El Pequeño Tíbet</h2>
        <p>
            Lejos del calor tropical del sur, en el extremo norte, se encuentra Ladakh. Rodeado por las cordilleras del Himalaya y el Karakórum, este desierto frío ofrece monasterios budistas colgados de acantilados y carreteras que tocan las nubes.
        </p>

        <blockquote>
            “En la India aprendes que el plan nunca es el plan. La India decide por ti, y siempre decide algo mejor de lo que imaginabas.”
        </blockquote>

        <h2>3. Varanasi: La Ciudad de la Luz</h2>
        <p>
            No es un destino fácil, pero es esencial. Varanasi es una de las ciudades habitadas más antiguas del mundo. Navegar por el río Ganges al amanecer y observar los rituales de vida y muerte en los <em>ghats</em> es una experiencia que te cambia la perspectiva sobre la existencia.
        </p>

        <h2>4. Kerala y los Backwaters</h2>
        <p>
            Para recuperarte de la intensidad del norte, nada mejor que el sur. Navegar en una casa flotante (<em>houseboat</em>) por los canales de Alleppey es la definición de paz absoluta. Palmeras, arrozales y una cocina basada en el coco que es simplemente deliciosa.
        </p>

        <h3>Consejos esenciales para tu viaje a la India</h3>
        <ul>
            <li><strong>El agua:</strong> Bebe siempre agua embotellada y evita el hielo en puestos callejeros.</li>
            <li><strong>Vestimenta:</strong> Lleva ropa modesta, especialmente al visitar templos. Un pañuelo siempre es útil.</li>
            <li><strong>Transporte:</strong> Usa la app de trenes india (IRCTC) para reservar con antelación; las plazas vuelan.</li>
            <li><strong>Actitud:</strong> La paciencia será tu mejor virtud. Sonríe y déjate llevar.</li>
        </ul>

        <p>
            La lista se completa con joyas como Jaisalmer (la ciudad dorada), Rishikesh (la capital del yoga), o los puentes de raíces vivas en Meghalaya. La India te espera con los brazos abiertos y mil historias por contar. ¿Estás listo para el viaje de tu vida?
        </p>

        <div class="share-section">
            <span>¿Te inspiró este artículo? Compártelo:</span>
            <div class="share-icons">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
    `
    },
    {
    id: 3,
    titulo: "Los secretos mejor guardados del mundo mochilero",
    autor: "Miguel Ángel Soto",
    fecha: "05 Octubre, 2025",
    lectura: "4 min de lectura",
    imagenPrincipal: "assets/morten-andreassen-mX0tCOykgSY-unsplash.jpg",
    tag: "Consejos",
    resumen: "Ahorrar dinero, empacar ligero y conocer gente local. Te contamos los secretos de los expertos para viajar más lejos con menos.",
    contenidoHTML: `
        <p class="lead-text">
            Hay una diferencia abismal entre ser turista y ser viajero. El turista exige que todo funcione como en casa; el viajero se adapta al caos. Tras años de rutas, albergues y autobuses nocturnos, he recopilado esas "reglas no escritas" que todo mochilero experto conoce pero que rara vez aparecen en las guías convencionales.
        </p>

        <p>
            No se trata solo de ahorrar dinero (que también), sino de optimizar la experiencia para vivir aventuras auténticas sin el peso—literal y figurado—de las preocupaciones innecesarias.
        </p>

        <h2>1. La regla de los 7 kilos</h2>
        <p>
            El error número uno es llevar "por si acasos". El secreto mejor guardado es que <strong>puedes comprar casi todo lo que necesites en el destino</strong>, y a menudo, más barato. Si tu mochila pesa más de 10kg, estás cargando con miedos, no con ropa.
        </p>

        <div class="tip-box" style="background-color: #f8f9fa; border-left: 4px solid #333; padding: 15px; margin: 20px 0;">
            <strong>El truco del jabón sólido:</strong>
            Olvida los líquidos. Una pastilla de jabón tipo "Lagarto" o de coco sirve para: lavar tu ropa, ducharte, lavar los platos y hasta afeitarte. Ahorras espacio, peso y problemas en los controles del aeropuerto.
        </div>

        <h2>2. El arte de dormir en movimiento</h2>
        <p>
            El presupuesto de alojamiento suele ser el más alto. Los expertos saben que moverse de noche es un 2x1: avanzas kilómetros y te ahorras la noche de hostal.
        </p>

        <figure class="article-inline-image">
            <img src="assets/tren_nocturno.jpg" alt="Tren nocturno en movimiento">
            <figcaption>Los trenes nocturnos en Asia no solo ahorran dinero, son una aventura social.</figcaption>
        </figure>

        <h2>3. Come donde comen los taxistas</h2>
        <p>
            Evita los restaurantes con cartas en inglés y fotos de los platos en la puerta. Si quieres comida segura, barata y deliciosa, busca dónde hay fila de locales. Mi regla de oro: si ves familias con niños o taxistas comiendo ahí, la comida es fresca y buena.
        </p>

        <h2>4. Aplicaciones que salvan vidas (y dinero)</h2>
        <p>
            La tecnología es tu aliada. Más allá de Google Maps, asegúrate de tener este kit digital:
        </p>
        
        <ul>
            <li><strong>Maps.me:</strong> Mapas offline. Imprescindible cuando no tienes señal en medio de la montaña.</li>
            <li><strong>XE Currency:</strong> Para saber exactamente cuánto estás pagando y evitar estafas en el cambio.</li>
            <li><strong>Splitwise:</strong> Si viajas con amigos, es la única forma de mantener las cuentas claras y la amistad intacta.</li>
        </ul>

        <hr style="margin: 30px 0; border: 0; border-top: 1px solid #eee;">

        <h3>El Manifiesto del Buen Mochilero</h3>
        <p>
            Para terminar, recuerda que eres un embajador de tu cultura.
        </p>
        <blockquote>
            “Sonríe siempre, incluso cuando no entiendas el idioma. Una sonrisa es el único pasaporte que no caduca y abre más puertas que el dinero.”
        </blockquote>

        <p>
            Viajar ligero te da libertad. Viajar lento te da perspectiva. Y viajar con la mente abierta te da historias que contarás el resto de tu vida.
        </p>

        <div class="share-section">
            <span>¿Tienes algún secreto viajero? Compártelo:</span>
            <div class="share-icons">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
        `
    },
    {
    id: 4,
    titulo: "Los nuevos paraísos mochileros que deberías conocer",
    autor: "Javier Navarro",
    fecha: "12 Noviembre, 2025",
    lectura: "6 min de lectura",
    imagenPrincipal: "assets/andrew-ridley-Kt5hRENuotI-unsplash.jpg",
    tag: "Naturaleza",
    resumen: "Si buscas desconexión total, estos parques naturales y playas vírgenes son para ti. Lugares donde el Wi-Fi no llega, pero la conexión es total.",
    contenidoHTML: `
        <p class="lead-text">
            Parece que el mundo se ha hecho más pequeño. Abres Instagram y ves la misma foto de la misma playa una y otra vez. Pero si sabes dónde mirar, el planeta todavía guarda rincones salvajes, pulmones verdes y aguas turquesas donde la única huella en la arena será la tuya.
        </p>

        <p>
            Este 2025, la tendencia no es ir a donde van todos, sino ir a donde la naturaleza manda. He seleccionado tres destinos emergentes que están redefiniendo el concepto de "paraíso" para el mochilero consciente.
        </p>

        <h2>1. Svaneti, Georgia: Las torres entre glaciares</h2>
        <p>
            Olvida los Alpes por un momento. En el Cáucaso georgiano, la región de Svaneti ofrece un paisaje dramático de picos nevados y prados alpinos salpicados de antiguas torres defensivas medievales (koshki).
        </p>

        <figure class="article-inline-image">
            <img src="assets/montañas_del_caucaso.jpg" alt="Montañas del Cáucaso en Georgia">
            <figcaption>Mestia y Ushguli: aldeas donde el tiempo se detuvo hace siglos.</figcaption>
        </figure>

        <p>
            Es el destino perfecto para el senderismo duro y puro. Aquí no hay tiendas de souvenirs, solo aire limpio, hospitalidad ruda pero sincera y el famoso <em>khachapuri</em> (pan de queso) para reponer fuerzas tras la caminata.
        </p>

        <h2>2. Raja Ampat, Indonesia: El último edén submarino</h2>
        <p>
            Si Bali es la fiesta, Raja Ampat es el templo. Ubicado en Papúa Occidental, este archipiélago es biológicamente el lugar más rico de la Tierra en vida marina. Llegar no es barato ni fácil (varios vuelos y ferris), lo que actúa como un filtro natural para el turismo de masas.
        </p>

        <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin: 25px 0;">
            <h4 style="margin-top: 0; color: #0d47a1;"> El dato curioso</h4>
            <p style="margin-bottom: 0;">
                En estas aguas habitan el 75% de las especies de coral conocidas en el mundo. Bucear aquí es como nadar dentro de un documental de alta definición.
            </p>
        </div>

        <h2>3. La Guajira, Colombia: Donde el desierto besa al mar</h2>
        <p>
            En el extremo norte de Sudamérica, el desierto se encuentra con el Caribe. No esperes resorts; aquí se duerme en chinchorros (hamacas tejidas a mano) bajo un cielo con más estrellas de las que creías que existían. Es tierra de la cultura Wayúu, un lugar de vientos fuertes y contrastes naranjas y azules imposibles.
        </p>

        <blockquote>
            “No heredamos la tierra de nuestros antepasados, la tomamos prestada de nuestros hijos.” — Proverbio nativo americano
        </blockquote>

        <figure class="article-inline-image">
            <img src="assets/colombia_desierto.jpg" alt="Desierto de La Guajira en Colombia">
            <figcaption>La Guijara Colombia</figcaption>
        </figure>

        <h3>Tu Check-list de Viajero Sostenible</h3>
        <p>
            Visitar estos paraísos conlleva una responsabilidad. Antes de partir, asegúrate de cumplir con estos tres mandamientos:
        </p>

        <ul class="check-list" style="list-style: none; padding-left: 0;">
            <li style="margin-bottom: 10px;">✅ <strong>Cero Plástico:</strong> Lleva botella con filtro y bolsas de tela. En islas remotas, el plástico que llevas se queda allí para siempre.</li>
            <li style="margin-bottom: 10px;">✅ <strong>Respeta la Fauna:</strong> Nunca toques corales ni alimentes animales silvestres para la foto.</li>
            <li style="margin-bottom: 10px;">✅ <strong>Economía Local:</strong> Paga el precio justo. El regateo agresivo en comunidades rurales no es ahorro, es explotación.</li>
        </ul>

        <p>
            La naturaleza nos está llamando a volver a lo básico. Estos destinos no son para que los consumas, son para que los cuides mientras ellos te curan a ti.
        </p>

        <div class="share-section">
            <span>¿Cuál es tu paraíso soñado? Cuéntanoslo:</span>
            <div class="share-icons">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
        `
    },
    {
    id: 5,
    titulo: "La vuelta al mundo en 80 platos: Comida callejera imperdible",
    autor: "Marta Giménez",
    fecha: "18 Diciembre, 2025",
    lectura: "5 min de lectura",
    imagenPrincipal: "assets/street_market.jpg",
    tag: "Gastronomía",
    resumen: "Olvídate de los restaurantes de mantel blanco. La verdadera cultura de un país se hierve, se fríe y se sirve en las aceras.",
    contenidoHTML: `
        <p class="lead-text">
            Hay dos tipos de viajeros: los que comen para sobrevivir y los que viajan para comer. Si eres de los segundos, sabes que el alma de una ciudad no está en sus museos, sino en el humo que sale de sus puestos callejeros a las siete de la tarde.
        </p>

        <p>
            Comer en la calle es un acto de fe y, sobre todo, de inmersión cultural. Es barato, es rápido y, a menudo, es mucho más fresco que en cualquier hotel. Aquí tienes mis tres paradas gastronómicas favoritas de este 2025.
        </p>

        <h2>1. Bangkok, Tailandia: La capital mundial del sabor</h2>
        <p>
            En Chinatown (Yaowarat), el caos es delicioso. No puedes irte sin probar un <em>Pad Thai</em> auténtico cocinado en un wok a fuego vivo o el desafiante <em>Durian</em> si te sientes valiente.
        </p>

        <figure class="article-inline-image">
            <img src="assets/bangkok_street_food.jpg" alt="Puesto de comida callejera en Bangkok">
            <figcaption>El chef callejero de Bangkok: un espectáculo de fuego y destreza.</figcaption>
        </figure>

        <h2>2. Ciudad de México: El imperio del taco</h2>
        <p>
            Desde los tacos al pastor girando en su trompo hasta los esquites con mayonesa y chile. La regla aquí es sencilla: donde veas gente de pie sosteniendo un plato con una bolsita de plástico, ahí es.
        </p>

        <div style="border: 2px dashed #ff5722; padding: 20px; border-radius: 10px; margin: 30px 0; background-color: #fff3e0;">
            <h4 style="margin-top: 0; color: #d84315;">🔥 El índice de picante</h4>
            <table style="width: 100%; text-align: left;">
                <tr>
                    <td style="padding: 5px;"><strong>Pica poco:</strong></td>
                    <td>"Salsa verde" (a veces)</td>
                </tr>
                <tr>
                    <td style="padding: 5px;"><strong>Pica rico:</strong></td>
                    <td>Salsa roja / Chipotle</td>
                </tr>
                <tr>
                    <td style="padding: 5px;"><strong>Llorarás:</strong></td>
                    <td>Habanero</td>
                </tr>
            </table>
        </div>

        <h2>3. Estambul, Turquía: Entre dos continentes</h2>
        <p>
            Nada supera caminar por el puente de Gálata comiendo un <em>Balik Ekmek</em> (bocadillo de pescado) recién hecho, mientras escuchas la llamada a la oración al atardecer.
        </p>

        <h3>Reglas de oro para un estómago feliz</h3>
        <p>
            Comer en la calle es seguro si sigues el sentido común. Aquí tienes mi mantra personal:
        </p>
        
        <ul>
            <li><strong>Fuego alto:</strong> Asegúrate de que cocinen la comida delante de ti. El calor mata todo.</li>
            <li><strong>Rotación alta:</strong> Ve al puesto con la fila más larga. Significa que la comida no lleva horas ahí parada.</li>
            <li><strong>Sin hielo:</strong> Si el agua no es potable en el país, el hielo tampoco lo es.</li>
        </ul>

        <p>
            Así que la próxima vez, guarda la guía de restaurantes de moda y sigue a tu olfato. ¡Buen provecho!
        </p>

        <div class="share-section">
            <span>¿Cuál fue tu mejor comida callejera?</span>
            <div class="share-icons">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
        `
    }

];
    
function renderBlogList(container, data = blogData) {
    container.innerHTML = "";
    if (data.length === 0) {
        container.innerHTML = `<div style="text-align: center; padding: 40px; color: #666; width: 100%;"><h3 data-i18n="blog.no_results_title"></h3><p data-i18n="blog.no_results_text"></p></div>`;
        if (window.i18n) {
            window.i18n.run();
        }
        return;
    }

    container.innerHTML = data.map(post => `
        <article class="blog-card">
            <div class="blog-image"><img src="${post.imagenPrincipal}" alt="${post.titulo}" loading="lazy"></div>
            <div class="blog-content">
                <h3 data-i18n="data_blog.id_${post.id}.title">${post.titulo}</h3>
                <p class="blog-author"><span data-i18n="blog.by"></span> ${post.autor}</p>
                <p class="blog-excerpt" data-i18n="data_blog.id_${post.id}.summary">${post.resumen}</p>
                <a href="blog_post.html?id=${post.id}" class="btn-black-sm" data-i18n="blog.read_more">Leer</a>
            </div>
        </article>
    `).join('');
    
    if (window.i18n) {
        window.i18n.run();
    }
}

function loadBlogPost() {
    const id = parseInt(new URLSearchParams(window.location.search).get("id"));
    const post = blogData.find(p => p.id === id);
    if (!post) {
        return;
    }

    const setText = (id, txt, key) => {
        const el = document.getElementById(id);
        if(el) { 
            el.textContent = txt; 
            if(key) el.setAttribute("data-i18n", key); 
        }
    };

    setText("post-tag", post.tag, `categories.${post.tag}`);
    setText("post-title", post.titulo, `data_blog.id_${post.id}.title`);
    document.getElementById("post-author").innerHTML = `<i class="fa-regular fa-user"></i> <span data-i18n="blog.by"></span> ${post.autor}`;
    document.getElementById("post-date").innerHTML = `<i class="fa-regular fa-calendar"></i> ${post.fecha}`;
    document.getElementById("post-time").innerHTML = `<i class="fa-regular fa-clock"></i> ${post.lectura}`;
    document.getElementById("post-content").innerHTML = post.contenidoHTML;

    document.querySelector(".sticky-article-hero").style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${post.imagenPrincipal}')`;

    const related = document.getElementById("related-posts-container");
    if (related) {
        related.innerHTML = blogData.filter(p => p.id !== id).slice(0, 2).map(s => `
            <a href="blog_post.html?id=${s.id}" class="related-card">
                <img src="${s.imagenPrincipal}" alt="${s.titulo}">
                <h4 data-i18n="data_blog.id_${s.id}.title">${s.titulo}</h4>
            </a>
        `).join('');
    }
    if (window.i18n) {
        window.i18n.run();
    }
}

function initBlogFilters(container) {
    const input = document.querySelector(".search-input-container input");
    const state = { text: "", cat: "Todas las categorías", order: "Más recientes" };

    const apply = () => {
        let res = blogData.filter(p => {
            const txtMatch = p.titulo.toLowerCase().includes(state.text) || p.resumen.toLowerCase().includes(state.text);
            const catMatch = state.cat === "Todas las categorías" || p.tag === state.cat;
            return txtMatch && catMatch;
        });

        const parseDate = (str) => {
            const parts = str.replace(',', '').split(' ');
            return new Date(parts[2], ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"].indexOf(parts[1]), parts[0]);
        };

        if (state.order === "Más recientes") { res.sort((a,b) => parseDate(b.fecha) - parseDate(a.fecha)); }
        else if (state.order === "Más antiguos") { res.sort((a,b) => parseDate(a.fecha) - parseDate(b.fecha)); }
        else if (state.order === "A-Z") { res.sort((a,b) => a.titulo.localeCompare(b.titulo)); }
        else if (state.order === "Z-A") { res.sort((a,b) => b.titulo.localeCompare(a.titulo)); }

        renderBlogList(container, res);
    };

    if (input) {
        input.addEventListener("input", (e) => { 
            state.text = e.target.value.toLowerCase().trim(); 
            apply(); 
        });
    }

    const setupMenu = (btnCls, opts, cb) => {
        const btn = document.querySelector(btnCls);
        if (!btn) {
            return;
        }
        
        const menu = document.createElement("div");
        menu.className = "category-dropdown";
        
        opts.forEach(o => {
            const item = document.createElement("div");
            item.className = "category-option";
            item.textContent = o;
            item.onclick = () => { 
                cb(o); 
                menu.classList.remove("show"); 
                if(btnCls.includes("icon")) {
                    btn.classList.remove("active"); 
                } else {
                    btn.textContent = o; 
                }
            };
            menu.appendChild(item);
        });
        
        document.querySelector(".filter-buttons").appendChild(menu);
        
        btn.onclick = (e) => {
            e.stopPropagation();
            document.querySelectorAll(".category-dropdown").forEach(m => {
                if (m !== menu) m.classList.remove("show");
            });
            menu.classList.toggle("show");
            
            if(btnCls.includes("icon")) {
                btn.classList.toggle("active");
            }
        };
    };

    setupMenu(".filter-btn", ["Todas las categorías", ...new Set(blogData.map(p => p.tag))], (sel) => { state.cat = sel; apply(); });
    setupMenu(".filter-icon-btn", ["Más recientes", "Más antiguos", "A-Z", "Z-A"], (sel) => { state.order = sel; apply(); });

    document.addEventListener("click", () => {
        document.querySelectorAll(".category-dropdown").forEach(m => m.classList.remove("show"));
    });
}

// --- INIT ---
function init() {
    const listContainer = document.querySelector(".blog-list-container");
    const indexContainer = document.getElementById("index-blog-container");
    const isPostPage = document.querySelector(".article-body");

    if (listContainer) {
        renderBlogList(listContainer);
        initBlogFilters(listContainer);
    } else if (indexContainer) {
        renderBlogList(indexContainer, blogData.slice(0, 2));
    } else if (isPostPage) {
        loadBlogPost();
    }
}

init();