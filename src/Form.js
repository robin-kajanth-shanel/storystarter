import React from "react";

const Form = (props) => {
  return (
    <>
      <form action="" className="writingForm">
        <label htmlFor="title" className="sr-only">
          Title
        </label>
        <input
          autoFocus
          type="text"
          className="title"
          id="title"
          placeholder="Title"
          onChange={props.saveTitle}
        />
        <label htmlFor="writingField" className="sr-only">
          Writing Field
        </label>
        <textarea
          id="writingField"
          cols="30"
          rows="10"
          disabled={props.disableForm}
          onChange={props.saveMessage}
        ></textarea>
        <div className="outer">
          <div className="inner"></div>
        </div>
        <div className="formBottomBar">
          <p>Word Count: {props.wordCount}</p>
          <button type="reset" onClick={props.enableForm}>
            Clear
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;