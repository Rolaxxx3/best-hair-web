<template>
    <div id="copyright">
        <div class="copyright--content-wrapper">
            <div class="copyright--content">
                <img
                    alt="error"
                    src="../../../assets/icons/map_marker.svg"
                />
                <span class="copyright--content-description">
                    Полтавская область,<br> г. Кременчуг, ул. Воинов-Интернационалистов 13. 28 маршрут, остановка “магазин Богдан”
                </span>
            </div>
            <div class="copyright--content">
                <span class="copyright--content-title">Расписание работы</span>
                <span class="copyright--content-description">
                    Пн.-Сб. c 9:00 до 19:00
                    <br>
                    Вс. с 9:00 до 16:00
                </span>
            </div>
        </div>
        <span class="copyright--copyright">Best Hair ©2020</span>
    </div>
</template>

<script>
    export default {
        name: "copyright"
    }
</script>

<style lang="scss" scoped>
    #copyright {
        min-height: 45vh;
        background: #00347B;
        padding: 2.5vh 5vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
    }
    .copyright--content-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .copyright--copyright {
        font-family: Libre Baskerville, serif;
        font-size: 36px;
        line-height: 45px;
        text-align: center;
        color: #FFFFFF;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
    .copyright--content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25vw;
    }
    .copyright--content-description {
        font-family: Libre Baskerville, serif;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
    .copyright--content-title {
        font-family: Libre Baskerville, serif;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 1rem;
    }
    @media all and (max-width: 1080px) {
        .copyright--content-title {
            font-size: 36px;
            line-height: 30px;
        }
        .copyright--content-description {
            font-size: 24px;
            line-height: 30px;
        }
    }
    @media all and (max-width: 650px) {
        .copyright--content-wrapper {
            flex-direction: column;
        }
        .copyright--content {
            width: 70vw;
            margin-bottom: 50px;
        }
    }
</style>