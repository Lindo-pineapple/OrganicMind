type NoteType = {
  id: number;
  title: string;
  color: string;
  text: string;
};

type Tag = {
  tagName: string;
  tagColor: string;
};

type List = {
  listName: string;
  listColor: string;
}

type Task = {
  id: number;
  title: string;
  description?: string;
  list?: List;
  isDone: boolean;
  dueDate?: string;
  tags?: Tag[];
  subtasks?: Task[];
};
