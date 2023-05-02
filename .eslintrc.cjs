// module.exports = {
//   env: {
//     browser: true,
//     es2021: true
//   },
//   extends: [
//     'plugin:vue/vue3-essential',
//     'standard-with-typescript'
//   ],
//   overrides: [
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module'
//   },
//   plugins: [
//     'vue'
//   ],
//   rules: {
//   }
// }
module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
  ],
  plugins: [ "@typescript-eslint"],
  rules: {
    "no-unused-vars": "off"
  },
  "ignorePatterns": ["dist"],
};