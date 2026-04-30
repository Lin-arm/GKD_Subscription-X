import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'moe.shizuku.privileged.api',
  name: 'Shizuku',
  groups: [
    {
      key: 1,
      name: '功能类-直接以root方式[启动]',
      desc: '进app后点击[启动], (仅GKD以无障碍模式工作可用)',
      rules: [
        {
          fastQuery: true,
          matchTime: 2000, // 2秒后休眠
          resetMatch: 'app',
          activityIds: 'moe.shizuku.manager.MainActivity',
          matches:
            '[!(getChild(childCount.minus(2)).text="配对")] > Button[text="启动"]',
          snapshotUrls: [
            'https://i.gkd.li/i/27246993', // thedjchi 分支版
            'https://i.gkd.li/i/27248071', // RikkaApps 原版
          ],
        },
      ],
    },
  ],
});
