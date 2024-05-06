let library = {
  ae: {name: "The Art and Etiquette of Polyamory", goodreads: "9453844"},
  amap: {name: "Ask Me About Polyamory", goodreads: "28384607"},
  bor: {name: "Building Open Relationships", goodreads: "40747183"},
  dr: {name: "Designer Relationships", goodreads: "24402980"},
  es: {name: "The Ethical Slut", goodreads: "4469773", copies: 2},
  et: {name: "Eight Things I Wish I'd Known About Polyamory", goodreads: "22016663"},
  gc: {name: "The Game Changer", goodreads: "25403882", caution: "fv"},
  icp: {name: "It's Called Polyamory", goodreads: "34448525"},
  iy: {name: "Intimacy: Trusting Oneself and the Other", goodreads: "97001"},
  lr: {name: "Love, Retold", goodreads: "32280028"},
  lwl: {name: "Love Without Limits", goodreads: "433499"},
  ou: {name: "Opening Up", goodreads: "1128665", copies: 2},
  ma: {name: "Multiamory", goodreads: "61272930"},
  mtt: {name: "More Than Two", goodreads: "21955937", copies: 3, caution: "fv"},
  nvc: {name: "Nonviolent Communication", goodreads: "71730", copies: 3},
  ob: {name: "One Big Happy Family", goodreads: "7479423"},
  pi21: {name: "Polyamory in the 21st Century", goodreads: "7773079"},
  ph: {name: "The Polyamory Handbook", goodreads: "3450704"},
  ps: {name: "Polysecure", goodreads: "52569124"}, 
  pw: {name: "Polywise", goodreads: "62998140"},
  rtr: {name: "Rewriting the Rules", goodreads: "36870504"},
  rh: {name: "The Relationship Handbook", goodreads: "2534653"},
  sad: {name: "Sex At Dawn", goodreads: "7640261"},
  sftp: {name: "Stories From The Polycule", goodreads: "25707128"},
  sm: {name: "Sex Matters: From Sex to Superconsciousness", goodreads: "97004"},
  sp: {name: "Spiritual Polyamory", goodreads: "717111"},
  tk: {name: "Trans-Kin", goodreads: "15841440"},
  wdp: {name: "What Does Polyamory Look Like?", goodreads: "8874052", copies: 2},
  wsylip: {name: "When Someone You Love is Polyamorous", goodreads: "29633526", copies: 3}
}
for(const code in library) {
  library[code]['image'] = require(`~/assets/books/${code}.jpg`)
}
export default library
