import React, { useState, useEffect } from "react";
import axios from "axios";

export const GoQuantDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalValue: 0,
    todayPL: 0,
    totalPL: 0,
    portfolioValue: 0,
    marketData: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dashboardResponse, marketResponse] = await Promise.all([
          axios.get("http://localhost:8080/dashboard"), 
          axios.get("http://localhost:8080/market_snapshot"),
        ]);
        
        setDashboardData({
          totalValue: dashboardResponse.data.totalValue,
          todayPL: dashboardResponse.data.todayPL,
          totalPL: dashboardResponse.data.totalPL,
          portfolioValue: dashboardResponse.data.portfolioValue,
          marketData: marketResponse.data, 
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#141414] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: "'Work Sans', 'Noto Sans', sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#292929] px-10 py-3">
          <div className="flex items-center gap-4 text-[#FFFFFF]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_535)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_535">
                    <rect width="48" height="48" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-[#FFFFFF] text-lg font-bold leading-tight tracking-[-0.015em]">
              GoQuant
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              {["Dashboard", "Trade", "Performance", "Community", "Login"].map((item) => (
                <a
                  key={item}
                  className="text-[#FFFFFF] text-sm font-medium leading-normal"
                  href={item === "Dashboard" ? "#" : `${item.toLowerCase()}.html`}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex gap-2">
              {["MagnifyingGlass", "ChatCircleDots", "Bell"].map((icon, idx) => (
                <button
                  key={idx}
                  className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#292929] text-[#FFFFFF] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
                >
                  <div
                    className="text-[#FFFFFF]"
                    data-icon={icon}
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d={getIconPath(icon)}></path>
                    </svg>
                  </div>
                </button>
              ))}
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  "url('https://cdn.usegalileo.ai/sdxl10/c1f159ed-ae93-44a2-899e-0f99278a3392.png')",
              }}
            ></div>
          </div>
        </header>
        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Dashboard */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#FFFFFF] text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                Dashboard
              </p>
            </div>
            {/* Metrics */}
            <div className="flex flex-wrap gap-3 px-4 py-3">
              {["Total Value", "Today's P/L", "Total P/L"].map((label, idx) => (
                <div
                  key={idx}
                  className="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#383838] p-3 items-center text-center"
                >
                  <p className="text-[#FFFFFF] tracking-light text-2xl font-bold leading-tight">
                    ${dashboardData[label.toLowerCase().replace(" ", "")] || 0}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-[#C4C4C4] text-sm font-normal leading-normal">{label}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Portfolio and Market Snapshot */}
            <div className="flex flex-wrap gap-4 px-4 py-6">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#383838] p-6">
                <p className="text-[#FFFFFF] text-base font-medium leading-normal">
                  Portfolio Value
                </p>
                <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                  <PortfolioChart />
                </div>
              </div>
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#383838] p-6">
                <p className="text-[#FFFFFF] text-base font-medium leading-normal">
                  Market Snapshot
                </p>
                <MarketSnapshot marketData={dashboardData.marketData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioChart = () => (
  <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
      fill="url(#paint0_linear_1131_5935)"
    ></path>
  </svg>
);

const MarketSnapshot = ({ marketData }) => {
  return (
    <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
      {marketData.map((stock, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div
            className="border-[#C4C4C4] bg-[#292929] border-t-2 w-full"
            style={{ height: `${stock.value}%` }}
          ></div>
          <p className="text-[#C4C4C4] text-[13px] font-bold leading-normal tracking-[0.015em]">
            {stock.name}
          </p>
        </div>
      ))}
    </div>
  );
};

const getIconPath = (icon) => {
  switch (icon) {
    case "MagnifyingGlass":
      return "M229.66...";
    case "ChatCircleDots":
      return "M140,128...";
    case "Bell":
      return "M221.8...";
    default:
      return "";
  }
};
