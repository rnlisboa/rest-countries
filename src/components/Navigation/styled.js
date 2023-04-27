import styled from "styled-components";
import { themes } from "../../config/themes/themes";
export const Div = styled.div`
width: 100%;
padding: 4rem 4rem;
display: flex;
align-items: center;
justify-content: space-between;
background-color: ${themes.dark.VeryDark};
@media(max-width: 730px){
    flex-direction: column;
    align-items: flex-start;

    > :first-child{
        margin-bottom: 1rem;
        width: 100%;
    }
}
`;