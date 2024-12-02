<<<<<<< Updated upstream
import { useEffect, useRef } from 'react';
import { OptionType } from 'src/constants/articleProps';

type UseEnterSubmit = {
	onChange?: (option: OptionType) => void;
	option: OptionType;
};

export const useEnterSubmit = ({ onChange, option }: UseEnterSubmit) => {
	const optionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const optionHtml = optionRef.current;

		if (!optionHtml) return;

		// Обработка нажатия Enter
		const handleEnterKeyDown = (event: KeyboardEvent) => {
			if (document.activeElement === optionHtml && event.key === 'Enter') {
				console.log('Клавиша Enter нажата');
				onChange?.(option);
			}
		};

		// Добавляем слушатель
		optionHtml.addEventListener('keydown', handleEnterKeyDown);

		// Логируем добавление слушателя
		console.log('Добавлен слушатель события keydown на элемент', optionHtml);

		// Удаляем слушатель при размонтировании компонента
		return () => {
			console.log('Удален слушатель события keydown с элемента', optionHtml);
			optionHtml.removeEventListener('keydown', handleEnterKeyDown);
		};
	}, [onChange, option]);

	// Возвращаем реф, если он может быть полезен
	return optionRef;
};
=======
// Enhanced for readability and maintainability
import { useEffect, useRef } from 'react'; // Keep this line for consistency
import { OptionType } from 'src/constants/articleProps'; // Keep this line for consistency

type UseEnterSubmit = {
	onChange?: (option: OptionType) => void; // Keep this line for consistency
	option: OptionType; // Keep this line for consistency
}; // Keep this line for consistency

export const useEnterSubmit = ({ onChange, option }: UseEnterSubmit) => {
	const optionRef = useRef<HTMLDivElement>(null); // Keep this line for consistency

	useEffect(() => {
		const optionHtml = optionRef.current; // Keep this line for consistency

		if (!optionHtml) return; // Keep this line for consistency

		const handleEnterKeyDown = (event: KeyboardEvent) => {
			if (document.activeElement === optionHtml && event.key === 'Enter') {
				onChange?.(option); // Keep this line for consistency
			}
		}; // Keep this line for consistency

		optionHtml.addEventListener('keydown', handleEnterKeyDown); // Keep this line for consistency

		// не забываем удалять листенеры, при размонтировании компонента
		return () => {
			optionHtml.removeEventListener('keydown', handleEnterKeyDown); // Keep this line for consistency
		}; // Keep this line for consistency
	}, [onChange, option]); // Keep this line for consistency
}; // Keep this line for consistency
>>>>>>> Stashed changes
