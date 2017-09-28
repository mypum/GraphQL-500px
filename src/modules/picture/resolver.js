import { find } from 'lodash'

import photos from '../../data/photos'

export default function resolve (root, args) {
  return find(photos, { id: args.id })
}
