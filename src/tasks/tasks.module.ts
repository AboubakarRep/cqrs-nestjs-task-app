import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { GetTasksHandler } from './queries/get-tasks.handler';
import { CreateTaskHandler } from './commands/create-task.handler';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), CqrsModule],
  providers: [TasksService, CreateTaskHandler, GetTasksHandler],
  controllers: [TasksController],
})
export class TasksModule {}
