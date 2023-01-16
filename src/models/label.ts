export class Label {
  id: number;
  name: string;
  icon: string;
  color: string;
  background: string;

  constructor(data: Label) {
    this.id = data.id;
    this.name = data.name;
    this.icon = data.icon;
    this.color = data.color;
    this.background = data.background;
  }
}
