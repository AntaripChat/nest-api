import { Module } from '@nestjs/common'; // NestJS module decorator
import { AppController } from './app.controller'; // Main application controller
import { AppService } from './app.service'; // Main application service

@Module({
  imports: [], // Other modules to import
  controllers: [AppController], // Controllers for handling incoming requests
  providers: [AppService], // Providers (services) for dependency injection
})
export class AppModule {} // Root module of the application
