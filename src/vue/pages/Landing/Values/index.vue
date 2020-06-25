<template>
    <div id="values">
        <span class="values--title">Our values</span>
        <div class="values--value-wrapper">
            <value
                title="Learn new everyday"
                description="Every new day, we have reason to be proud of what has been done and the opportunity to learn something new. We are always hungry for new achievements."
            >
                <img
                    alt="error"
                    src="../../../../assets/icons/teacher.svg"
                />
            </value>
            <value
                    title="Expanding horizons"
                    description="We are actively working on ourselves so that all our customers remain in the trend of modern haircuts and dyes."
            >
                <img
                        alt="error"
                        src="../../../../assets/icons/expand.svg"
                />
            </value>
            <value
                    title="We maintain a reputation"
                    description="We are fans of our work and the creation of every style. We put maximum effort. Clients value our work, because for us the most important thing is that the client is satisfied."
            >
                <img
                        alt="error"
                        src="../../../../assets/icons/reputation.svg"
                />
            </value>
            <value
                    title="Sharing experience"
                    description="Our employees often travel in search of new knowledge. Having learned something new, we share it with each other. This allows us to keep up with global trends."
            >
                <img
                        alt="error"
                        src="../../../../assets/icons/communication.svg"
                />
            </value>

        </div>
    </div>
</template>

<script>
    import value from "./value";
    export default {
        name: "values",
        components: { value },
    }
</script>

<style lang="scss" scoped>
    #values {
        min-height: 94%;
        background-color: #ffffff;
        padding: 2.5% 5%;
        display: flex;
        flex-direction: column;
    }
    .values--title {
        font-family: Libre Baskerville, serif;
        font-size: 72px;
        align-self: center;
        color: #00347B;
        margin-bottom: 5vh;
    }
    .values--value-wrapper {
        display: grid;
        justify-content: space-between;
        align-content: space-around;
        grid-template-columns: repeat(2, 600px);
        grid-template-rows: repeat(2, 300px);
        grid-row-gap: 10vh;
    }
    @media all and (max-width: 1350px) {
        .values--value-wrapper {
            grid-template-columns: repeat(2, 500px);
            grid-template-rows: repeat(2, 400px);
            grid-row-gap: 0;
        }
        .values--title {
            margin-bottom: 0;
        }
    }
    @media all and (max-width: 1150px) {
        .values--value-wrapper {
            grid-template-columns: repeat(1, 500px);
            grid-template-rows: repeat(4, 400px);
            grid-row-gap: 0;
            justify-content: center;
        }
    }
    @media all and (max-width: 520px) {
        .values--title {
            margin-bottom: 25px;
        }
        .values--value-wrapper {
            grid-template-columns: repeat(1, 350px);
            grid-template-rows: repeat(4, 375px);
            grid-row-gap: 0;
            justify-content: center;
        }
    }
</style>