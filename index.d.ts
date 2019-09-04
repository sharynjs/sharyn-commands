declare function httpServer(options?: object): string
declare function serverlessDeploy(port?: string): string
declare function serverlessOffline(options?: object): string
declare function waitDockerPgReady(network: string): string
declare function webpackDevServer(port?: string): string

declare const commands: {
  DOCKER_COMPOSE_UP: string
  WEBPACK_PROD: string
  SHX_COPY_PUBLIC_TO_DIST: string
  SHX_RM_DIST_DOTWEBPACK: string

  httpServer: httpServer
  serverlessDeploy: serverlessDeploy
  serverlessOffline: serverlessOffline
  waitDockerPgReady: waitDockerPgReady
  webpackDevServer: webpackDevServer
}

export default commands
