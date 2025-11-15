import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';

export default function WeeklyDebates() {
  return (
    <Layout title={translate({message: 'Weekly Debates'})} description={translate({message: 'Weekly Debates page'})}>
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1><Translate>Weekly Debates</Translate></h1>
            <div className="alert alert--info">
              <h4><Translate>🤝 Call for Volunteers</Translate></h4>
              <p><Translate>We are currently short staffed and can only organize GenZ Debate if we find a leader who can take this on. We need someone to step up and lead this important initiative for Nepal's youth.</Translate></p>
            </div>
            
            <h2><Translate>Aim of the Debates</Translate></h2>
            <p><Translate>Our weekly debates aim to foster critical thinking and constructive dialogue on Nepal's future. We seek to engage Nepali youth in meaningful discussions about nation-building, governance, and the path forward for our country.</Translate></p>
            
            <p><a href="https://docs.google.com/forms/d/e/1FAIpQLScTvdYqJmPdZ-maKu_b8bJzwr8N7gsFdticPbO5w6Hp9jJdGw/viewform" target="_blank" rel="noopener noreferrer" className="button button--primary button--lg"><Translate>Participate</Translate></a></p>
            
            <p><Link to="/debate/call-for-participation"><Translate>Join our Call for Participation</Translate></Link></p>
            
            <h2><Translate>Prospective Topics</Translate></h2>
            <ul>
              <li><Translate>PM Sushila Karki's Government has aptly and effectively embodied the change envisioned by Gen Z?</Translate></li>
              <li><Translate>Nepal needs a Directly Elected Prime Minister or a President.</Translate></li>
              <li><Translate>Federalism has no place in Nepal.</Translate></li>
              <li><Translate>Socialism has no future in Nepal.</Translate></li>
              <li><Translate>Current Nepal government is an NGO government.</Translate></li>
              <li><Translate>Yemale, Congress, and Maobadi should be banned from participating in the March election.</Translate></li>
            </ul>
            
            <h2><Translate>Debate Rules</Translate></h2>
            <ul>
              <li><Translate>Oxford-style format with teams for and against each motion</Translate></li>
              <li><Translate>Respectful discourse and evidence-based arguments</Translate></li>
              <li><Translate>Equal speaking time for all participants</Translate></li>
              <li><Translate>Moderated discussions with structured rebuttals</Translate></li>
            </ul>
            
            <h2><Translate>Contact Us</Translate></h2>
            <p><Translate>For questions or more information, reach out to us at </Translate><a href="mailto:hello@newnepal.org">hello@newnepal.org</a><Translate> or join our </Translate><a href="https://discord.gg/mRYbcEAuaQ" target="_blank" rel="noopener noreferrer"><Translate>Discord server</Translate></a>.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}