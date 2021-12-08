// @ts-nocheck
import captainAmericaTheFirstAvengerImageUrl     from "../assets/mcu-items/Captain_America_-_First_Avenger_(2011).jpg?as=webp&width=250px";
import captainMarvelImageUrl                     from "../assets/mcu-items/Captain_Marvel_(2019).jpg?as=webp&width=250px";
import ironManImageUrl                           from "../assets/mcu-items/Iron_Man_(2008).jpg?as=webp&width=250px";
import ironMan2ImageUrl                          from "../assets/mcu-items/Iron_Man_2_(2010).jpg?as=webp&width=250px";
import theIncredibleHulkImageUrl                 from "../assets/mcu-items/The_Incredible_Hulk_(2008).jpg?as=webp&width=250px";
import thorImageUrl                              from "../assets/mcu-items/Thor_(2011).jpg?as=webp&width=250px";
import theAvengersImageUrl                       from "../assets/mcu-items/The_Avengers_(2012).jpg?as=webp&width=250px";
import ironMan3ImageUrl                          from "../assets/mcu-items/Iron_Man_3_(2013).jpg?as=webp&width=250px";
import thorTheDarkWorldImageUrl                  from "../assets/mcu-items/Thor_-_The_Dark_World_(2013).jpg?as=webp&width=250px";
import captainAmericaTheWinterSoldierImageUrl    from "../assets/mcu-items/Captain_America_-_The_Winter_Soldier_(2014).jpg?as=webp&width=250px";
import guardiansOfTheGalaxyImageUrl              from "../assets/mcu-items/Guardians_of_the_Galaxy_(2014).jpg?as=webp&width=250px";
import guardiansOfTheGalaxyVol2ImageUrl          from "../assets/mcu-items/Guardians_of_the_Galaxy_Vol._2_(2017).jpg?as=webp&width=250px";
import avengersAgeOfUltronImageUrl               from "../assets/mcu-items/Avengers_Age_of_Ultron_(2015).jpg?as=webp&width=250px";
import antManImageUrl                            from "../assets/mcu-items/Ant-Man_(2015).jpg?as=webp&width=250px";
import captainAmericaCivilWarImageUrl            from "../assets/mcu-items/Captain_America_-_Civil_War_(2016).jpg?as=webp&width=250px";
import spiderManHomecomingImageUrl               from "../assets/mcu-items/Spider-Man_-_Homecoming_(2017).jpg?as=webp&width=250px";
import doctorStrangeImageUrl                     from "../assets/mcu-items/Doctor_Strange_(2016).jpg?as=webp&width=250px";
import blackPantherImageUrl                      from "../assets/mcu-items/Black_Panther_(2018).jpg?as=webp&width=250px";
import thorRagnarokImageUrl                      from "../assets/mcu-items/Thor_-_Ragnarok_(2017).jpg?as=webp&width=250px";
import antManAndTheWaspImageUrl                  from "../assets/mcu-items/Ant-Man_and_the_Wasp_(2018).jpg?as=webp&width=250px";
import blackWidowImageUrl                        from "../assets/mcu-items/Black_Widow_(2021).jpg?as=webp&width=250px";
import avengersInfinityWarImageUrl               from "../assets/mcu-items/Avengers_Infinity_War_(2018).jpg?as=webp&width=250px";
import avengersEndGameImageUrl                   from "../assets/mcu-items/Avengers_Endgame_(2019).jpg?as=webp&width=250px";
import wandaVisionImageUrl                       from "../assets/mcu-items/WandaVision_(2021).jpg?as=webp&width=250px";
import theFalconAndTheWinterSoldierImageUrl      from "../assets/mcu-items/The_Falcon_and_the_Winter_Soldier_(2021).jpg?as=webp&width=250px";
import spiderManFarFromHomeImageUrl              from "../assets/mcu-items/Spider-Man_-_Far_From_Home_(2019).jpg?as=webp&width=250px";
import lokiImageUrl                              from "../assets/mcu-items/Loki_(2021).jpg?as=webp&width=250px";
import whatIfImageUrl                            from "../assets/mcu-items/What_If_(2021).jpg?as=webp&width=250px";
import shangChiAndTheLegendOfTheTenRingsImageUrl from "../assets/mcu-items/Shang-Chi_and_the_Legend_of_the_Ten_Rings_(2021).jpg?as=webp&width=250px";
import eternalsImageUrl                          from "../assets/mcu-items/Eternals_(2021).jpg?as=webp&width=250px";
import hawkeyeImageUrl                           from "../assets/mcu-items/Hawkeye_(2021).jpg?as=webp&width=250px";
import spiderManNoWayHomeImageUrl                from "../assets/mcu-items/Spider-Man_No_Way_Home_(2021).jpg?as=webp&width=250px";

