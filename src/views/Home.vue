<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <ul class="list-group navigation-tree-parent">
          <li class="list-group-item">
            <div
              class="d-flex justify-content-between align-items-baseline pb-3"
            >
              <label class="text-parent">مركز الوثائق و المستندات</label>
              <div class="action-icons">
                <i
                  v-if="typeUser == 'Admin'"
                  class="fas fa-plus mx-2 plus-icon"
                  @click="showDialog(0, 0)"
                ></i>
                <div class="empty_box mx-2"></div>
              </div>
            </div>
            <ul
              class="list-group navigation-tree-chiled chiled-1 pb-0"
              v-if="listLinks.filter((v) => v.parentId == 0).length !== 0"
            >
              <li
                class="list-group-item"
                v-for="link in listLinks.filter((v) => v.parentId == 0)"
                :key="link.id"
              >
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-baseline
                    pb-3
                  "
                >
                  <div class="d-flex align-items-baseline">
                    <i
                      class="fas fa-chevron-down collapse-chiled collapsed"
                      data-toggle="collapse"
                      :href="'#link_' + link.id"
                      role="button"
                      aria-expanded="false"
                      :aria-controls="'link_' + link.id"
                      v-if="
                        listLinks.filter((v) => v.parentId == link.id)
                          .length !== 0
                      "
                    ></i>
                    <div
                      class="empty_box"
                      v-if="
                        listLinks.filter((v) => v.parentId == link.id).length ==
                        0
                      "
                    ></div>
                    <label class="text-parent mr-3">{{
                      link.arabicName
                    }}</label>
                  </div>
                  <div class="action-icons">
                    <i
                      v-if="typeUser == 'Admin'"
                      class="fas fa-plus mx-2 plus-icon"
                      @click="showDialog(0, link.id)"
                    ></i>
                    <i
                      v-if="typeUser == 'Admin'"
                      class="fas fa-pen mx-2 pen-icon"
                      @click="showDialog(link.id, 0)"
                    ></i>
                    <i
                      v-if="typeUser == 'Admin'"
                      class="fas fa-trash-alt delete-icon mx-2"
                      @click="deleteLink(link.id)"
                    ></i>
                    <a :href="link.url" v-if="typeUser == 'User'"
                      ><i class="fas fa-external-link-alt"></i
                    ></a>
                  </div>
                </div>
                <ul
                  class="list-group collapse navigation-tree-chiled chiled-2"
                  :id="'link_' + link.id"
                  v-if="
                    listLinks.filter((v) => v.parentId == link.id).length !== 0
                  "
                >
                  <li
                    class="list-group-item"
                    v-for="linkchiled in listLinks.filter(
                      (v) => v.parentId == link.id
                    )"
                    :key="linkchiled.id"
                  >
                    <div
                      class="
                        d-flex
                        justify-content-between
                        align-items-baseline
                        pb-3
                      "
                    >
                      <div class="d-flex align-items-baseline">
                        <i
                          class="fas fa-chevron-down collapse-chiled collapsed"
                          data-toggle="collapse"
                          :href="'#link_' + linkchiled.id"
                          role="button"
                          aria-expanded="false"
                          :aria-controls="'link_' + linkchiled.id"
                          v-if="
                            listLinks.filter((v) => v.parentId == linkchiled.id)
                              .length !== 0
                          "
                        ></i>
                        <div
                          class="empty_box"
                          v-if="
                            listLinks.filter((v) => v.parentId == linkchiled.id)
                              .length == 0
                          "
                        ></div>
                        <label class="text-parent mr-3">
                          {{ linkchiled.arabicName }}
                        </label>
                      </div>
                      <div class="action-icons">
                        <i
                          v-if="typeUser == 'Admin'"
                          class="fas fa-plus mx-2 plus-icon"
                          @click="showDialog(0, linkchiled.id)"
                        ></i>
                        <i
                          v-if="typeUser == 'Admin'"
                          class="fas fa-pen mx-2 pen-icon"
                          @click="showDialog(linkchiled.id, 0)"
                        ></i>
                        <i
                          v-if="typeUser == 'Admin'"
                          class="fas fa-trash-alt delete-icon mx-2"
                          @click="deleteLink(linkchiled.id)"
                        ></i>
                        <a :href="linkchiled.url" v-if="typeUser == 'User'"
                          ><i class="fas fa-external-link-alt"></i
                        ></a>
                      </div>
                    </div>
                    <ul
                      class="
                        list-group
                        collapse
                        navigation-tree-chiled
                        chiled-3
                        pb-0
                      "
                      v-if="
                        listLinks.filter((v) => v.parentId == linkchiled.id)
                          .length !== 0
                      "
                      :id="'link_' + linkchiled.id"
                    >
                      <li class="list-group-item">
                        <div
                          class="
                            d-flex
                            justify-content-between
                            align-items-baseline
                            pb-3
                          "
                          v-for="linkgrandson in listLinks.filter(
                            (v) => v.parentId == linkchiled.id
                          )"
                          :key="linkgrandson.id"
                        >
                          <div class="d-flex align-items-baseline">
                            <div class="empty_box"></div>
                            <label class="text-parent mr-3">
                              {{ linkgrandson.arabicName }}
                            </label>
                          </div>
                          <div class="action-icons">
                            <div class="empty_box mx-2"></div>
                            <i
                              v-if="typeUser == 'Admin'"
                              class="fas fa-pen mx-2 pen-icon"
                              @click="showDialog(linkgrandson.id)"
                            ></i>
                            <i
                              v-if="typeUser == 'Admin'"
                              class="fas fa-trash-alt delete-icon mx-2"
                              @click="deleteLink(linkgrandson.id)"
                            ></i>
                            <a :href="linkgrandson.url" v-if="typeUser == 'User'"
                              ><i class="fas fa-external-link-alt"></i
                            ></a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5
                    class="modal-title"
                    id="exampleModalLongTitle"
                    v-if="linkInfo.id !== 0"
                  >
                    تعديل عنصر
                  </h5>
                  <h5
                    class="modal-title"
                    id="exampleModalLongTitle"
                    v-if="linkInfo.id == 0"
                  >
                    إضافة عنصر
                  </h5>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group mb-5">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="الإسم بالعربية*"
                          v-model="linkInfo.arabicName"
                          @keypress="isArabic($event)"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group mb-5">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="الإسم بالإنجليزية*"
                          v-model="linkInfo.englishName"
                          @keypress="isEnglish($event)"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group mb-5">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="الرابط*"
                          v-model="linkInfo.url"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    :disabled="!isValid"
                    @click="save"
                  >
                    <i class="fas fa-save ml-1"></i> حفظ
                  </button>
                  <button
                    type="button"
                    class="btn btn-link"
                    @click="hideDialog"
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="showDeleteModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    حذف عنصر
                  </h5>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-12">
                      <p>
                        هذا العنصر ترتبط به عناصر اخرى , هل انت متأكد من حذف هذا
                        العنصر مع العناصر المرتبطه به؟
                      </p>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="deleteAll"
                  >
                    <i class="fas fa-save ml-1"></i> تأكيد
                  </button>
                  <button
                    type="button"
                    class="btn btn-link"
                    @click="hideDeleteDialog"
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { LinkModel } from "@/Models/LinkModel";
import ValidationServices from "@/Services/ValidationServices";
import LinkServices from "@/Services/LinkServices";
import { Toaster } from "@/Services/toast";

