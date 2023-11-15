import Image from 'next/image';
import styles from "./logo.module.css";

export type LogoProps = {
	className: string;
	src: string;
	alt?: string;
	width: int;
	height: int;
};

export default function Logo({
	className,
	src,
	alt,
	width,
	height
} : LogoProps
){
	return (
		<div className={styles.logo}>
			<Image 
				src={src}
				alt={alt}
				width={width}
				height={height}
			/>
		</div>
	);
}