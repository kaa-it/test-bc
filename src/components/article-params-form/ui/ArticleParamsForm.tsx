import { useRef, useState } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'src/components/text';
import { Select } from 'src/components/select';
import { Separator } from 'src/components/separator';
import {
	articleConfigType,
	backgroundColorOptions,
	contentWidthOptions,
	defaultarticleConfig,
	fontColorOptions,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';

import styles from '../styles/ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { useOutsideClickClose } from '../hooks/useToggleFormActiv';

export const ArticleParamsForm = ({
	updateglobalAppConfig,
}: {
	updateglobalAppConfig: (value: articleConfigType) => void;
}) => {
	const [articleConfig, setarticleConfig] = useState(defaultarticleConfig);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const asideStyle = clsx({
		[styles.container]: true,
		[styles.container_open]: isOpen,
	});

	function onClose(value: boolean): void {
		setIsOpen(value);
	}

	function handleFormClear(): void {
		setarticleConfig(defaultarticleConfig);
		updateglobalAppConfig(defaultarticleConfig);
	}

	function handleFormSubmit(event: React.FormEvent): void {
		event.preventDefault();
		updateglobalAppConfig(articleConfig);
	}

	useOutsideClickClose({
		isOpen,
		containerRef,
		onClose,
	});

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			/>
			<aside className={asideStyle} ref={containerRef}>
				<form className={styles.form} onSubmit={handleFormSubmit}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>

					<Select
						title='Шрифт'
						selected={articleConfig.fontFamilyOption}
						options={fontFamilyOptions}
						placeholder='Выберете шрифт'
						onChange={(event) => {
							setarticleConfig({
								...articleConfig,
								fontFamilyOption: event,
							});
						}}
					/>
					<Select
						title='Размер шрифта'
						selected={articleConfig.fontSizeOption}
						options={fontSizeOptions}
						placeholder='Выберете размер шрифта'
						onChange={(event) => {
							setarticleConfig({
								...articleConfig,
								fontSizeOption: event,
							});
						}}
					/>

					<Select
						title='Цвет шрифта'
						selected={articleConfig.fontColorOption}
						options={fontColorOptions}
						placeholder='Выберете цвет шрифта'
						onChange={(event) => {
							setarticleConfig({
								...articleConfig,
								fontColorOption: event,
							});
						}}
					/>

					<Separator />

					<Select
						title='Цвет фона'
						selected={articleConfig.backgroundColorOption}
						options={backgroundColorOptions}
						placeholder='Выберете цвет фона'
						onChange={(event) => {
							setarticleConfig({
								...articleConfig,
								backgroundColorOption: event,
							});
						}}
					/>

					<Select
						title='Ширина контента'
						selected={articleConfig.contentWidthOption}
						options={contentWidthOptions}
						placeholder='Выберете ширину контента'
						onChange={(event) => {
							setarticleConfig({
								...articleConfig,
								contentWidthOption: event,
							});
						}}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={handleFormClear} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
