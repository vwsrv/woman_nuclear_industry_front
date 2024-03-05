/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Для компонента News требуется явно указывать домен для изображений, это пример изображения с рандомной страницы, в дальнейшем уточнить откуда получаем изображения
    domains: ['sun9-79.userapi.com']
  }
};

export default nextConfig;
