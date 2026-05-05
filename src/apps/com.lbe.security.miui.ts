import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lbe.security.miui',
  name: '权限管理服务',
  groups: [
    {
      key: 1,
      name: '权限提示-定位权限(ks专用)',
      desc: '点击[拒绝] (仅供 快手/快手极速版 专用)',
      enable: false,
      rules: [
        {
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches: [
            '[text*="定位" || text*="位置"]',
            '[text*="快手"]',
            '[text="拒绝"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/27382127',
        },
      ],
    },
  ],
});
