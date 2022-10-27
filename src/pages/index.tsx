import Layout from "@theme/Layout";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <main className={styles.background}>
        <div>
          <div className={clsx("container", styles.heroWrap)}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div>
              <Link
                className="button button--secondary button--outline button--lg"
                to="/docs/example"
              >
                About me
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
