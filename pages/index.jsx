import Image from "next/image";
import styles from "../styles/Home.module.css";
import { DefaultLayout } from "../layouts/Default";

export default function Home() {
  return (
    <DefaultLayout>
      <div className={styles.container}>
        <div className={styles["hello-world"]}>Preparing!</div>
      </div>
    </DefaultLayout>
  );
}
