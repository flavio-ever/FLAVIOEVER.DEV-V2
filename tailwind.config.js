const paletteColors = {
  purple: {
    1: '#251D3A',
    2: '#25272E',
    3: '#C0BAED',
    4: '#E3E0FF'
  },
  white: {
    1: '#FFFFFF'
  },
  orange: {
    1: '#FF7700'
  }
}

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],

    extend: {
      animation: ['motion-safe']
    }
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    fontFamily: {
      FiraCode: ['Fira Code', 'monospace']
    },
    textColor: paletteColors,
    extend: {
      colors: paletteColors,
      backgroundImage: {}
    },
    fill: {
      current: 'currentColor'
    },
    keyframes: {
      'jump-in-up': {
        from: {
          transform: 'translateY(0px)'
        },
        to: {
          transform: 'translateY(-5px)'
        }
      },
      'jump-out-down': {
        '0%': {
          transform: 'translateY(-5px)'
        },
        '100%': {
          transform: 'translateY(0)'
        }
      }
    },
    animation: {
      'jump-in-up': 'jump-in-up 0.5s ease-out forwards',
      'jump-out-down': 'jump-out-down 0.2s ease-out'
    }
  },
  plugins: []
}
