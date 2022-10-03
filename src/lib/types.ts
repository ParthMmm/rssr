export interface Root {
  _declaration: Declaration;
  rss: Rss;
}

export interface Declaration {
  _attributes: Attributes;
}

export interface Attributes {
  version: string;
  encoding: string;
}

export interface Rss {
  _attributes: Attributes2;
  channel: Channel;
}

export interface Attributes2 {
  version: string;
  "xmlns:content": string;
  "xmlns:wfw": string;
  "xmlns:dc": string;
  "xmlns:atom": string;
  "xmlns:sy": string;
  "xmlns:slash": string;
}

export interface Channel {
  title: Title;
  "atom:link": AtomLink;
  link: Link;
  description: Description;
  lastBuildDate: LastBuildDate;
  language: Language;
  "sy:updatePeriod": SyUpdatePeriod;
  "sy:updateFrequency": SyUpdateFrequency;
  generator: Generator;
  image: Image;
  item: Item[];
}

export interface Title {
  _text: string;
}

export interface AtomLink {
  _attributes: Attributes3;
}

export interface Attributes3 {
  href: string;
  rel: string;
  type: string;
}

export interface Link {
  _text: string;
}

export interface Description {
  _text: string;
}

export interface LastBuildDate {
  _text: string;
}

export interface Language {
  _text: string;
}

export interface SyUpdatePeriod {
  _text: string;
}

export interface SyUpdateFrequency {
  _text: string;
}

export interface Generator {
  _text: string;
}

export interface Image {
  url: Url;
  title: Title2;
  link: Link2;
  width: Width;
  height: Height;
}

export interface Url {
  _text: string;
}

export interface Title2 {
  _text: string;
}

export interface Link2 {
  _text: string;
}

export interface Width {
  _text: string;
}

export interface Height {
  _text: string;
}

export interface RawItem {
  title: Title3;
  link: Link3;
  comments: Comments;
  "dc:creator": DcCreator;
  pubDate: PubDate;
  category: Category[];
  guid: Guid;
  description: Description2;
  "content:encoded": ContentEncoded;
  "wfw:commentRss": WfwCommentRss;
  "slash:comments": SlashComments;
}

export interface Title3 {
  _text: string;
}

export interface Link3 {
  _text: string;
}

export interface Comments {
  _text: string;
}

export interface DcCreator {
  _cdata: string;
}

export interface PubDate {
  _text: string;
}

export interface Category {
  _cdata: string;
}

export interface Guid {
  _attributes: Attributes4;
  _text: string;
}

export interface Attributes4 {
  isPermaLink: string;
}

export interface Description2 {
  _cdata: string;
}

export interface ContentEncoded {
  _cdata: string;
}

export interface WfwCommentRss {
  _text: string;
}

export interface SlashComments {
  _text: string;
}

export interface Item {
  id: Id;
  title: Title;
  link: Link;
  tags: Tag[];
  content: string;
  image?: string;
  date: PubDate;
  author: DcCreator;
}

export interface Id {
  _attributes: Attributes;
  _text: string;
}

export interface Tag {
  _cdata: string;
}
