import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getInitialTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#101010' : '#f2efe9')

    try {
      window.localStorage.setItem('kinetic-theme', theme)
    } catch (error) {
      console.error('Unable to persist the selected theme.', error)
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider.')
  }

  return context
}
