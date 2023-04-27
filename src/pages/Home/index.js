import { useEffect, useState } from "react"
import { api } from "../../service/api"
import Header from "../../components/Header/Header"
import Navigation from "../../components/Navigation/Navigation"
import { Container, Country, CountryInfo, Flag, ImageFlag, Info, Main, Name, Title, Value } from "./styled"

export default function Home() {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        async function getData() {
            const resp = await api.get('')
            setCountries(resp.data)
        }

        getData()
    }, [])
    countries.slice(0, 10).map(country => (

        console.log(country)

    ))
    return (
        <>
            <Header />
            <Navigation />
            <Main>
            <Container>
                {
                    countries.slice(45, 57).map(country => (

                        <Country>
                            <Flag>
                                <ImageFlag  src={country.flags.svg}/>
                            </Flag>
                            <Info>
                                <Title>{country.name.common}</Title>
                                <CountryInfo>
                                    <Name>population:</Name>
                                    <Value>{country.population}</Value>
                                </CountryInfo>
                                <CountryInfo>
                                    <Name>region:</Name>
                                    <Value>{country.region}</Value>
                                </CountryInfo>
                                <CountryInfo>
                                    <Name>capital:</Name>
                                    <Value>{country.capital}</Value>
                                </CountryInfo>




                            </Info>
                        </Country>

                    ))

                }

            </Container>
            </Main>
            
        </>

    )
}