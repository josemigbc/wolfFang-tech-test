export default function ToothCrown({state}: {state: string}) {
    return <div className={`w-4 h-4 shadow-lg ${state === "7" && 'border-2 border-blue-600'} ${state === "8" && 'border-2 border-red-600'} ${state === '2' ? 'bg-red-600': 'bg-slate-500'}`}></div>
}