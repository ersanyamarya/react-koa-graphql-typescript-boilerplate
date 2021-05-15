import { ApolloServer } from 'apollo-server-koa'
import schema from '../resources'
import apolloConfig from '../config/apollo'
export default (): ApolloServer => {
  return new ApolloServer({
    ...apolloConfig,
    schema,
  })
}
