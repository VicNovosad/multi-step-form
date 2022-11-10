import { useState } from "react";

export default function ButtonGroup() {

    const [selectedButton, setSelectedButton] = useState(0);

    const BUTTON_TEXT = [
        '$2k', '$5k', 'No limit'
    ]
    
    return (
        <div className="button-wrap flex">
            {BUTTON_TEXT.map((value, index) => (
                <input
                    onClick={() => setSelectedButton(index)}
                    className={selectedButton === index && "selected-button"}
                    key={index}
                    type="submit" value={value} />
            ))}
        </div>
    )
}
  