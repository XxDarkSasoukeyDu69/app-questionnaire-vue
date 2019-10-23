<template>
    <div>
       <v-flex md8 offset-md2>
           <v-row no-gutters>
               <v-col :cols="12">
                    <h1>Vos résultats</h1>
                    <v-simple-table>
                           <template v-slot:default>
                               <thead>
                               <tr class="mt-12 mb-12 pt-12 pb-12">
                                   <th class="text-left">Question</th>
                                   <th class="text-left">Réponse</th>
                               </tr>
                               </thead>
                               <tbody>
                               <tr v-for="item in question"  :key="item.ques">
                                   <td>{{ item.ques }}</td>
                                   <td>{{ item.resp }}</td>
                               </tr>
                               </tbody>
                           </template>
                    </v-simple-table>
               </v-col>
           </v-row>
       </v-flex>
    </div>
</template>

<script>
    // eslint-disable-next-line no-unused-vars
    const jsonFile = require('../question/question')
    const fs = require('fs')
    export default {

        name: "result",
        data() {
            return {
                question: [
                    { ques: 'Pourquoi la vie est elle ainsi ?', resp: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le 1500, quand un imprimeur anofeuilles Letrexte, comme Aldus PageMaker.' },
                    { ques: 'Pourquoi suis je beau ?', resp: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est' },
                    { ques: 'Que se passe t il après la mort ?', resp: 'szefzefgzefzefzef fgfzfze zzegf zefz efzeff fze' },
                    { ques: 'Pourquoi les animaux ?', resp: 'ergrgergerge' },
                    { ques: 'C\'est beau ?, resp: ', resp: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est' },
                    { ques: 'Pierrick ?', resp: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est' },
                    { ques: 'Ce control est chiant ?', resp: 'Le LoreLe Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum estm Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est' },
                    { ques: 'ToDowORLd la best des app ?', resp: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est' },
                    { ques: 'Ce questionnaire ne repond pas vraiment a la sécurité', resp: '' },
                    { ques: 'Oui ? Ou non ?', resp: '' },
                ],
            }
        },
        mounted() {
            fs.readFile ('../question/question', 'utf8', (err, jsonString) => {
                if (err) {
                    // eslint-disable-next-line no-console
                    console.log("Echec de la lecture du fichier:", err )
                    return
                }
                // eslint-disable-next-line no-console
                console.log('Données de fichier:', jsonString)
            })
        },
        computed: {

        }
    }
</script>

<style scoped>

</style>