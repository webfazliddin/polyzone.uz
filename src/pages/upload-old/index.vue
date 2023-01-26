<template>
  <section class="section_padding section_border_top">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-12">
          <div class="tab-pane fade in active">
            <div class="single_card upload_form">
              <div class="row">
                <div class="col-lg-4">
                  <div class="mb-4 pb-2">
                    <label class="upload_control">
                      <span class="label">Upload Image</span>
                      <span
                        class="control_box upload_image"
                        v-if="!upload.image"
                      >
                        <span class="suppor_format">
                          Images. Max 2mb.
                        </span>
                        <span class="add_icon">
                          <i class="far fa-plus"></i>
                        </span>
                      </span>
                      <img
                        class="upload_image"
                        v-if="!!upload.image"
                        :src="upload.image"
                      />
                      <input
                        type="file"
                        class="d-none"
                        multiple
                        accept="image/jpeg, image/png"
                        @change="changeImage"
                      />
                    </label>
                    <Dialog
                      :show="showCropper"
                      @close="showCropper = false"
                      :show-click-btn="true"
                    >
                      <VueCropper
                        ref="image"
                        :src="imageSrc"
                        :aspectRatio="8/5"
                      />
                      <v-btn @click="updateUploadImage" class="mt-2">OK</v-btn>
                    </Dialog>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="mb-4 pb-2">
                    <label class="upload_control">
                      <span class="label">Upload File</span>
                      <span class="control_box ">
                        <span class="suppor_format">
                          {{ !!upload.file ? upload.file.name : "ZIP. Max 200mb." }}
                        </span>
                        <span class="add_icon" v-if="!upload.file">
                          <i class="far fa-plus"></i>
                        </span>
                      </span>
                      <input
                        type="file"
                        class="d-none"
                        accept=".zip"
                        @change="changeFile"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div class="mb-0">
                <div class="mb-4 pb-2">
                  <label for="title" class="label">Title</label>
                  <v-text-field
                    placeholder="Enter title"
                    v-model="upload.title"
                    type="string"
                    outlined
                    background-color="rgb(var(--body-bg))"
                  ></v-text-field>
                </div>
                <div class="mb-4 pb-2">
                  <label for="category" class="label">Choose category</label>
                  <v-select
                    placeholder="Enter category"
                    :items="listNotChildrenCategory"
                    outlined
                    item-text="title"
                    item-value="id"
                    hide-details
                    hide-selected
                    v-model="upload.category_id"
                    class="h-100"
                    background-color="rgb(var(--body-bg))"
                  ></v-select>
                </div>
                <div class="mb-4 pb-2">
                  <label for="price" class="label">Price</label>
                  <div class="row">
                    <div class="col-lg-2">
                      <v-btn
                        elevation="2"
                        :color="free?'success':'secondary'"
                        block
                        outlined
                        @click="free=!free"
                        x-large
                      >
                        FREE
                      </v-btn>
                    </div>
                    <div class="col-lg-6">
                      <v-text-field
                        placeholder="Enter price"
                        v-model="upload.price.value"
                        type="number"
                        outlined
                        background-color="rgb(var(--body-bg))"
                        :disabled="free"
                      ></v-text-field>
                    </div>
                    <div class="col-lg-4">
                      <v-select
                        placeholder="Enter currency"
                        :items="currencyList"
                        outlined
                        item-text="code"
                        item-value="number"
                        hide-details
                        hide-selected
                        v-model="upload.price.currency_id"
                        class="h-100"
                        background-color="rgb(var(--body-bg))"
                        :disabled="free"
                      ></v-select>
                    </div>
                  </div>
                </div>
                <v-btn
                  elevation="2"
                  color="primary"
                  block
                  outlined
                  @click="apiCreateMod()"
                  x-large
                >
                  Create Item
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Dialog from "@/components/detal/Dialog";
import {API_MOD_STORE} from "@/api/Mod";

export default {
  name: "Upload",
  components: {Dialog},
  data() {
    return {
      image: null,
      imageSrc: null,
      title: "",
      showCropper: false,
      free: false,
      upload: {
        currency: "840",
        image: this.$refs.image,
        file: null,
        category_id: null,
        price: {
          value: null,
          currency_id: 840
        },
      }
    }
  },
  computed: {
    ...mapGetters({
      currencyList: 'Currency/list',
      listNotChildrenCategory: 'Category/listNotChildrenCategory'
    })
  },
  mounted() {
    this.actionCurrencyList();
    this.actionCategoryListIndexNotChildrenCategory();
  },
  methods: {
    ...mapActions({
      actionCurrencyList: 'Currency/action_index',
      actionCategoryListIndexNotChildrenCategory: 'Category/action_index_not_children_category'
    }),
    changeImage(event) {
      this.image = event.target.files[0];
      this.imageSrc = URL.createObjectURL(this.image);
      this.showCropper = true;
    },
    changeFile(event) {
      this.upload.file = event.target.files[0];
    },
    updateUploadImage() {
      this.upload.image = this.$refs.image.getCroppedCanvas().toDataURL();
      this.showCropper = false;
    },
    apiCreateMod() {
      let upload = new FormData();
      this.buildFormData(upload, this.upload)

      upload.append('image', this.image);
      upload.append('file', this.upload.file);

      if(this.free){
        upload.delete('price[value]');
        upload.delete('price[currency_id]');
      }

      API_MOD_STORE(upload)
        .then(response => {
          this.$router.push('/mod/' + response.data.data.id)
        })
    }
  },
}
</script>

<style lang="scss" scoped>
.upload_image {
  border: 1px solid rgb(var(--gray-alt-bg));
  border-radius: 5px;
  width: 100%;
}
</style>
