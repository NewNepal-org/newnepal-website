import React from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';

export default function WeeklyDebates() {
  return (
    <Layout title={translate({message: 'Weekly Debates'})} description={translate({message: 'Weekly Debates page'})}>
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1><Translate>Weekly Debates</Translate></h1>
            <div className="alert alert--warning">
              <h4><Translate>🚧 Under Construction</Translate></h4>
              <p><Translate>This page is currently under development. We are creating a platform for structured debates on important national issues.</Translate></p>
            </div>
            <div className="alert alert--info">
              <h4><Translate>🤝 Contributors Needed</Translate></h4>
              <p><Translate>We're looking for contributors to help develop this debate platform.</Translate> <a href="/docs/contributors-needed"><Translate>Learn how you can contribute</Translate></a>.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}