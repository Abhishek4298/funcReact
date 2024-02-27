export const handleImageError = (event) => {
  event.target.src =
    "https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg";
  event.target.alt = "Image not found";
};

export const shop_content = [
  {
    sh_no: 1,
    sh_title: "12 Red Carnations",
    sh_name: "Gift roses ",
    sh_post: "Software Engineer",
    sh_image: (
      <img
        src="https://source.unsplash.com/1600x900/?rose"
        alt="1flowerImage"
        onError={handleImageError}
      />
    ),
    sh_descr: "This is Link company that builds websites, web ",
  },
  {
    sh_no: 2,
    sh_title: "roses in Basket",
    sh_name: "Joyful Baskets Love",
    sh_image: (
      <img
        src="https://source.unsplash.com/1600x900/?jasmine"
        alt="1flowerImage"
        onError={handleImageError}
      />
    ),
    sh_descr: "This is Link company that builds websites, web ",
  },
  {
    sh_no: 3,
    sh_title: "Orchid",
    sh_name: "Admirable Orchid",
    sh_post: "Sr. Software Engineer",
    sh_image: (
      <img
        src="https://source.unsplash.com/1600x900/?flower"
        alt="1Image"
        onError={handleImageError}
      />
    ),
    sh_descr: "This is Link company that builds websites, web ",
  },
];
export const about_page = [
  {
    ab_no: 1,
    ab_name: "Khushboo",
    ab_post: "Manager",
    ab_email: "nikita.bhangadiya@bacancy.com.com",
    ab_image: (
      <img
        className="photo"
        src="https://cdn2.iconfinder.com/data/icons/avatars-2-7/128/37-512.png"
        alt="1Image"
        styles="width:100%"
        onError={handleImageError}
      />
    ),
    ab_contact: "12345678",
  },
  {
    ab_no: 2,
    ab_name: "Darshan",
    ab_post: "Sr. Software Engineer",
    ab_email: "darshan.gauswami@bacancy.com",
    ab_image: (
      <img
        className="photo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR91lQXh61zr8mPF0F9Ikqsi7iMFeb6kcrX45MwobCVSY7zOaqDXsZu7wtwlE7lWJNCKZw&usqp=CAU	"
        alt="1Image"
        styles="width:100%"
        onError={handleImageError}
      />
    ),
    ab_contact: "8141393254",
  },
  {
    ab_no: 3,
    ab_name: "Abhishek",
    ab_post: "Software Engineer",
    ab_email: "abhishek.bhavsar@bacancy.com",
    ab_image: (
      <img
        className="photo"
        src="https://source.unsplash.com/1600x900/?developer"
        alt="1Image"
        styles="width:100%"
        onError={handleImageError}
      />
    ),
    ab_contact: "7227885771",
  },
];