import { Publisher, Subjects, TicketUpdatedEvent } from '@k2tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
