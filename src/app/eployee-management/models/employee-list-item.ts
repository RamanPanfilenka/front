export class EmployeeListItem {
    constructor(
        public id: number,
        public firstName:string,
        public lastName:string,
        public code:string,
        public isDeleted: boolean,
        public managerId: number
    ) { }
}
