export class Task {
    constructor(
        public id: number,
        public columndId: number,
        public title: string,
        public description: string,
        public priority: string,
        public asignedTo: number,
        public limitDate: Date,
        public label: string,
        public position: number,
        public status: string,
        public createdAt: Date,
        public updatedAt: Date
    ) {}
}