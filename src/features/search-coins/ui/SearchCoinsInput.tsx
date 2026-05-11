import styles from "./SearchCoinsInput.module.scss";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function SearchCoinsInput({
  value,
  onChange,
  placeholder = "Search coins...",
}: Props) {
  return (
    <input
      type="search"
      className={styles.input}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      aria-label="Search coins"
    />
  );
}
