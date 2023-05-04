// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'nuxt3练习项目',
      meta: [
        {
          name: 'description',
          content: '使用 nuxt3 做的练习项目'
        },
        {
          name: 'keywords',
          content: 'nuxt3'
        }
      ],
      script: [
        { src: '//at.alicdn.com/t/c/font_2562583_55i2sdzxgga.js' }
      ],
      noscript: [{ children: 'javascript is required' }]
    }
  },
  css: ['normalize.css', '@/assets/styles/global.scss'],
  modules: ['@pinia/nuxt', '@element-plus/nuxt'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/variables.scss" as *;'
        }
      }
    }
  }
})

