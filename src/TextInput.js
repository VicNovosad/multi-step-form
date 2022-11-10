export default function TextInput({id, value}) {
    return (
        <form className="text-input flex" action="">
            <input type="text" id={id} placeholder={value} />
        </form>
    ) 
}
  