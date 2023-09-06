import { useEffect } from 'react'

export default function Hello(){
    useEffect(()=>{
        console.log("Hello world");
    }, [])

    return (
        <>From the hello component</>
    )
}