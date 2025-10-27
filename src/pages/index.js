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
    imageUrl: 'img/genz-registry-icon.svg',
    description: <Translate>Discover GenZ teams and groups working towards positive change in Nepal.</Translate>,
    link: '/genz-registry'
  },
  {
    title: <Translate>Corruption Database</Translate>,
    imageUrl: 'img/corruption-database-icon.svg',
    description: <Translate>This will be a central case-by-case corruption database, and their statues.</Translate>,
    link: '/corruption',
    underConstruction: true
  },
  {
    title: <Translate>Weekly Debate</Translate>,
    imageUrl: 'img/weekly-debates-icon.svg',
    description: <Translate>Participate in weekly discussions on important national issues and topics.</Translate>,
    link: '/debate',
    underConstruction: false
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
            <div className={clsx("text--center margin-bottom--md", styles.banner)}>
              <p className={styles.bannerText}><Translate>⭐️ Contributors Needed! We're looking for Web Developers, Designers, and Content Creators.</Translate> <Link to="/docs/contributors-needed" className={styles.bannerLink}><Translate>Learn More</Translate></Link></p>
              <button 
                onClick={() => setShowBanner(false)}
                className={styles.bannerCloseButton}
              >
                ×
              </button>
            </div>
          )}
          <div className="row">
            <div className="col col--6">
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{translate({message: 'A Digital Platform for Nepali Youth, by Nepali Youth'})}</p>
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
            <div className="col col--6">
              <div className="text--center">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/2K214A--Ksc"
                  title="About NewNepal.org | Damodar Dahal on YouTube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{maxWidth: '560px'}}
                ></iframe>
              </div>
            </div>
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
