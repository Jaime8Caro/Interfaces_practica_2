// DATOS: Base de datos de tus experiencias
const experiencesData = [
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
        imagen: "assets/melbourne.jpg",
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
        imagen: "assets/cairns_australia.jpg",
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
        imagen: "assets/nueva_zelanda.jpg",
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
        imagen: "assets/kioto.jpg",
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
        imagen: "assets/zebras.jpg",
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
        imagen: "assets/el_cairo.jpg",
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
        imagen: "assets/namibia.jpg",
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
        imagen: "assets/torres_de_paine.jpg",
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

// --- LOGICA DE RENDERIZADO ---
function renderExperiencesList(container, data = experiencesData) {
    container.innerHTML = "";
    
    if (data.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 50px; color: #666;"><h3 data-i18n="general.no_results">No hay resultados...</h3></div>`;
        if (window.i18n) {
            window.i18n.run();
        }
        return;
    }

    const user = UserService.getCurrent();
    const favs = user?.favoritos || [];

    const html = data.map(exp => {
        const isFav = favs.includes(exp.id);
        const heartClass = isFav ? "fa-solid active" : "fa-regular";
        
        return `
        <a href="compra.html?id=${exp.id}" class="experience-card-item">
            <div class="card-image-header">
                <span class="difficulty-badge" data-i18n="difficulty.${exp.dificultad}">${exp.dificultad}</span>
                <button class="card-fav-btn ${isFav ? 'active' : ''}" onclick="toggleCardFav(event, ${exp.id}, this)">
                    <i class="${heartClass} fa-heart"></i>
                </button>
                <img src="${exp.imagen}" alt="${exp.titulo}" loading="lazy">
            </div>
            <div class="card-body">
                <h3 data-i18n="data_experiences.id_${exp.id}.title">${exp.titulo}</h3>
                <p class="card-description" data-i18n="data_experiences.id_${exp.id}.desc_short">${exp.descripcionCorto}</p>
                <div class="card-meta">
                    <span><i class="fa-solid fa-location-dot"></i> <span data-i18n="data_experiences.id_${exp.id}.location">${exp.ubicacion}</span></span>
                    <span><i class="fa-regular fa-calendar"></i> <span data-i18n="data_experiences.id_${exp.id}.duration">${exp.duracion}</span></span>
                    <span><i class="fa-solid fa-user-group"></i> <span data-i18n="groups.${exp.grupo.replace(/\s+/g, '_')}">${exp.grupo}</span></span>
                </div>
                <div class="card-footer">
                    <span class="price">$${exp.precio} <small data-i18n="cards.per_person">/ persona</small></span>
                    <span class="btn-reservar" data-i18n="cards.book_btn">Reservar</span>
                </div>
            </div>
        </a>`;
    }).join('');

    container.innerHTML = html;
    if (window.i18n) {
        window.i18n.run();
    }
}

// --- LOGICA DE FILTROS ---
function initFilters(container) {
    const searchInput = document.getElementById("exp-search-input");
    const filters = { texto: "", categoria: "Todas", dificultad: "Todas", orden: "Defecto" };

    const apply = () => {
        let result = experiencesData.filter(exp => {
            const matchText = exp.titulo.toLowerCase().includes(filters.texto) || exp.ubicacion.toLowerCase().includes(filters.texto);
            const matchCat = filters.categoria === "Todas" || exp.categoria === filters.categoria;
            const matchDiff = filters.dificultad === "Todas" || exp.dificultad === filters.dificultad;
            return matchText && matchCat && matchDiff;
        });

        if (filters.orden === "Precio: Menor a Mayor") {
            result.sort((a, b) => a.precio - b.precio);
        } else if (filters.orden === "Precio: Mayor a Menor") {
            result.sort((a, b) => b.precio - a.precio);
        }

        renderExperiencesList(container, result);
    };

    // Búsqueda inicial por URL
    const urlParam = new URLSearchParams(window.location.search).get("busqueda");
    if (urlParam) {
        if (searchInput) {
            searchInput.value = decodeURIComponent(urlParam);
        }
        filters.texto = decodeURIComponent(urlParam).toLowerCase();
        apply();
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            filters.texto = e.target.value.toLowerCase().trim();
            apply();
        });
    }

    // Configuración genérica de Dropdowns
    const setupDropdown = (btnId, options, type) => {
        const btn = document.getElementById(btnId);
        if (!btn) {
            return;
        }
        
        const menu = document.createElement("div");
        menu.className = "category-dropdown";
        
        const allOpts = type === 'orden' ? options : ["Todas", ...options];
        
        allOpts.forEach(opt => {
            const item = document.createElement("div");
            item.className = "category-option";
            item.textContent = (opt === "Todas" && type === 'categoria') ? "Todas las categorías" : opt;
            
            item.addEventListener("click", () => {
                filters[type] = opt;
                btn.textContent = item.textContent;
                menu.classList.remove("show");
                apply();
            });
            menu.appendChild(item);
        });

        document.querySelector(".filter-buttons").appendChild(menu);
        
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            document.querySelectorAll(".category-dropdown").forEach(m => {
                if (m !== menu) m.classList.remove("show");
            });
            menu.classList.toggle("show");
            menu.style.top = (btn.offsetTop + btn.offsetHeight + 10) + "px";
            menu.style.left = btn.offsetLeft + "px";
        });
    };

    const categories = [...new Set(experiencesData.map(e => e.categoria))].sort();
    setupDropdown("btn-exp-category", categories, "categoria");
    setupDropdown("btn-exp-difficulty", ["Baja", "Media", "Alta", "Muy Alta"], "dificultad");
    setupDropdown("btn-exp-sort", ["Precio: Menor a Mayor", "Precio: Mayor a Menor", "Defecto"], "orden");

    document.addEventListener("click", () => {
        document.querySelectorAll(".category-dropdown").forEach(m => m.classList.remove("show"));
    });
}

