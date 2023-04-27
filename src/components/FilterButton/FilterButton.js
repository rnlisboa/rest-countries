import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi"
import { Select, Option, OptionRegion } from "./styled";
import { Link } from "react-router-dom";


export default function FilterButton() {
    const [isSelectActive, setIsSelectActive] = useState(false);

    return (

        <Select value={""} onClick={() => setIsSelectActive(!isSelectActive)}>
            Filter by Region
            <BiChevronDown />
            <Option isActive={isSelectActive}>
                <OptionRegion>
                    <Link to={'/region/africa'}>Africa</Link>
                </OptionRegion>
                <OptionRegion>
                    <Link to={'/region/america'}>America</Link>
                </OptionRegion>
                <OptionRegion>
                    <Link to={'/region/asia'}>Asia</Link>
                </OptionRegion>
                <OptionRegion>
                    <Link to={'/region/europe'}>Europe</Link>
                </OptionRegion>
                <OptionRegion>
                    <Link to={'/region/oceania'}>Oceania</Link>
                </OptionRegion>
            </Option>
        </Select>
    )
}