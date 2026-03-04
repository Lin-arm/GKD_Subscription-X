import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaishou.nebula',
  name: '快手极速版',
  groups: [
    {
      key: 0,
      name: '📢说明',
      desc: '(点击查看详情) 目前在用的快极版本有两个: 🔸v13.2.10.9610 🔸v12.8.20.8680 ,如果你用其他版本的快极,估计有些规则不生效,如遇失效或误触请截取快照拿到github反馈. 🟢相关脚本已在自动精灵app上传,请到脚本市场搜`🦜快极_自动刷视频`',
      enable: false,
      rules: [],
    },
    {
      key: 1,
      name: '启动页-视频广告页-返回',
      desc: 'app跳转ks时出现(❗有误触)',
      enable: false,
      rules: [
        {
          actionMaximum: 1,
          matchTime: 3500,
          resetMatch: 'app',
          matches: 'ImageView[vid="left_btn"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22658635',
          activityIds: 'com.yxcorp.gifshow.detail.PhotoDetailActivity',
        },
      ],
    },
    {
      key: 2,
      name: '启动页-365天打卡-返回键', // zfb新村跳转快极时出现
      desc: '重选商品(弹窗)-返回键',
      rules: [
        {
          action: 'back',
          actionCd: 2000,
          excludeMatches: '[text="任务中心"]',
          matches:
            '[text^="完成365天打卡" || text="重新选择商品"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23606935',
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
      ],
    },
    {
      key: 4,
      name: '📺视频页-xx-不感兴趣',
      desc: '①快手热榜 ②每日打卡',
      rules: [
        {
          fastQuery: true,
          matches: [
            '[text="上滑继续观看视频"]',
            '(@[clickable=true] > [text="不感兴趣"]) || ([text="不感兴趣"][clickable=true])',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/22901405', //快手热榜
            'https://i.gkd.li/i/22981911', //每日打卡
            'https://i.gkd.li/i/25210377', //签到
          ],
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
        },
      ],
    },
    {
      key: 5,
      name: '📺视频页-长按直播-不感兴趣该内容',
      desc: '点击[不感兴趣该内容]',
      rules: [
        {
          // matchDelay: 1700,
          fastQuery: true,
          matches:
            '@[clickable=true] >(2,3) [vid="item_title"][text="不感兴趣该内容"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22908240',
            'https://i.gkd.li/i/25071696',
          ],
          exampleUrls: 'https://e.gkd.li/7277dc82-6626-44c8-a84d-f2b03de97252',
          activityIds: [
            'com.yxcorp.gifshow.HomeActivity',
            'com.yxcorp.gifshow.detail.PhotoDetailActivity',
          ],
        },
      ],
    },
    {
      key: 501,
      name: '📺视频页-长按视频-不感兴趣',
      desc: '点击[不感兴趣]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          matches:
            '@[clickable=true] >(2,3) [vid="item_title"][text="不感兴趣"]',
          exampleUrls: 'https://e.gkd.li/27c8efcd-9cb8-42ae-85fa-14fa5d67a972',
          snapshotUrls: 'https://i.gkd.li/i/25071878',
          activityIds: [
            'com.yxcorp.gifshow.HomeActivity',
            'com.yxcorp.gifshow.detail.PhotoDetailActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '🦜脚本刷视频(辅助)-保持在刷视频页',
      desc: '⚠️误进评论区,直播间,任务中心等-->返回键',
      enable: false,
      fastQuery: true,
      priorityTime: 5000,
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 1,
          action: 'back',
          matches: [
            '[vid="design_bottom_sheet" || (vid="tab_text" && text*="评论") || vid="profile_feed_title" || vid="find_friend_btn" || vid="webView"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23777882', //视频页-分享(下方弹窗)
            'https://i.gkd.li/i/23777756', //视频页-评论区
            'https://i.gkd.li/i/23777346', //视频页-她的作品(右侧边栏)
            // 'https://i.gkd.li/i/25071878', //长按视频
            'https://i.gkd.li/i/25146300', //朋友-动态页
            'https://i.gkd.li/i/22883404', //其他 webView (任务中心)
          ],
        },
        {
          key: 2,
          name: '②左边工具栏-返回键',
          action: 'back',
          matches:
            '@SlidingPaneLayout[childCount=1] < [vid="home_activity_root"]',
          snapshotUrls: 'https://i.gkd.li/i/23778737', //视频页-左边工具栏
          excludeSnapshotUrls: 'https://i.gkd.li/i/23778837', //正常刷视频页  [childCount=2]
        },
        {
          key: 3,
          name: '③误进横屏-返回键',
          action: 'back',
          matches: '[parent=null][width>height]',
          // snapshotUrls: 'https://i.gkd.li/i/25143597', //(参考快手)进入横屏
        },
        {
          key: 4,
          name: '④误进[我]页-点击[首页]',
          matches: [
            '[vid="user_name_info_layout"][visibleToUser=true]',
            '@[clickable=true] >3 [text="首页"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/25144133',
        },
        {
          key: 5,
          name: '⑤从[关注]页-点击[发现]',
          matches: [
            '@[vid="follow_button"][childCount=0] - [vid="follow_avatar_view"][visibleToUser=true]',
            '@[clickable=true] > [vid="textView"][desc="发现"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/25148876', //在刷[关注]页的视频
          excludeSnapshotUrls: 'https://i.gkd.li/i/25148885', //在刷[发现]页的视频 [childCount=1]
        },
        {
          key: 444, //进入非视频页,直接返回
          name: '④进入非视频界面-返回键',
          action: 'back',
          matches: '[parent=null]', //所有界面都存在的 根节点
          excludeActivityIds: 'com.yxcorp.gifshow.HomeActivity',
          activityIds: [],
        },
      ],
    },
    {
      key: 7,
      name: '🦜脚本刷广告(辅助)-保持在刷广告相关页',
      desc: '⚠️①重启自进任务中心 ②误进与看广告无关页会返回',
      enable: false,
      fastQuery: true,
      forcedTime: 10000,
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity', //子规则里出现最多的界面id
      rules: [
        {
          key: 1,
          matches: '[vid="redFloat"][clickable=true]', //视频页-点击红包浮窗 (配合脚本重启快极后用)
          snapshotUrls: 'https://i.gkd.li/i/23989148',
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
        },
        {
          key: 2,
          matches: [
            '[vid="nasa_groot_view_pager"]',
            '[id="android:id/content"] >5 ImageView + ViewGroup[width>120 && width<140][height>120 && height<140]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/24164538',
            'https://i.gkd.li/i/24194816',
          ],
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
        },

        // 以下为自动看广告时,误入其他页面后用的返回键
        {
          key: 11,
          action: 'back',
          matches: '[text="赚饲料"]',
          fastQuery: false, //这条子规则内禁用快查询,否则真机不生效
          snapshotUrls: 'https://i.gkd.li/i/22908125', //养鸭
        },
        {
          key: 12,
          action: 'back',
          matches: '[text="现金明细"]',
          snapshotUrls: 'https://i.gkd.li/i/24337097', //我的收益页
        },
        {
          key: 13,
          action: 'back',
          matches: 'WebView[text="快手App邀请好友"]',
          snapshotUrls: 'https://i.gkd.li/i/24431766', //邀请好友
        },
        {
          key: 14,
          matches:
            'Image - [text="金币游乐园"] - @[clickable=true][getChild(0).name$="Image"] <<3 View <2 View <<3 WebView[text="活动中心"] <<2 [vid="webView"]',
          snapshotUrls: 'https://i.gkd.li/i/24694311', //小游戏乐园
        },
        {
          key: 15,
          fastQuery: false,
          matches: 'Button[text="狠心离开"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/25098334', //小游戏乐园-离开
        },
        {
          key: 16,
          action: 'back',
          matches:
            '@[text$="瓜分大额奖池"] <2 View < View <2 View <<2 WebView <<2 [vid="webView"]',
          snapshotUrls: 'https://i.gkd.li/i/25004213', //瓜分百亿金币(3天挑战)
        },
        {
          key: 17,
          action: 'back',
          matches:
            '@View[text^="App版本过低"] <3 View <<3 WebView <<2 [vid="webView"]',
          snapshotUrls: 'https://i.gkd.li/i/25285773', //版本过低
        },
        {
          key: 18,
          matches:
            '[text="签到日历"] - @View[clickable=true][getChild(0).name$="Image"] <<5 WebView <<2 [vid="webView"]',
          snapshotUrls: 'https://i.gkd.li/i/25730030', //签到日历
        },

        // 以下为其它界面id的
        {
          key: 51,
          action: 'back',
          matches: '[text="推荐小说"][id$="book_module_title"]',
          snapshotUrls: 'https://i.gkd.li/i/22658578', //小说
          activityIds: 'com.kuaishou.novel.home.NovelHomeActivity',
        },
        {
          key: 52,
          action: 'back',
          matches: '[vid="tab_text"][text^="作品"]',
          snapshotUrls: 'https://i.gkd.li/i/24336755', //直播-用户主页
          activityIds:
            'com.yxcorp.gifshow.profile.activity.UserProfileActivity',
        },
        {
          key: 53,
          activityIds: 'com.kwai.frog.game.engine.adapter.engine.base.',
          matches:
            '[id="com.kuaishou.nebula.minigame:id/v_more_view_close_and_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24694286', //小游戏-x掉
        },
        {
          key: 54,
          activityIds: 'com.yxcorp.gifshow.detail.PhotoDetailActivity',
          matches: [
            '[vid="text"][text="发条有爱评论~"]',
            '@[vid="left_btn"][desc="返回"][clickable=true] + [desc="查找"] + [vid="filter_btn_layout"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24992396', //视频广告页
        },
        {
          key: 55,
          action: 'back',
          matches: '[text*="APP版本过低"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25341424', //版本过低
          activityIds: 'com.kwai.kds.krn.api.page.KwaiRnActivity',
        },
      ],
    },
    {
      key: 8,
      name: '⛳任务页-弹窗-X掉',
      desc: '组件,绑卡,邀好友,瓜分,...',
      activityIds: [
        'com.yxcorp.gifshow.HomeActivity', // A
        'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity', // B
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity', // C
        'com.gifshow.kuaishou.floatwidget.activity.GrowthYodaWebViewActivity', // D
      ],
      rules: [
        {
          key: 1,
          fastQuery: true,
          matches: [
            '@[name$="View"][text="任务中心"] <2 View <2 View < WebView <<2 [vid="webView"]',
            'Button[!(text^="去看广告得" || text="愉快收下")] -n * <<(2,3) [index=parent.childCount.minus(1)] -n * > @[name$="Image" || name$="View"][clickable=true][width>70 && width<90] <<(2,3,4) [index=parent.childCount.minus(1) || index=parent.childCount.minus(2)][childCount<3] -n [name$="TextView" || name$="View"] <<(3,4) [vid="webView"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23468984', //去绑卡 A
            'https://i.gkd.li/i/22672607', //每日打卡 A
            'https://i.gkd.li/i/23574778', //瓜分百亿金币 A
            'https://i.gkd.li/i/23749900', //开宝箱奖励已到账-看视频 A
            'https://i.gkd.li/i/23588323', //看视频赚金币 领奖弹窗 A
            'https://i.gkd.li/i/22907854', //限时邀好友 B
            'https://i.gkd.li/i/23300823', //去分享视频 B
            'https://i.gkd.li/i/25729758', //助力口令已复制 B
            'https://i.gkd.li/i/22671674', //添加组件 C
            'https://i.gkd.li/i/24743239', //瓜分百亿金币 D
          ],
          excludeSnapshotUrls: [
            // 'https://i.gkd.li/i/22871644', //养鸭 签到弹窗
            // 'https://i.gkd.li/i/24448092', //养鸭 饲料雨End 翻10倍

            'https://i.gkd.li/i/23427912', //开宝箱-弹窗去看广告
            'https://i.gkd.li/i/22907925', //养鸭 饲料雨End 愉快收下
          ],
        },
        {
          key: 3,
          fastQuery: true,
          matches:
            '[childCount=1] > @ImageView[id=null][width>95 && width<106][height>95 && height<106][top>300 && top<1000][visibleToUser=true] <<3 ViewGroup <2 ViewGroup <2 ViewGroup <2 ViewGroup <3 FrameLayout < [vid="krn_content_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24352727', //A 2025年度回忆
            'https://i.gkd.li/i/24352736', //A h5回测dtk
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/24357473', //视频页 top>300
            'https://i.gkd.li/i/24642377', //视频页 top<1000
            'https://i.gkd.li/i/25144133', //我-用户信息页 [id=null]
          ],
        },
      ],
    },
    {
      key: 9,
      name: '⛳任务页-刷视频赚金币-领取',
      desc: '有待领金币-立即领取',
      enable: false,
      rules: [
        {
          actionMaximum: 3,
          resetMatch: 'match',
          matchDelay: 2500,
          anyMatches: [
            '[text^="待领"][text$="金币"] +2 TextView[text="立即领取"][index=2]',
            '[text^="待领"][text$="金币立即领取"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23907888',
            'https://i.gkd.li/i/23979731',
          ],
          activityIds: [
            'com.yxcorp.gifshow.HomeActivity', // A
            'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity', // B
            'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity', // C
            'com.gifshow.kuaishou.floatwidget.activity.GrowthYodaWebViewActivity', // D
          ],
        },
      ],
    },
    {
      key: 10,
      name: '⛳任务页-❗网络错误-点击重试',
      desc: '任务页加载出错',
      fastQuery: true,
      activityIds: [
        'com.yxcorp.gifshow.ad.webview.AdYodaActivity',
        'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
        'com.gifshow.kuaishou.floatwidget.activity.GrowthYodaWebViewActivity',
      ],
      rules: [
        {
          key: 1,
          actionCd: 3500,
          matches:
            '[vid="retry_btn" && text="点击重试" || text^="点我刷新"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24994235',
            'https://i.gkd.li/i/24195125',
            'https://i.gkd.li/i/23907716',
            'https://i.gkd.li/i/24337119', //任务页-列表空白-点我刷新
            'https://i.gkd.li/i/24963623',
          ],
        },
        {
          key: 2,
          matches: [
            '[text="网络设置方法"]',
            '[vid="positive"][text="知道了"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24963673',
        },
      ],
    },
    {
      key: 12,
      name: '🤳看广告-已看完-退出',
      desc: '已成功领取奖励',
      activityIds: [
        'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
        'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
        'com.yxcorp.plugin.search.SearchActivity',
      ],
      rules: [
        {
          key: 1,
          actionDelay: 1500,
          forcedTime: 31000, // 防睡死不触发(test)
          matches: [
            '@[id$="video_countdown_end_icon"] - [text^="已成功"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22658960',
            'https://i.gkd.li/i/22662987',
            'https://i.gkd.li/i/23211038',
          ],
        },
        {
          key: 2,
          matches: [
            '[vid="ad_download_text"][text="立即下载"]',
            '[id="com.kuaishou.nebula.commercial_neo:id/video_close_icon"][clickable=true][focusable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24279152',
        },
      ],
    },
    {
      key: 13,
      name: '🤳看广告-退出弹窗-下载领奖-放弃',
      desc: '弹窗-下载并体验20秒-放弃奖励',
      rules: [
        {
          actionDelay: 1500,
          matches: [
            '[text^="下载并体验"] < * +2 * > [text="放弃奖励"][id$="award_video_close_dialog_abandon_button"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22882796',
          activityIds: [
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
            'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
            'com.yxcorp.plugin.search.SearchActivity',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '🤳看广告-额外获取xx金币',
      desc: '点击额外获取xx金币(跳转app)',
      enable: false,
      rules: [
        {
          actionDelay: 1500,
          excludeMatches: '[vid="ad_download_text"][text^="i 下载"]',
          anyMatches: [
            '[vid="ad_download_text"][text^="点击额外获取" || text^="i 打开并体验"][text$="金币"][visibleToUser=true]',
            '[text^="打开并体验" && text$="额外得" || text="点击额外获取"]', //13.2.10.9610
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23392746', //12.8.20.8680
            'https://i.gkd.li/i/23476308', //12.8.20.8680
            'https://i.gkd.li/i/23588212', //13.2.10.9610
            'https://i.gkd.li/i/23654193', //13.2.10.9610
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23392869',
          activityIds: [
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
            'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
            'com.yxcorp.plugin.search.SearchActivity',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '🤳看广告-误入xx页-返回',
      desc: '点击返回',
      fastQuery: true,
      activityIds: [
        'com.yxcorp.gifshow.ad.webview.AdYodaActivity',
        'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      ],
      rules: [
        {
          key: 1,
          matchDelay: 3500,
          matches: [
            '[vid="title_tv"][text="登录" || text="拼多多" || text="支付宝" || text="正在打开..." || text="落茄香腾"]',
            '[vid="left_btn"][clickable=true][visibleToUser=true]', //返回
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23421971', //拼多多
            'https://i.gkd.li/i/23764542', //正在打开...
            'https://i.gkd.li/i/25070194', //落茄香腾 A
            'https://i.gkd.li/i/25070202', //落茄香腾 B
          ],
        },
        {
          key: 2, //等待时间过长(9秒), 直接返回
          matchDelay: 3500,
          actionDelay: 9000,
          matches: '[vid="left_btn"][clickable=true][visibleToUser=true]', //返回
          snapshotUrls: 'https://i.gkd.li/i/23908857',
        },
        {
          key: 3,
          name: 'xx下载页-返回键',
          action: 'back',
          actionDelay: 1000,
          matches:
            '[text^="下载" && text$="立得奖励" || text="快影" || text="券和福利"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23431442',
            'https://i.gkd.li/i/24352704', //快影
            'https://i.gkd.li/i/25002586', //ks年货节
          ],
          activityIds: ['com.kwai.kds.krn.api.page.KwaiRnActivity'],
        },
      ],
    },
    {
      key: 17,
      name: '🤳任务页-自动去看广告',
      desc: '③去看广告得金币(❗遮挡可开shizuku强制点击)',
      activityIds: [
        'com.yxcorp.gifshow.HomeActivity', // A
        'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity', // B
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity', // C
        'com.gifshow.kuaishou.floatwidget.activity.GrowthYodaWebViewActivity', // D
      ],
      rules: [
        {
          // key: 3,
          // name: '③看广告得金币',
          forcedTime: 15000,
          actionCd: 10000,
          matchDelay: 3500,
          matches:
            '@[clickable=true] - * > [text="看广告得金币"] +3 [text^="单日最高"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22883404', // A
            'https://i.gkd.li/i/22882988', // C
            'https://i.gkd.li/i/22907324', // B
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23585391', //倒计时结束继续领金币
            'https://i.gkd.li/i/23642264', //未加载完成? [clickable=true]
          ],
        },
      ],
    },
    {
      key: 18,
      name: '🤳任务页-自动开宝箱',
      desc: '①开宝箱 ②(弹窗)去看广告',
      activityIds: [
        'com.yxcorp.gifshow.HomeActivity', // A
        'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity', // B
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity', // C
        'com.gifshow.kuaishou.floatwidget.activity.GrowthYodaWebViewActivity', // D
      ],
      rules: [
        {
          key: 1,
          name: '①开宝箱',
          forcedTime: 15000,
          // matches: 'Image + Button[text^="点可领"][text$="金币"][clickable=true]',
          fastQuery: true,
          matches:
            '@Button[text^="点可领"][text$="金币"][clickable=true] - Image <<(1,2) [index=parent.childCount.minus(1)] <n [index=parent.childCount.minus(2)][childCount>4] <n View <<3 [vid="webView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23427892',
            'https://i.gkd.li/i/25236905',
          ],
        },
        {
          key: 2,
          name: '②(弹窗)去看广告',
          matches: 'Button[text^="去看广告得"][text$="金币"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23427912',
        },
      ],
    },
    {
      key: 19,
      name: '🤳看广告-点1次静音',
      desc: 'app内切换界面后重置',
      enable: false,
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          matches:
            '[id="com.kuaishou.nebula.commercial_neo:id/award_video_operate_audio_btn"][clickable=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23213280',
          activityIds: [
            'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
            'com.yxcorp.plugin.search.SearchActivity',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '🤳看广告-退出弹窗-再看',
      desc: '再看一个',
      rules: [
        {
          matches:
            '[text^="再看一个"] +3 [text="领取奖励"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22661727',
            'https://i.gkd.li/i/22672886',
            'https://i.gkd.li/i/22673069',
          ],
          activityIds: [
            'com.yxcorp.gifshow.detail.PhotoDetailActivity',
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
            'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '🤳看广告-惊喜弹窗-x掉',
      desc: '下方 惊喜红包弹窗-x掉',
      enable: false,
      rules: [
        {
          actionMaximum: 1,
          excludeMatches:
            '([vid="ad_download_progress_click_progress"]) || ([text^="已成功"])',
          matches: [
            '@ImageView < [desc="close_view"] <2 [desc="container_view"] <<3 [id="com.kuaishou.nebula.commercial_neo:id/award_video_card_container"]',
          ],
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/23213280'],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23450320',
          activityIds: [
            'com.yxcorp.gifshow.detail.PhotoDetailActivity',
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
            'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '📡直播间-退出弹窗-确认',
      desc: '退出直播间',
      fastQuery: true,
      activityIds: [
        'com.yxcorp.gifshow.detail.PhotoDetailActivity',
        'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
        'com.kuaishou.live.core.basic.activity.LivePlayActivity',
        'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
        'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
      ],
      rules: [
        {
          key: 1,
          matches: 'TextView[text^="退出"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22658742',
            'https://i.gkd.li/i/22781433',
            'https://i.gkd.li/i/22782772',
            'https://i.gkd.li/i/22984063',
            'https://i.gkd.li/i/22700047',
            'https://i.gkd.li/i/23210943',
          ],
        },
        {
          key: 2,
          name: '②直播中途结束-返回键',
          action: 'back',
          actionCd: 15000,
          matches:
            '[text="直播已结束" || text^="直播涉及违规"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23006131',
            'https://i.gkd.li/i/24337020', //违规被关
          ],
        },
        {
          key: 3,
          name: '③直播中途结束-弹窗放弃',
          matches: '[text="换一个"] -2 [text="放弃奖励"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23421843',
        },
      ],
    },
    {
      key: 23,
      name: '📡直播间-看完-返回键',
      desc: '直播记时结束->已领取(金币)->退出', // ❗若不生效,注意Animator缩放动画时长不能设为0
      fastQuery: true,
      activityIds: [
        'com.yxcorp.gifshow.detail.PhotoDetailActivity',
        'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
        'com.kuaishou.live.core.basic.activity.LivePlayActivity',
        'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
        'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
      ],
      rules: [
        {
          key: 1,
          action: 'back',
          actionCd: 3000,
          matchTime: 65000, //65秒后休眠
          matches: 'TextView[text="已领取"][vid="neo_count_down_text"]',
          snapshotUrls: ['https://i.gkd.li/i/22705740'],
          excludeSnapshotUrls: 'https://i.gkd.li/i/24432424', //逛街领金币-直播 82秒会出现一次"已领取"
        },
        {
          key: 2, // 去金币购 看的3次直播
          action: 'none',
          matchRoot: true,
          // matches: '[vid="pendant_task_status"][text^="倒计时"][text$="00:01"]', // 倒计时01秒
          matches:
            '@[vid="pendant_task_status"][text^="倒计时"][text$="00:01"] <<3 [vid="kem_activity_task_pendant"] <2 [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23750524',
            'https://i.gkd.li/i/23823031',
          ],
        },
        {
          key: 3,
          preKeys: [2],
          actionDelay: 2500,
          action: 'back',
          matches: '[vid="live_play_root_container"]',
        },
      ],
    },
    {
      key: 24,
      name: '📡直播间-弹窗',
      desc: '①主播争霸赛 ②拍了拍我 ③招工 ④预约直播 ⑤右侧边栏 ⑥邀加语音聊天',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.yxcorp.gifshow.detail.PhotoDetailActivity',
        'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
        'com.kuaishou.live.core.basic.activity.LivePlayActivity',
        'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
        'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
      ],
      rules: [
        {
          key: 1,
          name: '①主播争霸赛-返回',
          action: 'back',
          actionCd: 2000,
          matches: [
            '[text^="助力主播登榜"]',
            '[text="黑马榜"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/22982128',
        },
        {
          key: 2,
          name: '②主播拍了拍我-返回',
          action: 'back',
          matches: '[text^="主播拍了拍我"][visibleToUser=true]',
          // snapshotUrls: 'https://i.gkd.li/i/24127641', //参考快手
        },
        {
          key: 3,
          name: '③招工弹窗-x',
          matches: 'ImageView < @[clickable=true] - [text$="为您推荐优选职位"]',
          snapshotUrls: 'https://i.gkd.li/i/23211116',
        },
        {
          key: 4,
          name: '④预约直播弹窗-x',
          matches:
            'ImageView[width<80][height<80][visibleToUser=true] <<2 @[clickable=true] <2 * <2 * < [vid="krn_content_container"]',
          snapshotUrls: 'https://i.gkd.li/i/23235749',
        },
        {
          key: 5,
          name: '⑤右侧边栏-关闭',
          matches:
            '[vid="photo_feed_side_bar_close_view"][clickable=true][focusable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23300668',
        },
        {
          key: 6,
          name: '⑥邀请加入语音派对-x',
          matches:
            '[id="com.kuaishou.nebula.live_audience_plugin:id/live_voice_party_audience_being_invited_bottom_panel_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24203582',
        },
        {
          key: 7,
          name: '⑦商品列表',
          action: 'back',
          matches:
            '@[clickable=true][focusable=true] >(1,2) [text="订单" || text="购物车"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24352654',
            'https://i.gkd.li/i/24352662',
          ],
        },
        {
          key: 8,
          name: '⑧送票助我上人气榜',
          action: 'back',
          matches:
            '[focusable=true][top>2000][index=parent.childCount.minus(1)] > [text^="点击免费送出"]',
          snapshotUrls: 'https://i.gkd.li/i/24455158',
        },
        {
          key: 9,
          name: '⑨今日榜单弹窗-x掉',
          matches:
            'ImageView <<2 @[clickable=true] - ViewGroup >4 [text="查看今日榜单"]',
          snapshotUrls: 'https://i.gkd.li/i/24926207',
        },
        {
          key: 10,
          name: '10.邀关注-x掉',
          matches:
            '@ImageView[id$="anchor_close"][clickable=true] +n [text="立即关注"]',
          snapshotUrls: 'https://i.gkd.li/i/22659582',
        },
        {
          key: 11,
          name: '11.久看邀关注-返回键',
          action: 'back',
          actionCd: 2000,
          matches: '[text$="看了这么久，帮我点个关注吧！"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23300455',
        },
        {
          key: 12,
          name: '12.出半个主播主页-返回键',
          action: 'back',
          actionCd: 2000,
          matches:
            '[text="主页"] +(1,2) [clickable=true] > [text="关注"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23542497',
            'https://i.gkd.li/i/25075124',
          ],
        },
      ],
    },
    {
      key: 25,
      name: '📡直播间-红包弹窗-x掉',
      desc: '①天降红包 ②团购红包 ③主播新人券 ④双11券',
      fastQuery: true,
      activityIds: [
        'com.yxcorp.gifshow.detail.PhotoDetailActivity', //A
        'com.kuaishou.live.core.basic.activity.LivePlayActivity', //B
        'com.kuaishou.live.core.basic.activity.LiveSlideActivity', //C
        'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity', //D
        'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2', //E
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity', //F
      ],
      rules: [
        {
          key: 1,
          matches: [
            // '[index=parent.childCount.minus(1)] > @ImageView[width>94 && width<106][height>94 && height<106][top>1000 && top<1800] <<n [vid="krn_content_container"]',
            '@[clickable=true] >2 ImageView[width>94 && width<106][height>94 && height<106][top>getPrev(2).height.div(2)] <<n [index=parent.childCount.minus(1)] -n ViewGroup <<2 [vid="krn_content_container"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/22699956', //A 团购红包
            'https://i.gkd.li/i/22781366', //B 天降红包
            'https://i.gkd.li/i/23011158', //F 主播新人券
            'https://i.gkd.li/i/23143270', //E 主播新人券
            'https://i.gkd.li/i/23290583', //A 获得直播惊喜券(双11)
            'https://i.gkd.li/i/23906987', //C >9 直播惊喜券
            'https://i.gkd.li/i/24862649', //A 年货节直播惊喜券 (第1个有偏移,用[clickable=true]应该能点中)
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/22988215', // [index=parent.childCount.minus(1)] > @
        },
        {
          key: 2,
          matches:
            '[id$="red_packet_container_view"] +2 ImageView[vid="close_view"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24337184', //口令红包 未中奖
        },
      ],
    },
    {
      key: 31,
      name: '📡直播间-清晰度-高清',
      desc: '设清晰度为 流畅or高清',
      fastQuery: true,
      activityIds: [
        'com.yxcorp.gifshow.detail.PhotoDetailActivity',
        'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
        'com.kuaishou.live.core.basic.activity.LivePlayActivity',
        'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
        'com.yxcorp.gifshow.ad.neo.videov2.award.AwardVideoPlayActivityV2',
        'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity',
      ],
      rules: [
        {
          key: 1,
          actionMaximum: 1,
          resetMatch: 'match',
          excludeMatches:
            '@[clickable=true][focusable=true] > [text="流畅" || text="高清"]', //已经是'高清'
          matches:
            '@[clickable=true][focusable=true] > [text="清晰度" || text="自动"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23607208', //清晰度
            'https://i.gkd.li/i/23642513', //自动
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23908016',
        },
        {
          key: 2,
          preKeys: [1],
          matches:
            '@[index=parent.childCount.minus(2)][clickable=true] > [text="流畅" || text="高清"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22705855',
        },
      ],
    },
    {
      key: 32,
      name: '🦆养鸭-弹窗',
      desc: '①签到 ②明天来喂鸭 ③继续喂养 ④饲料雨End, ⑤抓鸭签到 ⑥抓鸭签到返回键',
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          excludeMatches:
            '[text="饲料雨即将来袭" || (text^="剩余" && text$="秒" && left=0)][visibleToUser=true]', //饲料雨
          matches: [
            // '@Button[text="立即签到" || text="明天来喂鸭" || text^="继续喂" || text="愉快收下" || text="看广告翻10倍" || text^="领今日奖励"][clickable=true] <<n * - [id="app"] <<n [vid="webView"]',
            'Button[text="立即签到" || text="明天来喂鸭" || text^="继续喂" || text="愉快收下" || text="看广告翻10倍" || text^="领今日奖励"][clickable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/22871644', //今日签到 (有点慢)
            'https://i.gkd.li/i/22672386', //明天来喂鸭
            'https://i.gkd.li/i/22691480', //继续喂养
            'https://i.gkd.li/i/24035024', //继续喂鸭
            'https://i.gkd.li/i/22907925', //饲料雨End 愉快收下
            'https://i.gkd.li/i/24448092', //饲料雨End 翻10倍
            'https://i.gkd.li/i/22783039', //抓鸭签到 领今日奖励
            'https://i.gkd.li/i/23422233', //抓鸭签到
          ],
        },
        {
          key: 6,
          name: '⑥抓鸭签到-返回',
          preKeys: [1],
          action: 'back',
          excludeMatches: '[text="今日步数"]',
          // matches: '@[text="签到领奖励"] -n * <<2 [id="app"] <<n [vid="webView"]',
          matches:
            'Button[text^="待领取" || text^="已领取"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22783122', //待领取
            'https://i.gkd.li/i/23141489', //已领取
            'https://i.gkd.li/i/23422249', //待领取x2
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/24194609',
        },
        {
          key: 7,
          preKeys: [1],
          name: '②已签到-x掉',
          matches: [
            'Image[width>70 && width<85][height>70 || height<85][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/22871789',
            'https://i.gkd.li/i/23427798',
            'https://i.gkd.li/i/23542661',
            'https://i.gkd.li/i/23642766',
          ],
        },
      ],
    },
    // {
    //   key: 24,
    //   name: '🦆养鸭-饲料雨(test)',
    //   desc: '每晚8~10点',
    //   rules: [
    //     {
    //       actionCd: 150,  //真机测试1秒左右才点击1次😢
    //       position: {     //往下偏移
    //         left: 'width * 0.5000',
    //         top: 'width * 2.0000',  //上下范围大概 1.6~2.4 倍
    //       },
    //       matches: 'Image[text="饲料"][width>=159 && width<=163]',
    //       snapshotUrls: 'https://i.gkd.li/i/24078870',
    //       activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
    //     },
    //   ],
    // },
    {
      key: 33,
      name: '🦆养鸭-自动喂鸭',
      desc: '①领饲料球 ③6秒喂1次鸭',
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          name: '①领饲料球',
          matchDelay: 3000,
          actionMaximum: 1,
          resetMatch: 'match',
          excludeMatches:
            '[text="赚饲料" || text="签到提醒" || text="饲料雨即将来袭" || (text^="剩余" && text$="秒" && left=0) || text="今日饲料雨收获"][visibleToUser=true]',
          matches:
            '[id="app"][parent.childCount=1] >(7,8,9) [text="可领取" || text="已结束"] - * >(1,2) [text$="粒"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22883176',
            'https://i.gkd.li/i/23750724',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23695360', //出任务列表
        },
        {
          key: 2,
          preKeys: [1], // 必须限制,否则误触
          matches: 'Image[text=""][width=77 || height=77][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23567580',
        },
        {
          key: 3,
          name: '③6秒喂1次鸭',
          actionMaximum: 120,
          actionCd: 6000,
          excludeMatches:
            '[text="赚饲料" || text="签到提醒" || text="饲料雨即将来袭" || (text^="剩余" && text$="秒" && left=0) || text="今日饲料雨收获"][visibleToUser=true]',
          // matches: 'View[id="foodBottomIcon"] < * + [visibleToUser=true]',
          matches:
            '[id="app"][parent.childCount=1] >(6,7,8) View[id="foodBottomIcon"] < * + [visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22908125',
            'https://i.gkd.li/i/23381066',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/22850836',
            'https://i.gkd.li/i/23433012', // 误触页(快手)
            'https://i.gkd.li/i/24102410', //饲料雨即将来袭 去弹窗用 [id="app"][parent.childCount=1]
            'https://i.gkd.li/i/24078870', //饲料雨
            'https://i.gkd.li/i/22907925', //饲料雨End
          ],
        },
      ],
    },
    {
      key: 34,
      name: '🦆养鸭-赚饲料-任务',
      desc: '①去签到 ②领奖or去搜索or观看',
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          name: '①去签到',
          excludeMatches:
            '[text="饲料雨即将来袭" || (text^="剩余" && text$="秒" && left=0) || text="今日饲料雨收获"][visibleToUser=true]', //饲料雨
          matches: 'Button[text="去签到"][left>781][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24035851',
        },
        {
          key: 2,
          name: '②领奖or去搜索or观看',
          matchDelay: 500,
          forcedTime: 5000,
          excludeMatches:
            '[text="饲料雨即将来袭" || (text^="剩余" && text$="秒" && left=0) || text="今日饲料雨收获"][visibleToUser=true]', //饲料雨
          matches: [
            '[text$="3次" || text^="搜索并" || text="看精彩广告"] <<2 * + [text="领奖励" || text="去搜索" || text="去观看"][left>781][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23558181',
            // 'https://i.gkd.li/i/24279125', //未生效
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23558030', // [left=781]
        },
        {
          key: 3,
          preKeys: [2],
          name: '③误进直播间-返回键',
          action: 'back',
          matches:
            '[id="com.kuaishou.nebula.live_audience_plugin:id/live_slide_container"]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23561481',
          activityIds: [
            'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
          ],
        },
        {
          key: 4,
          preKeys: [2],
          name: '④误进看视频页-返回键',
          action: 'back',
          matches: '[vid="nasa_slide_play_view_pager_layout"]',
          fastQuery: true,
          // snapshotUrls: 'https://i.gkd.li/i/24123496', //快手
          activityIds: ['com.yxcorp.gifshow.detail.PhotoDetailActivity'],
        },
      ],
    },
    {
      key: 3501,
      name: '🔍任务页-搜索赚金币-去搜索',
      desc: '自动去搜索(❗遮挡可开shizuku强制点击)',
      enable: false,
      rules: [
        {
          // action: 'clickNode',
          // fastQuery: true,
          // matches: '@TextView[text="去搜索"][clickable=true] <2 [childCount=2] < [childCount=1] <n View[childCount>15] -n TextView <<4 [vid="webView"]',
          matches:
            '@TextView[text="去搜索"][clickable=true] - * > [text="搜索赚金币"]',
          snapshotUrls: 'https://i.gkd.li/i/24992823',
          activityIds: [
            'com.yxcorp.gifshow.HomeActivity', // A
            'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity', // B
            'com.gifshow.kuaishou.floatwidget.interceptactivity.GrowthInterceptWebViewActivity', // C
            'com.gifshow.kuaishou.floatwidget.activity.GrowthYodaWebViewActivity', // D
          ],
        },
      ],
    },
    {
      key: 35,
      name: '🔍搜索-倒计时结束-返回x2',
      desc: '按返回键2次',
      fastQuery: true,
      activityIds: 'com.yxcorp.plugin.search.SearchActivity',
      rules: [
        {
          key: 1,
          action: 'none',
          matches: '[vid="pendant_task_status"][text$=":01"]', // 倒计时01秒
          snapshotUrls: [
            'https://i.gkd.li/i/23689726',
            'https://i.gkd.li/i/23748508',
          ],
        },
        {
          key: 2,
          preKeys: [1],
          actionDelay: 1500,
          action: 'back',
          matches:
            '[vid="kem_activity_task_pendant"] >2 [vid="pendant_bg"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22850681',
        },
        {
          key: 3,
          preKeys: [2],
          action: 'back',
          matchDelay: 200,
          matches: '[text="搜索"][vid="right_button" || vid="right_tv"]',
          snapshotUrls: 'https://i.gkd.li/i/22702438',
        },
      ],
    },
    {
      key: 36,
      name: '🔍搜索页-自动点击搜索',
      desc: '1.5秒后点击搜索',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          actionDelay: 1500,
          actionCd: 4000,
          matches: [
            '[text="搜索"][vid="right_button" || vid="right_tv"][clickable=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22702438',
            'https://i.gkd.li/i/23381126',
          ],
          activityIds: 'com.yxcorp.plugin.search.SearchActivity',
        },
      ],
    },
    {
      key: 37,
      name: '🔍搜索页-开定位-以后再说',
      desc: '弹窗开定位-以后再说',
      rules: [
        {
          matches: [
            '[vid="title"][text="开启定位服务"]',
            '[vid="negative"][text="以后再说"][clickable=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23979856',
          activityIds: 'com.yxcorp.plugin.search.SearchActivity',
        },
      ],
    },
    {
      key: 38,
      name: '🎮小游戏-退出弹窗-x掉',
      desc: '弹窗->点击 知道了',
      fastQuery: true,
      activityIds: 'com.kwai.frog.game.engine.adapter.engine.base.', //小游戏Activity前缀
      rules: [
        {
          key: 1,
          matches:
            '@[clickable=true] >(1,2) TextView[text="知道了"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22864991',
            'https://i.gkd.li/i/22865094',
          ],
        },
        {
          key: 2,
          matches: '[text="以后再说"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 39,
      name: '🎮小游戏-退出-返回',
      desc: '点击 < ',
      rules: [
        {
          matches:
            'ImageView <<(1,2) @[clickable=true] < * + [text="我的小游戏"]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22865063',
          activityIds:
            'com.yxcorp.gifshow.minigame.sogame.home.SoGameNewListActivity',
        },
      ],
    },
    {
      key: 40,
      name: '🎮小游戏-获取用户资料弹窗-允许',
      desc: '点击允许',
      rules: [
        {
          matches: [
            '[vid="button_layout" || vid="bottom"] > [text="允许"][vid="confirm_btn" || vid="grant"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22865118',
            'https://i.gkd.li/i/22865162',
            'https://i.gkd.li/i/23381220',
          ],
          activityIds: 'com.yxcorp.login.authorization.AuthActivity',
        },
      ],
    },
    {
      key: 1101,
      name: '📘小说-领奖',
      desc: '①领奖 ②X掉弹窗',
      fastQuery: true,
      activityIds: 'com.kuaishou.novel.home.NovelHomeActivity',
      rules: [
        {
          key: 1,
          // actionDelay: 700,
          actionCd: 3500,
          matches:
            '@[clickable=true] > [text="立即领取"][id$="task_item_button"]',
          snapshotUrls: 'https://i.gkd.li/i/22658578',
        },
        {
          key: 2,
          matches: '[text="恭喜你获得"] - [vid="dialog_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/22672261',
        },
      ],
    },
    {
      key: 1102,
      name: '📘小说-开启自动阅读',
      desc: '点击 ①设置 ②开启自动阅读',
      fastQuery: true,
      activityIds: 'com.kuaishou.novel.home.read.ReaderActivityV2',
      rules: [
        {
          key: 1,
          name: '①设置',
          actionCd: 10000,
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + [text="设置"]',
          snapshotUrls: 'https://i.gkd.li/i/24738219',
        },
        {
          key: 2,
          preKeys: [1],
          name: '②开启自动阅读',
          matches: '[text="开启自动阅读"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24738167',
        },
      ],
    },
    {
      key: 1103,
      name: '📘小说-阅读页-广告-x掉',
      desc: '下方局部广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.kuaishou.novel.home.read.ReaderActivityV2',
          matches:
            '@ImageView[clickable=true] <<2 * - * > [text="立即下载" || text="立即打开" || text="去逛逛"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24738559',
            'https://i.gkd.li/i/24760376',
            'https://i.gkd.li/i/24994337',
          ],
        },
      ],
    },
    {
      key: 41,
      name: '去金币购-签到💰',
      desc: '点击今日签到',
      rules: [
        {
          matches:
            'TextView[text="今日签到"][index=parent.childCount.minus(1)][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22865238',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23380995',
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
        },
      ],
    },
    {
      key: 42,
      name: '逛街赚金币-自动领💰,退',
      desc: '①领金币(❗需冻结ks) ③返回键 ④弹窗-放弃',
      activityIds: 'com.yxcorp.gifshow.ad.rn.AdKwaiRnActivity',
      fastQuery: true,
      rules: [
        {
          key: 1,
          name: '①点击打开快手',
          actionDelay: 1500,
          matches:
            '@[text^="+"][text$="0"] + [text="打开快手"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23582148',
        },
        {
          key: 2,
          preKeys: [1], // 先点key1,再点key2 就会领两样金币
          name: '②点击签到',
          matches:
            '@[text^="+"][text$="0"] + [text="点击领取"][visibleToUser=true]',
        },
        {
          key: 3,
          // preKeys: [2],
          name: '③返回键',
          action: 'back',
          actionMaximum: 2,
          actionCd: 2500,
          resetMatch: 'app',
          excludeMatches: '@[text!="+10"] + [text="浏览领取"]', // 若是10金币,直接退出
          matches: '[text="明天签到"]',
          snapshotUrls: 'https://i.gkd.li/i/23582306',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23689548', // 120金币
        },
        {
          key: 4,
          name: '④退出(弹窗)-放弃',
          matches:
            '[text="继续浏览可获得奖励"] +3 [text="放弃"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22658647',
        },
      ],
    },
    {
      key: 43,
      name: '💤睡觉-领补贴',
      desc: '点击看广告领补贴',
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          matchDelay: 1000,
          actionMaximum: 1,
          resetMatch: 'app',
          matches:
            '@[clickable=true] >2 [text$="领起床补贴" || text$="领睡觉补贴" || text="开始起床" || text="开始睡觉"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23290616', //领起床补贴
            'https://i.gkd.li/i/23290617', //领睡觉补贴
          ],
        },
        {
          key: 2,
          action: 'back',
          actionDelay: 700,
          matches: '[text="已入睡" || text="已起床"][index=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/24368949', //已入睡
            'https://i.gkd.li/i/25098137', //已入睡
            'https://i.gkd.li/i/24309580', //已起床
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/24692945', //任务列表页 [index=1]
        },
      ],
    },
    {
      key: 44,
      name: '浏览ks商城30s后-领金币',
      desc: '点击去领取',
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 1,
          // excludeMatches: '[text="任务中心"]',
          matches: [
            '[vid="textView"][desc="商城"][visibleToUser=true]',
            '[text="去领取"][clickable=false][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23655591',
            'https://i.gkd.li/i/23655619',
            'https://i.gkd.li/i/23749982', //含 [text="任务中心"]
          ],
          // excludeSnapshotUrls: 'https://i.gkd.li/i/23658912',
        },
        {
          key: 2,
          preKeys: [1],
          matches: [
            '[text="已完成"]',
            'ViewGroup > ImageView[width=94][height=93 || height=94][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23655648',
            'https://i.gkd.li/i/23689450',
          ],
        },
      ],
    },
    {
      key: 45,
      name: '🚶‍♂️走路赚金币-领金币',
      desc: '点击领取xxx金币',
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          matchDelay: 1000,
          actionMaximum: 1,
          resetMatch: 'match',
          matches:
            '[text="今日步数"] < * <4 * + * >2 Button[text^="领取"][text$="金币"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23381371',
        },
        {
          key: 2, // 弹窗,点击开心收下(坐标)
          preKeys: [1],
          actionDelay: 2500,
          position: {
            left: 'width * 0.4945',
            top: 'width * 1.3142',
          },
          matches: '[text="今日步数"]',
          snapshotUrls: 'https://i.gkd.li/i/23907270',
        },
      ],
    },
    {
      key: 46,
      name: '🍚饭点-领补贴',
      desc: '①饭补 ②弹窗 ③待补签 ④左下角看广告',
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 1,
          name: '①中部-领饭补',
          matches:
            '[clickable=true][text^="领取饭补" || getChild(1).text$="领饭补"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24454732',
            'https://i.gkd.li/i/24673042',
          ],
        },
        {
          key: 2,
          name: '②弹窗',
          matches:
            '@[clickable=true][index=parent.childCount.minus(2)] > [text="看视频最高可得" || text="看广告最多再得"] +2 [text="金币"]',
          snapshotUrls: 'https://i.gkd.li/i/24455031',
        },
        {
          key: 3,
          name: '③上部-待补签',
          matches:
            '[text^="+"][text$="金币"] + [text$="待补签"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23381525',
        },
        {
          key: 4,
          name: '④左下角-看广告',
          actionCd: 5000,
          matches:
            '@[clickable=true][left=0] > TextView[text="看广告"][top>1800]',
        },
        {
          key: 5,
          name: '⑤弹窗-x掉',
          matches:
            '@[clickable=true] - [index=parent.childCount.minus(2)][getChild(0).text="看视频 赚更多"] -n [text^="恭喜获得"][text$="补贴"]',
          snapshotUrls: 'https://i.gkd.li/i/25074585',
        },
      ],
    },
    {
      key: 47,
      name: '🧍‍♂️用户资料页-拉黑',
      desc: '❗①弹窗拉黑 ②确认 ③已拉黑-返回', //遇到广告用户,或者ks偷偷给你关注的广告用户,可以拉黑
      enable: false,
      fastQuery: true,
      activityIds: 'com.yxcorp.gifshow.profile.activity.UserProfileActivity',
      rules: [
        {
          key: 1,
          name: '①弹窗拉黑',
          matches: '[vid="bottom_operation_item_text"][text="拉黑"]',
          snapshotUrls: 'https://i.gkd.li/i/23910599',
        },
        {
          key: 2,
          preKeys: [1],
          name: '②确认拉黑',
          matches: '[vid="positive"][text="确认拉黑"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23910626',
        },
        {
          key: 3,
          preKeys: [2],
          name: '③已拉黑-返回',
          action: 'back',
          matches: '[vid="tv_empty_desc"][text="已拉黑"]',
          snapshotUrls: 'https://i.gkd.li/i/23910639',
        },
      ],
    },
    {
      key: 48,
      name: '局部广告-提现完-优惠券弹窗',
      desc: '①x掉 ②返回键 ③弹窗-点击[知道了]',
      activityIds: 'com.yxcorp.gateway.pay.activity.PayYodaWebViewActivity',
      rules: [
        {
          key: 1,
          name: '①x掉',
          fastQuery: true,
          matches:
            '[text="优惠券即将到期"] - @View[clickable=true][width<80][getChild(0).name$="TextView"] < View <2 View <3 WebView <<3 [vid="web_view_container"]',
          exampleUrls: 'https://e.gkd.li/a5083e28-4cf6-454a-b37f-12cc06781c9a',
          snapshotUrls: 'https://i.gkd.li/i/25730266',
        },
        {
          key: 2,
          preKeys: [1],
          name: '②返回键',
          action: 'back',
          actionDelay: 200,
          matches: '[parent=null]',
        },
        {
          key: 3,
          name: '③弹窗-点击[知道了]',
          fastQuery: true,
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
          matches:
            '@[text="知道了"][clickable=true] -n [text*="领取成功"] <<2 [index=parent.childCount.minus(1)] <6 WebView <<2 [vid="webView"]',
          snapshotUrls: 'https://i.gkd.li/i/25730402',
        },
      ],
    },
  ],
});