export default class Home extends Vue {
  @Prop(String) readonly typeUser: string | undefined;
  listLinks: LinkModel[] = [];
  showModal: boolean = false;
  showDeleteModal: boolean = false;
  linkInfo: LinkModel = {
    id: 0,
    parentId: 0,
    arabicName: "",
    englishName: "",
    url: "",
  };
  async mounted() {
    this.getLinks();
  }

  async getLinks() {
    this.listLinks = await LinkServices.getLinks();
  }

  async showDialog(id: number, parentId: number) {
    if (id !== 0) {
      this.linkInfo = await LinkServices.getLink(id);
    } else {
      this.linkInfo.parentId = parentId;
    }
    this.showModal = true;
  }

  hideDialog() {
    this.linkInfo = {
      id: 0,
      parentId: 0,
      arabicName: "",
      englishName: "",
      url: "",
    };
    this.showModal = false;
  }

  async save() {
    if (this.linkInfo.id !== 0) {
      let response = await LinkServices.editLink(this.linkInfo);
      if (response == 200) {
        Toaster.success("تمت العملية بنجاح");
      } else {
        Toaster.error("لم تتم العملية بنجاح");
      }
    } else {
      let response = await LinkServices.addLink(this.linkInfo);
      if (response == 201) {
        Toaster.success("تمت العملية بنجاح");
      } else {
        Toaster.error("لم تتم العملية بنجاح");
      }
    }
    this.linkInfo = {
      id: 0,
      parentId: 0,
      arabicName: "",
      englishName: "",
      url: "",
    };
    this.showModal = false;
    this.getLinks();
  }

  async deleteLink(id: number) {
    if (this.listLinks.filter((x) => x.parentId == id).length !== 0) {
      this.showDeleteModal = true;
      this.linkInfo.id = id;
    } else {
      let response = await LinkServices.deleteLink(id);
      this.linkInfo = {
        id: 0,
        parentId: 0,
        arabicName: "",
        englishName: "",
        url: "",
      };
      this.getLinks();
      if (response == 200) {
        Toaster.success("تمت العملية بنجاح");
      } else {
        Toaster.error("لم تتم العملية بنجاح");
      }
    }
  }

  async deleteAll() {
    let response = await LinkServices.deleteLink(this.linkInfo.id);
    if (response == 200) {
      Toaster.success("تمت العملية بنجاح");
    } else {
      Toaster.error("لم تتم العملية بنجاح");
    }
    this.hideDeleteDialog();
  }

  hideDeleteDialog() {
    this.linkInfo = {
      id: 0,
      parentId: 0,
      arabicName: "",
      englishName: "",
      url: "",
    };
    this.showDeleteModal = false;
    this.getLinks();
  }

  isArabic(event: KeyboardEvent) {
    if (!ValidationServices.isArabic(event.key)) {
      event.preventDefault();
    }
  }

  isEnglish(event: KeyboardEvent) {
    if (ValidationServices.isArabic(event.key)) {
      event.preventDefault();
    }
  }

  get isValid() {
    return (
      this.linkInfo.arabicName != "" &&
      this.linkInfo.englishName != "" &&
      this.linkInfo.url != ""
    );
  }
}
</script>
