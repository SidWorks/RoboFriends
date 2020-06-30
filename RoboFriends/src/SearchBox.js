import React from 'react';


const SearchBox = ({SearchChange}) =>
{
    return(
    <div className ='pa3'>
         <input 
            className = 'pa3 br3 tc ' 
            type='search'
            placeholder="search robots"
            onChange={SearchChange}
        /> 
    </div>
        
    );

}

export default SearchBox;