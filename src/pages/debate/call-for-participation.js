import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';

export default function CallForParticipation() {
  return (
    <Layout title={translate({message: 'Call for Participation'})} description={translate({message: 'Join the weekly debates for New Nepal'})}>
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1><Translate>Call for Participation - Weekly Debate</Translate></h1>
            <p><Translate>NewNepal.org is excited to announce a series of weekly debates focused on nation-building, particularly in light of the recent Gen Z protests in Nepal. We invite all Nepali youth, both those residing in Nepal and those living abroad, to participate in these crucial discussions.</Translate></p>
            
            <h2><Translate>Weekly Debate Format</Translate></h2>
            <p><Translate>These debates will be held virtually via Zoom at a consistent, set time each week (TBD). It will follow an Oxford-style debate, where one side will stand for a motion, and another team against it.</Translate></p>
            <p><Translate>Please review the </Translate><Link to="/debate"><Translate>debate rules</Translate></Link><Translate> before participating.</Translate></p>
            
            <h2><Translate>Debate Topics</Translate></h2>
            <p><Translate>The debates seek to cover current issues affecting the future of our nation, including:</Translate></p>
            <ol>
              <li><Translate>Whether PM Karki's Government has embodied the changes envisioned by Gen Z</Translate></li>
              <li><Translate>Whether Nepal should adopt a directly elected prime minister/president</Translate></li>
              <li><Translate>Whether federalism has any place in Nepal's future</Translate></li>
              <li><Translate>Whether voting rights should be granted for Nepalese Citizens Living Abroad</Translate></li>
              <li><Translate>Whether socialism has any more future in Nepal</Translate></li>
              <li><Translate>Whether the current government is bought by NGOs</Translate></li>
            </ol>
            
            <h2><Translate>Registration</Translate></h2>
            <p><Translate>For registration in one or more debate events, either as a speaker or as a participant, please fill out </Translate><a href="https://docs.google.com/forms/d/e/1FAIpQLScTvdYqJmPdZ-maKu_b8bJzwr8N7gsFdticPbO5w6Hp9jJdGw/viewform" target="_blank" rel="noopener noreferrer"><Translate>this form</Translate></a><Translate>. For more details on participation, please reach out to us via </Translate><a href="mailto:hello@newnepal.org">hello@newnepal.org</a><Translate> or on our </Translate><a href="https://discord.gg/mRYbcEAuaQ" target="_blank" rel="noopener noreferrer"><Translate>Discord server</Translate></a>.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}