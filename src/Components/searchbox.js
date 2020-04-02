import React from 'react';

export const SearchBox=({ seachField,searchChange})=>{
    return(
        <div className='pa2'>
            <input className='pa3 b--green bg-lightest-blue i' 
            type='search' 
            placeholder='Search Robot'
            onChange={searchChange}
            />
        </div>
    )
}
