import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={theme === 'light'}
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      <span
        aria-hidden="true"
        className={`theme-toggle__icon${theme === 'light' ? ' is-active' : ''}`}
      >
        <Sun size={16} strokeWidth={2} />
      </span>
      <span
        aria-hidden="true"
        className={`theme-toggle__icon${theme === 'dark' ? ' is-active' : ''}`}
      >
        <Moon size={16} strokeWidth={2} />
      </span>
    </button>
  )
}
