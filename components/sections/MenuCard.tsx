import { Menu } from "@/lib/config";
import MenuItem from "@/components/sections/MenuItem";

export default function MenuCard({ menu }: { menu: Menu }) {
  return (
    <article className="flex flex-col gap-6 rounded-xl border border-olive-dark/10 bg-cream-soft p-8 shadow-card">
      <header>
        <h3 className="text-3xl">{menu.name}</h3>
        <p className="mt-1 text-bark/70">{menu.intro}</p>
      </header>

      <div className="flex flex-col gap-6">
        {menu.courses.map((course) => (
          <MenuItem key={course.label} course={course} />
        ))}
      </div>
    </article>
  );
}
