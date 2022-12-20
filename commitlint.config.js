module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [
      2,
      "always",
      [
        "root",
        ".github",
        ".release-it.json",
        "commitizen.config.json",
        "commitlint.config.js",
        "package.json",
        "pnpm-lock.yaml",
        "reset-css.styles.css",
        "README.md",
      ],
    ],
  },
};
