<template>
    <div>
        <v-flex md8 offset-md2>
            <v-row no-gutters>
                <v-col :cols="12" lg="5" md="5" offset-md="3" offset-lg="3">
                    <v-card class="mt-12">
                        <h1 class="pt-5 pl-5 pb-2">Vos résultats</h1>
                        <hr />
                        <v-card-title class="pl-5 pt-5 mt-12 mb-12"> Score :  {{ getResult }}</v-card-title>
                        <hr />
                        <v-card-action>
                            <v-btn color="primary" class="pt-2 pl-5 pb-2 mt-6 ml-5 mb-6" to="/">Menu</v-btn>
                        </v-card-action>
                    </v-card>
                </v-col>
            </v-row>
        </v-flex>
    </div>
</template>

<script>

    export default {
        name: "result",
        data() {
            return {
                id: '',
                questions: null,
                score: 0
            }
        },
        computed: {
            getResult() {
                /**
                 * si je recharge ma page je suis rediréger vers la page connexion
                 */
                if (this.$store.state.questions.length === 0) {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.$router.push('/')
                }

                /**
                 * Calcul mon score contenue dans mon store
                 */
                this.$store.state.questions.map(e => e.choice.map(a => {
                    if(a.statut === true) {
                        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                        this.score = this.score + a.score
                    }
                }))
                return this.score
            }
        },
        /**
         * Récupération de l'id contenue dans l'url
         */
        mounted() {
            this.id = this.$route.params.userId
        }
    }
</script>

<style scoped>

</style>