const globals = require("globals");

module.exports = [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**", "eslint.config.js", "public/js/md5.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...globals.browser
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "off"
    }
  },
	{
		files: ["eslint.config.js"],
		languageOptions: {
			globals: {
				...globals.node
			}
		}
	}
];
