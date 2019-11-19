<template>
    <div>
        {{ questionnaire }}
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
                        <td>test</td>
                        <td>{{item.user.name}}</td>
                        <td>{{item.user.lastname}}</td>
                        <td>{{item.questionnaireNote}}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
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
                                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                                score = score + a.score
                            }
                        }))

                        // eslint-disable-next-line no-console
                        console.log('score: ', score)

                        item.questionnaireNote = score

                        db.get(doc.user_id).then(function (user) {
                            // eslint-disable-next-line no-console
                            console.log(user)
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

            if(this.$store.state.admin.pseudo === "") {
                this.$router.push('/admin/login')
            }
        }
    }
</script>

<style scoped>

</style>