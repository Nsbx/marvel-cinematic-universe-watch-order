const mcu_items = [
    {
        title: 'Captain America: The First Avenger',
        type: 'movie',
        poster: 'Captain America - First Avenger (2011).jpg',
        date: '2011/08/17',
        order_position: 1,
        tmdb_link: 'https://www.themoviedb.org/movie/1771-captain-america-the-first-avenger'
    },
    {
        title: 'Captain Marvel',
        type: 'movie',
        poster: 'Captain Marvel (2019).jpg',
        date: '2019/03/06',
        order_position: 2,
        tmdb_link: 'https://www.themoviedb.org/movie/299537-captain-marvel'
    },
    {
        title: 'Iron Man',
        type: 'movie',
        poster: 'Iron Man (2008).jpg',
        date: '2008/04/30',
        order_position: 3,
        tmdb_link: 'https://www.themoviedb.org/movie/1726-iron-man'
    },
    {
        title: 'Iron Man 2',
        type: 'movie',
        poster: 'Iron Man 2 (2010).jpg',
        date: '2010/04/28',
        order_position: 4,
        tmdb_link: 'https://www.themoviedb.org/movie/10138-iron-man-2'
    },
    {
        title: 'The Incredible Hulk',
        type: 'movie',
        poster: 'The Incredible Hulk (2008).jpg',
        date: '2008/07/23',
        order_position: 5,
        tmdb_link: 'https://www.themoviedb.org/movie/1724-the-incredible-hulk'
    },
    {
        title: 'Thor',
        type: 'movie',
        poster: 'Thor (2011).jpg',
        date: '2011/04/27',
        order_position: 6,
        tmdb_link: 'https://www.themoviedb.org/movie/10195-thor'
    },
    {
        title: 'The Avengers',
        type: 'movie',
        poster: 'The Avengers (2012).jpg',
        date: '2012/04/25',
        order_position: 7,
        tmdb_link: 'https://www.themoviedb.org/movie/24428-the-avengers'
    },
    {
        title: 'Iron Man 3',
        type: 'movie',
        poster: 'Iron Man 3 (2013).jpg',
        date: '2013/04/24',
        order_position: 8,
        tmdb_link: 'https://www.themoviedb.org/movie/68721-iron-man-3'
    },
    {
        title: 'Thor: The Dark World',
        type: 'movie',
        poster: 'Thor - The Dark World (2013).jpg',
        date: '2013/10/30',
        order_position: 9,
        tmdb_link: 'https://www.themoviedb.org/movie/76338-thor-the-dark-world'
    },
    {
        title: 'Captain America: The Winter Soldier',
        type: 'movie',
        poster: 'Captain America - The Winter Soldier (2014).jpg',
        date: '2014/03/26',
        order_position: 10,
        tmdb_link: 'https://www.themoviedb.org/movie/100402-captain-america-the-winter-soldier'
    },
    {
        title: 'Guardians of the Galaxy',
        type: 'movie',
        poster: 'Guardians of the Galaxy (2014).jpg',
        date: '2014/08/13',
        order_position: 11,
        tmdb_link: 'https://www.themoviedb.org/movie/118340-guardians-of-the-galaxy'
    },
    {
        title: 'Guardians of the Galaxy Vol. 2',
        type: 'movie',
        poster: 'Guardians of the Galaxy Vol. 2 (2017).jpg',
        date: '2017/04/26',
        order_position: 12,
        tmdb_link: 'https://www.themoviedb.org/movie/283995-guardians-of-the-galaxy-2'
    },
    {
        title: 'Avengers: Age of Ultron',
        type: 'movie',
        poster: 'Avengers Age of Ultron (2015).jpg',
        date: '2015/04/22',
        order_position: 13,
        tmdb_link: 'https://www.themoviedb.org/movie/99861-avengers-age-of-ultron'
    },
    {
        title: 'Ant-Man',
        type: 'movie',
        poster: 'Ant-Man (2015).jpg',
        date: '2015/07/14',
        order_position: 14,
        tmdb_link: 'https://www.themoviedb.org/movie/102899-ant-man'
    },
    {
        title: 'Captain America: Civil War',
        type: 'movie',
        poster: 'Captain America - Civil War (2016).jpg',
        date: '2016/04/27',
        order_position: 15,
        tmdb_link: 'https://www.themoviedb.org/movie/271110-captain-america-civil-war'
    },
    {
        title: 'Spider-Man: Homecoming',
        type: 'movie',
        poster: 'Spider-Man - Homecoming (2017).jpg',
        date: '2017/07/12',
        order_position: 16,
        tmdb_link: 'https://www.themoviedb.org/movie/315635-spider-man-homecoming'
    },
    {
        title: 'Doctor Strange',
        type: 'movie',
        poster: 'Doctor Strange (2016).jpg',
        date: '2016/10/26',
        order_position: 17,
        tmdb_link: 'https://www.themoviedb.org/movie/284052-doctor-strange'
    },
    {
        title: 'Black Panther',
        type: 'movie',
        poster: 'Black Panther (2018).jpg',
        date: '2018/02/14',
        order_position: 18,
        tmdb_link: 'https://www.themoviedb.org/movie/284054-black-panther'
    },
    {
        title: 'Thor: Ragnarok',
        type: 'movie',
        poster: 'Thor - Ragnarok (2017).jpg',
        date: '2017/10/25',
        order_position: 19,
        tmdb_link: 'https://www.themoviedb.org/movie/284053-thor-ragnarok'
    },
    {
        title: 'Ant-Man and the Wasp',
        type: 'movie',
        poster: 'Ant-Man and the Wasp (2018) .jpg',
        date: '2018/07/18',
        order_position: 20,
        tmdb_link: 'https://www.themoviedb.org/movie/363088-ant-man-and-the-wasp'
    },
    {
        title: 'Black Widow',
        type: 'movie',
        poster: 'Black Widow (2021).jpg',
        date: '2021/07/07',
        order_position: 21,
        tmdb_link: 'https://www.themoviedb.org/movie/497698-black-widow'
    },
    {
        title: 'Avengers: Infinity War',
        type: 'movie',
        poster: 'Avengers Infinity War (2018).jpg',
        date: '2018/04/25',
        order_position: 22,
        tmdb_link: 'https://www.themoviedb.org/movie/299536-avengers-infinity-war'
    },
    {
        title: 'Avengers: Endgame',
        type: 'movie',
        poster: 'Avengers Endgame (2019).jpg',
        date: '2019/04/24',
        order_position: 23,
        tmdb_link: 'https://www.themoviedb.org/movie/299534-avengers-endgame'
    },
    {
        title: 'WandaVision',
        type: 'show',
        season: 1,
        poster: 'WandaVision (2021).jpg',
        date: '2021/01/15',
        order_position: 24,
        tmdb_link: 'https://www.themoviedb.org/tv/85271-wandavision'
    },
    {
        title: 'The Falcon and the Winter Soldier',
        type: 'show',
        season: 1,
        poster: 'The Falcon and the Winter Soldier (2021).jpg',
        date: '2021/03/19',
        order_position: 25,
        tmdb_link: 'https://www.themoviedb.org/tv/88396-falcon-winter-soldier'
    },
    {
        title: 'Spider-Man : Far From Home',
        type: 'movie',
        poster: 'Spider-Man - Far From Home (2019).jpg',
        date: '2019/07/03',
        order_position: 26,
        tmdb_link: 'https://www.themoviedb.org/movie/429617-spider-man-far-from-home'
    },
    {
        title: 'Loki',
        type: 'show',
        season: 1,
        poster: 'Loki (2021).jpg',
        date: '2021/06/09',
        order_position: 27,
        tmdb_link: 'https://www.themoviedb.org/tv/84958-loki'
    },
];