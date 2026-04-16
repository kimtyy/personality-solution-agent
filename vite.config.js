import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'pwa-icon.png'],
      manifest: {
        name: 'Sovereign AI Personality Consultant',
        short_name: 'SovereignAI',
        description: '입체적 성격 분석 및 비즈니스 솔루션 프리미엄 서비스',
        theme_color: '#0F172A',
        icons: [
          {
            src: 'pwa-icon.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-icon.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
