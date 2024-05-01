import morgan from "../../assets/morgan.png";
import waller from "../../assets/waler.png";
import steve from "../../assets/steve.png";
import fb from "../../assets/fb.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import tele from "../../assets/tele.png";

function TeamMembers() {
  return (
    <div className="flex flex-col gap-16 p-mobileTeamMemberPadding tablet:p-laptopTeamMemberPadding">
      <div className="flex gap-3 flex-col laptop:w-[800px] m-auto place-items-center text-center">
        <header className="text-black text-[32px] capitalize leading-10">
          The Core of our team
        </header>
        <article className="text-black text-opacity-[0.7]">
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment of people and great talent that
          truly rocks.
        </article>
      </div>

      <div
        className="flex flex-col tablet:grid gap-8 place-items-center tablet:p-teamMemberPaddingForLaptop "
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(384px,1fr))",
        }}
      >
        <div className="flex flex-col gap-4 capitalize">
          <img src={morgan} alt="" className="w-[280px] h-[280px]" />
          <header className="text-black text-[32px] ">Morgan Drew</header>
          <span className="text-black text-opacity-[0.7] -mt-4">Manager</span>
          <div className="flex gap-4 ">
            <img src={twitter} alt="" />
            <img src={fb} alt="" />
            <img src={linkedin} alt="" />
            <img src={tele} alt="" />
          </div>
        </div>

        <div className="flex flex-col gap-4 capitalize">
          <img src={waller} alt="" className="w-[280px] h-[280px]" />
          <header className="text-black text-[32px] ">Jeffery Walker</header>
          <span className="text-black text-opacity-[0.7] -mt-4">
            Lead Designer
          </span>
          <div className="flex gap-4 ">
            <img src={twitter} alt="" />
            <img src={fb} alt="" />
            <img src={linkedin} alt="" />
            <img src={tele} alt="" />
          </div>
        </div>

        <div className="flex flex-col gap-4 capitalize">
          <img src={steve} alt="" className="w-[280px] h-[280px]" />
          <header className="text-black text-[32px] ">Andrew Steve</header>
          <span className="text-black text-opacity-[0.7] -mt-4">
            UI/UX Designer
          </span>
          <div className="flex gap-4 ">
            <img src={twitter} alt="" />
            <img src={fb} alt="" />
            <img src={linkedin} alt="" />
            <img src={tele} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;
