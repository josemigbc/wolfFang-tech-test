"use client";
import { Profile } from "@/components/form/FormSelect";
import Messages from "@/components/messages/Messages";
import ButtonSave from "@/components/odontogram/ButtonSave";
import Control from "@/components/odontogram/Control"
import ExitButton from "@/components/odontogram/ExitButton";
import Odontogram from "@/components/odontogram/Odontogram"
import OdontogramContext from "@/components/odontogram/OdontogramContext"
import { IOdontogram } from "@/utils/teeth-states"
import { convert } from "@/utils/utils";
import { useEffect, useState } from "react"

export default function OdontogramContainer({ profile }: { profile: Profile }) {

    const [odontogram, setOdontogram] = useState<IOdontogram>(convert(profile.teeth))
    const [tooth, setTooth] = useState(1)
    const [message, setMessage] = useState<string | null>(null)

    const getTooth = (n: number) => odontogram[n]

    const changeToothState = (toothState: IOdontogram[number] | "") => {
        setOdontogram(prev => {
            if (toothState !== "") {
                prev[tooth] = toothState;
            } else {
                delete prev[tooth]
            }
            return { ...prev }
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setMessage(null)
        }, 4000)
    }, [message])

    const saveOdontogram = async () => {
        const response = await fetch(`http://127.0.0.1:8000/profile/${profile.id}/odontogram/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(odontogram)
        }) 
        if (response.status === 200) {
            setMessage("Saved.")
        } else {
            setMessage("Failed")
        }
    }

    return (
        <OdontogramContext.Provider value={{ getTooth, setTooth, tooth }}>
            <div className="mb-6">
                <Odontogram />
            </div>

            <div className=" border-t-2 border-slate-300 py-2">
                <Control changeToothState={changeToothState} tooth={tooth} />
            </div>
            <div className="flex justify-around items-center">
                <ButtonSave saveOdontogram={saveOdontogram} />
                <ExitButton/>
            </div>
            {message && <Messages message={message} />}
        </OdontogramContext.Provider>
    )
}