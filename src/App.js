import { React, useState, useEffect } from 'react';
import './assets/css/App.css';
import { Button, Typography, Box, Container, TextField } from '@mui/material';
import { mostraMensagemDeErro, tiraMensagemDeErro } from './controller/mensagemErro';

function App() {
  const [resultado, setResultado] = useState("");

  useEffect(() => {
    document.title = `A resposta é ${resultado}`;
  });

  const handleClick = (e) => {
    setResultado(resultado.concat(e.target.name));
    tiraMensagemDeErro();
  }
  const apagarTudo = () => {
    setResultado("");
  }
  const backSpace = () => {
    setResultado(resultado.slice(0, -1));
  }

  const calcula = () => {
    try {
      setResultado(eval(resultado).toString());
    } catch (error) {
      setResultado("");
      mostraMensagemDeErro();
    }
  }

  return (
    <>
      <Container fixed>
        <Typography className="titulo-main" variant="h1">Calculator made in ReactJS</Typography>
        <Box className="container-calc">
          <div className="linha-calc">
            <Button name="0" onClick={handleClick} variant="outlined">
              0
            </Button>
            <Button name="." onClick={handleClick} variant="outlined">
              .
            </Button>
            <Button id="resultadoFinal" onClick={calcula}
              variant="contained" color="primary" className="btn-maior">
              =
            </Button>
          </div>
          <div className="linha-calc">
            <Button name="1" onClick={handleClick} variant="outlined">
              1
            </Button>
            <Button name="2" onClick={handleClick} variant="outlined">
              2
            </Button>
            <Button name="3" onClick={handleClick} variant="outlined">
              3
            </Button>
            <Button name="+" onClick={handleClick} variant="contained" color="primary">
              +
            </Button>
          </div>
          <div className="linha-calc">
            <Button name="4" onClick={handleClick} variant="outlined">
              4
            </Button>
            <Button name="5" onClick={handleClick} variant="outlined">
              5
            </Button>
            <Button name="6" onClick={handleClick} variant="outlined">
              6
            </Button>
            <Button name="-" onClick={handleClick} variant="contained" color="primary">
              -
            </Button>
          </div>
          <div className="linha-calc">
            <Button name="7" onClick={handleClick} variant="outlined">
              7
            </Button>
            <Button name="8" onClick={handleClick} variant="outlined">
              8
            </Button>
            <Button name="9" onClick={handleClick} variant="outlined">
              9
            </Button>
            <Button name="*" onClick={handleClick} variant="contained" color="primary">
              X
            </Button>
          </div>
          <div className="linha-calc">
            <Button
              id="apagarTudo"
              onClick={apagarTudo}
              variant="contained" className="btn-maior transparent" >
              Clear
            </Button>
            <Button id="apagarUm" onClick={backSpace} variant="contained">
              C
            </Button>
            <Button name="/" onClick={handleClick} variant="contained">
              /
            </Button>
          </div>
          <div className="linha-calc">
            <TextField fullWidth disabled id="fullWidth" value={resultado} id="input-resultado" />
          </div>
        </Box>

      </Container>
    </>
  );

}

export default App;
