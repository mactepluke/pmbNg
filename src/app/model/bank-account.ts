export class BankAccount {
  name!: string;
  iban!: string;
  verified!: boolean;

  constructor(name: string, iban: string, verified: boolean) {
    this.name = name;
    this.iban = iban;
    this.verified = verified;
  }
}
