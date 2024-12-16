import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full h-[418px] pt-[4480px] pl-[-12px]">
      <div className="w-full h-[343px] bg-white"></div>
      <div className="bg-white w-full h-[75px] pt-[343px] py-[24px] px-[300px] flex justify-between">
        <div className="w-[341px] h-[21px] text-[#9A9CAA] text-[14px] flex gap-1">
          @ 2021 - Blogy - Designed & Develop by
          <span className="text-[#272343]">Zakirsoft</span>
        </div>
        <div className="w-[227px] h-[27px] flex opacity-[50%]">
          <Image src="/logo.png" alt="Logos-footer" width={36} height={22.25}
          ></Image>
          <Image src="/paypal.png" alt="Logos-footer" width={56} height={14.92}
          ></Image>
          <Image src="/american.png" alt="Logos-footer" width={50} height={27}
          ></Image>
          <Image src="/visa.png" alt="Logos-footer" width={55} height={17.84}
          ></Image>
        </div>
      </div>
    </div>
  );
}
