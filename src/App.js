import './assets/css/App.css';
import { Button, Typography, Box, Container, TextField } from '@mui/material';

function App() {
  return (
    <>
      <Container fixed>
        <Typography className="titulo-main" variant="h1">Calculator made in ReactJS</Typography>
        <Box className="container-calc">
          <div className="linha-calc">
            <Button variant="outlined">
              0
            </Button>
            <Button variant="outlined">
              .
            </Button>
            <Button variant="contained" color="primary" className="btn-maior">
              =
            </Button>
          </div>
          <div className="linha-calc">
            <Button variant="outlined">
              1
            </Button>
            <Button variant="outlined">
              2
            </Button>
            <Button variant="outlined">
              3
            </Button>
            <Button variant="contained" color="primary">
              +
            </Button>
          </div>
          <div className="linha-calc">
            <Button variant="outlined">
              4
            </Button>
            <Button variant="outlined">
              5
            </Button>
            <Button variant="outlined">
              6
            </Button>
            <Button variant="contained" color="primary">
              -
            </Button>
          </div>
          <div className="linha-calc">
            <Button variant="outlined">
              7
            </Button>
            <Button variant="outlined">
              8
            </Button>
            <Button variant="outlined">
              9
            </Button>
            <Button variant="contained" color="primary">
              X
            </Button>
          </div>
          <div className="linha-calc">
            <Button variant="contained" className="btn-maior transparent">
              C
            </Button>
            <Button variant="contained">
              %
            </Button>
            <Button variant="contained">
              /
            </Button>
          </div>
          <div className="linha-calc">
            <TextField fullWidth disabled id="fullWidth" />
          </div>
        </Box>

      </Container>
    </>
  );
}

export default App;
