
var movies = `
    [   
        {
            "title": "STRANGER THINGS",
            "desc": "La historia narra la súbita desaparición de un niño en esta ciudad durante la década de los 80, hecho que destapa los extraños sucesos que tienen lugar en la zona, producto de una serie de experimentos que realiza el gobierno.",
            "maskImg": "assets/img/posters/0.jpg",
            "trailer": "YrwcTu-0cgA",
            "opinion": "La verdad nunca la vi completa, solo a capítulos con mi mamá y a ella le gusta mucho, así que me imagino que debe ser muy buena y una obrea maestra. Debido a los puntos anteriores, yo lo doy 5 estrellas",
            "score": "5"
        },

        {
            "title": "EL VENOSO",
            "desc": "El periodista Eddie Brock intenta desenmascarar al genio científico Carlton Drake, el célebre fundador de la Fundación Vida. Mientras investiga uno de los experimentos de Drake, Brock establece una simbiosis con un ente alienígena que le ofrece superpoderes, pero el ser se apodera de su personalidad y lo vuelve perverso.",
            "maskImg": "assets/img/posters/1.jpg",
            "trailer": "F4Ygcigj0Gk",
            "opinion": "Nerfearon bien recio al carnoso y la verdad la peli duró bien poquito. Unos efectos especiales de maravilla y escena pos-creditos de otro mundoo o debería decir... universo? Una película descente que daba para más.",
            "score": "3"
        },
        {
            "title": "LOKI",
            "desc": " Loki es llevado ante la misteriosa organización llamada Autoridad de Variación Temporal después de robar el Cubo Cósmico durante los eventos de Avengers: Endgame (2019) y se le da a elegir enfrentarse a la eliminación de la realidad o ayudar contra una amenaza mayor,​ por lo cual Loki termina viajando a través del tiempo, alterando la historia humana.",
            "maskImg": "assets/img/posters/2.jpg",
            "trailer": "KcBStos46EM",
            "opinion": "Tengo el ego tan alto que me enamoré de mi mismo. Aún así tengo buena trama y un sountrack dpm. No le doy 5 estrellas porque ya le di esas estrellas a muchas series :(",
            "score": "4"
        },
        {
            "title": "SABRINA",
            "desc": "Sabrina es una joven que debe hacer frente a sus orígenes como bruja, pero también abrazando esa parte significativa que la liga al universo mortal. En esta aventura, ella se enfrentará a dilemas amorosos y tendrá que lidiar con toda clase de desafíos, desde rivales formidables que son la viva encarnación del mal hasta diferentes tipos de problemas más propios de una adolescente.",
            "maskImg": "assets/img/posters/3.jpg",
            "trailer": "51fOujPcgIE",
            "opinion": "Si hay alguien en esta vida por quién valga la pena ser un simp, esa es Sabrina Spellman. Por favor ya cásate conmigo mi amor :( ",
            "score": "5"
        },
        {
            "title": "SUICIDE SQUAD",
            "desc": "Con tal de salir de una prisión infernal, los supervillanos más peligrosos del mundo aceptan una misión del Gobierno: viajar a una remota isla, enemiga de los Estados Unidos y repleta de soldados, para destruir un laboratorio de alta tecnología.",
            "maskImg": "assets/img/posters/4.jpg",
            "trailer": "c3h7Qxm3KnE",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "3"
        },
        {
            "title": "SQUID GAME",
            "desc": "La serie narra la historia de 456 personas que deciden convertirse en jugadores de una serie de misteriosos y enfermizos juegos infantiles de supervivencia mortal para tener la oportunidad de ganar la cantidad máxima de 45 mil millones de wones. Cada persona que muere añade 100 millones de wones al premio, incitando el conflicto entre los jugadores.",
            "maskImg": "assets/img/posters/5.jpg",
            "trailer": "oqxAJKy0ii4",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "THE MANDALORIAN",
            "desc": "Tras las historias de Jango y Boba Fett, otro guerrero emerge en el universo de Star Wars. El Mandaloriano se ubica tras la caída del Imperio y antes de que la Primera Orden surja. En la serie seguimos las aventuras de un pistolero solitario en los confines de la galaxia, lejos de la autoridad de la Nueva República.",
            "maskImg": "assets/img/posters/6.jpg",
            "trailer": "eW7Twd85m2g",
            "opinion": "Creí que el mandaloriano iba a estar más guapo, pero el Grogu es un amor. Un nuevo y necesitado aire al universo de Star Wars",
            "score": "5"
        },
        {
            "title": "FINAL SPACE",
            "desc": "Él es prisionero de una nave inteligente en el espacio; la pelota verde que flota, un adorable asesino de planetas. La aventura para salvar el universo acaba de comenzar. Serie animada de ciencia ficción con las voces en inglés de David Tennant, Fred Armisen y Ron Perlman, entre otras.",
            "maskImg": "assets/img/posters/7.jpg",
            "trailer": "4EHbt_kSkG8",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "KIMETSU NO YAIBA",
            "desc": "Tanjiro Kamado y sus amigos del Demon Slayer Corps acompañan a Kyojuro Rengoku, el Flame Hashira, para investigar una misteriosa serie de desapariciones que ocurren dentro de un tren aparentemente infinitamente largo. Poco saben que Enmu, la última de las Lunas Inferiores de los Doce Kizuki, también está a bordo y les ha preparado una trampa.",
            "maskImg": "assets/img/posters/8.jpg",
            "trailer": "VyayvQZrmIQ",
            "opinion": "No Regoku, no te subas al tren, mi amor :( !!!  Una obra maestra, animación y narrativa espectacular.",
            "score": "5"
        },
        {
            "title": "TENET",
            "desc": "Una acción épica que gira en torno al espionaje internacional, los viajes en el tiempo y la evolución, en la que un agente secreto debe prevenir la Tercera Guerra Mundial.",
            "maskImg": "assets/img/posters/9.jpg",
            "trailer": "CdRL6o8z-2A",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "5"
        },
        {
            "title": "GODZILLA VS KONG",
            "desc": "Godzilla y Kong, dos de las fuerzas más poderosas de un planeta habitado por aterradoras criaturas, se enfrentan en un espectacular combate que sacude los cimientos de la humanidad. Monarch se embarca en una misión de alto riesgo y pone rumbo hacia territorios inexplorados para descubrir los orígenes de estos dos titanes, en un último esfuerzo por tratar de salvar a dos bestias que parecen tener las horas contadas sobre la faz de la Tierra.",
            "maskImg": "assets/img/posters/10.jpg",
            "trailer": "RIKOJP9PHP0",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "3"
        },
        {
            "title": "THE BATMAN",
            "desc": "En su segundo año luchando contra el crimen, Batman explora la corrupción existente en la ciudad de Gotham y el vínculo de esta con su propia familia. Además, entrará en conflicto con un asesino en serie conocido como 'el Acertijo'.",
            "maskImg": "assets/img/posters/11.jpg",
            "trailer": "fWQrd6cwJ0A",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "5"
        },
        {
            "title": "MORTAL KOMBAT",
            "desc": "Cole Young, el luchador de MMA, acostumbrado a recibir palizas por dinero, desconoce su ascendencia, y tampoco sabe por qué el emperador Shang Tsung de Outworld ha enviado a su mejor guerrero, Sub-Zero, un Cryomancer sobrenatural, para dar caza a Cole. Ante esta situación, Cole teme por la seguridad de su familia y busca a Sonya Blade siguiendo las indicaciones de Jax, un comandante de las Fuerzas Especiales que tiene la misma extraña marca de dragón con la que nació Cole.",
            "maskImg": "assets/img/posters/12.jpg",
            "trailer": "Y2O4RCdwCGM",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "3"
        },
        {
            "title": "LUCIFER",
            "desc": "La serie se centra en Lucifer Morningstar (Tom Ellis), un ángel hermoso y poderoso que fue expulsado del cielo por traición. ... A lo largo de la serie, varias amenazas celestiales y demoníacas llegan a Los Ángeles; al mismo tiempo, Lucifer y Chloe terminan apreciando y siendo felices el uno con el otro.",
            "maskImg": "assets/img/posters/13.jpg",
            "trailer": "DaxEHaUNLp8",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "JUJUTSU KAISEN",
            "desc": "Jujutsu Kaisen es un anime que sigue la historia de Yuji Itadori, un estudiante de secundaria que vive en Sendai junto a su abuelo. Aunque tenga un talento innato para el deporte, evita de todas formas el equipo de pista debido a su aversión al atletismo.",
            "maskImg": "assets/img/posters/14.jpg",
            "trailer": "aPBUUJbrAWo",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "5"
        },
        {
            "title": "CHAINSAW MAN",
            "desc": "Denji es un joven bastante pobre que haría cualquier cosa por dinero, incluso cazar demonios con su perro demonio Pochita si es necesario. ... Ahora, con el poder de un demonio en su interior, Denji se convierte en un hombre completamente nuevo, el Chainsaw Man.",
            "maskImg": "assets/img/posters/15.jpg",
            "trailer": "V-X6bIGnlFI",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "SPIDERMAN FAR FROM HOME",
            "desc": "Peter Parker decide pasar unas merecidas vacaciones en Europa junto a MJ, Ned y el resto de sus amigos. Sin embargo, Peter debe volver a ponerse el traje de Spider-Man cuando Nick Fury le encomienda una nueva misión: frenar el ataque de unas criaturas que están causando el caos en el continente.",
            "maskImg": "assets/img/posters/16.jpg",
            "trailer": "DYYtuKyMtY8",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "BLACK PANTHER",
            "desc": "Hace millones de años, un meteorito de poderoso vibranium impactó en África. Cuando llegó la era del hombre, la mayoría de los habitantes de aquel territorio se unieron bajo el mando de un guerrero chamán que, gracias al vibranium, adquirió fuerza, velocidad e instinto sobrehumano, convirtiéndose en el primer Black Panther.",
            "maskImg": "assets/img/posters/17.jpg",
            "trailer": "xjDjIWPwcPU",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "5"
        },
        {
            "title": "AFTER",
            "desc": "Tessa Young acaba de llegar a la universidad, y su estable y ordenada vida da un giro busco al conocer al misterioso Hardin Scott, cuyo pasado es algo oscuro. Aunque de entrada se odian, estos polos opuestos se unirán y nada volverá a ser como antes. Tendrán que enfrentarse amultiples pruebas como la inocencia y el descubrimiento sexual, para poder estar juntos.",
            "maskImg": "assets/img/posters/18.jpg",
            "trailer": "3zjxECCWwrU",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "2"
        },
        {
            "title": "AVENGERS INFINITY WAR",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "maskImg": "assets/img/posters/19.jpg",
            "trailer": "6ZfuNTqbHE8",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "JOKER",
            "desc": "Arthur Fleck adora hacer reír a la gente, pero su carrera como comediante es un fracaso. El repudio social, la marginación y una serie de trágicos acontecimientos lo conducen por el sendero de la locura y, finalmente, cae en el mundo del crimen.",
            "maskImg": "assets/img/posters/20.jpg",
            "trailer": "t433PEQGErc",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "SPIDERMAN INTO DE SPIDERVERSE",
            "desc": "Luego de ser mordido por una araña radioactiva, el joven Miles Morales desarrolla misteriosos poderes que lo transforman en el Hombre Araña. Ahora deberá usar sus nuevas habilidades ante el malvado Kingpin, un enorme demente que puede abrir portales hacia otros universos.",
            "maskImg": "assets/img/posters/21.jpg",
            "trailer": "g4Hbz2jLxvQ",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "AVATAR",
            "desc": "En un exuberante planeta llamado Pandora viven los Na'vi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados. Debido a que el ambiente de Pandora es venenoso, los híbridos humanos/Na'vi, llamados Avatares, están relacionados con las mentes humanas, lo que les permite moverse libremente por Pandora. Jake Sully, un exinfante de marina paralítico se transforma a través de un Avatar, y se enamora de una mujer Na'vi.",
            "maskImg": "assets/img/posters/22.jpg",
            "trailer": "g5deg0HgCmY",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "KATE",
            "desc": "Tras ser envenenada sin solución, una implacable asesina tiene 24 horas para averiguar quién ordenó su muerte y vengarse. Durante la búsqueda, se forma un vínculo inesperado con la hija de una de sus víctimas.",
            "maskImg": "assets/img/posters/23.jpg",
            "trailer": "lobHKNuf8zc",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "CHERRY",
            "desc": "Hace mucho tiempo, en una lejana ciénaga, vivía un ogro llamado Shrek. Un día, su preciada soledad se ve interrumpida por un montón de personajes de cuento de hadas que invaden su casa. Todos fueron desterrados de su reino por el malvado Lord Farquaad. Decidido a devolverles su reino y recuperar la soledad de su ciénaga, Shrek llega a un acuerdo con Lord Farquaad y va a rescatar a la princesa Fiona, la futura esposa del rey. Sin embargo, la princesa esconde un oscuro secreto.",
            "maskImg": "assets/img/posters/24.jpg",
            "trailer": "s9yUePW0tZ4e",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "MOONLIGHT",
            "desc": "Chiron, un joven afroamericano que vive en una zona conflictiva de Miami, tiene problemas para aceptar su homosexualidad. Mientras madura en un ambiente hostil, experimenta la alegría, la ira, el placer de la belleza, el éxtasis y el dolor. A medida que pasan los años, el joven se descubre a sí mismo intentando sobrevivir a diferentes situaciones.",
            "maskImg": "assets/img/posters/25.jpg",
            "trailer": "VzetxI2f22Y",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "HOW TO TRAIN YOUR DRAGON",
            "desc": "Hipo, un vikingo adolescente, comienza las clases de entrenamiento con dragones, y ve por fin una oportunidad para demostrar que es capaz de convertirse en guerrero, cuando hace amistad con un dragón herido.",
            "maskImg": "assets/img/posters/26.jpg",
            "trailer": "CQ7XUCQ6pbE",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "IT",
            "desc": "Varios niños de una pequeña ciudad del estado de Maine se alían para combatir a una entidad diabólica que adopta la forma de un payaso y desde hace mucho tiempo emerge cada 27 años para saciarse de sangre infantil.",
            "maskImg": "assets/img/posters/27.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "BOHEMIAN RHAPSODY",
            "desc": "Londres, 1970. El joven Farrokh, Freddie para los amigos, trabaja en el aeropuerto, estudia diseño gráfico y escribe canciones. Un día, tras escuchar al grupo Smile en un bar, se ofrece como cantante de la banda al enterarse de que se han quedado sin vocalista. Ninguno de ellos se imaginaba por aquel entonces que se convertirían en los mismísimos Queen.",
            "maskImg": "assets/img/posters/28.jpg",
            "trailer": "mP0VHJYFOAU",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "PARASITE",
            "desc": "Tanto Gi Taek como su familia están sin trabajo. Cuando su hijo mayor, Gi Woo, empieza a impartir clases particulares en la adinerada casa de los Park, las dos familias, que tienen mucho en común pese a pertenecer a dos mundos totalmente distintos, entablan una relación de resultados imprevisibles.",
            "maskImg": "assets/img/posters/29.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "CALL ME BY YOUR NAME",
            "desc": "En el verano de 1983, en el norte de Italia, Elio Perlman, un estadounidense de 17 años, pasa las vacaciones junto a su familia en una villa del siglo XVII y se dedica a la música y a flirtear con su amiga Marzi. Un día, Oliver, un joven estudiante de doctorado, llega a la casa para ayudar al padre de Elio, un eminente profesor de cultura grecolatina.",
            "maskImg": "assets/img/posters/30.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "DUNE",
            "desc": "Arrakis, también denominado 'Dune', se ha convertido en el planeta más importante del universo. A su alrededor comienza una gigantesca lucha por el poder que culmina en una guerra interestelar.",
            "maskImg": "assets/img/posters/31.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "FIGHT CLUB",
            "desc": "Un empleado de oficina insomne, harto de su vida, se cruza con un vendedor peculiar. Ambos crean un club de lucha clandestino como forma de terapia y, poco a poco, la organización crece y sus objetivos toman otro rumbo.",
            "maskImg": "assets/img/posters/32.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "THE SHINING",
            "desc": "Jack Torrance se convierte en cuidador de invierno en el Hotel Overlook, en Colorado, con la esperanza de vencer su bloqueo con la escritura. Se instala allí junto con su esposa, Wendy, y su hijo, Danny, que está plagado de premoniciones psíquicas. Mientras la escritura de Jack no fluye y las visiones de Danny se vuelven más preocupantes, Jack descubre oscuros secretos del hotel y comienza a convertirse en un maníaco homicida, empeñado en aterrorizar a su familia.",
            "maskImg": "assets/img/posters/33.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "RAMBO 'LAST BLOOD'",
            "desc": "John Rambo está en horas bajas y viviendo en un rancho en Arizona, pero cuando recibe la noticia de que su nieta ha desaparecido, tras haber cruzado la frontera a México para ir a una fiesta, Rambo decide ir en su búsqueda.",
            "maskImg": "assets/img/posters/34.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "BACK TO THE FUTURE",
            "desc": "El adolescente Marty McFly es amigo de Doc, un científico que ha construido una máquina del tiempo. Cuando los dos prueban el artefacto, un error fortuito hace que Marty llegue a 1955, año en el que sus padres iban al instituto y todavía no se habían conocido. Después de impedir su primer encuentro, Marty deberá conseguir que se conozcan y se enamoren, de lo contrario su existencia no sería posible.",
            "maskImg": "assets/img/posters/35.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "THE BOYS",
            "desc": "The Boys es la adaptación televisiva de la obra de Garth Ennis que presenta un mundo superheróico donde los héroes están corrompidos por la fama. Esta actitud cegada y de alta celebridad les lleva a poner en peligro al mundo más de una vez.",
            "maskImg": "assets/img/posters/36.jpg",
            "trailer": "GXM7SRdos2A",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "NARCOS",
            "desc": "'Narcos' es una serie de televisión desarrollada por Netflix que se centra en la historia real de una peligrosa difusión y propagación de una red de cocaína por todo el mundo durante los años 70 y 80. ... Esta ficción dramática sigue a uno de los capos de la cocaína más importante de Colombia, Pablo Escobar.",
            "maskImg": "assets/img/posters/37.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "JURASSIC PARK",
            "desc": "El multimillonario John Hammond hace realidad su sueño de clonar dinosaurios del Jurásico y crear con ellos un parque temático en una isla. Antes de abrir el parque al público general, Hammond invita a una pareja de científicos y a un matemático para que comprueben la viabilidad del proyecto. Sin embargo, el sistema de seguridad falla y los dinosaurios se escapan.",
            "maskImg": "assets/img/posters/38.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "RICK & MORTY",
            "desc": "Rick acaba de mudarse a casa de su hija Beth y allí recuerda que tiene un nieto llamado Morty. Sin preguntar a nadie, decide que va a obligarle a que le acompañe a todo tipo de aventuras para que el chico se vuelva inteligente como él y no se convierta en un idiota como Jerry, padre de Morty y yerno de Rick.",
            "maskImg": "assets/img/posters/39.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "THE PUNISHER",
            "desc": "Frank Castle, conocido en toda la ciudad de Nueva York como «el Castigador», luego de vengarse de los responsables de la muerte de su familia, descubre una gran conspiración más allá de lo que le hicieron a él y su familia.",
            "maskImg": "assets/img/posters/40.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "LA CASA DE PAPEL",
            "desc": "La Casa de Papel narra lo que se espera que sea el atraco perfecto al Museo de la Fábrica Nacional de Moneda y Timbre. La mente que idea este plan es El Profesor, un hombre que recluta a siete personas para llevar a cabo el gran golpe.",
            "maskImg": "assets/img/posters/41.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "DAREDEVIL",
            "desc": "La serie de Daredevil gira en torno a Matthew Murdock, un abogado de día y superhéroe de noche. A pesar de ser ciego, posee un oído, un olfato, una fuerza y una agilidad increíblemente desarrolladas. Sin descanso, Matthew Murdock recorrerá las calles de Nueva York a la caza de todo tipo de criminales a los que no puede castigar un tribunal.",
            "maskImg": "assets/img/posters/42.jpg",
            "trailer": "cDUKA6Tqiw8",
            "opinion": "Ya veremos, dijo el ciego. La serie. ",
            "score": "5"
        },
        {
            "title": "STAR WARS 'THE LAST JEDI'",
            "desc": "La Primera Orden ha acorralado a los últimos miembros de la resistencia. Su última esperanza es que Finn se introduzca en la nave de Snoke y desactive el radar que les permite localizarlos. Mientras él trata, en compañía de una soldado de la Resistencia, de cumplir esta misión imposible, Rey se encuentra lejos, intentando convencer a Luke Skywalker de que la entrene y la convierta en la última jedi.",
            "maskImg": "assets/img/posters/43.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "IM LEGEND",
            "desc": "Año 2012. Robert Neville es un brillante científico, que, sin embargo, no ha podido impedir la expansión de un incurable virus creado por el hombre. Neville, inexplicablemente inmune al contagio, es el último superviviente humano de la ciudad de Nueva York y, quizá, del mundo. Pero Neville no está completamente solo. Víctimas mutantes de la plaga merodean en las sombras, vigilando cada uno de los movimientos del científico y esperando que cometa un error fatal para beber su sangre.",
            "maskImg": "assets/img/posters/44.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "BOKU NO HERO",
            "desc": "La historia tiene lugar en un mundo donde el 80% de la población ha desarrollado «dones», surgiendo así héroes y villanos. ... Midoriya accede y empieza a estudiar en la U.A, donde hace nuevos amigos, conoce otros héroes profesionales, aprende a dominar sus poderes y se enfrenta a auténticos villanos.",
            "maskImg": "assets/img/posters/45.jpg",
            "trailer": "GwDHcg-p6mc",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "YOUR NAME",
            "desc": "El joven Taki vive en Tokio: la joven Mitsuha, en un pequeño pueblo en las montañas. Durante el sueño, los cuerpos de ambos se intercambian. Recluidos en un cuerpo que les resulta extraño, comienzan a comunicarse.",
            "maskImg": "assets/img/posters/46.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "DRAGON BALL",
            "desc": "Dragon Ball es un Manga de Akira Toriyama, inspirado en la novela china Viaje al Oeste, Dragon Ball sigue las aventuras de Son Gokū desde su infancia hasta su edad adulta, período en el que se somete básicamente a un entrenamiento de artes marciales, y explora el mundo en búsqueda de siete objetos legendarios conocidos ...",
            "maskImg": "assets/img/posters/47.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "EVANGELION",
            "desc": "La historia de la obra se da lugar en un mundo futurista en el que una organización paramilitar llamada NERV protege a la humanidad de los ataques de seres de origen y naturaleza desconocidos, los «Ángeles», utilizando para ello bio mechas humanoides llamados Evangelion (acortado a EVA).",
            "maskImg": "assets/img/posters/48.jpg",
            "trailer": "GZfuWMDEJpw",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "BLACK CLOVER",
            "desc": "'Black Clover' ('Burakku Kurōbā' es el nombre original) es un anime japonés basado en el manga del mismo nombre, obra de Yuki Tabata. Dirigido por Tatsuya Yoshihara, nos sitúa en un mundo en el que la magia es de vital importancia: todo el mundo tiene 'poder mágico' y una habilidad natural para controlarlo.",
            "maskImg": "assets/img/posters/49.jpg",
            "trailer": "BRYSghakO0o",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "SEVEN DEADLY SINS",
            "desc": "Seven Deadly Sins es un animé de estructura clásica, con personajes clásicos y conflictos clásicos. A saber, la serie trata sobre la búsqueda que tiene que hacer la Princesa Elizabeth de los Siete Pecados Capitales, cuya orden estuvo formada alguna vez por los peores criminales del reino.",
            "maskImg": "assets/img/posters/50.jpg",
            "trailer": "6ribjsdOeM8",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "FATE",
            "desc": "Un estudiante de secundaria se encuentra en el centro de una antigua guerra entre unos hechiceros.",
            "maskImg": "assets/img/posters/51.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "AKIRA",
            "desc": "Neo-Tokio, año 2019. Tras un extraño accidente, el joven Tetsuo es sometido a experimentos secretos para controlar la mente.",
            "maskImg": "assets/img/posters/52.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "CELLS AT WORK",
            "desc": "Cells at Work! (o Hataraku Saibou) es un anime que comenzó el pasado 7 de abril y que se centra en explicar como funciona el cuerpo humano, pero con un estilo bastante juvenil y centrado en la acción y combate contra las bacterias.",
            "maskImg": "assets/img/posters/53.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "KAKEGURUI",
            "desc": "Una adolescente usa sus habilidades de juego para intentar derrotar al presidente del consejo estudiantil en una academia de élite.",
            "maskImg": "assets/img/posters/54.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "SHINGEKI NO KYOJIN",
            "desc": "La historia se desarrolla en un mundo ficticio en donde la humanidad está al borde de la extinción a causa de unas criaturas humanoides llamadas «titanes», por lo que los sobrevivientes se resguardan en tres enormes murallas que impiden el acceso a los monstruos.",
            "maskImg": "assets/img/posters/55.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Los titanes son los enemigos, la familia real es el enemigo, los marleyanos son los enemigos, los eldianos con los enemigos. Joder! Eren es el enemigo?. Termina con Eren paloma poniendo una bufanda sobre Mikasa ",
            "score": "5"
        },
        {
            "title": "US",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "maskImg": "assets/img/posters/56.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "THE DESCENT",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "maskImg": "assets/img/posters/57.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "PET CEMANTARY",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "maskImg": "assets/img/posters/58.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "SINISTER",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "maskImg": "assets/img/posters/59.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "POLTERGEIST",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "maskImg": "assets/img/posters/60.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "THE EXORCIST",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "maskImg": "assets/img/posters/61.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "MOTHRA",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "maskImg": "assets/img/posters/62.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "AMITYVILLE HORROR",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "maskImg": "assets/img/posters/63.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "NIGHTMARE ON ELM STREET",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "maskImg": "assets/img/posters/64.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "THE NUN",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "maskImg": "assets/img/posters/65.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "ANABELLE",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "maskImg": "assets/img/posters/66.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "THE FLY",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "maskImg": "assets/img/posters/67.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "TEXT CHAIN SAW MASACRE",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "maskImg": "assets/img/posters/68.jpg",
            "trailer": "mCdA4bJAGGk",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "STRANGER THINGS",
            "desc": "La historia narra la súbita desaparición de un niño en esta ciudad durante la década de los 80, hecho que destapa los extraños sucesos que tienen lugar en la zona, producto de una serie de experimentos que realiza el gobierno.",
            "maskImg": "assets/img/posters/69.jpg",
            "trailer": "YrwcTu-0cgA",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        },
        {
            "title": "DARK",
            "desc": "Ambientada en la Alemania contemporánea, la serie gira alrededor de la desaparición de dos niños en Widen. El pueblo se vuelca en buscarles hasta que la situación cada vez se convierte más en una experiencia sobrenatural. Parece ser que todo se relaciona con los inexplicables sucesos que ocurrieron en 1986.",
            "maskImg": "assets/img/posters/70.jpg",
            "trailer": "IJ_AZCvCacw",
            "opinion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "score": "4"
        }  
    ]
`
