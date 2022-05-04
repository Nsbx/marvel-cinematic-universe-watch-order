import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { imagetools } from 'vite-imagetools'
import { blurHash } from 'vite-plugin-blurhash'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    imagetools(),
    blurHash(
      {
        imageDir: false,
        images: {
          'captain-america-the-first-avenger'           : "/src/assets/images/Captain_America_-_First_Avenger_(2011).jpg",
          'captain-marvel'                              : "/src/assets/images/Captain_Marvel_(2019).jpg",
          'iron-man'                                    : "/src/assets/images/Iron_Man_(2008).jpg",
          'iron-man-2'                                  : "/src/assets/images/Iron_Man_2_(2010).jpg",
          'the-incredible-hulk'                         : "/src/assets/images/The_Incredible_Hulk_(2008).jpg",
          'thor'                                        : "/src/assets/images/Thor_(2011).jpg",
          'the-avengers'                                : "/src/assets/images/The_Avengers_(2012).jpg",
          'iron-man-3'                                  : "/src/assets/images/Iron_Man_3_(2013).jpg",
          'thor-the-dark-world'                         : "/src/assets/images/Thor_-_The_Dark_World_(2013).jpg",
          'captain-america-the-winter-soldier'          : "/src/assets/images/Captain_America_-_The_Winter_Soldier_(2014).jpg",
          'guardians-of-the-galaxy'                     : "/src/assets/images/Guardians_of_the_Galaxy_(2014).jpg",
          'guardians-of-the-galaxy-vol-2'               : "/src/assets/images/Guardians_of_the_Galaxy_Vol._2_(2017).jpg",
          'avengers-age-of-ultron'                      : "/src/assets/images/Avengers_Age_of_Ultron_(2015).jpg",
          'ant-man'                                     : "/src/assets/images/Ant-Man_(2015).jpg",
          'captain-america-civil-war'                   : "/src/assets/images/Captain_America_-_Civil_War_(2016).jpg",
          'black-widow'                                 : "/src/assets/images/Black_Widow_(2021).jpg",
          'spider-man-homecoming'                       : "/src/assets/images/Spider-Man_-_Homecoming_(2017).jpg",
          'doctor-strange'                              : "/src/assets/images/Doctor_Strange_(2016).jpg",  
          'black-panther'                               : "/src/assets/images/Black_Panther_(2018).jpg", 
          'thor-ragnarok'                               : "/src/assets/images/Thor_-_Ragnarok_(2017).jpg",
          'ant-man-and-the-wasp'                        : "/src/assets/images/Ant-Man_and_the_Wasp_(2018).jpg",
          'avengers-infinity-war'                       : "/src/assets/images/Avengers_Infinity_War_(2018).jpg",
          'avengers-endgame'                            : "/src/assets/images/Avengers_Endgame_(2019).jpg",
          'wanda-vision'                                : "/src/assets/images/WandaVision_(2021).jpg",
          'the-falcon-and-the-winter-soldier'           : "/src/assets/images/The_Falcon_and_the_Winter_Soldier_(2021).jpg",
          'spider-man-far-from-home'                    : "/src/assets/images/Spider-Man_-_Far_From_Home_(2019).jpg",
          'spider-man-no-way-home'                      : "/src/assets/images/Spider-Man_No_Way_Home_(2021).jpg",
          'loki'                                        : "/src/assets/images/Loki_(2021).jpg",
          'what-if'                                     : "/src/assets/images/What_If_(2021).jpg",
          'shang-chi-and-the-legend-of-the-ten-rings'   : "/src/assets/images/Shang-Chi_and_the_Legend_of_the_Ten_Rings_(2021).jpg",
          'eternals'                                    : "/src/assets/images/Eternals_(2021).jpg",
          'hawkeye'                                     : "/src/assets/images/Hawkeye_(2021).jpg",
          'moon-knight'                                 : "/src/assets/images/Moon_Knight_(2022).jpg",
          'doctor-strange-in-the-multiverse-of-madness' : "/src/assets/images/Doctor_Strange_in_the_Multiverse_of_Madness_(2022).jpg",
          'ms-marvel'                                   : "/src/assets/images/Ms._Marvel_(2022).jpg",
          'thor-love-and-thunder'                       : "/src/assets/images/Thor_Love_and_Thunder_(2022).jpg",
        }
      }
    )
  ]
})