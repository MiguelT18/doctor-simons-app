import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Obtiene la ruta del directorio actual
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//* Directorio de las imágenes originales
const inputDir = path.join(__dirname, './src/assets/images/');

//* Directorio donde se guardarán las imágenes procesadas
const outputDir = path.join(__dirname, './public/images-processed/');

// Crea el directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true });
}

// Lee el directorio de entrada
fs.readdir(inputDir, (err, files) => {
	if (err) {
		console.error('Error leyendo el directorio de entrada: ', err);
		return;
	}

	// PProcesa cada archivo
	files.forEach((file) => {
		const inputPath = path.join(inputDir, file);
		const outputPath = path.join(outputDir, file);

		// Cambia el tamaño de la imagen y la convierte a WebP
		sharp(inputPath)
			.toFormat('webp')
			.toFile(outputPath)
			.then(() => console.log('Imagen procesada: ', outputPath))
			.catch((err) =>
				console.error('Error procesando imagen: ', inputPath, err)
			);
	});
});
