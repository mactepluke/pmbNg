export class BankAccount {
  name!: string;
  iban!: string;
  verified!: boolean;

  constructor() {
    this.name = '';
    this.iban = '';
    this.verified = false;
  }
}
