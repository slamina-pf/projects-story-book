import { useEffect, type ReactNode } from 'react'
import type { Preview } from '@storybook/react-vite'
import '../src/styles/tailwind.css'
import { ThemeProvider, useTheme, type Theme } from '../src/theme/ThemeProvider'

// Storybook-only glue: syncs the toolbar's global `theme` into the shared
// ThemeProvider so every story reflects it, no matter which one is open.
function GlobalThemeSync({ theme, children }: { theme: Theme; children: ReactNode }) {
  const { setTheme } = useTheme()
  useEffect(() => setTheme(theme), [theme, setTheme])
  return children
}

const preview: Preview = {
  initialGlobals: {
    theme: 'light'
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' }
        ],
        dynamicTitle: true
      }
    }
  },
  decorators: [
    (Story, context) => (
      <ThemeProvider>
        <GlobalThemeSync theme={context.globals.theme}>
          <Story />
        </GlobalThemeSync>
      </ThemeProvider>
    )
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;