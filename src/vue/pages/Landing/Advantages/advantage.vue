<template>
    <div class="advantage">
        <slot />
        <img
                class="advantage__arrow"
                alt="error"
                src="../../../../assets/images/arrow-advantage.svg"
        />
        <span class="advantage__name">{{ description }}</span>
    </div>
</template>

<script>
    export default {
        name: "advantage",
        props: {
            description: { type: String, required: true },
        }
    }
</script>

<style lang="scss" scoped>
    .advantage {
        padding: 15px 10px 15px 4%;
        border-top: 1.5px solid rgba(255,255,255, 0.75);;
        width: 95%;
        height: 45px;
        text-align: left;
        display: flex;
        align-items: center;

        &:last-child{
            border-bottom: 1.5px solid rgba(255,255,255, 0.75);
        }
        &:first-child {
            margin-top: 150px;
        }
    }
    .advantage__name {
        font-family: Libre Baskerville, serif;
        font-size: 24px;
        line-height: 20px;
        color: #FFFFFF;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        margin-left: 20%;
    }
    .advantage__arrow {
        position: absolute;
        left: 17%;
    }

    @media all and (max-width: 1060px) {
        .advantage__name {
            font-size: 18px;
            line-height: 18px;
        }
        .advantage {
            height: 30px;
        }
        .advantage__arrow {
            height: 30px;
            width: 45px;
        }
    }
    @media all and (max-width: 360px) {
        .advantage__name {
            font-size: 15px;
            line-height: 15px;
        }
    }

</style>
