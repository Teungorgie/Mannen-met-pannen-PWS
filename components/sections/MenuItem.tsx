import { MenuCourse } from "@/lib/config";

export default function MenuItem({ course }: { course: MenuCourse }) {
  return (
    <div className="border-t border-olive-dark/10 pt-4 first:border-t-0 first:pt-0">
      <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">{course.label}</span>
      <div className="mt-1.5 flex flex-col gap-1">
        {course.options.map((option) => (
          <div key={option.name}>
            <p className="font-display text-lg text-bark">{option.name}</p>
            {option.alt && (
              <p className="font-display text-lg text-bark">
                <span className="mr-1 italic text-bark/50">of</span>
                {option.alt}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
