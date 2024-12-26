/** @type {import('tailwindcss').Config} */
module.exports = {
  mode : 'jit',
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bgimg': "url('./images/bg-main-desktop.png')",
        'fcard': "url('./images/bg-card-front.png')",
         'bcard': "url('./images/bg-card-back.png')",
      },
      colors:{
        'cusgri' : 'linear-gradient(to right,hsl(249, 99%, 64%),hsl(278, 94%, 30%))',
        'violet-gr': 'hsl(270, 3%, 87%)',
        'violet-gr-dr': 'hsl(279, 6%, 55%)',
        'violet-gr-v-dr': 'hsl(278, 68%, 11%)',
      },
      fontFamily: {
        'spgr': ['Space Grotesk','serif'],
        'lfr': ['Karla','serif'],
        'redhat': ['','serif'],
      },

      keyframes:{
        customAnimation:{
          '0%':{transform: 'translateX(0)', opacity:'1'},
          '25%':{transform: 'translateX(-5px)', opacity:'0.5'},
          '50%':{transform: 'translateX(0)', opacity:'1'},
          '75%':{transform: 'translateX(5px)', opacity:'0.5'},
          '100%':{transform: 'translateX(0)', opacity:'1'},
        }
      },
      animation:{
        custom: 'customAnimation 0.3s ease-in-out'
      }
    },
  },
  plugins: [],
}

