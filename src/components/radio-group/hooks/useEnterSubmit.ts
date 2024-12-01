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
