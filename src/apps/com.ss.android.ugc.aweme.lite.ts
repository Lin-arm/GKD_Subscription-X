import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    {
      key: 1,
      name: '更新提示-以后再说',
      desc: '不更新',
      rules: [
        {
          fastQuery: true,
          matches: '[text="立即升级"] + * > [text="以后再说"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24126015',
          activityIds: [
            'com.ss.android.ugc.aweme.detail.ui.DetailActivity',
            'com.ss.android.ugc.aweme.main.MainActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '青少年弹窗',
      desc: '关闭',
      rules: [
        {
          fastQuery: true,
          matches: '@[text="关闭"][clickable=true] < * -n [text="青少年模式"]',
          snapshotUrls: 'https://i.gkd.li/i/23427881',
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
        },
      ],
    },
    {
      key: 103,
      name: '视频页-分享-复制链接-x掉',
      desc: '已复制-x掉',
      rules: [
        {
          matches: '@ImageView[clickable=true] - [text^="链接已复制"]',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22944102', // v31.5.0
            'https://i.gkd.li/i/25076821', // v37.7.0
          ],
          exampleUrls: 'https://e.gkd.li/4466ef1e-e38f-4d1c-b548-7d0585c4d79d',
          activityIds: [
            'com.ss.android.ugc.aweme.detail.ui.DetailActivity',
            'com.ss.android.ugc.aweme.main.MainActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '🤳看广告-已看完-退出',
      desc: '已成功领取奖励',
      rules: [
        {
          fastQuery: true,
          matches:
            '[text="广告"] +(1,3) [text^="领取成功，关闭"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23394121',
            'https://i.gkd.li/i/23562150',
          ],
          exampleUrls: 'https://e.gkd.li/493ef811-814f-4ada-a11b-41249743fbd0',
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
        },
      ],
    },
    {
      key: 4,
      name: '🤳看广告-退出弹窗-再看',
      desc: '再看一个',
      rules: [
        {
          fastQuery: true,
          matches:
            '[text^="再看一个"] +(6,13) [text="领取奖励"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23394181',
            'https://i.gkd.li/i/23562162',
          ],
          exampleUrls: 'https://e.gkd.li/32505f12-f430-49dc-b711-fed907d2be35',
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
        },
      ],
    },
    {
      key: 5,
      name: '🤳看广告-误入app下载页-返回',
      desc: '点击返回',
      rules: [
        {
          fastQuery: true,
          matches: '[vid="iv_back"][desc="返回"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23394270',
          activityIds:
            'com.bytedance.ies.android.rifle.container.RifleContainerActivity',
        },
      ],
    },
    {
      key: 6,
      name: '🤳看广告-弹窗-评价收金币',
      desc: '累计获得奖励弹窗-点击评价',
      rules: [
        {
          fastQuery: true,
          matches: '[text="评价并收下金币"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23394382',
          exampleUrls: 'https://e.gkd.li/a4e9803f-9935-4fc7-8977-5b855120046c',
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
        },
      ],
    },
  ],
});
