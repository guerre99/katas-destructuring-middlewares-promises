const express = require('express')
const fs = require('fs/promises')

const app = express()

const razas = []

app.get('/razas', (req, res) => {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'success') {
        const razas = Object.keys(data.message)
        let result = '<h1>Razas</h1>'
        razas.forEach((raza) => (result += `<p>${raza}</p>`))
        res.send(result)
      }
    })
})

app.get('/randomImg', (req, res) => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => res.send(`<img src="${data.message}" alt="random dog">`))
})

app.get('/:raza', (req, res) => {
  fetch(`https://dog.ceo/api/breed/${req.params.raza}/images`)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'success') {
        const urls = data.message
        let result = ``
        urls.forEach((url) => {
          result += `<img src="${url}" alt="random dog">`
        })
        res.send(result)
      }
    })
})

app.listen(3000, () => console.log('Server on...'))
