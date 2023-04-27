import FilterButton from "../FilterButton/FilterButton";
import SearchBar from "../SearchBar/SearchBar";
import { Div } from "./styled";

export default function Navigation(){
    return (
        <Div>
            <SearchBar/>
            <FilterButton/>
        </Div>
    )
}