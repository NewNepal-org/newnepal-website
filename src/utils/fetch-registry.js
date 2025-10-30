const axios = require('axios');
const XLSX = require('xlsx');

const { GENZ_REGISTRY_SHEET_XLSX_URL } = require('../constants.js');

function parseGroupsTeams(workbook) {
  if (!workbook.SheetNames.includes('GroupsTeams')) {
    throw new Error('Sheet "GroupsTeams" not found');
  }
  const worksheet = workbook.Sheets['GroupsTeams'];
  
  const expectedColumns = ['Name', 'Logo', 'Social', 'Contact', 'Description', 'Focus', 'Last Updated', 'Miscellaneous'];
  const actualColumns = Object.keys(XLSX.utils.sheet_to_json(worksheet, { defval: null })[0] || {});
  if (JSON.stringify(actualColumns.sort()) !== JSON.stringify(expectedColumns.sort())) {
    throw new Error(`GroupsTeams column mismatch. Expected: ${expectedColumns.join(', ')}. Found: ${actualColumns.join(', ')}`);
  }
  
  return XLSX.utils.sheet_to_json(worksheet, { defval: null }).map(row => {
    ['Name', 'Social', 'Contact'].forEach(field => {
      if (row[field]) {
        row[field] = row[field].toString().split('\n').map(v => v.trim()).filter(v => v);
      }
    });
    return row;
  });
}

function parseGenZWebsites(workbook) {
  if (!workbook.SheetNames.includes('GenZ Websites')) {
    throw new Error('Sheet "GenZ Websites" not found');
  }
  const worksheet = workbook.Sheets['GenZ Websites'];
  
  const expectedColumns = ['Website', 'Logo', 'Contact', 'Description'];
  const actualColumns = Object.keys(XLSX.utils.sheet_to_json(worksheet, { defval: null })[0] || {});
  if (JSON.stringify(actualColumns.sort()) !== JSON.stringify(expectedColumns.sort())) {
    throw new Error(`GenZ Websites column mismatch. Expected: ${expectedColumns.join(', ')}. Found: ${actualColumns.join(', ')}`);
  }
  
  return XLSX.utils.sheet_to_json(worksheet, { defval: null }).map(row => {
    if (row.Contact) {
      row.Contact = row.Contact.toString().split('\n').map(v => v.trim()).filter(v => v);
    }
    return row;
  });
}

async function fetchRegistry() {
  const response = await axios.get(GENZ_REGISTRY_SHEET_XLSX_URL, { responseType: 'arraybuffer' });
  const workbook = XLSX.read(response.data, { type: 'buffer' });
  
  const teamsData = parseGroupsTeams(workbook);
  const websitesData = parseGenZWebsites(workbook);
  
  return { teams: teamsData, websites: websitesData };
}

module.exports = { fetchRegistry };