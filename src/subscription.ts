import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 777,
  name: '偏向功能脚本类的GKD订阅🧧',
  version: 0,
  author: 'Lin-arm',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/Lin-arm/gkd-Rules',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
