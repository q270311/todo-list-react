import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (queryParamName) => {
    const location = useLocation();
    return (new URLSearchParams(location.search)).get(queryParamName);
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const history = useHistory();

    return ({key, value}) => {
        if (!value) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }
        history.push(`${location.pathname}?${searchParams.toString()}`);
    }
};