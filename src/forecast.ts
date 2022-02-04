import { env } from './env';


const key = env.key;
// 50.463653, 30.468416
const lngLatKyiv = {
    lat: 30.4958,
    lng: 50.4434
};
const url = `http://api.openweathermap.org/data/2.5/forecast?q=Kyiv&appid=${key}`;
// const url = 'http://api.openweathermap.org/data/2.5/forecast?id=703448&units=metric&mode=json&APPID=19e738728f18421f2074f369bdb54e81&callback=_jsonps24i3bcse6n'
export const getForecast = () => {
    return new Promise<any>((resolve) => {
        let xhr = new XMLHttpRequest();


// 2. Настраиваем его: GET-запрос по URL /article/.../load
        xhr.open('GET', url);

// 3. Отсылаем запрос
        xhr.send();

// 4. Этот код сработает после того, как мы получим ответ сервера
        xhr.onload = function () {
            if (xhr.status !== 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                // alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
            } else { // если всё прошло гладко, выводим результат
                // alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
                resolve(xhr.response);
            }
        };

        xhr.onprogress = function (event) {
            if (event.lengthComputable) {
                // alert(`Получено ${event.loaded} из ${event.total} байт`);
            } else {
                // alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
            }

        };

        xhr.onerror = function () {
            // alert("Запрос не удался");
        };
    });

};