// --- DETALLE DE EXPERIENCIA ---
function loadExperienceDetail() {
    const id = parseInt(new URLSearchParams(window.location.search).get("id"));
    const exp = experiencesData.find(e => e.id === id);

    if (!exp) {
        document.querySelector("main").innerHTML = `
            <div class='container' style='padding:150px 20px; text-align:center;'>
                <h1 data-i18n='general.not_found_title'>Experiencia no encontrada</h1>
                <p data-i18n='general.not_found_text'>Lo sentimos, no pudimos cargar este viaje.</p>
                <a href='experiencias.html' class='btn-black' style='margin-top:20px;' data-i18n='product.back_link'>Volver</a>
            </div>`;
        if (window.i18n) {
            window.i18n.run();
        }
        return;
    }

    // Bindings visuales
    document.getElementById("detail-image").src = exp.imagen;
    document.getElementById("detail-price").textContent = `$ ${exp.precio}`;
    document.getElementById("detail-date").textContent = exp.fechaPub;
    
    // Bindings con i18n
    const bindText = (id, text, i18nKey) => {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = text;
            if (i18nKey) {
                el.setAttribute("data-i18n", i18nKey);
            }
        }
    };

    bindText("detail-title", exp.titulo, `data_experiences.id_${exp.id}.title`);
    bindText("detail-short-desc", exp.descripcionCorto, `data_experiences.id_${exp.id}.desc_short`);
    bindText("detail-long-desc", exp.descripcionLarga, `data_experiences.id_${exp.id}.desc_long`);
    bindText("detail-category", exp.categoria, `categories.${exp.categoria}`);
    bindText("detail-difficulty", exp.dificultad, `difficulty.${exp.dificultad}`);

    // HTML Complejo
    document.getElementById("detail-reviews").innerHTML = `(${exp.resenas} <span data-i18n="product.reviews_word">reseñas</span>)`;
    document.getElementById("detail-location").innerHTML = `<i class="fa-solid fa-location-dot"></i> <span data-i18n="data_experiences.id_${exp.id}.location">${exp.ubicacion}</span>`;
    document.getElementById("detail-duration").innerHTML = `<i class="fa-regular fa-clock"></i> <span data-i18n="data_experiences.id_${exp.id}.duration">${exp.duracion}</span>`;
    document.getElementById("detail-group").innerHTML = `<i class="fa-solid fa-user-group"></i> <span data-i18n="groups.${exp.grupo.replace(/\s+/g, '_')}">${exp.grupo}</span>`;
    document.getElementById("detail-author").innerHTML = `<span data-i18n="general.published_by">Publicado por</span> <strong>${exp.autor}</strong>`;

    // Renderizar Pestañas dinámicas
    const renderTab = (id, content) => {
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = content;
        }
    };

    renderTab("tab-incluye", generarListaIncluye(exp.categoria));
    renderTab("tab-equipo", generarListaEquipo(exp.dificultad));
    renderTab("tab-resenas", generarResenas());

    // Itinerario
    const timeline = document.querySelector(".itinerary-timeline");
    if (timeline && exp.itinerario) {
        timeline.innerHTML = exp.itinerario.map((step, i) => `
            <div class="timeline-item">
                <div class="step-number">${step.dia}</div>
                <div class="timeline-content">
                    <h3 data-i18n="data_experiences.id_${exp.id}.itinerary.step_${i+1}.title">${step.titulo}</h3>
                    <p data-i18n="data_experiences.id_${exp.id}.itinerary.step_${i+1}.desc">${step.desc}</p>
                </div>
            </div>
        `).join('');
    }

    setupBookingButton(exp);
    setupFavButton(exp);
    setupShareButton(exp);
    initTabs();

    if (window.i18n) {
        window.i18n.run();
    }
}

