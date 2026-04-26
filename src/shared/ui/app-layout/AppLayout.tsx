import type { PropsWithChildren } from "react";
import styles from "./AppLayout.module.scss";

function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export default AppLayout;
