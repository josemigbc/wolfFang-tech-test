import { Teeth } from "@/components/form/FormSelect";
import { IOdontogram } from "./teeth-states";

export function convert(teeth:Teeth[]){
    const result: IOdontogram = {}
    for (let t of teeth){
        result[t.number] = t.state;
    }
    return result
}