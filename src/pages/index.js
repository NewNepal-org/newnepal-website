import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

const features = [
  {
    title: <Translate>GenZ Registry</Translate>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: <Translate>Discover GenZ teams and groups working towards positive change in Nepal.</Translate>,
    link: '/genz-registry'
  },
  {
    title: <Translate>Corruption Database</Translate>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: <Translate>Track and report corruption cases to promote transparency and accountability.</Translate>,
    link: '/corruption',
    underConstruction: true
  },
  {
    title: <Translate>Weekly Debates</Translate>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: <Translate>Participate in weekly discussions on important national issues and policies.</Translate>,
    link: '/debate',
    underConstruction: true
  },
];

function Feature({imageUrl, title, description, link, underConstruction}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <Link to={link} className="text--center" style={{textDecoration: 'none', color: 'inherit'}}>
        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <h3>
          {title}
          {underConstruction && <span style={{marginLeft: '8px', fontSize: '12px', backgroundColor: '#ff9500', color: 'white', padding: '2px 6px', borderRadius: '3px'}}><Translate>Under Construction</Translate></span>}
        </h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const [showBanner, setShowBanner] = useState(true);
  return (
    <Layout
      title={`${siteConfig.title} | ${translate({message: 'Empowering Nepali Youth, By Nepali Youth'})}`}
      description={translate({message: 'Description will go into a meta tag in <head />'})}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          {showBanner && (
            <div className="text--center margin-bottom--md" style={{backgroundColor: 'red', padding: '10px', borderRadius: '5px', position: 'relative'}}>
              <p style={{margin: 0, color: 'white'}}><Translate>⭐️ Contributors Needed! We're looking for Web Developers, Designers, and Content Creators.</Translate> <Link to="/docs/contributors-needed" style={{color: 'white', textDecoration: 'underline'}}><Translate>Learn More</Translate></Link></p>
              <button 
                onClick={() => setShowBanner(false)}
                style={{position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'white', fontSize: '18px', cursor: 'pointer'}}
              >
                ×
              </button>
            </div>
          )}
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{translate({message: siteConfig.tagline})}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              <Translate>Get Started</Translate>
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
