<template>
  <main class="full-wrapper" id="home-section">
    <HeaderSection />
    <PopularSection />
    <LiveSection />
    <CreatorSection />
    <PopularCreatorSection />
    <PaddingSection />
  </main>
</template>

<script>
import HeaderSection from "@/components/section/HeaderSection";
import PopularSection from "@/components/section/PopularSection";
import LiveSection from "@/components/section/LiveSection";
import CreatorSection from "@/components/section/CreatorSection";
import PopularCreatorSection from "@/components/section/PopularCreatorSection";
import PaddingSection from "@/components/section/PaddingSection";

export default {
  name: "HomePage",
  components: {
    HeaderSection,
    PopularSection,
    LiveSection,
    CreatorSection,
    PopularCreatorSection,
    PaddingSection
  }

}
</script>
