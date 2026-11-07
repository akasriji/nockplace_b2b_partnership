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

const ownerSteps = [
 ['store','매장관리','메뉴·주문·매출과 매장 정보에 접근합니다.'],
 ['stock','품절 처리','판매 중인 상품을 품절로 전환합니다.'],
 ['orders','주문 접수','새로 들어온 주문과 상품 내역을 확인합니다.'],
 ['pickup','픽업','픽업 준비 시간을 선택하고 주문을 접수합니다.'],
 ['sales','매출 내역','기간별 주문 수와 매출, 할인 내역을 확인합니다.']
];
const photos=(items)=>'<div class="photo-grid">'+items.map(([file,label])=>'<figure>'+asset(file,label)+'<figcaption>'+label+'</figcaption></figure>').join('')+'</div>';
const pages = [
 ['B2B PARTNERSHIP','동네의 발견을<br>매장 방문으로','아파트 생활권에서 매장과 혜택을 알리고 채팅과 픽업 주문으로 연결하는 노크플레이스 제휴 제안입니다.',
 grid('cover-grid','<div class="cover-copy"><div class="cover-name">NOCKPLACE</div><p>매장 큐레이션 · 지도 노출<br>특가 채팅방 · 픽업 주문</p>'+button('owner','사장님 화면 데모 보기')+'</div>',asset('cover-neighborhood','아파트 생활권과 주변 매장 개념도')),brandSource+' 10쪽'],
 ['회사 소개','트러스테이 회사 소개','주거 시장의 디지털 전환을 이끄는 프롭테크 플랫폼 기업.',
  '<div class="trustay-slide">'+asset('trustay-company','트러스테이 회사 소개. 주거 통합 플랫폼의 세 서비스 중 노크플레이스 영역을 빨간 테두리로 강조했습니다.')+'<span class="trustay-highlight" aria-hidden="true"></span></div>',townSource+' 2쪽 · 노크플레이스 강조'],
 ['도입 사례','노크 플랫폼 도입 단지','대표 도입 단지를 통해 노크 플랫폼의 적용 사례를 소개합니다.',
  '<div class="complexes-slide">'+asset('complexes','노크 플랫폼 도입 단지 사진과 단지명')+
  '<div class="complexes-intro"><strong>노크 플랫폼 도입 단지</strong><span>국내 최고의 프리미엄 아파트가 선택하고<br>성공적으로 검증한 주거 Tech ‘노크’</span></div>'+
  '<div class="complexes-promo"><span>프리미엄 단지 입주민에게<br>우리 매장을 알리는 방법</span><img class="promo-logo" src="nockplace-promo-logo.png" alt="노크플레이스"></div></div>',townSource+' 3쪽'],
 ['서비스 소개','입주민 생활 플랫폼, 노크타운','시설예약, 타운마켓, 중고거래 등 입주민이 일상에서 사용하는 기능을 제공합니다.',
  '<div class="town-platform-slide">'+asset('town-platform','노크타운 시설예약과 중고거래, 손에 든 노크타운 앱 화면')+
  '<div class="town-platform-title">입주민 생활편의 플랫폼, <strong>노크타운 / 노크플레이스</strong></div>'+
  '<span class="town-platform-label">노크플레이스</span>'+
  '<img class="town-platform-home" src="nockplace-home-screen.png" alt="노크플레이스 메인 화면">'+
  '<span class="town-platform-gnb" aria-hidden="true"></span></div>'+
  '<div class="town-print-original">'+asset('town','노크타운 홈 및 시설예약·타운마켓·중고거래 화면')+'</div>',townSource+' 4쪽'],
 ['도입 규모','노크타운 누적 가입자 100만+','2026년 9월 기준 노크타운의 이용자와 도입 단지 현황입니다.',
 grid('three',card('누적 가입자','<span class="stat">100만+</span>'),card('도입 단지','<span class="stat">1,300+</span>'),card('월간 활성 이용자','<span class="stat">70만+</span>'))+asset('growth-chart','노크타운 MAU·도입 단지·가입자 성장 그래프')+'<p class="mini-note">자료에 제시된 비교 수치 · 이전 MAU 12만, 도입 단지 301곳</p>',townSource+' 5쪽'],
 ['이용자 구성','실거주 인증 기반의 입주민 접점','관리사무소를 통해 실거주를 인증한 이용자에게 매장 소식과 혜택을 알릴 수 있습니다.',
 grid('two',asset('audience-chart','노크타운 이용자 성별 및 연령대 차트'),'<div class="grid">'+card('30–54세 이용자','<span class="stat">70% 이상</span>')+card('성별 분포','남성 56% · 여성 44%')+'</div>')+'<p class="mini-note">노크타운 지표 · 2026년 9월 기준</p>',townSource+' 6쪽'],
 ['도입 지역','수도권과 전국 주요 거점','노크타운 도입 단지의 지역 분포 · 2026년 9월 기준',
  grid('two',asset('region','노크타운 도입 단지 지역 분포 지도'),'<div class="grid">'+card('수도권 75%','서울 21.6% · 경기·인천 53.4%')+card('그 외 지역 25%','부산·대구 10.1% · 기타 지역 14.9%')+'</div>'),townSource+' 7쪽'],
 ['B2B 제휴 조건','기본 구독과 배너 집행','노크플레이스 입점 소개서에 명시된 구독료와 제휴 제공 범위입니다.',
 grid('two','<div class="price"><span>노크플레이스 정기 구독</span><strong>월 50,000원</strong><p>매장 큐레이션 기본 제공</p></div>',card('배너 별도 협의','동네생활 상단 배너 제공 가능<br>금액 및 기간 별도 협의'))+
 grid('four',card('매장 큐레이션','동네 콘텐츠에 매장과 혜택 노출'),card('지도 노출','위치·업종과 매장 상세 확인'),card('채팅방 운영','특가 공지와 고객 문의'),card('픽업 주문','주문 접수와 픽업 관리')),salesSource+' 10–11쪽 · 제휴 제공 범위'],
 ['매장 큐레이션','동네 콘텐츠에서 매장 발견','입주민이 동네생활의 매장 카드와 동네소통 추천을 통해 주변 매장을 발견합니다.',
 grid('two','<figure class="editorial-media">'+asset('curation','피그마 매장 큐레이션 원본')+'<figcaption>동네생활 · 매장 큐레이션</figcaption></figure>','<figure class="editorial-media">'+asset('brand-community','브랜드소개서의 동네 커뮤니티와 생활 화면')+'<figcaption>동네소통 · 장소 추천과 매장 사례</figcaption></figure>')+
 '<p class="mini-note">‘슬기로운 동네생활’ 스토어 카드 · ‘분위기 좋은 루프탑 카페’ · 매장 사례 카드</p>'+button('home','동네생활 데모 보기'),brandSource+' 11–13쪽 · 피그마 핸드오프'],
 ['지도 노출','생활권 지도에서 주변 매장 확인','업종을 살펴보고 지도나 목록에서 매장을 선택해 위치와 혜택을 확인합니다.',
  grid('two','<div class="screen"><b>동네 지도</b>'+map+'</div>',screen('매장 목록과 상세','우리 동네 베이커리 · 도보권','메뉴 · 위치 · 입주민 전용 쿠폰'))+sample+button('map','지도 데모 보기'),salesSource+' 10쪽 · 실서비스 화면 참고'],
 ['채팅방 운영','동네가게 특가 채팅방','고객은 특가와 메뉴를 보고 문의하고, 사장님은 더보기에서 채팅 목록을 확인합니다.',
  grid('two',screen('입주민 · 동네가게 특가 채팅방','오늘 마감 할인 소식','메뉴 보기 · 재고 문의'),screen('사장님 · 더보기','사장님 프로필','채팅 목록 → 우리 동네 베이커리 주문채팅방'))+sample+button('chat','채팅방 데모 보기'),brandSource+' 12–13쪽 · 실서비스 화면 참고'],
 ['픽업 주문','매장 방문으로 이어지는 픽업 주문','고객은 상품과 가격을 확인하고 주문한 뒤 매장에서 상품을 수령합니다.',
 photos([['customer-detail','01  상품과 혜택 확인'],['customer-checkout','02  픽업 주문'],['customer-confirmed','03  주문 접수 확인']])+button('pickup','픽업 주문 데모 보기'),salesSource+' 10쪽 · 제품 디자인 원본'],
 ['배너 노출','동네생활에서 브랜드 소식 노출','신상품, 매장 행사, 프로모션을 입주민에게 알릴 수 있습니다.',
 grid('two','<figure class="editorial-media">'+asset('banner-product','입점 서비스소개서에 실린 매장 배너와 홍보 소재')+'<figcaption>입점 소개서에 실린 홍보 소재</figcaption></figure>','<div class="grid">'+card('노출 지면','동네생활 상단 배너')+card('집행 조건','금액 및 기간 별도 협의')+'</div>')+button('banner','배너 데모 보기'),salesSource+' 11쪽'],
 ['제휴 진행','입점 사례와 제휴 진행','입점 자료에서 발췌한 고객 반응과 제휴 시작 절차입니다.',
  grid('two',card('오씨네 축산','아파트 입주민에게 매장을 알릴 수 있다는 점을 긍정적으로 평가했습니다.'),card('SKT 대리점 연수로데오점','전단지와 관리비 고지서 광고를 써본 뒤, 입주민에게 직접 도달하는 디지털 지면을 긍정적으로 평가했습니다.'))+
  '<div class="callout">대상 지역·참여 매장 협의 → 매장 정보 등록·검수 → 노출 시작</div>',brandSource+' 15쪽 · '+salesSource+' 12·14쪽'],
 ['사장님 매장 운영','사장님은 매장을 이렇게 운영합니다','매장관리에서 주문을 접수하고, 픽업을 준비한 뒤 매출을 확인합니다.',
 '<div class="owner-gallery">'+ownerSteps.map(([key,label,description],i)=>'<figure>'+asset('owner-'+key,'피그마 사장님 '+label)+'<figcaption><span>0'+(i+1)+'</span><strong>'+label+'</strong><small>'+description+'</small></figcaption></figure>').join('')+'</div>'+
 '<p class="mini-note">피그마 핸드오프 원본 · 화면 속 주문 및 매출 수치는 디자인에 포함된 데이터입니다.</p>'+button('owner','사장님 화면 데모 보기'),'[Handoff] 노크플레이스 · 사장님 홈 / 주문접수 / 매출 내역']
];

