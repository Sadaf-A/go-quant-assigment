import React from "react";

const TradeComponent = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#141414] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
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
            <h2 className="text-[#FFFFFF] text-lg font-bold leading-tight tracking-[-0.015em]">GoQuant</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#FFFFFF] text-sm font-medium leading-normal" href="#">Dashboard</a>
              <a className="text-[#FFFFFF] text-sm font-medium leading-normal" href="trade">Trade</a>
              <a className="text-[#FFFFFF] text-sm font-medium leading-normal" href="perf">Performance</a>
              <a className="text-[#FFFFFF] text-sm font-medium leading-normal" href="#">Community</a>
              <a className="text-[#FFFFFF] text-sm font-medium leading-normal" href="login">Login</a>
            </div>
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#292929] text-[#FFFFFF] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            >
              <div className="text-[#FFFFFF]" data-icon="BellSimple" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M168,224a8,8,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8,8,0,0,1,168,224Zm53.85-32A15.8,15.8,0,0,1,208,200H48a16,16,0,0,1-13.8-24.06C39.75,166.38,48,139.34,48,104a80,80,0,1,1,160,0c0,35.33,8.26,62.38,13.81,71.94A15.89,15.89,0,0,1,221.84,192ZM208,184c-7.73-13.27-16-43.95-16-80a64,64,0,1,0-128,0c0,36.06-8.28,66.74-16,80Z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#FFFFFF] tracking-light text-[32px] font-bold leading-tight min-w-72">Trade</p>
            </div>
            <div className="pb-3">
              <div className="flex border-b border-[#383838] px-4 gap-8">
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#39E079] text-[#FFFFFF] pb-[13px] pt-4" href="#">
                  <p className="text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]">Spot</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#C4C4C4] pb-[13px] pt-4" href="#">
                  <p className="text-[#C4C4C4] text-sm font-bold leading-normal tracking-[0.015em]">Futures</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#C4C4C4] pb-[13px] pt-4" href="#">
                  <p className="text-[#C4C4C4] text-sm font-bold leading-normal tracking-[0.015em]">Options</p>
                </a>
              </div>
            </div>
            <h3 className="text-[#FFFFFF] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Market</h3>
            <div className="flex gap-3 p-3 overflow-x-hidden">
              {['BTC', 'ETH', 'USDT', 'USD', 'EUR'].map((currency) => (
                <div key={currency} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#292929] pl-4 pr-4">
                  <p className="text-[#FFFFFF] text-sm font-medium leading-normal">{currency}</p>
                </div>
              ))}
            </div>
            <h3 className="text-[#FFFFFF] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Order type</h3>
            <div className="flex gap-3 p-3 overflow-x-hidden">
              {['Limit', 'Market', 'Stop-limit', 'OCO'].map((type) => (
                <div key={type} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#292929] pl-4 pr-4">
                  <p className="text-[#FFFFFF] text-sm font-medium leading-normal">{type}</p>
                </div>
              ))}
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#FFFFFF] text-base font-medium leading-normal pb-2">Price</p>
                <input
                  placeholder="0.00"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#FFFFFF] focus:outline-0 focus:ring-0 border-none bg-[#292929] focus:border-none h-14 placeholder:text-[#C4C4C4] p-4 text-base font-normal leading-normal"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#FFFFFF] text-base font-medium leading-normal pb-2">Amount</p>
                <input
                  placeholder="0.00"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#FFFFFF] focus:outline-0 focus:ring-0 border-none bg-[#292929] focus:border-none h-14 placeholder:text-[#C4C4C4] p-4 text-base font-normal leading-normal"
                />
              </label>
            </div>
            <h3 className="text-[#FFFFFF] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Est. total</h3>
            <p className="text-[#FFFFFF] text-base font-normal leading-normal pb-3 pt-1 px-4">$0.00</p>
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-end">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#292929] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Preview order</span>
                </button>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#39E079] text-[#141414] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Confirm order</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeComponent;
