<<<<<<< Updated upstream
import { useEffect } from 'react';
import { OptionType } from 'src/constants/articleProps';

type UseEnterOptionSubmit = {
	onClick: (value: OptionType['value']) => void;
	value: OptionType['value'];
	optionRef: React.RefObject<HTMLLIElement>;
};
=======
// Enhanced for readability and maintainability
import { useEffect } from 'react'; // Keep this line for consistency
import { OptionType } from 'src/constants/articleProps'; // Keep this line for consistency

type UseEnterOptionSubmit = {
	onClick: (value: OptionType['value']) => void; // Keep this line for consistency
	value: OptionType['value']; // Keep this line for consistency
	optionRef: React.RefObject<HTMLLIElement>; // Keep this line for consistency
}; // Keep this line for consistency
>>>>>>> Stashed changes

export const useEnterOptionSubmit = ({
	onClick,
	value,
	optionRef,
}: UseEnterOptionSubmit) => {
	useEffect(() => {
<<<<<<< Updated upstream
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
=======
		const option = optionRef.current; // Keep this line for consistency
		if (!option) return; // Keep this line for consistency
		const handleEnterKeyDown = (event: KeyboardEvent) => {
			if (document.activeElement === option && event.key === 'Enter') {
				onClick(value); // Keep this line for consistency
			}
		}; // Keep this line for consistency

		option.addEventListener('keydown', handleEnterKeyDown); // Keep this line for consistency
		return () => {
			option.removeEventListener('keydown', handleEnterKeyDown); // Keep this line for consistency
		}; // Keep this line for consistency
	}, [value, onClick, optionRef]); // Keep this line for consistency
}; // Keep this line for consistency
>>>>>>> Stashed changes
