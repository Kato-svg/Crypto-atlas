import styles from "./Loader.module.scss";

type LoaderProps = {
  title?: string;
  description?: string;
};

export function Loader({ title = "Loading...", description }: LoaderProps) {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner} />
      <p className={styles.title}>{title}</p>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