const McuItems = [
    {
        title: 'Captain America: The First Avenger',
        type: 'movie',
        poster: captainAmericaTheFirstAvengerImageUrl,
        date: '2011-08-17',
        order_position: 1,
        tmdb_link: 'https://www.themoviedb.org/movie/1771-captain-america-the-first-avenger',
        post_credit_scenes: 1
    },
    {
        title: 'Captain Marvel',
        type: 'movie',
        poster: captainMarvelImageUrl,
        date: '2019-03-06',
        order_position: 2,
        tmdb_link: 'https://www.themoviedb.org/movie/299537-captain-marvel',
        post_credit_scenes: 2
    },
    {
        title: 'Iron Man',
        type: 'movie',
        poster: ironManImageUrl,
        date: '2008-04-30',
        order_position: 3,
        tmdb_link: 'https://www.themoviedb.org/movie/1726-iron-man',
        post_credit_scenes: 1
    },
    {
        title: 'Iron Man 2',
        type: 'movie',
        poster: ironMan2ImageUrl,
        date: '2010-04-28',
        order_position: 4,
        tmdb_link: 'https://www.themoviedb.org/movie/10138-iron-man-2',
        post_credit_scenes: 1
    },
    {
        title: 'The Incredible Hulk',
        type: 'movie',
        poster: theIncredibleHulkImageUrl,
        date: '2008-07-23',
        order_position: 5,
        tmdb_link: 'https://www.themoviedb.org/movie/1724-the-incredible-hulk',
        post_credit_scenes: 1
    },
    {
        title: 'Thor',
        type: 'movie',
        poster: thorImageUrl,
        date: '2011-04-27',
        order_position: 6,
        tmdb_link: 'https://www.themoviedb.org/movie/10195-thor',
        post_credit_scenes: 1
    },
    {
        title: 'The Avengers',
        type: 'movie',
        poster: theAvengersImageUrl,
        date: '2012-04-25',
        order_position: 7,
        tmdb_link: 'https://www.themoviedb.org/movie/24428-the-avengers',
        post_credit_scenes: 2
    },
    {
        title: 'Iron Man 3',
        type: 'movie',
        poster: ironMan3ImageUrl,
        date: '2013-04-24',
        order_position: 8,
        tmdb_link: 'https://www.themoviedb.org/movie/68721-iron-man-3',
        post_credit_scenes: 1
    },
    {
        title: 'Thor: The Dark World',
        type: 'movie',
        poster: thorTheDarkWorldImageUrl,
        date: '2013-10-30',
        order_position: 9,
        tmdb_link: 'https://www.themoviedb.org/movie/76338-thor-the-dark-world',
        post_credit_scenes: 2
    },
    {
        title: 'Captain America: The Winter Soldier',
        type: 'movie',
        poster: captainAmericaTheWinterSoldierImageUrl,
        date: '2014-03-26',
        order_position: 10,
        tmdb_link: 'https://www.themoviedb.org/movie/100402-captain-america-the-winter-soldier',
        post_credit_scenes: 2
    },
    {
        title: 'Guardians of the Galaxy',
        type: 'movie',
        poster: guardiansOfTheGalaxyImageUrl,
        date: '2014-08-13',
        order_position: 11,
        tmdb_link: 'https://www.themoviedb.org/movie/118340-guardians-of-the-galaxy',
        post_credit_scenes: 2
    },
    {
        title: 'Guardians of the Galaxy Vol. 2',
        type: 'movie',
        poster: guardiansOfTheGalaxyVol2ImageUrl,
        date: '2017-04-26',
        order_position: 12,
        tmdb_link: 'https://www.themoviedb.org/movie/283995-guardians-of-the-galaxy-2',
        post_credit_scenes: 5
    },
    {
        title: 'Avengers: Age of Ultron',
        type: 'movie',
        poster: avengersAgeOfUltronImageUrl,
        date: '2015-04-22',
        order_position: 13,
        tmdb_link: 'https://www.themoviedb.org/movie/99861-avengers-age-of-ultron',
        post_credit_scenes: 1
    },
    {
        title: 'Ant-Man',
        type: 'movie',
        poster: antManImageUrl,
        date: '2015-07-14',
        order_position: 14,
        tmdb_link: 'https://www.themoviedb.org/movie/102899-ant-man',
        post_credit_scenes: 2
    },
    {
        title: 'Captain America: Civil War',
        type: 'movie',
        poster: captainAmericaCivilWarImageUrl,
        date: '2016-04-27',
        order_position: 15,
        tmdb_link: 'https://www.themoviedb.org/movie/271110-captain-america-civil-war',
        post_credit_scenes: 2
    },
    {
        title: 'Black Widow',
        type: 'movie',
        poster: blackWidowImageUrl,
        date: '2021-07-07',
        order_position: 16,
        tmdb_link: 'https://www.themoviedb.org/movie/497698-black-widow',
        post_credit_scenes: 1
    },
    {
        title: 'Spider-Man: Homecoming',
        type: 'movie',
        poster: spiderManHomecomingImageUrl,
        date: '2017-07-12',
        order_position: 17,
        tmdb_link: 'https://www.themoviedb.org/movie/315635-spider-man-homecoming',
        post_credit_scenes: 2
    },
    {
        title: 'Doctor Strange',
        type: 'movie',
        poster: doctorStrangeImageUrl,
        date: '2016-10-26',
        order_position: 18,
        tmdb_link: 'https://www.themoviedb.org/movie/284052-doctor-strange',
        post_credit_scenes: 2
    },
    {
        title: 'Black Panther',
        type: 'movie',
        poster: blackPantherImageUrl,
        date: '2018-02-14',
        order_position: 19,
        tmdb_link: 'https://www.themoviedb.org/movie/284054-black-panther',
        post_credit_scenes: 2
    },
    {
        title: 'Thor: Ragnarok',
        type: 'movie',
        poster: thorRagnarokImageUrl,
        date: '2017-10-25',
        order_position: 20,
        tmdb_link: 'https://www.themoviedb.org/movie/284053-thor-ragnarok',
        post_credit_scenes: 2
    },
    {
        title: 'Ant-Man and the Wasp',
        type: 'movie',
        poster: antManAndTheWaspImageUrl,
        date: '2018-07-18',
        order_position: 21,
        tmdb_link: 'https://www.themoviedb.org/movie/363088-ant-man-and-the-wasp',
        post_credit_scenes: 2
    },
    {
        title: 'Avengers: Infinity War',
        type: 'movie',
        poster: avengersInfinityWarImageUrl,
        date: '2018-04-25',
        order_position: 22,
        tmdb_link: 'https://www.themoviedb.org/movie/299536-avengers-infinity-war',
        post_credit_scenes: 1
    },
    {
        title: 'Avengers: Endgame',
        type: 'movie',
        poster: avengersEndGameImageUrl,
        date: '2019-04-24',
        order_position: 23,
        tmdb_link: 'https://www.themoviedb.org/movie/299534-avengers-endgame',
        post_credit_scenes: 0
    },
    {
        title: 'WandaVision',
        type: 'tv-show',
        season: 1,
        poster: wandaVisionImageUrl,
        date: '2021-01-15',
        order_position: 24,
        tmdb_link: 'https://www.themoviedb.org/tv/85271-wandavision',
        post_credit_scenes: 4,
        post_credit_scenes_details: [
            {
                episode: 7,
                count: 1
            },
            {
                episode: 8,
                count: 1
            },
            {
                episode: 9,
                count: 2
            }
        ]
    },
    {
        title: 'The Falcon and the Winter Soldier',
        type: 'tv-show',
        season: 1,
        poster: theFalconAndTheWinterSoldierImageUrl,
        date: '2021-03-19',
        order_position: 25,
        tmdb_link: 'https://www.themoviedb.org/tv/88396-falcon-winter-soldier',
        post_credit_scenes: 2,
        post_credit_scenes_details: [
            {
                episode: 5,
                count: 1
            },
            {
                episode: 6,
                count: 1
            }
        ]
    },
    {
        title: 'Spider-Man : Far From Home',
        type: 'movie',
        poster: spiderManFarFromHomeImageUrl,
        date: '2019-07-03',
        order_position: 26,
        tmdb_link: 'https://www.themoviedb.org/movie/429617-spider-man-far-from-home',
        post_credit_scenes: 2
    },
    {
        title: 'Loki',
        type: 'tv-show',
        season: 1,
        poster: lokiImageUrl,
        date: '2021-06-09',
        order_position: 27,
        tmdb_link: 'https://www.themoviedb.org/tv/84958-loki',
        post_credit_scenes: 2,
        post_credit_scenes_details: [
            {
                episode: 4,
                count: 1
            },
            {
                episode: 6,
                count: 1
            }
        ]
    },
    {
        title: 'What If...?',
        type: 'animated-tv-show',
        season: 1,
        poster: whatIfImageUrl,
        date: '2021-08-11',
        order_position: 28,
        tmdb_link: 'https://www.themoviedb.org/tv/91363-what-if',
        post_credit_scenes: 1,
        post_credit_scenes_details: [
            {
                episode: 9,
                count: 1
            }
        ]
    },
    {
        title: 'Shang-Chi and the Legend of the Ten Rings',
        type: 'movie',
        poster: shangChiAndTheLegendOfTheTenRingsImageUrl,
        date: '2021-09-01',
        order_position: 29,
        tmdb_link: 'https://www.themoviedb.org/movie/566525-shang-chi-and-the-legend-of-the-ten-rings',
        post_credit_scenes: 2
    },
    {
        title: 'Eternals',
        type: 'movie',
        poster: eternalsImageUrl,
        date: '2021-11-03',
        order_position: 30,
        tmdb_link: 'https://www.themoviedb.org/movie/524434-eternals',
        post_credit_scenes: 2
    },
    {
        title: 'Hawkeye',
        type: 'tv-show',
        season: 1,
        poster: hawkeyeImageUrl,
        date: '2021-11-24',
        order_position: 31,
        tmdb_link: 'https://www.themoviedb.org/tv/88329-hawkeye',
        post_credit_scenes: -1,
        post_credit_scenes_details: []
    },

    {
        title: 'Spider-Man : No Way Home',
        type: 'movie',
        poster: spiderManNoWayHomeImageUrl,
        date: '2021-12-15',
        order_position: 32,
        tmdb_link: 'https://www.themoviedb.org/movie/634649-spider-man-no-way-home',
        post_credit_scenes: -1
    },
];

export default McuItems;