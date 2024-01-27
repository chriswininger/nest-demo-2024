import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>
  ) {}

  async findFirst(): Promise<Event | null> {
    return await this.eventRepository
      .createQueryBuilder()
      .orderBy('"createdAt"', 'DESC')
      .take(1)
      .getOne();
  }
}
