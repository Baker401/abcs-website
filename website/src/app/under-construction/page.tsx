import React from "react";
import Image from "next/image";


export default function UnderConstruction() {
    //return <img srcSet={'./assets/under.jpeg'} className="mx-auto width-500px" alt="Image" />;
    return <Image
        src="/assets/under.jpeg"
        alt="Under Construction"
        width={2080}
        height={1080}

    />
};