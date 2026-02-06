import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 26,
      name: '功能类-自动领取别人发的红包🧧',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches:
            'FrameLayout[getChild(0).desc$="的头像"] + ViewGroup >3 @FrameLayout > [text="抖音红包"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6c963e99-1a74-40a5-bf84-a9353c27acdb',
          snapshotUrls: 'https://i.gkd.li/i/22761277',
          excludeSnapshotUrls: 'https://i.gkd.li/i/22849224', // 自己发的不领取
        },
        {
          preKeys: [0],
          key: 1,
          fastQuery: true,
          activityIds: '.fund.redpacket.RedPacketReceiveActivity',
          matches:
            '@FrameLayout[clickable=true][width=height] -2 [text="大吉大利"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/e8b822c1-c289-4802-85a4-994093024b24',
          snapshotUrls: 'https://i.gkd.li/i/22761510',
        },
        {
          preKeys: [1],
          fastQuery: true,
          activityIds: '.fund.redpacket.RedPacketReceiveActivity',
          matches: '[vid="iv_back"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/f92c1412-8111-40bc-8188-24f2c004c55c',
          snapshotUrls: 'https://i.gkd.li/i/22761554',
        },
      ],
    },
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
