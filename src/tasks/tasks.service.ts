import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTaskCommand } from './commands/create-task.command';
import { GetTasksQuery } from './queries/get-tasks.query';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createTask(title: string, description: string): Promise<Task> {
    return this.commandBus.execute(new CreateTaskCommand(title, description));
  }

  async getTasks(): Promise<Task[]> {
    return this.queryBus.execute(new GetTasksQuery());
  }
}

