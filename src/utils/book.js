export const FONT_SIZE_LIST = [
    { fontSize: '12px' },
    { fontSize: '14px' },
    { fontSize: '16px' },
    { fontSize: '18px' },
    { fontSize: '20px' },
    { fontSize: '22px' },
    { fontSize: '24px' }
  ]

export const FONT_FAMILY = [
    { font: 'Default' },
    { font: 'Cabin' },
    { font: 'Days One' },
    { font: 'Montserrat' },
    { font: 'Tangerine' }
]

export function themeList (vue) {
  return [
    {
      alias: vue.$t('book.themeDefault'),
      name: 'Default',
      style: {
        body: {
          'color': '#4c5059',
          'background': '#cecece !important'
        }
      }
    },
    {
      alias: vue.$t('book.themeGold'),
      name: 'Gold',
      style: {
        body: {
          'color': '#5c5b56',
          'background': '#c6c2b6 !important'
        }
      }
    },
    {
      alias: vue.$t('book.themeEye'),
      name: 'Eye',
      style: {
        body: {
          'color': '#404c42',
          'background': '#a9c1a9 !important'
        }
      }
    },
    {
      alias: vue.$t('book.themeNight'),
      name: 'Night',
      style: {
        body: {
          'color': '#cecece',
          'background': '#000000 !important'
        }
      }
    }
  ]
}

// export function addCss (href) {
//   const link = document.createElement('link')
//   link.setAttribute('rel', 'stylesheet')
//   link.setAttribute('type', 'text/css')
//   link.setAttribute('href', href)
//   document.getElementsByTagName('head')[0].appendChild(link)
// }
