import Image from "next/image";


export default function Header() {
    return (
        <>
      <div className="mx-auto justify-between flex bg-gradient-to-l from-red-800 to-slate-700">
          <div className="flex mx-2 py-5 font-extrabold text-3xl text-red-700 hover:animate-bounce hover:items-end items-center hover:text-black hover:cursor-pointer">
              <Image
                src="/assets/abcs_logo.png"
                width={175}
                height={85}
                alt="logo"
              />
          </div>
          <div className="flex items-center justify-end text-lg">
            <div className="w-24 font-extrabold hover:text-emerald-50 cursor-pointer" >Home</div>
            <div className="w-24 font-extrabold hover:text-emerald-50 cursor-pointer">About</div>
              <div className="w-24 font-extrabold hover:text-emerald-50 cursor-pointer">Contact</div>
          </div>
      </div>
            </>
    );
}