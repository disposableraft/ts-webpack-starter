# Typescript and Webpack Starter

A Typescript and Webpack starter for small apps or pages that don't require large libraries and frameworks. Like for when you just want to experiment or something. Includes basic features, such as:

- A development server
- Typescript checks running in a separate process
- CSS and image (png|jgp|gif|svg) imports
- Source maps
- No production defaults

## Install

One way to scaffold a new project is to use [degit](https://github.com/Rich-Harris/degit). 

Degit copies the repository while excluding git.

Copy the starter files:

```bash
# Prepare the project directory
mkdir my-project
cd my-project

# Copy the repos files into the current directory
npx degit disposableraft/ts-webpack-starter

# Initialize a new git repository
git init

# Install the deps
npm install

# Start coding
npm run start
```
