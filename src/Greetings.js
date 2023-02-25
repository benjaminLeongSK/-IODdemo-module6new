import React, { useState } from 'react';

const Greetings = () => {
    const [name, setName] = useState('World')

    const handleClick = () => {
        setName('Johnny Sins')
    }

    return ( 
        <>
            <p>Hello { name } !</p>
            <button onClick={handleClick}>Click to change Name</button>
        </>
     );
}
 
export default Greetings;