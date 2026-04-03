import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '🌾农场-自动领肥料',
      desc: '①施满n次肥 ②兔兔挖肥料 ③右边肥料袋',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1500, //节点加载缓慢,延迟匹配
      activityIds: [
        'com.taobao.themis.container.app.TMSActivity', // A
        'com.taobao.browser.BrowserActivity', // B
        'com.taobao.tao.welcome.Welcome', // C
      ],
      rules: [
        {
          key: 1,
          name: '①施满n次肥-领取',
          actionCd: 2000, //点击后有弹窗动画耗时
          matches:
            '@Button[text$="肥料 领取"][clickable=true] <<8 View[id="ice-container"] <3 WebView[text="芭芭农场"] <<(6,7) [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23240421', //A 有肥料领: 中
          ],
        },
        {
          key: 2,
          name: '②兔兔挖肥料-领取',
          actionCd: 5000,
          matches:
            '@Button[text^="兔兔挖肥料"][clickable=true] <3 View[childCount=7] <<5 WebView[text="芭芭农场"] <<(6,7) [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23263684', //B 有肥料领: 左,中
            'https://i.gkd.li/i/24163618', //C 有肥料领: 左,右
          ],
        },
        {
          key: 3,
          name: '③右边肥料袋-领取',
          actionMaximum: 1,
          actionDelay: 1800,
          resetMatch: 'app',
          matches:
            '@Button[text$="肥料，点击领取"][clickable=true] <5 View[childCount=7] <<5 WebView[text="芭芭农场"] <<(6,7) [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/23393987', //B 有肥料领: 右
        },
      ],
    },
    {
      key: 2,
      name: '🌾农场-弹窗-x掉',
      desc: '①施肥大礼包 ②首页进入 ③明天提醒',
      order: 2, //无快查,降低优先级
      rules: [
        {
          matches: [
            // 'Button[text="" || text="关闭"][width=107 || width=108][height>=107 && height<=110][clickable=true][focusable=true]',
            '[name$="TextView" || name$="Button"][text="" || text="关闭"][width=107 || width=108][height>=107 && height<=110][clickable=true || focusable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23300544', //恭喜获得施肥大礼包
            'https://i.gkd.li/i/23393863', //从淘宝首页进入农场
            'https://i.gkd.li/i/23468858', //恭喜领到大量肥料
            'https://i.gkd.li/i/23413567', //明日7点后记得来领
            'https://i.gkd.li/i/23581433', //明日7点后记得来领
            'https://i.gkd.li/i/24353133', //浏览精选商品
          ],
          activityIds: [
            'com.taobao.themis.container.app.TMSActivity',
            'com.taobao.browser.BrowserActivity',
            'com.taobao.tao.welcome.Welcome',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '💰淘金币-签到',
      rules: [
        {
          fastQuery: true,
          matchRoot: true,
          activityIds: [
            'com.taobao.tao.welcome.Welcome', // A
            'com.taobao.themis.container.app.TMSActivity', // B
          ],
          matches:
            '[text*="签到"] < @[clickable=true] <2 [childCount=3] <(2,3) View <(2,3) View < [childCount=3] <2 [id="ice-container"] <<(9,13) [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/25199367', //A
            'https://i.gkd.li/i/24993351', //B
            'https://i.gkd.li/i/25126165', //B
            'https://i.gkd.li/i/26468417', //B <<(9,13) 的13
          ],
        },
      ],
    },
  ],
});
