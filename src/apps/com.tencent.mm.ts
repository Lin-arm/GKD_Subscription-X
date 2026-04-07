import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 1,
      name: '🧩小程序-开屏广告-跳过',
      desc: '点击[跳过]',
      rules: [
        {
          actionCd: 200,
          fastQuery: true,
          matches: 'TextView[text="跳过"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22950301',
            'https://i.gkd.li/i/12785183',
          ],
          activityIds: [
            '.plugin.appbrand.ui.AppBrandUI', //掐头去尾 通配
            '.plugin.appbrand.launching.AppBrandLaunchProxyUI',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '🧩小程序-广告弹窗-x掉',
      desc: '点击[x]',
      rules: [
        {
          actionCd: 300,
          fastQuery: true,
          excludeMatches: '[text="跳过"][visibleToUser=true]', // 防止提前触发
          matches:
            '@ImageView[width<130] <<4 [index=parent.childCount.minus(1)] - FrameLayout >4 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22944255', //抖快工具
            'https://i.gkd.li/i/22947362', //抖快工具
            'https://i.gkd.li/i/13459614', //提瓦特小助手
          ],
          exampleUrls: 'https://e.gkd.li/af240f53-8ce0-466c-b9b2-39054c78159a',
          excludeSnapshotUrls: 'https://i.gkd.li/i/16958795',
          activityIds: '.plugin.appbrand.ui.AppBrandUI',
        },
      ],
    },
    {
      key: 3,
      name: '🧩小程序-看完30s广告-x掉',
      desc: '①已完成 ②已获得',
      fastQuery: true,
      forcedTime: 30500,
      rules: [
        {
          key: 1,
          name: '①已完成-x掉',
          matchRoot: true,
          matches:
            '[desc^="已完成"] -(1,2) @ImageView[width<100][visibleToUser=true] <n View[childCount>5] <<(6,7) [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22947257',
            'https://i.gkd.li/i/24450981', //七猫免费小说
            'https://i.gkd.li/i/26452506', //七猫免费小说2
          ],
          exampleUrls: 'https://e.gkd.li/fb891df0-5e38-433f-8920-7389dd522800',
          activityIds: [
            '.plugin.sns.ad.landingpage.ui.activity.DynamicCanvasPageUI',
            '.plugin.appbrand.ui.AppBrandUI',
          ],
        },
        {
          key: 2,
          name: '②已获得奖励-x掉',
          matches: [
            'TextView[text="已获得奖励"]',
            '@LinearLayout[clickable=true][index=0] + [desc="浮窗"] + TextView[text=" "]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24204085', //视频号广告
          exampleUrls: 'https://e.gkd.li/4da635f3-e7fc-411d-a56c-0564cd8c4031', // P过的图,并压缩成.webP格式
          activityIds: '.plugin.finder.ui.FinderShareFeedRelUI',
        },
        {
          key: 3,
          name: '③已获得奖励-关闭',
          matches:
            '@[text="关闭"] <<3 [index=parent.childCount.minus(1)] - FrameLayout >3 [text="已获得奖励"]',
          snapshotUrls: 'https://i.gkd.li/i/24545151', //微粒贷
          exampleUrls: 'https://e.gkd.li/1ec650be-9fa6-413f-88a5-f8118e836fa6', // P过
          activityIds: '.plugin.appbrand.ui.AppBrandUI',
        },
        {
          key: 4,
          name: '④直播-已获得奖励-x掉',
          activityIds:
            '.plugin.finder.feed.ui.FinderLiveVisitorWithoutAffinityUI',
          matches:
            '@[desc="关闭直播按钮"][clickable=true] <n [index=0] + ViewGroup >2 [text="已获得奖励"]',
          snapshotUrls: 'https://i.gkd.li/i/25095057',
          exampleUrls: 'https://e.gkd.li/00a82942-dca2-4bca-8c85-2ac094a993c5', // P过
        },
      ],
    },
    {
      key: 4,
      name: '🧩抖快-剪贴板弹窗-自动解析',
      desc: '检测到链接地址-点击[解析]',
      rules: [
        {
          fastQuery: true,
          matches: 'Button[text="解析"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/22944723',
          exampleUrls: 'https://e.gkd.li/c0c83143-c492-4d1a-ad91-5f8bd15b4775',
          activityIds: '.plugin.appbrand.ui.AppBrandUI',
        },
      ],
    },
    {
      key: 401,
      name: '功能类-长按后[保存图片]',
      desc: '🧩抖快小程序内',
      rules: [
        {
          fastQuery: true,
          activityIds: '.plugin.subapp.ui.gallery.GestureGalleryUI',
          matches: '@[clickable=true] >3 [text="保存图片"]',
          exampleUrls: 'https://e.gkd.li/d12cb1fe-0e43-4851-af8b-d9ff15d856a0',
          snapshotUrls: 'https://i.gkd.li/i/26482711',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-自动领取微信红包🧧',
      desc: '自动领取私聊红包,群聊红包',
      fastQuery: true,
      rules: [
        {
          key: 1,
          name: '点击别人发的红包',
          activityIds: [
            '.ui.LauncherUI',
            '.ui.chatting.variants.ChattingMainUI',
          ],
          matches:
            'LinearLayout[childCount=1] >2 @FrameLayout[clickable=true] >2 LinearLayout[getChild(1).childCount=1] +2 RelativeLayout > [text="微信红包"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18134826',
            'https://i.gkd.li/i/24347101',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/18134823', // 自己发的， LinearLayout[childCount=1] 区分
            'https://i.gkd.li/i/18134833', // 已领取的， getChild(1).childCount=1 区分
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '点击红包-开',
          matchRoot: true,
          activityIds: '.plugin.luckymoney.ui.LuckyMoney',
          matches:
            '@Button[desc="开" || desc="開"] -(2,3) LinearLayout >2 [text$="红包" || text$="紅包"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18134828',
            'https://i.gkd.li/i/21177180',
            'https://i.gkd.li/i/25901145',
            'https://i.gkd.li/i/25315061', //zh_TW
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/12567698', // 金币动画的快照
        },
        {
          preKeys: [1, 2],
          name: '从红包结算界面返回',
          activityIds: '.plugin.luckymoney.ui.LuckyMoney',
          matches:
            '@ImageView[desc="返回"] +n LinearLayout >8 [text$="红包" || text$="紅包"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18134829',
            'https://i.gkd.li/i/18135031',
            'https://i.gkd.li/i/23825631',
            'https://i.gkd.li/i/24414957',
            'https://i.gkd.li/i/25315062', //zh_TW
          ],
        },
      ],
    },
    {
      key: 45,
      name: '分段广告-视频号评论区内广告',
      desc: '⚠️有概率误触',
      fastQuery: true,
      activityIds: [
        '.plugin.finder.ui.FinderShareFeedRelUI',
        '.plugin.finder.ui.FinderHomeAffinityUI',
      ],
      rules: [
        {
          key: 1,
          name: '①点击[广告](上面的)',
          matches: [
            '@FrameLayout[clickable=true][visibleToUser=true][index=parent.childCount.minus(2)][top>getPrev(4).bottom] -n ImageView[desc="头像"] <<3 FrameLayout[index<parent.childCount.minus(1)] <n RecyclerView <<3 FrameLayout - FrameLayout[index=0] >3 TextView[text^="评论"][left<200]',
            // [top>getPrev(4).bottom] 用于避免评论区顶部的遮挡[广告], 在上滑浏览评论时, [广告]可能会被遮挡在顶部
            // FrameLayout[index<parent.childCount.minus(1)] 整个广告框不是末尾节点, 如此应该可让后续坐标点击时 ②[关闭该广告]、③[直接关闭] 出现在 ①[广告] 的下方, 而不是出现在上方
            // 后续第二段、第三段的相对坐标用的都是第一段的选择器
          ],
          // 旧思路 (有效点击范围)
          // matches: [
          //   '@FrameLayout[clickable=true][visibleToUser=true][index=parent.childCount.minus(2)][top>getPrev(4).bottom] -n ImageView[desc="头像"] <<3 FrameLayout[bottom<getPrev(1).getChild(1).getChild(0).top] <n RecyclerView <<3 FrameLayout - FrameLayout[index=0] >3 TextView[text^="评论"][left<200]',
          // // [top>getPrev(4).bottom] 用于避免评论区顶部的遮挡[广告], 在上滑浏览评论时, [广告]可能会被遮挡在顶部
          // // FrameLayout[bottom<getPrev(1).getChild(1).getChild(0).top] 整个广告框的bottom要小于评论输入框的top, 如此可让 ②[关闭该广告]、③[直接关闭] 出现在 ①[广告] 的下方, 而不是出现在上方(懒得额外适配), 这样后续用坐标点击才不会误触
          // ],
          // exampleUrls: 'https://e.gkd.li/c904d421-53d6-4e73-88f7-fdf0a5511fd6', // 大概的有效范围示意图
          snapshotUrls: [
            'https://i.gkd.li/i/24834498',
            'https://i.gkd.li/i/24834499',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/24835207', // 输入法遮挡 [visibleToUser=true]
            // 'https://i.gkd.li/i/24835410', // ②[关闭该广告]出现在上方(懒得额外适配,需要另写一套点击坐标,还要判断触发哪一套,很麻烦)
          ],
        },
        {
          key: 2,
          name: '①点击[广告](下面的)',
          matches: [
            '@FrameLayout[clickable=true][visibleToUser=true][index=parent.childCount.minus(2)] -n ImageView[desc="头像"] <<3 FrameLayout[index=parent.childCount.minus(1)] <n RecyclerView <<3 FrameLayout - FrameLayout[index=0] >3 TextView[text^="评论"][left<200]',
            // FrameLayout[index=parent.childCount.minus(1)] 整个广告框属于末尾节点, 如此可让 ②[关闭该广告]、③[直接关闭] 出现在 ①[广告] 的上方
          ],
          snapshotUrls: ['https://i.gkd.li/i/24834498'],
        },

        // 第二段
        {
          key: 25,
          preKeys: [1, 2],
          name: '②点击下方的[关闭该广告]的坐标',
          position: {
            //点击出现在[广告]下方的[关闭该广告]
            left: 'width * -0.7469',
            top: 'width * 2.4259',
          },
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true][index=parent.childCount.minus(2)][top>getPrev(4).bottom] -n ImageView[desc="头像"] <<3 FrameLayout[index<parent.childCount.minus(1)] <n RecyclerView <<3 FrameLayout - FrameLayout[index=0] >3 TextView[text^="评论"][left<200]',
          snapshotUrls: ['https://i.gkd.li/i/24834568'],
        },
        {
          key: 26,
          preKeys: [1, 2],
          name: '②点击上方的[关闭该广告]的坐标',
          position: {
            //点击出现在[广告]上方的[关闭该广告]
            left: 'width * -0.7469',
            top: 'width * -1.2901',
          },
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true][index=parent.childCount.minus(2)] -n ImageView[desc="头像"] <<3 FrameLayout[index=parent.childCount.minus(1)] <n RecyclerView <<3 FrameLayout - FrameLayout[index=0] >3 TextView[text^="评论"][left<200]',
          snapshotUrls: [
            'https://i.gkd.li/i/25476021',
            'https://i.gkd.li/i/24835410',
          ],
        },

        // 第三段
        {
          key: 50,
          preKeys: [25, 26],
          name: '③点击下方[直接关闭]的坐标',
          position: {
            //点击出现在[广告]下方的[直接关闭]
            left: 'width * 0.1296',
            top: 'width * 1.1728',
          },
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true][index=parent.childCount.minus(2)][top>getPrev(4).bottom] -n ImageView[desc="头像"] <<3 FrameLayout[index<parent.childCount.minus(1)] <n RecyclerView <<3 FrameLayout - FrameLayout[index=0] >3 TextView[text^="评论"][left<200]',
          snapshotUrls: ['https://i.gkd.li/i/24834571'],
        },
        {
          key: 51,
          preKeys: [25, 26],
          name: '③点击上方的[直接关闭]的坐标',
          position: {
            //点击出现在[广告]上方的[直接关闭]
            left: 'width * 0.1296',
            top: 'width * -2.5247',
          },
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true][index=parent.childCount.minus(2)] -n ImageView[desc="头像"] <<3 FrameLayout[index=parent.childCount.minus(1)] <n RecyclerView <<3 FrameLayout - FrameLayout[index=0] >3 TextView[text^="评论"][left<200]',
          snapshotUrls: ['https://i.gkd.li/i/25476022'],
        },

        // 第四段: 因误触出现的页面-返回
        {
          key: 100,
          preKeys: [1, 2, 25, 26, 50, 51],
          name: '④误触-返回评论区',
          // action: 'back',
          anyMatches: [
            '[vid="actionbar_up_indicator"][clickable=true]',
            '@ImageView[clickable=true] <2 FrameLayout[childCount=2] <<3 [id="android:id/content"]',
            '@ImageView[clickable=true][desc="返回"] <<6 FrameLayout <2 LinearLayout <<6 [id="android:id/content"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/24836217', // 未加载完'反馈问题'页面的过渡页
            'https://i.gkd.li/i/24834641', // '反馈问题'页
            'https://i.gkd.li/i/24836811', // '了解详情'页
            'https://i.gkd.li/i/25476791', // '下载'页
            'https://i.gkd.li/i/25477084', // '搜索'页
          ],
          activityIds: [
            '.plugin.webview.ui.tools.MMWebViewUI',
            '.plugin.sns.ad.landingpage.ui.activity.HalfScreenVangoghPageUI',
            '.ui.halfscreen.HalfScreenTransparentActivity',
          ],
        },
        {
          key: 101,
          preKeys: [1, 2, 25, 26, 50, 51],
          name: '④误触输入框-返回键',
          action: 'back',
          matches:
            '[desc="表情"] - @RecyclerView <<3 FrameLayout <2 LinearLayout < FrameLayout <2 FrameLayout - FrameLayout[index=0] >3 TextView[text^="评论"][left<200]',
          snapshotUrls: 'https://i.gkd.li/i/24835207', // 出现输入法
        },
      ],
    },
    {
      key: 46,
      name: '功能类-自动拨打1次视频通话',
      desc: '(⚠️慎用)依次点击 ①右下角⊕号 ②视频通话 ③选择视频通话',
      // actionMaximum: 1,
      resetMatch: 'app',
      enable: false,
      activityIds: ['.ui.chatting.ChattingUI', '.ui.LauncherUI'],
      rules: [
        {
          key: 1,
          name: '①点击右下角⊕号',
          actionMaximum: 1,
          matches: '[desc^="更多功能按钮"][clickable=true][bottom>2000]',
          snapshotUrls: 'https://i.gkd.li/i/25118402',
        },
        {
          key: 2,
          // preKeys: [1],
          name: '②视频通话',
          fastQuery: true,
          actionMaximum: 2, //有些系统(OnePlus Android 16)第1次点击不生效
          actionDelay: 1500,
          matches:
            '@[clickable=true] >3 [getChild(0).name$="ImageView"] + [text="视频通话"]',
          snapshotUrls: [
            'https://i.gkd.li/i/25118465',
            'https://i.gkd.li/i/25118742',
          ],
        },
        {
          key: 3,
          preKeys: [2],
          name: '③选择视频通话',
          actionMaximum: 1,
          fastQuery: true,
          actionDelay: 500,
          matches:
            '@[clickable=true] > [getChild(0).name$="ImageView"] >2 [text="视频通话"]',
          snapshotUrls: 'https://i.gkd.li/i/25118447',
        },
      ],
    },
  ],
});
