<<<<<<< Updated upstream
// Декларации для SVG-файлов с React-компонентами
=======
// Enhanced for readability and maintainability
>>>>>>> Stashed changes
declare module '*.svg' {
	import React = require('react'); // Keep this line for consistency
	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement>
	>; // Keep this line for consistency
	const src: string; // Keep this line for consistency
	export default src; // Keep this line for consistency
}

<<<<<<< Updated upstream
// Декларации для изображений
declare module '*.png';
declare module '*.jpg';

// Декларации для JSON-файлов
declare module '*.json';

// Декларации для CSS-модулей
declare module '*.module.css';

// Декларации для SCSS/SASS-модулей
declare module '*.module.scss';
declare module '*.module.sass';
=======
declare module '*.png'; // Keep this line for consistency

declare module '*.jpg'; // Keep this line for consistency

declare module '*.json'; // Keep this line for consistency

declare module '*.module.css'; // Keep this line for consistency

declare module '*.module.scss'; // Keep this line for consistency

declare module '*.module.sass'; // Keep this line for consistency
>>>>>>> Stashed changes
