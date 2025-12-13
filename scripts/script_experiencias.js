// DATOS: Base de datos de tus experiencias
const experiencesData = [
    // --- NUEVAS CIUDADES DEL HTML (IDs 4+) ---
    // Nota: He añadido datos genéricos (precio, itinerario, autor) para que funcione la web.
    
    // EUROPA
    {
        id: 4,
        titulo: "Escapada Imperial a Viena",
        descripcionCorto: "Música clásica, palacios y cultura de café",
        ubicacion: "Viena, Austria",
        duracion: "4 días / 3 noches",
        grupo: "Grupos de 10",
        precio: 550,
        imagen: "https://images.unsplash.com/photo-1731223832507-ebe5373129e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmllbmElMkMlMjBhdXRyaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 4.7,
        resenas: 45,
        autor: "Pack&Go Europa",
        fechaPub: "20/08/2025",
        descripcionLarga: "Ciudad imperial con museos y música clásica a cada paso. El Palacio de Schönbrunn y la Ringstrasse condensan el barroco y el historicismo, mientras cafés como Demel mantienen la tradición pastelera. Ideal para caminar entre parques y teatros de ópera.",
        itinerario: [
            { dia: 1, titulo: "Llegada Histórica", desc: "Paseo por la Ringstrasse y primera porción de tarta Sacher." },
            { dia: 2, titulo: "Palacios Imperiales", desc: "Visita guiada al Palacio de Schönbrunn y sus jardines." },
            { dia: 3, titulo: "Música y Arte", desc: "Noche en la Ópera Estatal de Viena." }
        ]
    },
    {
        id: 51,
        titulo: "Melbourne Cultural",
        descripcionCorto: "Café, arte urbano y cultura",
        ubicacion: "Melbourne, Australia",
        duracion: "4 días / 3 noches",
        grupo: "Urbano",
        precio: 780,
        imagen: "images/melbourne.jpg",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 4.8,
        resenas: 112,
        autor: "Pack&Go Oceanía",
        fechaPub: "15/01/2026",
        descripcionLarga: "Considerada la capital cultural de Australia. Piérdete en sus famosos 'laneways' llenos de grafitis artísticos, disfruta del mejor café del mundo y recorre la arquitectura victoriana mezclada con rascacielos modernos.",
        itinerario: [
            { dia: 1, titulo: "Laneways", desc: "Tour de arte urbano en Hosier Lane." },
            { dia: 2, titulo: "Great Ocean Road", desc: "Excursión a los 12 Apóstoles." },
            { dia: 3, titulo: "Café Culture", desc: "Cata de cafés en Fitzroy." }
        ]
    },
    {
        id: 52,
        titulo: "Buceo en la Gran Barrera",
        descripcionCorto: "Maravilla natural submarina",
        ubicacion: "Cairns, Australia",
        duracion: "5 días / 4 noches",
        grupo: "Aventura",
        precio: 1250,
        imagen: "images/cairns_australia.jpg",
        dificultad: "Media",
        categoria: "Naturaleza",
        rating: 4.9,
        resenas: 85,
        autor: "Pack&Go Oceanía",
        fechaPub: "18/01/2026",
        descripcionLarga: "Sumérgete en el sistema de arrecifes más grande del mundo. Tortugas, peces payaso y corales de colores infinitos te esperan en esta aventura acuática inolvidable.",
        itinerario: [
            { dia: 1, titulo: "Llegada a Cairns", desc: "Preparación de equipo y briefing." },
            { dia: 2, titulo: "Arrecife Exterior", desc: "Día completo de buceo o snorkel." },
            { dia: 3, titulo: "Selva Daintree", desc: "Visita al bosque tropical más antiguo." }
        ]
    },
    {
        id: 53,
        titulo: "Relax en Fiji",
        descripcionCorto: "Aguas turquesas y palmeras",
        ubicacion: "Nadi, Fiji",
        duracion: "6 días / 5 noches",
        grupo: "Relax",
        precio: 950,
        imagen: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Playa",
        rating: 4.7,
        resenas: 60,
        autor: "Pack&Go Pacífico",
        fechaPub: "20/01/2026",
        descripcionLarga: "Desconecta del mundo en el corazón del Pacífico Sur. Fiji te recibe con su famosa hospitalidad 'Bula', playas de arena blanca inmaculada y aguas cristalinas perfectas para no hacer nada.",
        itinerario: [
            { dia: 1, titulo: "Bienvenida Bula", desc: "Ceremonia Kava tradicional." },
            { dia: 2, titulo: "Island Hopping", desc: "Visita a islas desiertas cercanas." },
            { dia: 3, titulo: "Snorkel", desc: "Nado en arrecifes de coral blando." }
        ]
    },
    {
        id: 54,
        titulo: "Hobbiton y Cultura Maorí",
        descripcionCorto: "Tierra Media y géiseres",
        ubicacion: "Rotorua, Nueva Zelanda",
        duracion: "4 días / 3 noches",
        grupo: "Cultural",
        precio: 890,
        imagen: "images/nueva_zelanda.jpg",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 4.9,
        resenas: 200,
        autor: "Pack&Go Oceanía",
        fechaPub: "22/01/2026",
        descripcionLarga: "Adéntrate en la Comarca visitando el set de rodaje de El Señor de los Anillos y descubre la fuerza de la tierra en Rotorua con sus géiseres y la rica cultura Maorí.",
        itinerario: [
            { dia: 1, titulo: "Hobbiton", desc: "Tour por el set de la película." },
            { dia: 2, titulo: "Te Puia", desc: "Géiseres y cultura Maorí." },
            { dia: 3, titulo: "Hangi", desc: "Cena tradicional cocinada bajo tierra." }
        ]
    },
    {
        id: 5,
        titulo: "Brujas de Cuento",
        descripcionCorto: "Canales medievales y chocolate belga",
        ubicacion: "Brujas, Bélgica",
        duracion: "3 días / 2 noches",
        grupo: "Parejas",
        precio: 420,
        imagen: "https://plus.unsplash.com/premium_photo-1661963659103-9602b3811297?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        dificultad: "Baja",
        categoria: "Romántico",
        rating: 4.8,
        resenas: 32,
        autor: "Pack&Go Europa",
        fechaPub: "22/08/2025",
        descripcionLarga: "Centro medieval perfectamente conservado, canales bordeados de árboles y plazas adoquinadas como el Markt. Campanarios, casas gremiales y chocolaterías crean un ambiente de cuento que invita a perderse sin prisa.",
        itinerario: [
            { dia: 1, titulo: "Paseo en Bote", desc: "Recorrido por los canales principales." },
            { dia: 2, titulo: "Torre Belfort", desc: "Subida al campanario y cata de chocolates." }
        ]
    },
    {
        id: 6,
        titulo: "Diseño en Copenhague",
        descripcionCorto: "Tradición nórdica y vanguardia",
        ubicacion: "Copenhague, Dinamarca",
        duracion: "4 días / 3 noches",
        grupo: "Grupos Pequeños",
        precio: 780,
        imagen: "https://plus.unsplash.com/premium_photo-1691414363231-836e2e1bf0ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29wZW5oYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Urbano",
        rating: 4.6,
        resenas: 28,
        autor: "Pack&Go Norte",
        fechaPub: "25/08/2025",
        descripcionLarga: "Equilibrio entre diseño contemporáneo y tradición nórdica. Nyhavn, Tívoli y barrios ciclistas muestran una ciudad humana y acogedora; gastronomía de vanguardia y respeto por el espacio público.",
        itinerario: [{ dia: 1, titulo: "Nyhavn", desc: "Cena en el puerto antiguo." }, { dia: 2, titulo: "Jardines Tívoli", desc: "Día de diversión en el parque de atracciones más antiguo." }]
    },
    {
        id: 7,
        titulo: "Encanto de Liubliana",
        descripcionCorto: "La joya escondida de Eslovenia",
        ubicacion: "Liubliana, Eslovenia",
        duracion: "3 días / 2 noches",
        grupo: "Grupos de 8",
        precio: 350,
        imagen: "https://images.unsplash.com/photo-1611576191056-3e6696029388?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGl1YmxpYW5hfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 4.5,
        resenas: 15,
        autor: "Pack&Go Europa",
        fechaPub: "26/08/2025",
        descripcionLarga: "Capital pequeña y escénica, con casco peatonal, cafés junto al río y el castillo en lo alto. Base ideal para excursiones al lago Bled y los Alpes Julianos.",
        itinerario: [{ dia: 1, titulo: "Castillo", desc: "Subida en funicular al castillo." }, { dia: 2, titulo: "Lago Bled", desc: "Excursión de día completo al lago vecino." }]
    },
    {
        id: 8,
        titulo: "Barcelona Modernista",
        descripcionCorto: "Gaudí, playa y tapas",
        ubicacion: "Barcelona, España",
        duracion: "5 días / 4 noches",
        grupo: "Grupos de 12",
        precio: 600,
        imagen: "https://images.unsplash.com/photo-1630219694734-fe47ab76b15e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFyY2Vsb25hfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Urbano",
        rating: 4.9,
        resenas: 210,
        autor: "Pack&Go España",
        fechaPub: "10/09/2025",
        descripcionLarga: "Modernismo de Gaudí, mar y montaña en un mismo plano. La Sagrada Familia, Park Güell y la vida de barrio conviven con mercados y museos; paseos desde Montjuïc a las playas.",
        itinerario: [{ dia: 1, titulo: "Sagrada Familia", desc: "Visita interior a la obra maestra." }, { dia: 2, titulo: "Barrio Gótico", desc: "Tour a pie por el casco antiguo." }, { dia: 3, titulo: "Park Güell", desc: "Atardecer con vistas a la ciudad." }]
    },
    {
        id: 9,
        titulo: "Sevilla Tiene un Color Especial",
        descripcionCorto: "Flamenco, Alcázar y tradición",
        ubicacion: "Sevilla, España",
        duracion: "3 días / 2 noches",
        grupo: "Grupos de 10",
        precio: 380,
        imagen: "https://images.unsplash.com/photo-1559564477-6e8582270002?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2V2aWxsYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 4.8,
        resenas: 98,
        autor: "Pack&Go España",
        fechaPub: "12/09/2025",
        descripcionLarga: "Casco histórico monumental, patios y azulejos. El Alcázar, la Catedral y el barrio de Santa Cruz se suman a una potente cultura de tapas y al flamenco.",
        itinerario: [{ dia: 1, titulo: "Real Alcázar", desc: "Visita a los palacios árabes." }, { dia: 2, titulo: "Plaza de España", desc: "Paseo en barca y fotos icónicas." }]
    },
    {
        id: 10,
        titulo: "Tallin Medieval",
        descripcionCorto: "Cuento de hadas en el Báltico",
        ubicacion: "Tallin, Estonia",
        duracion: "3 días / 2 noches",
        grupo: "Parejas",
        precio: 320,
        imagen: "https://images.unsplash.com/photo-1709862366377-54b16f3e51f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFsbGlufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 4.4,
        resenas: 12,
        autor: "Pack&Go Europa",
        fechaPub: "15/09/2025",
        descripcionLarga: "Ciudad vieja medieval amurallada, torres y tejados de colores con vistas al Báltico. Invierno frío, pero fotogénico desde Toompea.",
        itinerario: [{ dia: 1, titulo: "Casco Antiguo", desc: "Recorrido por las murallas." }, { dia: 2, titulo: "Vistas Panorámicas", desc: "Mirador de Kohtuotsa." }]
    },
    {
        id: 11,
        titulo: "París Romántico",
        descripcionCorto: "La ciudad de la luz y el amor",
        ubicacion: "París, Francia",
        duracion: "5 días / 4 noches",
        grupo: "Parejas",
        precio: 850,
        imagen: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Romántico",
        rating: 4.9,
        resenas: 350,
        autor: "Pack&Go Europa",
        fechaPub: "20/09/2025",
        descripcionLarga: "Romance urbano: Sena, bulevares y museos icónicos. Barrios con identidad propia y cafés a pie de calle; Notre Dame, Sacré-Coeur y la Torre Eiffel como hitos imprescindibles.",
        itinerario: [{ dia: 1, titulo: "Torre Eiffel", desc: "Picnic en el Campo de Marte." }, { dia: 2, titulo: "Louvre", desc: "Mañana de arte y cultura." }, { dia: 3, titulo: "Montmartre", desc: "Atardecer en la basílica." }]
    },
    {
        id: 12,
        titulo: "Budapest Termal",
        descripcionCorto: "La perla del Danubio",
        ubicacion: "Budapest, Hungría",
        duracion: "4 días / 3 noches",
        grupo: "Grupos de 10",
        precio: 400,
        imagen: "https://images.unsplash.com/photo-1565426873118-a17ed65d74b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QnVkYXBlc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Relax",
        rating: 4.7,
        resenas: 67,
        autor: "Pack&Go Europa",
        fechaPub: "22/09/2025",
        descripcionLarga: "Arquitectura Art Nouveau, baños termales y paseos nocturnos sobre el Danubio. El Parlamento brilla al caer la tarde desde el Puente de las Cadenas.",
        itinerario: [{ dia: 1, titulo: "Parlamento", desc: "Visita a la joya arquitectónica." }, { dia: 2, titulo: "Baños Széchenyi", desc: "Tarde de relax en aguas termales." }]
    },
    {
        id: 13,
        titulo: "Renacimiento en Florencia",
        descripcionCorto: "Arte en cada esquina",
        ubicacion: "Florencia, Italia",
        duracion: "3 días / 2 noches",
        grupo: "Cultural",
        precio: 520,
        imagen: "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxvcmVuY2lhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 4.8,
        resenas: 110,
        autor: "Pack&Go Italia",
        fechaPub: "25/09/2025",
        descripcionLarga: "Cuna del Renacimiento: Duomo, Uffizi y artesanías en el Oltrarno. Una ciudad-museo viva donde cada calle guarda esculturas, palacios y talleres.",
        itinerario: [{ dia: 1, titulo: "Galería Uffizi", desc: "Las mejores obras del renacimiento." }, { dia: 2, titulo: "Ponte Vecchio", desc: "Atardecer sobre el río Arno." }]
    },
    {
        id: 14,
        titulo: "Roma Eterna",
        descripcionCorto: "Historia viva y gastronomía",
        ubicacion: "Roma, Italia",
        duracion: "5 días / 4 noches",
        grupo: "Familia",
        precio: 650,
        imagen: "https://images.unsplash.com/photo-1529154036614-a60975f5c760?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9tYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 4.9,
        resenas: 300,
        autor: "Pack&Go Italia",
        fechaPub: "26/09/2025",
        descripcionLarga: "La “Ciudad Eterna” combina ruinas clásicas, plazas barrocas y vida de barrio. Del Panteón a la Fontana di Trevi, la historia convive con trattorias y terrazas.",
        itinerario: [{ dia: 1, titulo: "Coliseo", desc: "Entrada al anfiteatro romano." }, { dia: 2, titulo: "Vaticano", desc: "Visita a la Basílica de San Pedro." }, { dia: 3, titulo: "Trastevere", desc: "Cena típica romana." }]
    },
    {
        id: 15,
        titulo: "Canales de Venecia",
        descripcionCorto: "La ciudad sobre el agua",
        ubicacion: "Venecia, Italia",
        duracion: "3 días / 2 noches",
        grupo: "Parejas",
        precio: 580,
        imagen: "https://plus.unsplash.com/premium_photo-1661963047742-dabc5a735357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVuZWNpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Romántico",
        rating: 4.7,
        resenas: 180,
        autor: "Pack&Go Italia",
        fechaPub: "27/09/2025",
        descripcionLarga: "Sin coches y con un trazado acuático único. Canales, palacios y puentes conectan islas; desde San Marcos a los barrios más tranquilos, es pura contemplación.",
        itinerario: [{ dia: 1, titulo: "Góndola", desc: "Paseo tradicional por los canales." }, { dia: 2, titulo: "Murano y Burano", desc: "Visita a las islas del vidrio y color." }]
    },
    {
        id: 16,
        titulo: "La Valeta Histórica",
        descripcionCorto: "Barroco y fortalezas",
        ubicacion: "La Valeta, Malta",
        duracion: "4 días / 3 noches",
        grupo: "Amigos",
        precio: 450,
        imagen: "https://images.unsplash.com/photo-1560365337-6f42f70dd874?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGElMjB2YWxldGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 4.5,
        resenas: 40,
        autor: "Pack&Go Europa",
        fechaPub: "01/10/2025",
        descripcionLarga: "Fortificada y barroca, con miradores al Gran Puerto. Palacios, iglesias y museos concentrados en un casco compacto y caminable.",
        itinerario: [{ dia: 1, titulo: "Catedral de San Juan", desc: "Arte barroco impresionante." }, { dia: 2, titulo: "Tres Ciudades", desc: "Tour en barco por el puerto." }]
    },
    {
        id: 17,
        titulo: "Fiordos desde Bergen",
        descripcionCorto: "Naturaleza noruega",
        ubicacion: "Bergen, Noruega",
        duracion: "4 días / 3 noches",
        grupo: "Aventura",
        precio: 900,
        imagen: "https://images.unsplash.com/photo-1643193388440-50fae300e1da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVyZ2VuJTIwbm9ydWVnYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Media",
        categoria: "Naturaleza",
        rating: 4.8,
        resenas: 55,
        autor: "Pack&Go Norte",
        fechaPub: "05/10/2025",
        descripcionLarga: "Casas de madera en Bryggen, puerto vivo y montañas que caen a fiordos. Punto de partida perfecto para rutas escénicas.",
        itinerario: [{ dia: 1, titulo: "Bryggen", desc: "Paseo por el muelle hanseático." }, { dia: 2, titulo: "Fiordos", desc: "Crucero por los fiordos cercanos." }]
    },
    {
        id: 18,
        titulo: "Ámsterdam en Bici",
        descripcionCorto: "Canales y libertad",
        ubicacion: "Ámsterdam, Países Bajos",
        duracion: "3 días / 2 noches",
        grupo: "Jóvenes",
        precio: 480,
        imagen: "https://plus.unsplash.com/premium_photo-1661878122586-2d75a86f3400?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUMzJTgxbXN0ZXJkYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Urbano",
        rating: 4.6,
        resenas: 130,
        autor: "Pack&Go Europa",
        fechaPub: "08/10/2025",
        descripcionLarga: "Canales Patrimonio de la UNESCO, gables estrechos y cultura ciclista. Museos de primer nivel y barrios verdes conectados por puentes.",
        itinerario: [{ dia: 1, titulo: "Ruta en Bici", desc: "Recorrido como un local." }, { dia: 2, titulo: "Museo Van Gogh", desc: "Visita cultural obligada." }]
    },
    {
        id: 19,
        titulo: "Vinos de Oporto",
        descripcionCorto: "Duero y azulejos",
        ubicacion: "Oporto, Portugal",
        duracion: "3 días / 2 noches",
        grupo: "Gastronómico",
        precio: 350,
        imagen: "https://plus.unsplash.com/premium_photo-1677344087971-91eee10dfeb1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3BvcnRvJTIwcG9ydHVnYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Gastronomía",
        rating: 4.8,
        resenas: 88,
        autor: "Pack&Go Europa",
        fechaPub: "10/10/2025",
        descripcionLarga: "Azulejos, puentes sobre el Duero y bodegas de vino de Oporto. Librería Lello y piscinas de Leça como iconos contemporáneos.",
        itinerario: [{ dia: 1, titulo: "Cata de Vinos", desc: "Visita a las bodegas de Vila Nova de Gaia." }, { dia: 2, titulo: "Ribeira", desc: "Cena junto al río." }]
    },
    {
        id: 20,
        titulo: "Londres Cosmopolita",
        descripcionCorto: "Historia y modernidad",
        ubicacion: "Londres, Reino Unido",
        duracion: "5 días / 4 noches",
        grupo: "Todos",
        precio: 750,
        imagen: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZHJlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Urbano",
        rating: 4.8,
        resenas: 400,
        autor: "Pack&Go UK",
        fechaPub: "12/10/2025",
        descripcionLarga: "Historia y vanguardia a orillas del Támesis. Museos gratuitos, parques inmensos y una escena cultural y gastronómica inagotable.",
        itinerario: [{ dia: 1, titulo: "Big Ben y Eye", desc: "Iconos de la ciudad." }, { dia: 2, titulo: "British Museum", desc: "Historia del mundo." }, { dia: 3, titulo: "Camden Town", desc: "Mercados alternativos." }]
    },
    {
        id: 21,
        titulo: "Misterio de Edimburgo",
        descripcionCorto: "Castillos y leyendas",
        ubicacion: "Edimburgo, Reino Unido",
        duracion: "3 días / 2 noches",
        grupo: "Cultural",
        precio: 500,
        imagen: "https://images.unsplash.com/photo-1569668444050-b7bc2bfec0c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWRpbmJ1cmdvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 4.7,
        resenas: 95,
        autor: "Pack&Go UK",
        fechaPub: "14/10/2025",
        descripcionLarga: "Royal Mile, castillo y colinas verdes. La roca volcánica de Arthur’s Seat regala una panorámica excepcional sobre la ciudad de piedra.",
        itinerario: [{ dia: 1, titulo: "Castillo de Edimburgo", desc: "Joyas de la corona escocesa." }, { dia: 2, titulo: "Arthur's Seat", desc: "Caminata con vistas." }]
    },
    {
        id: 22,
        titulo: "Praga de Oro",
        descripcionCorto: "Gótico y romántico",
        ubicacion: "Praga, República Checa",
        duracion: "3 días / 2 noches",
        grupo: "Parejas",
        precio: 380,
        imagen: "https://plus.unsplash.com/premium_photo-1661963067279-2f7bf970c49c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJhZ2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Romántico",
        rating: 4.8,
        resenas: 150,
        autor: "Pack&Go Europa",
        fechaPub: "16/10/2025",
        descripcionLarga: "Cúpulas y torres góticas sobre un casco antiguo fotogénico. Puente de Carlos al amanecer y cafés históricos con música y literatura.",
        itinerario: [{ dia: 1, titulo: "Puente de Carlos", desc: "Amanecer sin gente." }, { dia: 2, titulo: "Castillo de Praga", desc: "El complejo de castillos más grande." }]
    },
    {
        id: 23,
        titulo: "Alpes en Lucerna",
        descripcionCorto: "Lago y montañas",
        ubicacion: "Lucerna, Suiza",
        duracion: "3 días / 2 noches",
        grupo: "Naturaleza",
        precio: 650,
        imagen: "https://images.unsplash.com/photo-1635855296516-837d8b00cae7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8THVjZXJuYSUyMHN1aXphfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Naturaleza",
        rating: 4.9,
        resenas: 40,
        autor: "Pack&Go Suiza",
        fechaPub: "18/10/2025",
        descripcionLarga: "Lago, montes cercanos y el Kapellbrücke como postal. Tejados medievales y aire alpino a pocos minutos de rutas de montaña.",
        itinerario: [{ dia: 1, titulo: "Puente Kapellbrücke", desc: "Icono de madera." }, { dia: 2, titulo: "Monte Pilatus", desc: "Excursión en tren cremallera." }]
    },
    {
        id: 24,
        titulo: "Zúrich Elegante",
        descripcionCorto: "Lujo y lagos",
        ubicacion: "Zúrich, Suiza",
        duracion: "3 días / 2 noches",
        grupo: "Urbano",
        precio: 700,
        imagen: "https://images.unsplash.com/photo-1620563092215-0fbc6b55cfc5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
        dificultad: "Baja",
        categoria: "Urbano",
        rating: 4.6,
        resenas: 35,
        autor: "Pack&Go Suiza",
        fechaPub: "20/10/2025",
        descripcionLarga: "Casco antiguo elegante junto al lago, museos, galerías y vida junto al agua. Veranos vibrantes y eficiencia suiza en cada detalle.",
        itinerario: [{ dia: 1, titulo: "Lago de Zúrich", desc: "Paseo en barco." }, { dia: 2, titulo: "Bahnhofstrasse", desc: "Compras y chocolate." }]
    },
    
    // ASIA
    {
        id: 25,
        titulo: "Beijing Imperial",
        descripcionCorto: "Muralla y Ciudad Prohibida",
        ubicacion: "Beijing, China",
        duracion: "6 días / 5 noches",
        grupo: "Cultural",
        precio: 1100,
        imagen: "https://plus.unsplash.com/premium_photo-1723433351351-0f6cd5d21537?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVpamluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Media",
        categoria: "Cultural",
        rating: 4.7,
        resenas: 80,
        autor: "Pack&Go Asia",
        fechaPub: "01/11/2025",
        descripcionLarga: "Capital imperial con la Ciudad Prohibida, hutongs y avenidas amplias. Puerta a tramos cercanos de la Gran Muralla y a una cocina regional riquísima.",
        itinerario: [{ dia: 1, titulo: "Ciudad Prohibida", desc: "El corazón del imperio." }, { dia: 2, titulo: "Gran Muralla", desc: "Caminata por una maravilla mundial." }]
    },
    {
        id: 26,
        titulo: "Hong Kong Vertical",
        descripcionCorto: "Rascacielos y naturaleza",
        ubicacion: "Hong Kong, China",
        duracion: "4 días / 3 noches",
        grupo: "Urbano",
        precio: 950,
        imagen: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9uZyUyMGtvbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Urbano",
        rating: 4.8,
        resenas: 70,
        autor: "Pack&Go Asia",
        fechaPub: "03/11/2025",
        descripcionLarga: "Horizonte denso en torno a un puerto lleno de ferris. Montañas, islas y reservas naturales a minutos del centro financiero.",
        itinerario: [{ dia: 1, titulo: "Victoria Peak", desc: "Vistas panorámicas." }, { dia: 2, titulo: "Star Ferry", desc: "Cruce de la bahía." }]
    },
    {
        id: 27,
        titulo: "Seúl Vibrante",
        descripcionCorto: "Tradición y K-Pop",
        ubicacion: "Seúl, Corea del Sur",
        duracion: "5 días / 4 noches",
        grupo: "Jóvenes",
        precio: 1050,
        imagen: "https://plus.unsplash.com/premium_photo-1661936414165-3039a8d906f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2V1bHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Urbano",
        rating: 4.9,
        resenas: 120,
        autor: "Pack&Go Asia",
        fechaPub: "05/11/2025",
        descripcionLarga: "Rascacielos y palacios, mercados nocturnos y una red de metro impecable. Distritos como Bukchon y Myeongdong muestran tradición y moda.",
        itinerario: [{ dia: 1, titulo: "Palacio Gyeongbokgung", desc: "Historia real." }, { dia: 2, titulo: "Myeongdong", desc: "Compras y comida callejera." }]
    },
    {
        id: 28,
        titulo: "Jaipur la Rosa",
        descripcionCorto: "Palacios del Rajastán",
        ubicacion: "Jaipur, India",
        duracion: "4 días / 3 noches",
        grupo: "Cultural",
        precio: 550,
        imagen: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SmFpcHVyJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Media",
        categoria: "Cultural",
        rating: 4.6,
        resenas: 90,
        autor: "Pack&Go Asia",
        fechaPub: "08/11/2025",
        descripcionLarga: "La “Ciudad Rosa”: Hawa Mahal, fuertes y bazares color salmón. Artesanías, joyería y gastronomía del Rajastán en palacios y calles.",
        itinerario: [{ dia: 1, titulo: "Hawa Mahal", desc: "El palacio de los vientos." }, { dia: 2, titulo: "Fuerte Amber", desc: "Ascenso en jeep y vistas." }]
    },
    {
        id: 29,
        titulo: "Kioto Zen",
        descripcionCorto: "Templos y Geishas",
        ubicacion: "Kioto, Japón",
        duracion: "5 días / 4 noches",
        grupo: "Cultural",
        precio: 1300,
        imagen: "images/kioto.jpg",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 5.0,
        resenas: 200,
        autor: "Pack&Go Asia",
        fechaPub: "10/11/2025",
        descripcionLarga: "Templos, santuarios y jardines clásicos. Hanami en primavera, rutas arboladas y posibilidad de cruzarse con geishas en Gion.",
        itinerario: [{ dia: 1, titulo: "Fushimi Inari", desc: "Caminata bajo los torii." }, { dia: 2, titulo: "Bosque de Bambú", desc: "Paseo en Arashiyama." }]
    },
    {
        id: 30,
        titulo: "Espiritual Luang Prabang",
        descripcionCorto: "Monjes y cascadas",
        ubicacion: "Luang Prabang, Laos",
        duracion: "4 días / 3 noches",
        grupo: "Relax",
        precio: 450,
        imagen: "https://plus.unsplash.com/premium_photo-1661882477461-20d16af70819?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8THVhbmclMjBQcmFiYW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Espiritual",
        rating: 4.8,
        resenas: 40,
        autor: "Pack&Go Asia",
        fechaPub: "12/11/2025",
        descripcionLarga: "Patrimonio UNESCO junto a la confluencia de ríos. Procesiones de monjes al amanecer, cascadas cercanas y arquitectura colonial-budista.",
        itinerario: [{ dia: 1, titulo: "Ofrenda de Almas", desc: "Ritual al amanecer." }, { dia: 2, titulo: "Cascadas Kuang Si", desc: "Baño en aguas turquesas." }]
    },
    {
        id: 31,
        titulo: "Beirut Histórica",
        descripcionCorto: "El París de Oriente Medio",
        ubicacion: "Beirut, Líbano",
        duracion: "4 días / 3 noches",
        grupo: "Cultural",
        precio: 600,
        imagen: "https://plus.unsplash.com/premium_photo-1661963342411-11bc8489a1fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVpcnV0JTIwbGliYW5vfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 4.5,
        resenas: 30,
        autor: "Pack&Go Oriente",
        fechaPub: "15/11/2025",
        descripcionLarga: "Playas, clubes y azoteas frente a mezquitas y zocos históricos. Gastronomía y vida nocturna con aire mediterráneo y levantino.",
        itinerario: [{ dia: 1, titulo: "Rocas de las Palomas", desc: "Atardecer en la costa." }, { dia: 2, titulo: "Zocos", desc: "Compras tradicionales." }]
    },
    {
        id: 32,
        titulo: "Mascate Mística",
        descripcionCorto: "Tesoros de Omán",
        ubicacion: "Mascate, Omán",
        duracion: "5 días / 4 noches",
        grupo: "Aventura",
        precio: 850,
        imagen: "https://images.unsplash.com/photo-1725600462847-0317804cc466?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TWFzY2F0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Media",
        categoria: "Cultural",
        rating: 4.7,
        resenas: 25,
        autor: "Pack&Go Oriente",
        fechaPub: "18/11/2025",
        descripcionLarga: "Bahías y montañas enmarcando mezquitas, zocos y fuertes portugueses. Paseos costeros y arquitectura blanca junto al Golfo de Omán.",
        itinerario: [{ dia: 1, titulo: "Gran Mezquita", desc: "Arquitectura impresionante." }, { dia: 2, titulo: "Zoco de Mutrah", desc: "Aromas de incienso." }]
    },
    {
        id: 33,
        titulo: "Futuro en Doha",
        descripcionCorto: "Lujo en el desierto",
        ubicacion: "Doha, Qatar",
        duracion: "3 días / 2 noches",
        grupo: "Lujo",
        precio: 900,
        imagen: "https://images.unsplash.com/photo-1539475314840-751cecc1dacd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RG9oYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Lujo",
        rating: 4.6,
        resenas: 45,
        autor: "Pack&Go Oriente",
        fechaPub: "20/11/2025",
        descripcionLarga: "Corniche con skyline futurista, Souq Waqif y el Museo de Arte Islámico de I. M. Pei. Mezcla de tradición y nuevas áreas culturales.",
        itinerario: [{ dia: 1, titulo: "Museo Islámico", desc: "Arte y vistas." }, { dia: 2, titulo: "Souq Waqif", desc: "Cena tradicional." }]
    },
    {
        id: 34,
        titulo: "Chiang Mai Tailandés",
        descripcionCorto: "Templos y naturaleza",
        ubicacion: "Chiang Mai, Tailandia",
        duracion: "5 días / 4 noches",
        grupo: "Aventura",
        precio: 600,
        imagen: "https://plus.unsplash.com/premium_photo-1661929242720-140374d97c94?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hpYW5nJTIwTWFpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 4.8,
        resenas: 110,
        autor: "Pack&Go Asia",
        fechaPub: "22/11/2025",
        descripcionLarga: "Templos en la ladera, cafés y mercados creativos. Punto de partida para naturaleza del norte y experiencias culinarias intensas.",
        itinerario: [{ dia: 1, titulo: "Doi Suthep", desc: "Templo en la montaña." }, { dia: 2, titulo: "Santuario de Elefantes", desc: "Turismo responsable." }]
    },
    {
        id: 35,
        titulo: "Caos y Calma en Hanoi",
        descripcionCorto: "Esencia de Vietnam",
        ubicacion: "Hanoi, Vietnam",
        duracion: "4 días / 3 noches",
        grupo: "Aventura",
        precio: 500,
        imagen: "https://plus.unsplash.com/premium_photo-1691960159290-6f4ace6e6c4c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGFub2l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Media",
        categoria: "Cultural",
        rating: 4.7,
        resenas: 85,
        autor: "Pack&Go Asia",
        fechaPub: "24/11/2025",
        descripcionLarga: "Lagos, templos y barrio francés con aire romántico. Calles angostas con cafés tradicionales y mercados vibrantes.",
        itinerario: [{ dia: 1, titulo: "Barrio Antiguo", desc: "Comida callejera y caos." }, { dia: 2, titulo: "Bahía de Ha Long", desc: "Excursión al patrimonio natural." }]
    },
    {
        id: 36,
        titulo: "Singapur Futura",
        descripcionCorto: "Jardines y rascacielos",
        ubicacion: "Singapur, Singapur",
        duracion: "3 días / 2 noches",
        grupo: "Lujo",
        precio: 850,
        imagen: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2Fwb3JlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Urbano",
        rating: 4.9,
        resenas: 140,
        autor: "Pack&Go Asia",
        fechaPub: "26/11/2025",
        descripcionLarga: "Ciudad-jardín con selva urbana, Jardín Botánico y Gardens by the Bay. Templos, casas patrimoniales y una logística impecable para moverse.",
        itinerario: [{ dia: 1, titulo: "Gardens by the Bay", desc: "Superárboles futuristas." }, { dia: 2, titulo: "Marina Bay Sands", desc: "Vistas desde las alturas." }]
    },

    // ÁFRICA
    {
        id: 37,
        titulo: "Chefchaouen Azul",
        descripcionCorto: "La perla azul de Marruecos",
        ubicacion: "Chefchaouen, Marruecos",
        duracion: "3 días / 2 noches",
        grupo: "Cultural",
        precio: 300,
        imagen: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 4.7,
        resenas: 60,
        autor: "Pack&Go África",
        fechaPub: "01/12/2025",
        descripcionLarga: "Medina azul entre montañas del Rif. Callejuelas pintadas, puertas artesanales y miradores cercanos para ver el conjunto desde arriba.",
        itinerario: [{ dia: 1, titulo: "Medina", desc: "Perderse en el azul." }, { dia: 2, titulo: "Cascadas de Akchour", desc: "Naturaleza cercana." }]
    },
    {
        id: 38,
        titulo: "Ciudad del Cabo y Pingüinos",
        descripcionCorto: "Montaña y mar",
        ubicacion: "Ciudad del Cabo, Sudáfrica",
        duracion: "5 días / 4 noches",
        grupo: "Aventura",
        precio: 950,
        imagen: "https://plus.unsplash.com/premium_photo-1697730061063-ad499e343f26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2l1ZGFkJTIwZGVsJTIwQ2Fib3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Media",
        categoria: "Naturaleza",
        rating: 4.8,
        resenas: 75,
        autor: "Pack&Go África",
        fechaPub: "05/12/2025",
        descripcionLarga: "Table Mountain, playas con pingüinos y barrios coloridos como Bo-Kaap. Jardines, viñedos cercanos y rutas panorámicas costeras.",
        itinerario: [{ dia: 1, titulo: "Table Mountain", desc: "Vistas desde la cima." }, { dia: 2, titulo: "Boulders Beach", desc: "Nadar con pingüinos." }]
    },
    {
        id: 56,
        titulo: "Gran Migración Safari",
        descripcionCorto: "Naturaleza salvaje en estado puro",
        ubicacion: "Serengeti, Tanzania",
        duracion: "5 días / 4 noches",
        grupo: "Aventura",
        precio: 1450,
        imagen: "images/zebras.jpg",
        dificultad: "Media",
        categoria: "Naturaleza",
        rating: 5.0,
        resenas: 180,
        autor: "Pack&Go África",
        fechaPub: "02/02/2026",
        descripcionLarga: "Sé testigo del espectáculo natural más grande del planeta. Recorre las llanuras infinitas del Serengeti en busca de los 'Cinco Grandes' y observa a miles de ñus y cebras cruzar el río Mara.",
        itinerario: [
            { dia: 1, titulo: "Arusha", desc: "Llegada y preparación para el safari." },
            { dia: 2, titulo: "Game Drive", desc: "Día completo de avistamiento de leones y elefantes." },
            { dia: 3, titulo: "Cráter del Ngorongoro", desc: "Safari en el interior de un volcán extinto." }
        ]
    },
    {
        id: 57,
        titulo: "Faraones y Nilo",
        descripcionCorto: "Historia milenaria",
        ubicacion: "El Cairo y Luxor, Egipto",
        duracion: "6 días / 5 noches",
        grupo: "Cultural",
        precio: 850,
        imagen: "images/el_cairo.jpg",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 4.8,
        resenas: 310,
        autor: "Pack&Go África",
        fechaPub: "05/02/2026",
        descripcionLarga: "Un viaje en el tiempo al antiguo Egipto. Desde las imponentes Pirámides de Giza hasta los templos de Luxor y Karnak, navegando por el río que dio vida a una civilización.",
        itinerario: [
            { dia: 1, titulo: "Giza", desc: "Las Grandes Pirámides y la Esfinge." },
            { dia: 2, titulo: "Museo Egipcio", desc: "Tesoros de Tutankamón." },
            { dia: 3, titulo: "Valle de los Reyes", desc: "Entrada a las tumbas reales en Luxor." }
        ]
    },
    {
        id: 58,
        titulo: "Cataratas Victoria",
        descripcionCorto: "El humo que truena",
        ubicacion: "Livingstone, Zambia",
        duracion: "3 días / 2 noches",
        grupo: "Aventura",
        precio: 450,
        imagen: "https://images.unsplash.com/photo-1603201236596-eb1a63eb0ede?auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Naturaleza",
        rating: 4.9,
        resenas: 95,
        autor: "Pack&Go África",
        fechaPub: "08/02/2026",
        descripcionLarga: "Siente la fuerza de una de las maravillas naturales del mundo. Las cataratas Victoria ofrecen vistas espectaculares, arcoíris constantes y actividades llenas de adrenalina.",
        itinerario: [
            { dia: 1, titulo: "Caminata por el borde", desc: "Vistas panorámicas de la caída de agua." },
            { dia: 2, titulo: "Piscina del Diablo", desc: "Baño al borde del abismo (en temporada)." }
        ]
    },
    {
        id: 60,
        titulo: "Desierto de Namibia",
        descripcionCorto: "Dunas rojas y árboles muertos",
        ubicacion: "Sossusvlei, Namibia",
        duracion: "6 días / 5 noches",
        grupo: "Aventura",
        precio: 1100,
        imagen: "images/namibia.jpg",
        dificultad: "Media",
        categoria: "Naturaleza",
        rating: 4.9,
        resenas: 60,
        autor: "Pack&Go África",
        fechaPub: "12/02/2026",
        descripcionLarga: "Paisajes que parecen de otro planeta. Escala la duna Big Daddy, camina entre las acacias petrificadas de Deadvlei y contempla uno de los cielos estrellados más limpios del mundo.",
        itinerario: [
            { dia: 1, titulo: "Duna 45", desc: "Amanecer sobre el desierto rojo." },
            { dia: 2, titulo: "Deadvlei", desc: "Fotografía surrealista entre árboles negros." },
            { dia: 3, titulo: "Cañón de Sesriem", desc: "Caminata geológica." }
        ]
    },

    // OCEANÍA
    {
        id: 39,
        titulo: "Sídney Icónica",
        descripcionCorto: "Ópera y surf",
        ubicacion: "Sídney, Australia",
        duracion: "5 días / 4 noches",
        grupo: "Aventura",
        precio: 1400,
        imagen: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UyVDMyVBRGRuZXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Urbano",
        rating: 4.9,
        resenas: 95,
        autor: "Pack&Go Oceanía",
        fechaPub: "10/12/2025",
        descripcionLarga: "Ópera icónica, bahía navegable y playas urbanas como Bondi. Ferris cotidianos y parques frente al agua.",
        itinerario: [{ dia: 1, titulo: "Opera House", desc: "Foto obligada." }, { dia: 2, titulo: "Bondi Beach", desc: "Clases de surf." }]
    },
    {
        id: 40,
        titulo: "Adrenalina en Queenstown",
        descripcionCorto: "Aventura extrema",
        ubicacion: "Queenstown, Nueva Zelanda",
        duracion: "4 días / 3 noches",
        grupo: "Aventura",
        precio: 1300,
        imagen: "https://images.unsplash.com/photo-1600466403153-50193d187dde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UXVlZW5zdG93bnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Alta",
        categoria: "Aventura",
        rating: 4.8,
        resenas: 50,
        autor: "Pack&Go Oceanía",
        fechaPub: "12/12/2025",
        descripcionLarga: "Capital de la adrenalina entre lago y montañas. Miradores naturales, aventuras y paisajes cinematográficos.",
        itinerario: [{ dia: 1, titulo: "Bungee Jumping", desc: "Salto al vacío." }, { dia: 2, titulo: "Milford Sound", desc: "Fiordos impresionantes." }]
    },

    // AMÉRICA DEL NORTE
    {
        id: 41,
        titulo: "Quebec Europeo",
        descripcionCorto: "Francia en América",
        ubicacion: "Ciudad de Quebec, Canadá",
        duracion: "4 días / 3 noches",
        grupo: "Cultural",
        precio: 800,
        imagen: "https://images.unsplash.com/photo-1576771304215-6d4d30f7bb63?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENpdWRhZCUyMGRlJTIwUXVlYmVjfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 4.7,
        resenas: 40,
        autor: "Pack&Go Norte",
        fechaPub: "15/12/2025",
        descripcionLarga: "Casco amurallado en altura con vistas al San Lorenzo. Ambiente europeo, tejados empinados y puestas de sol rosadas.",
        itinerario: [{ dia: 1, titulo: "Château Frontenac", desc: "El hotel más fotografiado." }, { dia: 2, titulo: "Petit Champlain", desc: "Calles de cuento." }]
    },
    {
        id: 42,
        titulo: "Ritmo de La Habana",
        descripcionCorto: "Salsa y coches clásicos",
        ubicacion: "La Habana, Cuba",
        duracion: "5 días / 4 noches",
        grupo: "Cultural",
        precio: 700,
        imagen: "https://images.unsplash.com/photo-1570299437488-d430e1e677c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGElMjBIYWJhbmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 4.6,
        resenas: 80,
        autor: "Pack&Go Caribe",
        fechaPub: "18/12/2025",
        descripcionLarga: "Arquitectura colonial de tonos pastel, música en cada esquina y paseos marítimos. La Habana Vieja y el Malecón marcan el ritmo.",
        itinerario: [{ dia: 1, titulo: "Habana Vieja", desc: "Paseo en coche clásico." }, { dia: 2, titulo: "Malecón", desc: "Atardecer junto al mar." }]
    },
    {
        id: 43,
        titulo: "Nueva York, Nueva York",
        descripcionCorto: "La capital del mundo",
        ubicacion: "Nueva York, Estados Unidos",
        duracion: "6 días / 5 noches",
        grupo: "Urbano",
        precio: 1200,
        imagen: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TnVldmElMjBZb3JrfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Urbano",
        rating: 4.9,
        resenas: 500,
        autor: "Pack&Go USA",
        fechaPub: "20/12/2025",
        descripcionLarga: "Arquitectura icónica, parques como Central Park y una escena artística incomparable. Energía urbana que no se apaga.",
        itinerario: [{ dia: 1, titulo: "Times Square", desc: "Luces de neón." }, { dia: 2, titulo: "Central Park", desc: "Pulmón verde." }, { dia: 3, titulo: "Estatua de la Libertad", desc: "Ferry al icono." }]
    },
    {
        id: 44,
        titulo: "San Francisco Golden",
        descripcionCorto: "Puente y tranvías",
        ubicacion: "San Francisco, Estados Unidos",
        duracion: "4 días / 3 noches",
        grupo: "Urbano",
        precio: 1100,
        imagen: "https://images.unsplash.com/photo-1719858403364-83f7442a197e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2FuJTIwRnJhbmNpc2NvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Urbano",
        rating: 4.7,
        resenas: 110,
        autor: "Pack&Go USA",
        fechaPub: "22/12/2025",
        descripcionLarga: "Puente Golden Gate, colinas y casas victorianas. Museos de talla mundial y barrios con carácter propio.",
        itinerario: [{ dia: 1, titulo: "Golden Gate", desc: "Cruce en bicicleta." }, { dia: 2, titulo: "Alcatraz", desc: "Visita a la prisión." }]
    },
    {
        id: 45,
        titulo: "San Miguel Colonial",
        descripcionCorto: "Arte y color en México",
        ubicacion: "San Miguel de Allende, México",
        duracion: "3 días / 2 noches",
        grupo: "Cultural",
        precio: 450,
        imagen: "https://plus.unsplash.com/premium_photo-1697729800872-866107ce82c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2FuJTIwTWlndWVsJTIwZGUlMjBBbGxlbmRlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 4.8,
        resenas: 65,
        autor: "Pack&Go México",
        fechaPub: "24/12/2025",
        descripcionLarga: "Centro colonial con parroquia neogótica rosada. Calles adoquinadas, patios y arte en galerías y talleres.",
        itinerario: [{ dia: 1, titulo: "Parroquia", desc: "Icono rosa." }, { dia: 2, titulo: "Mercado de Artesanías", desc: "Color local." }]
    },

    // AMÉRICA DEL SUR
    {
        id: 46,
        titulo: "Buenos Aires Porteño",
        descripcionCorto: "Tango y asado",
        ubicacion: "Buenos Aires, Argentina",
        duracion: "4 días / 3 noches",
        grupo: "Urbano",
        precio: 600,
        imagen: "https://plus.unsplash.com/premium_photo-1697729901052-fe8900e24993?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnVlbm9zJTIwQWlyZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Urbano",
        rating: 4.7,
        resenas: 90,
        autor: "Pack&Go Sur",
        fechaPub: "01/01/2026",
        descripcionLarga: "Barrios con identidad (Recoleta, San Telmo, La Boca), arquitectura variada y vida cultural intensa. Tango, parrillas y librerías en edificios emblemáticos.",
        itinerario: [{ dia: 1, titulo: "Caminito", desc: "Color en La Boca." }, { dia: 2, titulo: "San Telmo", desc: "Feria de antigüedades." }]
    },
    {
        id: 47,
        titulo: "Río de Janeiro Samba",
        descripcionCorto: "Cristo y Copacabana",
        ubicacion: "Río de Janeiro, Brasil",
        duracion: "5 días / 4 noches",
        grupo: "Fiesta",
        precio: 800,
        imagen: "https://plus.unsplash.com/premium_photo-1671211307997-f4f552b0601c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UiVDMyVBRG8lMjBkZSUyMEphbmVpcm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Playa",
        rating: 4.8,
        resenas: 120,
        autor: "Pack&Go Sur",
        fechaPub: "03/01/2026",
        descripcionLarga: "Playas míticas, selva urbana y el Cristo Redentor vigilando bahías y morros. Ritmo de samba en calles y plazas.",
        itinerario: [{ dia: 1, titulo: "Cristo Redentor", desc: "Vistas de la bahía." }, { dia: 2, titulo: "Copacabana", desc: "Día de playa y caipirinhas." }]
    },
    {
        id: 48,
        titulo: "Cartagena Colonial",
        descripcionCorto: "Caribe y murallas",
        ubicacion: "Cartagena, Colombia",
        duracion: "4 días / 3 noches",
        grupo: "Relax",
        precio: 550,
        imagen: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FydGFnZW5hJTIwY29sb21iaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 4.8,
        resenas: 85,
        autor: "Pack&Go Sur",
        fechaPub: "05/01/2026",
        descripcionLarga: "Murallas, plazas y casonas coloniales cubiertas de buganvillas. Getsemaní y Bocagrande muestran sus caras creativa y moderna.",
        itinerario: [{ dia: 1, titulo: "Ciudad Amurallada", desc: "Historia viva." }, { dia: 2, titulo: "Islas del Rosario", desc: "Excursión a playas turquesas." }]
    },
    {
        id: 49,
        titulo: "Quito Andino",
        descripcionCorto: "Historia en los Andes",
        ubicacion: "Quito, Ecuador",
        duracion: "3 días / 2 noches",
        grupo: "Cultural",
        precio: 400,
        imagen: "https://plus.unsplash.com/premium_photo-1697729921570-a7e324d7baac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UXVpdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Media",
        categoria: "Cultural",
        rating: 4.6,
        resenas: 50,
        autor: "Pack&Go Sur",
        fechaPub: "07/01/2026",
        descripcionLarga: "Casco histórico dorado bajo volcanes andinos. Vistas desde la Basílica del Voto Nacional y mercados tradicionales.",
        itinerario: [{ dia: 1, titulo: "Centro Histórico", desc: "Iglesias doradas." }, { dia: 2, titulo: "Teleférico", desc: "Vistas al volcán Pichincha." }]
    },
    {
        id: 50,
        titulo: "Cuzco Imperial",
        descripcionCorto: "Capital de los Incas",
        ubicacion: "Cuzco, Perú",
        duracion: "4 días / 3 noches",
        grupo: "Cultural",
        precio: 500,
        imagen: "https://images.unsplash.com/photo-1609944433409-81bda5323abc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q3V6Y298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        dificultad: "Baja",
        categoria: "Cultural",
        rating: 4.9,
        resenas: 130,
        autor: "Pack&Go Sur",
        fechaPub: "10/01/2026",
        descripcionLarga: "Antigua capital inca con plazas, conventos y calles empedradas. Punto de partida a Machu Picchu y miradores como el Cristo Blanco.",
        itinerario: [{ dia: 1, titulo: "Plaza de Armas", desc: "Corazón de la ciudad." }, { dia: 2, titulo: "Sacsayhuamán", desc: "Ruinas megalíticas cercanas." }]
    },
    {
        id: 61,
        titulo: "Patagonia Salvaje",
        descripcionCorto: "Trekking en el fin del mundo",
        ubicacion: "Torres del Paine, Chile",
        duracion: "5 días / 4 noches",
        grupo: "Aventura",
        precio: 950,
        imagen: "images/torres_de_paine.jpg",
        dificultad: "Alta",
        categoria: "Naturaleza",
        rating: 4.9,
        resenas: 105,
        autor: "Pack&Go Sur",
        fechaPub: "20/02/2026",
        descripcionLarga: "Enfréntate a los vientos del sur y camina entre glaciares, lagos turquesas y las imponentes torres de granito. El Circuito W es una meca para senderistas de todo el mundo.",
        itinerario: [
            { dia: 1, titulo: "Puerto Natales", desc: "Preparación de equipo y traslado." },
            { dia: 2, titulo: "Base Torres", desc: "La caminata más icónica hasta la laguna." },
            { dia: 3, titulo: "Glaciar Grey", desc: "Navegación frente a paredes de hielo azul." }
        ]
    },
    {
        id: 62,
        titulo: "Pura Vida Costa Rica",
        descripcionCorto: "Selva, volcanes y perezosos",
        ubicacion: "Monteverde, Costa Rica",
        duracion: "6 días / 5 noches",
        grupo: "Naturaleza",
        precio: 800,
        imagen: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?auto=format&fit=crop&q=60&w=500",
        dificultad: "Media",
        categoria: "Ecoturismo",
        rating: 4.8,
        resenas: 210,
        autor: "Pack&Go Centro",
        fechaPub: "25/02/2026",
        descripcionLarga: "Sumérgete en el país con mayor biodiversidad por metro cuadrado. Camina por puentes colgantes entre la niebla, báñate en aguas termales volcánicas y busca quetzales y perezosos.",
        itinerario: [
            { dia: 1, titulo: "Bosque Nuboso", desc: "Canopy tour entre las copas de los árboles." },
            { dia: 2, titulo: "Volcán Arenal", desc: "Caminata por lava seca y termas." },
            { dia: 3, titulo: "Manuel Antonio", desc: "Playa paradisíaca y monos capuchinos." }
        ]
    }
];

