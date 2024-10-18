import ContentFooter from "./content";
import Copyright from "./copy-right";
import NewsLetter from "./new-letter";


export default function Footer() {
    return (
      <div className="h-[629px] w-full relative">
            <NewsLetter/>
            <ContentFooter/>
            <Copyright/>
      </div>
    );
  }
  