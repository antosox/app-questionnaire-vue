<template>
    <div>
        <v-row>
            <v-col :cols="12" lg="6" md="6" offset-lg="3" offset-md="3" sm="4" offset-sm="2">
                <div class="d-flex justify-center ">
                    <div class="mb-3 text-center">
                        <p>Votre Score est de</p>
                        <p>{{score}}/20</p>
                        <v-btn color="primary" @click="goToHome('/')">Au Revoir et merci</v-btn><br>
                        <img src="../../au_revoir.gif" width="500" height="400">
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import PouchDB from 'pouchdb'
    const db = new PouchDB("questionnaire")

    export default {
        name: "Score",

        data(){
            return {
                score: 0,
                total: 0
            }
        },

        methods: {
            goToHome(url){
                this.$router.push(url)
            },
        },

        mounted(){
            var self = this
            // select des données et calcul du score

            // On prend toutes les réponses on décrémente si erreur puis on met tout sur 20 pour
            // le dynamique du nombre des questions
            db.get(this.$route.params.id).then(function (doc) {
                doc.questions.map(function (q) {
                    self.score = q.reponses.length
                    self.total = q.reponses.length
                    q.reponses.map(function (r) {
                        if(r.status != r.reponse){
                            self.score--
                        }
                    })
                })
                self.score = ((self.score/self.total)*20).toFixed(2)
                doc.score = self.score
                // puis on insère le score dans la bdd pour la FUTUR interface administrateur
                return db.put(doc)
            })
        }
    }
</script>

<style scoped>

</style>