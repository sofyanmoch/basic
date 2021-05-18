export class CurrencyFormatService {
    currency(data, symbol = 'Rp.') {
        const newData = data || 0;
        return formatMoney(newData, { symbol: symbol, precision: 0, format: '%s %v', decimal: ',', thousand: '.' });
      }
}