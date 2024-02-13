"use client";
import { IOdontogram } from "@/utils/teeth-states"
import { useContext, useState } from "react"
import OdontogramContext, { IOdontogramContext } from "./OdontogramContext";

interface Props {
    tooth: number,
    changeToothState: (toothState: IOdontogram[number] | "") => void
}

export default function Control({ changeToothState, tooth }: Props) {

    const { getTooth } = useContext(OdontogramContext) as IOdontogramContext
    const toothState = getTooth(tooth)
    const [option, setOption] = useState<IOdontogram[number] | "">(toothState || "")

    return (
        <div className="mb-6">
            <p className="font-bold text-xl">Piece: {tooth}</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 items-center justify-items-center">
                <label className="text-lg me-3">Treatments:</label>
                <select 
                className="border-b-2 border-slate-400 py-1"
                defaultValue={toothState} onChange={(e) => { setOption(e.target.value as IOdontogram[number]) }}>
                    <option value="">Healthy</option>
                    <option value="2">Decay</option>
                    <option value="1">Fracture</option>
                    <option value="7">Good Filling</option>
                    <option value="8">Bad Filling</option>
                    <option value="3">Missing</option>
                    <option value="4">Missing Indicated</option>
                    <option value="9">Good Sealant</option>
                    <option value="10">Bad Sealant</option>
                    <option value="5">Good Prostheses</option>
                    <option value="6">Bad Prostheses</option>
                </select>
                <button
                    onClick={() => { changeToothState(option) }}
                    className="px-5 py-2 bg-slate-400 rounded-lg ms-3 shadow-lg hover:bg-slate-600">
                    Apply
                </button>
            </div>
        </div>
    )
}