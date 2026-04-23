import type { PropsWithChildren } from "react";
import styles from "./AppLayout.module.scss";

function AppLayout({ children }: PropsWithChildren) {
  return (
    <main className={styles.layout}>
      <div className={styles.container}>{children}</div>
    </main>
  );
}

export default AppLayout;
