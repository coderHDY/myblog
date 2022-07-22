<template></template>

<script>
export default {
  created() {
    if (typeof this.$ssrContext !== "undefined") {
      this.$ssrContext.userHeadTags += 
      `<script type='application/ld+json'>
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "${this.$page.title}",
            "url": "${'https://coderhdy.com' + this.$page.path}",
            "image": [ "https://coderhdy.com/assets/img/portrait.jpg" ],
            "datePublished": "${this.$page.frontmatter.date && (new Date(this.$page.frontmatter.date)).toISOString()}",
            "dateModified": "${this.$page.lastUpdated && (new Date(this.$page.lastUpdated)).toISOString()}",
            "author": [{
                "@type": "Person",
                "name": "西瓜皮儿",
                "url": "https://github.com/coderhdy/myblog"
            }]
          }
      <\/script>`;
    }
  }
};
</script>