const Clock = () => {
    const currentDateTime = new Date();
    const timeText = currentDateTime.toLocaleTimeString();

    return ( 
        <p>The time now is: {timeText}</p>
     );
}
 
export default Clock;