import FormNew from "@/components/form/FormNew";
import FormSelect from "@/components/form/FormSelect";
import Title from "@/components/global/Title";

const getProfiles = async () => {
    const response = await fetch('http://127.0.0.1:8000/profile', {cache: 'no-store'})
    return await response.json()
}

export default async function Page() {

    const profiles = await getProfiles()

    return (
        <main className="flex min-h-screen flex-col items-center justify-around p-24">
            <Title />
            <FormSelect profiles={profiles}/>
            <FormNew/>
        </main>
    )
}