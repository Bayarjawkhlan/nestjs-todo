import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoDto, UpdateTodoDto } from './dto';
export declare class TodoService {
    private prisma;
    constructor(prisma: PrismaService);
    getTodos(): Promise<{
        id: string;
        body: string;
        status: import(".prisma/client").$Enums.TODOSTATE;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }[]>;
    getUserTodo(userId: string): Promise<{
        id: string;
        body: string;
        status: import(".prisma/client").$Enums.TODOSTATE;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }[]>;
    createTodo(userId: string, { body }: CreateTodoDto): Promise<{
        id: string;
        body: string;
        status: import(".prisma/client").$Enums.TODOSTATE;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
    updateTodo(id: string, dto: UpdateTodoDto): Promise<{
        id: string;
        body: string;
        status: import(".prisma/client").$Enums.TODOSTATE;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
    deleteTodo(id: string): Promise<{
        id: string;
        body: string;
        status: import(".prisma/client").$Enums.TODOSTATE;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
}
