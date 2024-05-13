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
        v-for="news in secondTypeNews"
        :key="news.id"
        :card="news"
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
import { mapGetters, mapActions } from "vuex";

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
      "getSecondTypeNews"
    ]),
    firstTypeNews () {
      return this.getFirstTypeNews;
    },
    secondTypeNews () {
      return this.getSecondTypeNews; 
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
      this.loadSecondList(this.inputData);
    },
    ...mapActions('newsStoreTatarskayaFedotova', [
      'loadSecondList',
      'loadFirstList'
    ]),
  },
  created () {
    this.loadSecondList(this.inputData);
    this.loadFirstList();
  }
};
</script>

<style lang="less">
.card-grid {
  columns: 180px auto;
  padding-left: 30px;
}
</style>
