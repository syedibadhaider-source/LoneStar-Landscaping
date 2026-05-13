import { propertyTypes } from "@/data/site";

export function PropertyTypes() {
  return (
    <section className="relative z-20 -mt-14">
      <div className="section-shell">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-7 shadow-xl lg:grid-cols-4">
          {propertyTypes.map((type) => (
            <div
              key={type.label}
              className="group px-4 py-3 transition hover:bg-[var(--background)] lg:border-r lg:border-[var(--border)] lg:px-7 lg:py-4 last:lg:border-r-0"
            >
              <type.icon className="size-6 text-[var(--green-strong)] transition group-hover:text-[var(--accent)] sm:size-7" strokeWidth={1.8} />
              <p className="font-heading mt-4 text-[16px] font-bold leading-tight text-[var(--pine)] md:text-[18px]">
                {type.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