// --- HELPERS PARA DETALLE ---

// *** AQUÍ ESTABA EL PROBLEMA ***
// Hemos añadido la comprobación UserService.getCurrent()
function setupBookingButton(exp) {
    let btn = document.getElementById("btn-reservar-dinamico") || document.querySelector(".price-action-row .btn-black");
    
    if (btn) {
        const newBtn = btn.cloneNode(true);
        newBtn.setAttribute("data-i18n", "product.book_now");
        
        newBtn.addEventListener("click", (e) => {
            e.preventDefault();
            
            // 1. Verificamos si hay usuario ANTES de redirigir
            const user = UserService.getCurrent();
            
            if (!user) {
                // Si no hay usuario, mostramos el modal y PARAMOS la función aquí.
                // Así nos quedamos en la misma página.
                window.mostrarAvisoLogin('login_modal.title_buy', 'login_modal.msg_buy');
                return;
            }

            // 2. Si hay usuario, procedemos a guardar y navegar
            localStorage.setItem('compra_seleccionada', JSON.stringify(exp));
            window.location.href = 'proceso_compra.html';
        });
        
        btn.parentNode.replaceChild(newBtn, btn);
    }
}

function setupFavButton(exp) {
    const btn = document.querySelector('.btn-favorite');
    const user = UserService.getCurrent();
    const isFav = user?.favoritos?.includes(exp.id);

    const updateState = (active) => {
        btn.classList.toggle('active', active);
        btn.innerHTML = active 
            ? `<i class="fa-solid fa-heart"></i> <span data-i18n="product.saved">Guardado</span>`
            : `<i class="fa-solid fa-plus"></i> <span data-i18n="product.add_fav">Añadir</span>`;
    };

    updateState(isFav);

    btn.onclick = () => {
        const currentUser = UserService.getCurrent();
        // También protegemos el favorito, aunque esto ya lo manejaba toggleCardFav
        if (!currentUser) {
            return window.mostrarAvisoLogin('login_modal.title_fav', 'login_modal.msg_fav');
        }

        if (!currentUser.favoritos) {
            currentUser.favoritos = [];
        }
        
        const idx = currentUser.favoritos.indexOf(exp.id);

        if (idx === -1) {
            currentUser.favoritos.push(exp.id);
            updateState(true);
        } else {
            currentUser.favoritos.splice(idx, 1);
            updateState(false);
        }
        UserService.saveCurrent(currentUser);
        if (window.i18n) {
            window.i18n.run();
        }
    };
}

function initTabs() {
    const btns = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-content-panel');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            
            const panel = document.getElementById(btn.dataset.tab);
            if (panel) {
                panel.classList.add('active');
            }
        });
    });
}

function generarListaIncluye(categoria) {
    const base = [
        'product.include_1', 'product.include_traslados', 
        'product.include_2', 'product.include_seguro', 'product.include_atencion'
    ];
    
    if (categoria === "Aventura") {
        base.push('includes_extras.adventure_gear', 'includes_extras.park_fees');
    }
    if (categoria === "Cultural") {
        base.push('includes_extras.museum_fees', 'includes_extras.food_tasting');
    }
    if (["Relax", "Playa", "Romántico"].includes(categoria)) {
        base.push('includes_extras.welcome_drink', 'includes_extras.yoga_massage');
    }

    return `<ul class="check-list">${base.map(key => `<li><i class="fa-solid fa-check"></i> <span data-i18n="${key}"></span></li>`).join('')}</ul>`;
}

