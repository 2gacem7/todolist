    <template>
  <q-item class="column">
    <div class="full-width" v-if="errorMessage !== ''">
      <span class="text-red">{{ errorMessage }}</span>
    </div>
    <div class="full-width row">
      <q-input
        class="col-xs-8 col-md-10"
        ref="textinput"
        v-model="value"
        filled
        autofocus
        @keydown.enter="submit"
      />
      <q-btn class="col-xs-4 col-md-2 flex-center" @click="submit"
        >Submit</q-btn
      >
    </div>
  </q-item>
</template>