document.querySelector('#deck').innerHTML = pages.map(([label,title,lead,body,source],i)=>{
 const number=String(i+1).padStart(2,'0');
 const heading=i===0?'h1':'h2';
 return '<section class="page '+(i===0?'dark':'')+'" id="p'+number+'"><div class="eyebrow">'+label+'</div><'+heading+'>'+title+'</'+heading+'><p class="lead">'+lead+'</p><div class="body">'+body+'</div><footer class="foot"><span>'+source+'</span><span>'+number+' / 15</span></footer></section>';
}).join('');

document.querySelector('#p02').insertAdjacentHTML('afterend',
 '<section class="page inserted-brand no-print" id="p02-brand" aria-label="트러스테이 진화과정">'+
 asset('trustay-evolution','트러스테이 진화과정. 주거 공간 디지털 전환에서 생활권 기반 플랫폼을 거쳐 도시 기반 통합 플랫폼으로 확장.')+'</section>');
 
const townOriginals = [
 ['p05', 5, '노크타운 가입자와 도입 단지 수 및 월간 활성 이용자 추이'],
 ['p06', 6, '노크타운 이용자의 성별 및 연령대 분포'],
 ['p07', 7, '노크타운 도입 단지의 지역별 분포']
];
for (const [id, sourcePage, description] of townOriginals) {
 const page = document.getElementById(id);
 page.classList.add('town-original');
 page.insertAdjacentHTML('afterbegin', '<div class="town-original-screen">'+
  asset('town-original-'+sourcePage, description)+'</div>');
}

