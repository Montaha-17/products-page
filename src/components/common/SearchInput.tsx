
import searchIcon from "@/assets/icons/search-normal.svg";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="flex h-[60px] w-full min-w-0 items-center gap-3 rounded-[12px] border border-border bg-surface px-5">
      <input
        type="search"
        placeholder="SEARCH"
        aria-label="Search products"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-w-0 flex-1 bg-transparent font-brand text-sm outline-none placeholder:text-brand-text"
      />

      <img
        src={searchIcon}
        alt=""
        className="h-6 w-6 shrink-0"
      />
    </div>
  );
}
