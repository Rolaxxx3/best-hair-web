<template>
    <div
            class="navbar"
            :class="{ 'navbar--active': display }"
    >
        <div
                @click="closeNavbar()"
                class="navbar__burger-wrapper"
        >
            <div class="navbar__menu-wrapper">
                <p class="navbar__menu-line" />
                <p class="navbar__menu-line" />
            </div>
        </div>
        <div
                class="navbar__links-wrapper"
                @click="closeNavbar()"
        >
            <a
                        class="navbar__link"
                        href="#"
                        v-scroll-to="'#about'"
            >
                Про нас
            </a>
            <a
                    href="#"
                    class="navbar__link"
                    v-scroll-to="'#services'"
            >
                Наши услуги
            </a>
            <a
                    href="#"
                    class="navbar__link"
                    v-scroll-to="'#advantages'"
            >
                Наши преимущества
            </a>
            <a
                    class="navbar__link"
                    href="#"
                    v-scroll-to="'#values'"
            >
                Наши ценности
            </a>
            <a
                    class="navbar__link"
                    href="#"
                    v-scroll-to="'#team'"

            >
                Наша команда
            </a>
            <a
                    class="navbar__link"
                    href="#"
                    v-scroll-to="'#find-us'"
            >
                Как нас найти
            </a>
            <a
                    class="navbar__link"
                    href="#"
                    v-scroll-to="'#copyright'"
            >
                Расписание работы
            </a>
        </div>
    </div>
</template>

<script>
    const EVENTS = {
        closeNavbar: "closeNavbar"
    }
    export default {
        name: "Navbar",
        props: {
          display: { type: Boolean, required: true }
        },
        methods: {
            closeNavbar () {
                this.$emit(EVENTS.closeNavbar)
            }

        }
    }
</script>

<style lang="scss" scoped>
    .navbar__links-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .navbar {
        height: 100vh;
        padding-top: 2vh;
        padding-bottom: 2vh;
        position: fixed;
        width: 500px;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        left: 101vw;
        top: 0;
        transition: 0.25s;
    }
    .navbar--active {
        left: calc(#{101vw} - #{500px});
    }

    .navbar__menu-wrapper {
        cursor: pointer;
        width: 36px;
        height: 36px;
    }
    .navbar__link {
        width: 100%;
        height: 10vh;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #1565C0;
        transition-duration: 0.25s;
        font-family: Libre Baskerville, serif;
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0.05em;
        text-decoration: none;

        &:hover {
            background: #1565C0;
            color: #ffffff;
            text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }

        &:last-child {
            margin-top: 10vh;
        }
    }
    .navbar__burger-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 15%;
    }
    .navbar__links-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .navbar__menu-line {
        position: absolute;
        width: 45px;
        height: 5px;
        background: #1565C0;
        border-radius: 5px;
        transform: rotate(45deg);
        margin-block-start: 0;
        margin-block-end: 0;

        &:last-child {
            transform: rotate(-45deg);
        }
    }
    @media all and (max-width: 800px) {
        .navbar {
            width: 100%;
        }
        .navbar--active {
            left: 0;
        }
    }
</style>
