import { UpComingItemType } from "../../../types";

const UpComingItem = ({ data }: { data: UpComingItemType }) => {
  return (
    <div className="flex flex-col w-full sm:max-w-[500px] md:max-w-[760px] select-none">
      <img src={data.img} alt="" className="w-full" />
      <p className="eventure-body-4 text-[white] mt-8 mb-2">{data.title}</p>
      <p className="eventure-body-1 md:eventure-body-2 text-grey-400">
        {data.desc}
      </p>
    </div>
  );
};

export default UpComingItem;
