export default function TextInput({stage}) {
    let content;

    if (stage === 0) {
        content = (
            <input type="text" id="email" placeholder="What is your email?" />
        )
    } else if (stage === 1) {
        content = (
            <div class="button-wrap flex">
                <input
                    type="submit" value="$2k" />
                <input
                    type="submit" value="$5k" />
                <input
                    type="submit" value="No limit" />
            </div>
        )
    } else if (stage === 2) {
        content = (
            <input type="text" id="additional-info" placeholder="" />
        )
    }

    return (
        <form className="text-input stage flex" action="">
            {content}
        </form>
    ) 
}
  