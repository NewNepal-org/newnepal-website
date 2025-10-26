import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import registryData from '../../data/genz-registry.json';
import { GENZ_REGISTRY_SHEET_WEB_URL } from '../constants';

export default function GenZRegistry() {
  return (
    <Layout title={translate({message: 'GenZ Registry'})} description={translate({message: 'GenZ Registry - Discover GenZ teams working for Nepal'})}>
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1><Translate>GenZ Registry</Translate></h1>
            <p><Translate>Discover GenZ teams and groups working towards positive change in Nepal.</Translate></p>
            
            <div className="alert alert--info margin-bottom--lg">
              <p><strong><Translate>Source of Truth:</Translate></strong> <a href={GENZ_REGISTRY_SHEET_WEB_URL} target="_blank" rel="noopener noreferrer"><Translate>Google Sheets</Translate></a>. <Translate>If your group isn't included or your info needs update, please</Translate> <Link to="/contact"><Translate>contact us</Translate></Link>.</p>
            </div>
            
            <div className="margin-vert--lg">
              <h2><Translate>GenZ Teams</Translate></h2>
              {registryData.teams.map((team, index) => (
                <div key={index} className="card margin-bottom--md">
                  <div className="card__body" style={{lineHeight: '1.2'}}>
                    <h3 style={{marginBottom: '0.5rem'}}>{team.Name?.[0] || 'Unknown'}</h3>
                    {team.Description && <p style={{marginBottom: '0.3rem'}}>{team.Description}</p>}
                    {team.Focus && <p style={{marginBottom: '0.3rem'}}><strong><Translate>Focus:</Translate></strong> {team.Focus}</p>}
                    {team['Last Updated'] && <p style={{marginBottom: '0.3rem'}}><strong><Translate>Last Updated:</Translate></strong> {team['Last Updated']}</p>}
                    {(team.Social || team.Contact) && (
                      <div>
                        <strong><Translate>Links:</Translate> &nbsp;</strong>
                        {[...(team.Social || []), ...(team.Contact || [])].map((link, i) => (
                          <span key={i}>
                            {i > 0 && ' | '}
                            <a href={link.startsWith('http') ? link : `mailto:${link}`} target="_blank" rel="noopener noreferrer">
                              {link.includes('@') ? 'Email' : link.includes('facebook') ? 'Facebook' : link.includes('instagram') ? 'Instagram' : 'Website'}
                            </a>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            

          </div>
        </div>
      </div>
    </Layout>
  );
}