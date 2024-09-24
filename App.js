import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import { Header, AppIme, AppLogo, Trazilica, TrazilicaIkona, TrazilicaInput } from './components/header';
import { ReceptiContainer, CiliReceptTekst, SastojciTekst, SlikaJela, ImeRecepta } from './components/recepti';

const APP_ID = "4c6a3b79";
const APP_KEY = "2f7883c61a609754642385cbdf34edf5";

const Container = styled.div`
display: flex;
flex-direction: column
`;

const ReceptiListaContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
gap: 20px;
justify-content: space-evenly;
`;

const Placeholder = styled.img`
width: 400px;
height: 400px;
margin: 150px;
opacity: 50%;
`;

const ReceptComponent = (props) => {
  const [show, setShow] = React.useState(false);
  console.log("props", props);
  const {receptObj}=props;
  return (
    <>
    <Dialog open={show}>
    <DialogTitle>{"Kalorije: "}{receptObj.calories.toFixed(2)}{" kcal"}</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Sastojci</th>
              <th>Težina</th>
            </thead>
            <tbody>
              {receptObj.ingredients.map((sastojciObj) => (
              <tr>
                <td>{sastojciObj.text}</td>
                <td>{sastojciObj.weight.toFixed(2)}</td>
              </tr>
              ))}
            </tbody>
          </table>

        </DialogContent>
        <DialogActions>
          <SastojciTekst onClick={() => window.open(receptObj.url)}>Idi na recept</SastojciTekst>
          <CiliReceptTekst onClick={() => setShow("")}>Zatvori</CiliReceptTekst>
        </DialogActions>
    </Dialog>
        <ReceptiContainer>
          <SlikaJela src={receptObj.image}/>
          <ImeRecepta>{receptObj.label}</ImeRecepta>
          <SastojciTekst onClick={() => setShow(true)}>Sastojci</SastojciTekst>
          <CiliReceptTekst onClick={() => window.open(receptObj.url)}>
            Cili recept</CiliReceptTekst>
        </ReceptiContainer>
    </>
  );
};

function App() {
  const [timeoutId, updateTimeoutId] = useState();
  const [receptiLista, updateReceptiLista] = useState([]);

const fetchRecept = async(searchString) =>{
  const response = await axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`,
  );
updateReceptiLista(response.data.hits)
};

const onUpisUTrazilicu = (event) => {
  clearTimeout(timeoutId);
 const timeout = setTimeout(() => fetchRecept(event.target.value), 500);
 updateTimeoutId(timeout);
};

  return (
    <Container>
      <Header>
        <AppIme><AppLogo src="/ikona.svg"/>Frooninarika</AppIme>
        <Trazilica>
          <TrazilicaIkona src="/search_siva.svg"/>
          <TrazilicaInput placeholder="Pretraživanje" onChange={onUpisUTrazilicu}/>
        </Trazilica>
      </Header>
      <ReceptiListaContainer>
        {receptiLista.length ? receptiLista.map((receptObj)=> (
        <ReceptComponent receptObj={receptObj.recipe}/>
        )): <Placeholder src="ikona.svg"/>}
      </ReceptiListaContainer>
    </Container>
  );
};

export default App;
