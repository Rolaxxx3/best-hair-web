<template>
    <div id="values">
        <span class="values--title">Наши ценности</span>
        <div class="values--value-wrapper">
            <value
                title="Каждый день изучаем новое"
                description="Каждый новый день у нас - повод гордиться тем, что сделано, и возможность узнать что-то новое. Мы всегда голодны до новых знаний."
            >
                <img
                    alt="error"
                    src="../../../../assets/icons/teacher.svg"
                />
            </value>
            <value
                    title="Расширяем горизонты"
                    description="Мы активно работаем над собой, чтобы все наши клиенты оставались в тренде современных стрижек и красок."
            >
                <img
                        alt="error"
                        src="../../../../assets/icons/expand.svg"
                />
            </value>
            <value
                    title="Ценим нашу репутацию"
                    description="Мы - фанаты своего дела, и к созданию каждой стрижки прикладываем максимум усилий. Клиенты ценят наши работы из-за высоких стандартов качества."
            >
                <img
                        alt="error"
                        src="../../../../assets/icons/reputation.svg"
                />
            </value>
            <value
                    title="Делимся опытом"
                    description="Наши сотрудники часто путешествуют в поисках новых знаний. Узнав что-то новое, мы делимся этим друг с другом. Это позволяет нам не отставать от мировых тенденций."
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
            justify-content: center;
        }
    }
    @media all and (max-width: 520px) {
        .values--value-wrapper {
            grid-template-columns: repeat(1, 300px);
            grid-template-rows: repeat(4, 400px);
            justify-content: center;
        }
    }
    @media all and (max-width: 550px) {
        .values--title {
            margin-bottom: 25px;
            font-size: 50px;
            line-height: 50px;
        }
    }
</style>