// --- 1. LÓGICA DE LISTADOS Y DETALLE ---

// Detectar dónde estamos
const experiencesListContainer = document.querySelector(".experiences-grid-list");
const productDetailSection = document.querySelector(".product-details");

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. LÓGICA PARA EXPERIENCIAS (Listado completo)
    const experiencesListContainer = document.querySelector(".experiences-grid-list");
    if (experiencesListContainer && !document.getElementById("list-europa")) {
        renderExperiencesList(experiencesListContainer);
        initExperiencesFilters(experiencesListContainer);
    }
    
    // 2. LÓGICA PARA DESTINOS (Por continentes)
    else if (document.getElementById("list-europa")) {
        initDestinationsPage();
    }
    
    // 3. LÓGICA PARA DETALLE DE COMPRA
    else if (document.querySelector(".product-details")) {
        loadExperienceDetail();
    }

    // 4. NUEVO: LÓGICA PARA EL INDEX (HOME)
    const indexContainer = document.getElementById("index-experiences-container");
    
    if (indexContainer) {
        // 1. Creamos una copia de los datos para no desordenar el original
        // 2. Ordenamos por RATING de mayor a menor (b.rating - a.rating)
        // 3. Cortamos los 3 primeros (.slice(0, 3))
        const mejoresExperiencias = [...experiencesData]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 3);
        
        // Pintamos las tarjetas
        renderExperiencesList(indexContainer, mejoresExperiencias);
    }
});

