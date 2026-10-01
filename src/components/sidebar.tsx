"use client";

import { useState } from "react";
import {
  Box,
  ChevronRight,
  CircleHelp,
  ClipboardList,
  Home,
  LayoutGrid,
  LogOut,
  Settings,
} from "lucide-react";

type Variant = "expanded" | "subplants" | "kpi";
type MenuKey = "home" | "subplants" | "kpi" | "reports" | "help" | "settings";

const mainItems: Array<{
  key: MenuKey;
  label: string;
  icon: typeof Home;
  normalY: number;
  subplantsY: number;
  kpiY: number;
  height: number;
}> = [
  { key: "home", label: "Home", icon: Home, normalY: 0, subplantsY: 0, kpiY: 0, height: 48 },
  { key: "subplants", label: "Subplants", icon: Box, normalY: 60, subplantsY: 60, kpiY: 60, height: 49 },
  { key: "kpi", label: "KPI Dashboard", icon: LayoutGrid, normalY: 121, subplantsY: 274, kpiY: 121, height: 48 },
  { key: "reports", label: "Reports", icon: ClipboardList, normalY: 181, subplantsY: 334, kpiY: 538, height: 48 },
  { key: "help", label: "Help", icon: CircleHelp, normalY: 241, subplantsY: 394, kpiY: 598, height: 48 },
  { key: "settings", label: "Settings", icon: Settings, normalY: 301, subplantsY: 454, kpiY: 658, height: 48 },
];

const collapsedIcons = [
  { key: "home", icon: Home, y: 0 },
  { key: "subplants", icon: Box, y: 60 },
  { key: "kpi", icon: LayoutGrid, y: 120 },
  { key: "reports", icon: ClipboardList, y: 180 },
  { key: "help", icon: CircleHelp, y: 240 },
  { key: "settings", icon: Settings, y: 300 },
] as const;

const subplantRows = ["LMHP", "HHP", "Genset"];
const kpiRows = [
  "Specific Energy Monitoring",
  "Safety",
  "Productivity",
  "Quality",
  "Morale",
  "Delivery",
  "Finance",
];

const variantConfig = {
  expanded: { menuTop: 119, profileY: 573, logoutY: 673 },
  subplants: { menuTop: 129, profileY: 655, logoutY: 753 },
  kpi: { menuTop: 129, profileY: 859, logoutY: 958 },
};

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [variant, setVariant] = useState<Variant>("expanded");

  const activeVariant = isExpanded ? variant : "expanded";
  const config = variantConfig[activeVariant];
  const panelWidth = isExpanded ? 261 : 80;
  const glowPositions = isExpanded
    ? {
        blue: { left: 206, top: 474 },
        greenLeft: { left: -57, top: 225 },
        greenTop: { left: 183, top: -15, opacity: 0.7 },
      }
    : {
        blue: { left: 54, top: 464 },
        greenLeft: { left: -83, top: 225 },
        greenTop: { left: 183, top: -15, opacity: 0 },
      };

  const reset = () => {
    setIsExpanded(false);
    setVariant("expanded");
  };

  return (
    <aside
      className="absolute left-0 top-0 z-50 h-[573px] w-20 overflow-visible"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={reset}
    >
      <div
        className="absolute left-0 top-0 h-[2546px] overflow-hidden transition-[width] duration-100 ease-out"
        style={{ width: panelWidth }}
      >
        <div
          className="absolute inset-0 bg-[rgba(3,15,14,0.5)] backdrop-blur-[3px] [-webkit-backdrop-filter:blur(3px)]"
          style={{ width: panelWidth }}
        />
        <div
          className="absolute inset-0 overflow-hidden backdrop-blur-[3px] [-webkit-backdrop-filter:blur(3px)]"
          style={{ width: panelWidth }}
        >
          <div
            className="pointer-events-none absolute h-[105px] w-[105px] rounded-full bg-[rgba(65,155,220,0.25)] opacity-70 blur-[50px] transition-[left,top] duration-100 ease-out"
            style={{ left: glowPositions.blue.left, top: glowPositions.blue.top }}
          />
          <div
            className="pointer-events-none absolute h-[105px] w-[105px] rounded-full bg-[rgba(65,220,192,0.25)] opacity-70 blur-[50px] transition-[left,top] duration-100 ease-out"
            style={{ left: glowPositions.greenLeft.left, top: glowPositions.greenLeft.top }}
          />
          <div
            className="pointer-events-none absolute h-[105px] w-[105px] rounded-full bg-[rgba(65,220,192,0.25)] blur-[50px] transition-[left,top,opacity] duration-100 ease-out"
            style={{
              left: glowPositions.greenTop.left,
              opacity: glowPositions.greenTop.opacity,
              top: glowPositions.greenTop.top,
            }}
          />
          <div className="pointer-events-none absolute left-[21px] top-[41px] h-10 w-10 rounded-full bg-[rgba(65,155,220,0.25)] blur-[20px]" />
          <div className="absolute inset-0 bg-[rgba(3,15,14,0.18)]" />
        </div>

        {!isExpanded && (
          <div className="absolute left-7 top-[131px] h-[324px] w-6">
            {collapsedIcons.map((item) => {
              const Icon = item.icon;

              return (
                <Icon
                  className={`absolute left-0 h-6 w-6 ${
                    item.key === "home" ? "text-white" : "text-[#676F6E]"
                  }`}
                  key={item.key}
                  style={{ top: item.y }}
                  strokeWidth={item.key === "home" ? 2.4 : 2}
                />
              );
            })}
          </div>
        )}

        {isExpanded && (
          <>
            <div className="absolute left-7 top-10 h-[39px] w-6" />
            <div className="absolute left-[75px] top-[39px] h-[46px] w-40" />

            <nav
              className="absolute left-0 w-[232px] transition-[top] duration-100 ease-out"
              style={{ top: config.menuTop }}
            >
              {mainItems.map((item) => (
                <MainRow
                  activeVariant={activeVariant}
                  item={item}
                  key={item.key}
                  onActivate={() => {
                    if (item.key === "subplants") setVariant("subplants");
                    else if (item.key === "kpi") setVariant("kpi");
                    else setVariant("expanded");
                  }}
                />
              ))}

              {activeVariant === "subplants" && (
                <Submenu labels={subplantRows} startY={111} />
              )}

              {activeVariant === "kpi" && (
                <Submenu labels={kpiRows} startY={171} />
              )}
            </nav>

            <ProfileBlock y={config.profileY} />
            <button
              className="absolute left-0 h-12 w-[232px] text-left transition-[top] duration-100 ease-out"
              onMouseEnter={() => setVariant("expanded")}
              style={{ top: config.logoutY }}
              type="button"
            >
              <LogOut className="absolute left-7 top-3 h-6 w-6 text-[#676F6E]" strokeWidth={2} />
              <span className="absolute left-20 top-3.5 text-[14px] font-normal leading-5 text-[#676F6E]">
                Logout
              </span>
            </button>
          </>
        )}
      </div>
    </aside>
  );
}

