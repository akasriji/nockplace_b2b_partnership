"use strict";

const card = (title, copy) => '<div class="card"><h3>'+title+'</h3><p>'+copy+'</p></div>';
const grid = (size, ...items) => '<div class="grid '+size+'">'+items.join('')+'</div>';
const asset = (name, alt) => '<img class="asset" src="'+name+'.webp" alt="'+alt+'">';
const button = (route, label) => '<div class="no-print"><button class="button" data-demo="'+route+'">'+label+'</button></div>';
const screen = (title, ...rows) => '<div class="screen"><b>'+title+'</b>'+rows.map(row=>'<div class="tile">'+row+'</div>').join('')+'</div>';
const map = '<div class="map"><span class="pin">베이커리</span><span class="pin">카페</span><span class="pin">매장</span></div>';
const banner = '<div class="callout">동네생활 상단 배너 예시 · 우리 동네 베이커리 주말 소식</div>';
const townSource = '노크타운 광고상품소개서 2026.4Q';
const brandSource = '노크플레이스 브랜드소개서';
const salesSource = '노크플레이스 서비스소개서 · 입점';
const guideSource = '노크플레이스 사장님 가이드';
const sample = '<p class="mini-note">노크플레이스 화면 구성 예시</p>';

const pages = [
 ['제휴 제안','노크플레이스<br>B2B 제휴 제안','아파트 생활권에서 매장을 발견하고, 채팅과 픽업 주문으로 연결합니다.',
  grid('two',asset('neighborhood','아파트 생활권과 주변 매장 개념도'),card('아파트와 가까운 매장','입주민에게 매장과 혜택을 알리고, 고객 문의와 픽업 주문을 한곳에서 관리할 수 있습니다.'))+button('home','입주민 데모 보기'),brandSource+' 10쪽'],
 ['회사 소개','트러스테이','트러스테이는 주거 생활에 필요한 서비스를 연결하는 주거 플랫폼 기업입니다.',
  '<div class="callout">TRUSTAY　/　nock 주거 통합 플랫폼</div>'+grid('three',card('노크타운','입주민의 일상과 단지 생활을 지원하는 주거 플랫폼'),card('노크존','아파트 커뮤니티 시설 예약과 운영 관리'),card('노크플레이스','생활권 주변의 시설과 매장을 입주민에게 연결')),townSource+' 2쪽'],
 ['도입 사례','노크 플랫폼 도입 단지','대표 도입 단지를 통해 노크 플랫폼의 적용 사례를 소개합니다.',
  asset('complexes','노크 플랫폼 대표 도입 단지 사진과 단지명'),townSource+' 3쪽'],
 ['서비스 소개','입주민 생활 플랫폼, 노크타운','시설예약, 타운마켓, 중고거래 등 입주민이 일상에서 사용하는 기능을 제공합니다.',
  asset('town','노크타운 홈 및 시설예약·타운마켓·중고거래 화면'),townSource+' 4쪽'],
 ['도입 규모','노크타운 도입 규모와 성장','노크타운 서비스 지표 · 2026년 9월 기준',
  grid('three',card('누적 가입자','<span class="stat">100만+</span>'),card('도입 단지','<span class="stat">1,300+</span>'),card('월간 활성 이용자','<span class="stat">70만+</span>'))+
  card('도입 단지 및 이용자 확대','광고상품소개서에는 이전 도입 규모 301단지와 MAU 12만이 함께 제시돼 있습니다.'),townSource+' 5쪽'],
 ['이용자 구성','실거주 인증 기반의 입주민 접점','노크타운은 관리사무소를 통해 실거주 인증을 진행합니다.',
  grid('two',card('연령대','<span class="stat">70% 이상</span><br>30–54세 이용자 비중'),card('성별 분포','<span class="stat">56% · 44%</span><br>남성 · 여성<div class="bar"><i style="width:56%"></i></div>'))+
  '<p class="mini-note">노크타운 지표 · 2026년 9월 기준</p>',townSource+' 6쪽'],
 ['도입 지역','수도권과 전국 주요 거점','노크타운 도입 단지의 지역 분포 · 2026년 9월 기준',
  grid('two',asset('region','노크타운 도입 단지 지역 분포 지도'),'<div class="grid">'+card('수도권 75%','서울 21.6% · 경기·인천 53.4%')+card('그 외 지역 25%','부산·대구 등 주요 광역시와 지방 거점')+'</div>'),townSource+' 7쪽'],
 ['제공 항목','노크플레이스 B2B 제공 항목','제휴 매장은 고객에게 매장을 알리고, 채팅과 픽업 주문을 운영할 수 있습니다.',
  grid('four',card('매장 큐레이션','기본 제공 · 동네생활에서 매장과 혜택 소개'),card('지도 노출','주변 매장 탐색과 상세 정보 확인'),card('채팅방 운영','매장 소식, 메뉴 안내, 고객 문의'),card('픽업 주문','고객 주문 접수와 매장 픽업 관리'))+
  '<div class="callout">배너 제공 가능 · 금액 및 기간 별도 협의</div>',salesSource+' 10–11쪽 · 제휴 제공 범위'],
 ['매장 큐레이션','동네 콘텐츠에서 매장 발견','주변 매장의 소식과 혜택을 동네생활과 동네소통에서 확인합니다.',
  grid('three','<div class="screen"><b>매장 큐레이션 · 피그마 디자인</b>'+asset('curation','역삼동 인기 매장 큐레이션 디자인')+'</div>',screen('동네소통','분위기 좋은 루프탑 카페','동네 이웃의 장소 추천'),screen('[case] 카드','매장과 혜택 소개','매장 상세 보기'))+sample+button('home','동네생활 데모 보기'),brandSource+' 11–13쪽 · 피그마 핸드오프'],
 ['지도 노출','생활권 지도에서 주변 매장 확인','업종을 살펴보고 지도나 목록에서 매장을 선택해 위치와 혜택을 확인합니다.',
  grid('two','<div class="screen"><b>동네 지도</b>'+map+'</div>',screen('매장 목록과 상세','우리 동네 베이커리 · 도보권','메뉴 · 위치 · 입주민 전용 쿠폰'))+sample+button('map','지도 데모 보기'),salesSource+' 10쪽 · 실서비스 화면 참고'],
 ['채팅방 운영','동네가게 특가 채팅방','고객은 특가와 메뉴를 보고 문의하고, 사장님은 더보기에서 채팅 목록을 확인합니다.',
  grid('two',screen('입주민 · 동네가게 특가 채팅방','오늘 마감 할인 소식','메뉴 보기 · 재고 문의'),screen('사장님 · 더보기','사장님 프로필','채팅 목록 → 우리 동네 베이커리 주문채팅방'))+sample+button('chat','채팅방 데모 보기'),brandSource+' 12–13쪽 · 실서비스 화면 참고'],
 ['픽업 주문','혜택을 확인하고 매장에서 픽업','마감 할인 상품을 예로 든 픽업 흐름입니다.',
  grid('three',screen('01 · 메뉴 선택','마감 할인 빵 세트','픽업 메뉴와 가격 확인'),screen('02 · 픽업 주문','상품 선택','주문 상태 확인'),screen('03 · 매장 픽업','준비 완료 안내','매장에서 상품 수령'))+sample+button('pickup','픽업 주문 데모 보기'),salesSource+' 10쪽'],
 ['배너 노출','동네생활 상단 배너','브랜드 행사나 프로모션을 동네생활 상단에서 소개할 수 있습니다.',
  banner+grid('two',screen('입주민 · 동네생활','상단 배너에서 제휴 소식 확인'),screen('사장님 · 더보기','배너 노출 예시 화면'))+
  '<div class="callout">배너 제공 가능 · 금액 및 기간 별도 협의</div>'+sample+button('banner','배너 데모 보기'),salesSource+' 11쪽 · '+townSource+' 8쪽 구성 참고'],
 ['제휴 진행','입점 사례와 제휴 진행','입점 자료에서 발췌한 고객 반응과 제휴 시작 절차입니다.',
  grid('two',card('오씨네 축산','아파트 입주민에게 매장을 알릴 수 있다는 점을 긍정적으로 평가했습니다.'),card('SKT 대리점 연수로데오점','전단지와 관리비 고지서 광고를 써본 뒤, 입주민에게 직접 도달하는 디지털 지면을 긍정적으로 평가했습니다.'))+
  '<div class="callout">대상 지역·참여 매장 협의 → 매장 정보 등록·검수 → 노출 시작</div>',brandSource+' 15쪽 · '+salesSource+' 12·14쪽'],
 ['사장님 매장 운영','사장님은 매장을 이렇게 운영합니다','사장님 홈에서 메뉴와 채팅방을 관리하고, 주문 접수부터 픽업 완료와 매출 확인까지 처리합니다.',
  grid('owner expanded','<div class="screen owner-reference"><b>매장 관리 · 사장님 가이드</b>'+asset('owner-guide','사장님 가이드의 매장 관리 화면')+'</div>',screen('사장님 홈 · 매장관리','영업 준비 중　│　영업시작','메뉴 설정　│　주문관리','매출 내역　│　채팅방 관리','매장정보 관리　│　쿠폰 관리','홍보 관리'),grid('two',screen('메뉴 설정','빵 세트　│　품절 처리'),screen('주문관리','픽업 주문 접수','준비 완료 → 픽업 완료'),screen('매출 내역','오늘 · 이번 주 · 이번 달','기간별 매출 확인'),screen('채팅방 관리','더보기 → 채팅 목록','주문채팅방과 메뉴판 확인')))+
  '<p class="mini-note">예시 화면 · 매장 소식과 쿠폰도 관리할 수 있습니다.</p>'+button('owner','사장님 데모 보기'),guideSource+' 9–11쪽 · 실서비스 화면 참고']
];

