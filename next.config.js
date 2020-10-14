require('dotenv').config()

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const optimizedImages = require('next-optimized-images')
const withPWA = require('next-pwa')
const path = require('path')

const plugins = [
  [withBundleAnalyzer({})],
  [
    withImages({
      esModule: true
    })
  ],
  [optimizedImages, {}],
  [
    withPWA({
      pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public'
      }
    })
  ]
]

const nextConfiguration = {
  env: {},

  webpack: config => {
    config.resolve.alias['public'] = path.join(__dirname, 'public')

    return config
  }
}

module.exports = withPlugins([...plugins], nextConfiguration)
