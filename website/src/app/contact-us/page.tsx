import React from 'react';
import Link from "next/link";
import Image from "next/image";

export default function ContactUs(){
    return (
        <>
        <div className="max-w-2xl mt-32 ml-96 p-6 inline-flex flex-row justify-between items-baseline h-auto text-red-700 underline underline-offset-8 text-4xl ">
            <h2>Contact Us:</h2>
            <div className="w-1/2 flex flex-col">
            <div className="mr-10 ml-9 mb-16">
            <Link href='https://discord.gg/4zUZpEcaaQ' target='_blank'>
                <Image
                    src='/assets/discord-blue.png'
                    alt='Discord'
                    width={256}
                    height={200}
                />
            </Link>
            </div>
            <div className="mr-10 ml-10 mb-10">
                <Link href='https://twitch.tv/xSoulR34per' target='_blank'>
                    <Image
                        src='/assets/twitch_purple.png'
                        alt='Twitch'
                        width={250}
                        height={200}
                    />
                </Link>
            </div>
                <div className="mr-10 ml-10 mb-20">
                    <Link href='https://www.google.com/search?q=A.B.+Computer+Services' target='_blank'>
                        <Image
                            src='/assets/google-logo.png'
                            alt='Twitch'
                            width={250}
                            height={200}
                        />
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}