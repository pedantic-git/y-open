let library = {
  ae: {name: "The Art and Etiquette of Polyamory", goodreads: "9453844"},
  dr: {name: "Designer Relationships", goodreads: "24402980"},
  es: {name: "The Ethical Slut", goodreads: "4469773", copies: 2},
  et: {name: "Eight Things I Wish I'd Known About Polyamory", goodreads: "22016663"},
  gc: {name: "The Game Changer", goodreads: "25403882"},
  iy: {name: "Intimacy: Trusting Oneself and the Other", goodreads: "97001"},
  lwl: {name: "Love Without Limits", goodreads: "433499"},
  ou: {name: "Opening Up", goodreads: "1128665", copies: 2},
  mtt: {name: "More Than Two", goodreads: "21955937", copies: 3},
  nvc: {name: "Nonviolent Communication", goodreads: "71730", copies: 2},
  ob: {name: "One Big Happy Family", goodreads: "7479423"},
  pi21: {name: "Polyamory in the 21st Century", goodreads: "7773079"},
  ph: {name: "The Polyamory Handbook", goodreads: "3450704"},
  rh: {name: "The Relationship Handbook", goodreads: "2534653"},
  sad: {name: "Sex At Dawn", goodreads: "7640261"},
  sftp: {name: "Stories From The Polycule", goodreads: "25707128"},
  sm: {name: "Sex Matters: From Sex to Superconsciousness", goodreads: "97004"},
  sp: {name: "Spiritual Polyamory", goodreads: "717111"},
  tk: {name: "Trans-Kin", goodreads: "15841440"},
  wdp: {name: "What Does Polyamory Look Like?", goodreads: "8874052", copies: 2},
  wl: {name: "Warrior Love", goodreads: "20669586"}
}
for(const code in library) {
  library[code]['image'] = require(`~/assets/books/${code}.jpg`)
}
export default library
