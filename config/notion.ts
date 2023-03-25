import { Client } from '@notionhq/client';

export const notion = new Client({
  auth: process.env.NOTION_SECRET,
  notionVersion: '2022-02-22'
});

export const databaseId = process.env.NOTION_DBID;
(() => console.log('yup'))();

(async () => {
  await notion.search({}).then((res) => {
    console.log('Notion works.');
  });
})();
