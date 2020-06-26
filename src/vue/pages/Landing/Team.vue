<template>
    <div id="team">
        <span class="team--title">Наша команда</span>
        <div class="team--content-wrapper">
            <div class="team--slider">
                <img
                        class="team--slider-arrow"
                        alt="error"
                        src="../../../assets/icons/slider_arrow_up.svg"
                        @click="slideUp()"
                />
                <img
                        :src="`data:image/png;base64, ${teamList[0].img}`"
                        alt="error"
                        class="team--member team--member__disable"
                />
                <img
                        :src="`data:image/png;base64, ${teamList[1].img}`"
                        alt="error"
                        class="team--member"
                />
                <img
                        :src="`data:image/png;base64, ${teamList[2].img}`"
                        alt="error"
                        class="team--member team--member__disable"
                />
                <img
                        class="team--slider-arrow"
                        alt="error"
                        src="../../../assets/icons/slider_arrow_down.svg"
                        @click="slideDown()"
                />
            </div>
            <div class="team--description-wrapper">
                <p class="team--description-name">{{`${teamList[1].name} ${teamList[1].surname}`}}</p>
                <span class="team--description">{{teamList[1].description}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import request from "./example_request_team"
    export default {
        name: "Team",
        data: function () {
            return {
                teamList: request,
            }
        },
        methods: {
            slideUp () {
                if (this.teamList instanceof Array) {
                    let list = []
                    for (let i = 0; i < this.teamList.length-1; i++) {
                        list.push(this.teamList[i+1])
                    }
                    list.push(this.teamList[0])
                    this.teamList = list
                }
            },
            slideDown () {
                if (this.teamList instanceof Array) {
                    let list = []
                    list.push(this.teamList[this.teamList.length - 1])
                    for (let i = 0; i < this.teamList.length-1; i++) {
                        list.push(this.teamList[i])
                    }
                    this.teamList = list
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #team {
        min-height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: linear-gradient(180deg, #1565C0 0%, #00347B 100%);
        padding: 2.5% 5%;
    }
    .team--title {
        font-family: Libre Baskerville, serif;
        font-size: 72px;
        line-height: 89px;
        color: #FFFFFF;
    }
    .team--content-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .team--description-name {
        font-family: Libre Baskerville, serif;
        font-size: 64px;
        line-height: 77px;
        color: #000000;
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
    }
    .team--description-wrapper {
        min-height: 65vh;
        width: 65vw;
        background: #ffffff;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 5%;
        padding-right: 5%;
        margin-left: 5%;
    }
    .team--description {
        font-family: Libre Baskerville, serif;
        font-size: 38px;
        line-height: 47px;
        color: #000000;
        text-align: left;
    }
    .team--slider {
        display: flex;
        flex-direction: column;
    }
    .team--slider-arrow {
        cursor: pointer;
    }
    .team--member {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-bottom: 10px;
        margin-top: 10px;
        transition-duration: 0.25s;
    }
    .team--member__disable {
        filter: grayscale(100%);
    }
    .team--slider-arrow {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    @media all and (max-width: 1250px) {
        .team--content-wrapper {
            margin-top: 5%;
        }
    }
    @media all and (max-width: 1060px) {
        .team--description {
            font-size: 28px;
            line-height: 36px;
        }
        .team--description-name {
            font-size: 50px;
            line-height: 50px;
        }
    }
    @media all and (max-width: 800px) {
        .team--slider {
            flex-direction: row;
            align-items: center;
        }
        .team--content-wrapper {
            flex-direction: column;
            align-items: center;
        }
        .team--slider-arrow {
            transform: rotate(-90deg);
        }
        .team--member {
            width: 150px;
            height: 150px;
            margin-left: 1vw;
            margin-right: 1vw;
        }
        .team--description-wrapper {
            width: 90%;
            margin-left: 0;
        }
        .team--slider-arrow {
            height: 20px;
        }
    }
    @media all and (max-width: 600px) {
        .team--member {
            width: 100px;
            height: 100px;
        }
        .team--description {
            font-size: 26px;
            line-height: 26px;
        }
        .team--description-name {
            font-size: 42px;
            line-height: 42px;
        }
        .team--title {
            font-size: 50px;
            line-height: 50px;
        }
    }
    @media all and (max-width: 400px) {
        .team--member {
            width: 75px;
            height: 75px;
        }
        .team--slider-arrow {
            margin-top: 0;
            margin-bottom: 0;
        }
    }
</style>