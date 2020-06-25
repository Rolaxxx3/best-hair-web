<template>
    <div id="services">
        <span class="services--title">Our services</span>
        <div class="services--wrapper">
            <service description="Haircuts, styling">
                <img
                        src="../../../../assets/icons/scisors.svg"
                        alt="error"
                />
            </service>
            <service description="Coloring any complexity">
                <img
                        src="../../../../assets/icons/brush.svg"
                        alt="error"
                />
            </service>
            <service description="Care procedures">
                <img
                        src="../../../../assets/icons/leaf.svg"
                        alt="error"
                />
            </service>
            <service description="Assistance in the selection of cosmetics">
                <img
                        src="../../../../assets/icons/certificate.svg"
                        alt="error"
                />
            </service>
            <service description="Eyebrow correction and coloring">
                <img
                        src="../../../../assets/icons/mirror.svg"
                        alt="error"
                />
            </service>
            <service description="Baby haircuts">
                <img
                        src="../../../../assets/icons/baby.svg"
                        alt="error"
                />
            </service>
        </div>
    </div>
</template>

<script>
    import service from "./service"

    export default {
        name: "Services",
        components: { service },
    }
</script>

<style lang="scss" scoped>
    #services {
        background-color: #ffffff;
        min-height: 92vh;
        display: flex;
        flex-direction: column;
        padding: 2.5% 5%;
        justify-content: space-between;
    }
    .services--title {
        font-family: Libre Baskerville, serif;
        font-size: 72px;
        line-height: 89px;
        text-align: center;
        color: #003C8F;
        margin-bottom: 100px;
    }
    .services--wrapper {
        display: grid;
        justify-content: space-between;
        align-content: space-around;
        grid-template-columns: repeat(3, 200px);
        grid-template-rows: repeat(2, 350px);
        grid-row-gap: 4.5vh;
    }
    @media all and (max-width: 847px) {
        .services--wrapper {
            grid-template-columns: repeat(2, 200px);
            grid-template-rows: repeat(3, 300px);
            grid-row-gap: 5vh;
        }
    }
    @media all and (max-width: 500px) {
        .services--wrapper {
            grid-template-columns: repeat(1, 200px);
            grid-template-rows: repeat(6, 300px);
            grid-row-gap: 5vh;
            justify-content: center;
        }
    }
    @media all and (max-width: 550px) {
        .services--title {
            font-size: 54px;
        }
    }
</style>