import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securitycenter',
  name: '(小米)手机管家',
  groups: [
    {
      key: 1,
      name: '应用信息页-开自启动',
      desc: '弹窗-点击[确定]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          matches: ['[text*="自启动"]', '[text="确定"][clickable=true]'],
          snapshotUrls: 'https://i.gkd.li/i/23764176',
          exampleUrls: 'https://e.gkd.li/9a021f5f-8ade-47a2-8923-6038b85c8587',
          activityIds: 'com.miui.appmanager.ApplicationsDetailsActivity',
        },
      ],
    },
    {
      key: 2,
      name: '应用信息页-强行停止',
      desc: '弹窗-点击[确定]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          matches: ['[text*="强行停止"]', '[text="确定"][clickable=true]'],
          snapshotUrls: 'https://i.gkd.li/i/30166108',
          exampleUrls: 'https://e.gkd.li/f0a6acc3-e51c-41dd-be9d-067973b8a912',
          activityIds: 'com.miui.appmanager.ApplicationsDetailsActivity',
        },
      ],
    },
  ],
});
