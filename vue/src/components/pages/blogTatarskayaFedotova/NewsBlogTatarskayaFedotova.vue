<template>
  <PageLayout>
    <HeaderTatarskayaFedotova/>
    <div class="news-block">
      <p class="news-block__date">POSTED ON 26 MARCH 2024</p>
      <h2 class="news-block__title">LONG TIME JOURNEY</h2>
      <img 
        src="https://img.freepik.com/premium-photo/a-desert-scene-with-camels-and-a-sunset_900396-13267.jpg" 
        alt="Card Image" 
        class="news-block__image"
      />
      <p class="news-block__discribe">
        Lorem ipsum dolor sit amet, cotuer adipising elit, sed diam n
        my nibh euismod tincidunt ut I dolore manga allquam erat vol.
        Ut wisi enim ad minim veniam nostrud exerct tation ullamcor.
      </p>
    </div>
    <FooterTatarskayaFedotova/>
  </PageLayout>
</template>

<script>
import PageLayout from '../../parts/PageLayout';
import HeaderTatarskayaFedotova from "@/components/pages/blogTatarskayaFedotova/components/HeaderTatarskayaFedotova.vue";
import FooterTatarskayaFedotova from "@/components/pages/blogTatarskayaFedotova/components/FooterTatarskayaFedotova.vue";

export default {
  name: 'NewsBlogTatarskayaFedotova',
  components: {
    FooterTatarskayaFedotova,
    HeaderTatarskayaFedotova,
    PageLayout
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
