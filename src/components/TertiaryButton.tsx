interface Props {
  title: string;
}

const TertiaryButton = ({ title }: Props) => {
  return (
    <div className="bg-black rounded-full justify-center items-center flex hover:cursor-pointer py-4 px-10 md:px-12 lg:px-16 hover:bg-[#4D4DAF]">
      <h1 className="text-nowrap font-outfit font-semibold text-sm text-white">
        {title.toUpperCase()}
      </h1>
    </div>
  );
};

export default TertiaryButton;
