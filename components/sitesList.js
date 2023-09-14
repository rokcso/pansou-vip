import Link from "next/link";
import styles from "./sitesList.module.css";

export default function SitesList({ sites }) {
  const groupedSites = groupArray(sites, 5);
  return (
    <>
      <div className={styles.container}>
        {groupedSites.map((group, index) => (
          <div key={index} className={styles.row}>
            {group.map((site) => (
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
            {group.length < 5 &&
              Array.from({ length: 5 - group.length }).map((_, i) => (
                <div
                  key={`placeholder-${i}`}
                  className={styles.placeholder}
                ></div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
}

function groupArray(arr, size) {
  const groupedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    groupedArr.push(arr.slice(i, i + size));
  }
  return groupedArr;
}
