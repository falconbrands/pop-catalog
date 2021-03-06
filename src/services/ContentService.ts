export interface CatalogItem {
  label: string
  title: string
  description: string
  dimensions?: string
  images: string[]
}

export class ContentService {

  get catalog (): CatalogItem[] {
    return [
      {
        label: 'POP-00008',
        title: 'Cartridge / Battery / Disposable Display (White)',
        description: 'This elegant display features a white and clear acrylic base with a gold mirror plex CRU logo. The base is designed to fit two CRU Cannabis battery boxes on either end, while the center slots are designated for each type of CRU Cartridge box. The smaller stations in front are designed to hold their respective cartridge and battery hardware. ',
        dimensions: '19 &times; 4.25 &times; 7.5',
        images: [
          require('../assets/POP-00008-1.png'),
          require('../assets/POP-00008-2.png'),
          require('../assets/POP-00008-3.png'),
        ],
      },
      {
        label: 'POP-00009',
        title: 'CRU Eighth Box Display (White)',
        description: 'This stylish display features a white and clear gloss acrylic base accented by a gold mirror plex CRU logo. Perfect for featuring new strains, exclusive offers, or sale items. This display is designed to feature four CRU eighth boxes.',
        dimensions: '19 &times; 4.25 &times; 7.5',
        images: [
          require('../assets/POP-00009-1.png'),
          require('../assets/POP-00009-2.png'),
          require('../assets/POP-00009-3.png'),
        ],
      },
      {
        label: 'POP-00010',
        title: 'Disposable Vape and/or Infusion Preroll Display (White)',
        description: 'This versatile display can be used to hold six CRU Cannabis .75g pre-rolled joints or .3ml disposable vape pen boxes. Featuring a sturdy base trimmed in white acrylic with clear gloss embellishments and a gold mirror plex CRU logo accent.',
        dimensions: '19 &times; 4.25 &times; 7.5',
        images: [
          require('../assets/POP-00010-1.png'),
          require('../assets/POP-00010-2.png'),
          require('../assets/POP-00010-3.png'),
        ]
      },
      {
        label: 'POP-00011',
        title: 'Disposable Vape and/or Infusion Preroll Display (Black)',
        description: 'This versatile display can be used to hold six CRU Cannabis .75g pre-rolled joints or .3ml disposable vape pen boxes. Designed with a sturdy base trimmed in black acrylic with clear gloss embellishments and a gold mirror plex CRU logo accent.',
        dimensions: '19 &times; 4.25 &times; 7.5',
        images: [
          require('../assets/POP-00011-1.png'),
          require('../assets/POP-00011-2.png'),
          require('../assets/POP-00011-3.png'),
        ],
      },
      {
        label: 'POP-00012',
        title: 'CRU Eighth Box Display (Black)',
        description: 'This stylish display features a black and clear gloss acrylic base accented by a gold mirror plex CRU logo. Perfect for featuring new strains, exclusive offers, or sale items. This display is designed to feature four CRU eighth boxes',
        dimensions: '19 &times; 4.25 &times; 7.5',
        images: [
          require('../assets/POP-00012-1.png'),
          require('../assets/POP-00012-2.png'),
          require('../assets/POP-00012-3.png'),
        ],
      },
      {
        label: 'POP-00013',
        title: 'Cartridge / Battery / Disposable Display (Black)',
        description: 'This elegant display features a black and clear acrylic base with a gold mirror plex CRU logo. The base is designed to fit two CRU Cannabis battery boxes on either end, the center slots are designated for each type of CRU Cartridge box. The smaller stations in front are designed to hold their respective cartridge and battery hardware.',
        dimensions: '19 &times; 4.25 &times; 7.5',
        images: [
          require('../assets/POP-00013-1.png'),
          require('../assets/POP-00013-2.png'),
          require('../assets/POP-00013-3.png'),
        ],
      },
      {
        label: 'POP-00014',
        title: 'CRU Crown Light-Up Eighth Box & Sample Jar Display',
        description: 'This sophisticated black acrylic light-up display is designed to hold four CRU eighth boxes in the back and four glass sample jars upfront. When lit, the white and clear acrylic floor plate softly glows, illuminating the eighth boxes and highlighting the sample jars. This display is accented with a gold mirror plex CRU Crown emblem on the top and the tagline "Ignite your Senses" on the bottom.',
        dimensions: '19 &times; 6.5 &times; 8.25',
        images: [
          require('../assets/POP-00014-1.png'),
          require('../assets/POP-00014-2.png'),
          require('../assets/POP-00014-3.png'),
        ],
      },
      {
        label: 'POP-00015',
        title: 'CRU Light-Up Eighth Box & Sample Jar Display',
        description: 'This sophisticated black acrylic light-up display is designed to hold four CRU eighth boxes in the back and four glass sample jars upfront. When lit, the white and clear acrylic floor plate softly glows, illuminating the eighth boxes and highlighting the sample jars. This display is accented with a white acrylic CRU logo and a gold mirror plex CRU Crown emblem on the bottom.',
        dimensions: '19 &times; 6.5 &times; 8.25',
        images: [
          require('../assets/POP-00015-1.png'),
          require('../assets/POP-00015-2.png'),
          require('../assets/POP-00015-3.png'),
        ],
      },
      {
        label: 'POP-00016',
        title: 'CRU, Littles, & High Garden Standing Mat',
        description: 'These extremely plush and static dissipative standing mats are made of nylon yard with SBR rubber borders and backing. Designed for high traffic in indoor applications and treated with StainStopper™ for easy cleaning, vacuum for dry soils and steam for wet soils. Perfect for placing in front of display cases, POS stations, or entrances.',
        dimensions: '35 x 59 x 5/16',
        images: [
          require('../assets/POP-00016-1.jpg'),
          require('../assets/POP-00016-2.jpg'),
          require('../assets/POP-00016-3.jpg'),
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
      // }
    ]
  }

}

export default new ContentService()