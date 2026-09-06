import source from '../content/pages.json';
export type Block={type:string;text?:string;src?:string;alt?:string};
export type Person={image:string;name:string;description:string;links:string[]};
export type PageData={title:string;blocks:Block[];people?:Person[]};
export const pages=source as Record<string,PageData>;
export const groups=[{title:'소개',en:'ABOUT THE CENTER',items:[['greeting','인사말'],['about','센터소개'],['org-chart','조직'],['contact','Contact']]},{title:'연구분야',en:'RESEARCH',items:[['data-process-science','Data & Process Science'],['data-science','Data Science'],['process-science','Process Science'],['dps-application-group','DPS Application Group']]},{title:'구성원',en:'PEOPLE & PARTNERS',items:[['participating-professor','참여 교수'],['cooperative-professor','협력 교수'],['partners','협력 기업']]},{title:'소식',en:'NEWS & UPDATES',items:[['result','연구성과'],['notice','공지사항']]}];
