"use strict";

const card = (title, copy) => '<div class="card"><h3>'+title+'</h3><p>'+copy+'</p></div>';
const grid = (size, ...items) => '<div class="grid '+size+'">'+items.join('')+'</div>';
const asset = (name, alt) => '<img class="asset" src="'+name+'.webp" alt="'+alt+'">';
const button = (route, label) => '<div class="no-print"><button class="button" data-demo="'+route+'">'+label+'</button></div>';
const screen = (title, ...rows) => '<div class="screen"><b>'+title+'</b>'+rows.map(row=>'<div class="tile">'+row+'</div>').join('')+'</div>';
const townSource = '노크타운 광고상품소개서 2026.4Q';
const brandSource = '노크플레이스 브랜드소개서';
const salesSource = '노크플레이스 서비스소개서 · 입점';
const guideSource = '노크플레이스 사장님 가이드';

const ownerSteps = [
 ['store','매장관리','메뉴·주문·매출과 매장 정보에 접근합니다.'],
 ['stock','품절 처리','판매 중인 상품을 품절로 전환합니다.'],
 ['orders','주문 접수','새로 들어온 주문과 상품 내역을 확인합니다.'],
 ['pickup','픽업','픽업 준비 시간을 선택하고 주문을 접수합니다.'],
 ['sales','매출 내역','기간별 주문 수와 매출, 할인 내역을 확인합니다.']
];
const frame = ([file, label, focus]) => {
 const marker = focus ? '<span class="screen-focus" aria-hidden="true" style="--box:'+focus+'"></span>' : '';
 return '<figure class="offer-frame"><figcaption>'+label+'</figcaption><div class="offer-image">'+asset(file,label)+marker+'</div></figure>';
};
const offer = (frames, rows, steps) =>
 '<div class="offer-layout"><div class="offer-visual">'+frames.map(frame).join('')+'</div>'+
 '<div class="offer-info"><h3>제공 정보</h3><dl>'+rows.map(([term, value])=>'<div><dt>'+term+'</dt><dd>'+value+'</dd></div>').join('')+
 '</dl><h3>이용 흐름</h3><p class="offer-flow">'+steps+'</p></div></div>';
