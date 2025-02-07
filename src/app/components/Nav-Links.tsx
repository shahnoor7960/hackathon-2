import Link from "next/link"


export default function NavLinks(){
return(
    <div className="w-[1920px] bg-white h-[74px] py-[14px] px-[300px] flex gap-0 justify-between border-solid border-b-[0.5px] border-[#E1E3E5]
">
         <div className="w-[339px] h-[15px] py-[14px] flex gap-[32px]">
    <div className="w-[40px] h-[15px] text-[14px] text-[#007580]"><Link href="#">Home</Link>
    </div>
    <div className="w-[35px] h-[15px] text-[14px] text-[#007580]"><Link href="#">Shop</Link>
    </div>
    <div className="w-[53px] h-[15px] text-[14px] text-[#007580]"><Link href="#">Product</Link>
    </div>
    <div className="w-[42px] h-[15px] text-[14px] text-[#007580]"><Link href="#">Pages</Link>
    </div>
    <div className="w-[41px] h-[15px] text-[14px] text-[#007580]"><Link href="#">About</Link>
    </div>
        </div>
        <div className="w-[168px] h-[15px] py-[14px] flex gap-[8px]">
<div className="text-[#636270] text-[14px] w-[57px] h-[15px]">Contact:</div>
<div className="text-[#272343] text-[14px] w-[103px] h-[15px]">(808) 555-0111</div>
        </div>
    </div>
)
}