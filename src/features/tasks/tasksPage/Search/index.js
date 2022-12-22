import { Input } from "../Input/styled";
import { StyledDiv } from "./styled";
import searchQueryParamName from "./../searchQueryParamName";
import {useQueryParameter, useReplaceQueryParameter} from "./../queryParameters"

const Search = () => {    
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();
    
    const onInputChange = ({ target }) => {
        replaceQueryParameter({
             key: searchQueryParamName,
             value: target.value.trim() !== "" ? target.value : undefined,
         });
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