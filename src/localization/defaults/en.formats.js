export default {
  date: {
    format: 'D/M YYYY',
    days: '{count} {count, plural, one {day} other {days}}',
    months: '{count} {count, plural, one {month} other {months}}',
    month: {
      short: 'mo.'
    }
  },
  number: {
    currency: {
      format: {
        delimiter: '.',
        format: '%n %u',
        precision: 0,
        separator: ',',
        unit: 'kr.'
      }
    },
    format: {
      delimiter: '.',
      precision: 2,
      separator: ','
    },
    percentage: {
      format: {
        delimiter: '',
        format: '%n %'
      }
    },
    precision: {
      format: {
        delimiter: ''
      }
    }
  }
};
