import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xingin.xhs',
  name: '小红书',
  groups: [
    {
      key: 1,
      name: '功能类-分享时自动[复制链接]',
      desc: '复制到wx抖快小程序解析,可无水印下载',
      fastQuery: true,
      activityIds: 'com.xingin.matrix.notedetail.NoteDetailActivity',
      rules: [
        {
          key: 0,
          name: '①右上角分享-[复制链接]',
          matches: '@[vid="shareLayout"][clickable=true] >2 [text="复制链接"]',
          snapshotUrls: 'https://i.gkd.li/i/26480990', //点击帖子右上角分享后出现
        },
        {
          key: 1,
          name: '②长按图片-[复制链接]',
          actionCd: 300,
          matches: '@[clickable=true] > ImageView + [text="复制链接"]',
          snapshotUrls: 'https://i.gkd.li/i/26480989', //长按图片后出现
        },
      ],
    },
  ],
});
