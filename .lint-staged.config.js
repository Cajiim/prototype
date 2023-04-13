// eslint-disable-next-line no-undef
module.exports = {
  '*.{js,jsx,ts,tsx}': ['npm run lint:fix', 'npm run format'],
  '*.{json,md,html,css}': 'npm run format',
};
