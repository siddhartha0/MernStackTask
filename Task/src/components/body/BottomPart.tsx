import down from "../../assets/down.png";
import twill from "../../assets/twillio.png";
import google from "../../assets/google.png";
import lastCompany from "../../assets/lastcompany.png";
import pinterest from "../../assets/pintrest.png";
import slack from "../../assets/slack.png";

import paypal from "../../assets/paypal.png";

function BottomPart() {
  return (
    <div>
      <div className="flex flex-col gap-16 p-bottomBodyPaddingForMobile tablet:p-bottomBodyPaddingForLaptop">
        <div className="flex flex-col gap-2 place-items-center laptop:w-[800px] m-auto text-center">
          <header className="text-[24px] tablet:text-[32px] font-semibold">
            Frequently asked questions
          </header>
          <p className="text-black text-opacity-[0.8]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            architecto cumque fugiat aliquam ut explicabo dicta itaque! Itaque
            natus iste quam expedita. Autem nam totam quo, aliquid eligendi ea?
            Minima.
          </p>
        </div>

        <div
          className="flex flex-col w-[100%]   laptop:w-[1240px] m-auto "
          style={{
            padding: "0px 32px 0px 32px",
          }}
        >
          <div
            className="flex  border-2 border-black border-opacity-[0.08]  place-items-center justify-between"
            style={{
              padding: "20px 32px 20px 32px",
            }}
          >
            <div>
              <header className="text-[18px] font-semibold">
                Authentification Issues
              </header>
              <span className="text-black text-opacity-[0.8]">
                Porttitor nec est nisi, id nunc,
              </span>
            </div>

            <div
              className="text-button bg-[#f5faff]"
              style={{
                padding: "4px 12px 4px 12px",
              }}
            >
              <span>New</span>
            </div>
          </div>

          <div
            className="flex  border-2 border-black border-opacity-[0.08]  place-items-center justify-between"
            style={{
              padding: "20px 32px 20px 32px",
            }}
          >
            <div>
              <header className="text-[18px] font-semibold">
                Authentification Issues
              </header>
            </div>

            <div
              className="hidden laptop:flex"
              style={{
                padding: "4px 12px 4px 12px",
                gap: "12px",
              }}
            >
              <span>Updated today</span>
              <img src={down} alt="" />
            </div>
          </div>

          <div
            className="flex  border-2 border-black border-opacity-[0.08]  place-items-center justify-between"
            style={{
              padding: "20px 32px 20px 32px",
            }}
          >
            <div>
              <header className="text-[18px] font-semibold">
                Authentification Issues
              </header>
            </div>

            <div
              className="hidden laptop:flex"
              style={{
                padding: "4px 12px 4px 12px",
                gap: "12px",
              }}
            >
              <span>Updated yesterday</span>
              <img src={down} alt="" />
            </div>
          </div>

          <div
            className="flex  border-2 border-black border-opacity-[0.08]  place-items-center justify-between"
            style={{
              padding: "20px 32px 20px 32px",
            }}
          >
            <div>
              <header className="text-[18px] font-semibold">
                Authentification Issues
              </header>
            </div>

            <div
              className="hidden laptop:flex"
              style={{
                padding: "4px 12px 4px 12px",
                gap: "12px",
              }}
            >
              <span>Updated 2 days ago</span>
              <img src={down} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col bg-[#2b63d9] text-white"
        style={{
          padding: "64px 0px 64px 0px",
        }}
      >
        <div
          className="flex flex-col gap-2 w-[100%] laptop:w-[1280px] m-auto place-items-center"
          style={{ padding: "0px 32px 0px 32px" }}
        >
          <span className="uppercase">1% of the industry</span>
          <header className="text-[30px] laptop:w-[600px] text-center">
            Welcome to your new digital reality that which will rock your world
            truly at all.
          </header>

          <div className="flex w-[100%]  place-content-center flex-col tablet:flex-row gap-4 place-items-center  mt-6 ">
            <button
              className="w-[100%] tablet:w-[10%]  bg-white  text-button rounded-md font-semibold"
              style={{ padding: "12px 18px 12px 18px" }}
            >
              Sign up
            </button>
            <button
              className=" w-[100%] tablet:w-[10%] bg-button text-white rounded-md font-semibold"
              style={{ padding: "12px 18px 12px 18px" }}
            >
              Log in
            </button>
          </div>
        </div>

        <div
          className="grid place-items-center mt-20 gap-8"
          style={{
            padding: "32px 0px 32px 0px",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          }}
        >
          <img src={twill} alt="" />
          <img src={slack} alt="" />
          <img src={google} alt="" />
          <img src={paypal} alt="" />
          <img src={pinterest} alt="" />
          <img src={lastCompany} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BottomPart;
