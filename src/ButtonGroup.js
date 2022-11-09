export default function ButtonGroup({stage, setStage}) {
    return (
        <div className="button-group flex">
            { stage !== 3 && <input 
                onClick={() => setStage(stage + 1)}
                type="submit" value="Next" />}
        </div>
    );
}
  