import { SectionThreeData } from "@/data";
import Image from "next/image";
import Items from "../ui/items";

export default function SectionThree() {
    return (
        <div className=" relative w-full flex justify-center items-start h-[750px]">
            <div className="h-[586px] w-[1092px] flex flex-col justify-between items-center">
                <div className="w-full flex flex-col justify-start items-center">
                    <div className="text-looseMedium text-B300">Shop Now</div>
                    <div className="font-bold text-normalBold">Best Selling</div>
                </div>
                <div className="w-[1092px] h-[434px] flex justify-between items-center">
                    {SectionThreeData.map((result) => {
                        return (<Items key={result.id} width={result.width} height={result.height} src={result.src} alt={result.name} name={result.name} inStock={result.inStock} price={result.price} />)
                    })}
                </div>
            </div>
        </div>
    );
}


