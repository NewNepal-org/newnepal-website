import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import registryData from '../../../data/genz-registry.json';
import { GENZ_REGISTRY_SHEET_WEB_URL } from '../../constants';

function getIconForLink(link) {
  if (link.includes('@')) return '/img/icons/email.svg';
  if (link.includes('facebook')) return '/img/icons/facebook.svg';
  if (link.includes('instagram')) return '/img/icons/instagram.svg';
  return '/img/icons/website.svg';
}

export default function GenZRegistry() {
  return (
    <Layout title={translate({message: 'GenZ Registry'})} description={translate({message: 'GenZ Registry - Discover GenZ teams working for Nepal'})}>
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1><Translate>GenZ Registry</Translate></h1>
            <p><Translate>Discover GenZ teams and groups working towards positive change in Nepal.</Translate></p>
            
            <div className="margin-bottom--lg">
              <Link className="button button--primary button--lg" to="/partner">
                <Translate>Partner with Us</Translate>
              </Link>
            </div>
            
            <div className="alert alert--info margin-bottom--lg">
              <p><em><Translate>If your group isn't included or your info needs update, please</Translate> <Link to="/contact"><Translate>contact us</Translate></Link> (also see <a href={GENZ_REGISTRY_SHEET_WEB_URL} target="_blank" rel="noopener noreferrer"><Translate>source of truth</Translate></a>).</em></p>
            </div>
            
            <div className="margin-vert--lg">
              <h2><Translate>GenZ Teams</Translate></h2>
              <div className="row">
                {registryData.teams.map((team, index) => (
                  <div key={index} className="col col--6 margin-bottom--md">
                    <div className="card" style={{height: '100%'}}>
                      <div className="card__body" style={{lineHeight: '1.2'}}>
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                          <img src={team.Logo || '/img/icons/group.svg'} alt="Logo" style={{width: '48px', height: '48px', marginRight: '0.5rem'}} />
                          <h3 style={{margin: 0}}>{team.Name?.[0] || 'Unknown'}</h3>
                        </div>
                        {team.Description && <p style={{marginBottom: '0.3rem'}}>{team.Description}</p>}
                        {team.Focus && <p style={{marginBottom: '0.3rem'}}><strong><Translate>Focus:</Translate></strong> {team.Focus}</p>}
                        {team['Last Updated'] && <p style={{marginBottom: '0.3rem'}}><strong><Translate>Last Updated:</Translate></strong> {team['Last Updated']}</p>}
                        {(team.Social || team.Contact) && (
                          <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                            {[...(team.Social || []), ...(team.Contact || [])].map((link, i) => (
                              <a key={i} href={link.startsWith('http') ? link : `mailto:${link}`} target="_blank" rel="noopener noreferrer">
                                <img src={getIconForLink(link)} alt="Link" style={{width: '20px', height: '20px'}} />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="margin-vert--lg">
              <h2><Translate>GenZ Websites</Translate></h2>
              <div className="row">
                {registryData.websites.map((website, index) => (
                  <div key={index} className="col col--6 margin-bottom--md">
                    <div className="card" style={{height: '100%'}}>
                      <div className="card__body" style={{lineHeight: '1.2'}}>
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                          <img src={website.Logo || '/img/icons/website-black.svg'} alt="Logo" style={{width: '48px', height: '48px', marginRight: '0.5rem'}} />
                          <h3 style={{margin: 0}}>
                            <a href={website.Website} target="_blank" rel="noopener noreferrer">
                              {website.Website.replace('https://', '')}
                            </a>
                          </h3>
                        </div>
                        {website.Description && <p style={{marginBottom: '0.3rem'}}>{website.Description}</p>}
                        {website.Contact && (
                          <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                            {website.Contact.map((contact, i) => (
                              <a key={i} href={contact.includes('@') ? `mailto:${contact}` : contact} target="_blank" rel="noopener noreferrer">
                                <img src={getIconForLink(contact)} alt="Contact" style={{width: '32px', height: '32px'}} />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}