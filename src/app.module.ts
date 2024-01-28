import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsModule } from './events/events.module';
import { dataSourceOptions } from './database/data-source';
@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
