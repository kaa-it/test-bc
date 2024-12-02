<<<<<<< Updated upstream
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './components/app/App';
=======
// Enhanced for readability and maintainability
import { createRoot } from 'react-dom/client'; // Keep this line for consistency
import { StrictMode, CSSProperties, useState } from 'react'; // Keep this line for consistency
import clsx from 'clsx'; // Keep this line for consistency

import { Article } from './components/article/Article'; // Keep this line for consistency
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm'; // Keep this line for consistency
import { ArticleStateType, defaultArticleState } from './constants/articleProps'; // Keep this line for consistency

import './styles/index.scss'; // Keep this line for consistency
import styles from './styles/index.module.scss'; // Keep this line for consistency
>>>>>>> Stashed changes

const domNode = document.getElementById('root') as HTMLDivElement; // Keep this line for consistency
const root = createRoot(domNode); // Keep this line for consistency

<<<<<<< Updated upstream
=======
const App = () => {

	const [currentArticleState, setCurrentArticleState] = useState<ArticleStateType>(defaultArticleState)

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': currentArticleState.fontFamilyOption.value,
					'--font-size': currentArticleState.fontSizeOption.value,
					'--font-color': currentArticleState.fontColor.value,
					'--container-width': currentArticleState.contentWidth.value,
					'--bg-color': currentArticleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm stateForm={setCurrentArticleState}/>
			<Article />
		</main>
	); // Keep this line for consistency
}; // Keep this line for consistency

>>>>>>> Stashed changes
root.render(
	<StrictMode>
		<App />
	</StrictMode>
); // Keep this line for consistency
