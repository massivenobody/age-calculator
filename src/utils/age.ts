import { DateTime, DurationObjectUnits } from 'luxon';

export function calculateAge(birthDateString: string) {
    const birthDate = DateTime.fromFormat(birthDateString, 'yyyy-MM-dd');
    // Calculate diff and negate to get positive values.
    const diff = birthDate.diffNow(['years', 'months', 'days']).negate().toObject();

    // Show result if date is valid and all diff values are positive
    let isValid = birthDate.isValid && Object.keys(diff).length > 0;
    if (isValid) {
        diff.days = Math.floor(diff.days!);
        isValid = (diff.years! > 0 || diff.months! > 0 || diff.days! > 0);
    }
    return { isValid, diff };
}

export function formatAge(diff: DurationObjectUnits) {
    let finalString = '';
    if (diff.years! > 0) {
        finalString += `${diff.years} year`;
        if (diff.years! > 1) finalString += 's';
        if (diff.months! > 0 && diff.days! > 0) finalString += ', ';
        if (diff.months! > 0 && diff.days! <= 0) finalString += ' and ';
        if (diff.months! <= 0 && diff.days! > 0) finalString += ' and ';
    }
    if (diff.months! > 0) {
        finalString += `${diff.months} month`;
        if (diff.months! > 1) finalString += 's';
        if (diff.years! > 0 && diff.days! > 0) finalString += ',';
        if (diff.days! > 0) finalString += ' and ';
    }
    if (diff.days! > 0) {
        finalString += `${diff.days} day`;
        if (diff.days! > 1) finalString += 's';
    }
    return finalString;
}