<template>
  <form class="container">
    <label class="upload">
      <div class="upload__image">
        <img src="../images/upload.svg">
      </div>
      <div class="upload__title">
        Drag & Drop or <span class="upload__title--browse">browse</span>
      </div>
      <div class="upload__text">
        <p>We support <span class="upload__text--bold">FBX, OBJ, DAE, BLEND, STL,</span> and <a href="#">many
            others</a>.</p>
        <p>You can also upload an archive like <span class="upload__text--bold">ZIP, RAR,</span> or 7z, containing
          your textures, materials, and mesh.</p>
        <p>If you aren’t sure,<a href="#">follow our guide</a> or try our <a href="#">exporters</a> to upload
          directly
          from your favorite software.</p>
      </div>
      <input type="file">
    </label>
  </form>
</template>

<script>

export default {
  name: "UploadDragDrop"
}
</script>

<style>
.container {
  width: 100%;
  margin: 0 auto;
}

.upload {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 80px 0;
  border-radius: 3px;
  border: 2px dashed #ccc;
  background-color: #fff;
}

.upload input {
  display: none;
}

.upload__image img {
  height: 290px;
  max-width: 100%;
  margin: 135px 0 100px;
  cursor: pointer;
  transition: transform .4s cubic-bezier(.08, .57, .13, 1.5);
}

.upload__image img:hover {
  transform: scale(1.05);
}

.upload__title {
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 50px;
  cursor: pointer;
}

.upload__title--browse {
  color: #30A9D8;
}

.upload__text {
  margin-bottom: 50px;
}

.upload__text p {
  font-size: 24px;
  text-align: center;
  margin: 3px 0;
}

.upload__text--bold {
  font-family: sans-serif;
  font-weight: 600;
}

.upload__text a {
  color: #30A9D8;
}
</style>