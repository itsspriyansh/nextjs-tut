import Navbar from "@/components/Navbar";
import axios from "axios"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dogs ({ dog }) {

    const [dogState, setDog] = useState(null)

    const refreshHandler = async () => {
        setDog(() => null)
        const dog = await getDogs()
        setDog(() => dog)
    }

    useEffect(()=>{
        refreshHandler()
    }, [])

    if (dogState == null) {
        return (
            <center>
            <div style={{
                background : "rgba(0,0,0,0.06)",
                width : "32rem",
                height : "40rem",
                display : "flex",
                alignItems : "center",
                flexDirection : "column",
                justifyContent : "space-around",
                borderRadius : "20px",
            }}>
                <Navbar />
                <div style={{
                    height : "30rem",
                    width : "30rem",
                    borderRadius : "20px",
                    overflow : "hidden",
                }}>
                    loading...
                </div>
            {/* <Link href="/publicapi/dogs"> */}
                <button onClick={refreshHandler} style={{
                    width : "5rem",
                    height : "2rem",
                }}>Reload</button>
            {/* </Link> */}
            </div>
            </center>
        )
    }

    return (
        <center>
        <div style={{
            background : "rgba(0,0,0,0.06)",
            width : "32rem",
            height : "40rem",
            display : "flex",
            alignItems : "center",
            flexDirection : "column",
            justifyContent : "space-around",
            borderRadius : "20px",
        }}>
            <Navbar />
            <div style={{
                height : "30rem",
                width : "30rem",
                borderRadius : "20px",
                overflow : "hidden",
            }}>
                <img src={dogState.message} style={{
                    height : "100%",
                    width : "100%",
                    objectFit : "cover",
                }}></img>
            </div>
        {/* <Link href="/publicapi/dogs"> */}
            <button onClick={refreshHandler} style={{
                width : "5rem",
                height : "2rem",
            }}>Reload</button>
        {/* </Link> */}
        </div>
        </center>
    )
}

export const getStaticProps = async () => {
    const dog = await axios.get("https://dog.ceo/api/breeds/image/random")
    return ({
        props : {
            dog : dog.data
        }
    })
}

const getDogs = async () => {
    const dog = await axios.get("https://dog.ceo/api/breeds/image/random")
    return dog.data
}

