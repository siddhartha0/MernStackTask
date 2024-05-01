import logo from "../../assets/Icon.png";
import plus from "../../assets/plus.png";
import share from "../../assets/share.png";
import tick from "../../assets/tick.png";
import photo from "../../assets/Photo.png";
import arrow from "../../assets/arrow.png";

function MiddlePart() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-col gap-[32px] tablet:gap-[64px] p-mobileMiddleBodyPadding laptop:p-laptopMiddleBodyPadding">
        <div className="flex flex-col gap-[16px] place-items-center">
          <header
            className="text-[24px] table:text-[32px] text-black font-semibold
            text-opacity-[0.9]
          "
          >
            Messaging for all
          </header>
          <p className="hidden tablet:flex text-black text-opacity-[.8] text-center">
            user generated content in real-time will have multiple touchpoints
            for offshoring.
          </p>
        </div>

        <div className="flex flex-col tablet:grid gap-4 tablet:p-laptopMiddleBodyContentPadding tablet:grid-cols-middleBodyContent">
          <div className="flex flex-col gap-4 ">
            <div className="flex w-[48px] h-[48px] rounded-[30px] bg-button p-2">
              <img src={logo} alt="" className="flex m-auto " />
            </div>
            <header className="capitalize text-[22px] font-semibold leading-[24px]">
              Easier work organization
            </header>
            <article className="text-black text-opacity-[0.7]">
              Effeciently unleash corss media information without corss media
              value. quickly timely deliverables for rea-time schemas
            </article>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex w-[48px] h-[48px] rounded-[30px] bg-button p-2">
              <img src={plus} alt="" className="flex m-auto" />
            </div>
            <header className="capitalize text-[22px] font-semibold leading-[24px]">
              Fast Connection
            </header>
            <article className="text-black text-opacity-[0.7] text-start">
              Completely pursue scalable customer cross- media through
              potentialities. Holistically quickly installed portals.
            </article>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex w-[48px] h-[48px] rounded-[30px] bg-button p-2">
              <img src={share} alt="" className="flex m-auto" />
            </div>
            <header className="capitalize text-[22px] font-semibold leading-[24px]">
              streamlined processes
            </header>
            <article className="text-black text-opacity-[0.7]">
              Objectively innovate empowered scalable manufactured products
              whereas parallel platforms predominate extensible.
            </article>
          </div>
        </div>
      </div>

      <div
        className="flex w-[100%] "
        style={{
          padding: "64px 0px 64px 0px",
        }}
      >
        <div
          className="flex flex-col laptop:flex-row gap-[124px] place-items-center justify-evenly w-full  "
          style={{
            padding: "0px 32px 0px 32px",
          }}
        >
          <div className="flex flex-col max-w-[532px] gap-[24px]">
            <header className="text-black text-[32px] leading-[42px] font-semibold ">
              Demonstrate branding consequently think outside
            </header>
            <p className="text-black text-opacity-[0.7]">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna vulputate pellentesque a diam tincidunt. Aenean malesuada
              tellus tellus faucibus mauris quisque mauris in.
            </p>
            <div className="flex flex-col gap-[10px]">
              <div className="flex place-items-center gap-2">
                <img src={tick} alt="" />
                <span>Enterprise-grade security</span>
              </div>

              <div className="flex place-items-center gap-2">
                <img src={tick} alt="" />
                <span>99.9% guaranteed uptime SLA</span>
              </div>

              <div className="flex place-items-center gap-2">
                <img src={tick} alt="" />
                <span>Designated customer success team</span>
              </div>
            </div>

            <div
              className=" flex bg-button w-[133px] place-items-center gap-1.5 rounded-md h-11 text-white"
              style={{
                padding: "12px 18px 12px 18px",
              }}
            >
              <button>Start now</button>
              <img src={arrow} alt="" />
            </div>
          </div>

          <div className="max-w-[532px]">
            <img src={photo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddlePart;
