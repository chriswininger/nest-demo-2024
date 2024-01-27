import { Controller, Get } from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from './event.entity';

@Controller('/events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get('/first')
  getOneEvent(): Promise<Event> {
    return this.eventsService.findFirst();
  }
}
