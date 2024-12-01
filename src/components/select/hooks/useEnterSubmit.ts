import { useEffect } from 'react';

type UseEnterSubmit = {
	onChange: React.Dispatch<React.SetStateAction<boolean>>;
	triggerRef: React.RefObject<HTMLDivElement>;
};

export const useEnterSubmit = ({ triggerRef, onChange }: UseEnterSubmit) => {
	useEffect(() => {
		const placeholderEl = triggerRef.current;
		if (!placeholderEl) return;

		const handleEnterKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Enter') {
				onChange((isOpen: boolean) => !isOpen);
			}
		};
		placeholderEl.addEventListener('keydown', handleEnterKeyDown);

		return () => {
			placeholderEl.removeEventListener('keydown', handleEnterKeyDown);
		};
	}, []);
};
