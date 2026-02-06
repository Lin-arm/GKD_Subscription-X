import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.wework',
  name: '企业微信',
  groups: [
    {
      // 节点id疑似随机生成,尽量不用id属性
      key: 1,
      name: '功能类-自动领红包🧧',
      desc: '自己发的红包不领',
      rules: [
        {
          key: 0,
          name: '点击别人发的红包',
          fastQuery: true,
          activityIds: [
            '.msg.controller.ExternalContactMessageListActivity',
            '.msg.controller.MessageListActivity',
          ],
          matches:
            'RelativeLayout[childCount=2] > ImageView[childCount=0] + RelativeLayout >2 @RelativeLayout[clickable=true][childCount=4] > LinearLayout[index=1][getChild(0).childCount=1] + RelativeLayout[childCount=1] > TextView[text="红包"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14151095',
            'https://i.gkd.li/i/24560890',
            'https://i.gkd.li/i/24577241',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/14151131', // 已领取的红包、自己的红包
        },
        {
          preKeys: [0],
          key: 1,
          name: '开红包',
          activityIds:
            '.enterprise.redenvelopes.controller.RedEnvelopeCollectorActivity',
          matches:
            'RelativeLayout[childCount=3] > FrameLayout + RelativeLayout[childCount=3] + ImageView[clickable=true][childCount=0][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24560289',
            'https://i.gkd.li/i/24588743',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          name: '从金额页面返回到聊天页面',
          fastQuery: true,
          action: 'back',
          activityIds:
            '.enterprise.redenvelopes.controller.RedEnvelopeDetailActivity',
          matches: '[text="已存入绑定的微信零钱账户"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14151120',
        },
      ],
    },
  ],
});
