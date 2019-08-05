export class Company {
    constructor(
        public id: number,
        public name: string,
        public city: string,
        public owner: string,
        public isDeleted: boolean,
        public lastUpdated: string,
    ) { }
}
