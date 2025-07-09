import React from "react";
import { BadgeCheck } from "lucide-react";

interface CertificationUnitProps {
  title: string;
  status: "Verified" | "Pending" | "Expired";
}

const CertificationUnit: React.FC<CertificationUnitProps> = ({
  title,
  status,
}) => {
  return (
    <div className="relative w-46 h-20 bg-green-600 rounded-md p-3 text-white shadow-md font-sans overflow-hidden ">
      {/* Ribbon corner */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-l-[20px] border-t-transparent border-l-green-500"></div>

      {/* Icon + Title */}
      <div className="flex items-center gap-2 mb-4">
        <BadgeCheck className="w-5 h-5 text-white" />
        <span className="text-xs font-bold">{title}</span>
      </div>

      {/* Status */}
      <div className="text-base font-semibold flex justify-between">
        <div>{status}</div>
        <div className=" bg-green-500 text-white text-xs px-2 py-0.5 rounded-sm">
          SKILL
        </div>
      </div>

      {/* Skill label */}
    </div>
  );
};

export default CertificationUnit;
