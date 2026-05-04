import styles from "./ErrorMessage.module.scss";

type ErrorMessageProps = {
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function ErrorMessage({
  title = "Something went wrong",
  message = "Please try again later.",
  actionLabel,
  onAction,
}: ErrorMessageProps) {
  return (
    <section className={styles.error}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{message}</p>

      {actionLabel && onAction && (
        <button className={styles.button} type="button" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </section>
  );
}
