<template>
    <div id="about">
        <div class="about--content-wrapper">
            <div>
                <div class="about--wrapper-row">
                    <div class="about--icons-wrapper">
                        <img
                            class="about--icon"
                            src="../../../assets/icons/instagram.svg"
                            alt="Error"
                        />
                        <img
                            class="about--icon"
                            src="../../../assets/icons/facebook.svg"
                            alt="Error"
                        />
                    </div>
                    <div class="about--title-wrapper">
                        <span class="about--title">BEST HAIR</span>
                        <span class="about--subtitle">САЛОН КРАСОТЫ</span>
                    </div>
                    <div class="about--burger-menu" @click="changeDisplayNavbar()">
                        <p class="about--menu-line" />
                        <p class="about--menu-line" />
                        <p class="about--menu-line" />
                    </div>
                </div>
            </div>
            <div class="about--wrapper-row">
                <div class="about--text-wrapper">
                    <span class="about--description">Парикмахерская с 2008</span>
                </div>
                <a
                    class="about--button-link"
                    href="#"
                    v-scroll-to="'#services'"
                >
                    <span class="about--button-text">Ознакомиться с нашими услугами</span>
                </a>
                <div class="about--text-wrapper">
                    <span class="about--description">Профессиональная студия цвета с 2010</span>
                </div>
            </div>
            <div class="about--wrapper-scroll">
                <span class="about--text-scroll">
                    Узнать больше
                </span>
                <img
                        class="about--arrow-down"
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
        height: 100%;
        background-image: url("../../../assets/images/landing_background.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .about--content-wrapper {
        padding: 2.5% 5% 0;
        background: rgba(29, 29, 29, 0.69);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .about--wrapper-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 28px;
    }
    .about--wrapper-scroll {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 5%;
    }
    .about--text-scroll {
        align-self: center;
        font-family: Libre Baskerville, serif;
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        border-bottom: 1px solid #FFFFFF;
        margin-bottom: 20px;
    }
    .about--title {
        color: #ffffff;
        font-family: Trajan Pro, serif;
        font-size: 84px;
        line-height: 64px;
        margin-bottom: 24px;
    }
    .about--subtitle {
        font-family: Trajan Pro, serif;
        font-size: 36px;
        color: #ffffff;
    }
    .about--title-wrapper {
        display: flex;
        flex-direction: column;
    }
    .about--menu-line {
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
    .about--icons-wrapper {
        width: 128px;
        display: flex;
        justify-content: space-between;
    }
    .about--icon {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
            filter: invert(26%) sepia(79%) saturate(7181%) hue-rotate(204deg) brightness(94%) contrast(84%);
        }
    }
    .about--burger-menu {
        cursor: pointer;
        margin-left: 7%;
    }
    .about--description {
        max-width: 300px;
        font-family: Libre Baskerville, serif;
        color: #ffffff;
        font-size: 32px;
    }
    .about--button-link {
        text-decoration: none;
        border-radius: 3px;
        border: 2px solid #FFFFFF;
        padding: 30px 60px;
        transition-duration: 0.25s;
        margin-right: 30px;
        margin-left: 30px;

        &:hover {
            border-color: #1565C0;
            background-color: #1565C0;
            text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
    .about--button-text {
        font-size: 36px;
        color: #ffffff;
        letter-spacing: 0.05em;
        font-family: Libre Baskerville, serif;
    }
    .about--text-wrapper {
        max-width: 300px;
    }
    @media all and (max-width: 1191px) {
        .about--button-link {
            padding: 20px 30px;
        }
        .about--button-text {
            font-size: 28px;
        }
        .about--description {
            font-size: 28px;
        }
        .about--text-scroll {
            font-size: 20px;
        }
    }
    @media all and (max-width: 900px) {
        .about--title {
            font-size: 52px;
            line-height: 48px;
        }
        .about--subtitle {
            font-family: Trajan Pro, serif;
            font-size: 24px;
        }
    }
    @media all and (max-width: 900px) and (max-height: 400px){
        .about--button-text {
            font-size: 24px;
        }
    }
    @media all and (max-width: 800px) {
        .about--title {
            margin-bottom: 12px;
        }
        .about--wrapper-row {
            flex-direction: column;
            align-items: center;

            &:first-child {
                flex-direction: row;
            }
        }
        .about--text-wrapper {
            margin-bottom: 10%;
            margin-top: 10%;
        }
        .about--description {
            font-size: 24px;
        }
        .about--text-wrapper {
            max-width: 200px;
        }
        .about--button-link {
            max-width: 60%;
        }
    }
</style>
