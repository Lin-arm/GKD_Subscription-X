import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 17,
      name: '功能类-确认收货成功-返回',
      desc: '点击左上角 返回',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.jd.lib.ordercenter.confirmreceive.ConfirmReceiveActivity',
          matches: '@[desc="返回"][clickable=true] + * > [text="确认收货成功"]',
          snapshotUrls: 'https://i.gkd.li/i/25181413',
        },
      ],
    },
  ],
});
