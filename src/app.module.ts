/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    url: 'postgres://postgre:3rmwxJLqujbQzjoy8nXLneN4tgvqwy6u@dpg-clknmi4jtl8s73eell5g-a/deliveryapp_l5oc',
    synchronize: true,
    logging: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    subscribers: [],
    migrations: [],
  }), UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
