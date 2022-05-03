module.exports = {
  'packages/*/src/**/*.{js,jsx,ts,tsx,json,md}': [
    'eslint --fix',
    'prettier --ignore-unknown --write'
  ],
  'packages/*/docs/**/*.{js,jsx,ts,tsx,json,md}': [
    'prettier --ignore-unknown --write'
  ],
  'packages/*/tests/**/*.{js,jsx,ts,tsx,json}': [
    'eslint --fix',
    'prettier --ignore-unknown --write'
  ],
  'demo/src/**/*.{js,jsx,ts,tsx,json,md}': [
    'eslint --fix',
    'prettier --ignore-unknown --write'
  ],
  'demo/tests/**/*.{js,jsx,ts,tsx,json}': [
    'eslint --fix',
    'prettier --ignore-unknown --write'
  ]
}
