import { VoiceIcon } from "../../assets_home/icons";

const Introduce = () => {
  return (
    <div className="flex flex-col items-center pt-32 pb-16 bg-neutral md:px-16 relative overflow-hidden">
      <img
        src="src/assets_home/images/introduce-overlay.png"
        alt="img"
        className="absolute top-0 left-0 right-0 max-h-full w-full hidden md:flex"
      />
      <img
        src="src/assets_home/images/introduce-gradient.png"
        alt="img"
        className="absolute top-16 left-1/2 -translate-x-1/2 z-0 opacity-50 hidden md:flex"
      />
      <img
        src="src/assets_home/images/introduce-ellipse.png"
        alt="img"
        className="absolute top-16 left-1/2 -translate-x-1/2 z-0 hidden md:flex"
      />
      <img
        src="src/assets_home/images/introduce-gradient-mb.png"
        alt="img"
        className="absolute top-1/2 -translate-y-1/4 left-0 w-full right-0 z-0 opacity-30 md:hidden flex"
      />
      <img
        src="src/assets_home/images/introduce-ellipse-mb.png"
        alt="img"
        className="absolute top-1/2 -translate-y-1/4 left-0 right-0 w-full z-0 md:hidden flex"
      />
      <div className="inline flex-wrap text-center eventure-headline-3 md:eventure-headline-1 text-[white] px-5 w-screen max-w-screen md:max-w-[1030px] relative z-10">
        <div className="relative inline">
          <span className="text-gradient bg-gradient-primary">Eventure</span>
          <VoiceIcon
            width={30}
            height={30}
            className="text-secondary-2 inline -mt-14"
          />
        </div>
        <p className="ml-4 inline">The Ultimate Virtual Event Platform</p>
      </div>
      <div className="mt-6 text-sm flex items-center justify-center max-w-[995px] px-5 flex-wrap relative z-10">
        <p className="text-[white] md:eventure-caption-3 eventure-caption-1 text-center">
          Host engaging conferences, webinars and events with advanced features
          and seamless user interface that closely replicate in-person
          experiences.
        </p>
      </div>
      <div className="mt-8 mb-10 relative z-10">
        <button className=" bg-secondary-2 w-48 h-12 text-sm rounded-md eventure-caption-1-semibold hover:cursor-pointer hover:opacity-90">
          GET STARTED
        </button>
      </div>
      <div className="relative z-10">
        <img src="src/assets_home/images/introduce-img.png" alt="" />
      </div>
    </div>
  );
};
export default Introduce;
