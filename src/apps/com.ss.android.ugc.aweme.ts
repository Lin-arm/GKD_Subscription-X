import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 27,
      name: '全屏广告-小程序内弹窗广告',
      desc: 'x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.minigame.merge.miniapphost.placeholder.',
          matches:
            '@ImageView < ViewGroup <2 FrameLayout[focusable=true][childCount=3] <<5 LinearLayoutCompat <<2 [vid="action_bar_root"]',
          snapshotUrls: 'https://i.gkd.li/i/24844390',
          exampleUrls: 'https://e.gkd.li/866263c3-1f19-4b8b-b008-955939ae6068',
        },
      ],
    },
  ],
});
