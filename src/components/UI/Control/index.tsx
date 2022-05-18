import { ChangeEvent, FC, useState } from 'react';
import { ReactComponent as Arrow } from 'assets/images/icons/select-arrow.svg';
import { Spiner } from 'components/UI/Spiner';
import { useClickOutside } from 'hooks/useClickOutside';

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

	const setActiveCurrency = (item: string) => {
		setCurrency?.(item);
		toggleOpenSelect();
	};
	const domNode = useClickOutside(() => {
		setOpenSelect(false);
	});

	const toggleOpenSelect = () => {
		if (!loading) {
			setOpenSelect(!isOpenSelect);
		}
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
			<div className={classes} ref={domNode}>
				<span className={styles.select__value}>{selectedCurrency}</span>
				<div className={styles.select__button} onClick={toggleOpenSelect}>
					<div className={styles.arrow}>
						{loading ? <Spiner /> : <Arrow style={{ width: '100%', height: '100%' }} />}
					</div>
				</div>
				<ul className={styles.select__list}>
					{selectItems.map((item, index) => (
						<li
							onClick={() => setActiveCurrency(item)}
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
