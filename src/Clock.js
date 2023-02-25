import React from "react";
import { EmojiContext } from "./Emoji";

const Clock = () => {
    const currentDateTime = new Date();
    const timeText = currentDateTime.toLocaleTimeString();

    return ( 
        <EmojiContext.Consumer>
            {(emote) => {
                return <p>The time now is: {timeText} {emote}</p>
            }}
        </EmojiContext.Consumer>
     );
}
 
export default Clock;