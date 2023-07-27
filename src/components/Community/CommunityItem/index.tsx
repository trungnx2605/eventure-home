import { CommunityItemType } from "../../../types";

const CommunityItem = ({ data }: { data: CommunityItemType }) => {
  return (
    <div className="flex max-w-[626px] max-h-[362px] h-full w-full rounded-3xl border border-neutral-600 relative">
      <div className="absolute top-0 -left-2">
        <img src="src/assets/images/quote.svg" alt="" />
      </div>
      <div className=" max-w-[269px] pl-10 pt-4 max-h-[346px]">
        <img
          src={data.img}
          alt="img"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col border border-primary-3 bg-neutral-100 rounded-3xl h-[362px] max-h-[362px] max-w-[324px] w-[324px] pt-6 px-[18px] gap-y-2 mt-4 mx-4">
        {data.descriptions.map((item, index) => (
          <p key={index} className="eventure-caption-2 text-neutral-700">
            {item}
          </p>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center absolute left-0 bottom-0 community-info py-[6px] px-8 gap-y-1">
        <p className="eventure-label-2 text-[white] pt-1">{data.name}</p>
        <p className="eventure-caption-4-sora text-grey-400">{data.position}</p>
      </div>
    </div>
  );
};

export default CommunityItem;
