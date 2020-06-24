module.exports = {
  theme: {
    extend: {
        colors: {
                teal: {
                 500: '#5fe0fb',
               },
                blue: {
                 500: '#1062ed',
               },
               indigo: {
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