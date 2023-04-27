import styled from "styled-components";
import { themes } from "../../config/themes/themes";

export const Form = styled.form`
background-color: ${themes.dark.DarkBlue};
color: ${themes.light.VeryLightGray};
width: 20rem;
min-width: 15rem;
height: 3.5rem;
display: flex;
border-radius: 0.4rem;
-webkit-box-shadow: 2px 7px 58px -12px ${themes.dark.VeryDarkLigth};
-moz-box-shadow: 2px 7px 58px -12px ${themes.dark.VeryDarkLigth};
box-shadow: 2px 7px 58px -12px ${themes.dark.VeryDarkLigth};
`;

export const Input = styled.input`
background-color: transparent;
border: none;
width: 80%;
display: flex;
align-items: center;
justify-content: center;
font-family: ${themes.fontFamily};
color: ${themes.light.VeryLightGray};
outline: none;
::placeholder{
    color: ${themes.light.VeryLightGray};
}

`;

export const Button = styled.button`
cursor: pointer;
border: none;
background-color: transparent;
display: flex;
align-items: center;
justify-content: center;
width: 10%;
height: 100%;
color: ${themes.light.VeryLightGray};
`

