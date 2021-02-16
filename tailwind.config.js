module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class',
  prefix: 'tw-',
  important: true,
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        normal: "#b2bec3",
        fighting: '#ff9f43',
        flying: '#0984e3',
        poison: '#6c5ce7',
        ground: '#58391c',
        rock: '#c2b092',
        bug: '#badc58',
        ghost: '#a29bfe',
        steel: '#7f8fa6',
        fire: '#ee5253',
        water: '#0abde3',
        grass: '#27ae60',
        electric: '#f6b93b',
        psychic: '#fd79a8',
        ice: '#7ed6df',
        dragon: '#22a6b3',
        dark: '#636e72',
        fairy: '#FDA7DF',
        unknown: '#353b48',
        shadow: '#833471',
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
