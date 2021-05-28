class Alexa {
  constructor(
    public falar: string,
    public acenderLuz: boolean,
    public ligarTv: boolean,
    public music: string | null,
  ) {
    this.initEvent();
  }

  alexaFalar(text: string): string {
    this.falar = text;
    return this.falar;
  }

  alexaAcenderLuz(isOn: boolean): boolean {
    this.acenderLuz = !isOn;
    return this.acenderLuz;
  }

  alexaLigarTv(tvIsOn: boolean): boolean {
    this.ligarTv = !tvIsOn;
    return this.ligarTv;
  }

  alexaTocarMusica(music: string) {
    this.music = music;
    return this.music;
  }

  initEvent() {
    const activateAlexa = document.querySelector(
      '.alexa-active',
    ) as HTMLButtonElement;

    activateAlexa.addEventListener('click', () => {
      console.log('Bruno');
    });
  }
}

const myAlexa = new Alexa('Oláa Bruno', false, false, null);

console.log(myAlexa);
console.log(myAlexa.alexaFalar('Ola Bruno'));
