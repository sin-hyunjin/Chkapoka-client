<template>
  <svg
    width="91"
    height="93"
    viewBox="0 0 91 93"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M45.1045 90.3835C69.9573 90.3835 90.1045 70.2363 90.1045 45.3835C90.1045 20.5307 69.9573 0.383484 45.1045 0.383484C20.2516 0.383484 0.104463 20.5307 0.104463 45.3835C0.104463 53.9328 2.48856 61.9253 6.62819 68.7323L0.0800781 92.8089L25.4939 85.8971C31.4213 88.7715 38.0746 90.3835 45.1045 90.3835Z"
      fill="#FF9F9F"
    />
    <g clip-path="url(#clip0_16_766)">
      <path
        d="M53.1132 29.4516L49.4952 33.0585L59.213 42.7465L62.831 39.1396C64.6999 37.2765 64.6999 34.2584 62.831 32.3953L59.8858 29.4516C58.017 27.5886 54.9895 27.5886 53.1207 29.4516H53.1132ZM47.8058 34.7428L30.381 52.1215C29.6035 52.8965 29.0354 53.8579 28.7215 54.9087L26.0752 63.8738C25.8883 64.5072 26.0603 65.1854 26.5237 65.6474C26.9872 66.1094 27.6674 66.2808 28.2954 66.102L37.2881 63.4639C38.3421 63.1509 39.3064 62.5845 40.0838 61.8095L57.5236 44.4307L47.8058 34.7428Z"
        fill="#FEFCF8"
      />
    </g>
    <defs>
      <clipPath id="clip0_16_766">
        <rect
          width="38.2733"
          height="38.1557"
          fill="white"
          transform="translate(26 28)"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconTree",
});
</script>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

withDefaults(
  defineProps<{
    fillColor?: string;
  }>(),
  {
    fillColor: "var(--cp-color-grey-100)",
  },
);
</script>
