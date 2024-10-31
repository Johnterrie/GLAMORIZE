import SectionOne from "./section-1";
import SectionTwo from "./section-2";
import SectionThree from "./section-3";
import SectionFour from "./section-4";
import SectionFive from "./section-5";

export default function HomePage() {
    return (
      <div className="w-full">
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
      </div>
    );
  }
  