gsap.to("#trigger-1", { duration: 1, opacity: 1, y: -50 });

const comments = [
  {
    name: "Itachi",
    avatarUrl:
      "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest?cb=20210225204731&path-prefix=ru",
    message: "I want to use sharingan!!!",
  },
  {
    name: "lil peep",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/23/Lil-Peep_PrettyPuke_Photoshoot.png",
    message:
      "Many men have tried to save her but all they do is try Woke up on a lonely day, she can't help but wonder why? I saw it on her face, she want to make those fuckers cry She ends up in a better place inside when she get high",
  },
  {
    name: "Post Malone",
    avatarUrl:
      "https://i.scdn.co/image/ab6761610000e5eb6be070445b03e0b63147c2c1",
    message:
      "Needless to say, I keep her in check She was a bad-bad, nevertheless (yeah) Callin' it quits now, baby, I'm a wreck (wreck) Crash at my place, baby, you're a wreck (wreck)",
  },
  {
    name: "Lil Nas X",
    avatarUrl:
      "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1189836609.jpg?resize=1200:*",
    message:
      "The first verse is like a flex, basically. It’s like I have these things, but I’m going to make these things work, and I’m going to make these things work better than what you have, basically.",
  },
];

$(document).ready(function () {
  // products carousel
  const $buttonPrevious = $("#product-previous-btn");
  const $buttonNext = $("#product-next-btn");
  const $productItemsWrapper = $("#product-items-wrapper");

  let itemWidth = $productItemsWrapper.find(".item-wrapper").outerWidth();

  const nextProduct = () => {
    $productItemsWrapper.animate({ scrollLeft: "+=" + itemWidth }, 500);
  };

  const previosProduct = () => {
    $productItemsWrapper.animate({ scrollLeft: "-=" + itemWidth }, 500);
  };

  // Add a resize event listener
  $(window).on("resize", () => {
    // Update the itemWidth variable
    itemWidth = $productItemsWrapper.find(".item-wrapper").outerWidth();
  });

  $buttonNext.on("click", nextProduct);
  $buttonPrevious.on("click", previosProduct);

  // products carousel end
  // comments carousel
  // const $tabsBtns = $("#tabs-btns");
  // const $commentWrapper = $("#comment-wrapper");

  const $commentWrapper = $(".comment-wrapper .content");

  for (i = 0; i <= comments.length - 1; i++) {
    console.log(comments[i]);
    const btn = `
    <button class="nav-tab-btn"></button>
    `;
    $("#tabs-btns").append(btn);
  }

  const setComment = function() {
    // remove active class from all tabs
    $("#tabs-btns .nav-tab-btn").removeClass("active");

    // add active class to clicked tab
    $(this).addClass("active");

    // clear existing comments
    $commentWrapper.empty();

    const index = $(this).index();

    // loop through comments array and generate HTML for each comment
    const comment = comments[index];
    const html = `
        <div class="client-info-wrapper d-flex">
          <div class="avatar">
            <img src="${comment.avatarUrl}" alt="" />
          </div>
          <div class="text-info">
            <div>
              <i class="iconify icon" data-icon="mdi:comma"></i>
            </div>
            <div class="name">${comment.name}</div>
          </div>
        </div>
        <div class="content">
          ${comment.message}
        </div>
      `;
    $commentWrapper.append(html);
    // animate the appearance of the comment
    $commentWrapper.children().last().hide().slideDown();
  };

  $("#tabs-btns").on("click", ".nav-tab-btn", setComment);
});
