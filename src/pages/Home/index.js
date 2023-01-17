import { useEffect, useState } from "react"
import { api } from "../../service/api"

export default function Home() {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        async function getData() {
            const resp = await api.get('')
            setCountries(resp.data)
            console.log(countries)
        }

        getData()
    }, [])
    return (
        <>
            <h1>Home</h1>
            {
    
                countries.map(country => (
                    
                    <ul key={country.name}>
                        <li>
                            {country.commom}
                        </li>
                    </ul>
                ))
            }
        </>

    )
}