interface Props {
  title: string;
}

const PrimaryButton = ({ title }: Props) => {
  return (
    <div className="bg-[#8F8FDB] rounded-full justify-center items-center flex hover:cursor-pointer hover:bg-[#7d7de6]">
      <span className="text-nowrap font-outfit font-semibold text-sm text-white my-4 mx-10 md:my-4 md:mx-12 lg:mx-16">
        {title.toUpperCase()}
      </span>
    </div>
  );
};

export default PrimaryButton;
