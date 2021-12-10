import { React, useState, useEffect } from 'react';
import './assets/css/App.css';
import { Button, Typography, Box, Container, TextField } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `A resposta é ${count}`;
  });
  function apagarInput() {
    setCount(0);
  }
  const todosBtn = document.querySelectorAll('button');
  todosBtn.forEach((btn) => {
    if (btn.innerText >= 0 || btn.innerText == '.') {
      btn.addEventListener('click', pegarValor(btn.innerText));
    }
  });
  function pegarValor(valorBotao) {
    console.log(valorBotao);
  }
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
            <Button
              onClick={() => {
                setCount(count + 1);
              }}
              variant="contained" color="primary" className="btn-maior">
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
            <Button
              onClick={() => {
                apagarInput();
              }}
              variant="contained" className="btn-maior transparent">
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
            <TextField fullWidth disabled id="fullWidth" value={count} />
          </div>
        </Box>

      </Container>
    </>
  );
}

export default App;
