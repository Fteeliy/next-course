import Link from "next/link";
import styles from "./A.module.scss";

export default function ({text, href}) {
  return (
    <Link className={styles.link} href={href}>
      {text}
    </Link>
  )
}