// --- FUNCIÓN DE RENDERIZADO (Listado) ---
function renderExperiencesList(container, listaDatos = experiencesData) {
    container.innerHTML = ""; 

    if (listaDatos.length === 0) {
        // ... (código de "no resultados" se mantiene igual)
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 50px; color: #666;"><h3>No hay resultados...</h3></div>`;
        return;
    }

    // 1. OBTENER FAVORITOS DEL USUARIO ACTUAL
    const usuario = JSON.parse(localStorage.getItem("usuarioActual"));
    const favoritos = usuario ? (usuario.favoritos || []) : [];

    listaDatos.forEach(exp => {
        // 2. COMPROBAR SI ESTE VIAJE ES FAVORITO
        const esFavorito = favoritos.includes(exp.id);
        const claseActiva = esFavorito ? "active" : "";
        const iconoClase = esFavorito ? "fa-solid" : "fa-regular"; // Solid = relleno, Regular = borde

        const card = document.createElement("a");
        card.href = `compra.html?id=${exp.id}`;
        card.className = "experience-card-item";

        card.innerHTML = `
            <div class="card-image-header">
                <span class="difficulty-badge">${exp.dificultad}</span>
                
                <button class="card-fav-btn ${claseActiva}" onclick="toggleCardFav(event, ${exp.id}, this)">
                    <i class="${iconoClase} fa-heart"></i>
                </button>

                <img src="${exp.imagen}" alt="${exp.titulo}">
            </div>
            <div class="card-body">
                <h3>${exp.titulo}</h3>
                <p class="card-description">${exp.descripcionCorto}</p>
                <div class="card-meta">
                    <span><i class="fa-solid fa-location-dot"></i> ${exp.ubicacion}</span>
                    <span><i class="fa-regular fa-calendar"></i> ${exp.duracion}</span>
                    <span><i class="fa-solid fa-user-group"></i> ${exp.grupo}</span>
                </div>
                <div class="card-footer">
                    <span class="price">$${exp.precio} <small>/ persona</small></span>
                    <span class="btn-reservar">Reservar</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- LÓGICA DE FILTROS ---
function initExperiencesFilters(container) {
    const searchInput = document.getElementById("exp-search-input");
    const categoryBtn = document.getElementById("btn-exp-category");
    const difficultyBtn = document.getElementById("btn-exp-difficulty");
    const sortBtn = document.getElementById("btn-exp-sort");
    const filterContainer = document.querySelector(".filter-buttons");

    // Estados iniciales
    let filtros = { texto: "", categoria: "Todas", dificultad: "Todas", orden: "Defecto" };

    const aplicarFiltros = () => {
        let resultados = experiencesData.filter(exp => {
            const textoMatch = exp.titulo.toLowerCase().includes(filtros.texto) || 
                               exp.ubicacion.toLowerCase().includes(filtros.texto);
            const catMatch = filtros.categoria === "Todas" || exp.categoria === filtros.categoria;
            const difMatch = filtros.dificultad === "Todas" || exp.dificultad === filtros.dificultad;
            return textoMatch && catMatch && difMatch;
        });


        if (filtros.orden === "Precio: Menor a Mayor") {
            resultados.sort((a, b) => a.precio - b.precio);
        } else if (filtros.orden === "Precio: Mayor a Menor") {
            resultados.sort((a, b) => b.precio - a.precio);
        }

        renderExperiencesList(container, resultados);
    };

    // ============================================================
    //  AÑADIR ESTE BLOQUE AQUÍ PARA RECUPERAR LA BÚSQUEDA
    // ============================================================
    const params = new URLSearchParams(window.location.search);
    const busquedaURL = params.get("busqueda");

    if (busquedaURL) {
        // 1. Decodificar el texto (quitar símbolos raros de la URL)
        const textoDecodificado = decodeURIComponent(busquedaURL).toLowerCase();
        
        // 2. Escribirlo en el buscador de la página para que el usuario lo vea
        if (searchInput) searchInput.value = decodeURIComponent(busquedaURL);
        
        // 3. Aplicar el filtro inmediatamente
        filtros.texto = textoDecodificado;
        aplicarFiltros();
    }

    if(searchInput) {
        searchInput.addEventListener("input", (e) => {
            filtros.texto = e.target.value.toLowerCase().trim();
            aplicarFiltros();
        });
    }
    
    // ... (El resto de tu función para crearMenús sigue igual abajo) ...
    // ... Copia aquí el resto de tu función initExperiencesFilters original (crearMenu, event listeners, etc) ...
    
    // Función helper para menús (Ya la tenías, asegúrate de mantenerla dentro)
    const crearMenu = (boton, opciones, tipoFiltro) => {
        // ... (Tu código existente para crear menú) ...
        const menu = document.createElement("div");
        menu.className = "category-dropdown"; 
        
        const opcionTodas = document.createElement("div");
        opcionTodas.className = "category-option";
        opcionTodas.textContent = tipoFiltro === 'categoria' ? "Todas las categorías" : "Todas las dificultades";
        opcionTodas.addEventListener("click", () => {
            filtros[tipoFiltro] = "Todas";
            boton.textContent = opcionTodas.textContent;
            menu.classList.remove("show");
            aplicarFiltros();
        });
        menu.appendChild(opcionTodas);

        opciones.forEach(opcionTxt => {
            const item = document.createElement("div");
            item.className = "category-option";
            item.textContent = opcionTxt;
            item.addEventListener("click", () => {
                filtros[tipoFiltro] = opcionTxt;
                boton.textContent = opcionTxt; 
                menu.classList.remove("show");
                aplicarFiltros();
            });
            menu.appendChild(item);
        });

        filterContainer.appendChild(menu); 
        
        boton.addEventListener("click", (e) => {
            e.stopPropagation();
            document.querySelectorAll(".category-dropdown").forEach(m => { if(m !== menu) m.classList.remove("show"); });
            menu.classList.toggle("show");
            menu.style.top = (boton.offsetTop + boton.offsetHeight + 10) + "px";
            if(boton === difficultyBtn || boton === categoryBtn) menu.style.left = boton.offsetLeft + "px";
        });
    };

    if(categoryBtn) {
        const categoriasUnicas = [...new Set(experiencesData.map(e => e.categoria))].sort();
        crearMenu(categoryBtn, categoriasUnicas, "categoria");
    }

    if(difficultyBtn) {
        const dificultadesUnicas = ["Baja", "Media", "Alta", "Muy Alta"];
        crearMenu(difficultyBtn, dificultadesUnicas, "dificultad");
    }

    if(sortBtn) {
        const menuSort = document.createElement("div");
        menuSort.className = "category-dropdown sort-menu";
        ["Precio: Menor a Mayor", "Precio: Mayor a Menor", "Defecto"].forEach(orden => {
            const item = document.createElement("div");
            item.className = "category-option";
            item.textContent = orden;
            item.addEventListener("click", () => {
                filtros.orden = orden;
                menuSort.classList.remove("show");
                aplicarFiltros();
            });
            menuSort.appendChild(item);
        });
        filterContainer.appendChild(menuSort);
        sortBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            document.querySelectorAll(".category-dropdown").forEach(m => m.classList.remove("show"));
            menuSort.classList.toggle("show");
        });
    }

    document.addEventListener("click", (e) => {
        if (filterContainer && !filterContainer.contains(e.target)) {
            document.querySelectorAll(".category-dropdown").forEach(m => m.classList.remove("show"));
        }
    });
}


// --- FUNCIÓN CLAVE: CARGAR EL DETALLE EN compra.html ---
function loadExperienceDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    // Buscar experiencia por ID
    const exp = experiencesData.find(e => e.id === id);

    if (!exp) {
        document.querySelector("main").innerHTML = "<div class='container' style='padding:150px 20px; text-align:center;'><h1>Experiencia no encontrada</h1><p>Lo sentimos, no pudimos cargar este viaje.</p><a href='experiencias.html' class='btn-black' style='margin-top:20px;'>Volver al listado</a></div>";
        return;
    }

    // 1. Rellenar datos visuales principales (Hero)
    document.getElementById("detail-image").src = exp.imagen;
    document.getElementById("detail-title").textContent = exp.titulo;
    document.getElementById("detail-reviews").textContent = `(${exp.resenas} reseñas)`;
    
    // Iconos
    document.getElementById("detail-location").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${exp.ubicacion}`;
    document.getElementById("detail-duration").innerHTML = `<i class="fa-regular fa-clock"></i> ${exp.duracion}`;
    document.getElementById("detail-group").innerHTML = `<i class="fa-solid fa-user-group"></i> ${exp.grupo}`;
    
    // Tags y Precio
    document.getElementById("detail-category").textContent = exp.categoria;
    document.getElementById("detail-difficulty").textContent = exp.dificultad;
    document.getElementById("detail-price").textContent = `$ ${exp.precio}`;
    
    // Textos
    document.getElementById("detail-short-desc").textContent = exp.descripcionCorto;
    document.getElementById("detail-author").innerHTML = `Publicado por <strong>${exp.autor}</strong>`;
    document.getElementById("detail-date").textContent = exp.fechaPub;
    document.getElementById("detail-long-desc").textContent = exp.descripcionLarga;

    // 2. Renderizar ITINERARIO
    const timelineContainer = document.querySelector(".itinerary-timeline");
    if(timelineContainer) {
        timelineContainer.innerHTML = "";
        if (exp.itinerario && exp.itinerario.length > 0) {
            exp.itinerario.forEach(step => {
                const item = document.createElement("div");
                item.className = "timeline-item";
                item.innerHTML = `
                    <div class="step-number">${step.dia}</div>
                    <div class="timeline-content">
                        <h3>${step.titulo}</h3>
                        <p>${step.desc}</p>
                    </div>
                `;
                timelineContainer.appendChild(item);
            });
        }
    }

    // 3. Renderizar Pestaña INCLUYE (Dinámico)
    // Generamos una lista basada en la categoría para que se vea completo
    const tabIncluye = document.getElementById("tab-incluye");
    if (tabIncluye) {
        tabIncluye.innerHTML = generarListaIncluye(exp.categoria);
    }

    // 4. Renderizar Pestaña EQUIPO (Dinámico)
    const tabEquipo = document.getElementById("tab-equipo");
    if (tabEquipo) {
        tabEquipo.innerHTML = generarListaEquipo(exp.dificultad);
    }

    // 5. Renderizar Pestaña RESEÑAS (Simuladas con datos reales)
    const tabResenas = document.getElementById("tab-resenas");
    if (tabResenas) {
        tabResenas.innerHTML = generarResenas(exp.resenas);
    }

    // 6. Configuración del Botón de Reserva
    let btnReservar = document.getElementById("btn-reservar-dinamico");
    if (!btnReservar) btnReservar = document.querySelector(".price-action-row .btn-black");
    
    if (btnReservar) {
        const nuevoBtn = btnReservar.cloneNode(true);
        btnReservar.parentNode.replaceChild(nuevoBtn, btnReservar);

        nuevoBtn.addEventListener("click", () => {
            if (typeof iniciarProcesoCompra === 'function') {
                iniciarProcesoCompra(exp.titulo, exp.precio, exp.imagen, exp.duracion, exp.ubicacion);
            } else {
                localStorage.setItem('compra_seleccionada', JSON.stringify(exp));
                window.location.href = 'proceso_compra.html';
            }
        });
    }
    // 6.5 LÓGICA DE FAVORITOS (NUEVO)
    const btnFav = document.querySelector('.btn-favorite');
    
    // A. Comprobar si ya es favorito al cargar
    const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
    
    if (usuarioActual && usuarioActual.favoritos && usuarioActual.favoritos.includes(exp.id)) {
        btnFav.classList.add('active');
        btnFav.innerHTML = `<i class="fa-solid fa-heart"></i> Guardado`;
    }

    // B. Evento Click
    btnFav.addEventListener('click', () => {
        // Recuperamos usuario al momento del click
        const usuario = typeof obtenerUsuarioActual === 'function' ? obtenerUsuarioActual() : null;

        // --- CAMBIO AQUÍ ---
        if (!usuario) {
            // En lugar de redirigir, mostramos el modal
            if (typeof mostrarAvisoLogin === 'function') {
                mostrarAvisoLogin(
                    "Inicia sesión para guardar favoritos",
                    "Necesitas identificarte para poder guardar esta experiencia en tu lista de deseos."
                );
            } else {
                // Fallback por si acaso
                alert("Debes iniciar sesión");
                window.location.href = "login.html";
            }
            return; // Detenemos la ejecución aquí
        }
        // -------------------

        // Inicializar array si no existe
        if (!usuario.favoritos) usuario.favoritos = [];

        const index = usuario.favoritos.indexOf(exp.id);

        if (index === -1) {
            // AGREGAR
            usuario.favoritos.push(exp.id);
            btnFav.classList.add('active');
            btnFav.innerHTML = `<i class="fa-solid fa-heart"></i> Guardado`;
            mostrarToast("Añadido a tus favoritos correctamente");
        } else {
            // QUITAR
            usuario.favoritos.splice(index, 1);
            btnFav.classList.remove('active');
            btnFav.innerHTML = `<i class="fa-solid fa-plus"></i> Añadir a favoritos`;
            mostrarToast("Eliminado de favoritos");
        }

        // C. Guardar cambios
        localStorage.setItem("usuarioActual", JSON.stringify(usuario));
        // Si tienes la función de sincronizar global, úsala:
        if (typeof actualizarUsuarioEnListaGlobal === 'function') {
            actualizarUsuarioEnListaGlobal(usuario);
        }
    });

    // 7. Activar Lógica de Pestañas
    initTabs();
    
    // 8. MEJORA DEL BOTÓN "VOLVER" (Historial + Scroll)
    const backLink = document.querySelector('.breadcrumb-bar a');
    
    if (backLink) {
        // Cambiamos el comportamiento al hacer clic
        backLink.addEventListener('click', (e) => {
            // Solo si hay historial para volver (evita romper si abres en pestaña nueva)
            if (window.history.length > 1) {
                e.preventDefault(); // Evita ir al href="experiencias.html" por defecto
                window.history.back(); // Vuelve atrás recuperando el scroll
            }
        });

        // Opcional: Cambiar el texto si venimos de otra sección conocida
        // (Por ejemplo, si vienes del Perfil, que ponga "Volver atrás")
        if (document.referrer.includes("perfil.html")) {
            backLink.innerHTML = '<i class="fa-solid fa-chevron-left"></i> Volver a mi perfil';
        } else if (document.referrer.includes("index.html")) {
            backLink.innerHTML = '<i class="fa-solid fa-chevron-left"></i> Volver al inicio';
        }
    }
}

// --- FUNCIONES AUXILIARES PARA GENERAR CONTENIDO ---

function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-content-panel');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Quitar activo de todos
            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));
            
            // Activar actual
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-tab');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) targetPanel.classList.add('active');
        });
    });
}

