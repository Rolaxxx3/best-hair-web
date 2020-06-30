<template>
    <div id="find-us">
        <div
                class="find-us--map"
                :id="name"
        />
        <div class="find-us--text-wrapper">
            <span>Салон красоты "Best Hair"</span>
            <span>Кременчук, ул. Воинов-Интернационалистов 13</span>
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
    }
    .find-us--map {
        height: 100%;
        width: 100%;
    }
    .find-us--text-wrapper {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        top: auto;
    }
</style>
