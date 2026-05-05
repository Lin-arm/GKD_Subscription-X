import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oplus.exsystemservice',
  name: '系统服务',
  groups: [
    {
      key: 1,
      name: '其他-允许GKD运行在系统界面上',
      desc: '①不勾选反馈 ②点击[允许]',
      fastQuery: true,
      activityIds: 'com.android.launcher.Launcher',
      rules: [
        {
          key: 0,
          name: '①不勾选反馈',
          matches: '[text="反馈此问题"][checked=true]',
          snapshotUrls: 'https://i.gkd.li/i/27401422', // 未取消勾选
        },
        {
          key: 1,
          name: '②点击[允许]',
          matches: ['[text*="GKD"][text*="系统界面"]', '[text="允许"]'],
          snapshotUrls: 'https://i.gkd.li/i/27401643', // 已取消勾选 [checked=false]
        },
      ],
    },
  ],
});
