<template>
    <div id="about">
        <div class="about__content-wrapper">
            <div>
                <div class="about__wrapper-row">
                    <div class="about__icons-wrapper">
                        <img
                            class="about__icon"
                            src="../../../assets/icons/instagram.svg"
                            alt="Error"
                        />
                        <img
                            class="about__icon"
                            src="../../../assets/icons/facebook.svg"
                            alt="Error"
                        />
                    </div>
                    <div class="about__title-wrapper">
                        <span class="about__title">BEST HAIR</span>
                        <span class="about__subtitle">САЛОН КРАСОТЫ</span>
                    </div>
                    <div class="about__burger-menu" @click="changeDisplayNavbar()">
                        <p class="about__menu-line" />
                        <p class="about__menu-line" />
                        <p class="about__menu-line" />
                    </div>
                </div>
            </div>
            <div class="about__wrapper-row">
                <div class="about__text-wrapper">
                    <span class="about__description">Парикмахерская с 2008</span>
                </div>
                <a
                    class="about__button-link"
                    href="#"
                    v-scroll-to="'#services'"
                >
                    <span class="about__button-text">Ознакомиться с нашими услугами</span>
                </a>
                <div class="about__text-wrapper">
                    <span class="about__description">Профессиональная студия цвета с 2010</span>
                </div>
            </div>
            <div class="about__wrapper-scroll">
                <span class="about__text-scroll">
                    Узнать больше
                </span>
                <img
                        class="about__arrow-down"
                        src="../../../assets/icons/arrow_down.svg"
                        alt="Error"
                />
            </div>
        </div>
    </div>
</template>

<script>
    const EVENTS = {
        changeDisplayNavbar: "changeDisplayNavbar",
    }
    export default {
        name: "About",
        methods: {
            changeDisplayNavbar () {
                this.$emit(EVENTS.changeDisplayNavbar)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #about {
        min-height: 660px;
        height: 100%;
        background-image: url("../../../assets/images/landing_background.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .about__content-wrapper {
        padding: 2.5% 5% 0;
        background: rgba(29, 29, 29, 0.69);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .about__wrapper-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 28px;
    }
    .about__wrapper-scroll {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 5%;
    }
    .about__text-scroll {
        align-self: center;
        font-family: Libre Baskerville, serif;
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        border-bottom: 1px solid #FFFFFF;
        margin-bottom: 20px;
    }
    .about__title {
        color: #ffffff;
        font-family: Trajan Pro, serif;
        font-size: 84px;
        line-height: 64px;
        margin-bottom: 24px;
    }
    .about__subtitle {
        font-family: Trajan Pro, serif;
        font-size: 36px;
        color: #ffffff;
    }
    .about__title-wrapper {
        display: flex;
        flex-direction: column;
    }
    .about__menu-line {
        height: 4px;
        width: 46px;
        background-color: white;
        margin-block-start: 0;
        margin-block-end: 12px;
        border-radius: 4px;

        &:last-child {
            margin-block-end: 0;
        }
    }
    .about__icons-wrapper {
        width: 128px;
        display: flex;
        justify-content: space-between;
    }
    .about__icon {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
            filter: invert(26%) sepia(79%) saturate(7181%) hue-rotate(204deg) brightness(94%) contrast(84%);
        }
    }
    .about__burger-menu {
        cursor: pointer;
        margin-left: 7%;
    }
    .about__description {
        max-width: 300px;
        font-family: Libre Baskerville, serif;
        color: #ffffff;
        font-size: 32px;
    }
    .about__button-link {
        text-decoration: none;
        border-radius: 3px;
        border: 2px solid #FFFFFF;
        padding: 30px 60px;
        transition-duration: 0.25s;
        margin-right: 30px;
        margin-left: 30px;
        width: 25vw;

        &:hover {
            border-color: #1565C0;
            background-color: #1565C0;
            text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
    .about__button-text {
        font-size: 36px;
        color: #ffffff;
        letter-spacing: 0.05em;
        font-family: Libre Baskerville, serif;
    }
    .about__text-wrapper {
        max-width: 300px;
    }
    @media all and (max-width: 1191px) {
        .about__button-link {
            padding: 20px 30px;
        }
        .about__button-text {
            font-size: 28px;
        }
        .about__description {
            font-size: 28px;
        }
        .about__text-scroll {
            font-size: 20px;
        }
    }
    @media all and (max-width: 900px) {
        .about__title {
            font-size: 52px;
            line-height: 48px;
        }
        .about__subtitle {
            font-family: Trajan Pro, serif;
            font-size: 24px;
        }
    }
    @media all and (max-width: 900px) and (max-height: 400px){
        .about__button-text {
            font-size: 24px;
        }
    }
    @media all and (max-width: 800px) {
        .about__title {
            margin-bottom: 12px;
        }
        .about__button-link {
            width: 50vw;
        }
        .about__wrapper-row {
            flex-direction: column;
            align-items: center;

            &:first-child {
                flex-direction: row;
            }
        }
        .about__text-wrapper {
            margin-bottom: 10%;
            margin-top: 10%;
        }
        .about__description {
            font-size: 24px;
        }
        .about__text-wrapper {
            max-width: 200px;
        }
        .about__button-link {
            max-width: 60%;
        }
    }
</style>
