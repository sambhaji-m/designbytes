import { NextResponse } from "next/server";
import dashboardData from "@/data/dashboard.json";
import type { AccidentPeriod, DashboardData } from "@/types/dashboard";

const allowedPeriods: AccidentPeriod[] = ["today", "month", "year"];

function normalizePeriod(period: string | null): AccidentPeriod {
  return allowedPeriods.includes(period as AccidentPeriod) ? (period as AccidentPeriod) : "today";
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const period = normalizePeriod(searchParams.get("period"));
  const data = dashboardData as DashboardData;

  return NextResponse.json({
    success: true,
    data: {
      processQuality: data.processQuality,
      frequencyRate: data.frequencyRate,
      severityRate: data.severityRate,
      accidents: {
        total: data.accidents.total,
        period,
        items: data.accidents.periods[period],
      },
    },
  });
}
