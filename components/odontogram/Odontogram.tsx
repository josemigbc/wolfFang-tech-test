import OdontogramSection from "./OdontogramSection";
import range from "@/utils/range"

export default function Odontogram({ isChild }: { isChild?: true }) {

    if (isChild) {
        return (
            <div className="grid grid-cols-2 gap-3">
                <OdontogramSection y="up" x="left" range={range(1, 6)} />
                <OdontogramSection y="up" x="right" range={range(6, 11)} />
                <OdontogramSection y="down" x="left" range={range(11, 16)} />
                <OdontogramSection y="down" x="right" range={range(16, 21)} />
            </div>
        )
    }
    return (
        <div className="grid grid-cols-2 gap-3">
            <OdontogramSection y="up" x="left" range={range(1, 9)} />
            <OdontogramSection y="up" x="right" range={range(9, 17)} />
            <OdontogramSection y="down" x="left" range={range(17, 25)} />
            <OdontogramSection y="down" x="right" range={range(25, 33)} />
        </div>
    )
}