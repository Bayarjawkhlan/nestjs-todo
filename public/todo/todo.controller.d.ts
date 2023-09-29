import { TodoService } from './todo.service';
import { User as UserType } from '@prisma/client';
import { CreateTodoDto, UpdateTodoDto } from './dto';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    getTodos(): Promise<{
        id: string;
        body: string;
        status: import(".prisma/client").$Enums.TODOSTATE;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }[]>;
    getUserTodos(user: UserType): Promise<{
        id: string;
        body: string;
        status: import(".prisma/client").$Enums.TODOSTATE;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }[]>;
    createTodo(user: UserType, dto: CreateTodoDto): Promise<{
        id: string;
        body: string;
        status: import(".prisma/client").$Enums.TODOSTATE;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
    updateTodo(id: string, user: UserType, dto: UpdateTodoDto): Promise<{
        id: string;
        body: string;
        status: import(".prisma/client").$Enums.TODOSTATE;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
    deleteTodo(id: string, user: UserType): Promise<{
        id: string;
        body: string;
        status: import(".prisma/client").$Enums.TODOSTATE;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
}
