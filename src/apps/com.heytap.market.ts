import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.market',
  name: 'OPPO软件商店',
  groups: [
    {
      key: 1,
      name: '其它-被禁止联网后加载失败(ks专用)',
      desc: '按[返回键] (快手/快手极速版做任务专用)',
      enable: false,
      rules: [
        {
          fastQuery: true,
          action: 'back',
          matchDelay: 3500,
          activityIds:
            'com.heytap.cdo.client.detail.ui.ProductDetailWindowActivity',
          matches: '[vid="error_msg"][text*="数据加载失败"]',
          snapshotUrls: 'https://i.gkd.li/i/27482019',
        },
      ],
    },
  ],
});
