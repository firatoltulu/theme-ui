/** @jsx jsx */
import { jsx, ThemeProvider, Container } from 'theme-ui'

export default props => (
  <ThemeProvider
    theme={{
      styles: {
        p: {
          ':first-of-type': {
            variant: 'text.display',
            fontSize: [5, 6],
          },
          fontWeight: 'bold',
          mt: 0,
          mb: 3,
        },
        h1: {
          fontSize: [3, 3, 4],
          fontWeight: 'heading',
          letterSpacing: 'initial',
          mt: 0,
          mb: 4,
        },
        a: {
          variant: 'links.button',
          mr: 3,
          mb: 3,
        },
      },
    }}>
    <div
      sx={{
        py: [5, 6],
      }}>
      <Container>{props.children}</Container>
    </div>
  </ThemeProvider>
)
