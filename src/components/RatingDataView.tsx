interface RatingDataViewProps {
  leftLabel: string;
  rightLabel: string;
  rating: number;
}

function RatingDataView({
  leftLabel,
  rightLabel,
  rating,
}: RatingDataViewProps) {
  return (
    <div className="flex justify-between items-center md:w-[450px] w-56">

      <h3 className="flex justify-start lg:text-lg text-xs text-black font-bold md:w-[50px]">
        {leftLabel}
      </h3>

      <div className="flex space-x-1 w-2/3">
        <div
          className="h-5 bg-pink-400 "
          style={{ width: `${rating * 10}%` }}
        ></div>
        <div
          className="w-2/4 h-5  bg-cyan-400"
          style={{ width: `${100 - rating * 10}%` }}
        ></div>
      </div>

      <h3 className="flex justify-end lg:text-lg text-xs text-black font-bold md:w-[70px] ">
        {rightLabel}
      </h3>
    </div>
  );
}

export default RatingDataView;
