<template>
    <div id="advantages">
        <div class="advantages__content-wrapper">
            <span class="advantages__title">
                Наши преимущества
            </span>
            <div class="advantages__list-wrapper">
                <div class="advantages__list-line" />
                <advantage description="12 лет опыта работы">
                    <img
                            class="advantages__list-icon"
                            src="../../../../assets/icons/circle_confirm.svg"
                            alt="error"
                    />
                </advantage>
                <advantage description="мы используем косметику одного из лучших косметических брендов">
                    <img
                            class="advantages__list-icon"
                            src="../../../../assets/icons/cosmetic.svg"
                            alt="error"
                    />
                </advantage>
                <advantage description="команда профессионалов">
                    <img
                            class="advantages__list-icon"
                            src="../../../../assets/icons/people.svg"
                            alt="error"
                    />
                </advantage>
                <advantage description="безопасный сервис">
                    <img
                            class="advantages__list-icon"
                            src="../../../../assets/icons/gloves.svg"
                            alt="error"
                    />
                </advantage>
                <advantage description="стильный интерьер">
                    <img
                            class="advantages__list-icon"
                            src="../../../../assets/icons/sofa.svg"
                            alt="error"
                    />
                </advantage>
                <advantage description="выполнение покрасок любой сложности">
                    <img
                            class="advantages__list-icon"
                            src="../../../../assets/icons/brush.svg"
                            alt="error"
                    />
                </advantage>
            </div>
        </div>
    </div>
</template>

<script>
    import advantage from "./advantage";
    export default {
        name: "Advantages",
        components: { advantage },
    }
</script>

<style lang="scss" scoped>
    #advantages {
        height: 100%;
        background-image: url("../../../../assets/images/background_advantages.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        overflow: hidden;
        min-height: 800px;
    }
    .advantages__content-wrapper {
        padding: 2.5% 5%;
        height: 100%;
        background: rgba(0, 60, 143, 0.75);
        display: flex;
        flex-direction: column;
    }
    .advantages__title {
        font-family: Libre Baskerville, serif;
        font-size: 72px;
        line-height: 89px;
        color: #ffffff;
        margin-bottom: 100px;
        align-self: center;
    }
    .advantages__list-line {
        position: absolute;
        background-image: url("../../../../assets/images/advantages_line.svg");
        background-repeat: no-repeat;
        width: 14px;
        height: 76%;
        min-height: 600px;
        align-self: flex-start;
        left: 15%;
        fill: rgba(255,255,255, 0.75);
        margin-top: -80px;
    }
    .advantages__list-icon {
        width: 45px;
        max-height: 45px;
    }
    @media all and (max-width: 1060px) {
        .advantages__list-icon {
            max-width: 30px;
            max-height: 30px;
        }
    }
    @media all and (max-width: 550px) {
        .advantages__list-icon {
            max-width: 20px;
            max-height: 20px;
        }
        .advantages__title {
            font-size: 50px;
            line-height: 50px;
        }
    }
</style>
