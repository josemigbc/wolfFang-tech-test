import { useContext } from "react"
import OdontogramContext, { IOdontogramContext } from "./OdontogramContext"

export default function ToothNumber({n}:{ n:number }){
    
    const { tooth } = useContext(OdontogramContext) as IOdontogramContext
    
    return <p className={`text-sm sm:text-base ${tooth === n && "font-bold underline underline-offset-4"}`}>{n}</p>
}