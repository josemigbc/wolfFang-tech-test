import { IOdontogram } from "@/utils/teeth-states";
import { Dispatch, SetStateAction, createContext } from "react";

export interface IOdontogramContext {
    getTooth: (n: number) => IOdontogram[number],
    setTooth: Dispatch<SetStateAction<number>>,
    tooth: number
}

const OdontogramContext = createContext<IOdontogramContext | null>(null)

export default OdontogramContext