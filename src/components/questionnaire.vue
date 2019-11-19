<template>
    <v-container>
        <h1 class="mb-5 mt-12 ml-1">Questionnaire :</h1>
        <v-stepper v-model="e1">
            <v-stepper-header>
                <v-stepper-step :complete="e1 > key" :step="key+1" v-for="(ques, key) in questions" :key="key">{{ key+1 }}</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
                <v-stepper-content :step="key+1" v-for="(ques,key) in questions" :key="key">
                    <v-form lazy-validation ref="form">
                        <v-card  class="mb-12" color="grey lighten-3" height="auto">
                            <v-card-title>Question n°{{key +1}}:</v-card-title>
                            <v-card-text>{{ ques.intitule }}</v-card-text>
                            <v-card-text>
                                <v-checkbox v-for="(ch,key) in ques.choice" :key="key" v-model="ch.statut" :label="ch.intitule" color="primary"></v-checkbox>
                            </v-card-text>
                        </v-card>
                        <v-btn color="primary" @click="valide(key)">Continue</v-btn>
                    </v-form>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </v-container>
</template>

<script>

    import Json from '../assets/questions'
    import PouchDB from 'pouchdb'
    const db = new PouchDB('http://localhost:5984/control')

    export default {
        name: 'questionnaire',
        data () {
            return {
                id: '',
                questions: Json.questions,
                e1: '1',
                respRules: [
                    v => !!v || 'Une reponse est requis !',
                ],
                valid: true,
                form: {
                    cookies: false
                },
            }
        },
        methods: {
            /**
             * Si je passe a la question 10 soit 9, j'enregistre mon questionnaire avec les réponse dans la bdd
             * @param keys
             */
            valide(keys) {

                this.e1 = (keys+2)

                if (keys == 9 ) {

                    this.$store.dispatch("setQuestionnaire", this.questions)

                    db.post({
                        tab: this.questions,
                        user_id: this.id
                    })

                    this.$router.push({name: 'result', params: {userId: this.id}})

                }

            },
        },
        mounted() {

            /**
             * Récupération de mon userId que je passe de page en page, par l'url, pour la persistence
             * @type {string}
             */
            this.id = this.$route.params.userId

            /**
             * Renvoie 10 questions aléatoirement parmis une liste de 30 questions
             */
            var shuffled = Json.questions.sort(function(){return .5 - Math.random()})
            this.questions = shuffled.slice(0,10)

        }
    }
</script>

<style scoped>

</style>