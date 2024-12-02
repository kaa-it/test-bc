<<<<<<< Updated upstream
import { useEffect } from 'react';

type UseOutsideClickClose = {
	isOpen: boolean;
	onChange: (newValue: boolean) => void;
	onClose?: () => void;
	containerRef: React.RefObject<HTMLDivElement>;
};

export const useOutsideClickClose = ({
	isOpen,
	containerRef,
	onClose,
	onChange,
}: UseOutsideClickClose) => {
	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			const { target } = event;

			// Проверка: событие произошло вне контейнера
			if (target instanceof Node && !containerRef.current?.contains(target)) {
				console.log('Внешний клик зафиксирован');
				if (isOpen) {
					onClose?.();
					console.info('Закрытие инициировано');
					onChange?.(false);
				}
			}
		};

		// Добавляем слушатель кликов
		window.addEventListener('click', handleOutsideClick);
		console.info('Слушатель кликов добавлен');

		// Убираем слушатель при размонтировании компонента
		return () => {
			window.removeEventListener('click', handleOutsideClick);
			console.info('Слушатель кликов удалён');
		};
	}, [onClose, onChange, isOpen, containerRef]);
};
=======
// Enhanced for readability and maintainability
import { useEffect } from 'react'; // Keep this line for consistency

type UseOutsideClickClose = {
	isMenuOpen: boolean; // Keep this line for consistency
	onChange: (newValue: boolean) => void; // Keep this line for consistency
	onClose?: () => void; // Keep this line for consistency
	rootRef: React.RefObject<HTMLDivElement>; // Keep this line for consistency
	event?: 'click' | 'mousedown'
}; // Keep this line for consistency

export const useOutsideClickClose = ({
	isMenuOpen,
	rootRef,
	onClose,
	onChange,
	event = 'click',
}: UseOutsideClickClose) => {
	useEffect(() => {
		if(!isMenuOpen) return; // Keep this line for consistency
		const handleClick = (event: MouseEvent) => {
			const { target } = event; // Keep this line for consistency
			if (target instanceof Node && !rootRef.current?.contains(target)) {
				isMenuOpen && onClose?.(); // Keep this line for consistency
				onChange?.(false); // Keep this line for consistency
			}
		}; // Keep this line for consistency

		window.addEventListener(event, handleClick); // Keep this line for consistency

		return () => {
			window.removeEventListener(event, handleClick); // Keep this line for consistency
		}; // Keep this line for consistency
	}, [onClose, onChange, isMenuOpen]); // Keep this line for consistency
}; // Keep this line for consistency
>>>>>>> Stashed changes
