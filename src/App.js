import './assets/css/App.css';
import { Button, Typography, Box, Container } from '@mui/material';

function App() {
  return (
    <>
      <Container fixed>
        <Typography className="titulo-main" variant="h1">Calculator made in ReactJS</Typography>
        <Box className="container-calc">
          <Button variant="contained" color="primary">
            1
          </Button>
          <Button variant="contained" color="primary">
            2
          </Button>
          <Button variant="contained" color="primary">
            3
          </Button>
          <Button variant="contained" color="primary">
            4
          </Button>
        </Box>

      </Container>
    </>
  );
}

export default App;
