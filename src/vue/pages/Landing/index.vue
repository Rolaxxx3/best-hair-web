<template>
    <div class="landing">
        <about @changeDisplayNavbar="isNavbarShow = !isNavbarShow" />
        <services />
        <advantages />
        <values />
        <team />
        <find-us name="map" />
        <copyright />
        <navbar
                :display="isNavbarShow"
                @closeNavbar="isNavbarShow = false"
        />
    </div>
</template>

<script>
    import About from "./About";
    import Services from "./Services";
    import Advantages from "./Advantages";
    import Values from "./Values";
    import Navbar from "./Navbar";
    import Team from "./Team";
    import FindUs from "./FindUs";
    import Copyright from "./Copyright";
    export default {
        name: "index.vue",
        components: {
            Copyright,
            FindUs,
            Team,
            Navbar,
            Values,
            About,
            Services,
            Advantages
        },
        data: () => {
            return {
                isNavbarShow: false,
            }
        },
    }
</script>

<style lang="scss" scoped>
.landing {
    height: 100vh;
}
</style>