function generarListaEquipo(dificultad) {
    const isHard = ["Alta", "Media"].includes(dificultad);
    const titleKey = isHard ? "gear_list.title_technical" : "gear_list.title_recommended";
    const items = [
        'gear_list.backpack', 'gear_list.water_bottle', 'gear_list.sun_protection', 'gear_list.camera', 'gear_list.adapter'
    ];

    if (isHard) {
        items.push('gear_list.trekking_shoes', 'gear_list.thermal_layers', 'gear_list.windbreaker', 'gear_list.first_aid');
    } else {
        items.push('gear_list.light_clothes', 'gear_list.walking_shoes', 'gear_list.swimwear', 'gear_list.hat');
    }

    return `<h4 style="margin-bottom:1rem; font-size:1.1rem;" data-i18n="${titleKey}"></h4><ul class="equip-list">${items.map(k => `<li><span data-i18n="${k}"></span></li>`).join('')}</ul>`;
}

function generarResenas() {
    return `
        <div class="testimonial-box-feature" style="margin-bottom:20px;">
            <div class="user-feature-header">
                <div class="user-feature-icon icon-green"><i class="fa-regular fa-thumbs-up"></i></div>
                <div><h4 data-i18n="reviews_mock.user1_name"></h4><small><span data-i18n="reviews.verified"></span> • <span data-i18n="reviews_mock.user1_time"></span></small></div>
            </div>
            <p data-i18n="reviews_mock.user1_text"></p>
        </div>
        <div class="testimonial-box-feature">
            <div class="user-feature-header">
                <div class="user-feature-icon icon-blue"><i class="fa-regular fa-star"></i></div>
                <div><h4 data-i18n="reviews_mock.user2_name"></h4><small><span data-i18n="reviews.verified"></span> • <span data-i18n="reviews_mock.user2_time"></span></small></div>
            </div>
            <p data-i18n="reviews_mock.user2_text"></p>
        </div>`;
}

function initDestinationsPage() {
    const mapIds = {
        "list-oceania": [39, 40, 51, 52, 53, 54],
        "list-africa": [37, 38, 56, 57, 58, 60],
        "list-europa": [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        "list-america": [3, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 61, 62],
        "list-asia": [2, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
    };

    Object.entries(mapIds).forEach(([id, ids]) => {
        const el = document.getElementById(id);
        if (el) {
            renderExperiencesList(el, experiencesData.filter(e => ids.includes(e.id)));
        }
    });

    document.querySelectorAll(".continent-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".continent-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const target = btn.textContent.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const section = document.getElementById(`sec-${target}`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// --- INIT (Detectar Página) ---
function init() {
    const listContainer = document.querySelector(".experiences-grid-list");
    const indexContainer = document.getElementById("index-experiences-container");
    const isDestinationsPage = document.getElementById("list-europa");
    const isDetailPage = document.querySelector(".product-details");

    if (listContainer && !isDestinationsPage) {
        renderExperiencesList(listContainer);
        initFilters(listContainer);
    } else if (isDestinationsPage) {
        initDestinationsPage();
    } else if (isDetailPage) {
        loadExperienceDetail();
    } else if (indexContainer) {
        const top3 = [...experiencesData].sort((a, b) => b.rating - a.rating).slice(0, 3);
        renderExperiencesList(indexContainer, top3);
    }
}

// --- LOGICA DE COMPARTIR ---
function setupShareButton(exp) {
    const btnShare = document.getElementById('btn-share-exp');
    if (!btnShare) return;

    btnShare.addEventListener('click', async () => {
        const shareData = {
            title: `Pack&Go: ${exp.titulo}`,
            text: `Mira esta experiencia increíble en ${exp.ubicacion}: ${exp.descripcionCorto}`,
            url: window.location.href
        };

        // 1. Intentar usar la API nativa
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log('Error al compartir:', err);
            }
        } else {
            // 2. Fallback para PC: Copiar al portapapeles
            try {
                await navigator.clipboard.writeText(window.location.href);
                mostrarToastSimple("Enlace copiado al portapapeles");
            } catch (err) {
                alert("No se pudo copiar el enlace");
            }
        }
    });
}

function mostrarToastSimple(mensaje) {
    let toast = document.getElementById('toast-simple');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-simple';
        toast.className = 'toast-notification';
        document.body.appendChild(toast);
    }

    toast.innerHTML = `<i class="fa-solid fa-link"></i> ${mensaje}`;
    toast.classList.add('show');

    // Quitarlo a los 3 segundos
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

init();