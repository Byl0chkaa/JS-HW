let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return (sumUAH / item.value);
        }
    }
    throw new Error('Currency not found');
}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
