import { Publisher, Subjects, TicketCreatedEvent } from '@k2tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
