module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "object-curly-newline":0,
    "jsx-a11y/click-events-have-key-events":0,
    "jsx-a11y/no-noninteractive-element-interaction":"off",
    "no-console": "off",
    "no-alert": "off",
    'Block must not be padded by blank lines':0,
    'jsx-a11y/label-has-associated-control':0,
    'import/extensions':0,
    'import/no-unresolved':0,
    'linebreak-style': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'no-undef': 0,
    "jsx-a11y/anchor-is-valid": [
      "off",
      {
        "components": ["Link"],
        "specialLink": ["hrefLeft", "hrefRight"],
        "aspects": ["noHref", "invalidHref", "preferButton"]
      }
    ],
    
  },
  
};
