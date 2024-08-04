module.exports = function toReadable (number) {
    const nums = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four',
        5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen',
        14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen',
        18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty',
        40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy',
        80: 'eighty', 90: 'ninety', 100: 'hundred', 200: 'two hundred',
        300: 'three hundred', 400: 'four hundred', 500: 'five hundred',
        600: 'six hundred', 700: 'seven hundred', 800: 'eight hundred',
        900: 'nine hundred'
    };

    if (number <= 20) {
        return nums[number];
    }

    if (number > 20 && number < 100) {
        return nums[number - number % 10] + (number % 10 ? ' ' + nums[number % 10] : '');
    }

    if (number >= 100 && number < 1000) {
        return nums[Math.floor(number / 100)] + ' hundred' + (number % 100 ? ' ' + toReadable(number % 100) : '');
    }
}