document.querySelector('#deck').innerHTML = pages.map(([label,title,lead,body,source],i)=>{
 const number=String(i+1).padStart(2,'0');
 const heading=i===0?'h1':'h2';
 return '<section class="page '+(i===0?'dark':'')+'" id="p'+number+'"><div class="eyebrow">'+label+'</div><'+heading+'>'+title+'</'+heading+'><p class="lead">'+lead+'</p><div class="body">'+body+'</div><footer class="foot"><span>'+source+'</span><span>'+number+' / 15</span></footer></section>';
}).join('');

const dialog=document.querySelector('#demo');
const container=document.querySelector('#demo-content');
const state={route:'home',order:0,soldOut:false,reply:false,unsubscribed:false,period:'오늘',detail:false};
const customerRoutes={home:'동네생활',feed:'동네소통',map:'지도',chat:'특가 채팅방',pickup:'픽업'};
const ownerRoutes={owner:'사장님 홈',more:'더보기',menu:'메뉴',orders:'주문관리',sales:'매출'};
const orderStates=['주문 전','주문 접수 대기','주문 접수 완료','픽업 준비 완료','픽업 완료'];
const action=(id,label,disabled=false)=>'<button type="button" data-action="'+id+'" '+(disabled?'disabled':'')+'>'+label+'</button>';
const routes=(items)=>Object.entries(items).map(([id,label])=>'<button type="button" data-route="'+id+'" aria-current="'+(state.route===id)+'">'+label+'</button>').join('');
const go=(id,label)=>'<button type="button" data-route="'+id+'">'+label+'</button>';
const actions=(...items)=>'<div class="actions">'+items.join('')+'</div>';
function renderDemo(){
 const views={
  home:()=>banner+screen('슬기로운 동네생활','우리 동네 베이커리 · 입주민 전용 쿠폰','[case] 카드 · 마감 할인 픽업')+actions(go('banner','배너 보기'),go('map','매장 지도'),go('chat','동네가게 특가 채팅방')),
  feed:()=>screen('동네소통','분위기 좋은 루프탑 카페','동네 이웃 추천 · 분위기 좋은 테라스')+actions(go('map','주변 매장 보기')),
  map:()=>'<div class="map">'+action('detail','베이커리')+'<span class="pin">카페</span></div>'+(state.detail?screen('우리 동네 베이커리','영업시간 10:00–20:00','입주민 전용 쿠폰 · 매장 픽업'):actions(action('detail','매장 상세 보기')))+actions(go('chat','채팅으로 문의')),
  chat:()=>screen('우리 동네 베이커리 특가 채팅방','사장님 · 오늘 18시부터 빵 세트 마감 할인합니다.',...(state.reply?['고객 · 픽업 가능한가요?','사장님 · 메뉴에서 픽업 주문하실 수 있어요.']:[]))+actions(action('reply','픽업 문의'),go('pickup','메뉴와 픽업 주문')),
  pickup:()=>screen('픽업 주문','마감 할인 빵 세트 · 8,000원'+(state.soldOut?' · 품절':''),orderStates[state.order])+actions(action('order','픽업 주문하기',state.soldOut||state.order>0),go('orders','사장님 주문관리로 이동')),
  banner:()=>banner+screen('배너 상세','우리 동네 베이커리 · 주말 매장 소식')+actions(go('more','사장님 더보기')),
  owner:()=>screen('사장님 홈 · 매장관리',state.unsubscribed?'미구독 상태 · 구독 상태 확인':'영업 준비 중','메뉴 설정 · 주문관리 · 매출 내역 · 채팅방 관리')+actions(action('subscription',state.unsubscribed?'기본 화면 보기':'미구독 케이스 보기'),go('more','채팅방 관리')),
  more:()=>screen('더보기 · 사장님','우리 동네 베이커리','메뉴 설정 · 배너 노출 · 채팅 목록')+actions(go('menu','메뉴'),go('banner','배너 노출'),go('chatlist','채팅 목록')),
  chatlist:()=>screen('채팅 목록','우리 동네 베이커리의 주문채팅방')+actions(go('chat','채팅방 열기'),go('more','더보기로 돌아가기')),
  menu:()=>screen('메뉴 설정','마감 할인 빵 세트 · 8,000원 · '+(state.soldOut?'품절':'판매 중'))+actions(action('stock',state.soldOut?'판매 재개':'품절 처리')),
  orders:()=>screen('주문관리',state.order?'빵 세트 1개 · 픽업 · '+orderStates[state.order]:'아직 주문이 없어요.')+actions(state.order===0?go('pickup','샘플 주문 만들기'):action('advance',['','주문 접수','준비 완료','픽업 완료','픽업 완료'][state.order],state.order===4)),
  sales:()=>screen('매출 내역',state.period+' · 샘플 매출 '+(state.order===4?'8,000원':'0원'))+actions(...['오늘','이번 주','이번 달'].map(period=>action(period,period)))
 };
 container.innerHTML=actions(routes(customerRoutes))+actions(routes(ownerRoutes))+'<div class="demo-panel">'+views[state.route]()+'</div>'+actions(action('reset','데모 초기화'));
}
document.querySelector('#deck').addEventListener('click',event=>{
 const trigger=event.target.closest('[data-demo]');
 if(!trigger)return;
 state.route=trigger.dataset.demo;
 renderDemo();
 dialog.showModal();
});
container.addEventListener('click',event=>{
 const trigger=event.target.closest('button');
 if(!trigger)return;
 const {route,action:id}=trigger.dataset;
 if(route)state.route=route;
 if(id==='detail')state.detail=true;
 if(id==='reply')state.reply=true;
 if(id==='order'&&!state.soldOut&&!state.order)state.order=1;
 if(id==='advance'&&state.order>0&&state.order<4)state.order++;
 if(id==='stock')state.soldOut=!state.soldOut;
 if(id==='subscription')state.unsubscribed=!state.unsubscribed;
 if(['오늘','이번 주','이번 달'].includes(id))state.period=id;
 if(id==='reset')Object.assign(state,{route:'home',order:0,soldOut:false,reply:false,unsubscribed:false,period:'오늘',detail:false});
 renderDemo();
 const replacement=Array.from(container.querySelectorAll('button')).find(btn=>route?btn.dataset.route===route:btn.dataset.action===id);
 (replacement&&!replacement.disabled?replacement:container.querySelector('button[aria-current=true]')||container.querySelector('button'))?.focus();
});
