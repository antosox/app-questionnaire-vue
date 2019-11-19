<template>
    <div>
        <v-stepper v-model="e1">
            <v-stepper-header>
                <v-stepper-step editable :complete="e1 > key" :step="key+1" v-for="(ques,key) in questions" :key="key">Question {{ key+1 }}</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content v-for="(n,key) in questions" :key="key" :step="key+1">
                    <questions :questions="n" :key="key" :qlenght="questions.length"></questions>
                    <v-btn v-if="e1 < questions.length" color="primary" @click="nextStep()">
                        Continuer
                    </v-btn>
                    <v-btn v-if="e1 == questions.length" color="green" @click="endForm()">
                        Valider
                    </v-btn>

                    <v-btn text @click="backStep()">Retour</v-btn>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </div>
</template>

<script>
    import MyQuestion from "../assets/questions"
    import Questions from "@/components/Questions"
    import PouchDB from "pouchdb"
    const db = new PouchDB("questionnaire")

    export default {
        name: "Questionnaire",
        components: {Questions},
        data() {
            //remise à zéro de mon questionnaire
            const serializeQuestions = JSON.parse(JSON.stringify(MyQuestion.questions))
            // 5 questions aléatoire
            var shuffled = serializeQuestions.sort(function(){return .5 - Math.random()})
            return {
                nbrMaxQuestion: 5,
                questions: shuffled.slice(0,5),
                e1: 1
            }
        },

        methods: {
            nextStep() {
                this.e1++
            },
            backStep() {
                this.e1--
            },
            // insertion des réponses dans la BDD + redirection vers la page MyScore pour voir le résultat
            endForm() {
                var router = this.$router
                var self = this

                db.get(this.$route.params.id).then(function (doc) {
                    doc.questions = self.questions
                    return db.put(doc)
                }).then(function (put) {
                    router.push("/Myscore/" + put.id)
                })
            }
        },
    }
</script>

<style scoped>

</style>