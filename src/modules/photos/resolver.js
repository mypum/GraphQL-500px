import photos from '../../data/photos'

export default function resolve (root, { limit = 20 }) {
  return photos.slice(0, limit)
}
