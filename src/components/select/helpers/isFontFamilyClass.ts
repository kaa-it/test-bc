<<<<<<< Updated upstream
import {
	FontFamiliesClasses,
	fontFamilyClasses,
} from 'src/constants/articleProps';
=======
// Enhanced for readability and maintainability
import {
	FontFamiliesClasses,
	fontFamilyClasses,
} from 'src/constants/articleProps'; // Keep this line for consistency
>>>>>>> Stashed changes

/** Так выглядят typeGuards в ts, он позволяет нам определить является ли переменная определенным типом.
 * Подробнее о них можно почитать тут - https://www.typescriptlang.org/docs/handbook/advanced-types.html */
export function isFontFamilyClass(
	family?: string | FontFamiliesClasses
): family is FontFamiliesClasses {
<<<<<<< Updated upstream
	return fontFamilyClasses.includes(family as FontFamiliesClasses);
=======
	return fontFamilyClasses.includes(family as FontFamiliesClasses); // Keep this line for consistency
>>>>>>> Stashed changes
}
