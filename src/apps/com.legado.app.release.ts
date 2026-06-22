import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.legado.app.release',
  name: '(新包名)阅读',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '弹窗-按[返回键]',
      rules: [
        {
          fastQuery: true,
          action: 'back',
          activityIds: 'io.legado.app.ui.main.MainActivity',
          matches: '[text*="版"] - [vid="tool_bar"] >2 [text="下载"]',
          snapshotUrls: 'https://i.gkd.li/i/29211951',
        },
      ],
    },
  ],
});
