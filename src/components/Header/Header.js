import {ColorMode, HeaderNav, Logo, Small,Icon} from "./styled"
import {BsFillSunFill} from "react-icons/bs"
function Header(){
    return (
        <HeaderNav>
            <Logo>Where in the world?</Logo>
            <ColorMode>
                <Icon><BsFillSunFill/></Icon>
                <Small>Dark Mode</Small>
            </ColorMode>
        </HeaderNav>
    )
}

export default Header;