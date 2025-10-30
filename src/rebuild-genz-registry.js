#!/usr/bin/env node

const { fetchRegistry } = require('./utils/fetch-registry.js');
const { saveRegistry } = require('./utils/save-registry.js');

async function rebuildRegistry() {
  try {
    console.log('Fetching data from Google Sheets...');
    const registryData = await fetchRegistry();
    saveRegistry(registryData);
  } catch (error) {
    console.error('Error rebuilding registry:', error.message);
    process.exit(1);
  }
}

rebuildRegistry();