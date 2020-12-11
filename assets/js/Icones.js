class Icones {
  constructor() {
    this.listaIcones = document.querySelectorAll('.icone');
  }

  animaIcones() {
    gsap.to(this.listaIcones, 1, {scale: 0.95,repeat:-1, yoyo:true}) //usando bibliotecas externas, mas podemos fazer por css
  }
}

export { Icones }