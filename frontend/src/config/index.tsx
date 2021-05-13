const log = {
  level: process.env['LOG_LEVEL'] || 'info',
}

const environment = {
  current: process.env['NODE_ENV'] || 'development',
  is: {
    dev: process.env['NODE_ENV'] !== 'production',
    prod: process.env['NODE_ENV'] === 'production',
  },
}

const graphqlURL = process.env['GRAPHQL_URL'] || 'http://localhost:3000/graphql'

export { log, environment, graphqlURL }
