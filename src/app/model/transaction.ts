import {Buddy} from "./buddy";

export class Transaction {
  date!: Date;
  id!: number;
  buddy!: Buddy;
  description!: string;
  amount!: number;
  fee!: number;
  status!: string;


  constructor(date: Date, id: number, buddy: Buddy, description: string, amount: number, fee: number, status: string) {
    this.date = date;
    this.id = id;
    this.buddy = buddy;
    this.description = description;
    this.amount = amount;
    this.fee = fee;
    this.status = status;
  }
}
