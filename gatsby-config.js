module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Weather - DarkSky and OpenWeather`,
  /*  pathPrefix: '/static-gatsby-weather',*/
  },
  plugins: [
 {
      resolve: 'gatsby-source-openweathermap',
      options: {
        apikey: '<f0cd1c38fc3590795bff3278a0c3fd0a>',
        location: 'Philadelphia',
        units: 'imperial',
        type: 'weather'
      },
    },
  
    {
      resolve: 'gatsby-source-darksky',
      options: {
        key: '<f0cd1c38fc3590795bff3278a0c3fd0a>',
        latitude: '39.9526',
        longitude: '-75.1652',
        exclude: ['minutely']
      },
    } 
    
  ]
}