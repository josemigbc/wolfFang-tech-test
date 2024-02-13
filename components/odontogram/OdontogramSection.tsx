import Teeth from "./Teeth"

interface Props {
    y: 'up' | 'down',
    x: 'left' | 'right',
    range: number[],
}

export default function OdontogramSection({ x, y, range }: Props) {
    return (
        <div className="grid grid-cols-8">
            {x === 'right' ?
                range.map(n => <Teeth key={n} n={n} y={y} />) :
                range.reverse().map(n => <Teeth key={n} n={n} y={y} />)
            }
        </div>
    )
}