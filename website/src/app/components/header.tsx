

export default function Header() {
    return (
        <>
      <div className="mx-auto justify-between flex bg-gradient-to-l from-red-800 to-slate-700 h-14">
          <div className="flex w-24 mx-2 hover:animate-bounce hover:items-end items-center font-extrabold text-3xl text-red-700 hover:text-black hover:cursor-pointer">ABCS</div>
          <div className="flex items-center justify-end text-lg">
            <div className="w-24 font-extrabold hover:text-emerald-50 cursor-pointer">Home</div>
            <div className="w-24 font-extrabold hover:text-emerald-50 cursor-pointer">About</div>
              <div className="w-24 font-extrabold hover:text-emerald-50 cursor-pointer">Contact</div>
          </div>
      </div>
            </>
    );
}