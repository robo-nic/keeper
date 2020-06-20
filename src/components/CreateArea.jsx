import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import FAB from "@material-ui/core/Fab";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const [note, setNote] = React.useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function expandNoteArea() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onClick={expandNoteArea}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <FAB
            className="button"
            onClick={() => {
              props.addNote(note);
              setIsExpanded(false);
              setNote({
                title: "",
                content: "",
              });
            }}
          >
            <AddIcon />
          </FAB>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
