import fb from "../../assets/facebook.png";
import g from "../../assets/g.png";
import apple from "../../assets/apple.png";
import insta from "../../assets/insta.png";

import companyLogo from "../../assets/Company Logo.png";
function CompanyInfo() {
  return (
    <div className="flex flex-col gap-4 col-span-2 tablet:col-span-1 ">
      <img src={companyLogo} className="w-[160px]" alt="" />
      <span className="text-[#5F6D7E]">
        Generate outside the box thinking with the possibility to targtet the
        low.
      </span>
      <div className="flex gap-6 place-items-center w-[90%] m-auto mt-1  tablet:m-0 justify-between tablet:justify-normal">
        <img src={fb} alt="" />
        <img src={g} alt="" />
        <img src={apple} alt="" />
        <img src={insta} alt="" />
      </div>
    </div>
  );
}

export default CompanyInfo;
