import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/welcome">
            Docs
          </Link>
          <div>&nbsp;</div>
          <Link
            className="button button--secondary button--lg"
            to="/blog/welcome">
            Blog
          </Link>
        </div>
      </div>
      
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Frictionless User Feedback">
      <HomepageHeader />
      <main>
      <div style={{ margin: 'auto', width: '50%', height: '540px', padding: '20px' }}>
        <br />
        <iframe width='100%' height='100%' src="https://www.youtube.com/embed/H1CwSwMHOUU" frameborder="0" ></iframe>
        <br />
      </div>
      <br />
      </main>
    </Layout>
  );
}
