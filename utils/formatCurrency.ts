export default function (money: Number) {
    const formatter = new Intl.NumberFormat('vn-US', {
        style: 'currency',
        currency: 'VND',
    });

    return formatter.format(money)
}
