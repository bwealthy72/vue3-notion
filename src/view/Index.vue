<script setup lang="ts">
import { NotionRenderer } from "../components";
import { useGetPageBlocks } from "../lib/composables";
import { mapPageUrl, pageLinkOptions } from "../lib/props";

// const blockMap = ref()

// onMounted(async () => {
//   // react-notion tester: 2e22de6b770e4166be301490f6ffd420
//   // equation tester: 2a1d5226d68246deba627012081693f9
//   // table tester: bd1de400a8b349dc824f4f00e61d0797
//   // todo tester: 235057194b954a60ace89c052a65d102
//   blockMap.value = await getPageBlocks("4b2dc28a5df74034a943f8c8e639066a")
// })
//fresh-seeker-86b.notion.site/Vue-3-v-slot-06604ac5e06846e29ac229734c1d7809
const { data: blockMap } = useGetPageBlocks("06604ac5e06846e29ac229734c1d7809");
</script>

<template>
  <div v-if="blockMap">
    <NotionRenderer
      :blockMap="blockMap"
      fullPage
      prism
      katex
      :mapPageUrl="mapPageUrl"
      :pageLinkOptions="pageLinkOptions"
    />
  </div>
</template>
