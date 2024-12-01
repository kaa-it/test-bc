import { useEffect } from 'react';
import { OptionType } from 'src/constants/articleProps';

type UseEnterOptionSubmit = {
	onClick: (value: OptionType['value']) => void;
	value: OptionType['value'];
	optionRef: React.RefObject<HTMLLIElement>;
};

export const useEnterOptionSubmit = ({
	onClick,
	value,
	optionRef,
}: UseEnterOptionSubmit) => {
	useEffect(() => {
		const optionElement = optionRef.current;

		// Проверка наличия элемента
		if (!optionElement) {
			console.warn('Элемент для обработки Enter не найден');
			return;
		}

		// Обработчик события нажатия клавиши Enter
		const handleEnterKeyDown = (event: KeyboardEvent) => {
			if (document.activeElement === optionElement && event.key === 'Enter') {
				console.log(`Нажат Enter для значения: ${value}`);
				onClick(value);
			}
		};

		// Добавляем слушатель события
		optionElement.addEventListener('keydown', handleEnterKeyDown);
		console.info('Слушатель события keydown добавлен');

		// Убираем слушатель при размонтировании
		return () => {
			optionElement.removeEventListener('keydown', handleEnterKeyDown);
			console.info('Слушатель события keydown удалён');
		};
	}, [value, onClick, optionRef]);
};
