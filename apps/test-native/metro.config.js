// Learn more https://docs.expo.dev/guides/monorepos
const path = require('path')

const { getSentryExpoConfig } = require('@sentry/react-native/metro')

const projectRoot = __dirname
const workspaceRoot = path.resolve(projectRoot, '../..')

const config = getSentryExpoConfig(projectRoot)

config.watchFolders = [workspaceRoot]
// config.resolver.assetExts.push('cjs', 'mjs')
config.resolver.nodeModulesPath = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
]

module.exports = config
