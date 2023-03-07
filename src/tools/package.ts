export default {
    "name": "xernerx",
    "version": "3.6.0",
    "description": "A bot framework for discord.js.",
    "main": "dist/cjs/main.js",
    "module": "dist/mjs/main.js",
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
    "homepage": "https://xernerx.github.io/xernerx/home.html",
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
        "build": "npm run build:esm && npm run build:cjs && npm run format",
        "build:esm": "tsc",
        "build:cjs": "tsc --module CommonJS --outDir dist/cjs"
    },
    "repository": {
        "type": "git",
        "url": "git+https://github.com/xernerx/xernerx.git"
    },
    "bugs": {
        "url": "https://github.com/xernerx/xernerx/issues"
    },
    "dependencies": {
        "@sapphire/shapeshift": "^3.8.1",
        "dbl-sdk": "^1.2.0",
        "discord.js": "^14.7.1",
        "dumfunctions": "^2.1.2",
        "xernerx-extension-builder": "^0.0.8",
        "zod": "^3.20.6"
    },
    "devDependencies": {
        "prettier": "^2.8.4",
        "typescript": "^4.9.5"
    }
}
