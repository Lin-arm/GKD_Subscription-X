import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.systemui',
  name: '系统界面',
  groups: [
    {
      key: 1,
      name: '自动精灵-获取屏幕内容-允许',
      desc: '点击[立即开始]',
      rules: [
        {
          matches: [
            '[vid="dialog_title" || id="android:id/message"][text*="自动精灵"]',
            '[text="立即开始"][clickable=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23381954', //小米📱
            'https://i.gkd.li/i/23382378', //华为📱
          ],
          activityIds: '.media.MediaProjectionPermissionActivity',
        },
      ],
    },
    {
      key: 2,
      name: 'GKD-获取屏幕内容-允许',
      desc: '点击[立即开始]',
      rules: [
        {
          matches: [
            '[vid="dialog_title" || id="android:id/message"][text*="GKD"]',
            '[text="立即开始"][clickable=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23415064',
          activityIds: '.media.MediaProjectionPermissionActivity',
        },
      ],
    },
    {
      key: 3,
      name: '瞬译-获取屏幕内容-允许',
      desc: '点击[立即开始]',
      rules: [
        {
          matches: [
            '[vid="dialog_title" || id="android:id/message"][text*="瞬译"]',
            '[text="立即开始"][clickable=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/24421941',
          activityIds: '.media.MediaProjectionPermissionActivity',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-🔌插USB后用于xxx-返回键',
      desc: '(真我📱)按下[返回键]',
      enable: false,
      rules: [
        {
          action: 'back',
          matches: '[text="USB 用于"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23823175',
            'https://i.gkd.li/i/23574876',
            'https://i.gkd.li/i/25253449', //无界面id
          ],
          exampleUrls: 'https://e.gkd.li/656c282c-b047-4e71-8f6d-17ee7c36d9d7',
        },
      ],
    },
  ],
});
