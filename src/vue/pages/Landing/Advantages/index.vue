<template>
    <div id="advantages">
        <div class="advantages--content-wrapper">
            <span class="advantages--title">
                Our advantages
            </span>
            <div class="advantages--list-wrapper">
                <div class="advantages--list-line" />
                <advantage description="12 years of experience">
                    <img
                            class="advantages--list-icon"
                            src="../../../../assets/icons/circle_confirm.svg"
                            alt="error"
                    />
                </advantage>
                <advantage description="we use cosmetics from one of the best world brands">
                    <img
                            class="advantages--list-icon"
                            src="../../../../assets/icons/cosmetic.svg"
                            alt="error"
                    />
                </advantage>
                <advantage description="team of professionals">
                    <img
                            class="advantages--list-icon"
                            src="../../../../assets/icons/people.svg"
                            alt="error"
                    />
                </advantage>
                <advantage description="safe service">
                    <img
                            class="advantages--list-icon"
                            src="../../../../assets/icons/gloves.svg"
                            alt="error"
                    />
                </advantage>
                <advantage description="stylish interior">
                    <img
                            class="advantages--list-icon"
                            src="../../../../assets/icons/sofa.svg"
                            alt="error"
                    />
                </advantage>
                <advantage description="execution of paints of any complexity">
                    <img
                            class="advantages--list-icon"
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
        height: 100vh;
        background-image: url("../../../../assets/images/background_advantages.png");
        overflow: hidden;
        min-height: 800px;
    }
    .advantages--content-wrapper {
        padding: 2.5% 5%;
        height: 100%;
        background: rgba(0, 60, 143, 0.75);
        display: flex;
        flex-direction: column;
    }
    .advantages--title {
        font-family: Libre Baskerville, serif;
        font-size: 72px;
        line-height: 89px;
        color: #ffffff;
        margin-bottom: 100px;
        align-self: center;
    }
    .advantages--list-line {
        position: absolute;
        background-image: url("../../../../assets/images/advantages_line.svg");
        width: 14px;
        height: 76%;
        min-height: 600px;
        align-self: flex-start;
        left: 15%;
        fill: rgba(255,255,255, 0.75);
        margin-top: -80px;
    }
    .advantages--list-icon {
        max-width: 45px;
        max-height: 45px;
    }
    @media all and (max-width: 1060px) {
        .advantages--list-icon {
            max-width: 30px;
            max-height: 30px;
        }
    }
    @media all and (max-width: 550px) {
        .advantages--title {
            font-size: 54px;
        }
    }
</style>