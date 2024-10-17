import Image from "next/image";
import Ads from "./ads";
import Header from "./header";

export default function NavBar() {
  return (
    <div className="w-[100vw]">
      <Ads/>
      <Header/>
    </div>
  );
}
