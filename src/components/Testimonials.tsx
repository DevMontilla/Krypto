import { users } from "../utils/users";
import TertiaryButton from "./TertiaryButton";
import Testimony from "./Testimony";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 pb-20">
      <h4 className="font-outfit font-light text-white mb-3">TESTIMONIALS</h4>
      <h1 className="font-outfit text-4xl font-semibold md:text-5xl lg:text-6xl md:font-bold text-white">
        Read What Others
      </h1>
      <h1 className="font-outfit text-4xl font-semibold md:text-5xl lg:text-6xl md:font-bold text-white leading-none ">
        Have To Say
      </h1>
      <div className="flex flex-col pt-10 md:flex-row justify-center md:w-full">
        {users.map((user) => (
          <Testimony
            name={user.name}
            src={user.avatar}
            testimony={user.testimony}
            key={user.name}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#4D4DAF] to-[#AAD9D9] w-full rounded-xl py-16 mt-10">
        <h4 className="font-outfit font-medium mb-3">ARE YOU READY?</h4>
        <h1 className="font-outfit text-4xl font-semibold md:text-5xl lg:text-6xl md:font-bold text-white capitalize leading-none">
          Be a part of the
        </h1>
        <h1 className="font-outfit text-4xl font-semibold md:text-5xl lg:text-6xl md:font-bold text-white capitalize mb-7">
          Next big thing
        </h1>
        <TertiaryButton title="get started" />
      </div>
    </div>
  );
};

export default Testimonials;