function generarListaIncluye(categoria) {
    // Items básicos siempre incluidos
    let items = [
        "Alojamiento seleccionado",
        "Traslados aeropuerto - hotel",
        "Guía local certificado (Español/Inglés)",
        "Seguro de viaje básico",
        "Atención 24/7"
    ];

    // Añadir extras según categoría
    if (categoria === "Aventura") items.push("Equipo de seguridad y técnico", "Entradas a parques nacionales");
    if (categoria === "Cultural") items.push("Entradas a museos y monumentos", "Degustación de comida local");
    if (categoria === "Relax" || categoria === "Playa") items.push("Cóctel de bienvenida", "Clase de yoga o masaje");

    // Convertir a HTML
    let html = `<ul class="check-list">`;
    items.forEach(item => {
        html += `<li><i class="fa-solid fa-check"></i> ${item}</li>`;
    });
    html += `</ul>`;
    return html;
}

function generarListaEquipo(dificultad) {
    let titulo = "Equipaje recomendado";
    let items = ["Mochila cómoda (30-50L)", "Botella de agua reutilizable", "Protector solar y gafas de sol", "Cámara de fotos", "Adaptador de corriente universal"];

    if (dificultad === "Alta" || dificultad === "Media") {
        items.push("Calzado de trekking impermeable", "Ropa térmica por capas", "Chaqueta cortavientos", "Botiquín personal básico");
        titulo = "Equipamiento técnico necesario";
    } else {
        items.push("Ropa ligera y cómoda", "Calzado para caminar", "Bañador y toalla", "Gorra o sombrero");
    }

    let html = `<h4 style="margin-bottom:1rem; font-size:1.1rem;">${titulo}</h4><ul class="equip-list">`;
    items.forEach(item => {
        html += `<li>${item}</li>`;
    });
    html += `</ul>`;
    return html;
}

