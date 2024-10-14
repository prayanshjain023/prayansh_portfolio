import { ThemeProvider } from './ThemeProvider'
import Portfolio from './Portfolio'

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}