document.querySelector('#p07').insertAdjacentHTML('afterend',
 '<section class="page dark service-divider no-print" id="service-intro" aria-labelledby="service-intro-title">'+
 '<h2 id="service-intro-title">노크플레이스<br>서비스 소개</h2></section>');

const entryServiceSlides = [
 [9, '매장 방문 고객을 위한 홍보 채널 비교'],
 [10, '사장님을 위한 매장 맞춤 기능'],
 [11, '구독형 결제와 광고 및 성과 측정']
];
document.querySelector('#service-intro').insertAdjacentHTML('afterend',
 entryServiceSlides.map(([sourcePage, description]) =>
  '<section class="page brand-service no-print" id="brand-service-'+sourcePage+'" aria-label="'+description+'">'+
  asset('entry-service-'+sourcePage, description)+'</section>').join(''));

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
function renderOwnerWalkthrough(){
 const isUnsubscribed=state.route==='unsubscribed';
 const index=isUnsubscribed?0:ownerSteps.findIndex(([key])=>key===state.route);
 const [key,label,copy]=ownerSteps[index];
 const tabs=ownerSteps.map(([id,title],i)=>'<button type="button" data-route="'+id+'" aria-current="'+(!isUnsubscribed&&index===i)+'"><span>0'+(i+1)+'</span>'+title+'</button>').join('');
 const next=ownerSteps[index+1];
 container.innerHTML='<div class="walkthrough"><div class="walk-steps">'+tabs+go('unsubscribed','미구독 상태')+'</div><figure class="walk-device">'+asset('owner-'+(isUnsubscribed?'unsubscribed':key),isUnsubscribed?'피그마 미구독 매장관리 화면':label)+'</figure><div class="walk-copy"><p class="eyebrow">사장님 화면 둘러보기</p><h3>'+(isUnsubscribed?'미구독 상태':label)+'</h3><p>'+(isUnsubscribed?'구독 전 매장관리 화면에서 구독 시작 메뉴를 확인할 수 있습니다.':copy)+'</p>'+(next&&!isUnsubscribed?actions(go(next[0],'다음 · '+next[1])):'')+'<small>피그마 핸드오프 원본</small></div></div>';
}
function renderDemo(){
 if(state.route==='owner'){state.route='store';state.mode='owner';}
 if(state.mode==='owner'){renderOwnerWalkthrough();return;}
 const views={
  home:()=>asset('curation','피그마 매장 큐레이션 원본')+banner+screen('슬기로운 동네생활','우리 동네 베이커리 · 입주민 전용 쿠폰','[case] 카드 · 마감 할인 픽업')+actions(go('banner','배너 보기'),go('map','매장 지도'),go('chat','동네가게 특가 채팅방')),
  feed:()=>screen('동네소통','분위기 좋은 루프탑 카페','동네 이웃 추천 · 분위기 좋은 테라스')+actions(go('map','주변 매장 보기')),
  map:()=>'<div class="map">'+action('detail','베이커리')+'<span class="pin">카페</span></div>'+(state.detail?screen('우리 동네 베이커리','영업시간 10:00–20:00','입주민 전용 쿠폰 · 매장 픽업'):actions(action('detail','매장 상세 보기')))+actions(go('chat','채팅으로 문의')),
  chat:()=>screen('우리 동네 베이커리 특가 채팅방','사장님 · 오늘 18시부터 빵 세트 마감 할인합니다.',...(state.reply?['고객 · 픽업 가능한가요?','사장님 · 메뉴에서 픽업 주문하실 수 있어요.']:[]))+actions(action('reply','픽업 문의'),go('pickup','메뉴와 픽업 주문')),
  pickup:()=>'<div class="customer-preview">'+asset(state.order?'customer-confirmed':'customer-checkout','픽업 주문 제품 디자인')+'</div>'+screen('픽업 주문','마감 할인 빵 세트 · 8,000원'+(state.soldOut?' · 품절':''),orderStates[state.order])+actions(action('order','픽업 주문하기',state.soldOut||state.order>0),go('orders','사장님 주문관리로 이동')),
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
 state.mode=state.route==='owner'?'owner':'customer';
 renderDemo();
 dialog.showModal();
});
container.addEventListener('click',event=>{
 const trigger=event.target.closest('button');
 if(!trigger)return;
 const {route,action:id}=trigger.dataset;
 if(route){state.route=route;if(['store','stock','unsubscribed'].includes(route))state.mode='owner';}
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