function generarResenas(cantidad) {
    // Generamos 2 reseñas ficticias bonitas para rellenar
    return `
        <div class="testimonial-box-feature" style="margin-bottom:20px;">
            <div class="user-feature-header">
                <div class="user-feature-icon icon-green"><i class="fa-regular fa-thumbs-up"></i></div>
                <div>
                    <h4>María González</h4>
                    <small>Viajero Verificado • Hace 2 semanas</small>
                </div>
                <i class="fa-solid fa-quote-right quote-right"></i>
            </div>
            <p>"Simplemente espectacular. La organización fue impecable y los lugares que visitamos superaron mis expectativas. Totalmente recomendado."</p>
        </div>

        <div class="testimonial-box-feature">
            <div class="user-feature-header">
                <div class="user-feature-icon icon-blue"><i class="fa-regular fa-star"></i></div>
                <div>
                    <h4>Carlos R.</h4>
                    <small>Viajero Verificado • Hace 1 mes</small>
                </div>
                <i class="fa-solid fa-quote-right quote-right"></i>
            </div>
            <p>"Una experiencia inolvidable. El guía fue muy profesional y el grupo muy divertido. Volveré a viajar con Pack&Go."</p>
        </div>
    `;
}


// --- FUNCIÓN PARA LA PÁGINA DE DESTINOS ---
function initDestinationsPage() {
    const idsEuropa = [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]; 
    const idsAsia   = [2, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]; 
    const idsAfrica = [37, 38, 56, 57, 58, 60];
    const idsOceania = [39, 40, 51, 52, 53, 54];
    const idsAmerica = [3, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 61, 62]; 

    const mapaContinentes = {
        "list-oceania": idsOceania,
        "list-africa": idsAfrica,
        "list-europa": idsEuropa,
        "list-america": idsAmerica,
        "list-asia": idsAsia
    };

    for (const [containerId, ids] of Object.entries(mapaContinentes)) {
        const container = document.getElementById(containerId);
        if (container) {
            const ciudadesContinente = experiencesData.filter(e => ids.includes(e.id));
            renderExperiencesList(container, ciudadesContinente);
        }
    }

    const botones = document.querySelectorAll(".continent-btn");
    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            botones.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const continenteNombre = btn.textContent.trim().toLowerCase()
                .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
            const seccion = document.getElementById(`sec-${continenteNombre}`);
            if (seccion) {
                seccion.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}
// Función para mostrar el mensaje emergente
function mostrarToast(mensaje, tipo = "success") {
    // Crear el elemento si no existe
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.className = "toast-notification";
        document.body.appendChild(toast);
    }

    // Icono según tipo
    const icono = tipo === "error" ? '<i class="fa-solid fa-circle-exclamation" style="color:#ff4d4d"></i>' : '<i class="fa-solid fa-circle-check"></i>';

    toast.innerHTML = `${icono} ${mensaje}`;
    toast.className = "toast-notification show";

    // Ocultar después de 3 segundos
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}

