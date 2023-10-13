document.addEventListener("DOMContentLoaded", function() {
    const images = [
        ["https://static.wikia.nocookie.net/genshin-impact/images/0/0b/%D0%92%D1%80%D0%B0%D0%B3_%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%BF%D0%BE%D0%BB%D1%83%D0%B8%D0%B7%D0%B2%D0%B5%D1%87%D0%BD%D0%BE%D0%B9_%D0%BC%D0%B0%D1%82%D1%80%D0%B8%D1%86%D1%8B_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%B0_%D0%BD%D0%B0%D0%B1%D0%BB%D1%8E%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F.png/revision/latest/scale-to-width-down/1000?cb=20230215161520&path-prefix=ru", "Алгоритм полуизвечной матрицы оператора наблюдения"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/6/6c/%D0%92%D1%80%D0%B0%D0%B3_%D0%91%D0%B5%D1%81%D0%BA%D0%BE%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%B9_%D0%BC%D0%B5%D1%85%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2.png/revision/latest/scale-to-width-down/1000?cb=20211124105849&path-prefix=ru", "Бесконечный механический массив"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/e/e5/%D0%92%D1%80%D0%B0%D0%B3_%D0%93%D0%B5%D0%BE_%D0%B3%D0%B8%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%B7%D0%B8%D1%81.png/revision/latest?cb=20220106201123&path-prefix=ru", "Гео гипостазис"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/5/5a/%D0%92%D1%80%D0%B0%D0%B3_%D0%90%D0%BD%D0%B5%D0%BC%D0%BE_%D0%B3%D0%B8%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%B7%D0%B8%D1%81.png/revision/latest?cb=20220106201503&path-prefix=ru", "Анемо гипостазис"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/1/1f/%D0%92%D1%80%D0%B0%D0%B3_%D0%94%D0%B5%D0%BD%D0%B4%D1%80%D0%BE_%D0%B3%D0%B8%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%B7%D0%B8%D1%81.png/revision/latest?cb=20230330071055&path-prefix=ru", "Дендро гипостазис"],
        ["https://static.wikia.nocookie.net/gensin-impact/images/c/cf/Enemy_Aeonblight_Drake.png/revision/latest?cb=20221123112547", "Дракон вечных бедствий"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/8/82/%D0%92%D1%80%D0%B0%D0%B3_%D0%94%D1%80%D0%B5%D0%B2%D0%BD%D0%B8%D0%B9_%D0%B3%D0%B5%D0%BE%D0%B2%D0%B8%D1%88%D0%B0%D0%BF.png/revision/latest/scale-to-width-down/1000?cb=20210928160114&path-prefix=ru", "Древний геовишап"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/6/60/%D0%92%D1%80%D0%B0%D0%B3_%D0%97%D0%BC%D0%B5%D0%B9_%D1%80%D1%83%D0%B8%D0%BD.png/revision/latest/scale-to-width-down/1000?cb=20220819043525&path-prefix=ru", "Змей руин"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/3/3e/%D0%92%D1%80%D0%B0%D0%B3_%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9_%D0%B2%D0%BE%D0%BB%D1%87%D0%B8%D0%B9_%D0%B2%D0%BE%D0%B6%D0%B0%D0%BA.png/revision/latest?cb=20220108203251&path-prefix=ru", "Золотой волчий вожак"],
        ["Image/Boss/Boss10.svg", "Император огня и железа"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/0/09/%D0%92%D1%80%D0%B0%D0%B3_%D0%9A%D1%80%D0%B8%D0%BE_%D0%B3%D0%B8%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%B7%D0%B8%D1%81.png/revision/latest?cb=20220819042606&path-prefix=ru", "Крио гипостазис"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/8/87/%D0%92%D1%80%D0%B0%D0%B3_%D0%9A%D1%80%D0%B8%D0%BE_%D0%BF%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D1%82%D0%BD%D0%B8%D0%BA.png/revision/latest/scale-to-width-down/1000?cb=20220816135233&path-prefix=ru", "Крио папоротник"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/3/39/%D0%92%D1%80%D0%B0%D0%B3_%D0%9C%D0%B0%D0%B3%D1%83_%D0%BA%D1%8D%D0%BD%D0%BA%D0%B8.png/revision/latest/scale-to-width-down/1000?cb=20220819051224&path-prefix=ru", "Магу кэнки"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/d/d7/%D0%9C%D0%B0%D0%BD%D0%B8%D1%84%D0%B5%D1%81%D1%82%D0%B0%D1%86%D0%B8%D1%8F_%D0%B3%D1%80%D0%BE%D0%BC%D0%B0.png/revision/latest?cb=20211110221232&path-prefix=ru", "Манифестация грома"],
        ["Image/Boss/Boss15.svg", "Морской конёк тысячелетней жемчужины"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/9/9a/%D0%92%D1%80%D0%B0%D0%B3_%D0%9E%D0%BA%D0%B5%D0%B0%D0%BD%D0%B8%D0%B4.png/revision/latest/scale-to-width-down/1000?cb=20220207052544&path-prefix=ru", "Океанид"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/5/5d/%D0%92%D1%80%D0%B0%D0%B3_%D0%9F%D0%B5%D1%80%D0%BD%D0%B0%D1%82%D1%8B%D0%B9_%D0%BF%D0%BB%D0%B5%D1%81%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA.png/revision/latest/scale-to-width-down/1000?cb=20230406204335&path-prefix=ru", "Пернатый плесенник"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/2/2d/%D0%92%D1%80%D0%B0%D0%B3_%D0%9F%D0%B8%D1%80%D0%BE_%D0%B3%D0%B8%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%B7%D0%B8%D1%81.png/revision/latest/scale-to-width-down/1000?cb=20210810173456&path-prefix=ru", "Пиро гипостазис"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/8/8b/%D0%92%D1%80%D0%B0%D0%B3_%D0%9F%D0%B8%D1%80%D0%BE_%D0%BE%D1%80%D1%85%D0%B8%D0%B4%D0%B5%D1%8F.png/revision/latest/scale-to-width-down/1000?cb=20220207111412&path-prefix=ru", "Пиро орхидея"],
        ["Image/Boss/Boss20.svg", "Стая вишапов глубин"],
        ["Image/Boss/Boss21.svg", "Сюита ледяного ветра"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/4/4b/%D0%92%D1%80%D0%B0%D0%B3_%D0%A3%D0%BD%D1%83%D1%82_%D0%A1%D0%B5%D1%82%D0%B5%D1%85%D0%B0.png/revision/latest?cb=20230209091419&path-prefix=ru", "Унут Сетеха"],
        ["Image/Boss/Boss23.svg", "Чудовищный креститель"],
        ["Image/Boss/Boss24.svg", "Экспериментальный генератор поля"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/9/9d/%D0%92%D1%80%D0%B0%D0%B3_%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE_%D0%B3%D0%B8%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%B7%D0%B8%D1%81.png/revision/latest?cb=20220425161439&path-prefix=ru", "Электро гипостазис"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/a/a7/%D0%92%D1%80%D0%B0%D0%B3_%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE_%D0%BF%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D1%82%D0%BD%D0%B8%D0%BA.png/revision/latest?cb=20221025143441&path-prefix=ru", "Электро папоротник"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/6/6e/%D0%92%D1%80%D0%B0%D0%B3_%D0%90%D0%B6%D0%B4%D0%B0%D1%85%D0%B0.png/revision/latest/scale-to-width-down/1000?cb=20220817164527&path-prefix=ru", "Аждаха"],
        ["Image/Boss/Boss1.svg", "Андриус"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/1/1a/%D0%94%D0%B2%D0%B0%D0%BB%D0%B8%D0%BD_%28%D0%A3%D0%B6%D0%B0%D1%81_%D0%91%D1%83%D1%80%D0%B8%29.png/revision/latest/scale-to-width-down/1000?cb=20210615200924&path-prefix=ru", "Ужас Бури Двалин"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/0/0b/%D0%92%D1%80%D0%B0%D0%B3_%D0%9C%D0%B0%D0%B3%D0%B0%D1%86%D1%83_%D0%BC%D0%B8%D1%82%D0%B0%D0%BA%D1%8D_%D0%9D%D0%B0%D1%80%D1%83%D0%BA%D0%B0%D0%BC%D0%B8_%D0%BD%D0%BE_%D0%BC%D0%B8%D0%BA%D0%BE%D1%82%D0%BE_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82.png/revision/latest/scale-to-width-down/1000?cb=20230228134259&path-prefix=ru", "Магацу митакэ Наруками но микото"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/6/69/%D0%92%D1%80%D0%B0%D0%B3_%D0%A1%D1%91%D0%BA%D0%B8_%D0%BD%D0%BE_%D0%9A%D0%B0%D0%BC%D0%B8.png/revision/latest?cb=20221203232205&path-prefix=ru", "Сёки но Ками"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/e/e8/Enemy_Signora.png/revision/latest?cb=20210831141057&path-prefix=ru", "Синьора"],
        ["https://static.wikia.nocookie.net/genshin-impact/images/4/47/%D0%92%D1%80%D0%B0%D0%B3_%D0%97%D0%B0%D1%89%D0%B8%D1%82%D0%BD%D0%B8%D0%BA_%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B3%D0%BE_%D0%BE%D0%B0%D0%B7%D0%B8%D1%81%D0%B0.png/revision/latest?cb=20230418045528&path-prefix=ru", "Страж оазиса Апепа"],
        ["Image/Boss/Boss34.svg", "Чайльд"]
    ];

    const imageElement = document.getElementById("BossImage");
    let nameBoss = document.querySelector(".BossName");
    const bossbutton = document.getElementById("BossButton")

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    function setRandomImage() {
        const randomImage = getRandomImage();
        imageElement.src = randomImage[0]; // Устанавливаем картинку
        nameBoss.textContent = randomImage[1]; // Устанавливаем имя босса
    }

    bossbutton.addEventListener("click", () => {
        setRandomImage();
    });
})