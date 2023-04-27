import styled from "styled-components";
import { themes } from "../../config/themes/themes";

export const HeaderNav = styled.header`
width: 100%;
padding: 1.5rem 0;
display: flex;
align-items: center;
justify-content: space-around;
${themes.font}
background-color: ${themes.dark.DarkBlue};
-webkit-box-shadow: 2px 7px 58px -12px ${themes.dark.VeryDarkLigth};
-moz-box-shadow: 2px 7px 58px -12px ${themes.dark.VeryDarkLigth};
box-shadow: 2px 7px 58px -12px ${themes.dark.VeryDarkLigth};
`;

export const Logo = styled.h3`
display: flex;
align-items: center;
font-family: ${themes.fontFamily};
font-weight: 800;
color: ${themes.light.WhiteDarkModeText};
`;

export const ColorMode = styled.div`
font-family: ${themes.fontFamily};
font-weight: 800;
display: flex;
justify-content: space-evenly;
align-items: center;
width: 8rem;
height: 2rem;
`;

export const Small = styled.div`
display: flex;
align-items: center;
color: ${themes.light.VeryLightGray};
font-weight: 300;
`;

export const Icon = styled.div`
display: flex;
align-items: center;
color: ${themes.light.VeryLightGray};
`;