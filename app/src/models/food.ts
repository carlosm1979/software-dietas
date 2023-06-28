export class Food {
    label: string;
    image: string;
    constructor(label: string, image: string = '') {
        this.label = label;
        this.image = image;
    }
    
    public toString() {
        return this.label;
    }
}