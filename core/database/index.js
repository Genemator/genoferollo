const mongoose = require('mongoose');
const { Schema } = mongoose;

const connection = mongoose.createConnection('mongodb://localhost:27017/genoferollo', {
  useNewUrlParser: true,
});

mongoose.set('useCreateIndex', true);

connection.then(() => {
  console.log('DB connected')
});

connection.catch(err => {
  console.log('mongodb.connectionError', err)
});

connection.on('error', err => {
  console.log('mongodb.connectionError', err)
});
connection.on('disconnected', () => {
  console.log('mongodb.disconnected')
});

const collections = [
  {
    name: 'users',
    schema: new Schema({
      id: {
        type: Number,
        unique: true
      },
      username: {
        type: String,
        required: false
      },
      first_name: {
        type: String,
        required: false
      },
      last_name: {
        type: String,
        required: false
      },
      last_update: {
        type: Date,
        default: () => Date.now()
      },
    })
  },
];

module.exports = (collectionName) => {
  const collection = collections.find(el => el.name === collectionName);
  if (!collection) {
    throw new Error(`Collection not found: ${collectionName}`)
  }
  return connection.model(collectionName, collection.schema)
};
