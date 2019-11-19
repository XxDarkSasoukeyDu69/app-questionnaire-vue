<template>
    <div>
        <v-row>
            <v-col :cols="12" lg="5" md="5"  offset-lg="4" offset-md="4">
                <h1>Ajouter une question !</h1>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field name="name" label="Intitule" v-model="intitule" class="mr-12 ml-12" color="primary" required></v-text-field>
                    <h3>Selectionner les bonne réponse ?</h3>
                    <v-list class="mt-5" rounded style="background-color: #fafafa">
                        <v-list-item>
                            <v-list-item-title>Choix 1</v-list-item-title>
                            <v-list-item-action>
                                <v-checkbox color="primary"></v-checkbox>
                            </v-list-item-action>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Choix 2</v-list-item-title>
                            <v-list-item-action>
                                <v-checkbox color="primary"></v-checkbox>
                            </v-list-item-action>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Choix 3</v-list-item-title>
                            <v-list-item-action>
                                <v-checkbox color="primary"></v-checkbox>
                            </v-list-item-action>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Choix 4</v-list-item-title>
                            <v-list-item-action>
                                <v-checkbox color="primary"></v-checkbox>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                    <div class="mt-12">
                        <v-btn rounded color="primary" class="mr-5" @click="validate()">Valider</v-btn>
                        <v-btn rounded color="secondary" @click="navTo('admin/home')">Retour</v-btn>
                    </div>
                </v-form>
            </v-col>
        </v-row>

    </div>
</template>

<script>

    import Json from '../../assets/questions'

    export default {
        name: "AddQuestion",
        data() {
            return {
                lastId: '',
                choice: [],
                valid: true,
                intitule: '',
                form: {
                    cookies: false
                },
            }
        },
        methods: {
           validate() {

               // eslint-disable-next-line no-console
               console.log(Json)

               var obj = JSON.parse(Json)
               // eslint-disable-next-line no-console
               console.log(obj)
               if (this.$refs.form.validate()) {
                   this.snackbar = true;
               }
           },
            navTo(item) {
               this.$router.push(item)
            }
        },
        mounted() {
             var obj = Json[Json.length - 1];

            // eslint-disable-next-line no-console
             console.log(obj)

             this.lastId = obj.questions.id
            // eslint-disable-next-line no-console
             console.log(this.lastId)
        }
    }
</script>

<style scoped>

</style>