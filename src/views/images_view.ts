import Image from '../models/Image'

export default {
  render(image: Image) {
    const baseURL =
      process.env.NODE_ENV === 'production'
        ? process.env.PUBLIC_URL
        : 'http://localhost:3000'

    return {
      id: image.id,
      url: `${baseURL}/uploads/${image.path}`
    }
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image))
  }
}
