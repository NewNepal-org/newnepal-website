import React from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';

export default function Contact() {
  return (
    <Layout title={translate({message: 'Contact'})} description={translate({message: 'Contact New Nepal'})}>
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1><Translate>Contact</Translate></h1>
            <p><Translate>Get in touch with us:</Translate></p>
            <p><Translate>Email:</Translate> <a href="mailto:hello@newnepal.org">hello@newnepal.org</a></p>
            <p><Translate>Discord:</Translate> <a href="https://discord.gg/mRYbcEAuaQ" target="_blank" rel="noopener noreferrer"><Translate>Join our Discord server</Translate></a></p>
          </div>
        </div>
      </div>
    </Layout>
  );
}