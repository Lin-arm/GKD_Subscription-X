import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
  groups: [
    {
      key: 17,
      name: '功能类-自动[保存][原图]到相册',
      desc: '长按图片后, ①[查看原图] ②长按图片 ③[保存到相册]',
      enable: false,
      fastQuery: true,
      forcedTime: 3600000, // 主动查询1小时,否则第二次长按后不会触发
      activityIds: '.image.ImageViewerActivity',
      rules: [
        {
          key: 0,
          name: '①点击[查看原图]',
          actionMaximum: 1,
          matches: '@[clickable=true] > [text="查看原图"]',
          snapshotUrls: 'https://i.gkd.li/i/29578065',
        },
        {
          key: 1,
          preKeys: [0],
          name: '②长按图片',
          actionMaximum: 1,
          action: 'longClickCenter', // 长按
          position: {
            left: 'width/2',
            top: 'height/2',
          },
          matches: '[id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/29737932',
        },
        {
          key: 10,
          preKeys: [0, 1],
          name: '③点击[保存到相册]',
          matches: '@[clickable=true] > [text="保存到相册"]',
          snapshotUrls: 'https://i.gkd.li/i/29738335',
          // excludeSnapshotUrls: 'https://i.gkd.li/i/29578065', //未 查看原图, [index=1]
          exampleUrls: 'https://e.gkd.li/a392135e-16fc-42aa-b60c-a066eefe74f6',
        },
        {
          key: 11,
          name: '③点击[保存到相册]2',
          actionDelay: 800, // key10的补充,有些图片前置并没有[查看原图]的操作
          matches: '@[clickable=true] > [text="保存到相册"]',
          snapshotUrls: 'https://i.gkd.li/i/29738335',
        },
        {
          key: 12,
          name: '④直接[保存到相册]',
          activityIds: '.pb.pb.main.PbActivity',
          matches: '[text="保存到相册"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/29578440',
          exampleUrls: 'https://e.gkd.li/9c23b1d2-b2c0-424a-95de-2af00dcccf4d',
        },
      ],
    },
  ],
});
