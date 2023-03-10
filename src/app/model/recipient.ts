export class Recipient {
  recipientEmail!: string;
  enabled!: boolean;
  firstName!: string;
  lastName!: string;



  constructor(recipientEmail: string, enabled: boolean) {
    this.recipientEmail = recipientEmail;
    this.enabled = enabled;
  }
}
