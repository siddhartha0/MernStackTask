import { useState } from "react";
import { getUserData } from "../api/UserForm";
import toast, { Toaster } from "react-hot-toast";

export type formField = {
  firstName: string;
  email: string;
  messages: string;
  connectionMethod: string;
  number: string;
};

function ContactusFom() {
  const [userDetail, setuserDetails] = useState<formField>({
    firstName: "",
    email: "",
    number: "",
    messages: "",
    connectionMethod: "number",
  });

  const [checkTicked, setCheckTicked] = useState(false);

  const handleChanges = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const value = e.target.value;
    setuserDetails({ ...userDetail, [e.target.name]: value });
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkTicked) {
      const res = await getUserData(userDetail);
      console.log(res.data);
      if (res.status === 200) {
        toast.success(res.data.msg);
        setuserDetails({
          firstName: "",
          email: "",
          number: "",
          messages: "",
          connectionMethod: "",
        });
      } else {
        toast.error("sorry something went wrong");
      }
    }
  };

  return (
    <div className="flex text-white flex-col bg-dark gap-[48px] p-formLaptopPadding">
      <Toaster />
      <div className="flex flex-col gap-[12px] laptop:w-[800px] place-items-center text-center m-auto">
        <header className="text-3xl font-semibold">Get in touch with us</header>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          qui, alias aliquid sequi sit repellendus et saepe rem eaque quas
          architecto esse nisi.
        </span>
      </div>

      <form
        className="flex flex-col gap-[24px] w-[100%] bg-secondary  text-white p-[32px] tablet:w-[800px] laptop:w-[1200px]  m-auto "
        onSubmit={submitForm}
      >
        <div className="flex flex-col tablet:grid tablet:gap-[20px] tablet:grid-cols-fromGridTab laptop:grid-cols-formGridLaptop  ">
          <div className="flex flex-col gap-[8px]">
            <label className="capitalize">First Name</label>
            <input
              type="text"
              name="firstName"
              value={userDetail.firstName}
              onChange={handleChanges}
              className="bg-input p-[12px] outline-none border-none rounded-md"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="capitalize">email address</label>
            <input
              type="email"
              name="email"
              value={userDetail.email}
              onChange={handleChanges}
              className="bg-input p-[12px] outline-none border-none rounded-md"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="capitalize">Phone number</label>
            <input
              type="string"
              name="number"
              value={userDetail.number}
              onChange={handleChanges}
              className="bg-input p-[12px] outline-none border-none rounded-md"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="capitalize">Get in touch with us</label>
            <select
              name="connectionMethod"
              value={userDetail.connectionMethod}
              onChange={handleChanges}
              className="bg-input p-[12px] outline-none border-none rounded-md"
            >
              <option value="Number">Number</option>
              <option value="Email">Email</option>
            </select>
          </div>
          <div className="flex flex-col gap-[8px] col-span-2">
            <label className="capitalize">Messages</label>
            <textarea
              name="messages"
              value={userDetail.messages}
              onChange={handleChanges}
              className="bg-input p-[12px] outline-none border-none rounded-md min-h-[147px]"
            />
          </div>
        </div>
        <div className="flex place-items-center gap-4">
          <input
            type="checkbox"
            className="w-[20px] h-[16px]"
            onChange={(e) => setCheckTicked(e.target.checked)}
          />
          <span>I agree with Lookscout Privacy Policy</span>
        </div>

        <button
          className={`bg-button w-[88px] rounded-md capitalize ${
            checkTicked
              ? "cursor-pointer"
              : "cursor-not-allowed pointer-events-none"
          } `}
          style={{
            padding: "12px 18px 12px 18px",
          }}
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default ContactusFom;
