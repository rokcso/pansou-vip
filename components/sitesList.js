import Link from "next/link";
import styles from "./sitesList.module.css";

export default function SitesList({ sites }) {
  const clickTrack = (siteId) => {
    umami.track("clickSiteCard", { siteId: siteId });
  };
  return (
    <>
      <div className={styles.container}>
        {sites.map((site) => (
          <div
            key={site.id}
            className={styles.siteCard}
            onClick={() => clickTrack(site.id)}
          >
            <Link href={site.link} className={styles.cardLink}>
              <h2>{site.name}</h2>
              <div>
                <span>亲测 {site.score}</span>
              </div>
              <div>
                <span>{site.platform}</span>
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
