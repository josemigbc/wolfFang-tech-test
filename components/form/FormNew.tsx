"use client";
import { useRouter } from "next/navigation";
import Input from "./Input";
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function FormNew() {

    const router = useRouter()

    return (
        <form className="flex flex-col gap-3"
        onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget)
            const response = await fetch('http://127.0.0.1:8000/profile/',{
                method: "POST",
                body: formData
            })
            if (response.status === 201){
                const data = await response.json()
                console.log("jdsdosd")
                router.push(`/odontogram/${data.id}`)
            }
        }}
        >
            <Input name="first_name" label="First Name" />
            <Input name="last_name" label="Last Name" />
            <Input name="age" label="Age" type="number" />
            <div className="flex justify-center items-center">
                <button 
                    className='shadow-lg py-2 px-4 rounded-lg bg-slate-200 hover:bg-slate-400 font-bold text-lg flex justify-between items-center gap-3'>
                    <span>Continue</span>
                    <AiOutlineArrowRight />
                </button>
            </div>
        </form>
    )
}