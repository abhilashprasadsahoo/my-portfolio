import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon, onClick }) => {
  return (
    <div className="w-full px-12 py-10 rounded-lg shadow-shadowOne flex items-start bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-300">
      <div className="flex flex-col gap-6 w-full">
        {/* Icon */}
        <div>
          <span className="text-5xl text-designColor">{icon}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-titleFont font-bold text-gray-300">
          {title}
        </h2>

        {/* Description with hidden overflow */}
        <div className="relative">
          <p className="text-base text-gray-400 max-h-24 overflow-hidden group-hover:overflow-y-auto pr-2 transition-all duration-300">
            {des}
          </p>

          {/* Gradient fade at bottom when truncated */}
          <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#202327] to-transparent group-hover:hidden"></div>
        </div>

        {/* Arrow button (always at bottom) */}
        <span
          onClick={onClick}
          className="text-xl md:text-2xl text-designColor cursor-pointer hover:translate-x-2 transition-transform duration-300 self-end"
        >
          <HiArrowRight />
        </span>
      </div>
    </div>
  );
};

export default Card;
