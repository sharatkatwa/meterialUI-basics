import React from 'react'
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from '@mui/material'
import { PhotoAlbum } from '@mui/icons-material'

import useStyles from './styles'

function App() {
  const classes = useStyles()
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoAlbum className={classes.icon} />
          <Typography variant='h6'>Photo Gallary</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm'>
            <Typography
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur possimus tempora omnis necessitatibus dolor libero
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See My Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    See All Photos
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          <Container className={classes.cardGrid} maxWidth='md'>
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image='https://source.unsplash.com/random/'
                      title='Image Title'
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant='h5'>
                        Heading
                      </Typography>
                      <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis nihil commodi ducimus placeat voluptatum
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button color='primary' size='small'>
                        View
                      </Button>
                      <Button color='primary' size='small'>
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography align='center' variant='h6' gutterBottom>
          Footer:
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary'>
          This is footer of the application try to write copywrite here
        </Typography>
      </footer>
    </>
  )
}

export default App
