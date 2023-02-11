import Link from "next/link";

export default function PageNotFoundError () {
    return (
        <div>
            <h2>Page not found</h2>
            <p>
                <Link href="/"> click </Link> to go back
            </p>
        </div>
    )
}
