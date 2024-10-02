<template>
  <div id="list-of-diaries" class="container">
    <div ref="preview" class="preview">
      <div ref="preview-img" class="preview-img"></div>
    </div>
    <div class="diary" id="list-header">
      <div class="title"><p>Title</p></div>
      <div class="month"><p>Month</p></div>
      <div class="day"><p>Day</p></div>
      <div class="year"><p>Year</p></div>
    </div>
    <div
      class="diary"
      @mousemove="onMouseMoveDiary"
      @mouseleave="onMouseLeaveDiary"
    >
      <div class="title"><p>My first day in university</p></div>
      <div class="month"><p>01</p></div>
      <div class="day"><p>10</p></div>
      <div class="year"><p>2024</p></div>
      <div class="hover-reveal-image">
        <img
          src="../../../assets/images/default_image.png"
          alt="My first day in university"
        />
      </div>
    </div>
    <div
      class="diary"
      @mousemove="onMouseMoveDiary"
      @mouseleave="onMouseLeaveDiary"
    >
      <div class="title"><p>New gift</p></div>
      <div class="month"><p>07</p></div>
      <div class="day"><p>15</p></div>
      <div class="year"><p>2024</p></div>
      <div class="hover-reveal-image">
        <img src="../../../assets/images/default_image.png" alt="New gift" />
      </div>
    </div>
    <div
      class="diary"
      @mousemove="onMouseMoveDiary"
      @mouseleave="onMouseLeaveDiary"
    >
      <div class="title"><p>I am learning new things</p></div>
      <div class="month"><p>02</p></div>
      <div class="day"><p>07</p></div>
      <div class="year"><p>2023</p></div>
      <div class="hover-reveal-image">
        <img
          src="../../../assets/images/default_image.png"
          alt="I am learning new things"
        />
      </div>
    </div>
    <div
      class="diary"
      @mousemove="onMouseMoveDiary"
      @mouseleave="onMouseLeaveDiary"
    >
      <div class="title"><p>My brother</p></div>
      <div class="month"><p>03</p></div>
      <div class="day"><p>01</p></div>
      <div class="year"><p>2021</p></div>
      <div class="hover-reveal-image">
        <img src="../../../assets/images/default_image.png" alt="My brother" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";

function onMouseMoveDiary(el) {
  const image = el.target.querySelector(".hover-reveal-image");
  gsap.to(image, {
    opacity: 1,
    y: "-50%",
    x: "-100%",
    rotate: "5deg",
    duration: 0.5,
    delay: 0,
    scale: 1.1,
    left: el.clientX,
    ease: "ease-in-out",
  });
}

function onMouseLeaveDiary(el) {
  const image = el.target.querySelector(".hover-reveal-image");
  gsap.to(image, {
    opacity: 0,
    duration: 0.5,
    delay: 0,
    y: "-50%",
    x: "-50%",
    rotate: "-5deg",
    scale: 0.8,
    ease: "ease-in-out",
  });
}
</script>
