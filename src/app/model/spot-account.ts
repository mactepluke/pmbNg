export class SpotAccount {
  currency!: string;
  credit!: number;

  constructor(currency: string) {
    this.currency = currency;
    this.credit = 0;
  }
}
