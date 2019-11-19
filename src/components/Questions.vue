<template>
    <div>
    <v-card class="mb-12" color="grey lighten-1" height="auto">
        <v-card-title>{{questions.question}}</v-card-title>
        <v-checkbox :key="key" v-for="(reponsePossible, key) in questions.reponses" v-model="reponsePossible.status" class="mx-2" :label="reponsePossible.text"></v-checkbox>
    </v-card>

    </div>
</template>

<script>

    export default {
        name: "Questions",

        props: ["questions", "key", "qlenght"],

    }

</script>

<style scoped>

</style>