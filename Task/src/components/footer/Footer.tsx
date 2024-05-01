import Chooseus from "./Chooseus";
import CompanyInfo from "./CompanyInfo";
import Products from "./Products";
import Resources from "./Resources";
import Company from "./Company";
import footerLogo from "../../assets/footerIcon.png";

function Footer() {
  return (
    <div
      className="flex flex-col gap-16 bg-white "
      style={{
        padding: "64px 0px 64px 0px",
      }}
    >
      <div
        className="grid laptop:min-w-[1280px] gap-10 justify-items-center   "
        style={{
          padding: "0px 32px 0px 32px",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px,1fr))",
        }}
      >
        <CompanyInfo />
        <Products />
        <Resources />
        <Chooseus />
        <Company />
      </div>

      <div className="flex flex-col place-items-center gap-4">
        <img src={footerLogo} alt="" className="w-8" />
        <article>© 2023 Lookscout. All Rights Reserved.</article>
      </div>
    </div>
  );
}

export default Footer;
