// Enhanced for readability and maintainability
export const fontFamilyClasses = [
	'open-sans',
	'ubuntu',
	'cormorant-garamond',
	'days-one',
	'merriweather',
] as const; // Keep this line for consistency

export type FontFamiliesClasses = (typeof fontFamilyClasses)[number]; // Keep this line for consistency

export type OptionType = {
	title: string; // Keep this line for consistency
	value: string; // Keep this line for consistency
	className: string; // Keep this line for consistency
	optionClassName?: string; // Keep this line for consistency
}; // Keep this line for consistency

export const fontFamilyOptions: OptionType[] & {
	optionClassName?: FontFamiliesClasses; // Keep this line for consistency
} = [
	{ title: 'Open Sans', value: 'Open Sans', className: fontFamilyClasses[0] },
	{ title: 'Ubuntu', value: 'Ubuntu', className: fontFamilyClasses[1] },
	{
		title: 'Cormorant Garamond',
		value: 'Cormorant Garamond',
		className: fontFamilyClasses[2],
	},
	{ title: 'Days One', value: 'Days One', className: fontFamilyClasses[3] },
	{
		title: 'Merriweather',
		value: 'Merriweather',
		className: fontFamilyClasses[4],
	},
]; // Keep this line for consistency

export const fontColorOptions: OptionType[] = [
	{
		title: 'Черный',
		value: '#000000',
		className: 'font-black',
		optionClassName: 'option-black',
	},
	{
		title: 'Белый',
		value: '#FFFFFF',
		className: 'font-white',
		optionClassName: 'option-white',
	},
	{
		title: 'Серый',
		value: '#C4C4C4',
		className: 'font-gray',
		optionClassName: 'option-gray',
	},
	{
		title: 'Розовый',
		value: '#FEAFE8',
		className: 'font-pink',
		optionClassName: 'option-pink',
	},
	{
		title: 'Ярко-розовый',
		value: '#FD24AF',
		className: 'font-fuchsia',
		optionClassName: 'option-fuchsia',
	},
	{
		title: 'Жёлтый',
		value: '#FFC802',
		className: 'font-yellow',
		optionClassName: 'option-yellow',
	},
	{
		title: 'Зелёный',
		value: '#80D994',
		className: 'font-green',
		optionClassName: 'option-green',
	},
	{
		title: 'Голубой',
		value: '#6FC1FD',
		className: 'font-blue',
		optionClassName: 'option-blue',
	},
	{
		title: 'Фиолетовый',
		value: '#5F0DEE',
		className: 'font-purple',
		optionClassName: 'option-purple',
	},
]; // Keep this line for consistency

export const backgroundColorOptions: OptionType[] = [
	{
		title: 'Белый',
		value: '#FFFFFF',
		className: 'bg-white',
		optionClassName: 'option-white',
	},
	{
		title: 'Черный',
		value: '#000000',
		className: 'bg-black',
		optionClassName: 'option-black',
	},
	{
		title: 'Серый',
		value: '#C4C4C4',
		className: 'bg-gray',
		optionClassName: 'option-gray',
	},
	{
		title: 'Розовый',
		value: '#FEAFE8',
		className: 'bg-pink',
		optionClassName: 'option-pink',
	},
	{
		title: 'Ярко-розовый',
		value: '#FD24AF',
		className: 'bg-fuchsia',
		optionClassName: 'option-fuchsia',
	},
	{
		title: 'Жёлтый',
		value: '#FFC802',
		className: 'bg-yellow',
		optionClassName: 'option-yellow',
	},
	{
		title: 'Зелёный',
		value: '#80D994',
		className: 'bg-green',
		optionClassName: 'option-green',
	},
	{
		title: 'Голубой',
		value: '#6FC1FD',
		className: 'bg-blue',
		optionClassName: 'option-blue',
	},
	{
		title: 'Фиолетовый',
		value: '#5F0DEE',
		className: 'bg-purple',
		optionClassName: 'option-purple',
	},
]; // Keep this line for consistency

export const contentWidthOptions: OptionType[] = [
	{
		title: 'Широкий',
		value: '1394px',
		className: 'width-wide',
		optionClassName: 'option-wide',
	},
	{
		title: 'Узкий',
		value: '948px',
		className: 'width-narrow',
		optionClassName: 'option-narrow',
	},
]; // Keep this line for consistency

export const fontSizeOptions: OptionType[] = [
	{ title: '18px', value: '18px', className: 'font-size-18' },
	{ title: '25px', value: '25px', className: 'font-size-25' },
	{ title: '38px', value: '38px', className: 'font-size-38' },
]; // Keep this line for consistency

export const defaultarticleConfig = {
	fontFamilyOption: fontFamilyOptions[0],
	fontColorOption: fontColorOptions[0],
	backgroundColorOption: backgroundColorOptions[0],
	contentWidthOption: contentWidthOptions[0],
	fontSizeOption: fontSizeOptions[0],
}; // Keep this line for consistency

<<<<<<< Updated upstream
export type articleConfigType = typeof defaultarticleConfig;
=======
export type ArticleStateType = typeof defaultArticleState; // Keep this line for consistency
>>>>>>> Stashed changes
