import Image from "next/image";

export default function SectionTwo() {
    return (
        <div className=" relative w-full h-[300px] text-regular flex justify-center items-center">
            <div className="w-[1092px] h-[266px] flex justify-between items-end">
                <div className="w-[328px] h-[218px]">
                    <Image src="/Shipping.png" width={48} height={48} alt="Shipping" className="mb-[20px]" />
                    <div className="font-bold mb-[15px]">Free Shipping</div>
                    <div>Upgrade your style today and get FREE shipping on all orders! Don't miss out.</div>
                </div>
                <div className="w-[328px] h-[218px]">
                    <Image src="/Satisfaction.png" width={48} height={48} alt="Satisfaction"  className="mb-[15px]"  />
                    <div className="font-bold mb-[15px]">Satisfaction Guarantee</div>
                    <div>Shop confidently with our Satisfaction Guarantee: Love it or get a refund.</div>
                </div>
                <div className="w-[328px] h-[218px]">
                    <Image src="/Secure.png" width={48} height={48} alt="Secure"  className="mb-[15px]"  />
                    <div className="font-bold mb-[15px]">Secure Payment</div>
                    <div>Your security is our priority. Your payments are secure with us.</div>
                </div>
            </div>
        </div>
    );
}
