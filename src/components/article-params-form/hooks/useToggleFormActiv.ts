import { useEffect } from 'react';

type UseOutsideClickClose = {
	isOpen: boolean;
	containerRef: React.RefObject<HTMLDivElement>;
	onClose: (value: boolean) => void;
};

export const useOutsideClickClose = ({
	isOpen,
	containerRef,
	onClose,
}: UseOutsideClickClose) => {
	useEffect(() => {
		// Обработчик для нажатия клавиши Escape
		const handleEscapePress = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isOpen) {
				console.log('Нажата клавиша Escape. Закрываем.');
				onClose(!isOpen);
			}
		};

		// Обработчик для кликов вне контейнера
		const handleOutsideClick = (event: MouseEvent) => {
			const { target } = event;
			if (target instanceof Node && !containerRef.current?.contains(target)) {
				if (isOpen) {
					console.log('Внешний клик зафиксирован. Закрываем.');
					onClose(!isOpen);
				}
			}
		};

		// Добавляем слушатели событий
		window.addEventListener('keydown', handleEscapePress);
		window.addEventListener('mousedown', handleOutsideClick);
		console.info('Слушатели событий добавлены');

		// Удаляем слушатели при размонтировании
		return () => {
			window.removeEventListener('keydown', handleEscapePress);
			window.removeEventListener('mousedown', handleOutsideClick);
			console.info('Слушатели событий удалены');
		};
	}, [isOpen, onClose, containerRef]);
};
