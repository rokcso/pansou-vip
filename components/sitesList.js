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
            <Link href={site.link} title={site.name} target="_blank" className={styles.cardLink}>
              <h2>{site.name}</h2>
              {site.score.length > 0 && (
                <div>
                  <p>{site.score}</p>
                </div>
              )}
              <div>
                <p>🖥️ {site.platform}</p>
              </div>
              {site.briefIntro.length > 0 && (
                <div>
                  <p>🧻 {site.briefIntro}</p>
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
