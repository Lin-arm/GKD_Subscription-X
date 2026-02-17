import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.etao',
  name: '一淘',
  groups: [
    {
      key: 1,
      name: '首页-更新弹窗-取消',
      desc: '点击取消',
      rules: [
        {
          // versionCode: { include: 975 },
          matches: ['[text="更新提示"]', 'Button[text="取消"][clickable=true]'],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23607482',
          activityIds: '.app.homev4.HomeV4Activity',
        },
      ],
    },
    {
      key: 2,
      name: '签到-自动签到',
      desc: '点击签到',
      rules: [
        {
          matchDelay: 1000,
          actionMaximum: 1,
          resetMatch: 'app',
          matches: '[text="签到"] - View[childCount=3] > Image[index=0]',
          snapshotUrls: 'https://i.gkd.li/i/23643957',
          activityIds: ['com.taobao.sns.activity.ISWebViewActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '签到-做任务-app跳转-打开',
      desc: '打开xxx应用',
      rules: [
        {
          matches: [
            '[text^="正在离开一淘"]',
            '[text="取消"] + [text="打开"][clickable=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23239468',
          activityIds: 'com.taobao.sns.activity.ISWebViewActivity',
        },
      ],
    },
    {
      key: 4,
      name: '签到-🧧领取现金奖励',
      desc: '已做任务->点击[领取]',
      actionCd: 1500,
      activityIds: 'com.taobao.sns.activity.ISWebViewActivity',
      rules: [
        {
          key: 1,
          matches: '@[text="领取"] - View >2 [text="现金"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22974322',
        },
        {
          key: 2,
          actionMaximum: 2,
          matches:
            '@View -2 [text="恭喜你！可以领取现金啦"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23213435',
        },
      ],
    },
  ],
});
