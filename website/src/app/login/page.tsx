import React from "react";
import SubmitButton from "@/components/submitButton";
import Image from "next/image";


export default function LoginPage() {
    return (
      <>
          <div className="flex mt-24 border-solid rounded-tl-3xl rounded-br-3xl border-black border-8 w-72 mx-auto items-center content-center justify-center flex-col h-96 bg-red-700">
                  <Image
                    src='/assets/abcs_red_logo.png'
                    alt='logo'
                    height={250}
                    width={175}
                  />
              <div className="py-5">
                  <input id="userName" type="text" placeholder="Username" className="border-black border-solid border-2 font-extrabold rounded-md"/>
              </div>
              <div>
                  <input id="password" type="password" placeholder="Password" className="border-black border-solid border-2 font-extrabold rounded-md"/>
              </div>
              <div className="mt-7">
                  <SubmitButton/>
              </div>

          </div>
      </>
    )
};
