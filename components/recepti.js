import styled from 'styled-components';

export const ReceptiContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 300px;
box-shadow: 0 3px 10px 0 #aaa;
`;

export const SlikaJela = styled.img`
height: 200px;
`

export const ImeRecepta = styled.span`
font-size: 18px;
font-weight: bold;
color: black;
margin: 10px 0;
`

export const SastojciTekst = styled.span`
font-size: 18px;
border: solid 1px green;
color: green;
margin: 10px 0;
cursor:pointer;
padding: 10px 15px;
border-radius: 4px;
text-align: center;
&:hover,
  &:focus {
    color: white;
    background: green;
  }
`

export const CiliReceptTekst = styled.span`
font-size: 18px;
border: solid 1px #eb3300;
color: #eb3300;
margin: 10px 0;
cursor:pointer;
padding: 10px 15px;
border-radius: 4px;
text-align: center;
&:hover,
  &:focus {
    color: white;
    background: #eb3300;
  }
`