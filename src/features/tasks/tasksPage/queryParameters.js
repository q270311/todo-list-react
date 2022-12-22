import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (queryParamName) => {
    const location = useLocation();
    return (new URLSearchParams(location.search)).get(queryParamName);
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();    
    const searchParams = new URLSearchParams(location.search);

    const history = useHistory();

    return (props)=>{
    
     if (!props.value) {
         searchParams.delete(props.key);
     } else {
         searchParams.set(props.key, props.value);
     }
     history.push(`${location.pathname}?${searchParams.toString()}`);
    }
};