"use client"; // Client-side interactivity

import React from 'react'
import { useEffect } from "react"

const BlobProvider = () => {
    useEffect(() => {
        // Pointer move glow effect
        const blob = document.getElementById("blob");

        const handlePointerMove = (event: PointerEvent) => {
            const { clientX, clientY } = event;

            blob?.animate(
                {
                    left: `${clientX}px`,
                    top: `${clientY}px`,
                },
                { duration: 3000, fill: "forwards" }
            );
        };

        window.addEventListener("pointermove", handlePointerMove);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
        };
    }, []);


    return (<div className="overflow-hidden w-full" >
        <div id="blob"></div>
        <div id="blur" className='w-full'></div></div>
    )
}

export default BlobProvider
