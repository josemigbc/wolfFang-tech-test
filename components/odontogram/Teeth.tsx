import states from "@/utils/teeth-states"
import { useContext } from "react"
import OdontogramContext, { IOdontogramContext } from "./OdontogramContext"
import ToothCrown from "./ToothCrown"
import ToothRoot from "./ToothRoot"
import ToothNumber from "./ToothNumber"

interface Props {
    n: number,
    y: 'up' | 'down',
}

export default function Teeth({ n, y }: Props) {

    const { getTooth, setTooth } = useContext(OdontogramContext) as IOdontogramContext
    const state = getTooth(n)

    return (
        <div className="flex flex-col gap-1 items-center"
            onClick={() => { setTooth(n) }}
        >
            {y === 'up' && (
                <>
                    <ToothNumber n={n} />
                    <div className="flex flex-col gap-1 items-center">
                        <ToothCrown state={state} />
                        <ToothRoot />
                        {state && states[state]}
                    </div>

                </>
            )}
            {y === 'down' && (
                <>
                    <div className="flex flex-col gap-1 items-center">
                        <ToothCrown state={state} />
                        <ToothRoot />
                        {state && states[state]}
                    </div>
                    <ToothNumber n={n} />
                </>
            )}
        </div>
    )
}