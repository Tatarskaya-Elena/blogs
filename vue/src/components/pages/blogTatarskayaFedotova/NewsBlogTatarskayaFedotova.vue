<template>
  <PageLayout>
    <HeaderTatarskayaFedotova/>
    <div class="news-block">
      <p class="news-block__date">POSTED ON {{getSecondTypeNews.date}}</p>
      <h2 class="news-block__title">{{getSecondTypeNews.title}}</h2>
      <img 
        :src="getSecondTypeNews.image" 
        alt="Card Image" 
        class="news-block__image"
      />
      <p class="news-block__discribe">{{getSecondTypeNews.text}}</p>
    </div>
    <FooterTatarskayaFedotova/>
  </PageLayout>
</template>

<script>
import PageLayout from '../../parts/PageLayout';
import HeaderTatarskayaFedotova from "@/components/pages/blogTatarskayaFedotova/components/HeaderTatarskayaFedotova.vue";
import FooterTatarskayaFedotova from "@/components/pages/blogTatarskayaFedotova/components/FooterTatarskayaFedotova.vue";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NewsBlogTatarskayaFedotova',
  components: {
    FooterTatarskayaFedotova,
    HeaderTatarskayaFedotova,
    PageLayout
  },
  computed: {
    ...mapGetters("newsStoreTatarskayaFedotova", [
      "getSecondTypeNews"
    ])
  },
  methods: {
    ...mapActions('newsStoreTatarskayaFedotova', [
      'loadDataById'
    ])
  },
  created () {
    this.loadDataById(this.$route.params.id);
  }
}
</script>

<style lang="less">
.news-block {
  background-color: white;
  padding: 20px; 
  font-family: 'Colibri';
  color: #808080;

  &__date {
    margin: 10px;
    text-align: left;
  }

  &__title {
    text-align: center;
    font-family: 'Colibri';
    color: #808080; 
    margin: 10px 0;
  }

  &__image {
    display: block;
    margin: 0 auto;
    padding: 10px;
  }

  &__discribe {
    padding: 10px;
    text-align: justify;
  }
}
</style>
