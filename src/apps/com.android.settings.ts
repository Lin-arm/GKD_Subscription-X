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
      desc: '(真我📱)弹窗-点击 允许',
      enable: false,
      rules: [
        {
          matches: [
            '[vid="title"][text*="自动精灵"]',
            '[text="允许"][clickable=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23588703',
          activityIds: '.SubSettings',
        },
      ],
    },
  ],
});
