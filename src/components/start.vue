<template>
    <div style="height: 100vh" class="d-flex justify-center align-center">
        <v-flex md8 offset-md4 class="block-auth">
            <v-row no-gutters>
                <v-col lg="6">
                    <h1>Formulaire de contact !</h1>
                    <v-form ref="form" lazy-validation v-model="valid">
                        <v-text-field name="name" label="Prenom" v-model="name" class="mr-12 ml-12" color="primary" :rules="nameRules" required></v-text-field>
                        <v-text-field name="lastname" label="Nom" type="text" color="primary" class="mr-12 ml-12" v-model="lastname" :rules="lastnameRules" required></v-text-field>
                        <v-text-field name="society" label="Société" type="text" color="primary" class="mr-12 ml-12" v-model="company" :rules="companyRules" required></v-text-field>
                        <v-btn rounded color="primary" class="mt-12" @click="login()">Valider</v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-flex>
    </div>


</template>

<script>

    import PouchDB from 'pouchdb'
    import uuid from 'uuid'

    const db = new PouchDB('http://localhost:5984/control');

    export default {

        name: "Start",
        data() {
            return {
                name: '',
                nameRules: [
                    v => !!v || 'Un nom est requis !',
                ],
                company: '',
                companyRules: [
                  v => !!v || 'Un nom de société est requis'
                ],
                lastname: '',
                lastnameRules: [
                    v => !!v || 'Un nom de famille est requis !',
                ],
                valid: true,
                form: {
                    cookies: false
                },
            }
        },
        methods: {
            login() {
                if (this.$refs.form.validate()) {
                    this.snackbar = true;
                    var id = uuid()
                    db.put({
                        _id: id,
                        name: this.name,
                        lastname: this.lastname,
                        society: this.society
                    });
                    this.id = this.$route
                    this.$router.push({name: 'questionnaire', params:  {userId: id}})
                }
            },


        }
    }
</script>

<style scoped>

</style>