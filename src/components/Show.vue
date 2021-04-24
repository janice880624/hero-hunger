<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      md="4"
      v-for="(sensor, index) in sensors"
      :key="`sensor${index}`"
    >
      <SensorCard :sensor="sensor" />
    </v-col>
  </v-row>
</template>

<script>
import SensorCard from "@/components/SensorCard.vue";
export default {
  components: {
    SensorCard
  },
  data() {
    return {
      sensors: [
        {
          name: "PM 2.5",
          queryName: "pm25",
          path: require("@/assets/icons/air-pollution.png"),
          unit: "μg/m3"
        },
        {
          name: "PM 10",
          queryName: "pm10",
          path: require("@/assets/icons/air-pollution.png"),
          unit: "μg/m3"
        },
        {
          name: "溫度",
          queryName: "tem",
          path: require("@/assets/icons/high-temperature.png"),
          unit: " ℃"
        },
        {
          name: "濕度",
          queryName: "hum",
          path: require("@/assets/icons/humidity.png"),
          unit: "m3"
        },
        {
          name: "亮度",
          queryName: "tem",
          path: require("@/assets/icons/brightness.png"),
          unit: "LX"
        }
      ]
    };
  }
};
</script>
