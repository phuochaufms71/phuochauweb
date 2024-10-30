import classNames from "classnames/bind";
import styles from "./ItemProject.module.scss";
import { list } from "../index.js";

const ItemProject = () => {
    const cx = classNames.bind(styles);
    console.log(list)
  return (
      <div className={cx("list")}>
          {
            list?.map((item, index) => (
                <div key={index} className={cx("item")}>
                    <h3 className={cx("item__title")}>{item?.title}</h3>
                    <p className={cx("item__code")}>Code: {item?.code}</p>
                    <img className={cx("item__img")} src={item?.image} alt="" />
                </div>
              ))
            }
      </div>
  )
}

export default ItemProject;
