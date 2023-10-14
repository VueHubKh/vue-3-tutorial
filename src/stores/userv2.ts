import { computed, ref } from "vue";

import { defineStore } from "pinia";

export const userUserStoreV2 = defineStore('userv2', () => {
    const first_name = ref("");
    const last_name = ref("");
    const avatar = ref("");

    const fullNameV2 = computed(() => {
        return first_name.value  + " " + last_name.value
    })

    const fetchUserV2 = () => {
        first_name.value = "Devid",
        last_name.value = "Backhem"
    }

    return {
        first_name,
        last_name,
        avatar,
        fullNameV2,
        fetchUserV2,
    }
})