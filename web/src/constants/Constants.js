export const IDType = [
    {text: 'Adhaar Card', value: 'AD'},
    {text: 'Voter ID Card', value: 'VO'},
    {text: 'Passport', value: 'PA'},
];

export const THIS_CITY = 'Pune';

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};
