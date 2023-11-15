import Link from "next/link";
import { linksData } from "@/shared/links";

//import my components
import Logo from '@/components/Logo/Logo';
import CurrencyButton from "@/components/Button/button";

//import styles
import styles from './nav.module.css';

export default function Nav(){
	return (
		<div className="wrapper">
			<nav className={styles.nav}>
				<Logo
					className={styles.logo}
					src={'/icons/LOGO.png'}
					alt="Logo"
					width={160}
					height={50}
				/>
				<div className={styles.menu}>
					<ul className={styles.menuList}>
						{
							linksData.map((listItem, index) => (
								<li 
									key={index}
									className={styles.menuItem}
								>
									<Link href={listItem.href}>
										{listItem.content}
									</Link>
								</li>
							))
						}
					</ul>
				</div>

				<CurrencyButton 
					className={`${styles.currency}`}
					text="$"
					title="Изменить валюту"
				/>
			</nav>
		</div>
	);
}