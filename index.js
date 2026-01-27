import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
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
            to="/docs/getting-started/introduction">
            Get Started - 15min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md padding-vert--md card">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link}>Learn more →</Link>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Comprehensive Docker training resources for developers at all levels">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <Feature
                title="🚀 Getting Started"
                description="New to Docker? Start here with our 15-minute introduction and hands-on workshop."
                link="/docs/getting-started/introduction"
              />
              <Feature
                title="💻 Language Guides"
                description="Language-specific guides for Python, JavaScript, Java, Go, and 10+ more languages."
                link="/docs/language-guides/overview"
              />
              <Feature
                title="🤖 AI & ML"
                description="Build and deploy AI applications with Docker. From agentic AI to data science."
                link="/docs/ai-ml/overview"
              />
            </div>
            <div className="row margin-top--lg">
              <Feature
                title="⚙️ DevOps & Cloud"
                description="CI/CD pipelines, Kubernetes deployment, and cloud platform integration."
                link="/docs/devops/overview"
              />
              <Feature
                title="🎓 Learning Paths"
                description="Curated learning paths for developers, DevOps engineers, and security professionals."
                link="/docs/learning-paths/developers"
              />
              <Feature
                title="📚 Resources"
                description="Documentation, tutorials, videos, and community resources to master Docker."
                link="/docs/additional-resources"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
