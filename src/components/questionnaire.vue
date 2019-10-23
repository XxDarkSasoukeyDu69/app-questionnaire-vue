<template>
    <v-container>
        <h1 class="mb-5 mt-12 ml-1">Questionnaire :</h1>
        <v-stepper v-model="e1">
            <v-stepper-header>
                <v-stepper-step :complete="e1 > key" :step="key+1" v-for="(ques,key) in question" :key="key">{{ key+1 }}</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
                <v-stepper-content :step="key+1" v-for="(ques,key) in question" :key="key">
                    <v-form lazy-validation ref="form">
                        <v-card  class="mb-12" color="grey lighten-1" height="200px">
                            <v-card-title>Question n°{{key +1}}:</v-card-title>
                            <v-card-text>{{ ques.ques }}</v-card-text>
                            <v-text-field :rules="respRules" class="mr-12 ml-12 pr-12 pl-12" autofocus v-model="ques.resp" required></v-text-field>
                        </v-card>
                        <v-btn color="primary" :disabled="!ques.resp.length > 0" @click="valide(key)">Continue</v-btn>
                    </v-form>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </v-container>
</template>

<script>



    export default {
        data () {
            return {
                e1: '1',
                e2: '2',
                question: [
                    { ques: 'Pourquoi la vie est elle ainsi ?', resp: '' },
                    { ques: 'Pourquoi suis je beau ?', resp: '' },
                    { ques: 'Que se passe t il après la mort ?', resp: '' },
                    { ques: 'Pourquoi les animaux ?', resp: '' },
                    { ques: 'C\'est beau ?, resp: ', resp: '' },
                    { ques: 'Pierrick ?', resp: '' },
                    { ques: 'Ce control est chiant ?', resp: '' },
                    { ques: 'ToDowORLd la best des app ?', resp: '' },
                    { ques: 'Ce questionnaire ne repond pas vraiment a la sécurité', resp: '' },
                    { ques: 'Oui ? Ou non ?', resp: '' },
                ],
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
            valide(keys) {
                // eslint-disable-next-line no-console
                console.log(this.question)


                // eslint-disable-next-line no-console
                console.log(keys)

                this.e1 = (keys+2)

                // eslint-disable-next-line no-empty
                if (keys == 9 ) {
                    this.$router.push('/result')
                }

            },

        }
    }
</script>

<style scoped>

</style>