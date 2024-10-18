import { footerData } from "@/data";
import Image from "next/image";

export default function ContentFooter() {
    return (
        <div className="relative w-full h-[350px] flex justify-center items-end">
            <div className="h-[270px] w-[1116px] flex justify-between items-start">

                <div className="w-[272px] h-[160px]">
                    <div className="flex justify-start items-center mt-[10px]">
                        <Image src="/Logomark.png" width={40} height={40} alt="Logomark.png" />
                        <span className="text-extraBold font-extrabold ml-[10px] text-B900">Glamorize</span>
                    </div>
                    <div className="text-regular text-B300 mt-[15px]">Glamorize is your No 1 Market Place for Fashion and Fashion Accessories</div>
                    <div className="flex justify-between items-center w-[120px] mt-[20px]">

                    <Image src="/Github.png" width={24} alt="Github" height={24}/>
                    <Image src="/Instagram.png" width={24} alt="Instagram" height={24}/>
                    <Image src="/Youtube.png" width={24} alt="Youtube" height={24}/>
                    </div>
                </div>

                <div className="w-[450px] h-full flex justify-between items-start">
                        { footerData.map((result) => {
                                return (
                                    <div key={result.id} className="w-[120px] text-B300 h-3/4">
                                            <div  className="text-regular mb-[50px]">{result.title}</div>
                                            <div className="text-regular mb-[10px]">{result.Item1}</div>
                                            <div className="text-regular mb-[10px]">{result.Item2}</div>
                                            <div className="text-regular mb-[10px]">{result.Item3}</div>
                                    </div>
                                )
                            })
                        }
                </div>

                <div className="w-[176.03px] h-[97px]">
                    <div className="text-B300 text-regular mb-[40px]">ACCEPTED PAYMENTS</div>

                    <div className="flex justify-between items-center">

                    <Image src='/Mastercard.png' alt="" width={30.03} height={32}/>
                    <Image src='/Amex.png' alt="" width={56} height={32}/>
                    <Image src='/Visa.png' alt="" width={42} height={32}/>

                    </div>
                </div>
            </div>
        </div>
    );
}
