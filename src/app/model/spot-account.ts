export class SpotAccount {
  currency!: string;
  credit!: number;

  constructor(currency: string, credit: number) {
    this.currency = currency;
    this.credit = credit;
  }
}
