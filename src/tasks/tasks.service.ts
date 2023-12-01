/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {

  private tasks:Task[] = [
    {
      id: '1',
      title: 'first task',
      description: 'some task',
      status: TaskStatus.PENDING,
    }
  ];

  getAllTask() {
    return this.tasks;
  };

  createTask(title: string, description: string) {
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING
    };

    this.tasks.push(task)

    return task;
  };

  getTaskById(id: string): Task {
    return this.tasks.find(element => element.id === id);
  }

  updateTask(id: string, updatedFields: any) {
    const task = this.getTaskById(id);

    const newTask = Object.assign(task, updatedFields);

    this.tasks = this.tasks.map(task => task.id === id ? newTask : task);

    return newTask;
  }

  

  deleteTasks(id: string) {
    this.tasks = this.tasks.filter(element => element.id !== id);
  }
}
