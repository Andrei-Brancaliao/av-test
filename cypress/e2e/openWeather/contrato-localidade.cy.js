describe('Verificação do clima', () => {
  //min and max values not avaliable on documentation
    it('Localidade 01 - Teste de contrato', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather?lat=10&lon=10&appid=bdeffb4334da7d8676ee590ecc8fe4b9',
      })
      .then((res) =>{
        expect(res.status).to.be.equal(200)
        expect(res.body).to.not.be.empty

        //coord
        expect(res.body.coord.lat).to.be.equal(10)
        expect(res.body.coord.lon).to.be.equal(10)
        
        //weather
        expect(res.body.weather).to.be.an('array')
        expect(res.body.weather[0].id).to.be.a('number')
        expect(res.body.weather[0].main).to.be.a('string')
        expect(res.body.weather[0].description).to.be.a('string')
        expect(res.body.weather[0].icon).to.be.a('string')

        //base
        expect(res.body.base).to.be.a('string')

        //main
        expect(res.body.main).to.not.be.an('array')
        expect(res.body.main.temp).to.be.a('number')
        expect(res.body.main.feels_like).to.be.a('number')
        expect(res.body.main.temp_min).to.be.a('number')
        expect(res.body.main.temp_max).to.be.a('number')
        expect(res.body.main.pressure).to.be.a('number')
        expect(res.body.main.humidity).to.be.a('number')
        expect(res.body.main.sea_level).to.be.a('number')
        expect(res.body.main.grnd_level).to.be.a('number')

        //visibility
        expect(res.body.visibility).to.be.a('number')

        //wind
        expect(res.body.wind).to.not.be.an('array')
        expect(res.body.wind.speed).to.be.a('number')
        expect(res.body.wind.deg).to.be.a('number')
        expect(res.body.wind.gust).to.be.a('number')

        //clouds
        expect(res.body.clouds).to.not.be.an('array')
        expect(res.body.clouds.all).to.be.a('number')

        //dt 
        expect(res.body.dt).to.be.a('number')

        //sys
        expect(res.body.sys).to.not.be.an('array')
        expect(res.body.sys.country).to.be.a('string')
        expect(res.body.sys.sunrise).to.be.a('number')
        expect(res.body.sys.sunset).to.be.a('number')

        //timezone
        expect(res.body.timezone).to.be.a('number')

        //id
        expect(res.body.id).to.be.a('number')  
        
        //name
        expect(res.body.name).to.be.a('string')
        
        //cod
        expect(res.body.cod).to.be.a('number')  
      })
    })

    it('Localidade 02 - Teste de contrato', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather?lat=54&lon=23&appid=bdeffb4334da7d8676ee590ecc8fe4b9',
      })
      .then((res) =>{
        expect(res.status).to.be.equal(200)
        expect(res.body).to.not.be.empty

        //coord
        expect(res.body.coord.lat).to.be.equal(54)
        expect(res.body.coord.lon).to.be.equal(23)
        
        //weather
        expect(res.body.weather).to.be.an('array')
        expect(res.body.weather[0].id).to.be.a('number')
        expect(res.body.weather[0].main).to.be.a('string')
        expect(res.body.weather[0].description).to.be.a('string')
        expect(res.body.weather[0].icon).to.be.a('string')

        //base
        expect(res.body.base).to.be.a('string')

        //main
        expect(res.body.main).to.not.be.an('array')
        expect(res.body.main.temp).to.be.a('number')
        expect(res.body.main.feels_like).to.be.a('number')
        expect(res.body.main.temp_min).to.be.a('number')
        expect(res.body.main.temp_max).to.be.a('number')
        expect(res.body.main.pressure).to.be.a('number')
        expect(res.body.main.humidity).to.be.a('number')
        expect(res.body.main.sea_level).to.be.a('number')
        expect(res.body.main.grnd_level).to.be.a('number')

        //visibility
        expect(res.body.visibility).to.be.a('number')

        //wind
        expect(res.body.wind).to.not.be.an('array')
        expect(res.body.wind.speed).to.be.a('number')
        expect(res.body.wind.deg).to.be.a('number')
        expect(res.body.wind.gust).to.be.a('number')

        //clouds
        expect(res.body.clouds).to.not.be.an('array')
        expect(res.body.clouds.all).to.be.a('number')

        //dt 
        expect(res.body.dt).to.be.a('number')

        //sys
        expect(res.body.sys).to.not.be.an('array')
        expect(res.body.sys.country).to.be.a('string')
        expect(res.body.sys.sunrise).to.be.a('number')
        expect(res.body.sys.sunset).to.be.a('number')

        //timezone
        expect(res.body.timezone).to.be.a('number')

        //id
        expect(res.body.id).to.be.a('number')  
        
        //name
        expect(res.body.name).to.be.a('string')
        
        //cod
        expect(res.body.cod).to.be.a('number')  
      })
    })

    it('Latitude invalida', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather?lat=100&lon=10&appid=bdeffb4334da7d8676ee590ecc8fe4b9',
        failOnStatusCode: false,
      })
      .then((res) =>{
        expect(res.status).to.be.equal(400)
        expect(res.body.cod).to.be.equal('400')
        expect(res.body.message).to.be.a('string').equal('wrong latitude')
      })
    })

    it('Longitude invalida', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather?lat=10&lon=500&appid=bdeffb4334da7d8676ee590ecc8fe4b9',
        failOnStatusCode: false,
      })
      .then((res) =>{
        expect(res.status).to.be.equal(400)
        expect(res.body.cod).to.be.equal('400')
        expect(res.body.message).to.be.a('string').equal('wrong longitude')
      })
    })

    it('API-key invalida', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather?lat=10&lon=10&appid=bdeffb4334da7d8676ee590ecc8fe4b91',
        failOnStatusCode: false,
      })
      .then((res) =>{
        expect(res.status).to.be.equal(401)
        expect(res.body.cod).to.be.equal(401) 
        //cod está como number - resultado 200 e 400 como string
        expect(res.body.message).to.be.a('string').contains('Invalid API key')
      })
    })
})