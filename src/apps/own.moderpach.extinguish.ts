import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'own.moderpach.extinguish',
  name: 'Extinguish',
  groups: [
    {
      key: 1,
      name: '功能类-自动[启动]后返回',
      desc: '①点击[启动] ②返回键',
      enable: false,
      matchTime: 1200,
      activityIds: '.MainActivity',
      rules: [
        {
          key: 1,
          name: '①点击[启动]',
          matches: 'Button - [text="启动"] < [clickable=true]',
          exampleUrls: [
            // 'https://e.gkd.li/b3054290-5f5e-4a12-ad60-e3b455c0425c', // .png [200kB]
            // 'https://e.gkd.li/efdff5ae-920f-45e5-a968-cdaf8fce4fc5', // .webP [43kB] 测试 ✅
            // 'https://e.gkd.li/ec071db7-f19b-42ba-8453-5f5c346df3b5', // .gif [2.56MB] 动态图 (❌在快照审查页上传后被github转成静态)
            // 'https://e.gkd.li/db67566f-1902-464f-8736-e2cdb1dea39e', // gif --> webP [214kB] 动态图 (❌在快照审查页上传后被github转成静态)
            'https://pic1.imgdb.cn/item/69ad1426001548a02b691a88.webp', // gif --> webP [214kB] 动态图 ✅图床版
          ],
          snapshotUrls: 'https://i.gkd.li/i/25821346',
        },
        {
          preKeys: [1],
          name: '②返回键',
          action: 'back',
          actionDelay: 120, // 预留给key1 的点击时间
          matches: '[parent=null]',
        },
      ],
    },
  ],
});
