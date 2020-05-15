const sizes = {
  mobile: {
    minimum: '320px',
    maximum: '600px',
  },
  tablet: {
    minimum: '601px',
    maximum: '1200px',
  },
  desktop: {
    minimum: '1201px',
    maximum: '1800px',
  },
}

export const device = {
  mobile: `(min-width: ${sizes.mobile.minimum}) and (max-width: ${sizes.mobile.maximum})`,
  tablet: `(min-width: ${sizes.tablet.minimum}) and (max-width: ${sizes.tablet.maximum})`,
  desktop: `(min-width: ${sizes.desktop.minimum})`,
  largeDesktop: `(min-width: ${sizes.desktop.maximum})`,
}

export const viewport = {
  min: 320,
  max: 1600,
}

export const colors = {
  primaryDark: '#0C0E47',
  primary: '#57ACE4',
  primaryLight: '#C3F1FF',
  secondary: '#FE0000',
  black: '#000',
  white: '#FFF',
}

export const font = {
  family: 'Roboto',
  fluidSize: (min, max) => `
    font-size: calc(${min}px + (${max} - ${min}) * ((100vw - ${viewport.min}px) / (${viewport.max} - ${viewport.min})));
    @media ${device.largeDesktop} {
      font-size: ${max}px;
    }
  `,
}
