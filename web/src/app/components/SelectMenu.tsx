import Form from "react-bootstrap/Form";
import styles from "@/styles/TaskMenu.module.scss"

function SelectMenu(props: { Items: string[] }) {
  return (
    <Form.Select className={styles.SelectMenu}>
      {props.Items.map((item: string) => {
        return <option value={item}>{item}</option>;
      })}
      <option value="">None</option>
    </Form.Select>
  );
}

export default SelectMenu;
