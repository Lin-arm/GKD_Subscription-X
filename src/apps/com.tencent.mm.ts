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
      rules: [
        {
          key: 1,
          name: '①已完成-x掉',
          matches:
            '[desc^="已完成"] -2 ImageView[width<100][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22947257',
            'https://i.gkd.li/i/24450981', //七猫免费小说
          ],
          activityIds: [
            '.plugin.sns.ad.landingpage.ui.activity.DynamicCanvasPageUI',
            '.plugin.appbrand.ui.AppBrandUI',
          ],
        },
        {
          key: 2,
          name: '②已获得奖励-x掉',
          fastQuery: true,
          matches: [
            'TextView[text="已获得奖励"]',
            '@LinearLayout[clickable=true][index=0] + [desc="浮窗"] + TextView[text=" "]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24204085',
          activityIds: '.plugin.finder.ui.FinderShareFeedRelUI',
        },
        {
          key: 3,
          name: '③已获得奖励-关闭',
          matches:
            '@[text="关闭"] <<3 [index=parent.childCount.minus(1)] - FrameLayout >3 [text="已获得奖励"]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/24545151', //微粒贷
          activityIds: '.plugin.appbrand.ui.AppBrandUI',
        },
        {
          key: 4,
          name: '④直播-已获得奖励-x掉',
          fastQuery: true,
          activityIds:
            '.plugin.finder.feed.ui.FinderLiveVisitorWithoutAffinityUI',
          matches:
            '@[desc="关闭直播按钮"][clickable=true] <n [index=0] + ViewGroup >2 [text="已获得奖励"]',
          snapshotUrls: 'https://i.gkd.li/i/25095057',
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
      key: 45,
      name: '分段广告-视频号评论区内广告',
      desc: '注意⚠️: 有概率误触,有生效范围限制(看示例图)',
      fastQuery: true,
      actionCd: 10,
      activityIds: [
        '.plugin.finder.ui.FinderShareFeedRelUI',
        '.plugin.finder.ui.FinderHomeAffinityUI',
      ],
      rules: [
        {
          key: 1,
          name: '①点击[广告]',
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true][index=parent.childCount.minus(2)][top>getPrev(4).bottom] -n ImageView[desc="头像"] <<3 FrameLayout[bottom<getPrev(1).getChild(1).getChild(0).top] <n RecyclerView <<3 FrameLayout - FrameLayout[index=0] >3 TextView[text^="评论"][left<200]',
          // [top>getPrev(4).bottom] 用于避免评论区顶部的遮挡[广告], 在上滑浏览评论时, [广告]可能会被遮挡在顶部
          // FrameLayout[bottom<getPrev(1).getChild(1).getChild(0).top] 整个广告框的bottom要小于评论输入框的top, 如此可让 ②[关闭该广告]、③[直接关闭] 出现在 ①[广告] 的下方, 而不是出现在上方(懒得额外适配), 这样后续用坐标点击才不会误触
          snapshotUrls: [
            'https://i.gkd.li/i/24834498',
            'https://i.gkd.li/i/24834499',
          ],
          exampleUrls: 'https://e.gkd.li/c904d421-53d6-4e73-88f7-fdf0a5511fd6', // 大概的有效范围示意图
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/24835207', // 输入法遮挡 [visibleToUser=true]
            'https://i.gkd.li/i/24835410', // ②[关闭该广告]出现在上方(懒得额外适配,需要另写一套点击坐标,还要判断触发哪一套,很麻烦)
          ],
        },
        {
          key: 25,
          preKeys: [1],
          name: '②点击[关闭该广告]的坐标',
          position: {
            left: 'width * -0.7469',
            top: 'width * 2.4259',
          },
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true][index=parent.childCount.minus(2)][top>getPrev(4).bottom] -n ImageView[desc="头像"] <<3 FrameLayout[bottom<getPrev(1).getChild(1).getChild(0).top] <n RecyclerView <<3 FrameLayout - FrameLayout[index=0] >3 TextView[text^="评论"][left<200]',
          snapshotUrls: ['https://i.gkd.li/i/24834568'],
        },
        {
          key: 50,
          preKeys: [25],
          name: '③点击[直接关闭]的坐标',
          position: {
            left: 'width * 0.1296',
            top: 'width * 1.1728',
          },
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true][index=parent.childCount.minus(2)][top>getPrev(4).bottom] -n ImageView[desc="头像"] <<3 FrameLayout[bottom<getPrev(1).getChild(1).getChild(0).top] <n RecyclerView <<3 FrameLayout - FrameLayout[index=0] >3 TextView[text^="评论"][left<200]',
          snapshotUrls: ['https://i.gkd.li/i/24834571'],
        },

        // 因误触出现的页面-返回
        {
          key: 100,
          preKeys: [1, 25, 50],
          name: '④误触-返回评论区',
          // action: 'back',
          anyMatches: [
            '[vid="actionbar_up_indicator"][clickable=true]',
            '@ImageView[clickable=true] <2 FrameLayout[childCount=2] <<3 [id="android:id/content"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/24836217', // 未加载完'反馈问题'页面的过渡页
            'https://i.gkd.li/i/24834641', // '反馈问题'页
            'https://i.gkd.li/i/24836811', // '了解详情'页
          ],
          activityIds: [
            '.plugin.webview.ui.tools.MMWebViewUI',
            '.plugin.sns.ad.landingpage.ui.activity.HalfScreenVangoghPageUI',
          ],
        },
      ],
    },
  ],
});
