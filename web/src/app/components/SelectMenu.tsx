import Form from "react-bootstrap/Form";

function SelectMenu(props: { Items: string[] }) {
  return (
    <Form.Select>
      {props.Items.map((item: string) => {
        return <option value={item}>{item}</option>;
      })}
      <option value="">None</option>
    </Form.Select>
  );
}

export default SelectMenu;