const pages = [
 ['B2B PARTNERSHIP','동네의 발견을<br>매장 방문으로','가까운 입주민에게 매장과 혜택을 알리고,<br>채팅과 픽업 주문으로 매장 방문을 연결합니다.',
 grid('cover-grid','<div class="cover-copy"><img class="cover-brand-logo" src="nockplace-promo-logo.png" alt="노크플레이스"><ul class="cover-feature-list"><li>매장 큐레이션</li><li>지도 노출</li><li>특가 채팅방</li><li>픽업 주문</li></ul><div class="cover-banner-offer"><strong>배너 광고</strong><span>별도 상품 · 가격 협의</span></div>'+button('owner','사장님 화면 데모 보기')+'</div>',asset('cover-neighborhood','아파트 생활권과 주변 매장 개념도')),brandSource+' 10쪽'],
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
 ['도입 규모','노크 플랫폼 누적 가입자 100만+','2026년 9월 기준 노크타운의 이용자와 도입 단지 현황입니다.',
 grid('three',card('누적 가입자','<span class="stat">100만+</span>'),card('도입 단지','<span class="stat">1,300+</span>'),card('월간 활성 이용자','<span class="stat">70만+</span>'))+asset('growth-chart','노크타운 MAU·도입 단지·가입자 성장 그래프')+'<p class="mini-note">자료에 제시된 비교 수치 · 이전 MAU 12만, 도입 단지 301곳</p>',townSource+' 5쪽'],
 ['이용자 구성','실거주 인증 기반의 입주민 접점','관리사무소를 통해 실거주를 인증한 이용자에게 매장 소식과 혜택을 알릴 수 있습니다.',
 grid('two',asset('audience-chart','노크타운 이용자 성별 및 연령대 차트'),'<div class="grid">'+card('30–54세 이용자','<span class="stat">70% 이상</span>')+card('성별 분포','남성 56% · 여성 44%')+'</div>')+'<p class="mini-note">노크타운 지표 · 2026년 9월 기준</p>',townSource+' 6쪽'],
 ['도입 지역','수도권과 전국 주요 거점','노크타운 도입 단지의 지역 분포 · 2026년 9월 기준',
  grid('two',asset('region','노크타운 도입 단지 지역 분포 지도'),'<div class="grid">'+card('수도권 75%','서울 21.6% · 경기·인천 53.4%')+card('그 외 지역 25%','부산·대구 10.1% · 기타 지역 14.9%')+'</div>'),townSource+' 7쪽'],
 ['기본 기능','노크플레이스에서 매장을 알리고 운영하는 방법','입주민에게 매장을 알리는 지면부터 주문과 매장 운영까지, 제휴 매장에서 사용할 기능을 한눈에 확인할 수 있습니다.',
 offer([['capture-home','동네생활'],['capture-map','주변 지도'],['owner-store','사장님 매장관리']],
 [['매장 발견','동네생활 매장 큐레이션 기본 제공 · 동네소통 매장 콘텐츠'],['지도 노출','주변 매장 위치 · 업종별 탐색 · 매장 목록'],['채팅·픽업','특가 채팅방 · 메뉴 확인 · 픽업 주문'],['매장 운영','메뉴와 품절 관리 · 주문 접수 · 픽업 · 매출 확인']],
 '매장 발견 → 혜택·메뉴 확인 → 문의 또는 픽업 주문'),salesSource],
 ['매장 큐레이션','입주민은 어디에서 매장을 발견하나요?','동네생활에서는 매장 카드와 쿠폰을, 동네소통에서는 추천 글과 매장 소식을 통해 가까운 매장을 발견합니다.',
 offer([['capture-home','동네생활 · 슬기로운 동네 생활','25% 0% 2% 0%'],['capture-rooftop','동네소통 · 분위기 좋은 루프탑 카페','60% 0% 1% 0%'],['capture-feed','동네소통 · 실제 매장 소식']],
 [['노출 위치','동네생활 추천 매장 영역 · 동네소통 피드'],['표시 정보','매장 사진, 이름, 업종과 적용 가능한 혜택'],['연결 화면','매장 카드 또는 피드에 연결된 매장 정보']],
 '추천 카드·게시글 발견 → 매장과 혜택 확인')+button('home','동네생활 데모 보기'),brandSource],
 ['지도 노출','생활권 지도에서 가까운 매장을 찾습니다','지도에서 업종과 매장 위치를 살펴보고, 목록에서 거리와 혜택을 비교할 수 있습니다.',
 offer([['capture-map','지도 · 업종 필터와 매장 핀'],['capture-map-list','목록 · 거리와 쿠폰']],
 [['진입 위치','동네생활 상단 지도 버튼'],['지도에서','업종별 필터 · 주변 매장 핀'],['목록에서','매장명 · 업종 · 거리 · 쿠폰 표시']],
 '지도 열기 → 업종 또는 매장 선택 → 목록과 매장 정보 확인')+button('map','지도 데모 보기'),salesSource],
 ['채팅방 운영','특가 소식을 보고 사장님에게 문의합니다','입주민은 동네생활에서 주문채팅방과 메뉴를 발견하고, 사장님은 더보기의 채팅에서 목록을 확인합니다.',
 offer([['capture-chat','입주민 · 동네가게 특가 채팅방'],['capture-more','사장님 · 더보기','28% 3% 60% 52%'],['capture-owner-chat','사장님 · 채팅 목록'],['capture-case','메뉴·채팅 카드']],
 [['노출 위치','동네생활의 동네가게 특가 채팅방'],['입주민 화면','주문채팅방과 판매 중인 메뉴 미리보기'],['사장님 화면','더보기 → 채팅 · 매장관리 → 채팅방 관리']],
 '특가 발견 → 메뉴 확인·문의 → 사장님이 채팅 확인')+button('chat','채팅방 데모 보기'),brandSource],
 ['픽업 주문','상품을 고르고 주문한 뒤 매장에서 받습니다','고객은 상품 상세에서 혜택을 확인하고, 픽업 주문 후 접수 상태를 확인합니다.',
 offer([['customer-detail','상품 상세','87% 4% 3% 4%'],['customer-checkout','픽업 주문','87% 4% 3% 4%'],['customer-confirmed','주문 접수 확인']],
 [['주문 전','상품 이미지 · 혜택 · 판매가 확인'],['주문 단계','주문 내용과 결제 금액 확인'],['주문 후','접수 여부 확인 · 준비 완료 후 매장 수령']],
 '상품 상세 → 픽업 주문 → 접수 확인 → 매장 수령')+button('pickup','픽업 주문 데모 보기'),salesSource],
 ['별도 광고 상품','동네생활 배너 광고','동네생활 상단 배너로 신상품, 행사, 프로모션을 알릴 수 있습니다.',
 '<div class="banner-price-note"><strong>별도 광고 상품</strong><span>가격 협의</span></div>'+offer([['capture-home','동네생활 · 상단 배너','12% 0% 74% 0%'],['banner-product','배너 광고 소재']],
 [['배너 위치','동네생활 첫 화면 상단'],['상품 구분','기본 기능과 별도로 제공하는 배너 광고 상품'],['가격','가격 협의'],['집행 기간','별도 협의']],
 '배너 지면 협의 → 소재 확정 → 동네생활 노출')+button('banner','배너 데모 보기'),salesSource],
 ['제휴 진행','참여 매장 확정부터 노출까지','참여 매장을 정하고 매장 정보를 등록하면, 검수 후 입주민에게 노출됩니다.',
 offer([['capture-store','매장 채널'],['capture-home','동네생활 노출']],
 [['대상 협의','참여 매장과 노출 대상 지역 확정'],['매장 준비','매장 정보, 메뉴, 혜택 등록 및 검수'],['노출 시작','큐레이션과 지도 노출 확인 · 배너 광고는 별도 상품 · 가격 협의']],
 '참여 매장 확정 → 등록·검수 → 노출 확인'),salesSource],
 ['사장님 매장 운영','사장님은 매장을 이렇게 운영합니다','매장관리에서 메뉴를 관리하고 주문을 접수한 뒤, 픽업 준비와 매출을 확인합니다.',
 '<div class="owner-gallery">'+ownerSteps.map(([key,label,description],i)=>'<figure>'+asset('owner-'+key,'피그마 사장님 '+label)+'<figcaption><span>0'+(i+1)+'</span><strong>'+label+'</strong><small>'+description+'</small></figcaption></figure>').join('')+'</div>'+
 button('owner','사장님 화면 데모 보기'),'[Handoff] 노크플레이스 · 사장님 운영']
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

const brandInsertSlides = [
 [14, '노크플레이스의 타겟 정밀도와 매체 ROI 포지셔닝'],
 [16, '노크플레이스 기업 및 공공기관 파트너십']
];
document.querySelector('#brand-service-11').insertAdjacentHTML('beforebegin',
 brandInsertSlides.map(([sourcePage, description]) =>
  '<section class="page brand-service brand-insert no-print" id="brand-insert-'+sourcePage+'" aria-label="'+description+'">'+
  asset('brand-insert-'+sourcePage, description)+
  (sourcePage===16 ? [
    '<div class="partner-logo-row" role="group" aria-label="추가 파트너">',
    '<img src="nice-information.svg" alt="나이스정보통신">',
    '<img src="dining-brands-group.png" alt="다이닝브랜즈그룹">',
    '<img src="toss-place.png" alt="토스플레이스">',
    '</div>'
  ].join('') : '')+'</section>').join(''));

const sourceSlideHeaders = [
 ['p02', '회사 소개', '주거 플랫폼을 만드는 트러스테이', '주거 공간의 디지털 전환을 통해 입주민의 일상과 지역 생활을 연결합니다.', '.body', 13.5],
 ['p02-brand', '사업 소개', '단지에서 생활권과 도시로', '트러스테이는 단지에서 시작해 도시를 연결하는 주거 플랫폼으로 확장하고 있습니다.', '.asset', 12.4],
 ['p03', '도입 사례', '노크 플랫폼 도입 단지', '프리미엄 단지 입주민에게 우리 매장을 알릴 수 있습니다.', '.body', 0],
 ['p04', '서비스 소개', '입주민 생활편의 플랫폼, 노크타운과 노크플레이스', '시설예약과 중고거래부터 생활권 매장 발견까지, 입주민이 일상에서 만나는 서비스입니다.', '.body', 13.3],
 ['p05', '도입 규모', '노크 플랫폼 누적 가입자 100만+', '노크 플랫폼의 가입자, 도입 단지, 월간 활성 이용자 추이입니다.', '.town-original-screen', 14.6],
 ['p06', '이용자 구성', '실거주 인증 기반의 입주민 접점', '노크타운 이용자의 성별과 연령대 분포입니다.', '.town-original-screen', 14.6],
 ['p07', '도입 지역', '수도권과 전국 주요 거점', '노크타운을 도입한 단지의 지역별 분포입니다.', '.town-original-screen', 14.6],
 ['brand-service-9', '홍보 채널', '우리 매장을 방문할 고객에게 닿는 방법', '전단지, 배달 앱, 엘리베이터 광고와 노크플레이스의 홍보 방식과 성과 지표를 비교합니다.', '.asset', 14.4],
 ['brand-service-10', '매장 홍보', '사장님을 위한 매장 맞춤 기능', '가까운 입주민이 매장과 혜택을 발견하고 방문할 수 있도록 돕습니다.', '.asset', 14.4],
 ['brand-insert-14', '매체 비교', '도달 범위와 타겟 정밀도를 함께 봅니다', '홍보 매체별 도달 범위와 타겟 정밀도를 비교합니다.', '.asset', 14.2],
 ['brand-insert-16', '파트너십', '로컬에서 시작해 도시 단위로 확장합니다', '기업, 프랜차이즈, 공공기관과 협력해 지역 생활과 매장을 연결합니다.', '.asset, .partner-logo-row', 14.4],
 ['brand-service-11', '서비스 제공 범위', '매장 홍보부터 성과 확인까지', '매장 운영에 필요한 기능과 광고, 성과 측정 범위를 확인할 수 있습니다.', '.asset', 14.4]
];
for (const [id, label, title, lead, selectors, cut] of sourceSlideHeaders) {
 const slide = document.getElementById(id);
 const content = slide.querySelectorAll(selectors);
 const header = document.createElement('header');
 header.className = 'source-heading';
 header.innerHTML = '<div class="eyebrow">'+label+'</div><h2>'+title+'</h2><p class="lead">'+lead+'</p>';
 const viewport = document.createElement('div');
 viewport.className = 'source-window';
 viewport.style.setProperty('--source-cut', cut);
 const art = document.createElement('div');
 art.className = 'source-art';
 viewport.append(art);
 slide.insertBefore(viewport, content[0]);
 for (const node of content) art.append(node);
 slide.prepend(header);
 slide.classList.add('source-page');
}

const basicFeatures = [
 ['capture-home', '매장 발견', '동네생활과 동네소통에서 매장과 쿠폰 혜택을 알립니다.'],
 ['capture-map', '지도 노출', '주변 매장의 위치와 업종, 거리와 혜택을 보여줍니다.'],
 ['capture-chat', '채팅방 운영', '특가 소식을 전하고 메뉴와 재고 문의를 받습니다.'],
 ['customer-checkout', '픽업 주문', '상품 확인부터 주문과 매장 수령까지 연결합니다.']
];
document.querySelector('#p08').insertAdjacentHTML('beforebegin',
 '<section class="page basic-features" id="basic-features" aria-labelledby="basic-features-title">'+
 '<div class="eyebrow">노크플레이스 기본 기능</div>'+
 '<h2 id="basic-features-title">매장 발견부터 픽업 주문까지</h2>'+
 '<p class="lead">매장 큐레이션, 지도 노출, 채팅방 운영과 픽업 주문을 기본 기능으로 제공합니다.</p>'+
 '<div class="body"><div class="feature-overview">'+basicFeatures.map(([file,title,description])=>
 '<figure>'+asset(file,title)+'<figcaption><strong>'+title+'</strong><p>'+description+'</p></figcaption></figure>').join('')+
 '</div><div class="feature-owner"><strong>사장님 매장관리</strong><span>메뉴·품절 관리 · 쿠폰 발행 · 주문 접수 · 픽업 준비 · 매출 확인</span></div>'+
 '<p class="separate-banner">배너 광고는 별도 상품으로 제공하며, 가격은 협의합니다.</p></div></section>');

document.querySelector('#p09').insertAdjacentHTML('afterend',
 '<section class="page coupon-benefits" id="coupon-benefits" aria-labelledby="coupon-benefits-title">'+
 '<div class="eyebrow">기본 기능 · 쿠폰 프로모션</div>'+
 '<h2 id="coupon-benefits-title">쿠폰으로 매장 방문의 계기를 만듭니다</h2>'+
 '<p class="lead">지도·주변 매장 목록에서 우선 노출되고, 매장에 맞는 혜택으로 입주민의 워크인 방문을 유도하세요.</p>'+
 '<div class="body">'+offer([
 ['capture-map-list','지도·주변 매장 목록','28% 0% 58% 0%'],
 ['coupon-benefit','고객 · 쿠폰 상세와 다운로드','73% 6% 15% 6%'],
 ['coupon-management','사장님 · 쿠폰 발행·관리']
 ],[
 ['우선 노출','쿠폰 발행 매장은 지도·주변 매장 목록에서 우선 노출됩니다.'],
 ['혜택 노출','쿠폰 혜택을 함께 표시해 매장을 선택할 이유를 제공합니다.'],
 ['방문 유도','쿠폰을 확인하고 다운로드한 고객이 매장에서 혜택을 이용하도록 연결합니다.'],
 ['운영 확인','사장님은 쿠폰의 발행 상태와 받음·사용 현황을 확인합니다.']
 ],'쿠폰 혜택 발견 → 조건 확인·다운로드 → 매장 방문·사용')+
 '<div class="coupon-choice"><strong>쿠폰 발행은 선택 사항입니다.</strong><span>매장 상황에 맞춰 혜택과 사용 조건을 정해 운영할 수 있습니다.</span></div>'+
 button('coupons','쿠폰 화면 보기')+'</div></section>');

const partnerStories = [
 {
  name: 'SKT 대리점 연수로데오점',
  image: 'appendix-skt',
  benefit: '입주민에게 직접 도달',
  description: '전단지와 관리비 고지서 광고를 경험한 뒤, 입주민에게 직접 닿는 노크플레이스의 디지털 홍보를 긍정적으로 평가했습니다.'
 },
 {
  name: '시나본 바이트앤레스트',
  image: 'appendix-cinnabon',
  benefit: '쿠폰으로 방문·구매 유도',
  description: '매장을 주변 고객에게 알리고 쿠폰을 발행한 뒤, 고객 방문과 구매 전환의 변화를 체감했다고 전했습니다.',
  url: 'https://www.instagram.com/p/DXIaRYOjUe5/'
 },
 {
  name: '오씨네 축산',
  image: 'appendix-oc',
  benefit: '동네 신규 고객에게 발견',
  description: '아파트 입주민이 이용하는 노크플레이스에 매장이 노출되면서, 가게를 처음 알게 된 고객들의 방문이 늘었다고 전했습니다.',
  url: 'https://www.instagram.com/p/DV91u8Rkzjm/'
 },
 {
  name: 'A1 auto',
  image: 'appendix-a1',
  benefit: '계약 가능성이 높은 문의',
  description: '차량 교체 수요가 있는 아파트 입주민에게 매장을 알린 뒤, 앱을 보고 연락한 고객과 계약 가능성이 높은 문의가 늘었다고 전했습니다.',
  url: 'https://www.instagram.com/p/DVr6zink8Lg/'
 }
];
document.getElementById('deck').insertAdjacentHTML('beforeend',
 '<section class="page appendix-stories" id="appendix-stories" aria-labelledby="appendix-stories-title">'+
 '<div class="eyebrow">APPENDIX · 입점 사례</div>'+
 '<h2 id="appendix-stories-title">입점 사장님이 말하는 노크플레이스</h2>'+
 '<p class="lead">입주민에게 매장을 알리고, 방문과 문의로 연결한 사장님들의 이야기입니다.</p>'+
 '<div class="body"><div class="story-grid">'+partnerStories.map(story=>
 '<article class="story-card">'+asset(story.image,story.name)+
 '<div class="story-copy"><span class="story-benefit">'+story.benefit+'</span><h3>'+story.name+'</h3>'+
 '<p>'+story.description+'</p>'+
 (story.url?'<a href="'+story.url+'" target="_blank" rel="noopener noreferrer">인터뷰 보기 ↗</a>':'')+
 '</div></article>').join('')+'</div></div></section>'+
 '<section class="page source-page appendix-community" id="appendix-community" aria-labelledby="appendix-community-title">'+
 '<header class="source-heading"><div class="eyebrow">APPENDIX · 지역과 함께 성장</div>'+
 '<h2 id="appendix-community-title">지자체와의 협업으로 정보의 순환과 소통이 이루어지는 플랫폼</h2>'+
 '<p class="lead">사장님에게 꼭 필요한 정보들로 입주민과 사장님, 지역까지 모든 사용자가 시너지를 만들어요.</p></header>'+
 '<div class="source-window" style="--source-cut:14.4"><div class="source-art">'+
 asset('appendix-community','소상공인을 위한 정책지원 정보와 고객의 가게 및 주변 상권에 대한 직접 피드백')+
 '</div></div></section>');

document.getElementById('deck').insertAdjacentHTML('beforeend',
 '<section class="page closing-page" id="partnership-contact" aria-labelledby="closing-title">'+
 '<img class="closing-logo" src="nockplace-promo-logo.png" alt="노크플레이스">'+
 '<div class="closing-message"><h2 id="closing-title">입주민의 일상 속 발견을,<br><em>우리 매장 방문</em>으로 연결하세요</h2>'+
 '<p>매장 노출부터 쿠폰, 채팅, 픽업까지.<br>노크플레이스와 함께 다음 고객을 만나보세요.</p></div>'+
 '<a class="closing-contact" href="mailto:jihan.kim@trustay.me"><span>B2B 제휴 문의</span><strong>jihan.kim@trustay.me</strong></a>'+
 '<small class="closing-copyright">© 2026 TRUSTAY Corp. All Rights Reserved.</small></section>');

const deckSlides = document.querySelectorAll('#deck > .page');
const formatPage = number => String(number).padStart(2, '0');
deckSlides.forEach((slide, index) => {
 const pageNumber = document.createElement('span');
 pageNumber.className = 'page-number';
 pageNumber.textContent = formatPage(index + 1) + ' / ' + formatPage(deckSlides.length);
 slide.append(pageNumber);
});

const dialog=document.querySelector('#demo');
const container=document.querySelector('#demo-content');
const state={route:'home',order:0,soldOut:false,reply:false,unsubscribed:false,period:'오늘',detail:false};
const customerRoutes={home:'동네생활',feed:'동네소통',coupons:'쿠폰',map:'지도',chat:'특가 채팅방',pickup:'픽업'};
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
 container.innerHTML='<div class="walkthrough"><div class="walk-steps">'+tabs+go('unsubscribed','미구독 상태')+'</div><figure class="walk-device">'+asset('owner-'+(isUnsubscribed?'unsubscribed':key),isUnsubscribed?'피그마 미구독 매장관리 화면':label)+'</figure><div class="walk-copy"><p class="eyebrow">사장님 화면 둘러보기</p><h3>'+(isUnsubscribed?'미구독 상태':label)+'</h3><p>'+(isUnsubscribed?'구독 전 매장관리 화면에서 구독 시작 메뉴를 확인할 수 있습니다.':copy)+'</p>'+(next&&!isUnsubscribed?actions(go(next[0],'다음 · '+next[1])):'')+'</div></div>';
}
function renderDemo(){
 if(state.route==='owner'){state.route='store';state.mode='owner';}
 if(state.mode==='owner'){renderOwnerWalkthrough();return;}
 const views={
  home:()=>asset('capture-home','인앱 동네생활 배너와 슬기로운 동네 생활')+asset('capture-case','피그마 사례 카드')+actions(go('banner','배너 보기'),go('map','매장 지도'),go('chat','동네가게 특가 채팅방')),
  coupons:()=>asset('capture-home','쿠폰 혜택이 보이는 매장 카드')+asset('coupon-benefit','쿠폰 상세와 다운로드')+asset('coupon-management','쿠폰 발행과 사용 현황'),
  feed:()=>asset('capture-rooftop','피그마 분위기 좋은 루프탑 카페')+asset('capture-feed','인앱 매장 소식')+actions(go('map','주변 매장 보기')),
  map:()=>asset(state.detail?'capture-map-list':'capture-map',state.detail?'인앱 주변 매장 목록':'인앱 지도')+actions(action('detail','주변 매장 목록 보기'),go('chat','채팅으로 문의')),
  chat:()=>asset('capture-chat','인앱 동네가게 특가 채팅방')+actions(go('pickup','메뉴와 픽업 주문')),
  pickup:()=>'<div class="customer-preview">'+asset(state.order?'customer-confirmed':'customer-checkout','픽업 주문 제품 디자인')+'</div>'+screen('픽업 주문','마감 할인 빵 세트 · 8,000원'+(state.soldOut?' · 품절':''),orderStates[state.order])+actions(action('order','픽업 주문하기',state.soldOut||state.order>0),go('orders','사장님 주문관리로 이동')),
  banner:()=>asset('capture-home','인앱 동네생활 상단 배너')+asset('capture-promo','사장님 홍보 관리')+actions(go('more','사장님 더보기')),
  owner:()=>screen('사장님 홈 · 매장관리',state.unsubscribed?'미구독 상태 · 구독 상태 확인':'영업 준비 중','메뉴 설정 · 주문관리 · 매출 내역 · 채팅방 관리')+actions(action('subscription',state.unsubscribed?'기본 화면 보기':'미구독 케이스 보기'),go('more','채팅방 관리')),
  more:()=>asset('capture-more','인앱 사장님 더보기')+actions(go('menu','메뉴'),go('banner','배너 노출'),go('chatlist','채팅 목록')),
  chatlist:()=>asset('capture-owner-chat','인앱 사장님 채팅 목록')+actions(go('chat','특가 채팅방 보기'),go('more','더보기로 돌아가기')),
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
