import {notFound} from 'next/navigation';
import {pages,groups} from '../../lib/content';
import ContentPage from '../../components/content-page';
export function generateStaticParams(){return groups.flatMap(g=>g.items.map(([slug])=>({slug})))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return {title:pages[slug]?.title||(slug==='notice'?'공지사항':'연구성과')}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(slug==='notice')return <ContentPage slug={slug} data={{title:'공지사항',blocks:[]}}><a className="news-item notice-link" href="/notice/ceremony/"><time>2025.04.24 · 행사</time><h2>Wil van der Aalst 데이터 &amp; 프로세스 사이언스 연구센터 현판식 개최</h2><p>Plaque Unveiling Ceremony ↗</p></a></ContentPage>;if(slug==='result')return <ContentPage slug={slug} data={{title:'연구성과',blocks:[]}}><p className="empty">등록된 게시글이 없습니다.</p></ContentPage>;const data=pages[slug];if(!data||slug==='ceremony')notFound();return <ContentPage data={data} slug={slug}/>}
