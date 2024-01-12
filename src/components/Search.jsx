
import { useRef } from "react";


const Search = props => {
    const searchValue = useRef();
    const handleEnter = event => {
        if (event.keyCode === 13) {
            props.onClick(searchValue.current.value);
        }
    }
    return (
        <div>
            <input type="text" onKeyDown={handleEnter} id="location-search" ref={searchValue}/>
            <button onClick={() => props.onClick(searchValue.current.value)}>Search</button>
        </div>
    )
}

export default Search;