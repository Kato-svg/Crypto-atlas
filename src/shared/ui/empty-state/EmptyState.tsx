import styles from "./EmptyState.module.scss";

type EmptyStateProps = {
  title?: string;
  description?: string;
};

export function EmptyState({
  title = "Nothing found",
  description = "There is no data to display.",
}: EmptyStateProps) {
  return (
    <section className={styles.emptyState}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </section>
  );
}
