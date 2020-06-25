<template>
    <div
            class="navbar"
            :class="{ 'navbar__active': display }"
    >
        <div
                @click="closeNavbar()"
                class="navbar--burger-wrapper"
        >
            <div class="navbar--menu-wrapper">
                <p class="navbar--menu-line" />
                <p class="navbar--menu-line" />
            </div>
        </div>
        <div
                class="navbar--links-wrapper"
                @click="closeNavbar()"
        >
            <a
                        class="navbar--link"
                        href="#"
                        v-scroll-to="'#about'"
            >
                About us
            </a>
            <a
                    href="#"
                    class="navbar--link"
                    v-scroll-to="'#services'"
            >
                Our services
            </a>
            <a
                    href="#"
                    class="navbar--link"
                    v-scroll-to="'#advantages'"
            >
                Our advantages
            </a>
            <a
                    class="navbar--link"
                    href="#"
                    v-scroll-to="'#values'"
            >
                Our values
            </a>
            <a
                    class="navbar--link"
                    href="#"
                    v-scroll-to="'#team'"

            >
                Our team
            </a>
            <a
                    class="navbar--link"
                    href="#"
            >
                How to find us
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
    .navbar--links-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .navbar {
        box-shadow: 20px 20px 20px 20px rgba(0, 0, 0, 0.25);
        height: 100vh;
        padding-top: 2vh;
        padding-bottom: 2vh;
        position: fixed;
        width: 500px;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        left: 100vw;
        top: 0;
        transition: 0.25s;
    }
    .navbar__active {
        left: calc(#{100vw} - #{500px});
    }

    .navbar--menu-wrapper {
        cursor: pointer;
        width: 36px;
        height: 36px;
    }
    .navbar--link {
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
    }
    .navbar--burger-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 15%;
    }
    .navbar--links-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .navbar--menu-line {
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
        .navbar__active {
            left: 0;
        }
    }
</style>