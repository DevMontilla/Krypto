import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Input = {
  email: string;
};

const NewsletterForm = () => {
  const [showAlert, setShowAlert] = useState(false);

  const { register, handleSubmit, resetField } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    setShowAlert(true);
    resetField("email");
  };

  return (
    <div className="pb-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#14165A] rounded-full h-12 flex items-center justify-between px-[4px] max-w-[345px]"
      >
        <input
          {...register("email", { required: true })}
          placeholder="Email Address"
          type="email"
          className="h-10 bg-transparent focus:border-none text-white w-full rounded-full p-2 text-nowrap focus:outline-none font-thin text-sm"
        />
        <button
          type="submit"
          className="h-10 w-32 rounded-full bg-[#8F8FDB] uppercase text-white font-outfit hover:bg-[#7d7de6]"
        >
          submit
        </button>
      </form>
      {showAlert && (
        <div className="fixed top-3 h-12 rounded-sm bg-[#daffdd] flex items-center font-poppins text-green-900 transition-shadow px-5 justify-between text-xs w-[360px]">
          Successfully uploaded
          <button
            type="button"
            className="relative inline-flex items-center justify-center rounded-full"
            onClick={() => setShowAlert(false)}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;
