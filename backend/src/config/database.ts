import env from '../utils/env'

export default {
  mongodb: {
    uri: env('MONGODB_CONNECTION_URL', 'mongodb://mongo:27017/boilerplate'),
    options: {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  },
}
