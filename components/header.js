import styled from 'styled-components';

export const Header = styled.div`
color: white;
background-color: #9B0700;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 20px;
font-size: 25px;
font-weight: bold;
box-shadow: 0 3px 6px 0 #555
`;

export const AppIme = styled.div`
display: flex;
align-items: center;
`;

export const AppLogo = styled.img`
width: 70px;
height: 70px;
margin 15px;
`;

export const Trazilica = styled.div`
display: flex;
flex-direction: row;
background-color: white;
padding: 10px;
border-radius: 6px;
width: 50%;
`;

export const TrazilicaInput = styled.input`
border:none;
outline: none;
margin-left: 15px;
font-size: 16px;
font-weight: bold;
`;

export const TrazilicaIkona = styled.img`
width: 32px;
height: 32px;
`;