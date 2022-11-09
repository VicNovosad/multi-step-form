import TextInput from "./TextInput";
import ButtonGroup from "./ButtonGroup";

const title = [
    "Apply to work with \n our agency",
    "What's your budget?",
    "Anything ese we should know?",
    "Thank you!"
]


export default function LeftContainer({stage, setStage}) {
    return(
        <div className="left-container flex">
            <div className="inner-left-container flex">
                <h1>{title[stage]}</h1>
                <TextInput stage={stage}/>   
                <ButtonGroup stage={stage} setStage={setStage}/>   
            </div>
        </div>
    )
}
  