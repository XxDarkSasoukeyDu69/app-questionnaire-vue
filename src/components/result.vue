<template>
    <div>
        <v-flex md8 offset-md2>
            <v-row no-gutters>
                <v-col :cols="12" lg="5" md="5" offset-md="3" offset-lg="3">
                    <v-card class="mt-12">
                        <h1 class="pt-5 pl-5 pb-2">Vos résultats</h1>
                        <hr />
                        <v-card-title class="pl-5 pt-5 mt-12 mb-12"> Score : {{ score }}</v-card-title>
                        <hr />
                        <v-card-action>
                            <v-btn color="primary" class="pt-2 pl-5 pb-2 mt-6 ml-5 mb-6">Menu</v-btn>
                        </v-card-action>
                    </v-card>
                </v-col>
            </v-row>
        </v-flex>
    </div>
</template>

<script>

    import {EventBus} from '../service/EventBus'


    var tabQuestion

    export default {
        name: "result",
        data() {
            return {
                id: '',
                questions: null,
                score: 0
            }
        },
        mounted() {
            // eslint-disable-next-line no-undef
            this.id = this.$route.params.userId
            EventBus.$on('send-response', Questions => {
                // eslint-disable-next-line no-console,no-undef
                tabQuestion = Questions

            })

            this.questions = tabQuestion
            // eslint-disable-next-line no-console
            console.log('Question : ', this.questions)

            this.questions.map(e => e.choice.map(a => {
                // eslint-disable-next-line no-empty
                if(a.statut === true) {
                    this.score = this.score + a.score
                }
            }))

        }
    }
</script>

<style scoped>

</style>