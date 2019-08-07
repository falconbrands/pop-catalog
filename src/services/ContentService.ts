export interface CatalogItem {
  label: string
  title: string
  description: string
  images: string[]
}

export class ContentService {

  get catalog (): CatalogItem[] {
    return [
      {
        label: 'POP-00008',
        title: 'CRU Cartridge & Battery Display (White)',
        description: 'This elegant display features a white and clear acrylic base with a gold mirror plex CRU logo. The base is designed to fit two CRU Cannabis battery boxes on either end, while the center slots are designated for each type of CRU Cartridge box. The smaller stations in front are designed to hold their respective cartridge and battery hardware. ',
        images: [
          'http://placekitten.com/g/500/300',
          'http://placekitten.com/g/500/400',
        ],
      },
      {
        label: 'POP-00008',
        title: 'CRU Cartridge & Battery Display (White)',
        description: 'This elegant display features a white and clear acrylic base with a gold mirror plex CRU logo. The base is designed to fit two CRU Cannabis battery boxes on either end, while the center slots are designated for each type of CRU Cartridge box. The smaller stations in front are designed to hold their respective cartridge and battery hardware.',
        images: [
          'http://placekitten.com/g/500/300',
          'http://placekitten.com/g/500/400',
        ],
      },
      // {
      //   label: 'label',
      //   title: 'title',
      //   description: 'somecontent',
      //   images: [
      //     require('../assets/logo.png'),
      //     require('../assets/logo.png'),
      //   ],
      // },
      // {
      //   label: 'label',
      //   title: 'title',
      //   description: 'somecontent',
      //   images: [
      //     require('../assets/logo.png'),
      //     require('../assets/logo.png'),
      //   ],
      // }
    ]
  }

}

export default new ContentService()