import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 1,
      name: '🧩抖快-启动页AD-跳过',
      desc: '小程序-抖快工具(无水印下载视频)',
      rules: [
        {
          matches: ['TextView[text="跳过"][visibleToUser=true]'],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22950301',
          activityIds: '.plugin.appbrand.ui.AppBrandUI00',
        },
      ],
    },
    {
      key: 2,
      name: '🧩抖快-广告弹窗-x掉',
      desc: '小程序',
      rules: [
        {
          matches: [
            'FrameLayout[index=parent.childCount.minus(1)] >3 ImageView[width>=80][width<=99][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/22944255',
            'https://i.gkd.li/i/22947362',
          ],
          activityIds: '.plugin.appbrand.ui.AppBrandUI00',
        },
      ],
    },
    {
      key: 3,
      name: '🧩抖快-剪贴板弹窗-解析',
      desc: '检测到链接地址-解析',
      rules: [
        {
          matches: [
            'Button[text="解析"][vid="mm_alert_ok_btn"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22944723',
          activityIds: '.plugin.appbrand.ui.AppBrandUI00',
        },
      ],
    },
    {
      key: 4,
      name: '🧩抖快-看完广告-x掉',
      desc: '①已完成 ②已获得',
      rules: [
        {
          key: 1,
          name: '①已完成-x掉',
          matches: ['[desc^="已完成"] -2 ImageView[visibleToUser=true]'],
          snapshotUrls: [
            'https://i.gkd.li/i/22947257',
            'https://i.gkd.li/i/24450981', //七猫免费小说
          ],
          activityIds: [
            '.plugin.sns.ad.landingpage.ui.activity.DynamicCanvasPageUI',
            '.plugin.appbrand.ui.AppBrandUI00',
          ],
        },
        {
          key: 2,
          name: '②已获得奖励-x掉',
          matches: [
            'TextView[text="已获得奖励"]',
            '@LinearLayout[clickable=true][focusable=true][index=0] + FrameLayout[desc="浮窗"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24204085',
          activityIds: '.plugin.finder.ui.FinderShareFeedRelUI',
        },
        {
          key: 3,
          name: '③已获得奖励-关闭',
          matches: [
            'TextView[text="已获得奖励"]',
            'TextView[text="关闭"][top<200]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/24545151', //微粒贷
          activityIds: '.plugin.appbrand.ui.AppBrandUI00',
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
          snapshotUrls: [
            'https://i.gkd.li/i/24834568',
            // 'https://i.gkd.li/i/24834570',
          ],
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
          snapshotUrls: [
            'https://i.gkd.li/i/24834571',
            // 'https://i.gkd.li/i/24834573',
          ],
        },

        // 因误触出现的页面-返回键
        {
          key: 100,
          preKeys: [1, 25, 50],
          name: '④误触-返回评论区',
          action: 'back',
          matches: ['[text="反馈问题"][id="android:id/text1"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/24834641', // '反馈问题'页面
          ],
          activityIds: [
            '.plugin.finder.ui.FinderShareFeedRelUI',
            '.plugin.finder.ui.FinderHomeAffinityUI',
            '.plugin.webview.ui.tools.MMWebViewUI',
          ],
        },
      ],
    },
  ],
});
