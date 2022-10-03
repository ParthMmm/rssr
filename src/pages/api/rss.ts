import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { xml2js } from 'xml-js';
import { JSDOM } from 'jsdom';
import { RawItem } from '../../lib/types';

async function getImage(link: string) {
  try {
    const re = /\?.*/;
    const response = await axios.get(link);
    const dom = new JSDOM(response?.data);

    const url = dom?.window?.document?.querySelector('img')?.src;

    const strippedUrl = url?.replace(re, '');

    return strippedUrl;
  } catch (err) {
    console.log(err);
    return null;
  }
}

type OptionsMap = {
  [key: string]: string;
};

const optionsMap: OptionsMap = {
  startups: 'https://techcrunch.com/startups/feed/',
  gadgets: 'https://techcrunch.com/gadgets/feed/',
  greentech: 'https://techcrunch.com/greentech/feed/',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const filter = req.query.filter as string;
  const url = optionsMap[filter] as string;

  const rssFeed: any = await axios
    .get(url)
    .then((res) => res.data)

    .then((data) => xml2js(data, { compact: true }))
    .then((js) => {
      return js;
    });

  const items = rssFeed?.rss?.channel?.item;

  const posts = await Promise.all(
    items.map(async (item: RawItem) => {
      const content = item['content:encoded']._cdata;
      const dom = new JSDOM(content);

      const imageURL = await getImage(item.link._text);

      return {
        id: item.guid,
        title: item.title,
        description: dom?.window?.document?.querySelector('h4')?.textContent,
        // date: format(parseISO(item.isoDate), "MMMM d, yyyy"),
        date: item.pubDate,
        image: imageURL,
        link: item.link,
        tags: item.category,
        author: item['dc:creator'],
        content,
      };
    })
  );

  res.status(200).json([posts]);
};
