export class OrderListItem {
    constructor(
        public id: number,
        public productName:string,
        public deliver:string,
        public isDeleted: boolean,
        public productId: number,
        public companyId: number
    ) { }
}
