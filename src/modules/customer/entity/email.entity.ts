export class EmailEntity {
  private address: string;
  private isConfirmed: boolean;

  constructor(address: string, isConfirmed = false) {
    this.address = address;
    this.isConfirmed = isConfirmed;
  }
}
