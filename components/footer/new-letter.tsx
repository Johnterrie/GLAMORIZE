import { Input } from "../ui/input";
import { Button } from "../ui/button";


export default function NewsLetter() {
    return (
      <div className="h-[200px] bg-W100 relative flex justify-center items-center">
        <div className="w-[1116px] h-[82px] relative flex justify-between items-center">
          <div className="w-[387px] relative">
            <h1 className="text-normalBold relative font-bold mb-[5px]">Join Our Newsletter</h1>
            <p className="text-regular text-B300 relative font-light">We love to surprise our Customers with occasional gifts.</p>
          </div>
          <div className="w-[452px] h-[45px] relative flex justify-between items-center">
            <Input className="w-[320px] relative h-full" placeholder="Your Email Address"/>
            <Button className="bg-B900 relative w-[116px] h-[44px] text-W900">Subscribe</Button>
          </div>
        </div>
      </div>
    );
  }
  