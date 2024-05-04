import techCrunch from "../assets/techcrunch.svg";
import fastCompany from "../assets/fastcompany.svg";
import mitCompany from "../assets/mit.svg";
import forbesCompany from "../assets/forbes.svg";

const FeaturedOn = () => {
  return (
    <div className="py-10 flex flex-col justify-center items-start">
      <h4 className="font-outfit font-light text-white mb-3">FEATURED ON</h4>
      <div className="w-full bg-[#5B52A0] opacity-60 rounded-sm p-3 sm:flex justify-around items-center">
        <div className="flex flex-row justify-around items-center w-full">
          <img src={techCrunch} alt="tech-crunch" className="h-[54px]" />
          <img src={fastCompany} alt="fast-company" className="h-[21px]" />
        </div>
        <div className="flex flex-row justify-around items-center w-full pb-3 sm:pb-0">
          <img src={mitCompany} alt="mit" className="h-[29px]" />
          <img src={forbesCompany} alt="forbes" className="h-[23px]" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedOn;
