import { techColors } from "../../data/techColors";

export const TechTag = ({ tag, className = "" }) => {
  const tagColor = techColors[tag] || "#6366f1";

  return (
    <div
      className={`px-2 py-1 text-xs font-medium rounded-full bg-primary/20 border-2 border-transparent transition-all duration-300 cursor-pointer whitespace-nowrap ${className}`}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#ffffff";
        e.currentTarget.style.backgroundColor = tagColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "";
        e.currentTarget.style.backgroundColor = "";
      }}
    >
      <span className="text-foreground/80">{tag}</span>
    </div>
  );
};
