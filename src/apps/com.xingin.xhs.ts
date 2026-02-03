import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xingin.xhs',
  name: '小红书',
  groups: [
    {
      key: 6,
      name: '功能类-评论区-自动展开回复',
      desc: '自动展开更多回复',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xingin.matrix.notedetail.NoteDetailActivity',
          matches:
            '@[clickable=true] > [vid="loadMoreTV"][text^="展开"][text$="回复"]',
          snapshotUrls: 'https://i.gkd.li/i/25048251',
        },
      ],
    },
  ],
});
