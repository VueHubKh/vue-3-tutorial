<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
    username: String,
    password: String,
    gender: String,
    usernameModifiers: { default: () => ({}) },
    passwordModifiers: { default: () => ({}) },
    genderModifiers: { default: () => ({}) },
});

console.log(props.usernameModifiers)

const emit = defineEmits([
  "update:username",
  "update:password",
  "update:gender",
])  ;


const usernameValue = computed({
  get: () => props.username,
  set: (newValue) => {
    let value = newValue

    if (props.usernameModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
    }

    emit("update:username", value)
  },
});

const passwordValue = computed({
  get() {
    return props.password;
  },
  set(value) {
    
    emit("update:password", value);
  },
});

const genderValue = computed({
    get: () => props.gender,
    set: (value) => emit('update:gender', value)
})
</script>

<template>
  <div>
    <label>username</label>
    <input v-model.lazy="usernameValue" />
    <br />

    <label>Password</label>
    <input v-model="passwordValue" />

    <br>
    <select v-model="genderValue">
        <option value="femal">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
    </select>
  </div>
</template>
