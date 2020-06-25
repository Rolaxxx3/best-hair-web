<template>
    <div class="service">
        <div class="service--image-wrapper">
            <slot />
        </div>
        <span class="service--description">{{ description }}</span>
    </div>
</template>

<script>
    export default {
        name: "service",
        props: {
            description: { type: String, required: true }
        }
    }
</script>

<style lang="scss" scoped>
    .service {
        width: 200px;
        display: flex;
        flex-direction: column;
    }
    .service--image-wrapper {
        background-color: #1565C0;
        border-radius: 50%;
        width: 192px;
        height: 192px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
    }
    .service--description {
        color: #00347B;
        align-self: center;
        font-family: Libre Baskerville, serif;
        font-size: 36px;
        line-height: 45px;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
</style>