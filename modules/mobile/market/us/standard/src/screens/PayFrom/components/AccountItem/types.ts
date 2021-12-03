export type AccountItemT = {
  accountType: string;
  accountCode: string;
  accountAmount: string;
};

export interface IAccountItem {
  account: AccountItemT;
}
