interface Props {
  title: string;
}

const SecondaryButton = ({ title }: Props) => {
  return (
    <div className="bg-none border-white border-[1px] rounded-full justify-center items-center flex md:ml-5 hover:cursor-pointer hover:bg-[#7d7de6]">
      <h1 className="text-nowrap font-outfit font-semibold text-sm text-white my-4 mx-10 md:my-4 md:mx-12 lg:mx-16">
        {title.toUpperCase()}
      </h1>
    </div>
  );
};

export default SecondaryButton;
