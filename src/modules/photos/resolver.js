import photos from '../../data/photos'

export default function resolve (root, { limit = 20, category }) {
  console.log('category', category)
  return photos.slice(0, limit)
}
