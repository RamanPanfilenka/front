export class Employee {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public code: string,
        public isDeleted: boolean,
        public lastUpdated: string,
        public managerId: number,
    ) { }
}
