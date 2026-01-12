import React from "react";
import CountUp from "./count-up";

interface CounterItem {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
  delay?: number;
}

interface CounterProps {
  variant?: "default" | "compact"; // default = 5 items, compact = 3 items
}

const items: CounterItem[] = [
  { value: 10, suffix: "K", label: "Проектов выполнено", duration: 1, delay: 400 },
  { value: 16, suffix: "K", label: "Довольных клиентов", duration: 1, delay: 500 },
  { value: 98, suffix: "%", label: "Клиентов довольны", duration: 1, delay: 600 },
  { value: 13, suffix: "K", label: "Всего сотрудников", duration: 1, delay: 700 },
  { value: 97, suffix: "%", label: "в рамках бюджета", duration: 1, delay: 800 },
];

export default function Counter({ variant = "default" }: CounterProps) {
  const displayedItems = variant === "compact" ? items.slice(0, 3) : items;
  const isOdd = displayedItems.length % 2 !== 0;

  return (
    <section className="p-0">
      <div className="container p-0">
      <div
  className={`gap-4 md:gap-6
    ${variant === "compact" 
      ? "flex justify-between flex-wrap"   // ✅ keeps 3 items in one row
      : "grid grid-cols-2 md:grid-cols-5"} // default behavior
  `}
>
  {displayedItems.map((item, index) => {
    const isLast = index === displayedItems.length - 1;
    const isOdd = displayedItems.length % 2 !== 0;

    return (
      <div
        key={index}
        className={`flex justify-center relative md:max-w-fit
          ${variant === "default" && isOdd && isLast ? "col-span-2 md:col-span-1" : ""}
          ${variant === "compact" ? "flex-1 lg:min-w-[100px]" : ""}
        `}
        data-aos="fade-up"
        data-aos-delay={item.delay}
      >
        <h2 className="d2c_title text-6xl lg:text-8xl xl:text-[120px] 2xl:text-[160px] text-transparent bg-clip-text text-stroke text-stroke-transparent leading-[1]">
          <CountUp from={0} to={item.value} duration={item.duration} />
          {item.suffix}
        </h2>
        <h6 className="text-center text-xs lg:text-sm 2xl:text-base capitalize md:uppercase font-light md:font-medium absolute top-1/2 -translate-y-1/2 bg-white min-w-[120px] max-w-fit mx-auto">
          {item.label}
        </h6>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
}
