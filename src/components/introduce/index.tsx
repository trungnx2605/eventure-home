import { VoiceIcon } from "../../assets/icons";

const Introduce = () => {
  return (
    <div className="flex flex-col items-center py-16 bg-neutral max-[440px]:px-5">
      <div className="flex flex-col">
        <div className="flex items-center gap-x-6 eventure-headline-1 text-[white] max-[950px]:flex-col">
          <div className="relative max-[440px]:eventure-headline-3">
            <span className="text-gradient bg-gradient-primary">Eventure</span>
            <VoiceIcon
              width={30}
              height={30}
              className="text-secondary-2 absolute -top-2 -right-7"
            />
          </div>
          <p className="max-[440px]:eventure-headline-3 ml-5 sm:flex justify-center text-center ">
            The Ultimate Virtual
          </p>
        </div>
        <div className="flex justify-center items-center sm:flex text-center ">
          <p className="eventure-headline-1 text-[white]  max-[440px]:eventure-headline-3">
            Event Platform
          </p>
        </div>
      </div>
      <div className="mt-6 text-sm flex flex-col items-center md:flex justify-center text-center ">
        <p className="text-[white] eventure-caption-3  max-[440px]:eventure-caption-1">
          Host engaging conferences, webinars and events with advanced features
          and seamless user
        </p>
        <p className="text-[white] eventure-caption-3 max-[440px]:eventure-caption-1">
          interface that closely replicate in-person experiences.
        </p>
      </div>
      <div className=" mt-8 mb-4">
        <button className=" bg-secondary-2 w-48 h-12 text-sm rounded-md eventure-caption-1-semibold hover:cursor-pointer hover:opacity-90">
          GET STARTED
        </button>
      </div>
      <div className=" ">
        <img src="src/assets/images/introduce-img.png" alt="" />
      </div>
    </div>
  );
};
export default Introduce;
