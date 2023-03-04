const locale: Intl.LocalesArgument = 'en-US';
const config: Intl.DateTimeFormatOptions = {
  dateStyle: 'full'
};

export function toReadableDate(date: string | Date = new Date()): string {
  return new Date(date).toLocaleDateString(locale, config);
}
