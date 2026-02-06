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
    {
      key: 28,
      name: '功能类-自动抢口令红包🧧',
      desc: '点击 ①口令红包 ②弹窗 ③一键发口令',
      fastQuery: true,
      actionCd: 120,
      activityIds: '.fund.redpacket.RedPacketReceiveActivity',
      rules: [
        {
          key: 1,
          name: '①点进口令红包',
          activityIds: '.main.MainActivity',
          matches: '@ImageView + [text="抖音红包「口令」"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25121991',
        },
        {
          key: 2,
          name: '②弹窗-点击红包',
          matches: 'ImageView < @[clickable=true] -2 [text="发口令开红包"]',
          snapshotUrls: 'https://i.gkd.li/i/25122030',
        },
        {
          key: 3,
          name: '③一键发口令',
          matches:
            '[text="发口令开红包"] + LinearLayout >2 [text="一键发送到聊天"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/25122077',
            'https://i.gkd.li/i/25122095',
          ],
        },
      ],
    },
  ],
});
