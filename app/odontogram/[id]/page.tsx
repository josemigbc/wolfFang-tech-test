import User from "@/components/odontogram/User"
import OdontogramContainer from "./OdontogramContainer"
import { Profile } from "@/components/form/FormSelect"

const getProfile = async (id: number) => {
    const response = await fetch(`http://127.0.0.1:8000/profile/${id}/`, {cache: 'no-store'})
    return await response.json()
}

export default async function Layout({ params }: {params: {id:number}}) {

    const profile: Profile = await getProfile(params.id)

    return (
        <main className="min-h-screen p-8">
            <div className="mb-6">
                <User profile={profile}/>
            </div>
            <OdontogramContainer profile={profile} />
        </main>
    )
}