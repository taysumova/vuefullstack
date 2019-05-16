<template>
  <panel title="Songs">
    <v-btn slot="action" class="cyan accent-2" fab absolute right light>
      <router-link :to="{name: 'songs-create'}">
        <v-icon>add</v-icon>
      </router-link>
    </v-btn>
    <div v-for="song in songs" :key="song.id">
      {{song.title}}-
      {{song.artist}}-
      {{song.genre}}-
    </div>
  </panel>
</template>
<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  name: 'Songs',
  components: {
    Panel
  },
  data () {
    return {
      songs: []
    }
  },
  async mounted () {
    this.songs = (await SongsService.getAllSongs()).data
  }
}
</script>
<style scoped>
</style>
