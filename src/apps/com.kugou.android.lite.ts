import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kugou.android.lite',
  name: '酷狗概念版',
  groups: [
    {
      key: 1,
      name: '功能类-此歌无版权时[返回]',
      desc: '[返回]听歌识曲',
      enable: false,
      fastQuery: true,
      activityIds: 'com.kugou.android.app.MediaActivity',
      rules: [
        {
          key: 0,
          action: 'back',
          matches: '[text*="这首歌我们暂无版权"]',
          snapshotUrls: 'https://i.gkd.li/i/29511498',
        },
        {
          key: 1,
          preKeys: [0],
          action: 'back',
          matches: '[text*=":"] - [text*=":"]',
          snapshotUrls: 'https://i.gkd.li/i/29511499',
        },
      ],
    },
  ],
});
