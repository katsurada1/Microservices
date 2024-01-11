import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@k2tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
