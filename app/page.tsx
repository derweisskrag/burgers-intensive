import {
	gilroy,
	merriweather,
	inter, 
	lora
} from "@/fonts";

//import components
import MenuButton from "@/components/Button/button";
import Image from "next/image"

//import styles
import styles from "@/styles/home.module.css";

export default function Home(){
	return (
		<section className="mainContent">
			<div className="wrapper">
				<div className={styles.mainInfo}>
					<span className={styles.mainSmallInfo}>Новое меню</span>
					<h1 className={`${styles.mainTitle} ${merriweather.styleName}`}>Бургер Чеддер</h1>
					<p className={styles.mainText}>
						Мы обновили наше меню, спешите попробовать сезонные новинки и 
						насладиться отличным вкусом наших бургеров. Готовим для вас 
						лучшие бургеры в городе из отборной мраморной говядины.
					</p>
				</div>

				<MenuButton
					className={"button"}
					text="Смотреть меню"
					title="Смотреть меню"
				/>
			</div>

			<div className={styles.mainImage}>
				<Image 
					src={"/images/main_burger.png"}
					alt="Главный бургер"
					width={500}
					height={500}
				/>
			</div>
		</section>
	);
}