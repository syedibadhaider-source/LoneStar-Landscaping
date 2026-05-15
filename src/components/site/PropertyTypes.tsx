import { propertyTypes } from "@/data/site";

export function PropertyTypes() {
  return (
    <section className="relative z-20 -mt-10">
      <div className="section-shell">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/20 bg-[var(--accent)] p-4 shadow-xl shadow-[rgba(242,90,29,0.22)] lg:grid-cols-4 lg:p-5">
          {propertyTypes.map((type) => (
            <div
              key={type.label}
              className="group px-4 py-2.5 transition hover:bg-white/10 lg:border-r lg:border-white/22 lg:px-7 lg:py-3 last:lg:border-r-0"
            >
              <type.icon className="size-6 text-white transition group-hover:scale-105 sm:size-7" strokeWidth={1.8} />
              <p className="font-heading mt-3 text-[15px] font-bold leading-tight text-white md:text-[17px]">
                {type.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
