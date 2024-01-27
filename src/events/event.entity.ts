import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  venue_id: string;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  multi_day: boolean;

  @Column()
  image: string;

  @Column()
  social_image: string;

  @Column()
  admission_fee: string;

  @Column()
  organizer_contact: string;

  @Column()
  brief_description: string;

  @Column()
  description: string;

  @Column()
  website_link: string;

  @Column()
  ticket_link: string;

  @Column()
  fb_event_link: string;

  @Column()
  eventbrite_link: string;

  @Column()
  bitly_link: string;

  @Column()
  verified: boolean;

  // this one is extra pad form in postgres because of how it handles ids
  @Column({ name: 'createdAt' })
  createdAt: Date;

  @Column({ name: 'updatedAt' })
  updatedAt: Date;

  @Column()
  reviewed_by_org: boolean;

  @Column()
  category: string;

  @Column()
  mode: string;

  @Column('text', { array: true })
  tags: Array<string>;

  // handle arrays
  @Column('text', { array: true })
  condition: Array<string>;

  @Column('text', { array: true })
  links: Array<string>;
}
