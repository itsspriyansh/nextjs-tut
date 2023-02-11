import { useRouter } from "next/router"

export default function Profile () {

    const { username } = useRouter().query

    return (
        <div>
            Hi! {username}
        </div>
    )
}

