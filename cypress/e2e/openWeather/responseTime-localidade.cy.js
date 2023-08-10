describe('Verificação responseTime', () => {
    it('Localidade 01 - timeLimit 1500', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather?lat=10&lon=10&appid=bdeffb4334da7d8676ee590ecc8fe4b9',
      })
      .then((res) =>{
        expect(res.status).to.be.equal(200)
        expect(res.duration).to.not.be.greaterThan(1500)
      })
    })

    it('Localidade 02 - timeLimit 1500', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather?lat=54&lon=23&appid=bdeffb4334da7d8676ee590ecc8fe4b9',
      })
      .then((res) =>{
        expect(res.status).to.be.equal(200)
        expect(res.duration).to.not.be.greaterThan(1500)
      })
    })

    it('Localidade inválida - timeLimit 1500', () => {
        cy.request({
          method: 'GET',
          url: 'https://api.openweathermap.org/data/2.5/weather?lat=540&lon=23&appid=bdeffb4334da7d8676ee590ecc8fe4b9',
          failOnStatusCode: false,
        })
        .then((res) =>{
          expect(res.status).to.be.equal(400)
          expect(res.duration).to.not.be.greaterThan(1500)
        })
      })

    it('API key invalida - timeLimit 1500', () => {
        cy.request({
          method: 'GET',
          url: 'https://api.openweathermap.org/data/2.5/weather?lat=40&lon=23&appid=bdeffb4334da7d8676ee590ecc8fe41b9',
          failOnStatusCode: false,
        })
        .then((res) =>{
          expect(res.status).to.be.equal(401)
          expect(res.duration).to.not.be.greaterThan(1500)
        })
      })      
})