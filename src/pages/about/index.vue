<template>
  <main class="full-wrapper" id="home-section">
    <Header :title="'About us'" :sub_title="'Home : About us'"/>
    <div class="about">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-11">
            <div class="section_title justify-content-center">
              <div
                class="title_icon anim_top"
                data-sr-id="1"
              >
                <img src="/assets/images/element-2.png" alt=""/>
              </div>
              <h2
                class="main_title mb-4 pb-2 anim_top"
                data-sr-id="3"
              >
                Raritex is a Largest Online Marketplace to Buy &amp; Sell Models
              </h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-11">
            <div class="section_desc padding_bottom_100">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).It
                is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their
              </p>
            </div>
            <div class="video_content" id="video_content">
              <video id="video_file">
                <source
                  src="/assets/images/singlevideo.mp4"
                  type="video/mp4"
                />
              </video>
              <button
                class="button button--flex video_button"
                id="video_button"
              >
                <i class="fa-play fas video_button-icon" id="video_icon"></i>
              </button>
              <div
                class="video_poster"
                style="background-image: url('/assets/images/video-poster-2.jpg')"
              ></div>
            </div>
            <div class="padding_100">
              <div class="row g-0 counter_row">
                <div class="col-lg-4">
                  <div class="counter_box">
                    <div class="number gr_text">
                      <span class="prefix">$</span><span class="count">380</span
                    ><span class="suffix">M</span>
                    </div>
                    <h6 class="label">Trading volume</h6>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="counter_box border_box">
                    <div class="number gr_text">
                      <span class="prefix"></span><span class="count">356</span
                    ><span class="suffix">K</span>
                    </div>
                    <h6 class="label">Models Created</h6>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="counter_box">
                    <div class="number gr_text">
                      <span class="prefix"></span><span class="count">138</span
                    ><span class="suffix">M</span>
                    </div>
                    <h6 class="label">Total User</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-4 g-xl-5 align-items-center big_space">
          <div class="col-sm-3">
            <div class="hexagone_shape">
              <svg viewBox="0 0 800 916" fill="none" version="1.1">
                <image
                  xlink:href="/assets/images/hexagone_image_1.png"
                  width="100%"
                  height="100%"
                  mask="url(#mask0_604_1)"
                ></image>
              </svg>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="hexagone_shape">
              <svg
                viewBox="0 0 800 916"
                points="100,10 40,198 190,78 10,78 160,198"
                fill="none"
                version="1.1"
              >
                <image
                  xlink:href="/assets/images/hexagone_image_2.png"
                  width="100%"
                  height="100%"
                  mask="url(#mask0_604_1)"
                ></image>
              </svg>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="hexagone_shape">
              <svg viewBox="0 0 800 916" fill="none" version="1.1">
                <image
                  xlink:href="/assets/images/hexagone_image_3.png"
                  width="100%"
                  height="100%"
                  mask="url(#mask0_604_1)"
                ></image>
              </svg>
            </div>
          </div>
        </div>
        <div class="client_logo_area section_padding-top">
          <div class="container">
            <div class="row mb-5 pb-lg-2">
              <div class="col-lg-12">
                <div class="section_small_title">
                  <h6
                    class="main_title anim_top"
                    data-sr-id="4"
                  >
                    Backed by
                  </h6>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="swiper-container patner_slider anim_right">
                <Swiper class="swiper-wrapper" :options="swiperOption">
                  <SwiperSlide class="swiper-slide">
                    <div class="single_item">
                      <img src="/assets/images/patner-1.png" alt="">
                    </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <div class="single_item">
                      <img src="/assets/images/patner-2.png" alt="">
                    </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <div class="single_item">
                      <img src="/assets/images/patner-3.png" alt="">
                    </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <div class="single_item">
                      <img src="/assets/images/patner-4.png" alt="">
                    </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <div class="single_item">
                      <img src="/assets/images/patner-5.png" alt="">
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <section class="team_area section_padding">
          <div class="container">
            <div class="row mb-5 pb-lg-2">
              <div class="col-lg-12">
                <div class="section_title align-items-center">
                  <div
                    class="title_icon anim_top"
                    data-sr-id="5"
                  >
                    <img
                      src="/assets/images/element-2.png"
                      alt=""
                    />
                  </div>
                  <h2
                    class="main_title anim_top"
                    data-sr-id="6"
                  >
                    Meet Our Didicated Team
                  </h2>
                </div>
              </div>
            </div>
            <div class="row g-5 row5">
              <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div class="team_box">
                  <div class="team_image">
                    <svg viewBox="0 0 800 916" fill="none" version="1.1">
                      <image
                        xlink:href="/assets/images/team_1.jpg"
                        width="100%"
                        height="100%"
                        mask="url(#mask0_604_1)"
                      ></image>
                    </svg>
                  </div>
                  <div class="team_content">
                    <h5 class="team_name">
                      <a href="author-profile.html">Eleanor Pena</a>
                    </h5>
                    <div class="team_position">Founder &amp; CO</div>
                    <div class="team_social">
                      <a href="https://www.youtube.com/" target="_blank"
                      ><i class="fab fa-youtube"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-twitter"></i
                      ></a>
                      <a href="https://www.facebook.com/" target="_blank"
                      ><i class="fab fa-facebook-f"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-instagram"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div class="team_box">
                  <div class="team_image">
                    <svg viewBox="0 0 800 916" fill="none" version="1.1">
                      <image
                        xlink:href="/assets/images/team_2.jpg"
                        width="100%"
                        height="100%"
                        mask="url(#mask0_604_1)"
                      ></image>
                    </svg>
                  </div>
                  <div class="team_content">
                    <h5 class="team_name">
                      <a href="author-profile.html">Bessie Cooper</a>
                    </h5>
                    <div class="team_position">Founder &amp; CO</div>
                    <div class="team_social">
                      <a href="https://www.youtube.com/" target="_blank"
                      ><i class="fab fa-youtube"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-twitter"></i
                      ></a>
                      <a href="https://www.facebook.com/" target="_blank"
                      ><i class="fab fa-facebook-f"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-instagram"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div class="team_box">
                  <div class="team_image">
                    <svg viewBox="0 0 800 916" fill="none" version="1.1">
                      <image
                        xlink:href="/assets/images/team_3.jpg"
                        width="100%"
                        height="100%"
                        mask="url(#mask0_604_1)"
                      ></image>
                    </svg>
                  </div>
                  <div class="team_content">
                    <h5 class="team_name">
                      <a href="author-profile.html">Darlene Robertson</a>
                    </h5>
                    <div class="team_position">Founder &amp; CO</div>
                    <div class="team_social">
                      <a href="https://www.youtube.com/" target="_blank"
                      ><i class="fab fa-youtube"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-twitter"></i
                      ></a>
                      <a href="https://www.facebook.com/" target="_blank"
                      ><i class="fab fa-facebook-f"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-instagram"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div class="team_box">
                  <div class="team_image">
                    <svg viewBox="0 0 800 916" fill="none" version="1.1">
                      <image
                        xlink:href="/assets/images/team_4.jpg"
                        width="100%"
                        height="100%"
                        mask="url(#mask0_604_1)"
                      ></image>
                    </svg>
                  </div>
                  <div class="team_content">
                    <h5 class="team_name">
                      <a href="author-profile.html">Cody Fisher</a>
                    </h5>
                    <div class="team_position">Founder &amp; CO</div>
                    <div class="team_social">
                      <a href="https://www.youtube.com/" target="_blank"
                      ><i class="fab fa-youtube"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-twitter"></i
                      ></a>
                      <a href="https://www.facebook.com/" target="_blank"
                      ><i class="fab fa-facebook-f"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-instagram"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div class="team_box">
                  <div class="team_image">
                    <svg viewBox="0 0 800 916" fill="none" version="1.1">
                      <image
                        xlink:href="/assets/images/team_5.jpg"
                        width="100%"
                        height="100%"
                        mask="url(#mask0_604_1)"
                      ></image>
                    </svg>
                  </div>
                  <div class="team_content">
                    <h5 class="team_name">
                      <a href="author-profile.html">Jacob Jones</a>
                    </h5>
                    <div class="team_position">Founder &amp; CO</div>
                    <div class="team_social">
                      <a href="https://www.youtube.com/" target="_blank"
                      ><i class="fab fa-youtube"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-twitter"></i
                      ></a>
                      <a href="https://www.facebook.com/" target="_blank"
                      ><i class="fab fa-facebook-f"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-instagram"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div class="team_box">
                  <div class="team_image">
                    <svg viewBox="0 0 800 916" fill="none" version="1.1">
                      <image
                        xlink:href="/assets/images/team_6.jpg"
                        width="100%"
                        height="100%"
                        mask="url(#mask0_604_1)"
                      ></image>
                    </svg>
                  </div>
                  <div class="team_content">
                    <h5 class="team_name">
                      <a href="author-profile.html">Courtney Henry</a>
                    </h5>
                    <div class="team_position">Founder &amp; CO</div>
                    <div class="team_social">
                      <a href="https://www.youtube.com/" target="_blank"
                      ><i class="fab fa-youtube"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-twitter"></i
                      ></a>
                      <a href="https://www.facebook.com/" target="_blank"
                      ><i class="fab fa-facebook-f"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-instagram"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div class="team_box">
                  <div class="team_image">
                    <svg viewBox="0 0 800 916" fill="none" version="1.1">
                      <image
                        xlink:href="/assets/images/team_7.jpg"
                        width="100%"
                        height="100%"
                        mask="url(#mask0_604_1)"
                      ></image>
                    </svg>
                  </div>
                  <div class="team_content">
                    <h5 class="team_name">
                      <a href="author-profile.html">Ronald Richards</a>
                    </h5>
                    <div class="team_position">Founder &amp; CO</div>
                    <div class="team_social">
                      <a href="https://www.youtube.com/" target="_blank"
                      ><i class="fab fa-youtube"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-twitter"></i
                      ></a>
                      <a href="https://www.facebook.com/" target="_blank"
                      ><i class="fab fa-facebook-f"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-instagram"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div class="team_box">
                  <div class="team_image">
                    <svg viewBox="0 0 800 916" fill="none" version="1.1">
                      <image
                        xlink:href="/assets/images/team_8.jpg"
                        width="100%"
                        height="100%"
                        mask="url(#mask0_604_1)"
                      ></image>
                    </svg>
                  </div>
                  <div class="team_content">
                    <h5 class="team_name">
                      <a href="author-profile.html">Theresa Webb</a>
                    </h5>
                    <div class="team_position">Founder &amp; CO</div>
                    <div class="team_social">
                      <a href="https://www.youtube.com/" target="_blank"
                      ><i class="fab fa-youtube"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-twitter"></i
                      ></a>
                      <a href="https://www.facebook.com/" target="_blank"
                      ><i class="fab fa-facebook-f"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-instagram"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div class="team_box">
                  <div class="team_image">
                    <svg viewBox="0 0 800 916" fill="none" version="1.1">
                      <image
                        xlink:href="/assets/images/team_9.jpg"
                        width="100%"
                        height="100%"
                        mask="url(#mask0_604_1)"
                      ></image>
                    </svg>
                  </div>
                  <div class="team_content">
                    <h5 class="team_name">
                      <a href="author-profile.html">Kristin Watson</a>
                    </h5>
                    <div class="team_position">Founder &amp; CO</div>
                    <div class="team_social">
                      <a href="https://www.youtube.com/" target="_blank"
                      ><i class="fab fa-youtube"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-twitter"></i
                      ></a>
                      <a href="https://www.facebook.com/" target="_blank"
                      ><i class="fab fa-facebook-f"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-instagram"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div class="team_box">
                  <div class="team_image">
                    <svg viewBox="0 0 800 916" fill="none" version="1.1">
                      <image
                        xlink:href="/assets/images/team_10.jpg"
                        width="100%"
                        height="100%"
                        mask="url(#mask0_604_1)"
                      ></image>
                    </svg>
                  </div>
                  <div class="team_content">
                    <h5 class="team_name">
                      <a href="author-profile.html">Cameron Williamson</a>
                    </h5>
                    <div class="team_position">Founder &amp; CO</div>
                    <div class="team_social">
                      <a href="https://www.youtube.com/" target="_blank"
                      ><i class="fab fa-youtube"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-twitter"></i
                      ></a>
                      <a href="https://www.facebook.com/" target="_blank"
                      ><i class="fab fa-facebook-f"></i
                      ></a>
                      <a href="javascript:void(0)"
                      ><i class="fab fa-instagram"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row text-center mt-5 pt-2">
              <div class="col-lg-12">
                <a href="javascript:void(0)" class="primary_button"
                >Join with us</a
                >
              </div>
            </div>
          </div>
        </section>
        <section class="blog_area section_padding-bottom">
          <div class="container">
            <div class="row mb-5 pb-lg-2">
              <div class="col-lg-12">
                <div class="section_title align-items-center">
                  <div
                    class="title_icon anim_top"
                    data-sr-id="7"
                  >
                    <img
                      src="/assets/images/element-2.png"
                      alt=""
                    />
                  </div>
                  <h2
                    class="main_title anim_top"
                    data-sr-id="8"
                  >
                    Read Raritex Blog &amp; Article
                  </h2>
                </div>
              </div>
            </div>
            <div class="row g-5">
              <div class="col-lg-6">
                <div class="post_box grid_post left_align">
                  <figure class="thumb">
                    <img
                      src="/assets/images/post-sq-1.jpg"
                      alt=""
                    />
                  </figure>
                  <div class="content">
                    <h3 class="title">
                      <a href="blog-details.html"
                      >Seussian by eniosta: a surrealist escape</a
                      >
                    </h3>
                    <div class="desc">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available
                      </p>
                    </div>
                    <div class="author">
                      <div class="pic">
                        <img
                          src="/assets/images/user_7.png"
                          alt=""
                        />
                      </div>
                      <strong>By:</strong> Halina Spond
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="post_box grid_post left_align">
                  <figure class="thumb">
                    <img
                      src="/assets/images/post-sq-2.jpg"
                      alt=""
                    />
                  </figure>
                  <div class="content">
                    <h3 class="title">
                      <a href="blog-details.html"
                      >Seussian by eniosta: a surrealist escape</a
                      >
                    </h3>
                    <div class="desc">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available
                      </p>
                    </div>
                    <div class="author">
                      <div class="pic">
                        <img
                          src="/assets/images/user_7.png"
                          alt=""
                        />
                      </div>
                      <strong>By:</strong> Halina Spond
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="post_box grid_post left_align">
                  <figure class="thumb">
                    <img
                      src="/assets/images/post-sq-3.jpg"
                      alt=""
                    />
                  </figure>
                  <div class="content">
                    <h3 class="title">
                      <a href="blog-details.html"
                      >Seussian by eniosta: a surrealist escape</a
                      >
                    </h3>
                    <div class="desc">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available
                      </p>
                    </div>
                    <div class="author">
                      <div class="pic">
                        <img
                          src="/assets/images/user_7.png"
                          alt=""
                        />
                      </div>
                      <strong>By:</strong> Halina Spond
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="post_box grid_post left_align">
                  <figure class="thumb">
                    <img
                      src="/assets/images/post-sq-4.jpg"
                      alt=""
                    />
                  </figure>
                  <div class="content">
                    <h3 class="title">
                      <a href="blog-details.html"
                      >Seussian by eniosta: a surrealist escape</a
                      >
                    </h3>
                    <div class="desc">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available
                      </p>
                    </div>
                    <div class="author">
                      <div class="pic">
                        <img
                          src="/assets/images/user_7.png"
                          alt=""
                        />
                      </div>
                      <strong>By:</strong> Halina Spond
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row text-center mt-5 pt-2">
              <div class="col-lg-12">
                <a href="blog-grid.html" class="primary_button">Blog More</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "@/components/global/Header";
import {Swiper, SwiperSlide} from "vue-awesome-swiper";

export default {
  name: "ContactPage",
  components: {
    Header,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        initialSlide: 4,
        loop: true,
        speed: 1000,
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.about {
  width: 100%;
  padding-top: 100px;
  border-top: 1px solid transparent;
  border-image: url(@/assets/images/comment-bottom-line.png) 100 stretch;
  display: flex;
  justify-content: center;
}

.hexagone_shape {
  clip-path: polygon(
    50% 0,
    50% 0,
    100% 30%,
    100% 70%,
    50% 100%,
    50% 100%,
    0% 70%,
    0% 30%
  );
}

.team_image {
  clip-path: polygon(
    50% 0,
    50% 0,
    100% 30%,
    100% 70%,
    50% 100%,
    50% 100%,
    0% 70%,
    0% 30%
  );
}
</style>
