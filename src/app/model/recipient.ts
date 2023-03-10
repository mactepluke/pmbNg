export class Recipient {
  recipientEmail!: string;
  enabled!: boolean;

  constructor(recipientEmail: string, enabled: boolean) {
    this.recipientEmail = recipientEmail;
    this.enabled = enabled;
  }
}
