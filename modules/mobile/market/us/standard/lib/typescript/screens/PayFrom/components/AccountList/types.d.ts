export interface IAccountItem {
    accountCode: string;
    accountType: string;
    accountAmount: string;
}
export interface IAccountList {
    accountsList: IAccountItem[];
    onChange: (param: IAccountItem) => void;
}
