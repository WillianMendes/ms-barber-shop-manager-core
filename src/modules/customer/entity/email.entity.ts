export class EmailEntity {
  public address: string;
  public isConfirmed: boolean;

  constructor(address: string, isConfirmed = false) {
    this.address = address;
    this.isConfirmed = isConfirmed;
  }
}
