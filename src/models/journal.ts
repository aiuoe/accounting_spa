import type { Label } from "./label";
import type { Type } from "./type";

export class Journal {
  id: number;
  type_id: Type;
  label_id: Label;
  amount: number;
  note: string;
  created_at: Date;
  updated_at: Date;

  constructor(data: Journal) {
    this.id = data.id;
    this.type_id = data.type_id;
    this.label_id = data.label_id;
    this.amount = data.amount;
    this.note = data.note;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}
