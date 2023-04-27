import { Button, Form, Input } from "./styled";
import {BiSearch} from "react-icons/bi"
export default function SearchBar(){
    return (
        <Form>
            <Button>
                <BiSearch/>
            </Button>
            <Input type="text" placeholder="Search for a country..." name="q"/>
            
        </Form>
    )
}