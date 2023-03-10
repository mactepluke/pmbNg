import {Recipient} from "./recipient";

export class Payment {
  description!: string;
  grossAmount!: number;
  netAmount!: number;
  feePercent!: number;
  currency!: string;
  dateTime!: Date;
  processed!: boolean;
  recipient!: Recipient;

  constructor(description: string, grossAmount: number, netAmount: number, feePercent: number, currency: string, dateTime: Date, processed: boolean, recipient: Recipient) {
    this.description = description;
    this.grossAmount = grossAmount;
    this.netAmount = netAmount;
    this.feePercent = feePercent;
    this.currency = currency;
    this.dateTime = dateTime;
    this.processed = processed;
    this.recipient = recipient;
  }
}
