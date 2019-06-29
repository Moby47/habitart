<template>
  <div>
    <template>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-container grid-list-sm fluid>
              <v-layout row wrap>
                <v-flex
                  v-for="n in 9"
                  :key="n"
                  xs12 sm6 lg6
                  d-flex
                >
                <template>
                  <v-layout>
                      <v-card class='elevation-16 ml-2 mt-2' >
                        <v-img
                          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                          aspect-ratio="1.7"
                          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                          height='200'
                          class="grey lighten-2"
                        ></v-img>
                        <v-card-title primary-title>
                          <div>
                            <h3 class="headline mb-0">Kangaroo Vallnbjbjey Safari</h3>
                          </div>
                        </v-card-title>
                      </v-card>
                    
                  </v-layout>
                </template>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
