export default function range(start: number, stop: number){
    return new Array(stop - start).fill(start).map((el,i) => el + i)
}