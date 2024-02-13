interface Props{
    name: string,
    type?: string,
    label: string
}

export default function Input({name, label, type}: Props){
    return (
        <div className="flex flex-col gap-1">
            <label className="font-bold">{label}</label>
            <input name={name} type={type}
            className="outline-none border-2 border-slate-400 rounded-lg py-1 px-3"/>
        </div>
    )
}