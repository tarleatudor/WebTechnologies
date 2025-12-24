import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks, addBook, saveBook, deleteBook } from "../actions/index";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const bookSelector = state => state.book.bookList;

function BookList() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDialogShown, setIsDialogShown] = useState(false);
  const [isNewRecord, setIsNewRecord] = useState(true);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const dispatch = useDispatch();
  const books = useSelector(bookSelector);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleAddClick = () => {
    setIsDialogShown(true);
    setIsNewRecord(true);
    setTitle("");
    setContent("");
  };

  const tableFooter = (
    <div>
      <Button label="Add" icon="pi pi-plus" onClick={handleAddClick} />
    </div>
  );

  const hideDialog = () => {
    setIsDialogShown(false);
  };

  const handleSaveClick = () => {
    if (isNewRecord) {
      dispatch(addBook({ title, content })).then(() => dispatch(getBooks()));
    } else {
      dispatch(saveBook(selectedBookId, { title, content })).then(() =>
        dispatch(getBooks())
      );
    }

    setIsDialogShown(false);
    setIsNewRecord(true);
    setSelectedBookId(null);
    setTitle("");
    setContent("");
  };

  const dialogFooter = (
    <div>
      <Button label="Add" icon="pi pi-save" onClick={handleSaveClick} />
    </div>
  );

  const editBook = (rowData) => {
    setSelectedBookId(rowData.id);
    setTitle(rowData.title);
    setContent(rowData.content);
    setIsNewRecord(false);
    setIsDialogShown(true);
  };

  const handleDelete = (rowData) => {
    dispatch(deleteBook(rowData.id)).then(() => dispatch(getBooks()));
  };

  const opsColumn = (rowData) => (
    <div>
      <Button
        label="Edit"
        icon="pi pi-pencil"
        onClick={() => editBook(rowData)}
      />
      <Button
        label="Delete"
        icon="pi pi-trash"
        className="p-button-danger"
        onClick={() => handleDelete(rowData)}
      />
    </div>
  );

  return (
    <>
      <DataTable value={books} footer={tableFooter}>
        <Column header="Title" field="title" />
        <Column header="Content" field="content" />
        <Column body={opsColumn} />
      </DataTable>
      <Dialog
        header="a book"
        onHide={hideDialog}
        visible={isDialogShown}
        footer={dialogFooter}
      >
        <div>
          <InputText
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <InputText
            placeholder="content"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </div>
      </Dialog>
    </>
  );
}

export default BookList;
