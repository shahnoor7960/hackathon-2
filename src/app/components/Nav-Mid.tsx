
import Image from "next/image";

export default function NavMid() {
  return (
    <div
      className="w-full h-[84px] text- bg-[#F0F2F3] flex justify-between 
        px-[300px] py-[20px]"
    >
      <div className="w-[166px] h-[40px] flex gap-[8px]">
        <Image src="/Logo-Icon.png" alt="logo" width={40} height={40}></Image>
       <div className="w-[118px] h-[31px] flex gap-[0px] text-[26px] text-[#272343]"> Comforty</div>
      </div>
      <div className="w-[120px] h-[44px] flex gap-[12px] border rounded-[8px] 
px-[16px] py-[11px] text-white" >
<div className="w-[56px] h-[22px] flex gap-[8px]">
    <div className="w-[22px] h-[22px]">
    <Image src="/cart.png" alt="cart" width={17} height={16.5}></Image>
    </div>
    <div className="w-[26px] h-[13px] text-[12px] text-[#272343]">Cart</div>
</div>
 <Image src="/cart-2.png" alt="cart-2" width={20} height={20}></Image>
      </div>
    </div>
  );
}
