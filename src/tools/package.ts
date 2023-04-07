export default {
    "name": "xernerx",
    "version": "4.0.0",
    "description": "A bot framework for discord.js.",
    "main": "dist/main.js",
    "type": "module",
    "keywords": [
        "discord.js",
        "discord",
        "framework",
        "mjs",
        "esm",
        "cjs",
        "ts"
    ],
    "author": "Dummi",
    "license": "MIT",
    "homepage": "https://xernerx.github.io/xernerx",
    "packageManager": "npm@8.5.5",
    "scripts": {
        "start": "npm i && npm fund && npm audit fix --force && npm link && tsc -w",
        "patch": "npm run write && git add . && npm run commit && npm version patch && npm publish && git push",
        "minor": "npm run write && git add . && npm run commit && npm version minor && npm publish && git push",
        "major": "npm run write && git add . && npm run commit && npm version major && npm publish && git push",
        "site": "git add docs && npm run commit && git push",
        "commit": "node ../.scripts/commit.js",
        "write": "npm run build && npm run format && node ../.scripts/rewritePackage.js ",
        "format": "npx prettier --write src dist",
        "build": "tsc && npm run format"
    },
    "repository": {
        "type": "git",
        "url": "git+https://github.com/xernerx/xernerx.git"
    },
    "bugs": {
        "url": "https://github.com/xernerx/xernerx/issues"
    },
    "dependencies": {
        "discord.js": "^14.9.0",
        "dumfunctions": "^2.1.2",
        "xernerx-extension-builder": "^0.0.9",
        "zod": "^3.21.4"
    },
    "devDependencies": {
        "prettier": "^2.8.7",
        "typescript": "^5.0.3"
    }
}
