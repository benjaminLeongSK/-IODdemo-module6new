import { useState } from "react";

const Emoji = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [emote, setEmote] = useState(<>&#128512;</>);

    const handleClick= () => {
        setIsToggled(!isToggled)
        isToggled? setEmote(<>&#128512;</>) : setEmote(<>&#128513;</>)
    }

    return ( 
        <>
            <p>{emote}</p>
            <button onClick={handleClick}>Switch Emoji</button>
        </>
    );
}
 
export default Emoji;