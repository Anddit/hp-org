module.exports = {
  theme: {
    extend: {
        colors: {
                teal: {
                 500: '#5fe0fb',
               },
                blue: {
                  100: '#ebf2fe',
                 500: '#1062ed',
                 800: '#072d6c',
                 900: '#041635',
               },
               indigo: {
                100: '#ececfc73',
                600: '#4544e2',
                800: '#1a1c4f',
               }
             }
           }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/**/*.html',
      './src/**/*.vue'
    ],
    options: {
          whitelistPatterns: [ 
        /-(leave|enter|appear)(|-(to|from|active))$/, 
        /^(?!(|.*?:)cursor-move).+-move$/,
            /^router-link(|-exact)-active$/
          ],
        },
  }
}