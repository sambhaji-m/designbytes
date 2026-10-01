export type AccidentPeriod = "today" | "month" | "year";

export interface ProcessQualityMonth {
  month: string;
  production: number;
  defects: number;
}

export interface ProcessQualityData {
  financialYear: string;
  target: number;
  months: ProcessQualityMonth[];
}

export interface MetricData {
  monthLabel: string;
  monthValue: number;
  yearLabel: string;
  yearValue: number;
}

export interface AccidentCategory {
  name: string;
  total: number;
  reportable: number;
  nonReportable: number;
}

export interface DashboardData {
  processQuality: ProcessQualityData;
  frequencyRate: MetricData;
  severityRate: MetricData;
  accidents: {
    total: number;
    periods: Record<AccidentPeriod, AccidentCategory[]>;
  };
}

export interface DashboardApiData {
  processQuality: ProcessQualityData;
  frequencyRate: MetricData;
  severityRate: MetricData;
  accidents: {
    total: number;
    period: AccidentPeriod;
    items: AccidentCategory[];
  };
}

export interface DashboardApiResponse {
  success: boolean;
  data: DashboardApiData;
}
