import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.settings',
  name: '设置',
  groups: [
    {
      key: 1,
      name: '功能类-🔌插USB后用于xxx-取消',
      desc: '(小米📱)点击[取消]',
      enable: false,
      rules: [
        {
          matches: [
            '[text="USB 用于"][visibleToUser=true]',
            '[text="取消"][clickable=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23428639', // 设置v12
            'https://i.gkd.li/i/23696166', // 设置v11
          ],
          exampleUrls: 'https://e.gkd.li/1ab102bd-99dd-471a-8841-33a7aaf2790a',
          activityIds: '.connecteddevice.usb.UsbModeChooserActivity',
        },
      ],
    },
    {
      key: 2,
      name: '自动精灵-获取无障碍-允许',
      desc: '(真我📱)弹窗-点击[允许]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          matches: [
            '[vid="title"][text*="自动精灵"]',
            '[text="允许"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23588703',
          activityIds: '.SubSettings',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-允许USB调试-确定',
      desc: '(真我📱)弹窗-点击[确定]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          matches: [
            '[text="是否允许 USB 调试？"][visibleToUser=true]',
            '[text="确定"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/25254118',
          exampleUrls: 'https://e.gkd.li/31684fe6-d89d-4e56-a4a3-2543a462ace8',
          activityIds: '.Settings$DevelopmentSettingsDashboardActivity',
        },
      ],
    },
  ],
});
