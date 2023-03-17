export class Payment {
  description!: string;
  grossAmount!: number;
  netAmount!: number;
  feePercent!: number;
  currency!: string;
  dateTime!: Date;
  processed!: boolean;
  recipientEmail!: string;
  emitterEmail!: string;

  constructor(description: string,
              grossAmount: number,
              netAmount: number,
              feePercent: number,
              currency: string,
              dateTime: Date,
              processed: boolean,
              recipientEmail: string,
              emitterEmail: string) {
    this.description = description;
    this.grossAmount = grossAmount;
    this.netAmount = netAmount;
    this.feePercent = feePercent;
    this.currency = currency;
    this.dateTime = dateTime;
    this.processed = processed;
    this.recipientEmail = recipientEmail;
    this.emitterEmail = emitterEmail;
  }
}
