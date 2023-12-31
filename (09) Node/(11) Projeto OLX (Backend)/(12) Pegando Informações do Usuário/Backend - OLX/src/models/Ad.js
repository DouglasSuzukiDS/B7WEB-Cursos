const mongoose = require('mongoose') // Aqui ja vem com a conexão
mongoose.Promise = global.Promise

const mdodelSchema = new mongoose.Schema({
   idUser: String,
   state: String,
   category: String,
   images: [Object],
   dateCreated: Date,
   title: String,
   price: Number,
   priceNegotiable: Boolean,
   description: String,
   views: Number,
   status: String
})

const modelName = 'Ad'

if(mongoose.connection && mongoose.connection.models[modelName]) {
   module.exports = mongoose.connection.models[modelName]
} else {
   module.exports = mongoose.model(modelName, mdodelSchema)
}