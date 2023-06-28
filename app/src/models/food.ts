export class Food {
    label: string
    constructor(label: string) {
        this.label = label;
    }
    
    public toString() {
        return this.label;
    }
}