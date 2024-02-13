import { useState } from "react"
import ModalExit from "./ModalExit"

export default function ExitButton() {

    const [showModal, setShowModal] = useState(false)

    const hideModal = () => { setShowModal(false) }

    return (
        <>
            <button
                onClick={() => {setShowModal(true)}}
                className='shadow-lg py-2 px-4 rounded-lg bg-slate-200 hover:bg-slate-400 font-bold text-lg'>
                Exit
            </button>
            {showModal && <ModalExit hideModal={hideModal}/>}
        </>
    )
}