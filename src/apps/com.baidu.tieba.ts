import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
  groups: [
    {
      key: 17,
      name: '功能类-自动[保存到相册]',
      desc: '长按图片后, 点击[保存到相册]',
      enable: false,
      fastQuery: true,
      actionCd: 300,
      forcedTime: 3600000, // 主动查询1小时,否则第二次长按后不会触发
      rules: [
        {
          key: 0,
          activityIds: '.pb.pb.main.PbActivity',
          matches: '[text="保存到相册"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/29578440',
        },
        {
          key: 1,
          activityIds: '.image.ImageViewerActivity',
          matches: '@[clickable=true] > [text="保存到相册"]',
          snapshotUrls: 'https://i.gkd.li/i/29578065',
        },
      ],
    },
  ],
});
