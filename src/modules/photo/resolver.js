import { find, get } from 'lodash'

import photos from '../../data/photos'
import allPhotos from '../../data/allPhotos'

export default function resolve (root, {id, category}) {
  if (typeof category === 'undefined') {
    return find(photos, { id: id })
  }
  return find(get(allPhotos, `${category}.photos`), { id: id })
}
