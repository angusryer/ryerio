import { toReadableDate } from '../../lib/utils';

export default function DateText({ dateString }: { dateString: string }) {
  return <time dateTime={dateString}>{toReadableDate(dateString)}</time>;
}
