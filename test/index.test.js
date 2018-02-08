const dateFormat = require('../dist/index.min');

test(`dateFormat(1518061494738, 'year/month/day hours:minutes:seconds').result; // '2018/02/08 11:44:54'`, () => {
    expect(dateFormat(1518061494738, 'year/month/day hours:minutes:seconds').result).toEqual('2018/02/08 11:44:54');
});
