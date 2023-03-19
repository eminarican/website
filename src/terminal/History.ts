export default class History {
    public records: Array<string> = [];

    public addRecord(record: string) {
        this.records.push(record)
    }

    public clear() {
        this.records = [];
    }
}
