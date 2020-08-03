<template>
    <div class="value">
        <slot />
        <div class="value__content-wrapper">
            <span class="value__title">{{ title }}</span>
            <span class="value__description"> {{ description }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "value",
        props: {
            title: { type: String, required: true },
            description: { type: String, required: true },
        }
    }
</script>

<style lang="scss" scoped>
    .value {
        max-width: 680px;
        display: flex;
        align-items: center;
    }
    .value__content-wrapper {
        display: flex;
        flex-direction: column;
        margin-left: 50px;
    }
    .value__title {
        font-family: Libre Baskerville, serif;
        font-size: 48px;
        line-height: 60px;
        color: #1565C0;
        text-align: left;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
    .value__description {
        font-family: Libre Baskerville, serif;
        font-size: 24px;
        line-height: 30px;
        color: #000000;
        text-align: left;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
    @media all and (max-width: 520px) {
        .value__description {
            font-size: 20px;
        }
        .value__title {
            font-size: 36px;
            line-height: 40px;
            margin-bottom: 20px;
        }
        .value__content-wrapper {
            margin-left: 5px;
        }
    }
</style>
