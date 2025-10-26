import React from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';

export default function CorruptionDatabase() {
  return (
    <Layout title={translate({message: 'Corruption Database'})} description={translate({message: 'Corruption Database page'})}>
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1><Translate>Corruption Database</Translate></h1>
            <div className="alert alert--warning">
              <h4><Translate>🚧 Under Construction</Translate></h4>
              <p><Translate>This page is currently under development. We are building a comprehensive database to track corruption cases and promote transparency.</Translate></p>
            </div>
            <div className="alert alert--info">
              <h4><Translate>🤝 Contributors Needed</Translate></h4>
              <p><Translate>We're looking for contributors to help build this important resource.</Translate> <a href="/docs/contributors-needed"><Translate>Learn how you can contribute</Translate></a>.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}