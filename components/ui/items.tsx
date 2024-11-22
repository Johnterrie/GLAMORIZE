import { ItemsProps } from "@/types";
import Image from "next/image";

export default function Items({ src, width, alt, height, index, name, inStock, price }: ItemsProps) {
    return (
        <div key={index} className="w-full  relative flex items-center flex-col justify-between h-[400px] w-[264px]">
            <div className="w-[248px] h-[312] bg-W100">
                <Image src={src} width={width} alt={alt} height={height} />
            </div>

            <div className="flex flex-col items-start justify-between w-[93%] h-[15%]">

                <div className="font-bold">{name}</div>
                <div className=" w-3/5 flex  text-looseMedium justify-between items-center">
                    {inStock ? <span className=" border-2 border-B100 w-[89px] h-[28px] flex justify-center items-center rounded-full ">IN STOCK</span> : <></>}
                    <span>${price.toFixed(2)}</span>
                </div>

            </div>
        </div>
    );
}









