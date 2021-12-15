import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { imagetools } from 'vite-imagetools'
import Blurhash from 'vite-plugin-blurhash'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    imagetools(),
    //Blurhash.default(
    //  {
    //    imageDir: false,
    //    images: {
    //      antman: '/src/assets/images/Ant-Man_(2015).jpg'
    //    }
    //  }
    //)
  ]
})