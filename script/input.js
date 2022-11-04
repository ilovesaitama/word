const part = ["他","名","動","形","副","前","接","代","助"];
//const _n = ["英単語","日本語",テスト範囲である0or1,"下のやつ","英語"]
const _0 = ["英語","日本語"];
const _1 = ["spaghetti","スパゲッティ",0];
const _2 = ["go swimming","泳ぎに行く",0];
const _3 = ["movie","映画",0];
const _4 = ["allergy","アレルギー",0];
const _5 = ["San Francisco","サンフランシスコ",1];
const _6 = ["hurry","急ぐ",0,"hurry up","急ぐ"];
const _7 = ["Spain","スペイン",1];
const _597 = ['individual ','個々の､それぞれの',0];
const _598 = ['owner ','持ち主､オーナー',0];
const _599 = ['customer ','客､顧客',0];
const _600 = ['freshness ','新鮮さ',0];
const _601 = ['avoid ','避ける',0];
const _602 = ['thinking ','考え､意見､思想',0];
const _603 = ['shocking ','衝撃的な､不快な',0];
const _604 = ['major ','主要な､大手の､重大な',0];
const _605 = ['discount ','割引､値引き',0];
const _606 = ['best before date ','賞味期限',0];
const _607 = ['addition ','追加',0,'in addition ','その上､更に加えて'];
const _608 = ['various ','様々な､多様な',0];
const _609 = ['logo ','ロゴ',0];
const _610 = ['inform ','～に知らせる､伝える',0,'inform ♙ about B ','♙にBを知らせる'];
const _611 = ['situation ','状況､事態',0];
const _612 = ['lastly ','最後に',0];
const _613 = ['food bank ','フードバンク',0];
const _614 = ['mobile app ','モバイルアプリケーション',0];
const _615 = ['nationwide ','全国的な､全国規模の',0];
const _616 = ['surplus ','余剰の､余分の',0];
const _617 = ['provide ','～を供給する',0];
const _618 = ['in need ','必要としている､困っている',0];
const _619 = ['increase ','～を増やす',0];
const _620 = ['pick-up ','行って受け取ること､集荷',0];
const _621 = ['location ','場所',0];
const _622 = ['system ','方式､制度',0];
const _623 = ['at any time ','いつでも',0];
const _624 = ['nearby ','近くの',0];
const _625 = ['police station ','警察署',0];
const _626 = ['goal ','目標',0];
const _627 = ['support ','～を支援する､支える',0];
const _628 = ['organization ','組織､機関',0];
const _629 = ['regret ','後悔､残念',0];
const _630 = ['maker ','メーカー､製造業者',0];
const _631 = ['website ','ウェブサイト',0];
const _632 = ['post ','～を投稿する､アップする',0];
const _633 = ['lend to   ','…という結果になる､引き起こす',0];
const _634 = ['progress ','進歩､全身',0];
const _635 = ['Germany ','ドイツ',0];
const _636 = ['atmosphere ','雰囲気',0];
const _637 = ['Italy ','イタリア',0];
const _638 = ['Russia ','ロシア',0];
const _639 = ['Egypt ','エジプト',0];
const _640 = ['Thailand ','タイ',0];
const _641 = ['New Zealand ','ニュージーランド',0];
const _642 = ['matter ','困った事､問題',0,'What’s the matter with you? ','どうかしましたか？'];
const _643 = ['scarf ','スカーフ､マフラー',0];
const _644 = ['glove ','手袋',0];
const _645 = ['wallet ','札入れ､財布',0];
const _646 = ['raincoat ','レインコート',0];
const _647 = ['handsome ','ハンサムな',0];
const _648 = ['phone ','電話',0];
const _649 = ['trust ','～を信用する',0];

const _650 = ['Chinatown ','中華街､チャイナタウン',0];
const _651 = ['whole ','全体の､すべての',0];
const _652 = ['brunch ','ブランチ',0];
const _653 = ['be crazy about ','～に夢中である､熱中している',0];
const _654 = ['custard ','カスタード',0];
const _655 = ['bun ','丸パン',0];
const _656 = ['seafood ','海産物､魚介類',0];
const _657 = ['audience ','聴衆､観客',0];
const _658 = ['clothes ','衣服',0];
const _659 = ['staff ','職員､店員',0];
const _660 = ['police ','警察､警察隊',0];
const _661 = ['pumpkin ','かぼちゃ',0];
const _662 = ['pound ','ポンド',0];
const _663 = ['butter ','バター',0];
const _664 = ['Los ♙ngeles ','ロサンゼルス',0];
const _665 = ['air ','空気､大気',0];
const _666 = ['lemon ','レモン',0];
const _667 = ['let ','～に(自由に)…させる',0,'Let me see. ','ええと｡･そうねぇ｡'];
const _668 = ['sauce ','ソース',0];
const _669 = ['sir ','あなた',0];
const _670 = ['That’s it. ','それだけです｡',0];
const _671 = ['menu ','メニュー',0];
const _672 = ['highlighter ','蛍光ペン､マーカー',0];
const _673 = ['somewhere ','どこかで､どこかへ',0];
const _674 = ['male ','男性の､オスの',0];
const _675 = ['female ','女性の､オスの',0];
const _676 = ['celebrate ','～を祝う',0];
const _677 = ['present ','プレゼント',0];
const _678 = ['myself ','私自身',0];
const _679 = ['invite ','～を招待する',0];
const _680 = ['chili ','チリトウガラシ',0];
const _681 = ['shrimp ','エビ',0];
const _682 = ['come over ','家にやってくる',0];
const _683 = ['himself ','彼自身',0];
const _684 = ['put on ','～を身につける(着る)',0];
const _685 = ['mirror ','鏡',0];
const _686 = ['ourselves ','私達自身',0];
const _687 = ['yourselves ','あなた達自身',0];
const _688 = ['itself ','それ自身(自体)',0];
const _689 = ['make oneself at home ','くつろぐ､気楽にする',0];
const _690 = ['say to oneself ','心のなかで思う',0];
const _691 = ['take care of oneself ','体に気をつけて',0];
const _692 = ['tale to oneself ','独り言を言う',0];
const _693 = ['for oneself ','独力で､自分のために',0];
const _694 = ['president ','会長､社長､大統領',0];
const _695 = ['guest ','客',0];
const _696 = ['honesty ','正直､誠実',0];
const _697 = ['take part in ','参加する',0];
const _698 = ['athlete ','スポーツ選手',0];
const _699 = ['make an effort ','努力する',0];
const _700 = ['accomplish ','～を成し遂げる',0];
const _701 = ['skater ','スケート選手',0];
