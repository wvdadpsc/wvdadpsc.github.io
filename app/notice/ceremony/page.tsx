import ContentPage,{Article} from '../../../components/content-page';
import {pages} from '../../../lib/content';
export const metadata={title:'연구센터 현판식 개최'};
export default function Ceremony(){return <ContentPage data={pages.ceremony} slug="notice"><p className="eyebrow">2025.04.24 · 행사</p><Article data={pages.ceremony} slug="ceremony"/><a className="text-link" href="/notice/">← 공지사항 목록</a></ContentPage>}
