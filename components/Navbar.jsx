import Link from "next/link"
import classes from "./Navbar.module.css"

export default function Navbar () {
    return (
        <nav className={classes.navigation}>
        <ul className={classes.links}>
            <li> <Link href="/">Home</Link> </li>
            <li> <Link href="/about">About</Link> </li>
            <li> <Link href="/profile">Profile</Link> </li>
            <li> <Link href="/publicapi/dogs">Dogs</Link> </li>
        </ul>
        </nav>
    )
}

