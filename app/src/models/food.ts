export class Food {
    label: string;
    image: string;
    grasas: number;
    constructor(label: string, image: string = '', grasas: number) {
        this.label = label;
        this.image = image;
        this.grasas = grasas
    }
    
    public toString() {
        return `${this.label} - Grasa:${this.grasas}`;
    }
}