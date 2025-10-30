const fs = require('fs');
const path = require('path');

const OUTPUT_FILE = path.join(__dirname, '..', '..', 'data', 'genz-registry.json');

function saveRegistry(registryData) {
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(registryData, null, 2));
  console.log(`Registry updated: ${OUTPUT_FILE}`);
  console.log(`Teams: ${registryData.teams.length}, Websites: ${registryData.websites.length}`);
}

module.exports = { saveRegistry };