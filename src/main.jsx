import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement = React.createElement(
//   'a',
//   {href:'https//google',target: '_blank'},
//   'click me to visit gogle'
// )


createRoot(document.getElementById('root')).render(
// reactElement

  <StrictMode>
    <App />
  </StrictMode>,
)
