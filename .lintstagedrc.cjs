module.exports = {
  'lib/*/src/**/*.{js,jsx,ts,tsx,json,md}': [
    'eslint --fix',
    'prettier --ignore-unknown --write'
  ],
  'lib/*/docs/**/*.{js,jsx,ts,tsx,json,md}': [
    'prettier --ignore-unknown --write'
  ],
  'lib/*/tests/**/*.{js,jsx,ts,tsx,json}': [
    'eslint --fix',
    'prettier --ignore-unknown --write'
  ],
  'example/src/**/*.{js,jsx,ts,tsx,json,md}': [
    'eslint --fix',
    'prettier --ignore-unknown --write'
  ],
  'example/tests/**/*.{js,jsx,ts,tsx,json}': [
    'eslint --fix',
    'prettier --ignore-unknown --write'
  ]
}
