
import skincareIcon from "@/assets/icons/skin-care.svg";
import haircareIcon from "@/assets/icons/Hair-Care.svg";
import makeupIcon from "@/assets/icons/Make-up.svg";
import bathBodyIcon from "@/assets/icons/bath&body.svg";

type CategoryFilterProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

const categories = [
  { label: "All Products", icon: null },
  { label: "Skincare", icon: skincareIcon },
  { label: "Haircare", icon: haircareIcon },
  { label: "Makeup", icon: makeupIcon },
  { label: "Bath & Body", icon: bathBodyIcon },
];

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex w-full gap-0 overflow-x-auto">
      {categories.map((category) => {
        const isSelected = selectedCategory === category.label;

        return (
          <button
            key={category.label}
            type="button"
            onClick={() => onCategoryChange(category.label)}
            aria-pressed={isSelected}
            className={`flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-[8px] border border-border px-4 font-brand text-sm transition-colors ${
              isSelected
                ? "bg-product-bg italic"
                : "bg-surface hover:bg-product-bg"
            }`}
          >
            {category.icon && (
              <img
                src={category.icon}
                alt=""
                className="h-5 w-5 object-contain"
              />
            )}

            <span>{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}
