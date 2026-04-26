import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    {
      key: 103,
      name: '功能类-复制分享链接后[返回]',
      desc: '已复制-点击[x]掉',
      rules: [
        {
          name: '①点击[x]掉',
          fastQuery: true,
          forcedTime: 3600000, // 1小时内主动查询，避免睡死
          matches: '@ImageView[clickable=true] - [text^="链接已复制"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22944102',
            'https://i.gkd.li/i/25076821',
            'https://i.gkd.li/i/27101825',
          ],
          exampleUrls: 'https://e.gkd.li/4466ef1e-e38f-4d1c-b548-7d0585c4d79d',
          activityIds: [
            'com.ss.android.ugc.aweme.detail.ui.DetailActivity',
            'com.ss.android.ugc.aweme.main.MainActivity',
            'com.ss.android.ugc.aweme.detail.ultra.ui.UltraDetailActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '🤳看广告-已看完-退出',
      desc: '已成功领取奖励',
      activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matches:
            '[text="广告"] +(1,3) [text^="领取成功，关闭"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23394121',
            'https://i.gkd.li/i/23562150',
          ],
          exampleUrls: 'https://e.gkd.li/493ef811-814f-4ada-a11b-41249743fbd0',
        },
        {
          key: 2,
          matches: 'ImageView < [desc^="领取成功，关闭"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25285401',
        },
      ],
    },
    {
      key: 4,
      name: '🤳看广告-退出弹窗-再看',
      desc: '再看一个 (v37.7.0失效)',
      rules: [
        {
          fastQuery: true,
          matches:
            '[text^="再看一个"] +(6,13) [text="领取奖励"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23394181',
            'https://i.gkd.li/i/23562162', // v31.5.0
            // 'https://i.gkd.li/i/25285457',   // v37.7.0 无直接节点,失效
          ],
          exampleUrls: 'https://e.gkd.li/32505f12-f430-49dc-b711-fed907d2be35',
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
        },
      ],
    },
    {
      key: 5,
      name: '🤳看广告-误入app下载页-返回',
      desc: '点击左上角返回',
      rules: [
        {
          fastQuery: true,
          matches: '[vid="iv_back"][desc="返回"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23394270',
            'https://i.gkd.li/i/25285191',
          ],
          exampleUrls: 'https://e.gkd.li/69f32350-a10d-4b2a-a336-68312401c605',
          activityIds: [
            'com.bytedance.ies.android.rifle.container.RifleContainerActivity',
            'com.bytedance.android.sif.container.SifContainerActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '🤳看广告-弹窗-评价收金币',
      desc: '累计获得奖励弹窗-点击评价 (v37.7.0失效)',
      rules: [
        {
          fastQuery: true,
          matches: '[text="评价并收下金币"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23394382',
            // 'https://i.gkd.li/i/25285568', // v37.7.0 无直接节点,失效
          ],
          exampleUrls: 'https://e.gkd.li/a4e9803f-9935-4fc7-8977-5b855120046c',
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
        },
      ],
    },
    {
      key: 7,
      name: '其它-提示无HMS-确定',
      desc: '(华为📱)卸载HMS Core,进抖音会提示',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.huawei.hms.activity.BridgeActivity',
          matches: ['[text*="HMS Core"]', '[text="OK"][clickable=true]'],
          exampleUrls: 'https://e.gkd.li/e42e3f30-1b91-40fc-b2f1-c8425fa215f1',
          snapshotUrls: 'https://i.gkd.li/i/25325208',
        },
      ],
    },
  ],
});
