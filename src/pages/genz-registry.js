import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import registryData from '../../data/registry.json';

export default function GenZRegistry() {
  return (
    <Layout title={translate({message: 'GenZ Registry'})} description={translate({message: 'GenZ Registry - Discover GenZ teams working for Nepal'})}>
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1><Translate>GenZ Registry</Translate></h1>
            <p><Translate>Discover GenZ teams and groups working towards positive change in Nepal.</Translate></p>
            
            <div className="margin-vert--lg">
              <h2><Translate>GenZ Teams</Translate></h2>
              {registryData.teams.map(team => (
                <div key={team.id} className="card margin-bottom--md">
                  <div className="card__body" style={{lineHeight: '1.2'}}>
                    <h3 style={{marginBottom: '0.5rem'}}>{team.name}</h3>
                    <p style={{marginBottom: '0.3rem'}}>{team.description}</p>
                    <p style={{marginBottom: '0.3rem'}}><strong><Translate>Focus:</Translate></strong> {team.focus}</p>
                    <p style={{marginBottom: '0.3rem'}}><strong><Translate>Location:</Translate></strong> {team.location}</p>
                    <p style={{marginBottom: '0.3rem'}}><strong><Translate>Last Updated:</Translate></strong> {team.lastUpdated}</p>
                    {team.links && (
                      <div>
                        <strong><Translate>Links:</Translate> &nbsp;</strong> 
                        {Object.entries(team.links).map(([key, value], index) => (
                          <span key={key}>
                            {index > 0 && ' | '}
                            <a href={value} target="_blank" rel="noopener noreferrer">{key}</a>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="margin-vert--lg">
              <p><Translate>If your GenZ group isn't included, please</Translate> <Link to="/contact"><Translate>contact us</Translate></Link>.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}