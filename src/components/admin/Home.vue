<template>
    <div style="height: 100vh" class="d-flex justify-center align-center">
        <v-btn rounded color="primary" x-large @click="navTo('/admin/add-question')" class="mr-5 elevation-15">Ajouter une Question</v-btn>
        <v-btn rounded color="primary" x-large @click="navTo('/admin/result')" class="elevation-15">Voir les résultats</v-btn>
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods: {
            navTo(item) {
                this.$router.push(item)
            }
        }
    }
</script>

<style scoped>

</style>