function MainRow({
  activeVariant,
  item,
  onActivate,
}: {
  activeVariant: Variant;
  item: (typeof mainItems)[number];
  onActivate: () => void;
}) {
  const Icon = item.icon;
  const y =
    activeVariant === "subplants"
      ? item.subplantsY
      : activeVariant === "kpi"
        ? item.kpiY
        : item.normalY;
  const isHome = item.key === "home";
  const isSubplantsActive = activeVariant === "subplants" && item.key === "subplants";
  const isKpiActive = activeVariant === "kpi" && item.key === "kpi";
  const isActiveParent = isSubplantsActive || isKpiActive;
  const iconTop = item.height === 49 ? 12.5 : 12;

  return (
    <button
      className="absolute left-0 w-[232px] text-left transition-[top,background-color] duration-100 ease-out"
      onMouseEnter={onActivate}
      style={{
        top: y,
        height: item.height,
        backgroundColor: isActiveParent ? "#072E2A" : "transparent",
      }}
      type="button"
    >
      <Icon
        className={`absolute left-7 h-6 w-6 ${
          isHome ? "text-white" : isActiveParent ? "text-white" : "text-[#676F6E]"
        }`}
        style={{ top: iconTop }}
        strokeWidth={isHome ? 2.4 : 2}
      />
      <span
        className={`absolute left-20 top-3.5 text-[14px] font-normal leading-5 ${
          isHome ? "text-[#F3E5DE]" : isActiveParent ? "text-white" : "text-[#676F6E]"
        }`}
      >
        {item.label}
      </span>
      {item.key === "subplants" && (
        <ChevronRight className="absolute left-[167px] top-[18.5px] h-[14px] w-[14px] text-white" strokeWidth={2} />
      )}
      {item.key === "kpi" && (
        <ChevronRight className="absolute left-[203px] top-[18px] h-[14px] w-[14px] text-white" strokeWidth={2} />
      )}
    </button>
  );
}

function Submenu({ labels, startY }: { labels: string[]; startY: number }) {
  return (
    <div className="absolute left-0 w-[232px]" style={{ top: startY }}>
      {labels.map((label, index) => (
        <button
          className="absolute left-0 h-[49px] w-[232px] bg-[#072E2A]/[0.32] text-left"
          key={label}
          style={{ top: index * 51 }}
          type="button"
        >
          <span className="absolute left-7 top-[14.5px] text-[14px] font-normal leading-5 text-white">
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}

function ProfileBlock({ y }: { y: number }) {
  return (
    <div
      className="absolute left-7 h-[81px] w-[188px] rounded-xl bg-[#0A3D38] transition-[top] duration-100 ease-out"
      style={{ top: y }}
    >
      <div className="absolute left-4 top-[27px] h-7 w-7" />
      <div className="absolute left-[55px] top-[19px] text-[14px] font-normal leading-5 text-white">
        John Doe
      </div>
      <div className="absolute left-[55px] top-[42.5px] text-[12px] font-normal leading-5 text-[#C8C8C8]">
        Designation
      </div>
    </div>
  );
}
