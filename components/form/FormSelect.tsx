"use client"
import { IOdontogram } from "@/utils/teeth-states"
import Link from "next/link"
import { useState } from "react"

export type Teeth = {
    number: number,
    id: number,
    state: IOdontogram[number]
}

export type Profile = {
    id: number,
    first_name: string,
    last_name: string,
    age: number,
    is_child: boolean,
    created: string
    teeth: Array<Teeth>
}

interface Props {
    profiles: Array<Profile>
}

export default function FormSelect({ profiles }: Props) {
    
    const [profile, setProfile] = useState(profiles[0].id.toString())

    return (
        <form className="flex flex-col gap-2 items-center">
            <select onChange={(e)=>{setProfile(e.target.value)}}>
                {profiles.map(prof => (
                    <option value={prof.id}>{prof.first_name} {prof.last_name}</option>
                ))}
            </select>
            <Link href={`/odontogram/${profile}`} 
            className="bg-slate-400 hover:bg-slate-600 rounded-lg py-1 px-3 shadow-lg">Select</Link>
        </form>
    )
}