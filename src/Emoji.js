import React, { useState } from "react";
import Clock from "./Clock";

export const EmojiContext = React.createContext();

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
            <button onClick={handleClick}>Change Mood</button>
            <EmojiContext.Provider value={emote}>
                <Clock />
            </EmojiContext.Provider>
        </>
    );
}
 
export default Emoji;