import ProductItem from "@/components/products/productItem";
import Items from "@/components/ui/items";
import RouteBar from "@/components/ui/routeBar";
import { SectionThreeData } from "@/data";
import { ProductType } from "@/types"
import Image from "next/image";
import Link from "next/link";



const product: ProductType = {
  name: "Raw Black T-Shirt Lineup",
  inStock: true,
  price: "75.00"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        <RouteBar {...product} />
        <ProductItem {...product} />
        <div className=" w-[1000px] flex items-start justify-between">
          <div className="w-[241px] h-[98px] flex flex-col justify-between">
            <div className="w-full h-[41px] flex items-center pl-[15px]">
              <Image className="mr-[10px]" src="/More.png" width={24} height={24} alt="More" />
              <Link href="/product/details">Details</Link>
            </div >

            <div className="w-full h-[41px] flex items-center pl-[15px]" >
              <Image className="mr-[10px]" src="/Empty Star.png" width={24} height={24} alt="More" />
              <Link href="/product/review">Reviews</Link>
            </div>
          </div>
          {children}
        </div>
        <div className="w-[1092px] mt-[100px] mb-[50px] h-[434px] flex justify-between items-center">
          {SectionThreeData.map((result) => {
            return (<Items key={result.id} width={result.width} height={result.height} src={result.src} alt={result.name} name={result.name} inStock={result.inStock} price={result.price} />)
          })}
        </div>
      </div>
    </div>
  );
}
