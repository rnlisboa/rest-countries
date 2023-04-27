import Header from "../../components/Header/Header";
import { About, Additional, BackSpace, Border, Container, CountryFlag, Description, DetailInfo, Info, Main, Name, Value } from "./styled";
export default function Detail(){
    return (
        <>
        <Header/>
        <BackSpace/>
        <Main>
            <Container>
                <CountryFlag>

                </CountryFlag>
                <Info>
                    <Name>

                    </Name>
                    <DetailInfo>
                        <About>
                            <Value></Value>
                            <Description></Description>
                        </About>
                        <Additional>

                        </Additional>
                    </DetailInfo>
                </Info>

                <Value></Value>
                <Border></Border>
            </Container>
        </Main>
        </>
        
    )
}