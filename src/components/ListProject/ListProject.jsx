import ItemProject from "../ItemProject/ItemProject";
import styles from "./ListProject.module.scss";
import classNames from "classnames/bind";

const ListProject = () => {
    const cx = classNames.bind(styles);
  return (
    <div className={cx("list")}>
        <ItemProject />
    </div>
  )
}

export default ListProject;
