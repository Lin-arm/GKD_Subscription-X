import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.telegram.plus',
  name: 'Plus Messenger',
  groups: [
    {
      key: 1,
      name: '功能类-更多-①保存到相册',
      desc: '右上角菜单-点击[保存到相册]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          matches: '@[clickable=true][left>350] > [text="保存到相册"]',
          snapshotUrls: 'https://i.gkd.li/i/24337783',
          excludeSnapshotUrls: 'https://i.gkd.li/i/24450853', // [left=83]
          exampleUrls: 'https://e.gkd.li/d09a281b-5652-4072-ae19-42d944f01d95',
          activityIds: 'org.telegram.ui.LaunchActivity',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-更多-②只保存单个媒体',
      desc: '弹窗-点击 [这张图片]或[这个媒体]',
      rules: [
        {
          fastQuery: true,
          matches:
            '[getChild(0).text^="保存"] +2 * > [text="这张图片" || text="这个媒体"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22945715', //图片
            'https://i.gkd.li/i/22945853', //视频
          ],
          exampleUrls: 'https://e.gkd.li/9225eb21-84e6-4baa-88c5-f5dc2230c111',
          activityIds: 'org.telegram.ui.LaunchActivity',
        },
      ],
    },
  ],
});
