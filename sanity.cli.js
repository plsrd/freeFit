import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'krm54zrd',
    dataset: 'development',
  },
  deployment: {
    autoUpdates: true,
  },
})
