export type ButtonProps = {
	className: string;
	text: string;
	title?: string;
};

export default function Button({
	className,
	text,
	title
} : ButtonProps
){
	return (
		<div className={className} title={title}>
			<button>{text}</button>
		</div>
	);
}