<template>
  <div>
    <Header :title="'Privacy Policy'" :sub_title="'Privacy Policy'" />
    <PrivacyPolicySection />
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import PrivacyPolicySection from "@/components/section/PrivacyPolicySection";

export default {
  name:"privacy-policy",
  components: {
    PrivacyPolicySection,
    Header
  }

}
</script>
