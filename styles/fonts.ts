import { Inter, Lora, Source_Sans_3 } from 'next/font/google';
import localFont from 'next/font/local';
 
// define your variable fonts
const inter = Inter({
	subsets: ["latin"],
	weights: [400, 500, 600, 700]
});

const lora = Lora({
	subsets: ["latin"]
});


// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
const gilroy = localFont({ 
	src: './fonts/Gilroy-Semibold.ttf' 
});

const merriweather = localFont({
	src: './fonts/Merriweather-Black.ttf'
})
 
export { 
	inter, 
	lora,  
	gilroy,
	merriweather
}