import { Profile } from "../form/FormSelect";

export default function User({profile}:{profile: Profile}) {
    return (
        <div className="px-6">
            <p className="font-bold text-xl">{profile.first_name} {profile.last_name}</p>
            <p>{profile.age} years old</p>
            <p>{profile.is_child ? 'Child': 'Adult'} Man</p>
        </div>
    )
}