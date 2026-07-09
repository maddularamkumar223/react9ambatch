import DisplayPosts from "./DisplayPosts";
import Users from "./Users";
import Style from "./homepage.module.css";

const HomePage = () => {
  return (
    <section className={Style.homepageContainer}>
      <article className={Style.displayPost}>
        <DisplayPosts />
      </article>
      <article className={Style.displayUsers}>
        <Users />
      </article>
    </section>
  );
};

export default HomePage;
