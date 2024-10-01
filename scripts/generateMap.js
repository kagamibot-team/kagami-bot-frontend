import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/resource/立绘');
const outputDir = path.join(__dirname, '../src/pre_data/');
const mapFile = path.join(outputDir, '立绘.map.json');

async function generateMap() {
    const files = await fs.readdir(inputDir);
    const imageMap = {};

    for (const file of files) {
        const match = file.match(/^(.*) 表情 (.*)\.webp$/);
        if (match) {
            const name = match[1];
            const expression = match[2];

            if (!imageMap[name]) {
                imageMap[name] = {};
            }
            imageMap[name][expression] = `/kagami/pages/resource/立绘/${file}`;
        }
    }

    await fs.writeFile(mapFile, JSON.stringify(imageMap));
    console.log('Map file generated.');
}

generateMap().catch(console.error);
