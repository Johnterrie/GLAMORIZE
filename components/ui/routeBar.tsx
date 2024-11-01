import { ProductType } from "@/types"
import Image from "next/image"

const RouteBar = (Product : ProductType) => {

    const { name }: ProductType = Product
  return (
    <div className="w-[1092px] h-[35px] flex text-regular items-center">
      <span>Glamorize</span>
      <div className="flex items-center">
        <Image src="/Chevron Right.png" height={24} width={24} alt="Chevron Right"/>
        <span>{name}</span>
      </div>
    </div>
  )
}

export default RouteBar
