export default function Messages({message}: {message: string}){
    return (
        <div className="py-2 px-10 text-white rounded-lg shadow-2xl bg-slate-700 z-50 absolute top-5 left-1/2 -translate-x-1/2">
            <p className="font-light text-center text-lg">{message}</p>
        </div>
    )
}