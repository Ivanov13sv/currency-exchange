import { useRef, useEffect } from 'react';

export const useClickOutside = (callback: () => void) => {
	const domNode = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		const handler = (event: any) => {
			if (!domNode.current?.contains(event.target)) {
				callback();
			}
		};

		document.addEventListener('mousedown', handler);

		return () => {
			document.removeEventListener('mousedown', handler);
		};
	});

	return domNode;
};
