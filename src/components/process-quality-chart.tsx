import { Card } from "@/components/ui/card";
import type { ProcessQualityData } from "@/types/dashboard";

const legendItems = [
  { label: "No. of Parts Produced", color: "#468FD2", shape: "square" },
  { label: "Defects in PPM", color: "#FFFAB7", shape: "circle" },
  { label: "Target", color: "#FCDE2D", shape: "circle" },
];

const leftTicks = [50, 40, 30, 20, 10];
const rightTicks = [500, 400, 300, 200, 100];
const tickY = [0, 24, 48, 72, 96];
const gridY = [0, 27, 54, 81, 108];
const gridX = [0, 314];
const monthX = [52, 79, 106, 133, 160, 187, 214, 241, 268, 295, 322, 349];
const barX = [59, 86, 113, 140, 167, 194, 221, 248, 275, 302, 329, 356];
const barHeights = [98, 65, 106, 82, 38, 59, 82, 106, 59, 82, 92, 106];
const linePoints = [
  [59, 94],
  [86, 108],
  [113, 121],
  [140, 134],
  [167, 116],
  [194, 135],
  [221, 120],
  [248, 95],
  [275, 131],
  [302, 120],
  [329, 116],
  [356, 117],
];
const linePath = linePoints
  .map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x - 54} ${y - 85}`)
  .join(" ");

type ProcessQualityChartProps = {
  data: ProcessQualityData;
};

export function ProcessQualityChart({ data }: ProcessQualityChartProps) {
  return (
    <Card className="relative h-[275px] w-[425px] bg-[#051E1C]">
      <p
        className="absolute left-[27px] top-[24px] m-0 h-[24px] w-[264px] whitespace-nowrap text-left text-[16px] font-semibold leading-[24px] tracking-[0] text-white opacity-100"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        Defects in PPM (Process Quality)
      </p>
      <button className="absolute left-[327px] top-[23px] h-[26px] w-[78.725px] rounded bg-[#0F5B53] px-2.5 py-1 text-[12px] font-medium leading-[18px] text-[#CACCCC]" type="button">
        {data.financialYear}
      </button>

      <div className="absolute left-[14px] top-[73px] flex h-[131px] w-[18px] items-center justify-center">
        <span className="whitespace-nowrap rotate-[-90deg] text-[12px] font-normal leading-[18px] text-[#AFB2B2]">
          Production Qty in Nos.
        </span>
      </div>
      <div className="absolute left-[393px] top-[98px] flex h-[87px] w-[18px] items-center justify-center">
        <span className="whitespace-nowrap rotate-[-90deg] text-[12px] font-normal leading-[18px] text-[#AFB2B2]">
          Defects in PPM
        </span>
      </div>

      <div className="absolute left-[37px] top-[85px] h-[106px] w-[13px]">
        {leftTicks.map((tick, index) => (
          <span
            className="absolute left-0 w-[13px] text-right text-[9px] font-normal leading-[11px] text-white"
            key={tick}
            style={{ fontFamily: "var(--font-inter)", top: tickY[index] }}
          >
            {tick}
          </span>
        ))}
      </div>

      <div className="absolute left-[372px] top-[85px] h-[105.7115px] w-[27px]">
        {rightTicks.map((tick, index) => (
          <span
            className="absolute left-0 w-[27px] text-left text-[9px] font-normal leading-[11px] text-white"
            key={tick}
            style={{ fontFamily: "var(--font-inter)", top: tickY[index] }}
          >
            {tick}
          </span>
        ))}
      </div>

      <svg
        className="absolute left-[54px] top-[85px] h-[108px] w-[314px]"
        height="108"
        viewBox="0 0 314 108"
        width="314"
      >
        {gridY.map((y, index) => (
          <line key={`grid-y-${index}`} stroke="#4F4F4F" strokeOpacity="0.7" x1="0" x2="314" y1={y} y2={y} />
        ))}
        {gridX.map((x, index) => (
          <line key={`grid-x-${index}`} stroke="#4F4F4F" strokeOpacity="0.7" x1={x} x2={x} y1="0" y2="108" />
        ))}
        {barHeights.map((height, index) => (
          <rect
            fill="#468FD2"
            height={height}
            key={data.months[index].month}
            width="6"
            x={barX[index] - 54}
            y={106 - height}
          />
        ))}
        <line stroke="#FCDE2D" strokeWidth="1.5" x1="5" x2="302" y1="13" y2="13" />
        <path d={linePath} fill="none" stroke="#FFFAB7" strokeWidth="2" />
        {linePoints.map(([x, y], index) => (
          <circle
            cx={x - 54}
            cy={y - 85}
            fill="#54C172"
            key={data.months[index].month}
            r="3"
          />
        ))}
      </svg>

      <div className="absolute left-[52px] top-[199px] h-[10px] w-[317px]">
        {data.months.map((item, index) => (
          <span
            className="absolute top-0 w-5 text-left text-[10px] font-normal leading-[10px] text-white"
            key={item.month}
            style={{ fontFamily: "var(--font-inter)", left: monthX[index] - 52 }}
          >
            {item.month}
          </span>
        ))}
      </div>

      <div className="absolute left-[39px] top-[232px] flex items-center gap-3 text-[12px] font-medium text-[#CACCCC]">
        {legendItems.map((item) => (
          <div className="flex items-center gap-2" key={item.label}>
            <span
              className={item.shape === "square" ? "h-[18px] w-4" : "h-[11px] w-[11px] rounded-full"}
              style={{ backgroundColor: item.color }}
            />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
