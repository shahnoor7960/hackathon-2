import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-[1920px] h-[418px] pt-[4480px] pl-[-12px]">
      <div className="w-[1920px] h-[343px] bg-white"></div>
       <div className="bg-white w-[1920px] h-[75px] pt-[343px] py-[24px] px-[300px] flex justify-between">
        
        <div className="flex flex-justify gap-10">
          <div className="w-[341px] h-[21px] text-[#9A9CAA] text-[14px]">
          @ 2021 - Blogy - Designed & Develop by
          <span className="ml-1 text-[#272343]">Zakirsoft</span>
         </div>
         </div>
        <div className="w-[227px] h-[27px] flex gap-[10px] pt-[24px] pl-[1393px] opacity-[50%]">
          <Image src="/footer-logo.png" alt="footer-Logo" width={36} height={22.25}
          ></Image>
          <Image src="/paypal.png" alt="footer-Logo" width={56} height={14.92}
          ></Image>
          <Image src="/american.png" alt="footer-Logo" width={50} height={27}
          ></Image>
          <Image src="/visa.png" alt="footer-Logo" width={55} height={17.84}
          ></Image>
        </div>
      </div>
    </div>
  );
}
