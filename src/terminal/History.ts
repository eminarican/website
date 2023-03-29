export default class History {

    private records: Array<string> = [];
    private inputs: Array<string> = [];
    private cursor: number = -1;

    public getRecords(): Array<string> {
        return this.records;
    }

    public addRecord(record: string) {
        this.records.push(record);
    }

    public addRecords(records: Array<string>) {
        records.forEach((record) => this.records.push(record));
    }

    public addInput(input: string) {
        this.inputs.push(input);
    }

    public currentInput(): string {
        return this.inputs[this.inputs.length - this.cursor - 1]?? "";
    }

    public incrementCursor() {
        if (this.cursor == this.inputs.length - 1) return;
        this.cursor += 1;
    }

    public decrementCursor() {
        if (this.cursor == -1) return;
        this.cursor -= 1;
    }

    public resetCursor() {
        this.cursor = -1;
    }

    public clear() {
        this.records = [];
        this.inputs = [];
    }
}
