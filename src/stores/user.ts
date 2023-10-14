import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        first_name: "",
        last_name: "",
        avatar: "",
    }),
    
    getters: {
        fullName: (state) => state.first_name + " " + state.last_name
    },

    actions: {
        fetchUser() {
            this.first_name = "Devid";
            this.last_name = "Backhem";
        },
    }
})