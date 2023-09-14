import Link from "next/link";
import styles from "./sitesList.module.css";

export default function SitesList({ sites }) {
  return (
    <>
      <div className={styles.container}>
        {sites.map((site) => (
          <div key={site.id} className={styles.siteCard}>
            <Link href={site.link} className={styles.cardLink}>
              <h2>{site.name}</h2>
              <div>
                <span>评级：{site.score}</span>
              </div>
              <div>
                <span>支持：{site.tags}</span>
              </div>
              <div>
                <p>{site.briefIntro}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