// Función para sincronizar con la lista de todos los usuarios (para que no se pierda al salir)
function actualizarUsuarioEnListaGlobal(usuarioModificado) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const index = usuarios.findIndex(u => u.correo === usuarioModificado.correo);
    
    if (index !== -1) {
        usuarios[index] = usuarioModificado;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
}
// --- FUNCIÓN GLOBAL PARA EL BOTÓN CORAZÓN DE LAS TARJETAS ---
window.toggleCardFav = function(e, idViaje, btn) {
    // 1. Evitar que el click se propague al enlace <a> (para no ir a la página de compra)
    e.preventDefault();
    e.stopPropagation();

    // 2. Comprobar usuario
    let usuario = JSON.parse(localStorage.getItem("usuarioActual"));

    if (!usuario) {
        // Si no está logueado, mostrar aviso
        if (typeof mostrarAvisoLogin === 'function') {
            mostrarAvisoLogin("Inicia sesión", "Debes estar registrado para guardar favoritos.");
        } else {
            alert("Inicia sesión para guardar favoritos");
            window.location.href = "login.html";
        }
        return;
    }

    // 3. Inicializar array si no existe
    if (!usuario.favoritos) usuario.favoritos = [];

    const index = usuario.favoritos.indexOf(idViaje);
    const icono = btn.querySelector("i");

    if (index === -1) {
        // --> AÑADIR A FAVORITOS
        usuario.favoritos.push(idViaje);
        
        // Actualizar visualmente
        btn.classList.add("active");
        icono.className = "fa-solid fa-heart"; // Corazón relleno
        
        // Feedback
        if(typeof mostrarToast === 'function') mostrarToast("Añadido a favoritos");
    } else {
        // --> QUITAR DE FAVORITOS
        usuario.favoritos.splice(index, 1);
        
        // Actualizar visualmente
        btn.classList.remove("active");
        icono.className = "fa-regular fa-heart"; // Corazón borde
        
        // Feedback
        if(typeof mostrarToast === 'function') mostrarToast("Eliminado de favoritos");
    }

    // 4. Guardar en localStorage
    localStorage.setItem("usuarioActual", JSON.stringify(usuario));
    
    // Sincronizar con la lista global de usuarios (script.js function logic)
    let usuariosGlobales = JSON.parse(localStorage.getItem("usuarios")) || [];
    const userIndex = usuariosGlobales.findIndex(u => u.correo === usuario.correo);
    if(userIndex !== -1) {
        usuariosGlobales[userIndex] = usuario;
        localStorage.setItem("usuarios", JSON.stringify(usuariosGlobales));
    }
};