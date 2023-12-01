/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Ymbmcq+1709",
    database: "delivery-app",
    synchronize: true,
    logging: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    subscribers: [],
    migrations: [],
  }), TasksModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
