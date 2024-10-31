import Image from "next/image";

export default function SectionOne() {
    return (
      <div className="relative w-full bg-W100 flex justify-center items-center">
        <div className=" relative w-[1116px] h-[440px] flex items-end justify-between">
            <div className=" relative h-3/4">
                <h1 className="relative text-semiBold font-extrabold">Fresh Arrivals Online</h1>
                <p className="relative text-regular">Discover Our Newest Collection Today</p>

                <div className="relative w-[183px] h-[44px] flex justify-center items-center mt-[25px] rounded text-W900 bg-B900">
                    <p>View Collection</p>
                    <Image src="/Arrow Right.png" width={24} height={24} alt="Arrow Right"/>
                </div>
            </div>
            <div className="relative">
                <div className="bg-W200 w-[340px] h-[340px] absolute bottom-0 right-0 rounded-full"></div>
                <Image src="/Man.png" alt="man picture" width={255} height={382} className="relative"/>
            </div>
        </div>
      </div>
    );
  }
  