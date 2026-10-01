import { Card } from "@/components/ui/card";
import type { MetricData } from "@/types/dashboard";

type MetricCardProps = {
  data: MetricData;
  title: string;
};

export function MetricCard({ data, title }: MetricCardProps) {
  return (
    <Card className="flex h-[127px] w-[159px] flex-col gap-2 bg-[#051E1C] p-4">
      <h2 className="text-[14px] font-medium leading-5 text-white/70">{title}</h2>
      <div className="grid flex-1 grid-cols-[48px_auto_48px] items-center gap-[15px]">
        <div>
          <p className="whitespace-nowrap text-[12px] font-normal text-[#CACCCC]/60">{data.monthLabel}</p>
          <p className="text-[16px] font-medium leading-6 text-white">{data.monthValue}</p>
        </div>
        <div className="h-[52px] w-px bg-[#0F5B53]" />
        <div>
          <p className="whitespace-nowrap text-[12px] font-normal text-[#CACCCC]/60">{data.yearLabel}</p>
          <p className="text-[16px] font-medium leading-6 text-white">{data.yearValue}</p>
        </div>
      </div>
    </Card>
  );
}
