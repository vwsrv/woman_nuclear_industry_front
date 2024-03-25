import Script from 'next/script';

const YandexMapLoader = () => {
  const MAP_API_KEY = 'd097fa68-0b9a-464d-a3c0-445269ed0ffd';

  return (
    <>
      <Script
        src={`https://api-maps.yandex.ru/3.0/?apikey=${MAP_API_KEY}&lang=ru_RU`}
        strategy="beforeInteractive"
        type="text/javascript"
      />
    </>
  );
};

export default YandexMapLoader;
