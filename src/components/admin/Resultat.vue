<template>
    <div class="container mt-12">
        <div class="mt-12 mb-5">
            <h2>Liste des résultats : </h2>
        </div>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Compagnie name</th>
                        <th class="text-left">Prenom</th>
                        <th class="text-left">Nom</th>
                        <th class="text-left">Note</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, key) in list" :key="key">
                        <td>{{item.user.society}}</td>
                        <td>{{item.user.name}}</td>
                        <td>{{item.user.lastname}}</td>
                        <td>{{item.questionnaireNote}}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        <div class="mt-12">
            <v-btn rounded to="/admin/home" color="primary">Retour</v-btn>
            <v-btn rounded to="/" color="primary" class="ml-5">Questionnaire</v-btn>
        </div>
    </div>
</template>

<script>

    import PouchDB from 'pouchdb'
    const db = new PouchDB('http://localhost:5984/control')

    export default {
        name: "resultat",
        data() {
            return {
                list:[]
            }
        },
        /**
         * Quand je monte mon composant, je récupère toute mes infos questionnaires et le user
         */
        mounted() {

            let d = this;
            db.allDocs({
                include_docs: true,
                attachments: true
            }).then(function (result) {
                // eslint-disable-next-line no-console
                console.log(result)
                result.rows.map(e => {
                    let item = {
                        questionnaireNote: null,
                        user: null
                    }
                    db.get(e.id).then(function (doc) {

                        let score = 0

                        doc.tab.map(e => e.choice.map(a => {
                            if(a.statut === true) {
                                score = score + a.score
                            }
                        }))

                        item.questionnaireNote = score

                        db.get(doc.user_id).then(function (user) {

                            item.user = user
                        })
                        d.list.push(item)
                    }).catch(function (err) {
                        // eslint-disable-next-line no-console
                        console.log(err);
                    });
                })
            }).catch(function (err) {
                // eslint-disable-next-line no-console
                console.log(err);
            });
        }
    }
</script>

<style scoped>

</style>