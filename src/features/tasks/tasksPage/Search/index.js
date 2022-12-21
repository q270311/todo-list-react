import { Input } from "../Input/styled";
import { StyledDiv } from "./styled";
import { useHistory, useLocation } from "react-router-dom";

const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get("szukaj");

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete("szukaj");
        } else {
            searchParams.set("szukaj", target.value);
        }
        history.push(`${location.pathname}?${searchParams.toString()}`);
    }

    return (
        <>
            <StyledDiv>
                <Input
                    type="text"
                    value={query || ""}
                    placeholder="Szukaj zadania"
                    onChange={onInputChange}
                />
            </StyledDiv>
        </>
    )
};

export default Search;