export declare class CreateTodoDto {
    body: string;
}
export declare class UpdateTodoDto {
    body: string;
    status: 'TODO' | 'INPROGRESS' | 'DONE';
}
