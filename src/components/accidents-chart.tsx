"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/card";
import type { AccidentCategory, AccidentPeriod } from "@/types/dashboard";

const filters: { label: string; period: AccidentPeriod }[] = [
  { label: "Today", period: "today" },
  { label: "May'24", period: "month" },
  { label: "FY 24-25", period: "year" },
];

const categoryColors = {
  LMHP: ["#67FFA4", "#50C27E", "#B8FFD5"],
  HHP: ["#3250EC", "#5068E3", "#B0BCFF"],
  Genset: ["#FF783E", "#EA9672", "#FFCBB5"],
} as const;

const accidentOuterData = [
  { value: 1, color: "#FF783E" },
  { value: 1, color: "#FFCBB5" },
  { value: 1, color: "#3250EC" },
  { value: 1, color: "#B0BCFF" },
  { value: 1, color: "#67FFA4" },
  { value: 1, color: "#B8FFD5" },
];

const accidentInnerData = [
  { value: 1, color: "#EA9672" },
  { value: 1, color: "#5068E3" },
  { value: 1, color: "#50C27E" },
];

type LegendItem = {
  color: string;
  name: string;
  value: number;
};

type AccidentsChartProps = {
  items: AccidentCategory[];
  onPeriodChange: (period: AccidentPeriod) => void;
  selectedPeriod: AccidentPeriod;
  total: number;
};

function getLegendGroups(items: AccidentCategory[]): LegendItem[][] {
  return items.map((item) => {
    const colors = categoryColors[item.name as keyof typeof categoryColors];

    return [
      { color: colors[0], name: item.name, value: item.total },
      { color: colors[1], name: "Reportable", value: item.reportable },
      { color: colors[2], name: "Non-Reportable", value: item.nonReportable },
    ];
  });
}

export function AccidentsChart({ items, onPeriodChange, selectedPeriod, total }: AccidentsChartProps) {
  const accidentLegendGroups = getLegendGroups(items);

  return (
    <Card className="relative h-[274px] w-[421px] bg-[#051E1C]">
      <h2 className="absolute left-[21px] top-[16.43px] text-[16px] font-semibold leading-6 text-white/70">
        No. of Accidents
      </h2>
      <div className="absolute left-[191.96px] top-4 flex h-[23px] w-[196px] overflow-hidden rounded-[5.82px]">
        {filters.map((filter) => (
          <button
            className={`h-[23px] border-r border-[#626262] text-[10px] font-normal last:border-r-0 ${filter.label === "May'24" ? "w-[65px]" : "w-[66px]"
              } ${selectedPeriod === filter.period ? "bg-[#147A6F] text-white" : "bg-[#0A3D38] text-[#CACCCC]"
              }`}
            key={filter.period}
            onClick={() => onPeriodChange(filter.period)}
            type="button"
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="absolute left-[52px] top-[112.43px] h-[122.02px] w-[122.02px]">
        <ResponsiveContainer height="100%" width="100%">
          <PieChart>
            <Pie
              cx="50%"
              cy="50%"
              data={accidentOuterData}
              dataKey="value"
              endAngle={-270}
              innerRadius={43}
              isAnimationActive={false}
              outerRadius={61}
              paddingAngle={0}
              startAngle={90}
              stroke="#FFFFFF"
              strokeWidth={0.74}
            >
              {accidentOuterData.map((entry, index) => (
                <Cell fill={entry.color} key={`outer-${index}`} />
              ))}
            </Pie>
            <Pie
              cx="50%"
              cy="50%"
              data={accidentInnerData}
              dataKey="value"
              endAngle={-270}
              innerRadius={28}
              isAnimationActive={false}
              outerRadius={43}
              paddingAngle={0}
              startAngle={90}
              stroke="#FFFFFF"
              strokeWidth={0.52}
            >
              {accidentInnerData.map((entry, index) => (
                <Cell fill={entry.color} key={`inner-${index}`} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 grid place-items-center text-[18px] font-semibold text-white">
          {total}
        </div>
      </div>

      <div className="absolute left-[237px] top-[91.43px] text-[10px] font-medium leading-[15px] text-white">
        {accidentLegendGroups.map((group, groupIndex) => (
          <div className={groupIndex === 0 ? "space-y-0.5" : "mt-[9px] space-y-0.5"} key={groupIndex}>
            {group.map((item, itemIndex) => (
              <div className="flex h-[15px] items-center gap-[6px]" key={`${item.name}-${groupIndex}-${itemIndex}`}>
                <span className="h-[7px] w-[7px] rounded-full" style={{ backgroundColor: item.color }} />
                <span className="min-w-0 flex-1 whitespace-nowrap">{item.name}</span>
                <span className="w-6 text-right">{item.value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
}
