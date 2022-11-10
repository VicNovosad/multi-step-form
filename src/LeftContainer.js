import TextInput from "./TextInput";
import ButtonGroup from "./ButtonGroup";

const title = [
    "Apply to work with \n our agency",
    "What's your budget?",
    "Anything else we should know?",
    "Thank you!"
]

export default function LeftContainer({stage, setStage}) {
    
    let content;
    
    if (stage === 0) {
        content = (
            <TextInput id="email" value="What is your email?"/>
        )
    } else if (stage === 1) {
        content = (
            <ButtonGroup />
        )
    } else if (stage === 2) {
        content = (
            <TextInput id="additional-info" value=""/>
        )
    }

    return(
        <div className="left-container flex">
            <div className="inner-left-container flex">
                <h1>{title[stage]}</h1>
                {content}
                <div className="button-group flex">
                {stage !== 3 && <input 
                    onClick={() => setStage(stage + 1)} 
                    type="submit" value="Next" />}
                </div>
            </div>  
        </div>
    )
}
  