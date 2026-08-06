import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.home',
  name: '(小米)系统桌面',
  groups: [
    {
      key: 1,
      name: '功能类-查看zfb[应用信息]',
      desc: '长按支付宝后,点击[应用信息]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.launcher.Launcher',
          matches: '[text="收钱"] <2 [childCount=2] <2 [childCount=4] -2 [visibleToUser=true] > @[clickable=true] > [text="应用信息"]',
          snapshotUrls: [
            'https://i.gkd.li/i/30796818',
            'https://i.gkd.li/i/30796977',
          ],
          exampleUrls: 'https://e.gkd.li/55defc28-69ee-4292-bdfd-b47fe1a530c7',
        },
      ],
    },
  ],
});