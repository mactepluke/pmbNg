export class Operation {
  amount!: number;
  spotAccountCurrency!: string;
  bankAccountIban!: string;
  dateTime!: Date;
  withdrawal!: boolean;
  processed!: boolean;

  constructor(amount: number, spotAccountCurrency: string, bankAccountIban: string, dateTime: Date, withdrawal: boolean, processed: boolean) {
    this.amount = amount;
    this.spotAccountCurrency = spotAccountCurrency;
    this.bankAccountIban = bankAccountIban;
    this.dateTime = dateTime;
    this.withdrawal = withdrawal;
    this.processed = processed;
  }
}
