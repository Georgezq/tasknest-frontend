export interface TaskDTO {
    id: number,
    columnId: number,
    title: string,
    description: string,
    priority: string,
    asignedTo: number,
    limitDate: Date,
    label: string,
    position: number,
    status: string,
    createdAt: Date,
    updatedAt: Date
}