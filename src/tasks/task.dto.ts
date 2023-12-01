/* eslint-disable prettier/prettier */
import { TaskStatus } from './task.entity';
import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  title: string

  @IsString()
  @IsNotEmpty()
  description: string
}

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  id?: string

  @IsString()
  @IsOptional()
  description?: string

  @IsString()
  @IsOptional()
  @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status?: TaskStatus
}