export default {
  initialColorModeName: 'light',
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#cc1'
      },
      tomato: {
        text: '#565656',
        background: 'tomato',
        primary: 'tomato',
      },
      deep: {
        text: 'hsl(210, 50%, 96%)',
        background: 'hsl(230, 25%, 18%)',
        primary: 'hsl(260, 100%, 80%)',
      },
    }
  },
}
