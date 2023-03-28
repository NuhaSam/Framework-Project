 <template>
<!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"> -->
<div id="gradient">
<h2 id="head">Search Book </h2>
<p id="pargh">You can search by Book name or Book author</p>
<form class="searchbox" action="http://thecodeblock.com">
        <input type="search" placeholder="Search"  style="color: #ce0000;" />
        <button type="submit" value="search">&nbsp;</button>
    </form>
  <div class="byline"><p>Detailed tutorial on <a href="http://thecodeblock.com/realistic-soft-search-box-in-pure-css/">TheCodeBlock</a></p></div>
</div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//     setup() {
        
//     },
// })
</script>
<style scoped>
@import url('../assets/css/search.css');

</style>