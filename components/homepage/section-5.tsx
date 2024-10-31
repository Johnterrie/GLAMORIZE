import { SectionFiveData } from "@/data";
import Items from "../ui/items";

export default function SectionFive() {
    return (
        <div className=" relative w-full flex justify-center items-center h-[808px]">
            <div className="h-[586px] w-[1092px] flex flex-col justify-between items-center">
                <div className="w-[158px] h-[31px] flex justify-between text-looseMedium text-B300 items-center">
                    <div className="border-2 w-[92px] h-full flex justify-center items-center rounded-full text-black">Featured</div>
                    <div className="">Latest</div>
                </div>
                <div className="w-[1092px] h-[434px] flex justify-between items-center">
                    {SectionFiveData.map((result) => {
                        return (<Items key={result.id} width={result.width} height={result.height} src={result.src} alt={result.name} name={result.name} inStock={result.inStock} price={result.price} />)
                    })}
                </div>
            </div>
        </div>
    );
}


