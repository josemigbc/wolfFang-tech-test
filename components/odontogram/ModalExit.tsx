import { useRouter } from "next/navigation"

export default function ModalExit({hideModal}: {hideModal: () => void}){
    
    const router = useRouter()

    return (
        <div className="bg-slate-200 shadow-2xl px-6 py-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="mb-3">
                <p className="text-lg text-center">Do you want to exit without save?</p>
            </div>
            <div className="flex justify-around items-center">
                <button 
                onClick={()=>{router.push("/")}}
                className="bg-slate-400 shadow-md py-1 px-3 rounded-md">
                    Yes
                </button>
                <button 
                onClick={hideModal}
                className="bg-slate-400 shadow-md py-1 px-3 rounded-md">
                    No
                </button>
            </div>
        </div>
    )
}