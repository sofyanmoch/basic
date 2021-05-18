export class DateFormatService {
    dateTimeFromUtcToMdY(data, isUpdateAt) {
        if(data && !isUpdateAt) {
          return moment(data).format('DD MMMM YYYY');
        } else if (data && isUpdateAt) {
          return moment(data).format('DD MMMM YYYY, h:mm');
        } else {
        return '-';
        }
      }
}