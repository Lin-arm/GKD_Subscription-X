import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 777,
  // name: '🎤💃🎶🏀的GKD订阅',
  name: '少年阿鲲的GKD订阅🐔',
  version: 0,
  author: '鲲门杂役',
  updateUrl: 'https://gkd-rules-777.pages.dev/gkd.json5',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/Lin-arm/gkd-Rules',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
