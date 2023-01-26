<template>
 <div class="container">
  <div class="page__description">
    <div class="card">
      <div class="card__name">Preview Item</div>
      <div class="card__image">
        <img src="../images/edit.png" />
      </div>
      <div class="card__btns">
        <button class="card__btns-reuploadBtn" type="button">Reupload</button>
        <button class="card__btns-edit3dBtn" type="button">Edit 3D</button>
      </div>
    </div>
    <div class="editor">
      <div class="editor__title">
        <label>Title</label>
      <input type="text" placeholder="Enter title">
      </div>
      <div class="editor__description">
        <label>Description</label>
        <div class="options">
        <button id="bold" class="option-button format">
          <i class="fa-solid fa-bold"></i>
        </button> 
        <button id="italic" class="option-button format">
          <i class="fa-solid fa-italic"></i>
        </button>
        <button id="createLink" class="adv-option-button">
            <i class="fa fa-link"></i>
          </button>
        <button id="insertOrderedList" class="option-button">
          <div class="fa-solid fa-list-ol"></div>
        </button>
        <button id="insertUnorderedList" class="option-button">
          <i class="fa-solid fa-list"></i>
        </button>
      </div>
      <div id="text-input" contenteditable="true"></div>
      </div>
      <div class="editor__categories">
        <div class="editor__category">
          <label>Category</label>
          <input type="text" placeholder="Enter title">
        </div>
        <div class="editor__subCategory">
          <label>Sub Category</label>
          <input type="text" placeholder="Enter title">
        </div>
      </div>
      <div class="editor__tegs">
        <label>Tegs</label>
        <input type="text" placeholder="Enter title">
      </div>
      <div class="editor__price">
        <h4>Price</h4>
        <div class="editor__price--inner">
          <div>
            <button class="editor__price--btn">Free</button>
          </div>
          <div>
            <input type="text" placeholder="Enter price">
          </div>
        </div>

      </div>
    </div>
  </div>
 </div>
</template>

<script>
export default {
  name: "UploadEdit",
};

</script>

<style lang="scss">
.page__description {
  display: grid;
  grid-template-columns: 2fr 4fr;
  margin: 65px 35px;
}
.card{
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.16);
  width: 414px;
  height: 400px;
  margin-right: 28px;
  border-radius: 10px;
  &__name{
    font-family: var(--font-family);
  letter-spacing: 1px;
  line-height: 20px;
  padding: 34px 0;
  text-align: center;
  }
  &__image{
    img{
      width: 100%;
      height: 242px;
    }
  }
}

.card__btns{
  display: flex;
  justify-content: space-around;
  padding: 16px;
  &-reuploadBtn{
  }
  &-edit3dBtn{
    
  }
}

.editor{

}

label{
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  color: #000;
}

input{
  width: 100%;
  height: 56px;
  border: 1px solid #c7c8d2;
  border-radius: 4px;
  padding: 12px;
  letter-spacing: 0.1px;
  color: #2b2b43;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0;
}

.options {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #ccc;
  }
  button {
    height: 28px;
    width: 28px;
    display: grid;
    place-items: center;
    border-radius: 3px;
    border: none;
    background-color: #ccc;
    outline: none;
    color: #020929;

  }

  #text-input {
    margin-top: 10px;
    border: 1px solid #dddddd;
    padding: 20px;
    height: 50vh;
  }
  .active {
    background: #e0e9ff;
  }
</style>