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
            /**
             * Ma fonction de navigation, je n'utilise pas de routerLink par habitude, et pour différentes raisons.
             * @param item
             */
            navTo(item) {
                this.$router.push(item)
            }
        }
    }
</script>

<style scoped>

</style>