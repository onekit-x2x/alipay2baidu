export default class LivePlayerContext {
  constructor(swanLivePlayerContext) {
    this.swanLivePlayerContext = swanLivePlayerContext
  }

  play() {
    return this.swanLivePlayerContext.play()
  }
}
