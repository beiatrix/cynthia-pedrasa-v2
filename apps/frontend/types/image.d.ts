export interface Image {
  _type: string
  asset: {
    _ref: string
    _type: string
  }
  crop: {
    bottom: number
    _type: string
    right: number
    top: number
    left: number
  }
  hotspot: {
    width: number
    x: number
    y: number
    height: number
    _type: string
  }
}
