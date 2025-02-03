import fs from 'fs-extra';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/resource/立绘/待压缩');
const outputDir = path.join(__dirname, '../public/resource/立绘');

async function clearWebpFiles() {
    const files = await fs.readdir(outputDir);

    // 只删除 .webp 文件
    await Promise.all(
        files.map(async (file) => {
            const filePath = path.join(outputDir, file);
            const stat = await fs.stat(filePath);

            if (stat.isFile() && file.endsWith('.webp')) {
                await fs.unlink(filePath);
                console.log(`Deleted: ${filePath}`);
            }
        })
    );
}

async function compressImages() {
    // await clearWebpFiles();
    // console.log('Existing .webp files cleared.');
    const files = await fs.readdir(inputDir);

    for (const file of files) {
        const match = file.match(/^(.*) 表情 (.*)\.png$/);
        if (match) {
            const name = match[1];
            const expression = match[2];
            const outputFilePath = path.join(outputDir, `${name} 表情 ${expression}.webp`);

            await sharp(path.join(inputDir, file))
                .resize({ width: 1750, height: 1375, fit: sharp.fit.inside }) // 将图片缩放到 1750x1375
                .webp({ quality: 85 }) // 调整质量参数
                .toFile(outputFilePath);
        }
        console.log(`Compressed: ${file}`);
    }

    console.log('Image compression completed.');
}

async function run() {
    await compressImages();
}

run().catch(console.error);
