const { Module } = require('@nestjs/common');
const { TypeOrmModule } = require('@nestjs/typeorm');
const { AppController } = require('./app.controller');
const { AppService } = require('./app.service');
const { UsersModule } = require('./users/users.module');
const { CoursesModule } = require('./courses/courses.module');
const { TasksModule } = require('./tasks/tasks.module');
const { ResourcesModule } = require('./resources/resources.module');
const { ForumsModule } = require('./forums/forums.module');
const { MessagesModule } = require('./messages/messages.module');
const { AuthModule } = require('./auth/auth.module');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'aula_virtual_nest',
      autoLoadEntities: true,
      synchronize: true,
      retryAttempts: 3,
      retryDelay: 3000,
    }),
    UsersModule,
    CoursesModule,
    TasksModule,
    ResourcesModule,
    ForumsModule,
    MessagesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
class AppModule {}

module.exports = { AppModule };
