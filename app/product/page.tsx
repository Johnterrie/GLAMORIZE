import ProductItem from "@/components/products/productItem"
import RouteBar from "@/components/ui/routeBar"
import { ProductType } from "@/types"


const product: ProductType = {
    name : "Raw Black T-Shirt Lineup",
    inStock: true,
    price: "75.00"
}

const ProductPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <RouteBar {...product}/>
      <ProductItem {...product}/>
    </div>
  )
}

export default ProductPage

