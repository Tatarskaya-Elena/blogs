<template>
  <PageLayout>
    <HeaderTatarskayaFedotova />
    <FirstCardTatarskayaFedotova
      :currentNews="currentNews"
      :currentSlide="currentSlide"
      @changeSlideIndex="(index) => changeSlideHandler(index)"
    />
    <SearchTatarskayaFedotova @search="(data) => handleSearch(data)" />
    <div class="card-grid">
      <SecondCardTatarskayaFedotova
        v-for="news in filteredNews"
        :key="news.id"
        :image="news.image"
        :date="news.date"
        :title="news.title"
        :text="news.text"
      />
    </div>
    <FooterTatarskayaFedotova />
  </PageLayout>
</template>

<script>
import PageLayout from "../../parts/PageLayout";
import HeaderTatarskayaFedotova from "@/components/pages/blogTatarskayaFedotova/components/HeaderTatarskayaFedotova.vue";
import FirstCardTatarskayaFedotova from "@/components/pages/blogTatarskayaFedotova/components/FirstCardTatarskayaFedotova.vue";
import SecondCardTatarskayaFedotova from "@/components/pages/blogTatarskayaFedotova/components/SecondCardTatarskayaFedotova.vue";
import SearchTatarskayaFedotova from "@/components/pages/blogTatarskayaFedotova/components/SearchTatarskayaFedotova.vue";
import FooterTatarskayaFedotova from "@/components/pages/blogTatarskayaFedotova/components/FooterTatarskayaFedotova.vue";
import { mapGetters } from "vuex";

export default {
  name: "BlogTatarskayaFedotovaHome",
  components: {
    PageLayout,
    FooterTatarskayaFedotova,
    HeaderTatarskayaFedotova,
    FirstCardTatarskayaFedotova,
    SecondCardTatarskayaFedotova,
    SearchTatarskayaFedotova,
  },
  data () {
    return {
      currentSlide: 0,
      inputData: ""
    };
  },
  computed: {
    ...mapGetters("newsStoreTatarskayaFedotova", [
      "getFirstTypeNews",
      "getFilteredNews",
    ]),
    firstTypeNews () {
      return this.getFirstTypeNews;
    },
    filteredNews () {
      return this.getFilteredNews(this.inputData);
    },
    currentNews () {
      return this.firstTypeNews[this.currentSlide];
    }
  },
  methods: {
    changeSlideHandler (index) {
      this.currentSlide = index;
    },
    handleSearch (data) {
      this.inputData = data;
    }
  }
};
</script>

<style lang="less">
.card-grid {
  columns: 180px auto;
  padding-left: 30px;
}
</style>
