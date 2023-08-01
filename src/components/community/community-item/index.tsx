import { CommunityItemType } from "../../../types";

const CommunityItem = ({ data }: { data: CommunityItemType }) => {
  return (
    <div className="flex md:max-w-[626px] md:max-h-[362px] h-full w-full md:rounded-3xl md:border md:border-neutral-600 md:relative select-none">
      <div className="absolute top-0 -left-2 hidden md:flex">
        <img src="src/assets/images/quote.svg" alt="" />
      </div>
      <div className=" max-w-[269px] pl-10 pt-4 max-h-[346px] hidden md:flex">
        <img src={data.img} alt="img" className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col border border-primary-3 bg-neutral-100 rounded-3xl md:h-[362px] h-[422px] max-h-[422px] md:max-h-[362px] max-w-[324px] w-[324px] pt-6 px-[18px] gap-y-2 mt-4 md:mx-4 relative">
        <div className="absolute top-[-20px] -left-4 md:hidden">
          <img src="src/assets/images/quote.svg" alt="" />
        </div>
        {data.descriptions.map((item, index) => (
          <p key={index} className="eventure-caption-2 text-neutral-700">
            {item}
          </p>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center absolute left-[1px] md:left-0 md:bottom-0 md:bg-neutral-100/60 bg-neutral-300 bottom-[1px] community-info py-[6px] px-8 gap-y-1">
        <p className="eventure-label-2 text-[white] pt-1">{data.name}</p>
        <p className="eventure-caption-4-sora text-grey-400">{data.position}</p>
      </div>
    </div>
  );
};

export default CommunityItem;
