import { get } from 'lodash'
import photos from '../../data/photos'
import allPhotos from '../../data/allPhotos'

export default function resolve (root, { limit = 20, category }) {
  if (typeof category === 'undefined') {
    return photos.slice(0, limit)
  }
  return get(allPhotos, `${category}.photos`).slice(0, limit)
}
