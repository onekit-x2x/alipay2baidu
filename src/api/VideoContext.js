export default class VideoContext {
  constructor(swanVideoContext) {
    this.swanVideoContext = swanVideoContext
  }

  play() {
    return this.swanVideoContext.play()
  }

  pause() {
    return this.swanVideoContext.pause()
  }

  stop() {
    return this.swanVideoContext.stop()
  }

  seek(position) {
    return this.swanVideoContext.seek(position)
  }

  requestFullScreen() {
    return this.swanVideoContext.requestFullScreen()
  }

  exitFullScreen() {
    return this.swanVideoContext.exitFullScreen()
  }
}
