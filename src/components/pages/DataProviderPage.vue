<template>
   <div class="min-h-screen text-center text-black">
      <h3 class="text-black mb-6">Data Provider</h3>
       <div class="max-w-md mx-auto mb-8">
           <fetch-json url='https://my-json-server.typicode.com/stevepop/api-data/albums'>
                 <div class="card" slot-scope="{ json: albums, loading }">
                   <h1 class="text-2xl mb-6">Top Christian Albums</h1>
                   <div v-if="loading">Loading...</div>
                   <div v-else class="album-grid">
                       <div class="album-grid-item" v-for="album in albums" :key="album.id">
                           <img :src="album.artwork" alt="">
                           <h2 class="album-title">{{ album.title }}</h2>
                           <p class="album-artist">{{ album.artist }}</p>
                       </div>
                   </div>
                 </div>
           </fetch-json>
       </div>
      <div class="max-w-sm mx-auto">
          <div class="flex justify-center">
           <fetch-json url='https://my-json-server.typicode.com/stevepop/api-data/contacts'>
               <div class="card" slot-scope="{ json: contacts, loading }">
                   <h1 class="text-2xl mb-6">Your Contacts</h1>
                   <div v-if="loading">Loading...</div>
                   <div v-else>
                        <div v-for="contact in contacts" :key="contact.id" class="flex items-center spaced-y-6">
                       <img :src="contact.picture.medium" class="h-12 w-12 rounded-full block mr-2" alt="">
                        <div>
                            <div class="font-bold text-black text-left">
                               {{ contact.name.first }} {{ contact.name.last }}
                            </div>
                        
                            <div class="text-grey-dark">
                                {{ contact.email }}
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
           </fetch-json>
      </div>
      </div>
      
  </div>
</template>

<script>
import FetchJson from "@/components/FetchJson"
export default {
  components: {
    FetchJson
  }
}
</script>

<style>
  .spaced-y-6 {
    margin-bottom: 1.5rem;
  }
  .spaced-y-6:last-child {
    margin-bottom: 0;
  }

  .album-grid {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-right: -1rem;
  margin-bottom: -1rem;
}
.album-grid-item {
  width: 33.33333%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 1rem;
}
.album-title {
  font-size: 0.875rem;
}
.album-artist,
.album-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.album-artist {
  font-size: 0.75rem;
  color: #606f7b;
}
</style>

