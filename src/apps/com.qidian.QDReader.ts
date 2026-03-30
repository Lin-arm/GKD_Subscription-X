import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      key: 1,
      name: '📆每日福利-看完广告-知道了',
      desc: '点击知道了',
      rules: [
        {
          matches: 'TextView[text="知道了"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22909666', //422
            'https://i.gkd.li/i/24339296', //428
          ],
          activityIds: '.ui.activity.QDBrowserActivity',
        },
      ],
    },
    {
      key: 2,
      name: '📆每日福利-自动看广告',
      desc: '点击去完成(❗配合QD模块用)',
      enable: false,
      rules: [
        {
          actionCd: 1700, // 配合QD模块,免看广告领奖励 使用
          // excludeMatches: '[text*="验证"][focusable=true][visibleToUser=true]', // 排除验证弹窗(遇则停)
          // matches: '[id="video"] >(1,2) [text="去完成"][visibleToUser=true]',
          matches:
            'WebView[!(getChild(childCount.minus(1)).id*="tcaptcha" || getChild(childCount.minus(2)).id*="tcaptcha")] >2 [id="video"] >(1,2) [text="去完成"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23290942', // 422
            'https://i.gkd.li/i/23565148', // 422
            'https://i.gkd.li/i/23561866', // 420
            'https://i.gkd.li/i/23561912', // 428
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23562885',
            'https://i.gkd.li/i/23610102', // 422 验证弹窗
            'https://i.gkd.li/i/26336514', // 428 验证弹窗 (个别手机出了验证弹窗还继续点击[去完成])
          ],
          activityIds: '.ui.activity.QDBrowserActivity',
        },
      ],
    },
    {
      key: 3,
      name: '📆每日福利-自动抽奖',
      desc: '点击 抽奖(❗配合QD模块用)(起点422)',
      enable: false,
      activityIds: '.ui.activity.QDBrowserActivity',
      rules: [
        {
          key: 1,
          name: '①去抽奖',
          actionMaximum: 1,
          resetMatch: 'match',
          matches:
            '[text^="抽奖机会" || text="做任务可抽奖"][text!$="×0"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24421774', //422
            'https://i.gkd.li/i/24426825', //422 签到详情页
            // 'https://i.gkd.li/i/23561866', //420
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/24426902', //抽奖机会 ×0
        },
        {
          key: 2,
          name: '②弹窗-抽奖',
          actionCd: 1500,
          matches:
            '[text="福利中心" || text="签到详情"] >n [text="抽奖" || text$="抽奖机会+1"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24369418', //做任务抽奖机会+1
            'https://i.gkd.li/i/24426793', //抽奖
          ],
        },
        {
          key: 3,
          name: '③抽完奖-x掉',
          matches:
            '[text^="明"][text$="再来"] +3 [clickable=true][childCount=1][index=parent.childCount.minus(1)]',
          snapshotUrls: [
            'https://i.gkd.li/i/24369440', //明天再来
            'https://i.gkd.li/i/26273751', //明日再来
          ],
        },
      ],
    },
    {
      key: 301,
      name: '📆每日福利-周日碎片兑换',
      desc: '自动兑换20点章节卡 (起点422)',
      enable: false,
      activityIds: '.ui.activity.QDBrowserActivity',
      rules: [
        {
          key: 1,
          actionMaximum: 1,
          name: '①弹窗-30张碎片兑换',
          matches: '[text="30张碎片兑换"] + [text="兑换"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24421862', //422
          ],
        },
        {
          key: 2,
          preKeys: [1],
          name: '②弹窗-确认兑换',
          matches: '[text="取消"] + [text="兑换"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24421890',
        },
        {
          key: 3,
          preKeys: [1, 2],
          name: '③兑换完-x掉',
          matches: [
            '[text="15张碎片兑换"] + [text="碎片不足"]',
            '[text="兑换章节卡"] - [text=""][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24421899',
        },
      ],
    },
    {
      key: 4,
      name: '📆每日福利-阅读得积分-领取',
      desc: '点击领积分(❗遮挡可开shizuku强制点击)',
      order: 2,
      activityIds: '.ui.activity.QDBrowserActivity',
      rules: [
        {
          key: 1,
          action: 'clickNode', //配合shizuku,挡住也能点击
          matches: '[id="read"] >(1,2) [text="领积分"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24100818',
        },
        {
          key: 2,
          matches: '[id="read"] >(1,2) [text="领积分"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 501,
      name: '🧧发现-自动进红包广场',
      desc: '点击 红包广场(❗用前请到开发者选项关闭那3个动画)',
      enable: false,
      rules: [
        {
          actionCd: 200,
          matches:
            '@[clickable=true][childCount>1] > [text="红包广场"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/24399266', //起点422
          excludeSnapshotUrls: 'https://i.gkd.li/i/24993575', // 书架页-弹窗 [childCount>1]
          exampleUrls: 'https://e.gkd.li/885c5353-7a7f-4fd7-beb6-69203de19522',
          activityIds: '.ui.activity.MainGroupActivity',
        },
      ],
    },
    {
      key: 5,
      name: '🧧发现-红包广场-抢月包',
      desc: '点击 抢(章节卡不抢)', // 若是手动从红包广场进来, activity没变, 此规则可能不触发. 需手动下拉刷新, 或通过gkd自动进红包广场.
      enable: false,
      order: -2,
      actionCd: 300,
      actionMaximum: 3,
      actionMaximumKey: 1, //所有子rule合起来最多点击3次
      activityIds: [
        '.ui.activity.MainGroupActivity',
        '.flutter.HongBaoSquareActivity',
      ],
      rules: [
        {
          key: 1,
          name: '①抢点币过10万的',
          matches:
            'ImageView[desc$="万\\n点\\n抢"][desc.length>6][clickable=true]',
        },
        {
          key: 2,
          name: '②抢万点币的',
          matches: 'ImageView[desc$="万\\n点\\n抢"][clickable=true]',
          // 不要用 [visibleToUser=true] ,每月1号中午12点、3号下午3点 发的包很多, 大包可能被顶下去
          snapshotUrls: 'https://i.gkd.li/i/23291716', //起点422
        },
        {
          key: 3,
          name: '③抢点币的',
          matches: 'ImageView[desc$="点\\n抢"][clickable=true]',
        },
      ],
    },
    {
      key: 6,
      name: '🐞发现-红包广场-抢月包(测试)',
      desc: '点击 已抢完 (测试用,真抢时请关闭)',
      enable: false,
      rules: [
        {
          actionCd: 300,
          actionMaximum: 3,
          matches: 'ImageView[desc$="点\\n已抢完"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24323139',
          exampleUrls: 'https://e.gkd.li/4b8f7243-aff9-42d3-bfdf-772c1088e7c2',
          activityIds: [
            '.ui.activity.MainGroupActivity',
            '.flutter.HongBaoSquareActivity',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '🧧抢月包-弹窗-投月票',
      desc: '弹窗-点击 开',
      enable: false,
      rules: [
        {
          order: -2,
          actionCd: 100,
          actionDelay: 120, //加个延时,点太快了可能不妥
          excludeMatches: '[text*="验证"][focusable=true][visibleToUser=true]', // 排除验证弹窗
          matches:
            '@[clickable=true] > [vid="getHongbaoTv"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23299140',
          exampleUrls: 'https://e.gkd.li/fe7ebb16-94e5-436d-8998-ed76a7cbd65e',
          // excludeSnapshotUrls: [
          //   'https://i.gkd.li/i/23562885',
          //   'https://i.gkd.li/i/23610102', // 422 验证弹窗
          // ],
          activityIds: [
            '.ui.activity.MainGroupActivity',
            '.flutter.HongBaoSquareActivity',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '🧧抢月包-已抢完弹窗-x掉',
      desc: '弹窗-已抢完-x掉',
      enable: false,
      rules: [
        {
          order: -2,
          actionCd: 100,
          matches: [
            '[text="已抢完"]',
            '[vid="btnHongbaoClose"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23291755',
          exampleUrls: 'https://e.gkd.li/2ed31c5e-f498-4903-a781-58a1e885de69',
          activityIds: [
            '.ui.activity.MainGroupActivity',
            '.flutter.HongBaoSquareActivity',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '📖阅读页-任务弹窗-放弃',
      desc: '退出阅读时弹窗-不领任务',
      rules: [
        {
          matches: '[vid="btnLeave"][text="急迫离开"][clickable=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/24338232', //阅读满30秒,领取2点章节卡
          activityIds: '.ui.activity.QDReaderActivity',
        },
      ],
    },
    {
      key: 10,
      name: '📚书架-开更新提醒-x掉',
      desc: '小横幅广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.MainGroupActivity',
          matches: 'ImageView < [vid="ivUpdateNoticeClose"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24913610',
        },
      ],
    },
    {
      key: 11,
      name: '🎁投月票后开宝箱-确认',
      desc: '弹窗-确认',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.QDBrowserActivity',
          matches:
            '@Button[text="确认"][clickable=true] <3 View < View <2 View <4 WebView[text="月票"] <<3 [vid="webViewContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/24993649',
          exampleUrls: 'https://e.gkd.li/a2c614a5-94ee-4cc6-a18a-9c913fb57562',
        },
      ],
    },
    {
      key: 16,
      name: '功能类-订阅至最新章后自动[返回]',
      desc: '返回小说正文页 (对于自定义订阅不可用)',
      fastQuery: true,
      activityIds: '.ui.activity.QDDirectoryActivity',
      rules: [
        {
          key: 1,
          name: '①未订最新章-待后续',
          action: 'none',
          actionMaximum: 1, //不点击,防止触发记录过多
          matches: '[text^="订阅后续付费章"]',
          snapshotUrls: 'https://i.gkd.li/i/26221300',
        },
        {
          key: 2,
          preKeys: [1],
          name: '②已订最新章-返回键',
          action: 'back',
          matches: '[text="已订阅至最新章节"]',
          snapshotUrls: 'https://i.gkd.li/i/26220488',
          exampleUrls: 'https://e.gkd.li/40df3df2-a5a5-4044-bf82-8622396bf39a',
        },
        {
          key: 3,
          preKeys: [2],
          name: '③退出目录',
          matches:
            '@[vid="btnBack"][clickable=true] + * >6 [vid="layoutTitle"][text="目录"]',
          snapshotUrls: 'https://i.gkd.li/i/26221238',
        },
      ],
    },
  ],
});
