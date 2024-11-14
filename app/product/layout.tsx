import ProductItem from "@/components/products/productItem";
import RouteBar from "@/components/ui/routeBar";
import { ProductType } from "@/types"



const product: ProductType = {
    name : "Raw Black T-Shirt Lineup",
    inStock: true,
    price: "75.00"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (   
      <div className="w-full flex flex-col justify-center items-center">
        <RouteBar {...product}/>
        <ProductItem {...product}/>
        <div className="h-[700px] w-[1116px] flex items-center justify-between">
            <div className="w-[241px] h-[98px] border-2 border-red-100">
                <div>Hello 1</div>
                <div>Hello 2</div>
            </div>
            {children}
        </div>
      </div>
  );
}
