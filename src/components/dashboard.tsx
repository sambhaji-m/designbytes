"use client";

import { useEffect, useState } from "react";
import { AccidentsChart } from "@/components/accidents-chart";
import { MetricCard } from "@/components/metric-card";
import { ProcessQualityChart } from "@/components/process-quality-chart";
import { Sidebar } from "@/components/sidebar";
import type { AccidentPeriod, DashboardApiData, DashboardApiResponse } from "@/types/dashboard";

const mainTabs = ["Main", "Sub1", "Sub2", "Sub3"];

export function Dashboard() {
  const [activeTab, setActiveTab] = useState(mainTabs[0]);
  const [period, setPeriod] = useState<AccidentPeriod>("today");
  const [dashboardData, setDashboardData] = useState<DashboardApiData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCurrent = true;

    async function loadDashboard() {
      try {
        const response = await fetch(`/api/dashboard?period=${period}`);

        if (!response.ok) {
          throw new Error("Failed to load dashboard data");
        }

        const payload = (await response.json()) as DashboardApiResponse;

        if (isCurrent) {
          setDashboardData(payload.data);
          setError(null);
        }
      } catch (loadError) {
        console.error(loadError);

        if (isCurrent) {
          setError("Failed to load dashboard data");
        }
      }
    }

    void loadDashboard();

    return () => {
      isCurrent = false;
    };
  }, [period]);

  const handlePeriodChange = (nextPeriod: AccidentPeriod) => {
    setPeriod(nextPeriod);
  };

  return (
    <main className="flex min-h-screen items-start justify-center overflow-auto bg-black p-6 text-white">
      <section className="relative h-[573px] w-[1176px] shrink-0 overflow-hidden bg-[linear-gradient(48.75deg,#0A3D38_-55.05%,#030F0E_37.47%,#051E1C_104.2%)]">
        <Sidebar />

        <div className="absolute left-[112px] top-[114px] h-5 w-32 text-[14px] font-normal leading-5 text-[#F3E5DE]">
          <span>Dashboard &gt; </span>
          <span>Main</span>
        </div>

        <div className="absolute left-[875px] top-[111px] flex h-[26px] w-[265.93px] overflow-hidden rounded-lg shadow-[0_1.2459px_2.4918px_rgba(16,24,40,0.05)]">
          {mainTabs.map((tab, index) => (
            <button
              className={`h-[26px] border-r border-[rgba(202,204,204,0.3)] text-[12px] last:border-r-0 ${index === 3 ? "w-[49.93px]" : "w-[72px]"
                } ${activeTab === tab
                  ? "bg-[#147A6F] font-semibold text-white"
                  : "bg-[#0A3D38] font-normal text-[#CACCCC]/80"
                }`}
              key={tab}
              onClick={() => setActiveTab(tab)}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="absolute left-[101px] top-[168px] flex h-[275px] gap-3">
          {dashboardData ? (
            <>
              <ProcessQualityChart data={dashboardData.processQuality} />
              <div className="flex h-[266px] w-[159px] flex-col gap-3 mt-1">
                <MetricCard data={dashboardData.frequencyRate} title="Frequency Rate" />
                <MetricCard data={dashboardData.severityRate} title="Severity Rate" />
              </div>
              <AccidentsChart
                items={dashboardData.accidents.items}
                onPeriodChange={handlePeriodChange}
                selectedPeriod={period}
                total={dashboardData.accidents.total}
              />
            </>
          ) : (
            <div className="grid h-[275px] w-[1029px] place-items-center text-[14px] text-[#CACCCC]">
              {error ?? "Loading..."}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
