/* eslint-disable import/first */
import { Logger } from 'log4js'

import serverConfig from './config/server'
import gracefulShutdownExtension from './extensions/graceful-shutdown'
import koaExtension from './extensions/koa'
import exceptionExtension from './extensions/exception'
import { connectMongoDB, disconnectMongoDB } from './extensions/mongodb'
import logger from './utils/logger'

type listenConfig = {
  port: number
  hostname: string
}
const a = () => ({
  status: 'trying',
})
const start = async (config: listenConfig, logger: Logger): Promise<void> => {
  exceptionExtension(logger)
  const mongoDB = connectMongoDB(logger)

  const app = koaExtension(logger, { mongoDB: mongoDB || mongoDB.healthCheck ? mongoDB.healthCheck : a })
  const server = app
    .listen(config.port, async () => {
      logger.info(`Server listening on port ${config.port}`)
    })
    .on('error', err => {
      logger.error(err)
    })
  const onShutdown = async (): Promise<void> => {
    disconnectMongoDB(logger)
  }

  gracefulShutdownExtension(server, logger, onShutdown)
}

start({ port: serverConfig.port, hostname: serverConfig.hostname }, logger)

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => logger.warn('Module disposed. '))
}
