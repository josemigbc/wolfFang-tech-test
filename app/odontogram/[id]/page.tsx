import User from "@/components/odontogram/User"
import DeseasesList from "@/components/odontogram/DeseasesList"
import OdontogramContainer from "./OdontogramContainer"
import { convert } from "@/utils/utils"
import { Profile } from "@/components/form/FormSelect"

const getProfile = async (id: number) => {
    const response = await fetch(`http://127.0.0.1:8000/profile/${id}`, {cache: 'no-store'})
    return await response.json()
}

export default async function Layout({ params }: {params: {id:number}}) {

    const profile: Profile = await getProfile(params.id)
    const odontogram = convert(profile.teeth)

    return (
        <main className="min-h-screen p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 mb-6">
                <User profile={profile}/>
                <DeseasesList/>
            </div>
            <OdontogramContainer profile={profile} />
        </main>
    )
}