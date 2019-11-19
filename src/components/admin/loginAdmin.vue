<template>
    <div style="height: 100vh" class="d-flex justify-center align-center">
        <v-flex md8 offset-md4 class="block-auth">
            <v-row no-gutters>
                <v-col lg="6">
                    <h1>Formulaire de contact !</h1>
                    <v-form ref="form" lazy-validation v-model="valid">
                        <v-text-field name="name" label="pseudo admin" v-model="pseudo" class="mr-12 ml-12" color="primary" :rules="pseudoRules" required></v-text-field>
                        <v-text-field name="society" label="mot de passe admin" type="text" color="primary" class="mr-12 ml-12" v-model="password" :rules="passwordRules" required></v-text-field>
                        <v-btn rounded color="primary" class="mt-12" @click="login()">Valider</v-btn>
                        <v-btn rounded color="primary" class="ml-5 mt-12" @click="navTo('/')">Vers le questionnaire</v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-flex>
    </div>
</template>

<script>
    export default {
        name: "loginAdmin",
        data() {
            return {
                valid: true,
                form: {
                    cookies: false
                },
                password: '',
                pseudo: '',
                pseudoRules: [
                    v => !!v || 'Un nom est requis !',
                ],
                passwordRules: [
                    v => !!v || 'Un nom est requis !',
                ],
            }
        },
        methods: {
            /**
             * Ma fonction de navigation, je n'utilise pas de routerLink par habitude, et pour différentes raisons.
             * @param item
             */
            navTo(item) {
                this.$router.push(item)
            },
            /**
             * Fonction login de admin qui enregistre mes réponses dans mon store
             */
           login() {
               if (this.$refs.form.validate()) {
                   this.snackbar = true;
                   this.$store.dispatch("setLogin", this.pseudo, this.password)
                   this.$router.push('/admin/home')
               }
           }
        }
    }
</script>

<style scoped>

</style>