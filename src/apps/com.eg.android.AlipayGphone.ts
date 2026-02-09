import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 0,
      name: '📢说明',
      desc: '(点击查看详情) 🔵目前在用的支付宝版本有两个: 🔸v10.7.76.8100 🔸v10.7.16.8000 ,如果你用其他版本的支付宝,估计有些规则不生效,如遇失效或误触请截取快照拿到github反馈. 🔵另外,这些规则大都是在模块(芝麻糊、芝麻粒-tk等)不做这些任务的时候,用gkd来减少手动操作的,如果模块能做的任务,请关掉这些任务对应的gkd规则,开多了会费电. ',
      enable: false,
      rules: [
        {
          // snapshotUrls: [     //临时存放一些快照
          //   'https://i.gkd.li/i/24279063', //zfb滑块拼图验证
          //   'https://i.gkd.li/i/24279064', //zfb滑块拼图验证2(淘宝)
          // ],
        },
      ],
    },
    {
      key: 1,
      name: '🌲🐤小组件弹窗-x掉',
      desc: '恭喜获得小组件优先体验权',
      rules: [
        {
          fastQuery: true,
          matches: [
            // '[text="恭喜获得小组件优先体验权"] - * > Image[visibleToUser=true]',
            '[text="恭喜获得小组件优先体验权"] - @View[getChild(0).name$="Image"] <<5 WebView <2 FrameLayout <<2 [id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/22923315',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 2,
      name: '🌲🐤弹窗-确认兑换',
      desc: '①活力值 ②乐园币 ③🐤抽抽乐2',
      enable: false,
      rules: [
        {
          matches:
            '[text="暂不兑换"] + Button[text="确认兑换"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24100272', //森林活力值兑换物品
            'https://i.gkd.li/i/24100284', //小鸡乐园币兑换物品
            'https://i.gkd.li/i/24100291', //小鸡抽抽乐2兑换物品
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23013746', //森林寻宝活力值兑换抽奖机会
            'https://i.gkd.li/i/23238643', //小鸡抽抽乐90g饲料换机会
            'https://i.gkd.li/i/24100558', //会员积分
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 202,
      name: '🌲🐤-抽抽乐-弹窗-确认兑换',
      desc: '①活力值 ②饲料 兑换抽奖机会',
      matchRoot: true,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①用活力值兑换',
          matches:
            '[text$="兑1次抽奖机会"] < * + * > [text="确认兑换"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23013746',
        },
        {
          key: 2,
          name: '②用饲料兑换',
          matches:
            '[text^="消耗90g饲料"] + * > [text="确认兑换"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23238643',
        },
      ],
    },
    {
      key: 3,
      name: '🌲🐤逛街-已完成-返回键',
      desc: '已完成逛15s街任务->按下返回键',
      rules: [
        {
          action: 'back',
          matchRoot: true,
          matchDelay: 300,
          actionCd: 5000,
          matches: [
            '[text="森林市集" || text="一起逛街咯"] + * > [text="已完成 可领奖励"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23238379',
            'https://i.gkd.li/i/23238829',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 4,
      name: '🐤养鸡-收麦子弹窗-x掉',
      desc: '好友来串门种了xx g麦子',
      rules: [
        {
          matches:
            '@TextView[text=""] - [text^="七天内不收取"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22923502',
          exampleUrls: 'https://e.gkd.li/bd62215c-15a4-47e3-8907-3421344e4ee5',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 5,
      name: '🐤养鸡-好友-种麦子-确认',
      desc: '去好友家种麦子-自动确认',
      rules: [
        {
          actionCd: 200,
          matches:
            '@[text="确认"][clickable=true] -4 [text="为好友小鸡种一块麦田"]',
          snapshotUrls: 'https://i.gkd.li/i/22973904',
          exampleUrls: 'https://e.gkd.li/b094f34c-bff0-4a6c-97b9-56194041e52a',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 6,
      name: '🐤养鸡-乐园🎈-开宝箱',
      desc: '乐园弹窗->点击 ①开宝箱 ②x掉',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①开宝箱',
          actionCd: 3000,
          matches:
            '@Button[text^="立即开宝箱" || text="开心收下"][clickable=true] -(2,3) [text="恭喜获得奖励"] <<2 View[index=parent.childCount.minus(1)] <n View < WebView[text="蚂蚁庄园"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22983795',
            'https://i.gkd.li/i/22984046',
            'https://i.gkd.li/i/25063088', //开心收下
          ],
          exampleUrls: 'https://e.gkd.li/2aba7cd2-b61d-4bb7-bf23-a912fce34fdc',
        },
        {
          key: 2,
          name: '②立即兑换奖励-x掉',
          preKeys: [1],
          matches: '[text="立即兑换奖励"] + [text=""][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22983810',
        },
      ],
    },
    {
      key: 7,
      name: '🐤养鸡-做美食-食材店-领取',
      desc: '爱心食材店 ①领10g食材 ②返回键',
      rules: [
        {
          key: 1,
          name: '①领10g食材',
          matches: '[text="领10g食材"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23450712',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
        {
          key: 2,
          name: '②已领取-返回键',
          action: 'back',
          matches:
            '[text="领取每日限量食材"] + [text="已领取"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23450722',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },

    {
      key: 9,
      name: '🐤养鸡-抽抽乐🎰-抽中弹窗-知道啦',
      desc: '弹窗恭喜抽中->点击 知道啦',
      rules: [
        {
          matches:
            'Dialog >3 [text="知道啦"][index=parent.childCount.minus(2)][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22974073',
          exampleUrls: 'https://e.gkd.li/3c78adf1-c7f6-4f38-87bd-8c9cfed6fe65',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 11,
      name: '🐤养鸡-家庭👪-弹窗-确认',
      desc: '①早安 ③顶梁柱or请客 ④喂食 ⑤睡觉 ⑥家具上新',
      enable: false,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①道早安',
          matches: '[text="亲密度+1"] + [text="确认发送"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22938526',
        },
        {
          key: 2,
          preKeys: [1],
          name: '②早安传话-x掉',
          matches:
            '@TextView[width<110] -2 * > [text$="传话内容"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22938583',
        },
        {
          key: 3,
          name: '③顶梁柱or请客',
          matches:
            '@[getChild(0).text="确认"] +2 [index=parent.childCount.minus(2)][text^="提醒Ta"] -n [text$="小鸡去干活" || text$="请客吃饭"] <<3 View <3 View < WebView <<4 [id$="h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22961775',
            'https://i.gkd.li/i/23762991',
          ],
        },
        {
          key: 4,
          name: '④喂食',
          matches:
            '@Button[text^="确认"][clickable=true] -4 [text="的小鸡喂食"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23762732',
            'https://i.gkd.li/i/23978998',
          ],
        },
        {
          key: 5,
          name: '⑤去睡觉',
          // position: {    // 睡觉,点不了,用相对坐标
          //   left: 'width * 0.5019',
          //   top: 'width * 1.2630',
          // },
          // matches: '[text^="亲密度+"] + [text="去睡觉"][visibleToUser=true]',
          matches:
            '[text="去睡觉"] <n @[clickable=true] -n [text="让小鸡睡觉"]',
          snapshotUrls: 'https://i.gkd.li/i/23762886',
        },
        {
          key: 6,
          name: '⑥家具上新啦-x掉',
          fastQuery: true,
          matches:
            '@Button[text="关闭"][clickable=true] -n * <<3 [index=parent.childCount.minus(2)] -n * <<3 WebView <<3 [id="com.alipay.mobile.nebula:id/h5_pc_container" || id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24821875',
            'https://i.gkd.li/i/24963478',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '🐤养鸡-家庭👪-去捐步',
      desc: '①去捐步 ②立即捐步 ③知道了(返回键) ④x掉',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①去捐步',
          actionMaximum: 1, // 易误触key4
          resetMatch: 'match',
          actionDelay: 300,
          excludeMatches: '[text="今日已完成捐步"]',
          matches:
            'View[index=parent.childCount.minus(1)] > [text="去捐步数"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22939273',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23381801',
        },
        {
          key: 2,
          name: '②立即捐步',
          // actionCd: 3000,  //有时候不生效
          actionMaximum: 1, //易重复点击 key2
          resetMatch: 'match',
          matches:
            '[text^="今日可兑换公益金还剩"] - Button[text="立即捐步"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22931136',
        },
        {
          key: 3,
          preKeys: [2],
          name: '③(弹窗)知道了-返回键',
          action: 'back',
          actionDelay: 500,
          matches: '[text="行走捐" || text="支付宝公益"][id$="textView_title"]',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22931262',
            'https://i.gkd.li/i/23978873', // key2 双击了才会进的页面
          ],
        },
        {
          key: 4,
          name: '④x掉',
          preKeys: [2, 3],
          matchDelay: 700,
          matches:
            '[text="一起运动做公益"] +2 [text="关闭"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23381801',
            'https://i.gkd.li/i/23414325',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '🐤养鸡-领饲料-已满-知道了',
      desc: '饲料袋已满 弹窗->点击知道了',
      rules: [
        {
          matches:
            '@[text="知道了" || text="确认"][clickable=true] -(1,2,3) [text="饲料袋已满" || getChild(0).text="饲料袋已满"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23238168',
            'https://i.gkd.li/i/23414417',
            'https://i.gkd.li/i/23567547',
          ],
          exampleUrls: 'https://e.gkd.li/3f69adda-7804-41a9-8a70-099e2c7acbd6',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 14,
      name: '🌲森林-寻宝🎁-帮ta助力',
      desc: '弹窗-①帮ta助力 ②x掉',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '帮ta助力',
          matchRoot: true,
          matches:
            '[text^="好友"] +2 TextView[text="帮ta助力"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22941634',
        },
        {
          key: 2,
          name: '助力成功-x掉',
          matches:
            '[text="送你1次抽奖机会"] - [text="助力成功"] - * < * + TextView[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22938650',
        },
      ],
    },
    {
      key: 15,
      name: '🌲森林-寻宝🎁-已完成任务-自动领取',
      desc: '①签到 ②领取',
      rules: [
        {
          actionCd: 1500,
          matches:
            '[text="抽奖明细"][index=0] +n * >2 Button[text="领取" || text="签到"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23013576', //签到
            'https://i.gkd.li/i/22950418',
            'https://i.gkd.li/i/23548619',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 18,
      name: '🌲森林-寻宝🎁-自动抽奖',
      desc: '寻宝->点击立即抽奖',
      enable: false,
      rules: [
        {
          actionCd: 1200,
          matches:
            '[text="次机会"] - [text!="0"] - [text="还有"] - [text=""][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22983825',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 19,
      name: '🌲森林-寻宝🎁抽奖弹窗-再抽or知道了',
      desc: '抽奖->弹窗->点击 再抽or知道了',
      rules: [
        {
          excludeMatches: 'WebView[text="光盘打卡" || text="蚂蚁庄园"]',
          matches: [
            '[text^="感谢你拯救了过期" || text^="恭喜获得"] +(2,3) View > TextView[text=""][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/22981776',
            'https://i.gkd.li/i/22981779',
            'https://i.gkd.li/i/22981791',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23064639', // 排除 text^="感谢你"
            'https://i.gkd.li/i/22983810', // 与 养鸡-乐园-开宝箱 key2 等效了
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 21,
      name: '🌲森林-真爱树-攒能量',
      desc: '真爱树弹窗->点击攒能量(仅1次)',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          fastQuery: true,
          matches:
            '[text="攒能量不影响排行榜"] -2 @[text="攒能量"][clickable=true] -n TextView <<(4,5) [index=parent.childCount.minus(1)] -n View <<2 WebView <<4 [id="com.alipay.mobile.nebula:id/h5_pc_container" || id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22988030',
            'https://i.gkd.li/i/23393231',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 22,
      name: '🌲森林-好友页-浇水弹窗-送给ta',
      desc: '自动确认浇水(⚠️开启前请先设好浇多少g)',
      enable: false,
      rules: [
        {
          actionCd: 50,
          matches: 'Button[text="浇水送祝福"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22973598',
            'https://i.gkd.li/i/24337752',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 23,
      name: '🌲森林-集市-完成任务-领取',
      desc: '天猫集市任务-领15g能量(❗需开shizuku强制点击)',
      enable: false,
      rules: [
        {
          action: 'clickNode',
          fastQuery: true,
          matches:
            '[text="可领取"] - @[getChild(0).name$="Image"][getChild(1).text="15g"] <3 View <<2 View <2 View < View <2 View <<3 WebView <2 [index=parent.childCount.minus(1)] <n [id="com.alipay.mobile.nebula:id/h5_pc_container" || id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          snapshotUrls: ['https://i.gkd.li/i/23413420'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 24,
      name: '🌲森林-集市-弹窗-x掉',
      desc: '①首购红包 ②膨胀红包 ③专享补贴,添加首页 ④天猫年货节',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①首购红包-x掉',
          matches: [
            '[text="天猫森林集市"]',
            '[text="点击领取"] <7 * + TextView[text=""][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23394640',
        },
        {
          key: 2,
          name: '②膨胀红包-x掉',
          matches: [
            '[text="天猫森林集市"]',
            '[text="立即膨胀"] + * > Image[text=""][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23394780',
        },
        {
          key: 3,
          name: '③专享补贴or添加首页-放弃',
          matches: [
            '[text$="可用" || text="后失效" || text="限时领取" || text="限今日"] +(1,2) TextView[text$="放弃"][index=parent.childCount.minus(2)]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/24157391', //专享补贴
            'https://i.gkd.li/i/24278961', //添加小程序到首页 (若用快速查询则真机不生效)
            'https://i.gkd.li/i/24913115', //添加小程序到首页2
            'https://i.gkd.li/i/25063019', //天猫小程序入群福利
          ],
        },
        {
          key: 4,
          name: '④天猫年货节-x掉',
          matches: [
            '[text="天猫森林集市"]',
            '@TextView[top>1500][width>100 && width<116] - * > [index=parent.childCount.minus(1)][text="点击领取"]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/24544970',
        },
        {
          key: 5,
          name: '⑤天猫小程序-x掉',
          fastQuery: true,
          matches:
            '@TextView[text=""][visibleToUser=true] - View[getChild(0).getChild(0).name$="Image"] <<(4,5) WebView <2 [index=parent.childCount.minus(1)] <n [id="com.alipay.mobile.nebula:id/h5_pc_container" || id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24728626',
            'https://i.gkd.li/i/24728870',
          ],
        },
      ],
    },
    {
      key: 2401,
      name: '🌲森林-弹窗-x掉',
      desc: '①能量攻略 ②新抽抽乐 ③活力值助力 ④种第1棵树 ⑤证书 ⑥真爱奖励',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①能量攻略or新抽抽乐-x掉',
          matches:
            '@TextView[index=parent.childCount.minus(1)][text=""][index>1] -n * <<(4,5) View[index=parent.childCount.minus(1)] <n WebView[text="蚂蚁森林"] <<4 [id$="h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24739341', //2026能量攻略 (快速查询真机不生效)
            'https://i.gkd.li/i/24742469', //新抽抽乐
            // 'https://i.gkd.li/i/24813156', //活力值助力来晚啦 误触 [index>1]
          ],
        },
        {
          key: 3,
          name: '③助力成功or种第1棵树-x掉',
          matches:
            '@Button[text="关闭弹窗"][clickable=true] -n [text="助力成功！" || text="来晚啦" || text*="第一棵"] <<(3,4) View[index=parent.childCount.minus(1)] <n WebView[text="蚂蚁森林"] <<4 [id$="h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24742272', //活力值助力成功
            'https://i.gkd.li/i/24813156', //活力值助力来晚啦 (快速查询真机不生效)
            'https://i.gkd.li/i/24861484', //种下xxxx第一棵树
            'https://i.gkd.li/i/25060919', //种下2026年第一棵杨柴
          ],
        },
        {
          key: 5,
          name: '⑤证书-x掉',
          matches:
            '[text="查看证书"] < * + @Button[text^="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24989781',
        },
        {
          key: 6,
          name: '⑥真爱树奖励-x掉',
          matches:
            '@TextView[index=parent.childCount.minus(1)][text=""][index>1] -n TextView[text^="共"][text$="天"] <<5 View <4 WebView <<4 [id$="h5_pc_container"]',
          snapshotUrls: 'https://i.gkd.li/i/24989885',
        },
        {
          key: 7,
          name: '⑦组队种树弹窗-x掉',
          matches:
            '@Button[text^="关闭"][clickable=true] <2 View <<3 View <4 View < WebView[text="蚂蚁森林"] <<4 [id$="h5_pc_container"]',
          snapshotUrls: 'https://i.gkd.li/i/25001437',
        },
      ],
    },
    {
      key: 25,
      name: '⛪新村-任务已完成-自动领取',
      desc: '该任务已完成->点击 去领取',
      rules: [
        {
          fastQuery: true,
          matchRoot: true,
          matches: [
            // '[text^="+"][text$="/时"] + Button[text$="领取"][clickable=true]',  //无快速查询
            '@Button[text$="领取"][clickable=true] <n [childCount>3] <n View[index=parent.childCount.minus(1)] -n View <<3 View <3 View < WebView[text="蚂蚁新村"] <<4 [id="com.alipay.mobile.nebula:id/h5_pc_container" || id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
          snapshotUrls: [
            // 'https://i.gkd.li/i/22984031',
            // 'https://i.gkd.li/i/23013871', //过期
            'https://i.gkd.li/i/24956311',
            'https://i.gkd.li/i/24956360',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 2501,
      name: '⛪新村-成功出摊-返回',
      desc: '随机摆摊成功-返回新村',
      rules: [
        {
          fastQuery: true,
          matchRoot: true,
          matches: [
            // 'Button[text="返回新村"][clickable=true][visibleToUser=true]',
            '@Button[text="返回新村"][clickable=true] < [index=parent.childCount.minus(1)] <n [childCount>9] <<(3,4) View <2 WebView[text="蚂蚁新村"] <<4 [id="com.alipay.mobile.nebula:id/h5_pc_container" || id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
            // '@Button[text="返回新村"][clickable=true] < [index=parent.childCount.minus(1)] <n [childCount>9] <<(3,4) View <2 WebView[text="蚂蚁新村"] <<4 [id$="h5_pc_container"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/24142230',
            'https://i.gkd.li/i/24957008',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 27,
      name: '🌾农场-施肥-丰收礼包-领取',
      desc: '施肥n次领肥料->待领取弹窗->点击 领取',
      rules: [
        {
          anyMatches: [
            '[text="丰收礼包待领取"] +3 [text="立即领取"][visibleToUser=true]',
            '[text="立即领肥"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23014157',
            'https://i.gkd.li/i/23440796',
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 28,
      name: '🌾农场-弹窗-x掉',
      desc: '①丰收礼包 ②恭喜获得 ③去快手 ④小游戏',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          name: '①丰收礼包or恭喜获得-x掉',
          matches: [
            '[text*="丰收礼包" || text^="恭喜获得"] +(4,5) [text="关闭"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23014209',
            'https://i.gkd.li/i/23440721',
            'https://i.gkd.li/i/23548285',
            'https://i.gkd.li/i/23979020', //还差n次领丰收礼包
            'https://i.gkd.li/i/24142169', //恭喜获得滴滴打车券
          ],
        },
        {
          key: 3,
          name: '③去快手逛逛-x掉',
          matches:
            'Image[width=866] <<2 * + Button[text="关闭"][index=parent.childCount.minus(1)][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23550292', //去快手逛逛再得肥+1200
            'https://i.gkd.li/i/23557965', //去快手逛逛再得肥+1200
          ],
        },
        {
          key: 4,
          name: '④去玩小游戏-x掉',
          matches: [
            '[text^="还差"][text$="次领肥料"]',
            'Image[width=812] + Button[text="关闭"][index=parent.childCount.minus(1)][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24203073', //去玩小游戏赚取海量肥料
        },
      ],
    },
    {
      key: 29,
      name: '🎮小游戏-申请发消息-取消',
      desc: '①保持以上选择 ②点击[取消]',
      fastQuery: true,
      activityIds: [
        'com.alipay.android.phone.messageboxstatic.extension.ProcessTransActivity',
        'com.alipay.android.phone.mbox.biz.legacy.sbs.', // 通配
      ],
      rules: [
        {
          key: 1,
          name: '①保持以上选择-✅',
          matches:
            '@CheckBox[clickable=true][checked=false] + [text$="不再询问"]',
          snapshotUrls: 'https://i.gkd.li/i/25098582', // 未选中
          excludeSnapshotUrls: 'https://i.gkd.li/i/25098563', // [checked=true] 已选中
          exampleUrls: 'https://e.gkd.li/d0e5b909-7d7d-4fcb-9368-631e50d020d6',
        },
        {
          key: 2,
          name: '②取消',
          matchDelay: 200,
          matches:
            '[text="发送一次以下消息"] +n * > Button[text="取消"][id$="negativeBtn"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22981739',
            'https://i.gkd.li/i/23238549',
          ],
        },
      ],
    },
    {
      key: 30,
      name: '🎮小游戏-弹窗',
      desc: '①限时活动弹窗or小浮窗-x掉 ③游戏更新-确定',
      fastQuery: true,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$',
      rules: [
        {
          key: 1,
          name: '①限时活动弹窗or小浮窗-x掉',
          actionCd: 500,
          matchRoot: true,
          forcedTime: 3500,
          matches:
            '@TextView[id=null][clickable=true][(width>75 && width<85 && height>75 && height<85) || (width>30 && width<40 && height>30 && height<40)] <<8 WebView <<4 FrameLayout[id=null] <(1,2) [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24094533', //大弹窗
            'https://i.gkd.li/i/24094570', //小浮窗
          ],
          excludeActivityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          excludeSnapshotUrls: 'https://i.gkd.li/i/24961422', //误触 淘宝闪购界面
        },
        {
          key: 3,
          name: '③游戏更新-确定',
          matches: [
            '[text^="游戏有新版本"]',
            'Button[text="确定"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24822192',
        },
      ],
    },
    {
      key: 31,
      name: '🙋‍♂️扫森林码加好友-辅助①',
      desc: '扫出森林主页->点击 加好友',
      enable: false,
      rules: [
        {
          key: 1,
          name: '①扫码界面',
          action: 'none', // 前置条件，防 key 2 误触
          matches:
            '[text="扫码"][id$="scan_bottom_view_text"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23393349',
          activityIds: 'com.alipay.mobile.scan.as.main.MainCaptureActivity',
        },
        {
          key: 2,
          preKeys: [1],
          name: '②用户森林主页-加好友',
          matchDelay: 1000,
          matches: [
            '[text$="的蚂蚁森林"][id$="textView_title"]',
            'Button + Button[text="" || text="加好友"][clickable=true][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23279949',
            'https://i.gkd.li/i/24278939', // pk好友
          ],
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        },
      ],
    },
    {
      key: 32,
      name: '🙋‍♂️加好友-辅助②',
      desc: '点击 ①加好友 ②x掉捎话弹窗 ③返回键',
      fastQuery: true,
      enable: false,
      activityIds: [
        'com.alipay.android.phone.xriver.bundlex.CSGAPushActivity', //A
        'com.alipay.mobile.socialcontactsdk.contact.ui.FriendVerifyNewActivity_', //B
        'com.alipay.mobile.socialcontactsdk.contact.ui.FriendVerifyNewUIActivity_', //C
      ],
      rules: [
        {
          key: 1,
          name: '①用户主页-加好友',
          actionCd: 1500,
          actionMaximum: 1,
          resetMatch: 'match',
          matches:
            '[childCount=7] > ViewGroup[index=6][index=parent.childCount.minus(1)] > View',
          snapshotUrls: 'https://i.gkd.li/i/23280044', //A
        },
        {
          key: 2,
          name: '②x掉捎话弹窗',
          actionCd: 1500,
          matches: '[text="给Ta捎句话吧"] - * > @[clickable=true] > [text=""]',
          snapshotUrls: [
            'https://i.gkd.li/i/23280089', //B
            'https://i.gkd.li/i/23280173', //A
            'https://i.gkd.li/i/25126700', //C 直接再用户森林页,点击加好友就出现的
          ],
        },
        {
          key: 3,
          preKeys: [1, 2],
          name: '③加好友后-返回键',
          action: 'back',
          actionDelay: 500,
          actionMaximum: 1,
          resetMatch: 'match',
          matches:
            '[childCount>=7] > ViewGroup[index=parent.childCount.minus(1)] > View',
          snapshotUrls: 'https://i.gkd.li/i/23280202', //A 含免验证直接通过的
        },
        {
          key: 4,
          name: '④误进发红包页-返回键',
          action: 'back',
          matches: '[text="发红包"][id$="title_bar_title"]',
          snapshotUrls: 'https://i.gkd.li/i/24288073',
          activityIds:
            'com.alipay.android.phone.discovery.envelope.cube.UnifyFormCubeActivity',
        },
      ],
    },
    {
      key: 33,
      name: '首页-弹窗-x掉',
      desc: '同步名下其他账号银行卡',
      rules: [
        {
          // matchRoot: true,
          matches:
            '@View[width>100 && width<114][height>100 && height<114][left>450][top>1400]',
          // '@View[width>100 && width<114][height>100 && height<114][left>450][top>1400] < ViewGroup[index=parent.childCount.minus(1)] <2 ViewGroup <<5 [id="android:id/content"]',
          // fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/24447913',
          exampleUrls: 'https://e.gkd.li/87040b65-05e5-4ecc-8109-9a8a158af9b3',
          activityIds: '.AlipayLogin',
        },
      ],
    },
    {
      key: 34,
      name: '弹窗-当前应用要打开zfb',
      desc: '点击 打开',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alipay.mobile.quinox.SchemeLauncherActivity',
          matches:
            '[text="当前应用要打开“支付宝”"] <<2 * + * >2 [text="打开"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24835900',
        },
      ],
    },
    {
      key: 35,
      name: '🥰消息-私聊-点进送福卡消息-收下', //临时用,过年后删
      desc: '①点击[开心收下] ②返回键',
      actionCd: 300,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 1,
          matches:
            '@Button[text="开心收下"][clickable=true] <2 View < [text="福卡领取区域"]',
          snapshotUrls: 'https://i.gkd.li/i/25061551',
        },
        {
          key: 2,
          preKeys: [1],
          action: 'back',
          actionDelay: 200, //留点时间给 key1
          matches: '[parent=null]',
        },
      ],
    },
  ],
});
