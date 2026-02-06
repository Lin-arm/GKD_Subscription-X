import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 27,
      name: '功能类-自动领取群聊红包🧧',
      desc: '自己发的红包、专属红包、口令红包、私聊红包不领',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.activity.SplashActivity',
          matches:
            'ImageView[childCount=0] <<(1,2) RelativeLayout < FrameLayout +2 LinearLayout >3 @ViewGroup[clickable=true][!(getChild(childCount.minus(1)).text^="已")] + TextView[text="拼手气红包"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7a933a7f-dc5a-4eb7-8a6f-fe3cc4e8fb5e',
          snapshotUrls: [
            'https://i.gkd.li/i/14221309',
            'https://i.gkd.li/i/18574530',
            'https://i.gkd.li/i/18725007',
            'https://i.gkd.li/i/24551887',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          fastQuery: true,
          activityIds: [
            'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
            'com.tencent.biz.TenpayActivity',
          ],
          anyMatches: [
            '@[desc="关闭"][clickable=true] < RelativeLayout -2 ViewGroup >4 [text^="来晚一步"][visibleToUser=true]',
            '[desc="拆红包"][visibleToUser=true]',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/61006833-9806-45b2-b3a1-55b9b248958f',
          snapshotUrls: [
            'https://i.gkd.li/i/14221242',
            'https://i.gkd.li/i/18724880',
            'https://i.gkd.li/i/24551748',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          fastQuery: true,
          activityIds: [
            'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
            'com.tencent.biz.TenpayActivity',
          ],
          matches: '@[desc="返回"] +n [text="红包记录"]',
          exampleUrls:
            'https://m.gkd.li/57941037/b90e6a69-ac57-41a5-bd2c-c500b92a58ba',
          snapshotUrls: [
            'https://i.gkd.li/i/14221279',
            'https://i.gkd.li/i/24551886',
          ],
        },
      ],
    },
  ],
});
