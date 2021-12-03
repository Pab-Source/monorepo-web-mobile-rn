export interface IContactList {
  contacts: { name: string; phone: string }[];
  onChange: (contact: { name: string; phone: string }) => void;
}
