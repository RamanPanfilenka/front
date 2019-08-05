export class UpdateFileRequest {
    constructor(
        public name: string,
        public path: string,
        public employeeId: number,
    ) { }
}
