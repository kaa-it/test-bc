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
