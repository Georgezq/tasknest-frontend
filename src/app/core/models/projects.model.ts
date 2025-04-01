export class Project {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public status: string,
        public startDate: Date,
        public endDate: Date,
        public createdBy: number,
        public createdAt: Date,
        public updatedAt: Date
    ) {}
}