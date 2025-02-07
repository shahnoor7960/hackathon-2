import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";


export default function Home() {
  return (
    <div className="bg-white w-[1920px] h-[4898px] pt-[-1947px] pl-[-3131px]">
      <div className="w-[1740px] h-[850px] mt-0">
        <div
          className="w-[1321px] h-[850px] ml-[300px]
    bg-[#F0F2F3] rounded-bl-[48px] flex gap-[100px]"
        >
          <div className="w-[557px] h-[337px] mt-[229px] ml-[70px]">
             <div className="w-[177px] h-[14px] text-[#272343] text-[14px]">
              WELCOME TO CHAIRY
            </div>
             <div className="w-[557px] h-[198px] text-[#272343] text-[60px]">
            Best Furniture
Collection for your
interior.
            </div>
              <div className="w-[171px] h-[52px] mt-[100px] py-[14px] px-[24px] bg-[#029FAE] flex gap-[20px] rounded-lg">
          <div className="w-[79px] h-[18px] text-[16px] text-white text-center">Shop Now</div>
       <Image src="/Right-arrow.png" alt="arrow" width={24} height={24}></Image>
            </div>
          </div>
          <Image
            src="/Image-header.png"
            alt="sofa-header"
            width={434}
            height={584}
            className="pt-[133px] mb-[133px]"
          ></Image>
        </div>
      </div>
    </div>
  );
}
