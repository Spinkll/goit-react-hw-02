import css from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.other_info}>@{tag}</p>
        <p className={css.other_info}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.list_item}>
          <span>Followers</span>{" "}
          <span className={css.bold}>{stats.followers}</span>
        </li>
        <li className={css.list_item}>
          <span>Views</span> <span className={css.bold}>{stats.views}</span>
        </li>
        <li className={css.list_item}>
          <span>Likes</span> <span className={css.bold}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
