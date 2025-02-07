import Image from "next/image";
import { SlArrowDown } from "react-icons/sl";
import { FiAlertCircle } from "react-icons/fi";

export default function NavTop() {
  return (
    <div>
      <div className="w-[1920px] h-[45px] text-white bg-[#272343] flex justify-between px-[300px] py-[14px]">
        <div className="width-[255px] h-[16px] flex gap-[8px]">
          <div>
            <Image src="/check-1.png" width={16} height={16} alt="img"></Image>
          </div>
          <div className="text-[13px] w-[231px] h-[14px]">
            Free shipping on all orders over $50
          </div>
        </div>
        <div className="w-[202px] h-[17px] flex gap-[24px]">
          <div className="flex items-center w-[37px] h-[17px] gap-[6px]">
            <span className="text-[13px] w-[24px] h-[17px]">Eng</span>
            <SlArrowDown />
          </div>
          <div className="text-[13px] w-[41px] h-[17px] gap-[6px]">Faqs</div>
          <div className="w-[87px] h-[17px] flex gap-[6px]">
            <div>
              <FiAlertCircle className="w-[16px] h-[16px]" />
            </div>
            <div className="text-[13px] w-[65px] h-[17px]"> Need Help </div>
          </div>
        </div>
      </div>
    </div>
  );
}
