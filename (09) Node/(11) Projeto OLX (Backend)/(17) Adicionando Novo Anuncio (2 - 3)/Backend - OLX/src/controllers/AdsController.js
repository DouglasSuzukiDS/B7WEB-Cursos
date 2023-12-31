const uuid = require('uuid/v4')
const jimp = require('jimp')

const Category = require('../models/Category')
const User = require('../models/User')
const Ad = require('../models/Ad')

const addImage = async(buffer) => {
   let newName = `${uuid()}.jpg`
   let tmpImg = await jimp.read(buffer)
   tmpImg.cover(500, 500).quality(80).write(`./public/media/${newName}`) // Redimenciona a imagem sem perder a qualidade
   return newName
}

module.exports = {
   getCategories: async(req, res) => {
      const cats = await Category.find()

      let categories = []

      for(let i in cats) {
         categories.push({
            ...cats[i]._doc,
            img: `${process.env.BASE}/assets/images/${cats[i].slug}.png`
         })
      }

      res.json({ categories })
   },

   addAction: async(req, res) => {
      let { title, price, priceneg, desc, cat, token } = req.body
      const user = await User.findOne({ token }).exec()

      if(!title || !cat) {
         res.json({ error: 'Título e/ou categoria não foram preenchidos' })
         return
      }

      if(price) { // R$ 8.000,35 = 8000.35
         price = price.replace('.', '').replace(',', '.').replace('R$ ', '')
         price = parseFloat(price)
      } else {
         price =  0
      }

      const newAd = new Ad()

      newAd.status = true
      newAd.idUser = user._id
      newAd.state = user.state
      newAd.dateCreated = new Date()
      newAd.title = title
      newAd.category = cat
      newAd.price = price
      newAd.priceNegotiable = (priceneg == 'true') ? true : false
      newAd.description = desc
      newAd.views = 0

      if(req.files && req.files.img) {
         if(req.files.img.length == undefined) { // Mandou so 1 imagem é um OBJ e não array

         } else {

         }
      }

      const info = await newAd.save() // So se tem o ID depois de salvar
      res.json({ id: info._id })
   },

   getList: async(req, res) => {

   },

   getItem: async(req, res) => {

   },

   editAction: async(req, res) => {

   },
}