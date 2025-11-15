import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';

export default function CorruptionDatabase() {
  return (
    <Layout title={translate({message: 'Corruption Database'})} description={translate({message: 'Corruption Database page'})}>
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1><Translate>Public Accountability Platform (PAP)</Translate></h1>
            <p><Link href="https://letsbuildnepal.com" target="_blank"><Translate>Let's Build Nepal (LBN)</Translate></Link> <Translate>and NewNepal.org are partnering to build a public accountability platform to hold Nepali public entities accountable through a comprehensive corruption database.</Translate></p>
            <p><Translate>We hold accountable politicians, political parties, media organizations, bureaucrats, and other public figures who have significant influence on Nepal's governance and society.</Translate></p>
            <h3><Translate>Key Features</Translate></h3>
            <ul>
              <li><Translate>Central database of misconduct allegations against Nepali public entities</Translate></li>
              <li><Translate>Public accessibility with audit trails</Translate></li>
              <li><Translate>Verified content with integrity and moderation</Translate></li>
              <li><Translate>Information portal with laws, regulations, and rights in English and Nepali</Translate></li>
              <li><Translate>Right to respond for alleged entities</Translate></li>
              <li><Translate>Protection and privacy safeguards</Translate></li>
            </ul>
            <p><Link href="https://docs.google.com/document/d/1JXneK1fvfUL4csCmGb9f2FUXy6-ZH3UalDOTC7kyL0Y/edit?tab=t.0" target="_blank"><Translate>View Full Planning Document</Translate></Link></p>
            <div className="alert alert--info">
              <h4><Translate>🤝 Contributors Needed</Translate></h4>
              <p><Translate>We're looking for contributors to help build this important resource.</Translate> <Link to="/docs/contributors-needed"><Translate>Learn how you can contribute</Translate></Link>.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}