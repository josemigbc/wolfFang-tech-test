interface Props {
    saveOdontogram: () => Promise<void>
}

export default function ButtonSave({ saveOdontogram }: Props){
    return (
        <button 
        onClick={saveOdontogram}
        className='shadow-lg py-2 px-4 rounded-lg bg-slate-200 hover:bg-slate-400 font-bold text-lg'>
            Save Odontogram
        </button>
    )
}