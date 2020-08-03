<template>
    <div id="find-us">
        <div
                class="find-us__map"
                :id="name"
        />
        <div class="find-us__text-wrapper">
            <span class="find-us__title">Салон красоты "Best Hair"</span>
            <span class="find-us__subtitle">Кременчук, ул. Воинов-Интернационалистов 13</span>
        </div>
    </div>
</template>

<script>
    import markerImage from "../../../assets/icons/hair_dresser_marker.svg"
    /*eslint-disable */
    export default {
        name: 'FindUs',
        props: ['name'],
        data: () => {
            return {
                map: '',
                markers: [{
                        title: "Best Hair salon",
                        position: {
                            latitude: 49.131998,
                            longitude: 33.448384,
                        },
                        icon: {
                            url: markerImage,
                            scaledSize: new google.maps.Size(80, 80),
                        }
                    }],
                styles: [
                    {
                        stylers: [
                            {
                                hue: "#2c3e50"
                            },
                            {
                                saturation: 250
                            }
                        ]
                    },
                    {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [
                            {
                                lightness: 50
                            },
                            {
                                visibility: "simplified"
                            }
                        ]
                    },
                    {
                        featureType: "road",
                        elementType: "labels",
                        stylers: [
                            {
                                visibility: "off"
                            }
                        ]
                    }
                ]
            }
        },
        mounted () {
            const element = document.getElementById(this.name)
            const options = {
                zoom: 19,
                center: new google.maps.LatLng(this.markers[0].position.latitude, this.markers[0].position.longitude),
                styles: this.styles,
            }
            this.map = new google.maps.Map(element, options)

            this.markers.forEach((marker) => {
                const mark = new google.maps.Marker({
                    position: { lat: marker.position.latitude, lng: marker.position.longitude },
                    map: this.map,
                    icon: marker.icon,
                })
            })
            /*eslint-enable */
        },
    }
</script>

<style lang="scss" scoped>
    #find-us {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }
    .find-us__map {
        height: 100%;
        width: 100%;
    }
    .find-us__text-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        bottom: 300px;
        left: 150px;
        height: 0;
    }
    .find-us__title {
        font-family: Libre Baskerville, serif;
        font-size: 84px;
        line-height: 100px;
        color: #000000;
    }
    .find-us__subtitle {
        font-family: Libre Baskerville, serif;
        font-size: 48px;
        line-height: 52px;
        color: #000000;
    }
    @media all and (max-width: 1200px) {
        .find-us__title {
            font-size: 64px;
            line-height: 70px;
        }
        .find-us__subtitle {
            font-size: 36px;
            line-height: 40px;
        }
        .find-us__text-wrapper {
            bottom: 200px;
            left: 100px;
        }
    }
    @media all and (max-width: 900px) {
        .find-us__text-wrapper {
            bottom: 200px;
            left: 50px;
        }
    }
    @media all and (max-width: 800px) {
        .find-us__text-wrapper {
            display: none;
        }
    }
</style>
