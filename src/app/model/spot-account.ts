export class SpotAccount {
  currency!: string;
  credit!: number;

  constructor() {
    this.currency = 'EUR';
    this.credit = 0;
  }
}
