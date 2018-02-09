<template>
<mu-appbar title="Title">
  <mu-icon-button icon="menu" slot="left" />
  <!-- <mu-text-field icon="search" class="appbar-search-field" slot="right" hintText="请输入搜索内容" /> -->
  <mu-flat-button label="expand_more" slot="right" />
  <mu-icon-button icon="expand_more" slot="right" />
</mu-appbar>
</template>
<style>
.appbar-search-field {
  color: #FFF;
  margin-bottom: 0;

}

.appbar-search-field .focus-state {
  color: #FFF;
}

.mu-text-field-hint {
  color: fade(#FFF, 54%);
}

.mu-text-field-input {
  color: #FFF;
}

.mu-text-field-focus-line {
  background-color: #FFF;
}
</style>
