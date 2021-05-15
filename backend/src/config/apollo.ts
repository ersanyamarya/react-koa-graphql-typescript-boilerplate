import env from '../utils/env'

export default {
  debug: env('APOLLO_DEBUG', 'true') === 'true',
  playground: env('APOLLO_PLAYGROUND_ENABLE', 'true') === 'true',
  tracing: env('APOLLO_TRACING', 'true') === 'true',
  introspection: env('APOLLO_INTROSPECTION', 'true') === 'true',
}
