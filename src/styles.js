import { makeStyles } from '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()
const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: theme.palette.background.paper,
    padding: '2rem',
  },
  icon: {
    marginRight: '0.5rem',
  },
  buttons: {
    marginTop: '2rem',
  },
  cardGrid: {
    padding: '1rem 0',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {},
}))

export default useStyles
