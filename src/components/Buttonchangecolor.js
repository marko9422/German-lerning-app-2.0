import { React, useState } from 'react'


function Buttonchangecolor() {

    const [isClicked, setIsClicked] = useState(false);


    const handleClick = () => {
        setIsClicked(!isClicked);
    };


    const buttonStyle = {
        backgroundColor: isClicked ? 'red' : 'initial',
        color: 'black',
    };

    return (
        <div>
            <button onClick={handleClick} type='button' style={buttonStyle}>RED</button>
        </div>
    )


}




export default Buttonchangecolor
