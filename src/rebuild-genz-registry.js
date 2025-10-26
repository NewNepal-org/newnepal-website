#!/usr/bin/env node

const axios = require('axios');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const { GENZ_REGISTRY_SHEET_XLSX_URL } = require('./constants.js');
const OUTPUT_FILE = path.join(__dirname, '..', 'data', 'genz-registry.json');

async function rebuildRegistry() {
  try {
    console.log('Fetching data from Google Sheets...');
    const response = await axios.get(GENZ_REGISTRY_SHEET_XLSX_URL, { responseType: 'arraybuffer' });
    
    const workbook = XLSX.read(response.data, { type: 'buffer' });
    if (!workbook.SheetNames.includes('GroupsTeams')) {
      throw new Error('Sheet "GroupsTeams" not found');
    }
    const worksheet = workbook.Sheets['GroupsTeams'];
    
    const expectedColumns = ['Name', 'Social', 'Contact', 'Description', 'Focus', 'Last Updated', 'Miscellaneous'];
    const actualColumns = Object.keys(XLSX.utils.sheet_to_json(worksheet, { defval: null })[0] || {});
    if (JSON.stringify(actualColumns.sort()) !== JSON.stringify(expectedColumns.sort())) {
      throw new Error(`Column mismatch. Expected: ${expectedColumns.join(', ')}. Found: ${actualColumns.join(', ')}`);
    }
    
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: null }).map(row => {
      ['Name', 'Social', 'Contact'].forEach(field => {
        if (row[field]) {
          row[field] = row[field].toString().split('\n').map(v => v.trim()).filter(v => v);
        }
      });
      return row;
    });
    
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ teams: jsonData }, null, 2));
    console.log(`Registry updated: ${OUTPUT_FILE}`);
    console.log(`Records: ${jsonData.length}`);
  } catch (error) {
    console.error('Error rebuilding registry:', error.message);
    process.exit(1);
  }
}

rebuildRegistry();