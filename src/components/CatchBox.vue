<script setup lang="ts">
import { computed, PropType } from 'vue'
import DisplayBox from './DisplayBox.vue'
import FormattedTexts from './FormattedTexts.vue'
import { AwardInfo } from '../types/common'

const props = defineProps({
  is_opacity: {
    type: Boolean,
    default: false
  },
  info: {
    type: Object as PropType<AwardInfo>,
    default: () => {
      return {
        description: '如果持续遇到此问题，请联系开发组。',
        display_name: '你不该在这里。',
        color: 'rgb(198, 193, 191)',
        image: './resource/shit.png',
        level: { display_name: '★★★★★', color: 'rgb(192, 232, 174)' }
      }
    }
  },
  notation: {
    type: String,
    default: ''
  },
  is_new: {
    type: Boolean,
    default: false
  },
  color_on_notation: {
    type: Boolean,
    default: false
  },
  notation2: {
    type: String,
    default: ''
  }
})

const notation_color = computed(() => {
  if (props.color_on_notation) {
    if (props.notation == '+1') {
      return '#FFFFFF'
    } else if (props.notation == '+2') {
      return '#FFFD55'
    } else {
      return '#8BFA84'
    }
  }
  return '#FFFFFF'
})
</script>

<template>
  <div class="outbox" :class="{ 'outbox-opacity': props.is_opacity }">
    <DisplayBox
      :notation_down_color="notation_color"
      :image="info.image_url"
      :color="info.color"
      :notation_down="notation"
      :new_overlay="is_new"
      :do_glow="info.level.lid >= 4"
      :glow_type="0"
      :notation_up="notation2"
    />
    <div class="textbox">
      <div class="rightTitle">
        <FormattedTexts :text="info.display_name" />
      </div>
      <div class="rightDescription">
        <FormattedTexts :text="info.description" />
      </div>
      <div class="rightStar" :style="{ color: props.info.level.color }">
        {{ props.info.level.display_name }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.outbox {
  width: 800px;
  background: linear-gradient(to bottom, #b0aea8, rgb(147, 140, 134));
  display: flex;
  padding: 18px;
  position: relative;
  border-radius: 16px;
  align-items: flex-start;
  padding-bottom: 22px;
}

.outbox-opacity {
  background: linear-gradient(to bottom, #6e6e6e44, rgba(0, 0, 0, 0.369));
  backdrop-filter: blur(5px);
}

.textbox {
  margin-left: 15px;
}

.rightDescription {
  width: 567px;
  color: #ffffff;
  white-space: pre-wrap;
  font-family: '凤凰点阵体 16px', 'Maple UI', var(--font-fallback);
  font-size: 16px;
  line-height: 24px;
}

.rightTitle {
  width: 420px;
  font-size: 43px;
  margin-bottom: 8px;
  line-height: 1em;
  color: #ffffff;
  font-family: '荆南俊俊体', '阿里妈妈数黑体', 'Maple UI', var(--font-fallback);
}

.rightStar {
  width: 400px;
  font-size: 38px;
  text-align: right;
  font-family: 'Maple UI', var(--font-fallback);
  position: absolute;
  top: 10px;
  right: 16px;
  text-shadow: 5px 5px 15px #3e3a351e;
}

.outbox-opacity .rightStar {
  text-shadow: 5px 5px 15px #2e2b277e;
}
</style>
