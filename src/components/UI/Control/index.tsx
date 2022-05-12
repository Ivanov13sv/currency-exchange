import { ChangeEvent, FC, useState } from 'react';
import { ReactComponent as Arrow } from 'assets/images/icons/select-arrow.svg';
import { Spiner } from 'components/UI/Spiner';
import styles from './style.module.scss';

interface ControlProps {
	disabled?: boolean;
	selectItems: string[];
	loading?: boolean;
	result?: string;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	selectedCurrency?: string;
	setCurrency?: (currency: string) => void;
}

export const Control: FC<ControlProps> = ({
	disabled,
	selectItems,
	loading = false,
	selectedCurrency,
	setCurrency,
	result,
	...props
}) => {
	const [isOpenSelect, setOpenSelect] = useState(false);
	const classes = isOpenSelect ? `${styles.select} ${styles.select__active}` : styles.select;

	const test = (item: string) => {
		setCurrency?.(item);
		setOpenSelect(false);
	};

	return (
		<div className={styles.control}>
			<input
				type="number"
				className={styles.input}
				disabled={disabled}
				value={result}
				{...props}
			/>
			<div className={classes}>
				<span className={styles.select__value}>{selectedCurrency}</span>
				<div className={styles.select__button} onClick={() => setOpenSelect(!isOpenSelect)}>
					{loading ? <Spiner /> : <Arrow className={styles.arrow} />}
				</div>
				<ul className={styles.select__list}>
					{selectItems.map((item, index) => (
						<li
							onClick={() => test(item)}
							key={item + index}
							className={styles.select__item}
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
