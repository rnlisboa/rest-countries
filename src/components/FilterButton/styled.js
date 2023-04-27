import styled from "styled-components";
import { themes } from "../../config/themes/themes";

export const Select = styled.div`
background-color: ${themes.dark.DarkBlue};
color: ${themes.light.VeryLightGray};
width: 15rem;
height: 3.5rem;
display: flex;
padding:0 1rem;
border-radius: 0.4rem;
-webkit-box-shadow: 2px 7px 58px -12px ${themes.dark.VeryDarkLigth};
-moz-box-shadow: 2px 7px 58px -12px ${themes.dark.VeryDarkLigth};
box-shadow: 2px 7px 58px -12px ${themes.dark.VeryDarkLigth};
border: none;
outline: none;
font-family: ${themes.fontFamily};
position:relative;
display: flex;
align-items: center;
justify-content: space-around;
cursor: pointer;
`;

export const Option = styled.div`
cursor: pointer;
position: absolute;
bottom: -12.2rem;
background-color: ${themes.dark.DarkBlue};
width: 100%;
height: 12rem;
padding: 0.5rem 1rem;
text-align: left;
border-radius: 0.4rem;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
display: ${props => props.isActive ? 'block' : 'none'};
`;

export const OptionRegion = styled.div`
margin-top: .5rem;

a{
text-decoration: none;  
color: ${themes.light.VeryLightGray};
opacity: 75%;
transition: all 200ms;
}
a:hover{
    opacity: 100%;
}
`;
