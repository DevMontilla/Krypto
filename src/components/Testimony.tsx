interface Props {
  src: string;
  name: string;
  testimony: string;
}

const Testimony = ({ src, name, testimony }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#14165A] w-[190px] h-[190px] rounded-2xl my-6 mx-4">
      <img
        className="h-20 w-20 rounded-full -mt-12"
        src={src}
        alt="testimony-user-avatar"
      />
      <h4 className="font-outfit font-light text-white m-5 uppercase text-sm">{name}</h4>
      <h6 className="font-roboto font-extralight text-white text-[11px] text-center mx-2">{testimony}</h6>
    </div>
  );
};

export default Testimony;
